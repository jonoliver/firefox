# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

import os
import re
import subprocess
import sys
from abc import ABC, abstractmethod
from pathlib import Path


DIFF_REVISION_PATTERN = re.compile(
    r"Differential Revision:\s*(https://phabricator\.services\.mozilla\.com/D\d+)"
)
BUG_PATTERN = re.compile(r"BUG\s+(\d+)", re.IGNORECASE)
R_REVIEWER_PATTERN = re.compile(r"\s+r=.*$")
BUG_PREFIX_PATTERN = re.compile(r"^bug\s+\d+\s*[-:]\s*", re.IGNORECASE)


class RepoReader(ABC):
    def __init__(self, repo_root):
        self.repo_root = repo_root

    @classmethod
    def create(cls, repo_root):
        if os.path.exists(os.path.join(repo_root, ".git")):
            return GitRepoReader(repo_root)
        if os.path.exists(os.path.join(repo_root, ".hg")):
            return MercurialRepoReader(repo_root)
        return None

    def _run_log_cmd(self, cmd):
        try:
            result = subprocess.run(
                cmd,
                cwd=self.repo_root,
                capture_output=True,
                text=True,
                check=True,
            )
            return self._parse_output(result.stdout)
        except subprocess.CalledProcessError:
            return []

    def _parse_output(self, output):
        commits = []
        chunks = output.split("==END==")
        for chunk in chunks:
            lines = chunk.strip().split("\n")
            if len(lines) < 3:
                continue
            hash_full = lines[0].strip()
            hash_short = hash_full[:12] if len(hash_full) > 12 else hash_full
            date = lines[1].strip()
            subject = lines[2].strip()
            body = "\n".join(lines[3:]).strip() if len(lines) > 3 else ""
            commits.append(
                {
                    "hash": hash_short,
                    "hash_full": hash_full,
                    "date": date,
                    "subject": subject,
                    "body": body,
                }
            )
        return commits

    @abstractmethod
    def get_commits(self, path): ...


class GitRepoReader(RepoReader):
    def get_commits(self, path):
        cmd = [
            "git",
            "log",
            "--no-merges",
            "--pretty=format:%H%n%as%n%s%n%b%n==END==",
            "HEAD",
            "--",
            path,
        ]
        return self._run_log_cmd(cmd)


class MercurialRepoReader(RepoReader):
    def get_commits(self, path):
        cmd = [
            "hg",
            "log",
            "--template",
            "{node}\n{date|shortdate}\n{desc}\n==END==\n",
            "--",
            path,
        ]
        return self._run_log_cmd(cmd)


def parse_commit_message(commit):
    subject = commit["subject"]
    body = commit["body"]
    full_message = f"{subject}\n{body}" if body else subject

    bug_match = BUG_PATTERN.search(subject)
    bug_id = bug_match.group(1) if bug_match else None

    diff_rev_match = DIFF_REVISION_PATTERN.search(full_message)
    diff_rev_url = diff_rev_match.group(1) if diff_rev_match else None
    diff_rev_id = None
    if diff_rev_url:
        rev_match = re.search(r"/D(\d+)$", diff_rev_url)
        diff_rev_id = rev_match.group(1) if rev_match else None

    cleaned_subject = BUG_PREFIX_PATTERN.sub("", R_REVIEWER_PATTERN.sub("", subject)).strip()
    cleaned_body = DIFF_REVISION_PATTERN.sub("", body).strip() if body else ""
    message = cleaned_subject
    if cleaned_body:
        message = f"{cleaned_subject}\n{cleaned_body}"

    return {
        "hash": commit["hash"],
        "date": commit["date"],
        "bug_id": bug_id,
        "subject": subject,
        "message": message,
        "diff_rev_url": diff_rev_url,
        "diff_rev_id": diff_rev_id,
    }


def filter_commits(parsed_commits):
    bug_start_pattern = re.compile(r"^bug\s+\d+", re.IGNORECASE)
    filtered = [
        p for p in parsed_commits
        if bug_start_pattern.match(p["subject"].strip())
    ]

    seen_ids = set()
    result = []
    for p in filtered:
        if not p["diff_rev_id"]:
            continue
        if p["diff_rev_id"] in seen_ids:
            continue
        seen_ids.add(p["diff_rev_id"])
        result.append(p)
    return result


def format_changelog_entry(parsed):
    message = parsed["message"].strip()
    if "\n" in message:
        subject, body = message.split("\n", 1)
        body = body.strip()
    else:
        subject = message
        body = None

    lines = [f"### {subject}"]

    if body:
        lines.append("")
        lines.append(body)

    links = []
    if parsed["bug_id"]:
        bug_url = f"https://bugzilla.mozilla.org/show_bug.cgi?id={parsed['bug_id']}"
        links.append(f"- Bug: [{parsed['bug_id']}]({bug_url})")
    if parsed["diff_rev_url"] and parsed["diff_rev_id"]:
        links.append(f"- Revision: [D{parsed['diff_rev_id']}]({parsed['diff_rev_url']})")
        links.append(f"- Committed on: {parsed['date']}")

    if links:
        lines.append("")
        lines.extend(links)

    lines.append("")

    return "\n".join(lines)


def generate_changelog(repo_root, path, output_path):
    reader = RepoReader.create(repo_root)
    if not reader:
        print("Error: Could not detect VCS (git or hg)", file=sys.stderr)
        return False

    if not os.path.exists(os.path.join(repo_root, path)):
        print(f"Error: Path {path} does not exist", file=sys.stderr)
        return False

    commits = reader.get_commits(path)
    if not commits:
        print("No commits found.")
        return True

    parsed_commits = [parse_commit_message(c) for c in commits]
    parsed_commits = filter_commits(parsed_commits)
    entries = [format_changelog_entry(p) for p in parsed_commits]

    if not entries:
        print("No qualifying commits found.")
        return True

    write_changelog(output_path, entries, path)
    print(f"Generated {len(entries)} changelog entries.")
    return True


def write_changelog(output_path, entries, path):
    path_name = Path(path).name.replace("-", " ").title()
    entries_str = "\n".join(entries)
    content = f"# Changelog: {path_name}\n\n## Changes\n\n{entries_str}"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)

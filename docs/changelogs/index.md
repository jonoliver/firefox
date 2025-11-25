# Changelog Generation

This document describes how to generate and maintain changelogs for specific paths in the Firefox repository.

## Overview

The changelog generator reads the full commit history for a path and generates a changelog from it. It:

- Always rebuilds the changelog from scratch, so the output is always correct and consistent
- Only includes commits that have a Phabricator Differential Revision link
- Only includes commits whose message starts with `Bug <number>`
- Deduplicates entries by Differential Revision ID
- Is idempotent — running it multiple times produces the same result

## Usage

### Basic Usage

Generate a changelog for the design system:

```bash
./mach changelog generate --path toolkit/themes/shared/design-system
```

This will scan the full commit history for that path and write a `CHANGELOG.md` in that directory.

### Options

- `--path` (required): Path to generate changelog for
- `--output` (optional): Custom output file path (default: `<path>/CHANGELOG.md`)

## Output Format

```markdown
# Changelog: Design System

## Changes

### Bug 1234 - Add new color token for attention states

- Bug: [1234](https://bugzilla.mozilla.org/show_bug.cgi?id=1234)
- Revision: [D274000](https://phabricator.services.mozilla.com/D274000)
- Committed on: 2024-11-14

### Bug 5678 - Fix infinite loop in token processing

- Bug: [5678](https://bugzilla.mozilla.org/show_bug.cgi?id=5678)
- Revision: [D273903](https://phabricator.services.mozilla.com/D273903)
- Committed on: 2024-11-01
```

Each entry includes:
- Commit message (with reviewer annotations stripped)
- Bug number link
- Differential Revision link with the commit date

Entries are ordered newest first, matching git log order.

## Workflow

### Typical Workflow

1. Make changes and land them via Phabricator as normal
2. Run the changelog generator:
   ```bash
   ./mach changelog generate --path toolkit/themes/shared/design-system
   ```
3. Commit the updated `CHANGELOG.md` as a new patch or amend your existing one

### Catching Up

Since the tool always rebuilds from full history, you can run it at any time and it will produce a complete, correctly ordered changelog regardless of how long it has been since the last run or whether the file exists.

## Pre-Commit Hook (Optional)

An optional pre-commit hook can remind you to update the changelog when you modify design system files.

### Setup

1. Copy the hook script:
   ```bash
   cp tools/lint/hooks/pre-commit-changelog.py .git/hooks/pre-commit
   chmod +x .git/hooks/pre-commit
   ```

   Or for Mercurial:
   ```bash
   cp tools/lint/hooks/pre-commit-changelog.py .hg/hgrc
   # Add to [hooks] section: pre-commit = python:tools/lint/hooks/pre-commit-changelog.py
   ```

2. The hook is **non-blocking** — it only shows a reminder, never fails your commit

### What It Does

When you commit files in `toolkit/themes/shared/design-system/`, the hook prints a reminder to run the changelog generator. You can run it now, later, or skip it entirely.

## Troubleshooting

### "No qualifying commits found"

All commits in the path's history either don't start with `Bug <number>` or don't have a Differential Revision link. Both are required for an entry to be included.

### "Could not detect VCS"

Make sure you're running from the repository root, and that either `.git` or `.hg` exists.

### Missing entries

Entries are only generated for commits that:
1. Have a subject starting with `Bug <number>` (case-insensitive)
2. Were submitted via `moz-phab` or landed via Lando (so a `Differential Revision:` line is present in the commit message)

Commits that don't meet both criteria are intentionally excluded.

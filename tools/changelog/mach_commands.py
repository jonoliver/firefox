# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

import os
import sys

from mach.decorators import Command, CommandArgument

HERE = os.path.abspath(os.path.dirname(__file__))
if HERE not in sys.path:
    sys.path.insert(0, HERE)

from generate_changelog import generate_changelog


@Command(
    "changelog",
    category="misc",
    description="Generate changelogs from commit history",
)
@CommandArgument(
    "action",
    choices=["generate"],
    help="Action to perform",
)
@CommandArgument(
    "--path",
    required=True,
    help="Path to generate changelog for (e.g., toolkit/themes/shared/design-system)",
)
@CommandArgument(
    "--output",
    help="Output file path (default: <path>/CHANGELOG.md)",
)
def changelog(
    command_context,
    action,
    path,
    output=None,
):
    if action != "generate":
        command_context.log(
            command_context.logging.ERROR,
            "invalid_action",
            {},
            f"Unknown action: {action}",
        )
        return 1

    repo_root = command_context.topsrcdir
    if output is None:
        output = os.path.join(repo_root, path, "CHANGELOG.md")
    else:
        output = os.path.join(repo_root, output)

    success = generate_changelog(
        repo_root=repo_root,
        path=path,
        output_path=output,
    )

    return 0 if success else 1

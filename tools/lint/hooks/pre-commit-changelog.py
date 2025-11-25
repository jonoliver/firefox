#!/usr/bin/env python3
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

import os
import subprocess
import sys


def get_staged_files():
    if os.path.exists(".git"):
        result = subprocess.run(
            ["git", "diff", "--cached", "--name-only"],
            capture_output=True,
            text=True,
            check=False,
        )
        if result.returncode == 0:
            return result.stdout.strip().split("\n")
    elif os.path.exists(".hg"):
        result = subprocess.run(
            ["hg", "status", "--cached", "--no-status"],
            capture_output=True,
            text=True,
            check=False,
        )
        if result.returncode == 0:
            return result.stdout.strip().split("\n")
    return []


def check_design_tokens_changes():
    staged_files = get_staged_files()

    design_system_files = [
        f for f in staged_files
        if f.startswith("toolkit/themes/shared/design-system/")
    ]

    if design_system_files:
        print("\n⚠️  Design system files changed!")
        print("💡 Consider running: ./mach changelog generate --path toolkit/themes/shared/design-system")
        print("   (You can also do this later and submit as a separate patch)\n")

    return 0


if __name__ == "__main__":
    sys.exit(check_design_tokens_changes())


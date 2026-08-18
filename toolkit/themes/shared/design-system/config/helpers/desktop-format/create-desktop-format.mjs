/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { customFileHeader } from "../general/custom-file-header.mjs";
import { getTokenCSS } from "./get-token-css.mjs";
import { OVERRIDE_IDENTIFIERS } from "../general/override-identifiers.mjs";

export const createDesktopFormat =
  ({ surface, componentName } = {}) =>
  ({ dictionary, file }) => {
    let content = customFileHeader({ surface, file });
    content += getTokenCSS({ surface, componentName, dictionary });

    OVERRIDE_IDENTIFIERS.forEach(({ id, pref }) => {
      const overrideContent = getTokenCSS({
        surface,
        componentName,
        dictionary,
        overrideIdentifier: id,
      });
      if (overrideContent) {
        content += `\n\n@media -moz-pref("${pref}") {
  ${overrideContent}
}`;
      }
    });

    return `${content}\n`;
  };

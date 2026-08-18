/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getTokensByLayer } from "./get-tokens-by-layer.mjs";

export const getTokenCSS = ({
  surface,
  componentName,
  dictionary,
  overrideIdentifier,
}) => {
  let content = "";

  const { foundation, browserTheme, prefersContrast, forcedColors } =
    getTokensByLayer({
      surface,
      componentName,
      dictionary,
      overrideIdentifier,
    });

  if (foundation.length) {
    content += `@layer tokens-foundation${surface === "brand" ? "-brand" : ""}${overrideIdentifier ? `-${overrideIdentifier}` : ""} {
  :root,
  :host${componentName ? "" : "(.anonymous-content-host)"} {
    ${foundation.join("\n  ")}
  }
}`;
  }

  if (prefersContrast.length) {
    content += `\n\n/* Bug 1879900: Can't nest media queries inside of :host, :root selector
   until Bug 1879349 lands */
@layer tokens-prefers-contrast${overrideIdentifier ? `-${overrideIdentifier}` : ""} {
  @media (prefers-contrast) {
    :root,
    :host${componentName ? "" : "(.anonymous-content-host)"} {
      ${prefersContrast.join("\n      ")}
    }
  }
}`;
  }

  if (forcedColors.length) {
    content += `\n\n/* Bug 1879900: Can't nest media queries inside of :host, :root selector
   until Bug 1879349 lands */
@layer tokens-forced-colors${overrideIdentifier ? `-${overrideIdentifier}` : ""} {
  @media (forced-colors) {
    :root,
    :host${componentName ? "" : "(.anonymous-content-host)"} {
      ${forcedColors.join("\n      ")}
    }
  }
}`;
  }

  if ((surface === "platform" || componentName) && browserTheme.length) {
    content += `\n\n/* Bug 1879900: Can't nest media queries inside of :host, :root selector
   until Bug 1879349 lands */
@layer tokens-browser-theme${overrideIdentifier ? `-${overrideIdentifier}` : ""} {
  @media not ((forced-colors) or (-moz-native-theme)) {
    :root:is([theme-in-app], :not([lwtheme])),
    :host${componentName ? "" : "(.anonymous-content-host)"} {
      ${browserTheme.join("\n      ")}
    }
  }
}`;
  }

  return content;
};

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import stylelint from "stylelint";
import valueParser from "postcss-value-parser";
import {
  createTokenNamesArray,
  createAllowList,
  getLocalCustomProperties,
  isValidTokenUsage,
  namespace,
} from "../helpers.mjs";
import { tokensTable } from "../../../../../toolkit/themes/shared/design-system/tokens-table.mjs";

const {
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = namespace("use-font-size-tokens");

const messages = ruleMessages(ruleName, {
  rejected: value => `${value} should use a font-size design token.`,
});

const meta = {
  url: "https://firefox-source-docs.mozilla.org/code-quality/lint/linters/stylelint-plugin-mozilla/rules/use-font-size-tokens.html",
  fixable: true,
};

const PROPERTY_NAME = "font-size";

const tokenCSS = createTokenNamesArray([PROPERTY_NAME]);

const ALLOW_LIST = createAllowList([
  "xx-small",
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large",
  "xxx-large",
  "smaller",
  "larger",
  "inherit",
  "initial",
  "unset",
]);
const tableData = tokensTable["font-size"];

// Get root font size for px/rem conversions
const rootFontSize = tableData.find(({ name }) => name === "--font-size-root");
const rootFontSizePx = rootFontSize.value.brand.default.match(/(\d+)px/)[1];

const remToPx = remValue => {
  const rem = parseFloat(remValue);
  return `${Math.round(rem * rootFontSizePx)}px`;
};

const pxToRem = pxValue => {
  const px = parseFloat(pxValue);
  return `${(px / rootFontSizePx).toFixed(3)}rem`;
};

const tokenMaps = tableData.reduce((acc, item) => {
  const tokenVar = `var(${item.name})`;

  // Handle complex value objects (like font-size tokens)
  if (typeof item.value === "object" && item.value !== null) {
    // Extract the brand default value for font-size tokens
    if (item.value.brand && item.value.brand.default) {
      const defaultValue = item.value.brand.default;
      acc[defaultValue] = tokenVar;

      // Also map the pixel equivalent for rem values
      if (defaultValue.includes("rem")) {
        const pixelValue = remToPx(defaultValue);
        acc[pixelValue] = tokenVar;
      }

      // Also map the rem equivalent for pixel values
      if (defaultValue.includes("px")) {
        const remValue = pxToRem(defaultValue);
        acc[remValue] = tokenVar;
      }
    }
  } else {
    // Handle simple string values
    acc[item.value] = tokenVar;
  }

  return acc;
}, {});

const ruleFunction = primaryOption => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primaryOption,
      possible: [true],
    });

    if (!validOptions) {
      return;
    }

    const cssCustomProperties = getLocalCustomProperties(root);

    root.walkDecls(declarations => {
      // ignore properties other than font-size
      if (declarations.prop !== PROPERTY_NAME) {
        return;
      }

      if (
        isValidTokenUsage(
          declarations.value,
          tokenCSS,
          cssCustomProperties,
          ALLOW_LIST
        )
      ) {
        return;
      }

      report({
        message: messages.rejected(declarations.value),
        node: declarations,
        result,
        ruleName,
        fix: () => {
          const val = valueParser(declarations.value);
          let hasFixes = false;
          val.walk(node => {
            if (node.type == "word") {
              const token = tokenMaps[node.value];
              if (token) {
                hasFixes = true;
                node.value = token;
              }
            }
          });
          if (hasFixes) {
            declarations.value = val.toString();
          }
        },
      });
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default ruleFunction;

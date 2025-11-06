/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

// Bug 1948378: remove this exception when the eslint import plugin fully
// supports exports in package.json files
// eslint-disable-next-line import/no-unresolved
import { testRule } from "stylelint-test-rule-node";
import stylelint from "stylelint";
import useFontSizeTokens from "../rules/use-font-size-tokens.mjs";

let plugin = stylelint.createPlugin(
  useFontSizeTokens.ruleName,
  useFontSizeTokens
);
let {
  ruleName,
  rule: { messages },
} = plugin;

testRule({
  plugins: [plugin],
  ruleName,
  config: [true, { tokenType: "brand" }],
  fix: false,
  accept: [
    // allowed token values
    {
      code: ".a { font-size: var(--font-size-root); }",
      description: "Using root font-size token is valid.",
    },
    {
      code: ".a { font-size: var(--font-size-xsmall); }",
      description: "Using xsmall font-size token is valid.",
    },
    {
      code: ".a { font-size: var(--font-size-small); }",
      description: "Using small font-size token is valid.",
    },
    {
      code: ".a { font-size: var(--font-size-large); }",
      description: "Using large font-size token is valid.",
    },
    {
      code: ".a { font-size: var(--font-size-xlarge); }",
      description: "Using xlarge font-size token is valid.",
    },
    {
      code: ".a { font-size: var(--font-size-xxlarge); }",
      description: "Using xxlarge font-size token is valid.",
    },
    {
      code: ".a { font-size: var(--font-size-xxxlarge); }",
      description: "Using xxxlarge font-size token is valid.",
    },
    {
      code: ".a { font-size: var(--heading-font-size-medium); }",
      description: "Using heading-font-size-medium token is valid.",
    },
    {
      code: ".a { font-size: var(--heading-font-size-large); }",
      description: "Using heading-font-size-large token is valid.",
    },
    {
      code: ".a { font-size: var(--heading-font-size-xlarge); }",
      description: "Using heading-font-size-xlarge token is valid.",
    },
    // allowed CSS values
    {
      code: ".a { font-size: xx-small; }",
      description: "Using xx-small keyword is valid.",
    },
    {
      code: ".a { font-size: x-small; }",
      description: "Using x-small keyword is valid.",
    },
    {
      code: ".a { font-size: small; }",
      description: "Using small keyword is valid.",
    },
    {
      code: ".a { font-size: medium; }",
      description: "Using medium keyword is valid.",
    },
    {
      code: ".a { font-size: large; }",
      description: "Using large keyword is valid.",
    },
    {
      code: ".a { font-size: x-large; }",
      description: "Using x-large keyword is valid.",
    },
    {
      code: ".a { font-size: xx-large; }",
      description: "Using xx-large keyword is valid.",
    },
    {
      code: ".a { font-size: xxx-large; }",
      description: "Using xxx-large keyword is valid.",
    },
    {
      code: ".a { font-size: smaller; }",
      description: "Using smaller keyword is valid.",
    },
    {
      code: ".a { font-size: larger; }",
      description: "Using larger keyword is valid.",
    },
    {
      code: ".a { font-size: inherit; }",
      description: "Using inherit is valid.",
    },
    {
      code: ".a { font-size: initial; }",
      description: "Using initial is valid.",
    },
    {
      code: ".a { font-size: unset; }",
      description: "Using unset is valid.",
    },
    {
      code: ".a { font-size:var(--my-local, var(--font-size-small)); }",
      description:
        "Using a custom property with fallback to design token is valid.",
    },
    {
      code: `
        :root { --custom-token: var(--font-size-small); }
        .a { font-size: var(--custom-token); }
      `,
      description:
        "Using a custom property with fallback to a design token is valid.",
    },
  ],

  reject: [
    {
      code: ".a { font-size: 12px; }",
      message: messages.rejected("12px"),
      description: "Using a pixel value should use a design token.",
    },
    {
      code: ".a { font-size: 1rem; }",
      message: messages.rejected("1rem"),
      description: "Using a rem value should use a design token.",
    },
    {
      code: ".a { font-size: 1.2em; }",
      message: messages.rejected("1.2em"),
      description: "Using an em value should use a design token.",
    },
    {
      code: ".a { font-size: 100%; }",
      message: messages.rejected("100%"),
      description: "Using a percentage value should use a design token.",
    },
    {
      code: ".a { font-size: 16pt; }",
      message: messages.rejected("16pt"),
      description: "Using a pt value should use a design token.",
    },
    {
      code: ".a { font-size: calc(var(--my-local) + 2px); }",
      message: messages.rejected("calc(var(--my-local) + 2px)"),
      description:
        "Using a calc() with custom variables should use a design token.",
    },
    {
      code: ".a { font-size: var(--random-token, 14px); }",
      message: messages.rejected("var(--random-token, 14px)"),
      description: "Using a custom property should use a design token.",
    },
    {
      code: `
        :root { --custom-token: 14px; }
        .a { font-size: var(--custom-token); }
      `,
      message: messages.rejected("var(--custom-token)"),
      description:
        "Using a custom property that does not resolve to a design token should use a design token.",
    },
  ],
});

// autofix tests
testRule({
  plugins: [plugin],
  ruleName,
  config: true,
  fix: true,
  reject: [
    {
      code: ".a { font-size: 15px; }",
      fixed: ".a { font-size: var(--font-size-root); }",
      message: messages.rejected("15px"),
      description: "15px should be fixed to use --font-size-root token.",
    },
    {
      code: ".a { font-size: 11px; }",
      fixed: ".a { font-size: var(--font-size-xsmall); }",
      message: messages.rejected("11px"),
      description: "11px should be fixed to use --font-size-xsmall token.",
    },
    {
      code: ".a { font-size: 13px; }",
      fixed: ".a { font-size: var(--font-size-small); }",
      message: messages.rejected("13px"),
      description: "13px should be fixed to use --font-size-small token.",
    },
    {
      code: ".a { font-size: 17px; }",
      fixed: ".a { font-size: var(--font-size-large); }",
      message: messages.rejected("17px"),
      description: "17px should be fixed to use --font-size-large token.",
    },
    {
      code: ".a { font-size: 22px; }",
      fixed: ".a { font-size: var(--font-size-xlarge); }",
      message: messages.rejected("22px"),
      description: "22px should be fixed to use --font-size-xlarge token.",
    },
    {
      code: ".a { font-size: 24px; }",
      fixed: ".a { font-size: var(--font-size-xxlarge); }",
      message: messages.rejected("24px"),
      description: "24px should be fixed to use --font-size-xxlarge token.",
    },
    {
      code: ".a { font-size: 33px; }",
      fixed: ".a { font-size: var(--font-size-xxxlarge); }",
      message: messages.rejected("33px"),
      description: "33px should be fixed to use --font-size-xxxlarge token.",
    },
    {
      code: ".a { font-size: 0.733rem; }",
      fixed: ".a { font-size: var(--font-size-xsmall); }",
      message: messages.rejected("0.733rem"),
      description: "0.733rem should be fixed to use --font-size-xsmall token.",
    },
    {
      code: ".a { font-size: 0.867rem; }",
      fixed: ".a { font-size: var(--font-size-small); }",
      message: messages.rejected("0.867rem"),
      description: "0.867rem should be fixed to use --font-size-small token.",
    },
    {
      code: ".a { font-size: 1.133rem; }",
      fixed: ".a { font-size: var(--font-size-large); }",
      message: messages.rejected("1.133rem"),
      description: "1.133rem should be fixed to use --font-size-large token.",
    },
    {
      code: ".a { font-size: 1.467rem; }",
      fixed: ".a { font-size: var(--font-size-xlarge); }",
      message: messages.rejected("1.467rem"),
      description: "1.467rem should be fixed to use --font-size-xlarge token.",
    },
    {
      code: ".a { font-size: 1.6rem; }",
      fixed: ".a { font-size: var(--font-size-xxlarge); }",
      message: messages.rejected("1.6rem"),
      description: "1.6rem should be fixed to use --font-size-xxlarge token.",
    },
  ],
});

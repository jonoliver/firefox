# Changelog: Design System

## Changes

### Extract panel variables to `panels.css`

- Bug: [1988296](https://bugzilla.mozilla.org/show_bug.cgi?id=1988296)
- Revision: [D278608](https://phabricator.services.mozilla.com/D278608)
- Committed on: 2026-02-20

### Extract toolbox variables to `toolbar.css`

- Bug: [2009061](https://bugzilla.mozilla.org/show_bug.cgi?id=2009061)
- Revision: [D283815](https://phabricator.services.mozilla.com/D283815)
- Committed on: 2026-02-19

### Add image and layout size tokens

- Bug: [1988871](https://bugzilla.mozilla.org/show_bug.cgi?id=1988871)
- Revision: [D280448](https://phabricator.services.mozilla.com/D280448)
- Committed on: 2026-02-13

### Add scale for absolute/relative dimension tokens

- Bug: [2005767](https://bugzilla.mozilla.org/show_bug.cgi?id=2005767)
- Revision: [D280318](https://phabricator.services.mozilla.com/D280318)
- Committed on: 2026-02-13

### update toolbar tokens to use underlying design tokens

- Bug: [2003084](https://bugzilla.mozilla.org/show_bug.cgi?id=2003084)
- Revision: [D280464](https://phabricator.services.mozilla.com/D280464)
- Committed on: 2026-02-06

### Tokens need to be created for menus

- Bug: [1998564](https://bugzilla.mozilla.org/show_bug.cgi?id=1998564)
- Revision: [D278552](https://phabricator.services.mozilla.com/D278552)
- Committed on: 2026-01-26

### Add "new" variant to moz-badge

- Bug: [1987750](https://bugzilla.mozilla.org/show_bug.cgi?id=1987750)
- Revision: [D279449](https://phabricator.services.mozilla.com/D279449)
- Committed on: 2026-01-24

### move toolbarbutton variables to design system

- Consolidates toolbarbutton-* CSS custom properties from multiple files into a single file.
- This is a first step to move the toolbar button variables to the design system.
- Ultimately the goal is to maintain these variables in their own json file.

- Bug: [2003084](https://bugzilla.mozilla.org/show_bug.cgi?id=2003084)
- Revision: [D278531](https://phabricator.services.mozilla.com/D278531)
- Committed on: 2026-01-23

### add table design tokens to tokens config

- Bug: [2010644](https://bugzilla.mozilla.org/show_bug.cgi?id=2010644)
- Revision: [D279195](https://phabricator.services.mozilla.com/D279195)
- Committed on: 2026-01-21

### remove superfluous eslint-env annotations from toolkit.

- Bug: [1967204](https://bugzilla.mozilla.org/show_bug.cgi?id=1967204)
- Revision: [D279315](https://phabricator.services.mozilla.com/D279315)
- Committed on: 2026-01-21

### Part 2: Trim leading on moz-fieldsets with headings

- Bug: [1997198](https://bugzilla.mozilla.org/show_bug.cgi?id=1997198)
- Revision: [D275336](https://phabricator.services.mozilla.com/D275336)
- Committed on: 2026-01-15

### Replace hardcoded var() with token references in design tokens.

- Bug: [2010057](https://bugzilla.mozilla.org/show_bug.cgi?id=2010057)
- Revision: [D278833](https://phabricator.services.mozilla.com/D278833)
- Committed on: 2026-01-14

### Adjust percentage of --background-color-box-info -

- Bug: [2009462](https://bugzilla.mozilla.org/show_bug.cgi?id=2009462)
- Revision: [D278530](https://phabricator.services.mozilla.com/D278530)
- Committed on: 2026-01-13

### replace existing `--in-content-table-*` variables with new design tokens

- Bug: [1985429](https://bugzilla.mozilla.org/show_bug.cgi?id=1985429)
- Revision: [D272600](https://phabricator.services.mozilla.com/D272600)
- Committed on: 2026-01-13

### Replace --in-content-item variables with new tokens

- Bug: [1993105](https://bugzilla.mozilla.org/show_bug.cgi?id=1993105)
- Revision: [D274790](https://phabricator.services.mozilla.com/D274790)
- Committed on: 2026-01-06

### Add black/white alpha color tokens

- Bug: [1993105](https://bugzilla.mozilla.org/show_bug.cgi?id=1993105)
- Revision: [D275100](https://phabricator.services.mozilla.com/D275100)
- Committed on: 2026-01-05

### Update "High contrast mode" section in the Design Tokens storybook doc.

- Bug: [1997152](https://bugzilla.mozilla.org/show_bug.cgi?id=1997152)
- Revision: [D272334](https://phabricator.services.mozilla.com/D272334)
- Committed on: 2025-12-12

### Part 1: Add token for border-color-selected

- Bug: [1988865](https://bugzilla.mozilla.org/show_bug.cgi?id=1988865)
- Revision: [D269440](https://phabricator.services.mozilla.com/D269440)
- Committed on: 2025-11-19

### replace usage of white/black backgrounds

Update incorrect usage of black/white background values with appropriate keywords.

- Bug: [1988869](https://bugzilla.mozilla.org/show_bug.cgi?id=1988869)
- Revision: [D270694](https://phabricator.services.mozilla.com/D270694)
- Committed on: 2025-11-18

### Allow link colors, black, and white for text-color linting rule

- Bug: [1988873](https://bugzilla.mozilla.org/show_bug.cgi?id=1988873)
- Revision: [D270394](https://phabricator.services.mozilla.com/D270394)
- Committed on: 2025-11-13

### Part 4: move storybook files into dedicated directory

- Bug: [1994080](https://bugzilla.mozilla.org/show_bug.cgi?id=1994080)
- Revision: [D271588](https://phabricator.services.mozilla.com/D271588)
- Committed on: 2025-11-10

### Part 3: build design token artifact files into dedicated directory

- Bug: [1994080](https://bugzilla.mozilla.org/show_bug.cgi?id=1994080)
- Revision: [D271587](https://phabricator.services.mozilla.com/D271587)
- Committed on: 2025-11-10

### Part 2: move design token source files into dedicated directory

- Bug: [1994080](https://bugzilla.mozilla.org/show_bug.cgi?id=1994080)
- Revision: [D271586](https://phabricator.services.mozilla.com/D271586)
- Committed on: 2025-11-10

### Part 1: move design token config files into dedicated directory

- Bug: [1994080](https://bugzilla.mozilla.org/show_bug.cgi?id=1994080)
- Revision: [D271585](https://phabricator.services.mozilla.com/D271585)
- Committed on: 2025-11-10

### Rename --font-weight-bold to --font-weight-semibold, and add more options to stylelint rule use-font-weight-tokens for handling font weights.

- Add semibold font-weight token for 600
- Update --font-weight-bold usage to --font-weight-semibold
- Update font-weight stylelint autofix rules to normalize usage

- Bug: [1988870](https://bugzilla.mozilla.org/show_bug.cgi?id=1988870)
- Revision: [D269100](https://phabricator.services.mozilla.com/D269100)
- Committed on: 2025-10-27

### Add selected accent color tokens

- Bug: [1994847](https://bugzilla.mozilla.org/show_bug.cgi?id=1994847)
- Revision: [D268957](https://phabricator.services.mozilla.com/D268957)
- Committed on: 2025-10-20

### add font-size-xxxlarge design token

- Bug: [1961988](https://bugzilla.mozilla.org/show_bug.cgi?id=1961988)
- Revision: [D265794](https://phabricator.services.mozilla.com/D265794)
- Committed on: 2025-09-25

### split heading tokens into font-size and font-weight collections for tokens-table

- Bug: [1984178](https://bugzilla.mozilla.org/show_bug.cgi?id=1984178)
- Revision: [D265896](https://phabricator.services.mozilla.com/D265896)
- Committed on: 2025-09-24

### Bump up the corner radius for buttons, dropdowns, and text inputs.

- Bug: [1965867](https://bugzilla.mozilla.org/show_bug.cgi?id=1965867)
- Revision: [D265460](https://phabricator.services.mozilla.com/D265460)
- Committed on: 2025-09-22

### moz-button should support a selected state

- Bug: [1912985](https://bugzilla.mozilla.org/show_bug.cgi?id=1912985)
- Revision: [D264704](https://phabricator.services.mozilla.com/D264704)
- Committed on: 2025-09-19

### add xsmall border-radius design tokens and update large token value

- adds xsmall border-radius design token (2px)
- updates large token value from 12px to 16px

- Bug: [1979120](https://bugzilla.mozilla.org/show_bug.cgi?id=1979120)
- Revision: [D263726](https://phabricator.services.mozilla.com/D263726)
- Committed on: 2025-09-09

### Add new --box-info-background token and apply

Added
* --box-info-background
* --promo-background-color

Removed
* --in-content-box-info-background

Fixed
* moz-promo headings default to an accessible color
* Table Row tokens use appropriate rgba values

- Bug: [1941004](https://bugzilla.mozilla.org/show_bug.cgi?id=1941004)
- Revision: [D263167](https://phabricator.services.mozilla.com/D263167)
- Committed on: 2025-09-05

### rename storybook tokens for reuse

Renames tokens-storybook.mjs to tokens-table.mjs and updates usage.
This work is a prerequisite for upcoming work to create custom style lint rules.

- Bug: [1979109](https://bugzilla.mozilla.org/show_bug.cgi?id=1979109)
- Revision: [D260203](https://phabricator.services.mozilla.com/D260203)
- Committed on: 2025-08-12

### Add remaining size tokens

This patch recognizes extra patterns for values assigned to size dimensions (height and width)

Adds:
- `--size-item-xsmall: 12px`
- `--size-item-xlarge: 48px`

Changes:
- `--icon-size-xsmall: var(--size-item-xsmall)`
- `--icon-size-large: var(--size-item-medium)`

- Bug: [1890385](https://bugzilla.mozilla.org/show_bug.cgi?id=1890385)
- Revision: [D257870](https://phabricator.services.mozilla.com/D257870)
- Committed on: 2025-08-05

### rename default icon-size token

Renames icon-size-default token to icon-size and updates all usage.

- Bug: [1936927](https://bugzilla.mozilla.org/show_bug.cgi?id=1936927)
- Revision: [D258469](https://phabricator.services.mozilla.com/D258469)
- Committed on: 2025-07-31

### Separate `--border-color` into brand and platform and improve its contrast.

Changed
* `--border-color` to color/gray/70 on dark, and currentColor in platform

- Bug: [1979803](https://bugzilla.mozilla.org/show_bug.cgi?id=1979803)
- Revision: [D259291](https://phabricator.services.mozilla.com/D259291)
- Committed on: 2025-07-31

### Use border token in Page Nav.

Changed
* `--border-color` to use Gray 50 instead of the hex value
* Page Nav widget to use the now accurate `--border-color` token, also improves dark mode

- Bug: [1934700](https://bugzilla.mozilla.org/show_bug.cgi?id=1934700)
- Revision: [D258715](https://phabricator.services.mozilla.com/D258715)
- Committed on: 2025-07-31

### Remove `--input-space-block` token

- Bug: [1908535](https://bugzilla.mozilla.org/show_bug.cgi?id=1908535)
- Revision: [D258464](https://phabricator.services.mozilla.com/D258464)
- Committed on: 2025-07-24

### Implement initial functionality of trust panel.

- Bug: [1967512](https://bugzilla.mozilla.org/show_bug.cgi?id=1967512)
- Revision: [D250274](https://phabricator.services.mozilla.com/D250274)
- Committed on: 2025-07-17

### add a filter to the tokens table

- Bug: [1889761](https://bugzilla.mozilla.org/show_bug.cgi?id=1889761)
- Revision: [D253182](https://phabricator.services.mozilla.com/D253182)
- Committed on: 2025-07-15

### Part 2: Design tokens for heading font size/weight

This also updates the Preferences styles to overwrite the design tokens
rather than h1/h2 on the page directly. The heading levels in
Preferences are currently one level higher than they should be, so the
font size was being reduced.

This change now affects headings within the Shadow DOM on the
Preferences page.

- Bug: [1976083](https://bugzilla.mozilla.org/show_bug.cgi?id=1976083)
- Revision: [D256347](https://phabricator.services.mozilla.com/D256347)
- Committed on: 2025-07-08

### Add --icon-size-xsmall and --size-item-xsmall tokens

- Bug: [1972885](https://bugzilla.mozilla.org/show_bug.cgi?id=1972885)
- Revision: [D254274](https://phabricator.services.mozilla.com/D254274)
- Committed on: 2025-06-23

### Add xsmall font size typography design token

- Bug: [1967816](https://bugzilla.mozilla.org/show_bug.cgi?id=1967816)
- Revision: [D250810](https://phabricator.services.mozilla.com/D250810)
- Committed on: 2025-06-16

### Make it possible to have surface specific token comments

- Bug: [1970221](https://bugzilla.mozilla.org/show_bug.cgi?id=1970221)
- Revision: [D252394](https://phabricator.services.mozilla.com/D252394)
- Committed on: 2025-06-06

### Part 1: Add a --border-radius-large token

- Bug: [1964501](https://bugzilla.mozilla.org/show_bug.cgi?id=1964501)
- Revision: [D251039](https://phabricator.services.mozilla.com/D251039)
- Committed on: 2025-05-29

### Format recomp CSS files with Prettier

- Bug: [1606785](https://bugzilla.mozilla.org/show_bug.cgi?id=1606785)
- Revision: [D249173](https://phabricator.services.mozilla.com/D249173)
- Committed on: 2025-05-28

### clean up shopping in storybook

- Bug: [1964844](https://bugzilla.mozilla.org/show_bug.cgi?id=1964844)
- Revision: [D248313](https://phabricator.services.mozilla.com/D248313)
- Committed on: 2025-05-22

### Update --border-color token, add --border-color-transparent.

We update the --border-color token to use #CFCFD8 in light mode,
forced-colors mode. At the same time, we changed the name of the
previous border color token to --border-color-transparent.

By utilizing the --border-color-transparent token, we can ensure that
borders do not appear around certain UI elements until the user requests
higher contrast or forced colors.

- Bug: [1946790](https://bugzilla.mozilla.org/show_bug.cgi?id=1946790)
- Revision: [D248362](https://phabricator.services.mozilla.com/D248362)
- Committed on: 2025-05-20

### Improve Increase Contrast/HCM styling of moz-page-nav

- Bug: [1933320](https://bugzilla.mozilla.org/show_bug.cgi?id=1933320)
- Revision: [D249138](https://phabricator.services.mozilla.com/D249138)
- Committed on: 2025-05-19

### make icon color tokens slightly lighter

- Bug: [1854703](https://bugzilla.mozilla.org/show_bug.cgi?id=1854703)
- Revision: [D249130](https://phabricator.services.mozilla.com/D249130)
- Committed on: 2025-05-15

### Switch the --size-item-medium token to 24px from 28px

- Bug: [1940336](https://bugzilla.mozilla.org/show_bug.cgi?id=1940336)
- Revision: [D247837](https://phabricator.services.mozilla.com/D247837)
- Committed on: 2025-05-15

### Replace searchfield-cancel with close-12 icon.

Replaces the searchfield-cancel icon with the close-12 icon so that we
can style the background-color of the icon as needed.

Since we need close-12.svg to be content accessible, I needed to move
the icon to layout/style/res and add it as a content accessible file.
This resulted in replacing the existing uses of
chrome://global/skin/icons/close-12.svg with the new resource URL,
resource://content-accessible/close-12.svg.

- Bug: [1936648](https://bugzilla.mozilla.org/show_bug.cgi?id=1936648)
- Revision: [D243564](https://phabricator.services.mozilla.com/D243564)
- Committed on: 2025-05-01

### Fix number conversion issues in Figma token export.

- Bug: [1961002](https://bugzilla.mozilla.org/show_bug.cgi?id=1961002)
- Revision: [D245793](https://phabricator.services.mozilla.com/D245793)
- Committed on: 2025-04-23

### revert to LinkText for links in the chrome to fix Ubuntu contrast issues

- Bug: [1961046](https://bugzilla.mozilla.org/show_bug.cgi?id=1961046)
- Revision: [D245989](https://phabricator.services.mozilla.com/D245989)
- Committed on: 2025-04-22

### Improve contrast between active tab and tabstrip.

- Bug: [1954490](https://bugzilla.mozilla.org/show_bug.cgi?id=1954490)
- Revision: [D243454](https://phabricator.services.mozilla.com/D243454)
- Committed on: 2025-04-17

### Updated Figma token export to contain more types and references.

- Bug: [1957722](https://bugzilla.mozilla.org/show_bug.cgi?id=1957722)
- Revision: [D244761](https://phabricator.services.mozilla.com/D244761)
- Committed on: 2025-04-10

### Improve our existing color palette

The new palette makes use of oklch(), a modern function based on cielab color space.
Oklch has bigger gamut support, while being a perceptual and uniform space - easier to create a system with colors that step down evenly.

While oklch gets us pretty far, you will notice if you look close though that all color groups don't follow the same exact lightness and chroma values to a T. I lightly tweaked some color families based on how colors tend to respond to the human eye as they get more or less lightness and chroma.

I will release alongside this palette some minimal guidance of how to combine colors on acorn.firefox.com. This palette provides an easy to understand system where
0 is the lightest and 110 is the darkest, and 1-100 step towards the darkest value evenly. You could then  pretty much split
the scale in half to create light/dark mode safe combinations for background + text, icon + background, etc. But as mentioned before, more guidance to come.

I'm applying colors to tab groups here so made sure to get Amy Lee's approval.

I also ran this by theme reviewers.

UX org has also approved this work.

I also planned with #reusable-components-reviewers team to launch this at the beginning of the next cycle alongside a note to dev mailist announcing the changes.

You should notice some small differences on certain colors, but nothing too dramatic. Colors, besides themes, pretty much only show up as an accent (e.g. primary button) or for feedback (e.g. message bars). Before and after pics can be found [here](https://www.figma.com/design/ZDl1O6w3AA8CC2Keo8ExFg/Bug-1861526-before-and-afters?node-id=0-1&p=f&t=0HeNRoieubFL4ZFl-0).

Note: Storybook isn't playing nicely with oklch and we get some warnings for contrast. I talked to Mark Striemer, and for now we can land this but should look into a solution, if possible. I filed 1950988.

Note to ReComp: I touched up message bar's design slightly here by tweaking the border color.
I also used Julian Gaibler's help to ignore oklch for now since it was spitting errors in the Figma config.

### oklch reads
w3: https://www.w3.org/TR/css-color-4/#lab-colors
tldr: https://chriscoyier.net/2023/10/20/more-oklch-musings/

- Bug: [1861526](https://bugzilla.mozilla.org/show_bug.cgi?id=1861526)
- Revision: [D239079](https://phabricator.services.mozilla.com/D239079)
- Committed on: 2025-04-08

### fix up link styles and tokens for the chrome

- Bug: [1956119](https://bugzilla.mozilla.org/show_bug.cgi?id=1956119)
- Revision: [D242831](https://phabricator.services.mozilla.com/D242831)
- Committed on: 2025-04-02

### Add comments indicating approximate px values to our space token variables in tokens-shared.css

- Bug: [1932933](https://bugzilla.mozilla.org/show_bug.cgi?id=1932933)
- Revision: [D243347](https://phabricator.services.mozilla.com/D243347)
- Committed on: 2025-03-31

### Part 1: create our icon-size token scale

- Bug: [1942110](https://bugzilla.mozilla.org/show_bug.cgi?id=1942110)
- Revision: [D241682](https://phabricator.services.mozilla.com/D241682)
- Committed on: 2025-03-20

### Standardize recurring user interface shadows as design tokens

- Bug: [1889754](https://bugzilla.mozilla.org/show_bug.cgi?id=1889754)
- Revision: [D236008](https://phabricator.services.mozilla.com/D236008)
- Committed on: 2025-03-13

### Make ghost buttons not change color on hover/active.

Except on hcm / prefers-contrast.

- Bug: [1953581](https://bugzilla.mozilla.org/show_bug.cgi?id=1953581)
- Revision: [D241276](https://phabricator.services.mozilla.com/D241276)
- Committed on: 2025-03-13

### Fix missing color values in Figma token export when both brand and platform are defined.

- Bug: [1952099](https://bugzilla.mozilla.org/show_bug.cgi?id=1952099)
- Revision: [D240564](https://phabricator.services.mozilla.com/D240564)
- Committed on: 2025-03-10

### Make ghost buttons inherit the text color when their background is transparent.

- Bug: [1938535](https://bugzilla.mozilla.org/show_bug.cgi?id=1938535)
- Revision: [D237760](https://phabricator.services.mozilla.com/D237760)
- Committed on: 2025-02-15

### Make --button-background-color-ghost transparent in forced-colors and high-contrast modes in chrome.

- Bug: [1940351](https://bugzilla.mozilla.org/show_bug.cgi?id=1940351)
- Revision: [D237239](https://phabricator.services.mozilla.com/D237239)
- Committed on: 2025-02-11

### Change tokens-config.js to reorganize --table-row-background-color tokens in Storybook token tables

- Bug: [1946872](https://bugzilla.mozilla.org/show_bug.cgi?id=1946872)
- Revision: [D237266](https://phabricator.services.mozilla.com/D237266)
- Committed on: 2025-02-11

### Move --table-row-background-color/-alternate design tokens to background-color table in Storybook

- Bug: [1941402](https://bugzilla.mozilla.org/show_bug.cgi?id=1941402)
- Revision: [D234720](https://phabricator.services.mozilla.com/D234720)
- Committed on: 2025-01-20

### Add --button-icon-fill and --button-icon-stroke to tokens-shared.css

**Patch Description:**

 Added new design tokens:

  -   `--button-icon-fill`
  -   `--button-icon-stroke`


 Updated `moz-button.css`:

  -   Removed the `--button-icon-fill` and `--button-icon-stroke` CSS variables.
  -   Replaced them with the new design tokens from `tokens-shared.css`.


Storybook:

  -  Included a preview of the new tokens in the `Icon-Color` Tokens Table.
{F11598738}

- Bug: [1932925](https://bugzilla.mozilla.org/show_bug.cgi?id=1932925)
- Revision: [D233968](https://phabricator.services.mozilla.com/D233968)
- Committed on: 2025-01-13

### Bug 1937739.

- Bug: [1937739](https://bugzilla.mozilla.org/show_bug.cgi?id=1937739)
- Revision: [D232598](https://phabricator.services.mozilla.com/D232598)
- Committed on: 2024-12-19

### Part 1: Add --table-row-background-color/-alternate design tokens

- Bug: [1919313](https://bugzilla.mozilla.org/show_bug.cgi?id=1919313)
- Revision: [D231953](https://phabricator.services.mozilla.com/D231953)
- Committed on: 2024-12-18

### Use shared CSS var for defining common page-level content widths

* Add new token that builds CSS var

* Replace instances with new CSS var

- Bug: [1517856](https://bugzilla.mozilla.org/show_bug.cgi?id=1517856)
- Revision: [D229185](https://phabricator.services.mozilla.com/D229185)
- Committed on: 2024-11-19

### Part 2: fix color token usage in line with new Stylelint rule

- Bug: [1838298](https://bugzilla.mozilla.org/show_bug.cgi?id=1838298)
- Revision: [D222698](https://phabricator.services.mozilla.com/D222698)
- Committed on: 2024-09-27

### Remove --button-primary-bgcolor, --button-primary-hover-bgcolor, --button-primary-active-bgcolor, --button-primary-color.

- Bug: [1920500](https://bugzilla.mozilla.org/show_bug.cgi?id=1920500)
- Revision: [D223137](https://phabricator.services.mozilla.com/D223137)
- Committed on: 2024-09-25

### Implement --text-color-disabled.

- Bug: [1917337](https://bugzilla.mozilla.org/show_bug.cgi?id=1917337)
- Revision: [D222503](https://phabricator.services.mozilla.com/D222503)
- Committed on: 2024-09-18

### Remove --button-color.

- Bug: [1919262](https://bugzilla.mozilla.org/show_bug.cgi?id=1919262)
- Revision: [D222439](https://phabricator.services.mozilla.com/D222439)
- Committed on: 2024-09-18

### Remove --button-bgcolor, --button-hover-bgcolor, --button-active-bgcolor.

- Bug: [1918317](https://bugzilla.mozilla.org/show_bug.cgi?id=1918317)
- Revision: [D221922](https://phabricator.services.mozilla.com/D221922)
- Committed on: 2024-09-12

### Provide a chrome fallback when --button-*-bgcolor vars aren't set

This should fix the close buttons in the sidebar panes when using the
system theme in light mode.

Ideally the theming code would update the design tokens when it makes
sense based on the theme, rather than having the tokens depend on the
these CSS vars. That is tracked in bug 1835869.

- Bug: [1908692](https://bugzilla.mozilla.org/show_bug.cgi?id=1908692)
- Revision: [D221083](https://phabricator.services.mozilla.com/D221083)
- Committed on: 2024-09-05

### Replace visible comment with link to HCM Media Query docs

- Bug: [1915451](https://bugzilla.mozilla.org/show_bug.cgi?id=1915451)
- Revision: [D220990](https://phabricator.services.mozilla.com/D220990)
- Committed on: 2024-09-04

### Fixed text/color/deemphasized in tokens-figma.json for forcedColors.

- Bug: [1913790](https://bugzilla.mozilla.org/show_bug.cgi?id=1913790)
- Revision: [D219529](https://phabricator.services.mozilla.com/D219529)
- Committed on: 2024-08-29

### add new tokens to standardize panel-list border colors

- Bug: [1913096](https://bugzilla.mozilla.org/show_bug.cgi?id=1913096)
- Revision: [D219167](https://phabricator.services.mozilla.com/D219167)
- Committed on: 2024-08-27

### Match select element styling in experimental section with other components.

Went with adding margin-block-end to achieve the ~4px spacing between
label and select, and between select and description.

Also adds the "input-space-block" token.

- Bug: [1904094](https://bugzilla.mozilla.org/show_bug.cgi?id=1904094)
- Revision: [D216336](https://phabricator.services.mozilla.com/D216336)
- Committed on: 2024-07-29

### Generate JSON file for Figma from design tokens

- Bug: [1899294](https://bugzilla.mozilla.org/show_bug.cgi?id=1899294)
- Revision: [D206407](https://phabricator.services.mozilla.com/D206407)
- Committed on: 2024-07-09

### Focus outline CanvasText HCM

- Bug: [1860159](https://bugzilla.mozilla.org/show_bug.cgi?id=1860159)
- Revision: [D196632](https://phabricator.services.mozilla.com/D196632)
- Committed on: 2024-05-03

### Fix ./mach doc parsing errors

Removing "..." from code block examples as the docs parser doesn't like them and they don't really add clarity anyway.

- Bug: [1890592](https://bugzilla.mozilla.org/show_bug.cgi?id=1890592)
- Revision: [D207145](https://phabricator.services.mozilla.com/D207145)
- Committed on: 2024-04-10

### expand JSON design tokens docs

- Bug: [1881080](https://bugzilla.mozilla.org/show_bug.cgi?id=1881080)
- Revision: [D206375](https://phabricator.services.mozilla.com/D206375)
- Committed on: 2024-04-09

### Add a design tokens table to storybook

- Bug: [1857330](https://bugzilla.mozilla.org/show_bug.cgi?id=1857330)
- Revision: [D205927](https://phabricator.services.mozilla.com/D205927)
- Committed on: 2024-04-08

### Add 'buildtokens' mach command.

This new command will make it easier to work with the JSON source of
truth for our design tokens. Unfortunately the noisy output when
building the tokens is expected. We can fix this issue by upgrading
to Style Dictionary v4 when it is available and changing the logging
level.[1]

[1] https://bugzilla.mozilla.org/show_bug.cgi?id=1889645

- Bug: [1888952](https://bugzilla.mozilla.org/show_bug.cgi?id=1888952)
- Revision: [D206561](https://phabricator.services.mozilla.com/D206561)
- Committed on: 2024-04-05

### Add design tokens docs to Firefox Source Docs.

These docs were already present when running `mach storybook` but were
not hooked up to Firefox Source Docs. I also moved the files to a docs/
directory so that the folder structure is more clear.

I also changed the post-it notes layout to images so that the styling
would be consistent between Storybook and Firefox Source Docs. As part
of this, I added alt text to each graphic so that we weren't losing
information.

- Bug: [1888511](https://bugzilla.mozilla.org/show_bug.cgi?id=1888511)
- Revision: [D206070](https://phabricator.services.mozilla.com/D206070)
- Committed on: 2024-04-02

### Add simple tests for JSON tokens

- Bug: [1850611](https://bugzilla.mozilla.org/show_bug.cgi?id=1850611)
- Revision: [D203042](https://phabricator.services.mozilla.com/D203042)
- Committed on: 2024-03-26

### Create a JSON file source of truth for our design tokens.

* Add light-dark transformer for generating web CSS
* Use value object in design-tokens.json
* Add HCM media queries to built CSS
* Add MPL license and how to edit file header
* Strip '-default' from token names and values
* Refactor generated media query placement within file.
* generate multiple CSS files from a single JSON file.
* add the :host(.anonymous-content-host) selector to the built CSS
* Output tokens in pre-defined order
* Generate CSS layer declarations and relevant selectors
* Sort tokens by t-shirt size and state semantically not alphabetically
* Add remaining tokens to design-tokens.json
* Add design tokens JSON docs

---------

Co-authored-by: Jules Simplicio <jsimplicio@mozilla.com>
Co-authored-by: Hanna Jones <hjones@mozilla.com>
Co-authored-by: Mark Striemer <mstriemer@mozilla.com>
Co-authored-by: Tim Giles <tgiles@mozilla.com>

- Bug: [1850611](https://bugzilla.mozilla.org/show_bug.cgi?id=1850611)
- Revision: [D204108](https://phabricator.services.mozilla.com/D204108)
- Committed on: 2024-03-26

### Clean up tokens files ahead of JSON source of truth setup

Changed
* `--color-background-*` are now part of the group of `--background-color` tokens
* `--box-background-color` is now part of the group of `--background-color` tokens as `--background-color-box`
* `--color-canvas` is now part of the group of `--background-color` tokens as `--background-color-canvas`
* `--border-interactive-*` are now part of the group of `--border-color` tokens and consequently now start with `--border-color`
* `--color-error-outline` is now an outline-specific token as `--outline-color-error`
* Comment headings were cleaned up as to follow the existing standard
* Better documentation behind the difference of "Base", "Application", and "Component" tiers in the design tokens documentation
* Tokens files are alphabetized

Removed
* `--outline-color-error` had duplicates in both high contrast mode media queries, so its value under `forced-colors` was removed
* "Base" and "Application" headings in tokens files were removed in order to lean in on the alphabetical order organization of token groups and promote a cleaner file and less confusion
* Documentation was edited down to not incude any guidance that we don't adhere to
* Remove duplicate interactive border color high contrast mode tokens in `tokens-brand.css` in favor of `tokens-shared.css`
* Remove `--button-border-color-primary` duplicate in `tokens-brand.css`
* Remove duplicate `--button-text-color` in `tokens-shared.css`

- Bug: [1881821](https://bugzilla.mozilla.org/show_bug.cgi?id=1881821)
- Revision: [D202767](https://phabricator.services.mozilla.com/D202767)
- Committed on: 2024-03-26

### Create reusable token for color used in the tab attention radial gradient.

- Bug: [1877298](https://bugzilla.mozilla.org/show_bug.cgi?id=1877298)
- Revision: [D202736](https://phabricator.services.mozilla.com/D202736)
- Committed on: 2024-03-22

### upgrade to Storybook V7

This patch upgrades Storybook to the latest version. Had to do a decent bit of hacking around with our customizations to get them to keep working. Probably the biggest change was we now have to use an [indexer](https://storybook.js.org/docs/api/main-config-indexers) for our markdown stories, and in order to get the information we need we have to do the same transformations that we do in the loader. For that reason I moved a lot of the loader logic out into a utils file. It feels pretty redundant to have the loader and the indexer...but I'm not sure if there's an alternative right now.

Also worth noting - I turned off the auto generated docs in favor of our READMEs, which I added args tables to. We don't have these for all our components yet, so we might want to file bugs to start adding them. If we would prefer to keep those docs pages for now I think I can configure Storybook to keep generating them

- Bug: [1828737](https://bugzilla.mozilla.org/show_bug.cgi?id=1828737)
- Revision: [D197218](https://phabricator.services.mozilla.com/D197218)
- Committed on: 2024-03-13

### moz-button component

- Bug: [1791816](https://bugzilla.mozilla.org/show_bug.cgi?id=1791816)
- Revision: [D188122](https://phabricator.services.mozilla.com/D188122)
- Committed on: 2024-03-01

### Remove --brand-color-accent and --platform-color-accent tokens

- Bug: [1866649](https://bugzilla.mozilla.org/show_bug.cgi?id=1866649)
- Revision: [D203190](https://phabricator.services.mozilla.com/D203190)
- Committed on: 2024-03-01

### Add remaining space design tokens

Added
- `--space-medium`
- `--space-large`

Changed
- `--space-xlarge` has a new value and the old one is now `--space-xxlarge`

- Bug: [1882122](https://bugzilla.mozilla.org/show_bug.cgi?id=1882122)
- Revision: [D202739](https://phabricator.services.mozilla.com/D202739)
- Committed on: 2024-02-29

### Clean up remaining line height tokens that were left behind

Removed
* `--button-line-height` and `--input-text-line-height` no longer at use

- Bug: [1882177](https://bugzilla.mozilla.org/show_bug.cgi?id=1882177)
- Revision: [D202841](https://phabricator.services.mozilla.com/D202841)
- Committed on: 2024-02-27

### Opt for one standard `--text-color-deemphasized` value

- Bug: [1880573](https://bugzilla.mozilla.org/show_bug.cgi?id=1880573)
- Revision: [D202495](https://phabricator.services.mozilla.com/D202495)
- Committed on: 2024-02-26

### Remove `default` modifier in font weight token

- Bug: [1880569](https://bugzilla.mozilla.org/show_bug.cgi?id=1880569)
- Revision: [D202491](https://phabricator.services.mozilla.com/D202491)
- Committed on: 2024-02-23

### Refactor tokens-brand to use CSS layers.

By using the CSS layers feature, we can simplify our prefers-contrast
and forced-colors media queries by ensuring that:
  - Forced colors styling has the highest precedence
  - Prefers contrast styling has the next highest precedence
  - Base styling has the lowest precedence

This allows us to remove the "@media not" queries from the various
tokens files without breaking the cascade and causing the brand or
platform tokens file to unintentionally overwrite token values in the
shared tokens file.

Bug 1879900 will handle moving the prefers-contrast and forced-colors
media queries into the main :root selector.

- Bug: [1878343](https://bugzilla.mozilla.org/show_bug.cgi?id=1878343)
- Revision: [D201170](https://phabricator.services.mozilla.com/D201170)
- Committed on: 2024-02-21

### Refactor tokens-platform to use CSS layers.

By using the CSS layers feature, we can simplify our prefers-contrast
and forced-colors media queries by ensuring that:
  - Forced colors styling has the highest precedence
  - Prefers contrast styling has the next highest precedence
  - Base styling has the lowest precedence

This allows us to remove the "@media not" queries from the various
tokens files without breaking the cascade and causing the brand or
platform tokens file to unintentionally overwrite token values in the
shared tokens file.

Bug 1879900 will handle moving the prefers-contrast and forced-colors
media queries into the main :root selector.

- Bug: [1878343](https://bugzilla.mozilla.org/show_bug.cgi?id=1878343)
- Revision: [D201169](https://phabricator.services.mozilla.com/D201169)
- Committed on: 2024-02-21

### Refactor tokens-shared to use CSS layers.

By using the CSS layers feature, we can simplify our prefers-contrast
and forced-colors media queries by ensuring that:
  - Forced colors styling has the highest precedence
  - Prefers contrast styling has the next highest precedence
  - Base styling has the lowest precedence

This allows us to remove the "@media not" queries from the various
tokens files without breaking the cascade and causing the brand or
platform tokens file to unintentionally overwrite token values in the
shared tokens file.

Bug 1879900 will handle moving the prefers-contrast and forced-colors
media queries into the main :root selector.

- Bug: [1878343](https://bugzilla.mozilla.org/show_bug.cgi?id=1878343)
- Revision: [D201168](https://phabricator.services.mozilla.com/D201168)
- Committed on: 2024-02-21

### Standardize headings 1-3

- Bug: [1877793](https://bugzilla.mozilla.org/show_bug.cgi?id=1877793)
- Revision: [D200203](https://phabricator.services.mozilla.com/D200203)
- Committed on: 2024-02-09

### Avoid using `font-weight: 300` and `font-weight: lighter`

- Bug: [1875396](https://bugzilla.mozilla.org/show_bug.cgi?id=1875396)
- Revision: [D199953](https://phabricator.services.mozilla.com/D199953)
- Committed on: 2024-02-08

### remove unset tokens from tokens-shared.css

- Bug: [1845630](https://bugzilla.mozilla.org/show_bug.cgi?id=1845630)
- Revision: [D200387](https://phabricator.services.mozilla.com/D200387)
- Committed on: 2024-02-01

### Improve spacing in preferences upon standardizing line height values

- Bug: [1872788](https://bugzilla.mozilla.org/show_bug.cgi?id=1872788)
- Revision: [D197614](https://phabricator.services.mozilla.com/D197614)
- Committed on: 2024-01-30

### In order to support all languages and scripts rely on the default / `normal`

Removed
* `--line-height-default` no longer exists in order to favor the normal default at the root.
* `--line-height-small` no longer exists in order to favor the normal default in all instances.

- Bug: [1872788](https://bugzilla.mozilla.org/show_bug.cgi?id=1872788)
- Revision: [D197613](https://phabricator.services.mozilla.com/D197613)
- Committed on: 2024-01-30

### Use moz-message-bar instead of message-bar in notificationbox.js

This patch updates the `NotificationMessage` element in `notificationbox.js` so that it extends our newer `moz-message-bar` component instead of the deprecated `message-bar` component. Many of the changes are just dealing with the implications of making things async (so that we can ensure `moz-message-bar.mjs` gets imported). I tried to break out places where I modified related code and tests into separate patches to mitigate some of the review pain here.

This patch solves a longstanding issue where we were loading `in-content/common-shared.css` in the chrome since it gets used by the `message-bar` element. It also makes some small visual changes to our infobars (slight outline, icon colors, adds a bit of spacing).

- Bug: [1845150](https://bugzilla.mozilla.org/show_bug.cgi?id=1845150)
- Revision: [D189872](https://phabricator.services.mozilla.com/D189872)
- Committed on: 2024-01-10

### add design tokens for moz-button-group

This patch introduces a simple spacing token for use in `moz-button-group`.

- Bug: [1826833](https://bugzilla.mozilla.org/show_bug.cgi?id=1826833)
- Revision: [D180697](https://phabricator.services.mozilla.com/D180697)
- Committed on: 2024-01-05

### Introduce red tokens for form input error state (descriptive error text and focus outline)

Added
- `--color-red-20`
- `--color-error-outline`
- `--text-color-error`
- `.text-error` helper class

- Bug: [1868412](https://bugzilla.mozilla.org/show_bug.cgi?id=1868412)
- Revision: [D195568](https://phabricator.services.mozilla.com/D195568)
- Committed on: 2023-12-07

### Remove "Base" comment heading on both `tokens-brand.css` and `tokens-platform.css` above "Typography" tokens

Removed
- "Base" comment heading on brand and platform sheets that don't include base tokens.

Fixed
- Commend headings in all token files

- Bug: [1865750](https://bugzilla.mozilla.org/show_bug.cgi?id=1865750)
- Revision: [D194165](https://phabricator.services.mozilla.com/D194165)
- Committed on: 2023-12-06

### How to guide for design tokens

- Bug: [1825032](https://bugzilla.mozilla.org/show_bug.cgi?id=1825032)
- Revision: [D189004](https://phabricator.services.mozilla.com/D189004)
- Committed on: 2023-12-06

### Convert shopping-card to moz-card.

This change allows us to refactor the shopping-card to have its ratings
case without needing to duplicate the card widget itself. Additionally,
this will allow us to use the card widget for the translations case in
about:preferences.

The button styles in moz-card.css will need to be de-duplicated in the
future, once we figure out the moz-button widget.

- Bug: [1846846](https://bugzilla.mozilla.org/show_bug.cgi?id=1846846)
- Revision: [D187712](https://phabricator.services.mozilla.com/D187712)
- Committed on: 2023-11-29

### Apply standardized heading font size to error pages

- Bug: [1854551](https://bugzilla.mozilla.org/show_bug.cgi?id=1854551)
- Revision: [D189010](https://phabricator.services.mozilla.com/D189010)
- Committed on: 2023-09-22

### Part 6: Use design system typography in protection and panels

- Bug: [1838939](https://bugzilla.mozilla.org/show_bug.cgi?id=1838939)
- Revision: [D186035](https://phabricator.services.mozilla.com/D186035)
- Committed on: 2023-09-19

### Part 1: Add typography design tokens

- Bug: [1838939](https://bugzilla.mozilla.org/show_bug.cgi?id=1838939)
- Revision: [D182115](https://phabricator.services.mozilla.com/D182115)
- Committed on: 2023-09-19

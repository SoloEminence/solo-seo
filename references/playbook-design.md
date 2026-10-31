# UI and UX playbook

Complete instructions for design work, so no other design skill is needed. The brief always wins: when the owner names a style, font or palette, follow it even if it appears in the avoid lists. On an existing site, follow its design system and use this for quality checks.

## 1. Choose the mode

Pick the mode from what the visitor is doing on this page, not from the product. One site can use several.

| Mode | Visitor's goal | Pages | Design approach |
|---|---|---|---|
| Persuade | Decide and act | Landing, pricing, home | Bold, distinct, one strong idea |
| Operate | Finish a task | Tools, dashboards, settings | Familiar, precise, quick to trust |
| Read | Understand | Articles, guides, docs | Comfortable reading, clear structure |
| Showcase | Experience the work | Portfolios, galleries | The work leads, the interface recedes |

An Operate page fails when it's strange without purpose: decorated buttons, invented controls, slow motion. Brand shows through precise details there, and the tool should disappear into the task.

## 2. Set the direction

Write these in `DESIGN.md` before any code:

- **Purpose:** what should a visitor do here?
- **Scene:** who uses this, where, and in what light? Choose light or dark from this, not from the category.
- **Direction:** one named style, such as "workshop manual", "calm clinic" or "print magazine". Blend two at most.
- **Anchor:** with the logo removed, what would make a screenshot recognisable? Build this into the design.
- **Dials:** set from the table below, or adjust them to fit the request.

| Site type | Layout variety | Motion | Density |
|---|---|---|---|
| Free tool | 4 of 10 | 3 | 5 |
| Landing page | 7 | 6 | 3 |
| Content or blog | 4 | 2 | 3 |
| Directory | 3 | 2 | 6 |

Score the direction from 1 to 5 on impact, fit, feasibility and performance, then subtract consistency risk (also 1 to 5). A score under 8 means simplify or rethink. When torn between safe and committed, commit.

## 3. Type

- Persuade and Read: pair one display font with one body font. Operate: one well-tuned family is often enough.
- Inter, Roboto and Arial are overused defaults. Good alternatives are Geist, Satoshi, Cabinet Grotesk, Outfit and General Sans, or a display serif for editorial sites. Self-host the font, and avoid system fonts as a display voice.
- Use a clear scale. For Operate pages, use fixed rem sizes with steps of 1.125 to 1.2.
- Keep display text under 6rem, tracking no tighter than -0.04em, and use `text-wrap: balance` on headings.
- Keep body text at 16px or larger, line height 1.5 to 1.75, and lines of 65 to 75 characters.
- Create hierarchy through weight and colour as well as size.
- Use mono for code, data and measurements only. Use `tabular-nums` for numbers that change or sit in columns.
- Test with the real copy at every breakpoint, and fix anything that overflows.

## 4. Colour

- Build from one dominant colour, one accent and a neutral scale with a consistent warm or cool tint.
- Keep accents below about 80% saturation. Use off-black in place of pure `#000`.
- Define everything as CSS variables, and never hardcode colours in components.
- On Operate pages, reserve the accent for primary actions, selection and state.
- On coloured surfaces, tint secondary text from that colour rather than using grey.
- Check contrast in both themes: 4.5:1 for text and placeholders, and 3:1 for large text and UI parts.
- Don't rely on colour alone to show a state.

## 5. Layout

- Vary the structure: split heroes, offset grids, full-bleed bands and uneven columns, to the level set by the layout dial.
- Use a left-aligned or split hero by default. Centre only when it serves the content.
- Replace three equal cards with a zig-zag, uneven grid, table or list.
- Use cards only when elevation carries meaning, and never nest them. Spacing and dividers usually work better.
- Group tightly, separate generously, and leave more space above a heading than below it.
- Use CSS Grid for page structure, and one consistent container width.
- Use `min-h-[100dvh]` for full-height sections, because `h-screen` jumps on mobile.
- Collapse to one clean column below 768px. Test at 375, 768, 1024 and 1440px.
- Define a small z-index scale.
- Keep dropdowns from being clipped by `overflow: hidden`, using `<dialog>`, the popover API or `position: fixed`.
- Use a modal only for a task that needs interruption or protected focus.

## 6. Icons and graphics

- Use one SVG icon set at one size and weight. Phosphor is the default.
- Use the official SVG for brand logos, for example from Simple Icons.
- Prefer custom SVG or code-built graphics and real product screenshots.
- Give icon-only buttons an `aria-label`.

## 7. Browser details

Models skip these most often, and they're a cheap way to make a site feel designed. Style them from the palette:

- Text selection (`::selection`) and the caret (`caret-color`).
- Scrollbars inside panels (`scrollbar-color`).
- Focus rings, with a consistent offset.
- Link underlines (`text-underline-offset`).
- `accent-color` for checkboxes and radios.

## 8. Motion

Decide in this order before animating anything:

**1. How often is it seen?**

| Frequency | Decision |
|---|---|
| 100+ times a day, or triggered by keyboard | No animation |
| Tens of times a day | Reduce or remove |
| Occasional (modals, drawers, toasts) | Standard animation |
| Rare (first use, celebrations) | Room for delight |

**2. What is it for?** Valid reasons are feedback, state change, spatial continuity, explanation, and avoiding a jarring jump. "It looks cool" only passes for rare moments.

**3. Which easing?**

| Motion | Easing |
|---|---|
| Entering or exiting | Strong ease-out: `cubic-bezier(0.23, 1, 0.32, 1)` |
| Moving on screen | Strong ease-in-out: `cubic-bezier(0.77, 0, 0.175, 1)` |
| Hover or colour change | `ease` |
| Constant motion | `linear` |

Avoid `ease-in` on UI, because it delays the moment people are watching.

**4. How long?**

| Element | Duration |
|---|---|
| Button press | 100 to 160ms |
| Tooltip, small popover | 125 to 200ms |
| Dropdown | 150 to 250ms |
| Modal, drawer | 200 to 500ms |

Keep UI animation under 300ms. Marketing and explanatory motion can run longer.

Techniques:

- Add `scale(0.97)` on `:active` to pressable elements.
- Enter from `scale(0.95)` with `opacity: 0`, never `scale(0)`.
- Scale popovers from their trigger, and keep modals centred.
- Use CSS transitions rather than keyframes for anything triggered rapidly, because transitions can be interrupted.
- Use `@starting-style` for entry animations where supported.
- Name exact properties, never `transition: all`.
- Prefer `transform` and `opacity`. Keep blur subtle, and test it in Safari.
- Build one considered moment rather than the same fade-up on every section. Motion on Operate pages should show state only.
- Show content by default, so nothing depends on a script to appear.
- Respect `prefers-reduced-motion` everywhere.
- Hover states must not shift the layout.
- Use JS or spring animation only for drags and gestures that can be interrupted.

## 9. Every state

LLMs tend to design only the success state, so build all of these:

- **Default:** clear next action.
- **Loading:** skeleton matching the final size, with space reserved.
- **Empty:** explains what to do first.
- **Error:** next to the problem, in plain words, with a way to recover and no data lost.
- **Success:** confirms what happened and offers the next step.
- **Pressed, hover, focus, selected and disabled:** all visibly different.

## 10. Stress test with bad data

Pages made with neat sample text break on real data. Test each component with values a real user could produce:

- Long unbreakable text: long emails, URLs, file names and German compounds. Use `overflow-wrap: anywhere`.
- Very short values: one letter, or nothing at all.
- Non-English text: accents, Chinese with no spaces, and Arabic (use `dir="auto"`).
- Emoji in user input. String slicing can split them in half.
- Code-like text: `<script>` and `&amp;` must display literally.
- Numbers: 0, 1 (plural labels), 1,000,000, negatives, `0.1 + 0.2`, and a raw `NaN` or `null`.
- Lists: 0 items, 1 item, exactly one page, and 1,000 or more.
- Text expansion: translated labels often run 30% longer.

## 11. Forms

- Put labels above fields, and keep them visible while typing.
- Ask only for what you'll use. Mark optional fields.
- Validate on blur, and never clear what the user typed.
- Use the right `type`, `inputmode` and `autocomplete` values.
- Name the submit button for its result, such as "Get my quote".
- Say what happens next, and add a privacy note where people may hesitate.

## 12. Accessibility (WCAG 2.2 AA)

- Use semantic landmarks, and a skip link on navigation-heavy pages.
- Make everything work by keyboard, in visual order, with a visible focus ring.
- Aim for 44px touch targets, and never go below 24px.
- Link labels to fields, and connect errors to fields with `aria-describedby`.
- Use `aria-live` for tool results and status messages.
- Allow zoom to 200% and reflow at 320px width.
- Run axe, then test by keyboard. Automated tools catch only part of the problems.

## 13. Speed guardrails

- Ship no JS by default, and hydrate islands only where needed.
- Set dimensions on all media, and reserve space for anything loaded later.
- Give the LCP image priority, and don't lazy-load it.
- Self-host subset fonts with `font-display: swap`, and preload at most two.
- Keep noise and blur effects on fixed layers, away from scrolling content.

## Final check

Look at the rendered page at real sizes, and fix everything one look reveals before looking again.

- [ ] Mode, direction and anchor are visible in the result
- [ ] Nothing in the slop list of `anti-slop.md` remains
- [ ] Every state is built and tested, including bad data
- [ ] Browser details are styled
- [ ] Tested at 375px and 1280px, in light and dark if both exist
- [ ] Keyboard and reduced-motion checks pass
- [ ] Copy is real, with no filler text or fake data

# UI and UX playbook

Complete instructions for design work, so no other design skill is needed. On an existing site, follow its design system and use this only for quality checks.

## 1. Set the direction

Write these in `DESIGN.md` before any code:

- **Purpose:** what should a visitor do here?
- **Direction:** one named style, such as "workshop manual", "calm clinic" or "print magazine". Blend two at most.
- **Anchor:** with the logo removed, what would make a screenshot recognisable? Build this into the design.
- **Dials:** set from the table below, or adjust them to fit the request.

| Site type | Layout variety | Motion | Density |
|---|---|---|---|
| Free tool | 4 of 10 | 3 | 5 |
| Landing page | 7 | 6 | 3 |
| Content or blog | 4 | 2 | 3 |
| Directory | 3 | 2 | 6 |

Score the direction from 1 to 5 on impact, fit, feasibility and performance, then subtract consistency risk (also 1 to 5). A score under 8 means simplify or rethink.

## 2. Type

- Pair one display font with one body font, or use one family with strong weight contrast.
- Inter, Roboto and Arial are overused defaults. Good alternatives are Geist, Satoshi, Cabinet Grotesk, Outfit and General Sans, or a display serif for editorial sites.
- Use a clear scale, tight tracking on large headings, and line height of 1.5 to 1.75 for body text.
- Keep body text at 16px or larger, with lines of 65 to 75 characters.
- Create hierarchy through weight and colour as well as size.
- Use mono for data and code. Keep serifs out of dense tool interfaces.

## 3. Colour

- Build from one dominant colour, one accent and a neutral scale with a consistent warm or cool tint.
- Keep accents below about 80% saturation. Use off-black in place of pure `#000`.
- Define everything as CSS variables, and never hardcode colours in components.
- Check contrast in both themes: 4.5:1 for text, and 3:1 for large text and UI parts.
- Don't rely on colour alone to show a state.

## 4. Layout

- Vary the structure: split heroes, offset grids, full-bleed bands and uneven columns, to the level set by the layout dial.
- Use a left-aligned or split hero by default. Centre only when it serves the content.
- Replace three equal cards with a zig-zag, uneven grid, table or list.
- Use cards only when elevation carries meaning. Spacing and dividers usually work better.
- Use CSS Grid for page structure, and one consistent container width.
- Use `min-h-[100dvh]` for full-height sections, because `h-screen` jumps on mobile.
- Collapse to one clean column below 768px. Test at 375, 768, 1024 and 1440px.
- Define a small z-index scale.

## 5. Icons and graphics

- Use one SVG icon set at one size and weight. Phosphor is the default.
- Use the official SVG for brand logos, for example from Simple Icons.
- Prefer custom SVG or code-built graphics and real product screenshots.
- Give icon-only buttons an `aria-label`.

## 6. Motion

- Animate only `transform` and `opacity`, at 150 to 300ms for small interactions, with natural easing.
- Motion 1 to 3: hover, focus and active feedback only.
- Motion 4 to 7: add one strong entrance and a few purposeful reveals, using CSS first.
- Motion 8 to 10: only for a real storytelling page, with one library and strict cleanup.
- Loading the page shouldn't depend on animation, and content must never be hidden until a script runs.
- Respect `prefers-reduced-motion` everywhere.
- Hover states must not shift the layout.

## 7. Every state

LLMs tend to design only the success state, so build all of these:

- **Default:** clear next action.
- **Loading:** skeleton matching the final size, with space reserved.
- **Empty:** explains what to do first.
- **Error:** next to the problem, in plain words, with a way to recover and no data lost.
- **Success:** confirms what happened and offers the next step.
- **Pressed, hover, focus and disabled:** all visibly different.

## 8. Forms

- Put labels above fields, and keep them visible while typing.
- Ask only for what you'll use. Mark optional fields.
- Validate on blur, and never clear what the user typed.
- Use the right `type`, `inputmode` and `autocomplete` values.
- Name the submit button for its result, such as "Get my quote".
- Say what happens next, and add a privacy note where people may hesitate.

## 9. Accessibility (WCAG 2.2 AA)

- Use semantic landmarks, and a skip link on navigation-heavy pages.
- Make everything work by keyboard, in visual order, with a visible focus ring.
- Aim for 44px touch targets, and never go below 24px.
- Link labels to fields, and connect errors to fields with `aria-describedby`.
- Use `aria-live` for tool results and status messages.
- Allow zoom to 200% and reflow at 320px width.
- Run axe, then test by keyboard. Automated tools catch only part of the problems.

## 10. Speed guardrails

- Ship no JS by default, and hydrate islands only where needed.
- Set dimensions on all media, and reserve space for anything loaded later.
- Give the LCP image priority, and don't lazy-load it.
- Self-host subset fonts with `font-display: swap`, and preload at most two.
- Keep noise and blur effects on fixed layers, away from scrolling content.

## Final check

- [ ] Direction and anchor are visible in the result
- [ ] Nothing in the slop list of `anti-slop.md` remains
- [ ] Every state is built and tested
- [ ] Tested at 375px and 1280px, in light and dark if both exist
- [ ] Keyboard and reduced-motion checks pass
- [ ] Copy is real, with no filler text or fake data

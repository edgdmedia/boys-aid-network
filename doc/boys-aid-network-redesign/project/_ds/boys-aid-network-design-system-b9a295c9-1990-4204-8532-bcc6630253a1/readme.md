# Boys Aid Network — Design System

A design system for **Boys Aid Network (BAN)**, a boy-child advocacy organisation based in Nigeria (formerly *Boy-King International*, rebranded 2025). BAN teaches, mentors and helps the boychild "find himself, enjoy inclusion, live a godly life and contribute to societal development."

**Tagline:** *Empowering Boys for a Better Tomorrow.*

## Sources
- **Website:** https://boysaidnetwork.org (WordPress / Elementor). Design tokens, copy, layout and structure were derived from the live homepage and brand assets. The website itself was **not** rebuilt — only the design system was extracted.
- **Provided brand assets** (in `assets/`): full-colour logo, white logo, favicon, clipboard/stationery mockup, and the "We're Rebranded" announcement graphic.
- No source codebase or Figma file was provided; components below are an authored set fitting this nonprofit web brand (see "Intentional additions").

---

## CONTENT FUNDAMENTALS
- **Voice:** warm, mission-driven, hopeful, plain-spoken. Speaks *about* the boychild and *to* supporters. Uses collective "we/our" for the organisation and "your" when addressing donors ("Your support can transform lives").
- **Casing:** Headlines are title-case or sentence case; the wordmark and buttons are UPPERCASE. Program names are title-cased proper nouns ("Street Children Badge of Hope", "Boys Bootcamp").
- **Tone examples:** "Empowering Boys for a Better Tomorrow" · "Support a Boy, Shape a Future" · "A Boy Child advocacy organisation focused on teaching, mentoring and helping the boychild find himself." First-person founder storytelling appears in blog posts ("a dream I've carried for years finally became reality").
- **British/Nigerian English spellings** ("organisation", "programme"→often "program"). Numbers styled as impact counters ("500+", "12k+").
- **No emoji** in brand copy. Punchy verb-led CTAs: "Donate Now", "Get Involved", "Partner with Us", "Read more".

## VISUAL FOUNDATIONS
- **Colors:** two-color brand system — deep **navy `#11175c`** (primary: wordmark, headings, logo disc, dark sections) and **red `#c80505`** (accent: "AID", CTAs, underlines, business card). White is the dominant surface. A muted **gold `#e0a83c`** appears only as sparing celebratory confetti (rebrand graphic). Neutrals are cool grays.
- **Type:** bold geometric sans for display (**Montserrat**, 700–900), humanist sans for body (**Open Sans**, 400–600). Headings are heavy and tight-tracked; small labels are UPPERCASE with wide letter-spacing (echoing the tracked "NETWORK" in the logo). *(See font caveat below.)*
- **Backgrounds:** clean white and light-gray sections alternate; hero and CTA bands are full-bleed solid navy or red. Hero photos are **navy-tinted/duotone** (warm subjects rendered cool under a navy overlay) — a signature look from the rebrand graphic. No gradients-for-decoration, no busy patterns.
- **Imagery vibe:** authentic documentary photos of boys; on hero/section use they are tinted navy for cohesion; elsewhere full-colour and warm.
- **Corner radii:** soft — cards `16px`, inputs/buttons pill (`999px`), icon holders are perfect circles (mirrors the round logo mark).
- **Cards:** white, `1px` subtle border, soft **navy-tinted shadow**, medium rounding, optional 4px red accent bar on top; lift `-4px` with a larger shadow on hover.
- **Shadows:** low-spread, navy-tinted (`rgba(17,23,92,…)`), never black. CTA/red buttons carry a red-tinted glow shadow.
- **Buttons:** fully-rounded pills, UPPERCASE Montserrat, letter-spaced. Red = primary CTA, navy = secondary, outline/ghost = tertiary. Hover darkens ~8% (brightness filter); press scales to 0.97.
- **Motion:** restrained — fades and short lifts, `~220ms` ease-out; count-up animation on impact stats. No bounces.
- **Layout:** centered `1180px` max container, generous vertical rhythm (80px section padding), sticky translucent (blurred) top nav.
- **Iconography:** round navy/red icon discs above program titles.

## ICONOGRAPHY
- The live site uses flat single-color **PNG icons from icons8** (love, shield, users, mentor, law) inside circular holders — not an icon font or inline SVG sprite, and no emoji.
- Those PNGs are hosted on the WordPress site and were **not** bundled here. **Substitution (FLAGGED):** this system uses **Lucide** (CDN, `unpkg.com/lucide`) — a clean single-weight stroke set — as the closest match, mounted inside the `IconCircle` component. If you need pixel-exact parity with the site, replace with the original icons8 PNGs.
- Unicode/emoji are **not** used as icons anywhere in the brand.

---

## Foundation & Fonts caveat
**FLAG:** The brand's exact typefaces were not supplied. The wordmark is a bold geometric sans; **Montserrat** (display) + **Open Sans** (body) are used as the nearest Google Fonts match and are loaded via `@import` in `tokens/fonts.css`. Please confirm the intended fonts or send the licensed font files to replace these.

---

## Index / Manifest
- `styles.css` — root entry; `@import`s all token files (link this one file).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `assets/` — `logo-colour.png`, `logo-white.png`, `favicon.png`, `mockup-clipboard.jpg`, `rebrand.png`.
- `components/core/` — reusable primitives (see below).
- `ui_kits/website/` — `index.html` + `Homepage.jsx`: interactive marketing-homepage recreation.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `thumbnail.html` — homepage tile. `SKILL.md` — Agent Skills wrapper.

### Components (namespace `window.BoysAidNetworkDesignSystem_b9a295`)
- **Button** — pill CTA; variants accent/primary/outline/ghost/on-dark.
- **Badge** — uppercase category/status chip.
- **Card** — white elevated card, optional red accent bar, hover-lift.
- **StatCounter** — large impact metric with red suffix.
- **IconCircle** — round navy/red icon disc.
- **SectionHeading** — eyebrow + heading + red underline + subtitle.

### Intentional additions
No source component library was provided, so the six primitives above were authored to match the brand's observed patterns (buttons, cards, impact stats, program icon discs, section headers). They cover the marketing website's needs; extend as new surfaces appear.

### UI kits
- **Website** (`ui_kits/website/`) — homepage recreation: sticky nav, navy duotone hero, impact stats band, 6-program grid, blog/impact stories, red CTA band, footer, and a donate modal.

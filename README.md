# Consensus Holdings / Technocratic Union Website

An in-fiction website for the **Technocratic Union** (Mage: the Ascension, M20),
built as a campaign prop. It has two faces:

- **Public site — "Consensus Holdings"**: a bland Fortune-500 conglomerate site.
  The five Conventions appear as corporate divisions; the accomplishments,
  press releases, and initiatives launder real M20 lore into investor-relations
  copy. Recognizable to players, invisible to Sleepers.
- **Internal portal**: reached via the low-contrast **Personnel Access** link in
  the public footer. Any credentials pass the (theatrical) clearance check, and
  the entered name personalizes the whole portal. Inside: an animated command
  dashboard, five Convention kanban boards (each tracking a long-horizon
  operation — including cards **NOT SHARED WITH SYMPOSIUM**), and an HR
  directorate with downloadable PDF forms.

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # typecheck + production build to dist/
npm run preview   # serve the production build (matches Pages behavior)
```

Stack: Vite + React + TypeScript, react-router (HashRouter), @dnd-kit for the
kanban boards. No backend, no persistence — session state is in-memory theater.

### Regenerating the HR form PDFs

The forms live as print-styled HTML in `forms-src/` and are committed as PDFs
in `public/forms/`. To regenerate after editing:

```bash
node scripts/generate-forms.mjs   # uses headless Chromium via @playwright/test
```

### Screenshot / E2E tour

```bash
npm run preview -- --port 4173 &
node scripts/screenshot-tour.mjs http://localhost:4173/technocracy-website/ shots/
```

Drives the whole site (public pages → login gate → dashboard → boards → drag
test → HR → logout gate) and fails on any broken gate.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to **GitHub Pages** on every
push to `main`. One-time setup: repository **Settings → Pages → Source →
GitHub Actions**. The site is served from `/technocracy-website/` (see `base`
in `vite.config.ts`); routing uses hash URLs so deep links survive reloads.

## Storyteller material (not served by the site)

- `characters/` — M20 character sheets for the NPCs who appear on the site
  (press-release executives, board assignees, and the Sleeper staff who keep
  the front office running).
- `game-assets/` — M20 stat writeups for every Wonder, Procedure, and program
  the site mentions (DermaTrue, Sentinel-312, Social Conditioning refresh,
  THV-9, and friends), with requisition notes and story hooks.

## Assets & licensing

- Photography: [Unsplash](https://unsplash.com/license) (free license), bundled
  locally in `src/assets/photos/`.
- Display font: Grenze Gotisch (SIL OFL), bundled in `src/assets/fonts/`.
- Brand marks in `src/components/shared/logos.tsx` are hand-traced SVG
  approximations of the Technocracy insignia for fan use.

> The World of Darkness, Mage: the Ascension, the Technocratic Union, and all
> related marks are property of Paradox Interactive / White Wolf / Onyx Path.
> This is an unofficial, non-commercial fan work. No challenge to any
> trademark is intended. Consensus Holdings would like to remind you that it
> does not exist.

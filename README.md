# Deepthi Rasad — Portfolio

A React + Tailwind CSS portfolio built from your CV, with a custom cursor,
scroll-triggered reveals, parallax hero layers, glitch-style project-tile
hover previews, and a freely draggable project collage.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL. To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Add your own photo, project images, and videos

Everything lives in `public/`, referenced by path — no rebuild logic needed,
just drop files in and the site picks them up:

- **Your photo** → save as `public/photo.jpg` (used in the About section).
- **Project images** → save into `public/projects/`, e.g. `public/projects/floorplan.jpg`.
- **Project preview clips** → short, muted, looping `.mp4` clips work best
  (a few seconds, no audio needed since they're muted). Save into
  `public/projects/`, e.g. `public/projects/floorplan.mp4`.

The filenames the site expects are set in `src/data/portfolioData.js` — open
that file and either rename your files to match, or edit the `image` /
`video` paths per project. If an image or video is missing, the tile just
shows a quiet gradient instead of breaking, so you can fill these in
gradually.

## Edit your content

All text — name, bio, stats, skills, projects, experience, certifications —
lives in one place: `src/data/portfolioData.js`. Change it there and every
section updates automatically.

## Project structure

```
src/
  components/   UI sections (Hero, Projects, Collage, About, Skills, Experience, Contact...)
  hooks/        useCursor (custom cursor), useReveal (scroll reveals), useParallax
  data/         portfolioData.js — all your content
  index.css     design tokens (colors, fonts) + animation/cursor CSS
```

## Deploy

This is a standard Vite app, so it deploys anywhere static:

- **Vercel**: `npx vercel` (or connect the GitHub repo in the dashboard).
- **Netlify**: drag the `dist/` folder (after `npm run build`) into
  Netlify's deploy UI, or connect the repo.

Build command: `npm run build` · Output directory: `dist`

## Notes on the interactions

- **Custom cursor** — a small dot plus a trailing ring (`src/hooks/useCursor.js`).
  Any element with `data-cursor="link"` or `data-cursor="drag"` grows the ring
  on hover. Falls back to the normal system cursor on touch devices.
- **Parallax hero** — background shapes and code fragments drift at
  different speeds as you scroll (`src/hooks/useParallax.js`), driven by
  `data-speed` attributes.
- **Scroll reveals** — sections fade/slide in once when they enter the
  viewport (`src/hooks/useReveal.js`), and respect `prefers-reduced-motion`.
- **Glitch hover on project tiles** — red/blue offset layers plus a scanning
  line animate in on hover (`src/index.css`, `.tile:hover .glitch-*`); the
  matching preview video plays at the same time.
- **Drag-to-rearrange collage** — a "Playground" section where project
  snapshot cards can be dragged anywhere on the board using pointer events
  (`src/components/Collage.jsx`); the card you're holding comes to the front.

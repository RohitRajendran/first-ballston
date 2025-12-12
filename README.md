# First Ballston Commons

Marketing site for the First Ballston Commons community, rebuilt with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting started

```bash
npm install
npm run dev
```

- `npm run dev` – start the development server.
- `npm run build` – create a production build in `dist/`.
- `npm run preview` – run the built site locally.
- `npm run check` – type-check Astro components.

## Deployment

- Netlify deploys the static build output from `dist/` using the included `netlify.toml`.
- Build command: `npm run build`
- Node version: 20

## Project structure

- `src/pages/` – Astro pages for the public site.
- `src/components/` – shared UI components like the navigation and footer.
- `src/layouts/` – base page layout and metadata handling.
- `src/styles/` – global Tailwind entrypoint and custom component styles.
- `public/` – static assets (icons, manifest, banner image, PDF forms).

## Content

The site includes:

- Homepage overview and neighborhood highlights.
- Community background and contact links.
- Resident notices for parking, noise, and trash routines.
- Architectural Review guidance and pre-approved front door colors.

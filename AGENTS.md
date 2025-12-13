# AGENTS

This file defines default instructions for contributors and automation working in this repository. Its scope is the entire repo unless overridden by a nested `AGENTS.md`.

## Workflow expectations

- Use the npm scripts in `package.json` for local tasks (e.g., `npm run check`, `npm run lint`, `npm run format:check`).
- Prefer small, focused commits that explain the intent of the change.
- Avoid introducing new runtime dependencies unless necessary.

## Code and content guidelines

- The site is built with Astro and Tailwind CSS; follow existing patterns in `src/pages/`, `src/components/`, and `src/layouts/` for structure and class naming.
- Keep written content clear and community-friendly. When editing resident notices or guidance, retain their instructive tone and avoid jargon.
- Maintain accessibility basics: meaningful alt text for images, descriptive link text, and appropriate heading hierarchy.
- Use Prettier formatting and ESLint defaults; do not add custom formatting rules in individual files.

## Validation

- Run `npm run check` for type and Astro validations and `npm run lint` when you change code or content files.
- Always pair linting with spelling and formatting checks: `npm run lint && npm run spellcheck && npm run format:check`.
- For style-only edits (e.g., copy changes), at least run `npm run format:check` to ensure formatting stays consistent.

## Pull request notes

- Summarize changes in a short bullet list and document which checks were executed.
- If new instructions are needed for a subdirectory, add a nested `AGENTS.md` there.

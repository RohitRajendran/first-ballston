# First Ballston Commons – Static Reference

Static recreation of the First Ballston Commons site using local Bootstrap assets and minimal custom CSS. Includes quick links for residents, approved colors, notices, and locally hosted HOA documents.

## Structure
- `index.html` – Welcome/hero, community overview, resident quick links.
- `approved-colors.html` – Color swatches and links to Benjamin Moore references.
- `notice-to-residents.html` – Community reminders and rules.
- `style.css` – Light overrides for typography and cards.
- `bootstrap.min.css` – Local Bootstrap theme.
- `assets/` – Images and PDFs (bylaws, covenants, forms, approved colors).

## Links
- Resident portal: https://engage.goenumerate.com/s/firstballstoncommons/home.php
- Contact: https://engage.goenumerate.com/s/firstballstoncommons/hoapage.php?page=contact_17941

## Usage
Open any HTML file locally in a browser. All CSS is local; Bootstrap JS still uses the CDN. To use offline, download the Bootstrap JS bundle and update the script tag references.

## Notes
- Colors page uses hover styles via `.color-card` in `style.css`.
- All HOA documents are served from `assets/` for offline access; verify file freshness periodically.

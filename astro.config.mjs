import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://firstballstoncommons.com',
  adapter: netlify({
    mode: 'static',
  }),
  integrations: [tailwind()],
});

import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://firstballston.com",
  adapter: netlify({
    mode: "static",
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

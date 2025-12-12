import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://firstballston.com",
  adapter: netlify({
    mode: "static",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});

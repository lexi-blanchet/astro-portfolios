// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

const isLocal = !process.env.GITHUB_ACTIONS;

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  site: 'https://lexi-blanchet.github.io',
  base: '/astro-portfolios',
  adapter: undefined,
});
// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import node from "@astrojs/node";

const isLocal = !process.env.GITHUB_ACTIONS;

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },
  output: "server",

  // Github actions require a specific setup so we exclude our docker config
  server: isLocal ? { host: true } : undefined,
  adapter: isLocal ? node({ mode: 'standalone' }) : undefined,
});
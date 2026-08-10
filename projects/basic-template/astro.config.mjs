// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

const isLocal = !process.env.GITHUB_ACTIONS;

// https://astro.build/config
export default defineConfig({
  site: 'https://lexi-blanchet.github.io',
  base: '/astro-portfolios',
  // Github actions require a specific setup so we exclude our docker config
  server: isLocal ? { host: true } : undefined,
  adapter: isLocal ? node({ mode: 'standalone' }) : undefined,
});
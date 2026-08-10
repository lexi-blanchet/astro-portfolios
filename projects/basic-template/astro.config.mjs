// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import node from '@astrojs/node';

const isLocal = !process.env.GITHUB_ACTIONS;

// https://astro.build/config
export default defineConfig({
  site: 'https://lexi-blanchet.github.io',
  base: '/astro-portfolios',
  server: isLocal ? { host: true } : undefined,
  adapter: isLocal ? node({ mode: 'standalone' }) : undefined,
});
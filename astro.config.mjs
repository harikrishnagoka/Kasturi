// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Hosting note: currently deployed to GitHub Pages as a *project* site
 * (github.com/harikrishnagoka/Kasturi -> harikrishnagoka.github.io/Kasturi/),
 * which is why `base` is set below. Once a real domain is attached — either
 * a custom domain on GitHub Pages, or a move to Vercel/Netlify — remove the
 * `base` line and point `site` at the real domain instead. Every canonical
 * URL, the sitemap and the JSON-LD in src/layouts/Base.astro derive from
 * `site`, so this one edit is all that changes when the domain is ready.
 */
export default defineConfig({
  site: 'https://harikrishnagoka.github.io/Kasturi/',
  base: '/Kasturi',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});

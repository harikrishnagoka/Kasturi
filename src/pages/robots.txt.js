// A dynamic endpoint rather than a static public/robots.txt file, so the
// Sitemap line always matches wherever this build is actually deployed
// (GitHub Pages subpath today, a custom domain later) without needing a
// manual edit in two places.
import { withBase } from '../utils/url.js';

export function GET({ site }) {
  const sitemapUrl = new URL(withBase('/sitemap-index.xml'), site).href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

/**
 * GitHub Pages currently serves this site from a subpath (/Kasturi/), set as
 * `base` in astro.config.mjs. Astro does NOT rewrite hardcoded `href="/..."`
 * strings or `public/` asset paths for you — every internal link and every
 * reference to a `public/` file must go through this helper so the site keeps
 * working under a subpath, and keeps working with zero changes if `base` is
 * later removed (once a custom domain is attached, this becomes a no-op).
 */
export function withBase(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

/** Full absolute URL for a root-relative `path`, resolved against wherever
 *  this build is actually deployed (pass `Astro.site`). Use this for JSON-LD
 *  and other machine-readable URLs built on pages other than Base.astro. */
export function absoluteUrl(site, path) {
  return `${site.origin}${withBase(path)}`;
}

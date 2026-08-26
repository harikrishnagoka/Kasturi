import sharp from 'sharp';
import path from 'node:path';

const SRC = 'C:/Users/pc/Downloads/kasturi-logo-raw.png';
const OUT = 'C:/Claude/Drive/Kasturi/.claude/worktrees/kasturi-ayurvedic-website-5f0d66/public/brand';

/** Turn the white studio background into transparency, keeping antialiased edges soft. */
async function whiteToAlpha(buf) {
  const img = sharp(buf).ensureAlpha();
  const { width, height } = await img.metadata();
  const raw = await img.raw().toBuffer();
  for (let i = 0; i < raw.length; i += 4) {
    const r = raw[i], g = raw[i + 1], b = raw[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum >= 250) {
      raw[i + 3] = 0;
    } else if (lum > 215) {
      // Feather the near-white halo so edges do not look cut out.
      raw[i + 3] = Math.round(255 * (1 - (lum - 215) / 35));
    }
  }
  return sharp(raw, { raw: { width, height, channels: 4 } }).png().toBuffer();
}

async function crop(region, name) {
  const cropped = await sharp(SRC).extract(region).png().toBuffer();
  // Trim the leftover white margin before knocking out the background.
  const trimmed = await sharp(cropped).trim({ threshold: 12 }).png().toBuffer();
  const transparent = await whiteToAlpha(trimmed);
  await sharp(transparent).toFile(path.join(OUT, `${name}.png`));
  const meta = await sharp(transparent).metadata();
  console.log(`${name}.png  ${meta.width}x${meta.height}`);
  return transparent;
}

const { width, height } = await sharp(SRC).metadata();
console.log(`source ${width}x${height}`);

// Proportional regions measured off the rendered result: the horizontal lockup
// sits in the top ~58% and the standalone icon is centred underneath it.
await crop(
  { left: 0, top: 0, width, height: Math.round(height * 0.58) },
  'logo-lockup'
);

const icon = await crop(
  {
    left: Math.round(width * 0.36),
    top: Math.round(height * 0.58),
    width: Math.round(width * 0.28),
    height: Math.round(height * 0.42),
  },
  'logo-icon'
);

// Favicon + touch icon set, squared with padding so the mark is not cropped.
for (const size of [32, 180, 512]) {
  const pad = Math.round(size * 0.08);
  await sharp(icon)
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT, `icon-${size}.png`));
  console.log(`icon-${size}.png`);
}

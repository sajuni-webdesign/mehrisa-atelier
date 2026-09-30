/**
 * Serve Unsplash images straight from their imgix CDN (auto AVIF/WebP,
 * resized per breakpoint) — no server-side optimisation cost, instant edge cache.
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("https://images.unsplash.com/")) {
    return `${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 72}`;
  }
  return src;
}

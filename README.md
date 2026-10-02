# Mehrisa Atelier — Luxury Indian Couture Boutique

A premium, SEO-first boutique website built with **Next.js 16 (App Router) + React 19 + Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npx serve out    # preview the production build
```

**Live:** https://mehrisa.sajuni.in

## Deploy (Cloudflare Pages)
Static export (`output: "export"`) → `out/`, deployed on Cloudflare Pages with Git integration: every push to `main` rebuilds automatically.
- Build command: `npm run build` · Output directory: `out` · Node 22 (`.node-version`)
- Edge caching & security headers: `public/_headers`

## Sections
Announcement ribbon · Glass nav strip with Home + scroll-spy · Full-screen "bride getting ready" video hero with synced chapters · Craft marquee · Collection bento grid ·
Bridal feature · New arrivals (filters, wishlist, bag) · Atelier (craft video + counters) · Lookbook carousel ·
Bespoke journey · Testimonials · FAQ · Instagram grid · Newsletter · Footer · WhatsApp stylist button

## Rebrand in one place
All brand details, products, collections, testimonials and FAQs live in **`lib/site.ts`**.
Set your live domain with `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` (used for canonical, sitemap & schema).
The phone / WhatsApp numbers there are placeholders — replace before going live.

## SEO & performance
- Fully static pre-render, zero animation libraries (IntersectionObserver + CSS only)
- Metadata, Open Graph, Twitter cards, canonical, auto-generated OG image
- No structured data: this is a labelled demo, so no business / product / offer / FAQ schema is published
- `sitemap.xml`, `robots.txt`, web manifest, SVG favicon
- `next/font` self-hosted fonts, responsive Unsplash CDN images (AVIF/WebP), lazy videos that pause off-screen
- Honors `prefers-reduced-motion`, skip link, semantic landmarks, AA-contrast text

## Media credits
Photos: [Unsplash](https://unsplash.com) (Unsplash License). Videos: [Pexels](https://www.pexels.com/license/) and [Mixkit](https://mixkit.co/license/) — free for commercial use, no watermark, no attribution required. Clips are trimmed, muted and re-encoded (H.264, faststart) and self-hosted in `public/videos`.

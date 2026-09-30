import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export — served straight from Cloudflare's edge (see public/_headers for caching)
  output: "export",
  poweredByHeader: false,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920],
  },
};

export default nextConfig;

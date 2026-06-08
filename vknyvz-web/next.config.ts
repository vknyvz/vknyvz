import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Logos are tiny static files; skip the image optimizer so prod (Alpine
  // container) never depends on sharp being present. Zero visual difference.
  images: { unoptimized: true },
};

export default nextConfig;

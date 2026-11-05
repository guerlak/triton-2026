/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    unoptimized: false,
    qualities: [70, 75, 80, 90],
    formats: ["image/avif", "image/webp"],
  },

  // Strict React mode for development
  reactStrictMode: true,

  // Compress files
  compress: true,

  // Production source maps
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
    
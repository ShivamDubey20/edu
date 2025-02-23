

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static export
  trailingSlash: true,  // Fixes routing issues
  images: {
    unoptimized: true,  // Disables Image Optimization API for static hosting
  },
};

module.exports = nextConfig;

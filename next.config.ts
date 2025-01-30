/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Prevents Next.js from optimizing images (required for GitHub Pages)
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/zoya" : "", // Ensures assets are correctly referenced
  basePath: process.env.NODE_ENV === "production" ? "/zoya" : "", // Fixes routing for GitHub Pages
};

module.exports = nextConfig;

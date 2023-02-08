/** @type {import('next').NextConfig} */
const headers = require("./securityHeaders.ts");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  runtimeCaching,

  disable: process.env.NODE_ENV === "development",
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["res.cloudinary.com", "cdn.sanity.io"],
  },
  // add security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers,
      },
    ];
  },
};

module.exports = withPWA(nextConfig);

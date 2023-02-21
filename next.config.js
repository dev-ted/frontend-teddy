// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const headers = require("./securityHeaders");
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

module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { hideSourcemaps: true },
);

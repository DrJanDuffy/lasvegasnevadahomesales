/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")

const env = require("./env.mjs")

const config = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  rewrites: async () => [
    { source: "/healthz", destination: "/api/health" },
    { source: "/api/healthz", destination: "/api/health" },
    { source: "/health", destination: "/api/health" },
    { source: "/ping", destination: "/api/health" },
  ],
}

module.exports = env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config 
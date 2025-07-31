/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")

const env = require("./env.mjs")

const config = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporary bypass for deployment
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Domain redirects
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.lasvegasnevadahomesales.com',
          },
        ],
        destination: 'https://lasvegasnevadahomesales.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'http://lasvegasnevadahomesales.com',
          },
        ],
        destination: 'https://lasvegasnevadahomesales.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'http://www.lasvegasnevadahomesales.com',
          },
        ],
        destination: 'https://lasvegasnevadahomesales.com/:path*',
        permanent: true,
      },
      // Health check redirects
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
    ]
  },
}

module.exports = env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config 
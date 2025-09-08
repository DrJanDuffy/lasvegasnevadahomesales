/** @type {import('next').NextConfig} */
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
        hostname: 'files.keepingcurrentmatters.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  rewrites: async () => [
    { source: '/healthz', destination: '/api/health' },
    { source: '/api/healthz', destination: '/api/health' },
    { source: '/health', destination: '/api/health' },
    { source: '/ping', destination: '/api/health' },
  ],
};

module.exports = config;

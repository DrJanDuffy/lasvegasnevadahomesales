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
  redirects: async () => [
    // HTTP to HTTPS redirects
    {
      source: '/(.*)',
      has: [
        {
          type: 'header',
          key: 'x-forwarded-proto',
          value: 'http',
        },
      ],
      destination: 'https://lasvegasnevadahomesales.com/:path*',
      permanent: true,
    },
    // WWW to non-WWW redirects
    {
      source: '/(.*)',
      has: [
        {
          type: 'host',
          value: 'www.lasvegasnevadahomesales.com',
        },
      ],
      destination: 'https://lasvegasnevadahomesales.com/:path*',
      permanent: true,
    },
    // Common page redirects
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
    {
      source: '/home/',
      destination: '/',
      permanent: true,
    },
    // UTM parameter cleanup
    {
      source: '/(.*)',
      has: [
        {
          type: 'query',
          key: 'utm_source',
        },
      ],
      destination: '/:path*',
      permanent: true,
    },
    {
      source: '/(.*)',
      has: [
        {
          type: 'query',
          key: 'utm_medium',
        },
      ],
      destination: '/:path*',
      permanent: true,
    },
    {
      source: '/(.*)',
      has: [
        {
          type: 'query',
          key: 'utm_campaign',
        },
      ],
      destination: '/:path*',
      permanent: true,
    },
  ],
  rewrites: async () => [
    { source: '/healthz', destination: '/api/health' },
    { source: '/api/healthz', destination: '/api/health' },
    { source: '/health', destination: '/api/health' },
    { source: '/ping', destination: '/api/health' },
  ],
};

module.exports = config;

import { redirect } from 'next/navigation'

// Handle redirects for common 404 issues and URL variations
export function handleRedirects(pathname: string) {
  // Remove UTM parameters and redirect to clean URL
  if (pathname.includes('?utm_')) {
    const cleanPath = pathname.split('?')[0]
    if (cleanPath) {
      redirect(cleanPath)
    }
  }
  
  // Handle /home redirects
  if (pathname === '/home' || pathname === '/home/') {
    redirect('/')
  }
  
  // Handle www redirects (should be handled at domain level, but adding as backup)
  if (pathname.startsWith('/www.')) {
    redirect(pathname.replace('/www.', '/'))
  }
}

// Next.js redirects configuration
export const redirects = [
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
]

export default handleRedirects
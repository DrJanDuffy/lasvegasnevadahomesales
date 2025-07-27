import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory store for rate limiting
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration
const rateLimitConfig = {
  // Form submissions - more lenient for real estate
  '/api/leads': {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // 10 submissions per 15 minutes
    message: 'Too many form submissions, please try again later'
  },
  
  // Page views - very lenient
  '/contact': {
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 50, // 50 page views per 5 minutes
    message: 'Too many requests, please slow down'
  },
  
  // Search pages - moderate
  '/properties/search': {
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 30, // 30 searches per 10 minutes
    message: 'Too many searches, please wait before searching again'
  }
}

// Bot detection patterns
const botPatterns = [
  // Suspicious user agents
  /bot|crawler|spider|scraper/i,
  /curl|wget|python|java/i,
  
  // Suspicious behavior patterns
  /no-referrer/i,
  /empty-referrer/i
]

// Legitimate user patterns to whitelist
const legitimatePatterns = [
  // Real estate browsing patterns
  /contact.*api\/leads/i,
  /properties.*search/i,
  /home-valuation.*api\/leads/i,
  
  // Normal user agents
  /mozilla.*windows/i,
  /mozilla.*macintosh/i,
  /mozilla.*iphone/i,
  /mozilla.*android/i,
  
  // Geographic patterns (Las Vegas area)
  /las vegas/i,
  /nevada/i,
  /summerlin/i,
  /henderson/i
]

function isLegitimateUser(request: NextRequest): boolean {
  const userAgent = request.headers.get('user-agent') || ''
  const referer = request.headers.get('referer') || ''
  const path = request.nextUrl.pathname
  
  // Check for legitimate patterns
  const hasLegitimatePattern = legitimatePatterns.some(pattern => 
    pattern.test(userAgent) || pattern.test(referer) || pattern.test(path)
  )
  
  // Check for bot patterns
  const hasBotPattern = botPatterns.some(pattern => 
    pattern.test(userAgent) || pattern.test(referer)
  )
  
  // Consider legitimate if no bot patterns and has legitimate patterns
  return !hasBotPattern && hasLegitimatePattern
}

function getRateLimitKey(request: NextRequest): string {
  // Use IP address for rate limiting
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             request.ip || 
             'unknown'
  
  return `${ip}:${request.nextUrl.pathname}`
}

function checkRateLimit(request: NextRequest): { allowed: boolean; message?: string } {
  const path = request.nextUrl.pathname
  const config = rateLimitConfig[path as keyof typeof rateLimitConfig]
  
  if (!config) {
    return { allowed: true } // No rate limiting for this path
  }
  
  const key = getRateLimitKey(request)
  const now = Date.now()
  
  // Get current rate limit data
  const current = rateLimitStore.get(key)
  
  if (!current || now > current.resetTime) {
    // First request or window expired
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + config.windowMs
    })
    return { allowed: true }
  }
  
  if (current.count >= config.max) {
    return { 
      allowed: false, 
      message: config.message 
    }
  }
  
  // Increment count
  current.count++
  rateLimitStore.set(key, current)
  
  return { allowed: true }
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  // Skip middleware for static files and API health checks
  if (path.startsWith('/_next/') || 
      path.startsWith('/static/') || 
      path === '/api/health' ||
      path === '/healthz') {
    return NextResponse.next()
  }
  
  // Check if user is legitimate
  const isLegitimate = isLegitimateUser(request)
  
  // Apply rate limiting
  const rateLimit = checkRateLimit(request)
  
  if (!rateLimit.allowed) {
    // Rate limit exceeded
    return NextResponse.json(
      { error: rateLimit.message },
      { status: 429 }
    )
  }
  
  // Add security headers
  const response = NextResponse.next()
  
  // Security headers for legitimate users
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Add rate limit headers
  const key = getRateLimitKey(request)
  const current = rateLimitStore.get(key)
  if (current) {
    response.headers.set('X-RateLimit-Limit', '10')
    response.headers.set('X-RateLimit-Remaining', String(Math.max(0, 10 - current.count)))
    response.headers.set('X-RateLimit-Reset', String(current.resetTime))
  }
  
  // Add user type header for debugging
  response.headers.set('X-User-Type', isLegitimate ? 'legitimate' : 'suspicious')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 
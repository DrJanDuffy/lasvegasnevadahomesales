"use client"

import { useEffect, useState, useCallback } from 'react'

interface SEOEvent {
  type: string
  timestamp: number
  data: any
}

interface CoreWebVitals {
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  fcp: number | null
}

interface UserBehavior {
  scrollDepth: number
  timeOnPage: number
  interactions: number
  formSubmissions: number
  phoneClicks: number
  emailClicks: number
}

interface AdvancedSEOMonitorProps {
  pageUrl?: string
  pageTitle?: string
  debug?: boolean
  trackUserBehavior?: boolean
  trackConversions?: boolean
}

export default function AdvancedSEOMonitor({
  pageUrl,
  pageTitle,
  debug = false,
  trackUserBehavior = true,
  trackConversions = true
}: AdvancedSEOMonitorProps) {
  const [events, setEvents] = useState<SEOEvent[]>([])
  const [coreWebVitals, setCoreWebVitals] = useState<CoreWebVitals>({
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fcp: null
  })
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({
    scrollDepth: 0,
    timeOnPage: 0,
    interactions: 0,
    formSubmissions: 0,
    phoneClicks: 0,
    emailClicks: 0
  })

  const logEvent = useCallback((type: string, data: any = {}) => {
    const event: SEOEvent = {
      type,
      timestamp: Date.now(),
      data: {
        pageUrl: pageUrl || window.location.href,
        pageTitle: pageTitle || document.title,
        ...data
      }
    }

    setEvents(prev => [...prev, event])

    if (debug) {
      console.log('SEO Event:', event)
    }

    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', type, {
        event_category: 'SEO',
        event_label: pageUrl || window.location.href,
        value: data.value || 1,
        ...data
      })
    }
  }, [pageUrl, pageTitle, debug])

  // Track Core Web Vitals
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        if (lastEntry) {
          setCoreWebVitals(prev => ({ ...prev, lcp: lastEntry.startTime }))
          logEvent('lcp', { value: lastEntry.startTime })
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming
          if (fidEntry.processingStart && fidEntry.startTime) {
            const fid = fidEntry.processingStart - fidEntry.startTime
            setCoreWebVitals(prev => ({ ...prev, fid }))
            logEvent('fid', { value: fid })
          }
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value
          }
        })
        setCoreWebVitals(prev => ({ ...prev, cls: clsValue }))
        logEvent('cls', { value: clsValue })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [logEvent])

  // Track TTFB and FCP
  useEffect(() => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      const fcp = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart
      
      setCoreWebVitals(prev => ({ ...prev, ttfb, fcp }))
      logEvent('ttfb', { value: ttfb })
      logEvent('fcp', { value: fcp })
    }
  }, [logEvent])

  // Track user behavior
  useEffect(() => {
    if (!trackUserBehavior) return

    let startTime = Date.now()
    let maxScrollDepth = 0
    let interactionCount = 0

    const trackScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent
        setUserBehavior(prev => ({ ...prev, scrollDepth: maxScrollDepth }))
        
        // Log significant scroll milestones
        if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
          logEvent('scroll_25_percent')
        } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
          logEvent('scroll_50_percent')
        } else if (maxScrollDepth >= 75 && maxScrollDepth < 100) {
          logEvent('scroll_75_percent')
        } else if (maxScrollDepth >= 100) {
          logEvent('scroll_100_percent')
        }
      }
    }

    const trackInteractions = () => {
      interactionCount++
      setUserBehavior(prev => ({ ...prev, interactions: interactionCount }))
      logEvent('user_interaction', { interactionCount })
    }

    const trackTimeOnPage = () => {
      const timeOnPage = Date.now() - startTime
      setUserBehavior(prev => ({ ...prev, timeOnPage }))
      
      // Log time milestones
      if (timeOnPage >= 30000 && timeOnPage < 60000) {
        logEvent('time_on_page_30s')
      } else if (timeOnPage >= 60000 && timeOnPage < 120000) {
        logEvent('time_on_page_1m')
      } else if (timeOnPage >= 120000) {
        logEvent('time_on_page_2m')
      }
    }

    window.addEventListener('scroll', trackScroll, { passive: true })
    window.addEventListener('click', trackInteractions, { passive: true })
    window.addEventListener('keydown', trackInteractions, { passive: true })

    const timeInterval = setInterval(trackTimeOnPage, 5000)

    return () => {
      window.removeEventListener('scroll', trackScroll)
      window.removeEventListener('click', trackInteractions)
      window.removeEventListener('keydown', trackInteractions)
      clearInterval(timeInterval)
    }
  }, [trackUserBehavior, logEvent])

  // Track conversions
  useEffect(() => {
    if (!trackConversions) return

    const trackFormSubmission = (e: Event) => {
      const target = e.target as HTMLFormElement
      if (target.tagName === 'FORM') {
        setUserBehavior(prev => ({ ...prev, formSubmissions: prev.formSubmissions + 1 }))
        logEvent('form_submission', { formId: target.id || 'unknown' })
      }
    }

    const trackPhoneClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.href.startsWith('tel:')) {
        setUserBehavior(prev => ({ ...prev, phoneClicks: prev.phoneClicks + 1 }))
        logEvent('phone_click', { phoneNumber: target.href.replace('tel:', '') })
      }
    }

    const trackEmailClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.href.startsWith('mailto:')) {
        setUserBehavior(prev => ({ ...prev, emailClicks: prev.emailClicks + 1 }))
        logEvent('email_click', { email: target.href.replace('mailto:', '') })
      }
    }

    document.addEventListener('submit', trackFormSubmission)
    document.addEventListener('click', trackPhoneClick)
    document.addEventListener('click', trackEmailClick)

    return () => {
      document.removeEventListener('submit', trackFormSubmission)
      document.removeEventListener('click', trackPhoneClick)
      document.removeEventListener('click', trackEmailClick)
    }
  }, [trackConversions, logEvent])

  // Track page load completion
  useEffect(() => {
    const handleLoad = () => {
      logEvent('page_loaded', {
        loadTime: performance.now(),
        domContentLoaded: performance.getEntriesByType('navigation')[0]?.domContentLoadedEventEnd || 0
      })
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [logEvent])

  // Track visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        logEvent('page_hidden')
      } else {
        logEvent('page_visible')
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [logEvent])

  return null
}

// Hook for accessing SEO data
export function useAdvancedSEOTracking() {
  const [seoData, setSeoData] = useState({
    events: [] as SEOEvent[],
    coreWebVitals: {} as CoreWebVitals,
    userBehavior: {} as UserBehavior
  })

  return seoData
} 
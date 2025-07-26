"use client"

import { useEffect, useState } from 'react'

interface SEOMetrics {
  pageLoadTime: number
  domContentLoaded: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
}

interface SEOMonitorProps {
  pageName: string
  enableTracking?: boolean
}

export function SEOMonitor({ pageName, enableTracking = true }: SEOMonitorProps) {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null)

  useEffect(() => {
    if (!enableTracking || typeof window === 'undefined') return

    // Track page load performance
    const trackPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const paint = performance.getEntriesByType('paint')
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0]
        
        const pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
        
        setMetrics({
          pageLoadTime,
          domContentLoaded,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          cumulativeLayoutShift: 0, // Would need to be calculated from CLS observer
          firstInputDelay: 0, // Would need to be calculated from FID observer
        })

        // Send to analytics (if configured)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_performance', {
            page_name: pageName,
            page_load_time: pageLoadTime,
            dom_content_loaded: domContentLoaded,
            first_contentful_paint: fcp ? fcp.startTime : 0,
            largest_contentful_paint: lcp ? lcp.startTime : 0,
          })
        }
      }
    }

    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // Track LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          
          if (typeof gtag !== 'undefined' && lastEntry) {
            gtag('event', 'largest_contentful_paint', {
              value: lastEntry.startTime,
              page_name: pageName,
            })
          }
        })
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // Track FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            const eventEntry = entry as PerformanceEventTiming
            if (typeof gtag !== 'undefined') {
              gtag('event', 'first_input_delay', {
                value: eventEntry.processingStart - eventEntry.startTime,
                page_name: pageName,
              })
            }
          })
        })
        
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Track CLS
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'cumulative_layout_shift', {
              value: clsValue,
              page_name: pageName,
            })
          }
        })
        
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      }
    }

    // Track user interactions
    const trackInteractions = () => {
      const trackEvent = (event: string, element: string) => {
        if (typeof gtag !== 'undefined') {
          gtag('event', event, {
            page_name: pageName,
            element: element,
          })
        }
      }

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement
        trackEvent('form_submit', form.id || form.className || 'unknown_form')
      })

      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          const button = target.tagName === 'BUTTON' ? target : target.closest('button')
          trackEvent('button_click', button?.id || button?.className || 'unknown_button')
        }
      })

      // Track link clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        if (target.tagName === 'A' || target.closest('a')) {
          const link = target.tagName === 'A' ? target : target.closest('a')
          trackEvent('link_click', (link as HTMLAnchorElement)?.href || 'unknown_link')
        }
      })
    }

    // Initialize tracking
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        trackPerformance()
        trackCoreWebVitals()
        trackInteractions()
      })
    } else {
      trackPerformance()
      trackCoreWebVitals()
      trackInteractions()
    }

    // Track page visibility
    const handleVisibilityChange = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_visibility', {
          page_name: pageName,
          is_visible: !document.hidden,
        })
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [pageName, enableTracking])

  // Debug mode - show metrics in development
  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs z-50">
        <div className="font-bold mb-2">SEO Metrics - {pageName}</div>
        <div>Page Load: {metrics.pageLoadTime.toFixed(0)}ms</div>
        <div>DOM Ready: {metrics.domContentLoaded.toFixed(0)}ms</div>
        <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
        <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
      </div>
    )
  }

  return null
}

// Hook for easy integration
export function useSEOTracking(pageName: string) {
  return { pageName }
} 
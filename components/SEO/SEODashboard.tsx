"use client"

import { useEffect, useState } from 'react'

interface SEOMetrics {
  pageLoadTime: number
  domContentLoaded: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  timeToFirstByte: number
}

interface SearchConsoleData {
  clicks: number
  impressions: number
  ctr: number
  averagePosition: number
  richResults: {
    faq: number
    reviews: number
    howTo: number
    localBusiness: number
  }
  topQueries: Array<{
    query: string
    clicks: number
    impressions: number
    position: number
  }>
}

interface SEODashboardProps {
  pageUrl: string
  pageTitle: string
  targetKeywords: string[]
  debug?: boolean
}

export default function SEODashboard({
  pageUrl,
  pageTitle,
  targetKeywords,
  debug = false
}: SEODashboardProps) {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null)
  const [searchConsoleData, setSearchConsoleData] = useState<SearchConsoleData | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show dashboard in development or when debug is enabled
    if (debug || process.env.NODE_ENV === 'development') {
      setIsVisible(true)
    }

    // Track Core Web Vitals
    const trackMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const paint = performance.getEntriesByType('paint')
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry
        
        const metrics: SEOMetrics = {
          pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          firstInputDelay: 0, // Would need to track user interactions
          cumulativeLayoutShift: 0, // Would need CLS observer
          timeToFirstByte: navigation.responseStart - navigation.requestStart
        }

        setMetrics(metrics)

        // Track LCP
        if ('PerformanceObserver' in window) {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            if (lastEntry) {
              setMetrics(prev => prev ? { ...prev, largestContentfulPaint: lastEntry.startTime } : null)
            }
          })
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        }

        // Track FID
        if ('PerformanceObserver' in window) {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            if (lastEntry && 'processingStart' in lastEntry) {
              const fid = (lastEntry as any).processingStart - lastEntry.startTime
              setMetrics(prev => prev ? { ...prev, firstInputDelay: fid } : null)
            }
          })
          fidObserver.observe({ entryTypes: ['first-input'] })
        }

        // Track CLS
        if ('PerformanceObserver' in window) {
          let clsValue = 0
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if ('value' in entry) {
                clsValue += (entry as any).value
              }
            }
            setMetrics(prev => prev ? { ...prev, cumulativeLayoutShift: clsValue } : null)
          })
          clsObserver.observe({ entryTypes: ['layout-shift'] })
        }
      }
    }

    // Mock Search Console data for demo
    const mockSearchConsoleData: SearchConsoleData = {
      clicks: 1250,
      impressions: 45000,
      ctr: 2.78,
      averagePosition: 12.5,
      richResults: {
        faq: 8,
        reviews: 5,
        howTo: 3,
        localBusiness: 2
      },
      topQueries: [
        { query: "Las Vegas Nevada Home Sales", clicks: 450, impressions: 12000, position: 3.2 },
        { query: "Las Vegas real estate", clicks: 320, impressions: 8500, position: 8.1 },
        { query: "Summerlin homes for sale", clicks: 280, impressions: 6200, position: 5.4 },
        { query: "Henderson real estate", clicks: 200, impressions: 4800, position: 11.2 }
      ]
    }

    setSearchConsoleData(mockSearchConsoleData)
    trackMetrics()
  }, [debug])

  if (!isVisible) {
    return null
  }

  const getPerformanceScore = (lcp: number, fid: number, cls: number) => {
    let score = 100
    
    if (lcp > 2500) score -= 25
    if (fid > 100) score -= 25
    if (cls > 0.1) score -= 25
    
    return Math.max(0, score)
  }

  const performanceScore = metrics ? getPerformanceScore(
    metrics.largestContentfulPaint,
    metrics.firstInputDelay,
    metrics.cumulativeLayoutShift
  ) : 0

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md rounded-lg bg-white p-6 shadow-2xl border border-gray-200">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">SEO Dashboard</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      {/* Performance Metrics */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold text-gray-700">Performance Metrics</h4>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded bg-gray-50 p-2">
            <div className="font-medium text-gray-900">Performance Score</div>
            <div className={`text-lg font-bold ${performanceScore >= 90 ? 'text-green-600' : performanceScore >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
              {performanceScore}/100
            </div>
          </div>
          <div className="rounded bg-gray-50 p-2">
            <div className="font-medium text-gray-900">LCP</div>
            <div className={`text-lg font-bold ${metrics?.largestContentfulPaint && metrics.largestContentfulPaint < 2500 ? 'text-green-600' : 'text-red-600'}`}>
              {metrics?.largestContentfulPaint ? `${Math.round(metrics.largestContentfulPaint)}ms` : 'N/A'}
            </div>
          </div>
          <div className="rounded bg-gray-50 p-2">
            <div className="font-medium text-gray-900">FID</div>
            <div className={`text-lg font-bold ${metrics?.firstInputDelay && metrics.firstInputDelay < 100 ? 'text-green-600' : 'text-red-600'}`}>
              {metrics?.firstInputDelay ? `${Math.round(metrics.firstInputDelay)}ms` : 'N/A'}
            </div>
          </div>
          <div className="rounded bg-gray-50 p-2">
            <div className="font-medium text-gray-900">CLS</div>
            <div className={`text-lg font-bold ${metrics?.cumulativeLayoutShift && metrics.cumulativeLayoutShift < 0.1 ? 'text-green-600' : 'text-red-600'}`}>
              {metrics?.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
            </div>
          </div>
        </div>
      </div>

      {/* Search Console Data */}
      {searchConsoleData && (
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-gray-700">Search Console Data</h4>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded bg-blue-50 p-2">
              <div className="font-medium text-gray-900">Clicks</div>
              <div className="text-lg font-bold text-blue-600">{searchConsoleData.clicks.toLocaleString()}</div>
            </div>
            <div className="rounded bg-green-50 p-2">
              <div className="font-medium text-gray-900">Impressions</div>
              <div className="text-lg font-bold text-green-600">{searchConsoleData.impressions.toLocaleString()}</div>
            </div>
            <div className="rounded bg-purple-50 p-2">
              <div className="font-medium text-gray-900">CTR</div>
              <div className="text-lg font-bold text-purple-600">{searchConsoleData.ctr}%</div>
            </div>
            <div className="rounded bg-orange-50 p-2">
              <div className="font-medium text-gray-900">Avg Position</div>
              <div className="text-lg font-bold text-orange-600">{searchConsoleData.averagePosition}</div>
            </div>
          </div>
        </div>
      )}

      {/* Rich Results */}
      {searchConsoleData && (
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-gray-700">Rich Results</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded bg-yellow-50 p-2">
              <div className="font-medium text-gray-900">FAQ</div>
              <div className="text-lg font-bold text-yellow-600">{searchConsoleData.richResults.faq}</div>
            </div>
            <div className="rounded bg-red-50 p-2">
              <div className="font-medium text-gray-900">Reviews</div>
              <div className="text-lg font-bold text-red-600">{searchConsoleData.richResults.reviews}</div>
            </div>
            <div className="rounded bg-indigo-50 p-2">
              <div className="font-medium text-gray-900">How-To</div>
              <div className="text-lg font-bold text-indigo-600">{searchConsoleData.richResults.howTo}</div>
            </div>
            <div className="rounded bg-teal-50 p-2">
              <div className="font-medium text-gray-900">Local Business</div>
              <div className="text-lg font-bold text-teal-600">{searchConsoleData.richResults.localBusiness}</div>
            </div>
          </div>
        </div>
      )}

      {/* Target Keywords */}
      <div className="mb-4">
        <h4 className="mb-2 text-sm font-semibold text-gray-700">Target Keywords</h4>
        <div className="space-y-1">
          {targetKeywords.map((keyword, index) => (
            <div key={index} className="rounded bg-gray-50 px-2 py-1 text-xs text-gray-700">
              {keyword}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex space-x-2 text-xs">
        <button 
          onClick={() => window.open('https://search.google.com/search-console', '_blank')}
          className="flex-1 rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
        >
          Search Console
        </button>
        <button 
          onClick={() => window.open('https://search.google.com/test/rich-results', '_blank')}
          className="flex-1 rounded bg-green-600 px-3 py-2 text-white hover:bg-green-700"
        >
          Rich Results Test
        </button>
      </div>
    </div>
  )
} 
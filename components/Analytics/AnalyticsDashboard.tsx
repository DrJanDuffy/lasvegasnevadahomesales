'use client'

import { useEffect, useState } from 'react'
import { analyticsConfig, analyticsHelpers } from '../../config/analytics-config'

interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  leadSubmissions: number
  conversionRate: number
  averageTimeOnPage: number
  topNeighborhoods: Array<{ name: string; count: number }>
  topLeadSources: Array<{ source: string; count: number }>
  userJourney: Array<{ step: string; count: number }>
  performance: {
    pageLoadTime: number
    timeToInteractive: number
  }
}

interface AnalyticsDashboardProps {
  pageType: 'home' | 'contact' | 'properties' | 'about' | 'testimonials' | 'faq'
  debug?: boolean
}

export function AnalyticsDashboard({ pageType, debug = false }: AnalyticsDashboardProps) {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    leadSubmissions: 0,
    conversionRate: 0,
    averageTimeOnPage: 0,
    topNeighborhoods: [],
    topLeadSources: [],
    userJourney: [],
    performance: {
      pageLoadTime: 0,
      timeToInteractive: 0
    }
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show dashboard in development mode
    if (process.env.NODE_ENV === 'development' && debug) {
      setIsVisible(true)
    }

    // Track page performance
    const trackPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          const pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart
          const timeToInteractive = navigation.domInteractive - navigation.fetchStart

          setAnalyticsData(prev => ({
            ...prev,
            performance: {
              pageLoadTime: Math.round(pageLoadTime),
              timeToInteractive: Math.round(timeToInteractive)
            }
          }))

          // Track performance with Vercel Analytics
          if (typeof window !== 'undefined' && window.analytics) {
            window.analytics.track('Performance Metric', {
              metric: 'page_load_time',
              value: pageLoadTime,
              page: window.location.pathname,
              market: 'las_vegas'
            })

            window.analytics.track('Performance Metric', {
              metric: 'time_to_interactive',
              value: timeToInteractive,
              page: window.location.pathname,
              market: 'las_vegas'
            })
          }
        }
      }
    }

    // Track user engagement
    const trackEngagement = () => {
      let startTime = Date.now()
      let maxScroll = 0

      const updateEngagement = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000)
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)

        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent
        }

        setAnalyticsData(prev => ({
          ...prev,
          averageTimeOnPage: timeSpent
        }))

        // Track engagement with Vercel Analytics
        if (typeof window !== 'undefined' && window.analytics) {
          if (timeSpent >= 30 && timeSpent < 60) {
            window.analytics.track('Time on Page', {
              timeSpent: 30,
              page: window.location.pathname,
              market: 'las_vegas'
            })
          } else if (timeSpent >= 60 && timeSpent < 120) {
            window.analytics.track('Time on Page', {
              timeSpent: 60,
              page: window.location.pathname,
              market: 'las_vegas'
            })
          } else if (timeSpent >= 120) {
            window.analytics.track('Time on Page', {
              timeSpent: 120,
              page: window.location.pathname,
              market: 'las_vegas'
            })
          }

          if (maxScroll >= 25 && maxScroll < 50) {
            window.analytics.track('Scroll Depth Reached', {
              depth: 25,
              page: window.location.pathname,
              market: 'las_vegas'
            })
          } else if (maxScroll >= 50 && maxScroll < 75) {
            window.analytics.track('Scroll Depth Reached', {
              depth: 50,
              page: window.location.pathname,
              market: 'las_vegas'
            })
          } else if (maxScroll >= 75) {
            window.analytics.track('Scroll Depth Reached', {
              depth: 75,
              page: window.location.pathname,
              market: 'las_vegas'
            })
          }
        }
      }

      const interval = setInterval(updateEngagement, 10000) // Update every 10 seconds

      return () => clearInterval(interval)
    }

    // Initialize tracking
    trackPerformance()
    const engagementCleanup = trackEngagement()

    return () => {
      if (engagementCleanup) {
        engagementCleanup()
      }
    }
  }, [debug])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Analytics Dashboard</h3>
        <span className="text-xs text-gray-500">{pageType}</span>
      </div>

      <div className="space-y-3">
        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-50 p-2 rounded">
            <div className="text-xs text-blue-600 font-medium">Load Time</div>
            <div className="text-sm font-bold text-blue-900">
              {analyticsData.performance.pageLoadTime}ms
            </div>
          </div>
          <div className="bg-green-50 p-2 rounded">
            <div className="text-xs text-green-600 font-medium">Interactive</div>
            <div className="text-sm font-bold text-green-900">
              {analyticsData.performance.timeToInteractive}ms
            </div>
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-purple-50 p-2 rounded">
            <div className="text-xs text-purple-600 font-medium">Time on Page</div>
            <div className="text-sm font-bold text-purple-900">
              {analyticsData.averageTimeOnPage}s
            </div>
          </div>
          <div className="bg-orange-50 p-2 rounded">
            <div className="text-xs text-orange-600 font-medium">Conversion Rate</div>
            <div className="text-sm font-bold text-orange-900">
              {analyticsData.conversionRate.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Real Estate Specific Metrics */}
        <div className="border-t pt-3">
          <div className="text-xs font-medium text-gray-700 mb-2">Real Estate Tracking</div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Lead Submissions:</span>
              <span className="font-medium">{analyticsData.leadSubmissions}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Page Views:</span>
              <span className="font-medium">{analyticsData.pageViews}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Unique Visitors:</span>
              <span className="font-medium">{analyticsData.uniqueVisitors}</span>
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="border-t pt-3">
          <div className="text-xs font-medium text-gray-700 mb-2">Market Insights</div>
          <div className="space-y-1">
            {analyticsData.topNeighborhoods.slice(0, 3).map((neighborhood, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-gray-600">{neighborhood.name}:</span>
                <span className="font-medium">{neighborhood.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Journey */}
        <div className="border-t pt-3">
          <div className="text-xs font-medium text-gray-700 mb-2">User Journey</div>
          <div className="space-y-1">
            {analyticsData.userJourney.slice(0, 3).map((step, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-gray-600">{step.step}:</span>
                <span className="font-medium">{step.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Configuration Status */}
        <div className="border-t pt-3">
          <div className="text-xs font-medium text-gray-700 mb-2">Analytics Status</div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Vercel Analytics:</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Real Estate Tracking:</span>
              <span className="text-green-600 font-medium">Enabled</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Market:</span>
              <span className="font-medium">Las Vegas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Debug Information */}
      {debug && (
        <div className="border-t pt-3 mt-3">
          <div className="text-xs font-medium text-gray-700 mb-2">Debug Info</div>
          <div className="text-xs text-gray-500 space-y-1">
            <div>Page: {window.location.pathname}</div>
            <div>User Agent: {navigator.userAgent.substring(0, 50)}...</div>
            <div>Referrer: {document.referrer || 'Direct'}</div>
            <div>Timestamp: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
      )}
    </div>
  )
} 
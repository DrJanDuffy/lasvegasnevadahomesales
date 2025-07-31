'use client'

import { useState, useEffect } from 'react'
import { Button } from '../../components/Button/Button'

interface MarketInsight {
  id: string
  title: string
  description: string
  link: string
  category: string
  publishedDate: string
  imageUrl?: string
}

interface MarketInsightsWidgetProps {
  category?: 'buyers' | 'sellers' | 'market-trends' | 'all'
  limit?: number
  showImages?: boolean
}

export function MarketInsightsWidget({ 
  category = 'all', 
  limit = 3, 
  showImages = true 
}: MarketInsightsWidgetProps) {
  const [insights, setInsights] = useState<MarketInsight[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/market-insights?category=${category}&limit=${limit}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch market insights')
        }
        
        const data = await response.json()
        setInsights(data.insights || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load insights')
      } finally {
        setLoading(false)
      }
    }

    fetchInsights()
  }, [category, limit])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Market Insights</h3>
        <div className="space-y-4">
          {[...Array(limit)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Insights</h3>
        <p className="text-gray-600">Unable to load market insights at this time.</p>
      </div>
    )
  }

  if (insights.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Insights</h3>
        <p className="text-gray-600">No insights available at this time.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Latest Market Insights</h3>
      
      <div className="space-y-6">
        {insights.map((insight) => (
          <article key={insight.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            <div className="flex gap-4">
              {showImages && insight.imageUrl && (
                <div className="flex-shrink-0">
                  <img
                    src={insight.imageUrl}
                    alt={insight.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {insight.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(insight.publishedDate).toLocaleDateString()}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                  {insight.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {insight.description}
                </p>
                
                <Button
                  intent="secondary"
                  size="sm"
                  onClick={() => window.open(insight.link, '_blank')}
                >
                  Read More
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Button
          intent="primary"
          onClick={() => window.open('https://www.simplifyingthemarket.com', '_blank')}
          className="w-full"
        >
          View All Market Insights
        </Button>
      </div>
    </div>
  )
} 
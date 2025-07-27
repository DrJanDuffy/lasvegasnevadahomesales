'use client'

import { useState, useEffect } from 'react'
import { OptimizedImage } from '../OptimizedImage/OptimizedImage'

interface MarketData {
  priceGrowth: string
  mortgageRate: string
  foreclosureRate: string
  priceIncrease: string
  lastUpdated: string
}

interface MarketDataWidgetProps {
  className?: string
  showImages?: boolean
}

export function MarketDataWidget({ className = '', showImages = true }: MarketDataWidgetProps) {
  const [marketData, setMarketData] = useState<MarketData>({
    priceGrowth: '1.5-2%',
    mortgageRate: '6.5%',
    foreclosureRate: '0.13%',
    priceIncrease: '55%',
    lastUpdated: new Date().toLocaleDateString()
  })

  const [isLoading, setIsLoading] = useState(false)

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => ({
        ...prev,
        lastUpdated: new Date().toLocaleDateString()
      }))
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      label: 'Price Growth',
      value: marketData.priceGrowth,
      description: 'Expected national growth in 2025',
      color: 'green',
      icon: '📈'
    },
    {
      label: 'Mortgage Rates',
      value: marketData.mortgageRate,
      description: 'Projected average by year-end',
      color: 'blue',
      icon: '🏠'
    },
    {
      label: 'Foreclosure Rate',
      value: marketData.foreclosureRate,
      description: 'Only 1 in 758 homes affected',
      color: 'purple',
      icon: '🛡️'
    },
    {
      label: 'Price Increase',
      value: marketData.priceIncrease,
      description: 'Nationally over past 5 years',
      color: 'orange',
      icon: '💰'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-gradient-to-br from-green-50 to-green-100 text-green-600'
      case 'blue':
        return 'bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600'
      case 'purple':
        return 'bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600'
      case 'orange':
        return 'bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600'
      default:
        return 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-600'
    }
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Market Intelligence</h3>
        <div className="text-sm text-gray-500">
          Updated: {marketData.lastUpdated}
        </div>
      </div>

      {/* Market Stats Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className={`rounded-lg p-4 text-center ${getColorClasses(stat.color)}`}>
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-600">{stat.description}</div>
          </div>
        ))}
      </div>

      {/* Market Images */}
      {showImages && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="group overflow-hidden rounded-lg bg-gray-100">
            <div className="relative h-32 overflow-hidden">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Las Vegas market growth"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-3">
              <h4 className="text-sm font-semibold text-gray-900">Market Growth</h4>
              <p className="text-xs text-gray-600">Steady appreciation expected</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg bg-gray-100">
            <div className="relative h-32 overflow-hidden">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Las Vegas housing stability"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-3">
              <h4 className="text-sm font-semibold text-gray-900">Market Stability</h4>
              <p className="text-xs text-gray-600">Strong fundamentals</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg bg-gray-100">
            <div className="relative h-32 overflow-hidden">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Las Vegas investment opportunities"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-3">
              <h4 className="text-sm font-semibold text-gray-900">Investment Ready</h4>
              <p className="text-xs text-gray-600">Favorable conditions</p>
            </div>
          </div>
        </div>
      )}

      {/* Market Insights */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Key Market Insights</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• No major price crash predicted for 2025</li>
          <li>• Mortgage rates expected to remain stable</li>
          <li>• Foreclosure rates at historically low levels</li>
          <li>• Focus on personal situation over market timing</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <a 
          href="/market-intelligence" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View Full Market Report
        </a>
      </div>
    </div>
  )
} 
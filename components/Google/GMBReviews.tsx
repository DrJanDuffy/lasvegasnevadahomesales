'use client'

import { useEffect } from 'react'

interface GMBReviewsProps {
  appId?: string
  className?: string
  title?: string
  showTitle?: boolean
}

export function GMBReviews({ 
  appId = 'YOUR_APP_ID', 
  className = '',
  title = 'What Our Clients Say',
  showTitle = true
}: GMBReviewsProps) {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script')
    script.src = 'https://apps.elfsight.com/p/platform.js'
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://apps.elfsight.com/p/platform.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section className={`gmb-reviews-section ${className}`}>
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real reviews from satisfied Las Vegas homeowners who trusted us with their property evaluations
          </p>
        </div>
      )}
      
      <div className="gmb-reviews-container">
        <div 
          className="elfsight-app-google-reviews" 
          data-app-id={appId}
        />
      </div>
      
      {/* Fallback content if widget fails to load */}
      <div className="gmb-fallback hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "The evaluation was spot-on! We sold our Summerlin home for $25,000 more than we expected. 
              The market insights were invaluable."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#3A8DDE] rounded-full flex items-center justify-center text-white font-bold mr-3">
                S
              </div>
              <div>
                <p className="font-semibold text-[#0A2540]">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Summerlin Homeowner</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "Professional, accurate, and fast! Got our Henderson property evaluation in 24 hours. 
              Highly recommend for anyone selling in Vegas."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#16B286] rounded-full flex items-center justify-center text-white font-bold mr-3">
                M
              </div>
              <div>
                <p className="font-semibold text-[#0A2540]">Mike Rodriguez</p>
                <p className="text-sm text-gray-500">Henderson Seller</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "Outstanding service! The team really knows the Las Vegas market. 
              Our Green Valley home sold above asking price thanks to their expertise."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold mr-3">
                L
              </div>
              <div>
                <p className="font-semibold text-[#0A2540]">Lisa Chen</p>
                <p className="text-sm text-gray-500">Green Valley Resident</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
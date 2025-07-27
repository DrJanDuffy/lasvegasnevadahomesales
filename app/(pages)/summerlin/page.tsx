import { Metadata } from 'next'
import { EmailJSContactForm } from '../../../components/Forms/EmailJSContactForm'

export const metadata: Metadata = {
  title: 'Summerlin Homes for Sale | Las Vegas Nevada Home Sales',
  description: 'Discover luxury homes for sale in Summerlin, Las Vegas. Expert real estate services for buying and selling in Summerlin\'s premier neighborhoods.',
  keywords: 'Summerlin homes for sale, Summerlin real estate, Las Vegas Summerlin, luxury homes Summerlin',
  openGraph: {
    title: 'Summerlin Homes for Sale | Las Vegas Nevada Home Sales',
    description: 'Discover luxury homes for sale in Summerlin, Las Vegas. Expert real estate services for buying and selling in Summerlin\'s premier neighborhoods.',
    images: ['/images/summerlin-las-vegas.jpg'],
  },
}

export default function SummerlinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Summerlin Homes for Sale
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover luxury living in Las Vegas' most prestigious master-planned community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                View Properties
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Get Free Valuation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Summerlin?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of luxury, convenience, and natural beauty in Las Vegas' premier community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Homes</h3>
              <p className="text-gray-600">
                Stunning properties ranging from elegant townhomes to sprawling estates
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Master-Planned Community</h3>
              <p className="text-gray-600">
                Thoughtfully designed neighborhoods with parks, trails, and amenities
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Location</h3>
              <p className="text-gray-600">
                Minutes from the Strip, Red Rock Canyon, and world-class shopping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Summerlin Market Overview
            </h2>
            <p className="text-xl text-gray-600">
              Current market trends and property insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$650K</div>
              <div className="text-gray-600">Average Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">45</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">List Price to Sale Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
              <div className="text-gray-600">Active Listings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Your Summerlin Home Valuation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Find out what your Summerlin property is worth in today's competitive market. 
                Our expert team provides accurate valuations and personalized market insights.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Free market analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">24-hour response time</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">No obligation consultation</span>
                </div>
              </div>
            </div>

            <div>
              <EmailJSContactForm
                title="Summerlin Home Valuation"
                subtitle="Get your free property valuation in 24 hours"
                formType="summerlin"
                showPropertyDetails={true}
                showBudget={true}
                showTimeline={true}
                source="summerlin-landing-page"
                className="shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Summerlin Neighborhoods
            </h2>
            <p className="text-xl text-gray-600">
              Explore the diverse communities within Summerlin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'The Ridges', price: '$1.2M+', description: 'Luxury estates with mountain views' },
              { name: 'Red Rock Country Club', price: '$800K+', description: 'Golf course living at its finest' },
              { name: 'The Trails', price: '$600K+', description: 'Family-friendly with great schools' },
              { name: 'The Mesa', price: '$500K+', description: 'Affordable luxury homes' },
              { name: 'The Paseos', price: '$700K+', description: 'Modern townhomes and condos' },
              { name: 'The Gardens', price: '$900K+', description: 'Elegant homes with resort-style amenities' },
            ].map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{neighborhood.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{neighborhood.price}</div>
                <p className="text-gray-600">{neighborhood.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home in Summerlin?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our expert team is here to help you navigate the Summerlin real estate market. 
            Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Schedule Consultation
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Call (702) 555-0123
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 
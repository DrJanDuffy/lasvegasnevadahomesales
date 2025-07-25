import { RealScoutHomeValue } from "../../../components/RealScout/RealScoutHomeValue"
import { RealScoutYourListings } from "../../../components/RealScout/RealScoutYourListings"
import { SEOHead } from '../../../components/SEO/SEOHead'

export default function HomeValuePage() {
  return (
    <>
      <SEOHead
        title="Home Value Estimator | Las Vegas Nevada Home Sales"
        description="Get your home's value instantly with Las Vegas Nevada Home Sales. Find out what your Las Vegas property is worth in today's market."
        keywords="Las Vegas Nevada Home Sales, home value Las Vegas, property valuation, Nevada real estate, home worth estimator"
        canonical="/home-value"
        ogImage="/images/og-valuation.jpg"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Home Value Estimator – Las Vegas Nevada Home Sales
          </h1>
          <p className="mb-6 text-center text-lg text-gray-600">
            Instantly discover your home's value with Las Vegas Nevada Home Sales. Get a free, accurate property valuation for your Las Vegas home.
          </p>
          <div className="flex justify-center">
            <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
          </div>
        </div>
      </div>

      {/* Your Listings */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Our Latest Listings
          </h2>
          <div className="flex justify-center">
            <RealScoutYourListings 
              agentEncodedId="QWdlbnQtMjI1MDUw" 
              sortOrder="STATUS_AND_SIGNIFICANT_CHANGE" 
              listingStatus="For Sale,Sold" 
              propertyTypes="" 
              priceMin="500000"
            />
          </div>
        </div>
      </section>
    </>
  )
} 
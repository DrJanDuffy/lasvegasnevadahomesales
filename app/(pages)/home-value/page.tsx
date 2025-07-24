import { RealScoutHomeValue } from "components/RealScout/RealScoutHomeValue"
import { RealScoutYourListings } from "components/RealScout/RealScoutYourListings"

export default function HomeValuePage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Home Value Estimator
          </h1>
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
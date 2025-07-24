import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { RealScoutYourListings } from "components/RealScout/RealScoutYourListings"

export const metadata: Metadata = {
  title: "Summerlin Las Vegas | Luxury Homes & Master-Planned Community",
  description: "Discover Summerlin, Las Vegas' premier master-planned community. Luxury homes, golf courses, shopping centers, and top-rated schools in a beautiful desert setting.",
  keywords: "Summerlin Las Vegas, Summerlin homes, Summerlin real estate, Summerlin golf courses, Summerlin shopping",
}

export default function SummerlinPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Summerlin
            </h1>
            <p className="mb-8 text-xl font-light text-green-100 md:text-2xl">
              Las Vegas' Premier Master-Planned Community
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button href="/properties?neighborhood=summerlin" className="bg-white text-green-800 hover:bg-green-50">
                View Summerlin Homes
              </Button>
              <Button href="/contact" intent="secondary" className="border-white text-white hover:bg-white hover:text-green-800">
                Contact Local Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">$650K</div>
              <div className="text-sm text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">22,500</div>
              <div className="text-sm text-gray-600">Acres</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">100K+</div>
              <div className="text-sm text-gray-600">Residents</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">9</div>
              <div className="text-sm text-gray-600">Golf Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Summerlin */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                About Summerlin
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Summerlin is Las Vegas' largest and most prestigious master-planned community, spanning over 22,500 acres 
                at the base of the Red Rock Canyon National Conservation Area. This award-winning community offers 
                luxury homes, world-class amenities, and a lifestyle that's second to none.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                Developed by The Howard Hughes Corporation, Summerlin features meticulously planned neighborhoods, 
                extensive parks and trails, top-rated schools, and convenient access to shopping, dining, and entertainment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Master-planned community with 22,500+ acres</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Award-winning design and architecture</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Proximity to Red Rock Canyon</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Family-friendly environment</span>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg bg-gradient-to-br from-green-400 to-green-600"></div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Summerlin Amenities
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-green-600">⛳</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Golf Courses</h3>
              <p className="text-gray-600">9 championship golf courses including TPC Summerlin and Red Rock Country Club</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-blue-600">🛍️</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Shopping Centers</h3>
              <p className="text-gray-600">Downtown Summerlin, The Shops at Summerlin, and Trails Village</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-purple-600">🏃</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Parks & Trails</h3>
              <p className="text-gray-600">150+ parks and 150+ miles of trails throughout the community</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-orange-600">🎓</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Top Schools</h3>
              <p className="text-gray-600">Award-winning public and private schools serving all grade levels</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-red-600">🏥</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Healthcare</h3>
              <p className="text-gray-600">Summerlin Hospital Medical Center and numerous medical facilities</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-indigo-600">🎭</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Entertainment</h3>
              <p className="text-gray-600">The Smith Center for the Performing Arts and cultural venues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Market */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Summerlin Real Estate Market
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Market Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Median Home Price</span>
                  <span className="font-semibold text-gray-900">$650,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Average Days on Market</span>
                  <span className="font-semibold text-gray-900">25 days</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Price per Square Foot</span>
                  <span className="font-semibold text-gray-900">$285</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Year-over-Year Growth</span>
                  <span className="font-semibold text-green-600">+6.2%</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Active Listings</span>
                  <span className="font-semibold text-gray-900">247</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Home Types</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Single Family Homes</span>
                  <span className="font-semibold text-gray-900">65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Townhomes</span>
                  <span className="font-semibold text-gray-900">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Condos</span>
                  <span className="font-semibold text-gray-900">15%</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold text-gray-900">Price Ranges</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-16 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600">$400K - $600K (35%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-20 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600">$600K - $800K (40%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-12 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-600">$800K+ (25%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="bg-green-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Call Summerlin Home?
          </h2>
          <p className="mb-8 text-xl text-green-100">
            Our Summerlin experts can help you find the perfect home in this premier community
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/properties?neighborhood=summerlin" className="bg-white text-green-800 hover:bg-green-50">
              Browse Summerlin Homes
            </Button>
            <Button href="/contact" intent="secondary" className="border-white text-white hover:bg-white hover:text-green-800">
              Get Expert Guidance
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
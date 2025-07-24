import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { RealScoutYourListings } from "components/RealScout/RealScoutYourListings"

export const metadata: Metadata = {
  title: "Downtown Las Vegas | Urban Living & Entertainment",
  description: "Discover Downtown Las Vegas, the heart of the city with urban living, entertainment, cultural attractions, and nightlife. Find your perfect urban home in Las Vegas.",
  keywords: "Downtown Las Vegas, Las Vegas urban living, Downtown Las Vegas real estate, Las Vegas entertainment district",
}

export default function DowntownPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Downtown Las Vegas
            </h1>
            <p className="mb-8 text-xl font-light text-red-100 md:text-2xl">
              Urban Living in the Heart of Las Vegas
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button href="/properties?neighborhood=downtown" className="bg-white text-red-800 hover:bg-red-50">
                View Downtown Homes
              </Button>
              <Button href="/contact" intent="secondary" className="border-white text-white hover:bg-white hover:text-red-800">
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
              <div className="mb-2 text-3xl font-bold text-red-600">$320K</div>
              <div className="text-sm text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">35</div>
              <div className="text-sm text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">+3.9%</div>
              <div className="text-sm text-gray-600">YoY Growth</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">189</div>
              <div className="text-sm text-gray-600">Active Listings</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Downtown */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                About Downtown Las Vegas
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Downtown Las Vegas is the historic heart of the city, offering a vibrant urban lifestyle with 
                world-class entertainment, cultural attractions, and a growing residential community. This 
                dynamic area combines the excitement of city living with the unique character of Las Vegas.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                From the iconic Fremont Street Experience to the Arts District, Downtown Las Vegas is 
                experiencing a renaissance with new developments, restaurants, and cultural venues making 
                it an increasingly popular choice for urban professionals and entertainment enthusiasts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                  <span className="text-gray-700">Historic heart of Las Vegas</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                  <span className="text-gray-700">World-class entertainment and nightlife</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                  <span className="text-gray-700">Growing arts and cultural scene</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                  <span className="text-gray-700">Convenient urban transportation</span>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg bg-gradient-to-br from-red-400 to-red-600"></div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Downtown Las Vegas Amenities
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-red-600">🎰</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Fremont Street Experience</h3>
              <p className="text-gray-600">Iconic pedestrian mall with casinos, entertainment, and the world's largest video screen</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-blue-600">🎨</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Arts District</h3>
              <p className="text-gray-600">Growing arts community with galleries, studios, and First Friday events</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-purple-600">🍽️</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Dining & Nightlife</h3>
              <p className="text-gray-600">Diverse restaurants, bars, and clubs offering everything from casual to fine dining</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-green-600">🎭</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Entertainment</h3>
              <p className="text-gray-600">Live music venues, theaters, and cultural events throughout the year</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-orange-600">🚗</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Transportation</h3>
              <p className="text-gray-600">RTC bus system, rideshare services, and walkable urban environment</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-indigo-600">🏢</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Business District</h3>
              <p className="text-gray-600">Growing business community with office spaces and professional services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Market */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Downtown Las Vegas Real Estate Market
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Market Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Median Home Price</span>
                  <span className="font-semibold text-gray-900">$320,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Average Days on Market</span>
                  <span className="font-semibold text-gray-900">35 days</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Price per Square Foot</span>
                  <span className="font-semibold text-gray-900">$265</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Year-over-Year Growth</span>
                  <span className="font-semibold text-green-600">+3.9%</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Active Listings</span>
                  <span className="font-semibold text-gray-900">189</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Home Types</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Condos</span>
                  <span className="font-semibold text-gray-900">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Townhomes</span>
                  <span className="font-semibold text-gray-900">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Single Family Homes</span>
                  <span className="font-semibold text-gray-900">15%</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold text-gray-900">Price Ranges</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-20 rounded-full bg-red-500"></div>
                    <span className="text-sm text-gray-600">$200K - $350K (45%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-16 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600">$350K - $500K (35%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-12 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600">$500K+ (20%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Popular Downtown Areas
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Fremont East</h3>
              <p className="mb-4 text-gray-600">Historic district with renovated buildings, bars, and entertainment venues</p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $280,000</p>
                <p>Avg. Days on Market: 30</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Arts District</h3>
              <p className="mb-4 text-gray-600">Creative community with galleries, studios, and cultural events</p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $350,000</p>
                <p>Avg. Days on Market: 40</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Symphony Park</h3>
              <p className="mb-4 text-gray-600">New development with luxury condos and cultural venues</p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $450,000</p>
                <p>Avg. Days on Market: 25</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Medical District</h3>
              <p className="mb-4 text-gray-600">Near medical facilities with convenient access to healthcare</p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $320,000</p>
                <p>Avg. Days on Market: 35</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Container Park</h3>
              <p className="mb-4 text-gray-600">Innovative shopping and dining area with unique architecture</p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $380,000</p>
                <p>Avg. Days on Market: 28</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Fremont West</h3>
              <p className="mb-4 text-gray-600">Residential area with historic homes and growing development</p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $290,000</p>
                <p>Avg. Days on Market: 32</p>
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
      <section className="bg-red-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready for Downtown Living?
          </h2>
          <p className="mb-8 text-xl text-red-100">
            Our Downtown experts can help you find the perfect urban home in the heart of Las Vegas
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/properties?neighborhood=downtown" className="bg-white text-red-800 hover:bg-red-50">
              Browse Downtown Homes
            </Button>
            <Button href="/contact" intent="secondary" className="border-white text-white hover:bg-white hover:text-red-800">
              Get Expert Guidance
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
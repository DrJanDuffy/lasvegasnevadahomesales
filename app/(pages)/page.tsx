import { Metadata } from "next"
import { Button } from "../../components/Button/Button"
import { RealScoutOfficeListings } from "../../components/RealScout/RealScoutOfficeListings"
import { RealScoutYourListings } from "../../components/RealScout/RealScoutYourListings"

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Market | Homes for Sale in Las Vegas, NV",
  description: "Discover the latest Las Vegas real estate market trends, homes for sale, and expert insights. Find your dream home in Las Vegas, Henderson, Summerlin, and surrounding areas.",
  keywords: "Las Vegas real estate, homes for sale Las Vegas, Las Vegas housing market, Las Vegas properties, Las Vegas homes",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://lasvegasnevadahomesales.com/",
    title: "Las Vegas Real Estate Market | Expert Insights & Homes for Sale",
    description: "Your trusted source for Las Vegas real estate. Expert market analysis, neighborhood guides, and the latest homes for sale in Las Vegas, NV.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/images/las-vegas-real-estate-market.jpg",
        alt: "Las Vegas Real Estate Market Overview",
      },
    ],
  },
}

export default function LasVegasMarketOverview() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Las Vegas Real Estate Market
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Your trusted source for Las Vegas real estate insights, market trends, and expert guidance
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button href="/properties" className="bg-white text-blue-900 hover:bg-blue-50">
                Search Homes
              </Button>
              <Button href="/home-valuation" intent="secondary" className="border-white text-white hover:bg-white hover:text-blue-900">
                Get Home Value
              </Button>
                              <Button href="/strategies" intent="secondary" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Real Estate Strategies
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Las Vegas Market Overview
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">$425K</div>
              <div className="text-sm text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">+5.2%</div>
              <div className="text-sm text-gray-600">Year-over-Year Growth</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">28</div>
              <div className="text-sm text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">2,847</div>
              <div className="text-sm text-gray-600">Active Listings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Neighborhoods */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Popular Las Vegas Neighborhoods
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Summerlin</h3>
                <p className="mb-4 text-gray-600">Master-planned community with luxury homes and amenities</p>
                <Button href="/neighborhoods/summerlin" className="text-sm">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Henderson</h3>
                <p className="mb-4 text-gray-600">Family-friendly city with excellent schools and parks</p>
                <Button href="/neighborhoods/henderson" className="text-sm">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Green Valley</h3>
                <p className="mb-4 text-gray-600">Affordable homes with great community amenities</p>
                <Button href="/neighborhoods/green-valley" className="text-sm">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600"></div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Downtown</h3>
                <p className="mb-4 text-gray-600">Urban living with entertainment and cultural attractions</p>
                <Button href="/neighborhoods/downtown" className="text-sm">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Luxury Properties
          </h2>
          <div className="flex justify-center">
            <RealScoutOfficeListings 
              agentEncodedId="QWdlbnQtMjI1MDUw" 
              sortOrder="STATUS_AND_SIGNIFICANT_CHANGE" 
              listingStatus="For Sale" 
              propertyTypes="SFR,MF,TC" 
              priceMin="600000" 
              priceMax="1200000"
            />
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
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Find Your Dream Home?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Get expert guidance and access to the latest Las Vegas real estate listings
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-white text-blue-900 hover:bg-blue-50">
              Contact Us
            </Button>
            <Button href="/market-reports" intent="secondary" className="border-white text-white hover:bg-white hover:text-blue-900">
              View Market Reports
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

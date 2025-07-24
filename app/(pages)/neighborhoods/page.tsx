import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { RealScoutYourListings } from "components/RealScout/RealScoutYourListings"

export const metadata: Metadata = {
  title: "Las Vegas Neighborhoods | Complete Guide to Las Vegas Communities",
  description: "Explore Las Vegas neighborhoods including Summerlin, Henderson, Green Valley, Downtown, and more. Find the perfect community for your lifestyle and budget.",
  keywords: "Las Vegas neighborhoods, Summerlin, Henderson, Green Valley, Downtown Las Vegas, Las Vegas communities",
}

const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    description: "Master-planned community with luxury homes, golf courses, and shopping centers",
    medianPrice: "$650,000",
    image: "/images/neighborhoods/summerlin.jpg",
    features: ["Golf Courses", "Shopping Centers", "Parks & Trails", "Top Schools"],
    color: "from-green-400 to-green-600"
  },
  {
    name: "Henderson",
    slug: "henderson", 
    description: "Family-friendly city with excellent schools, parks, and affordable housing",
    medianPrice: "$450,000",
    image: "/images/neighborhoods/henderson.jpg",
    features: ["Family-Friendly", "Great Schools", "Parks & Recreation", "Affordable"],
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    description: "Affordable homes with great community amenities and convenient location",
    medianPrice: "$380,000", 
    image: "/images/neighborhoods/green-valley.jpg",
    features: ["Affordable", "Community Amenities", "Convenient Location", "Growing Area"],
    color: "from-purple-400 to-purple-600"
  },
  {
    name: "Downtown Las Vegas",
    slug: "downtown",
    description: "Urban living with entertainment, cultural attractions, and nightlife",
    medianPrice: "$320,000",
    image: "/images/neighborhoods/downtown.jpg", 
    features: ["Urban Living", "Entertainment", "Cultural Attractions", "Nightlife"],
    color: "from-red-400 to-red-600"
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    description: "Northwest Las Vegas community with mountain views and family homes",
    medianPrice: "$420,000",
    image: "/images/neighborhoods/centennial-hills.jpg",
    features: ["Mountain Views", "Family Homes", "Newer Construction", "Quiet Area"],
    color: "from-yellow-400 to-yellow-600"
  },
  {
    name: "Spring Valley",
    slug: "spring-valley",
    description: "Diverse community with good schools and convenient access to the Strip",
    medianPrice: "$350,000",
    image: "/images/neighborhoods/spring-valley.jpg",
    features: ["Diverse Community", "Good Schools", "Strip Access", "Established Area"],
    color: "from-indigo-400 to-indigo-600"
  }
]

export default function NeighborhoodsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Las Vegas Neighborhoods
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Discover the perfect Las Vegas community for your lifestyle and budget
            </p>
            <Button href="/properties" className="bg-white text-blue-900 hover:bg-blue-50">
              Search Homes by Neighborhood
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-lg bg-gray-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Find Your Perfect Neighborhood</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label htmlFor="price-range" className="mb-2 block text-sm font-medium text-gray-700">Price Range</label>
                <select id="price-range" name="price-range" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select price range">
                  <option>Any Price</option>
                  <option>Under $300K</option>
                  <option>$300K - $500K</option>
                  <option>$500K - $750K</option>
                  <option>Over $750K</option>
                </select>
              </div>
              <div>
                <label htmlFor="lifestyle" className="mb-2 block text-sm font-medium text-gray-700">Lifestyle</label>
                <select id="lifestyle" name="lifestyle" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select lifestyle preference">
                  <option>Any Lifestyle</option>
                  <option>Family-Friendly</option>
                  <option>Urban Living</option>
                  <option>Luxury</option>
                  <option>Retirement</option>
                </select>
              </div>
              <div>
                <label htmlFor="amenities" className="mb-2 block text-sm font-medium text-gray-700">Amenities</label>
                <select id="amenities" name="amenities" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select desired amenities">
                  <option>Any Amenities</option>
                  <option>Golf Courses</option>
                  <option>Parks & Trails</option>
                  <option>Shopping Centers</option>
                  <option>Top Schools</option>
                </select>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button href="/properties/search" className="bg-blue-600 text-white hover:bg-blue-700">
                Search Neighborhoods
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Popular Las Vegas Neighborhoods
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood.slug} className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
                <div className={`h-48 bg-gradient-to-br ${neighborhood.color}`}></div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{neighborhood.name}</h3>
                    <span className="text-lg font-semibold text-blue-600">{neighborhood.medianPrice}</span>
                  </div>
                  <p className="mb-4 text-gray-600">{neighborhood.description}</p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-700">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {neighborhood.features.map((feature) => (
                        <span key={feature} className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button href={`/neighborhoods/${neighborhood.slug}`} className="w-full">
                    Explore {neighborhood.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Las Vegas Neighborhood Market Insights
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">6</div>
              <div className="text-sm text-gray-600">Major Neighborhoods</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">$425K</div>
              <div className="text-sm text-gray-600">Average Home Price</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">+4.8%</div>
              <div className="text-sm text-gray-600">Annual Appreciation</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">95%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
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
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Need Help Choosing a Neighborhood?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Our local experts can help you find the perfect Las Vegas neighborhood for your needs
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-white text-blue-900 hover:bg-blue-50">
              Get Expert Advice
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
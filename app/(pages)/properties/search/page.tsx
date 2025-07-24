import { Metadata } from "next"
import { Button } from "../../../../components/Button/Button"
import { RealScoutYourListings } from "../../../../components/RealScout/RealScoutYourListings"

export const metadata: Metadata = {
  title: "Advanced Property Search | Las Vegas Real Estate",
  description: "Advanced property search with comprehensive filters. Find your perfect Las Vegas home with detailed search options for price, location, features, and more.",
  keywords: "advanced property search, Las Vegas real estate search, property filters, home search Las Vegas",
}

export default function AdvancedSearchPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Advanced Property Search
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Find your perfect Las Vegas home with detailed search filters
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Search Form */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-lg bg-gray-50 p-8">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">Advanced Search Filters</h2>
            
            <form className="space-y-8">
              {/* Location & Price */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label htmlFor="location" className="mb-2 block text-sm font-medium text-gray-700">Location</label>
                  <select id="location" name="location" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select location">
                    <option value="">All Locations</option>
                    <option value="summerlin">Summerlin</option>
                    <option value="henderson">Henderson</option>
                    <option value="green-valley">Green Valley</option>
                    <option value="downtown">Downtown</option>
                    <option value="centennial-hills">Centennial Hills</option>
                    <option value="spring-valley">Spring Valley</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="price-min" className="mb-2 block text-sm font-medium text-gray-700">Min Price</label>
                  <select id="price-min" name="price-min" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select minimum price">
                    <option value="">Any</option>
                    <option value="200000">$200K</option>
                    <option value="300000">$300K</option>
                    <option value="400000">$400K</option>
                    <option value="500000">$500K</option>
                    <option value="750000">$750K</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="price-max" className="mb-2 block text-sm font-medium text-gray-700">Max Price</label>
                  <select id="price-max" name="price-max" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select maximum price">
                    <option value="">Any</option>
                    <option value="400000">$400K</option>
                    <option value="500000">$500K</option>
                    <option value="750000">$750K</option>
                    <option value="1000000">$1M</option>
                    <option value="1500000">$1.5M+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="property-type" className="mb-2 block text-sm font-medium text-gray-700">Property Type</label>
                  <select id="property-type" name="property-type" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select property type">
                    <option value="">All Types</option>
                    <option value="single-family">Single Family</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="condo">Condo</option>
                    <option value="multi-family">Multi-Family</option>
                  </select>
                </div>
              </div>

              {/* Bedrooms & Bathrooms */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label htmlFor="beds-min" className="mb-2 block text-sm font-medium text-gray-700">Min Bedrooms</label>
                  <select id="beds-min" name="beds-min" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select minimum bedrooms">
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="beds-max" className="mb-2 block text-sm font-medium text-gray-700">Max Bedrooms</label>
                  <select id="beds-max" name="beds-max" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select maximum bedrooms">
                    <option value="">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="baths-min" className="mb-2 block text-sm font-medium text-gray-700">Min Bathrooms</label>
                  <select id="baths-min" name="baths-min" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select minimum bathrooms">
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="sqft-min" className="mb-2 block text-sm font-medium text-gray-700">Min Square Feet</label>
                  <select id="sqft-min" name="sqft-min" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select minimum square feet">
                    <option value="">Any</option>
                    <option value="1000">1,000+</option>
                    <option value="1500">1,500+</option>
                    <option value="2000">2,000+</option>
                    <option value="2500">2,500+</option>
                    <option value="3000">3,000+</option>
                  </select>
                </div>
              </div>

              {/* Additional Features */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Additional Features</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="pool"
                      name="features"
                      value="pool"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="pool" className="ml-2 text-sm text-gray-700">Pool</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="garage"
                      name="features"
                      value="garage"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="garage" className="ml-2 text-sm text-gray-700">Garage</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="fireplace"
                      name="features"
                      value="fireplace"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="fireplace" className="ml-2 text-sm text-gray-700">Fireplace</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="garden"
                      name="features"
                      value="garden"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="garden" className="ml-2 text-sm text-gray-700">Garden</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="basement"
                      name="features"
                      value="basement"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="basement" className="ml-2 text-sm text-gray-700">Basement</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="central-ac"
                      name="features"
                      value="central-ac"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="central-ac" className="ml-2 text-sm text-gray-700">Central AC</label>
                  </div>
                </div>
              </div>

              {/* Year Built & Lot Size */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label htmlFor="year-built-min" className="mb-2 block text-sm font-medium text-gray-700">Min Year Built</label>
                  <select id="year-built-min" name="year-built-min" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select minimum year built">
                    <option value="">Any</option>
                    <option value="2020">2020+</option>
                    <option value="2015">2015+</option>
                    <option value="2010">2010+</option>
                    <option value="2000">2000+</option>
                    <option value="1990">1990+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="lot-size-min" className="mb-2 block text-sm font-medium text-gray-700">Min Lot Size</label>
                  <select id="lot-size-min" name="lot-size-min" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select minimum lot size">
                    <option value="">Any</option>
                    <option value="0.1">0.1 acres+</option>
                    <option value="0.25">0.25 acres+</option>
                    <option value="0.5">0.5 acres+</option>
                    <option value="1">1 acre+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="days-on-market" className="mb-2 block text-sm font-medium text-gray-700">Max Days on Market</label>
                  <select id="days-on-market" name="days-on-market" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select maximum days on market">
                    <option value="">Any</option>
                    <option value="7">7 days</option>
                    <option value="14">14 days</option>
                    <option value="30">30 days</option>
                    <option value="60">60 days</option>
                    <option value="90">90 days</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="sort-by" className="mb-2 block text-sm font-medium text-gray-700">Sort By</label>
                  <select id="sort-by" name="sort-by" className="w-full rounded-md border border-gray-300 px-3 py-2" aria-label="Select sort order">
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="sqft">Square Feet</option>
                    <option value="beds">Bedrooms</option>
                  </select>
                </div>
              </div>

              {/* Search Buttons */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button type="submit" className="rounded-xl bg-blue-600 px-6 py-2.5 text-lg text-white transition-colors delay-50 hover:bg-blue-700">
                  Search Properties
                </button>
                <button type="reset" className="rounded-xl border border-gray-300 bg-transparent px-6 py-2.5 text-lg text-gray-700 transition-colors delay-50 hover:bg-gray-50">
                  Clear Filters
                </button>
                <Button href="/properties" intent="secondary" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Basic Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Search Tips */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Search Tips
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-blue-600">🎯</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Start Broad</h3>
              <p className="text-gray-600">
                Begin with basic filters like location and price range, then narrow down with additional features.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-green-600">💰</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Consider Total Cost</h3>
              <p className="text-gray-600">
                Factor in property taxes, HOA fees, and maintenance costs when setting your price range.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-purple-600">📍</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Location Matters</h3>
              <p className="text-gray-600">
                Research neighborhoods for schools, amenities, and commute times to find the best fit.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-orange-600">📊</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Market Timing</h3>
              <p className="text-gray-600">
                Properties with fewer days on market may indicate high demand and competitive pricing.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-red-600">🏠</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Property Type</h3>
              <p className="text-gray-600">
                Consider your lifestyle needs when choosing between single-family, townhouse, or condo.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-indigo-600">📞</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Get Expert Help</h3>
              <p className="text-gray-600">
                Our local experts can help you refine your search and find properties that match your criteria.
              </p>
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
            Need Help with Your Search?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Our real estate experts can help you find the perfect home that meets all your criteria
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-white text-blue-900 hover:bg-blue-50">
              Contact an Agent
            </Button>
            <Button href="http://drjanduffy.realscout.com/onboarding" intent="secondary" className="border-white text-white hover:bg-white hover:text-blue-900">
              Get Home Value
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
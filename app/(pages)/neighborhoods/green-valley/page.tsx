import type { Metadata } from 'next';
import { Button } from '../../../../components/Button/Button';
import { RealScoutYourListings } from '../../../../components/RealScout/RealScoutYourListings';

export const metadata: Metadata = {
  title: 'Green Valley Las Vegas | Affordable Homes & Great Community',
  description:
    'Discover Green Valley, an affordable Las Vegas neighborhood with great amenities and convenient location. Find your perfect home in this growing community.',
  keywords:
    'Green Valley Las Vegas, Green Valley homes, Green Valley real estate, affordable Las Vegas homes',
};

export default function GreenValleyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Green Valley
            </h1>
            <p className="mb-8 text-xl font-light text-purple-100 md:text-2xl">
              Affordable Homes in a Growing Las Vegas Community
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                href="/properties?neighborhood=green-valley"
                className="bg-white text-purple-800 hover:bg-purple-50"
              >
                View Green Valley Homes
              </Button>
              <Button
                href="/contact"
                intent="secondary"
                className="border-white text-white hover:bg-white hover:text-purple-800"
              >
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
              <div className="mb-2 text-3xl font-bold text-purple-600">$380K</div>
              <div className="text-sm text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">32</div>
              <div className="text-sm text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">+5.1%</div>
              <div className="text-sm text-gray-600">YoY Growth</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">234</div>
              <div className="text-sm text-gray-600">Active Listings</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Green Valley */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                About Green Valley
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Green Valley is a well-established neighborhood in Henderson, Nevada, known for its
                affordability, convenience, and family-friendly atmosphere. This growing community
                offers a great balance of suburban living with easy access to shopping, dining, and
                entertainment.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                With its proximity to major employers, excellent schools, and abundant amenities,
                Green Valley has become a popular choice for families, first-time homebuyers, and
                those looking for value in the Las Vegas real estate market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-700">Affordable housing options</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-700">Convenient location near major employers</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-700">Excellent schools and parks</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-700">Growing community with new developments</span>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600"></div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Green Valley Amenities
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-purple-600">🛍️</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Shopping Centers</h3>
              <p className="text-gray-600">
                The District at Green Valley Ranch, Galleria at Sunset, and numerous local shops
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-green-600">🌳</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Parks & Recreation</h3>
              <p className="text-gray-600">
                Multiple parks, trails, and recreation centers for outdoor activities
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-blue-600">🎓</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Schools</h3>
              <p className="text-gray-600">
                Highly-rated public and private schools serving all grade levels
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-orange-600">🍽️</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Dining</h3>
              <p className="text-gray-600">Diverse restaurant options from casual to fine dining</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-red-600">🏥</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Healthcare</h3>
              <p className="text-gray-600">
                St. Rose Dominican Hospital and numerous medical facilities
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-indigo-600">🚗</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Transportation</h3>
              <p className="text-gray-600">
                Easy access to I-215, I-515, and public transportation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Market */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Green Valley Real Estate Market
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Market Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Median Home Price</span>
                  <span className="font-semibold text-gray-900">$380,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Average Days on Market</span>
                  <span className="font-semibold text-gray-900">32 days</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Price per Square Foot</span>
                  <span className="font-semibold text-gray-900">$185</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Year-over-Year Growth</span>
                  <span className="font-semibold text-green-600">+5.1%</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Active Listings</span>
                  <span className="font-semibold text-gray-900">234</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Home Types</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Single Family Homes</span>
                  <span className="font-semibold text-gray-900">70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Townhomes</span>
                  <span className="font-semibold text-gray-900">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Condos</span>
                  <span className="font-semibold text-gray-900">10%</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold text-gray-900">Price Ranges</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-24 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-600">$250K - $400K (50%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-16 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600">$400K - $600K (35%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-8 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600">$600K+ (15%)</span>
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
      <section className="bg-purple-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Find Your Green Valley Home?
          </h2>
          <p className="mb-8 text-xl text-purple-100">
            Our Green Valley experts can help you find the perfect affordable home
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              href="/properties?neighborhood=green-valley"
              className="bg-white text-purple-800 hover:bg-purple-50"
            >
              Browse Green Valley Homes
            </Button>
            <Button
              href="/contact"
              intent="secondary"
              className="border-white text-white hover:bg-white hover:text-purple-800"
            >
              Get Expert Guidance
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

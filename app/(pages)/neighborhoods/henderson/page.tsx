import type { Metadata } from 'next';
import { Button } from '../../../../components/Button/Button';
import { RealScoutYourListings } from '../../../../components/RealScout/RealScoutYourListings';

export const metadata: Metadata = {
  title: 'Henderson Las Vegas | Family-Friendly Homes & Community',
  description:
    "Discover Henderson, Las Vegas' family-friendly city with excellent schools, parks, and affordable housing. Find your perfect home in this growing Las Vegas suburb.",
  keywords:
    'Henderson Las Vegas, Henderson homes, Henderson real estate, Henderson schools, Henderson parks',
};

export default function HendersonPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Henderson
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Las Vegas' Premier Family-Friendly City
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                href="/properties?neighborhood=henderson"
                className="bg-white text-blue-800 hover:bg-blue-50"
              >
                View Henderson Homes
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-blue-800"
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
              <div className="mb-2 text-3xl font-bold text-blue-600">$450K</div>
              <div className="text-sm text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">320K+</div>
              <div className="text-sm text-gray-600">Residents</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">105</div>
              <div className="text-sm text-gray-600">Square Miles</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">A+</div>
              <div className="text-sm text-gray-600">School Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Henderson */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">About Henderson</h2>
              <p className="mb-6 text-lg text-gray-600">
                Henderson is Nevada's second-largest city and one of the fastest-growing communities
                in the Las Vegas Valley. Known for its family-friendly atmosphere, excellent
                schools, and abundant parks and recreation opportunities, Henderson offers a
                suburban lifestyle with easy access to all that Las Vegas has to offer.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                The city consistently ranks as one of the safest cities in America and has been
                recognized for its quality of life, making it an ideal place for families,
                professionals, and retirees alike.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700">Second-largest city in Nevada</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700">Consistently ranked among safest cities</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700">Excellent public and private schools</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700">Abundant parks and recreation facilities</span>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600"></div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Henderson Amenities
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-blue-600">🎓</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Top-Rated Schools</h3>
              <p className="text-gray-600">
                Clark County School District with A+ rated schools and excellent academic programs
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-green-600">🌳</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Parks & Recreation</h3>
              <p className="text-gray-600">
                70+ parks, trails, and recreation centers including the Henderson Bird Viewing
                Preserve
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-purple-600">🛍️</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Shopping & Dining</h3>
              <p className="text-gray-600">
                The District at Green Valley Ranch, Galleria at Sunset, and numerous local
                restaurants
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-orange-600">🏥</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Healthcare</h3>
              <p className="text-gray-600">
                St. Rose Dominican Hospitals and numerous medical facilities throughout the city
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-red-600">🎭</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Entertainment</h3>
              <p className="text-gray-600">
                Green Valley Ranch Resort, Henderson Pavilion, and cultural events year-round
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 text-3xl text-indigo-600">🚗</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Transportation</h3>
              <p className="text-gray-600">
                Easy access to I-215, I-515, and convenient public transportation options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Market */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Henderson Real Estate Market
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Market Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Median Home Price</span>
                  <span className="font-semibold text-gray-900">$450,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Average Days on Market</span>
                  <span className="font-semibold text-gray-900">28 days</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Price per Square Foot</span>
                  <span className="font-semibold text-gray-900">$215</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Year-over-Year Growth</span>
                  <span className="font-semibold text-green-600">+4.8%</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Active Listings</span>
                  <span className="font-semibold text-gray-900">456</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Home Types</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Single Family Homes</span>
                  <span className="font-semibold text-gray-900">75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Townhomes</span>
                  <span className="font-semibold text-gray-900">15%</span>
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
                    <div className="mr-2 h-2 w-20 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600">$300K - $500K (45%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-16 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600">$500K - $750K (35%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-12 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-600">$750K+ (20%)</span>
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
            Popular Henderson Areas
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Green Valley</h3>
              <p className="mb-4 text-gray-600">
                Established neighborhood with mature trees, excellent schools, and convenient
                shopping
              </p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $380,000</p>
                <p>Avg. Days on Market: 25</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Anthem</h3>
              <p className="mb-4 text-gray-600">
                Master-planned community with golf courses, parks, and luxury homes
              </p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $650,000</p>
                <p>Avg. Days on Market: 30</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Seven Hills</h3>
              <p className="mb-4 text-gray-600">
                Upscale community with mountain views, custom homes, and exclusive amenities
              </p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $750,000</p>
                <p>Avg. Days on Market: 35</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Inspirada</h3>
              <p className="mb-4 text-gray-600">
                Newer master-planned community with modern homes and family-friendly amenities
              </p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $520,000</p>
                <p>Avg. Days on Market: 22</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">MacDonald Ranch</h3>
              <p className="mb-4 text-gray-600">
                Established community with golf course, parks, and diverse housing options
              </p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $480,000</p>
                <p>Avg. Days on Market: 28</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Sun City Anthem</h3>
              <p className="mb-4 text-gray-600">
                Active adult community with golf, fitness centers, and social activities
              </p>
              <div className="text-sm text-gray-500">
                <p>Median Price: $420,000</p>
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
      <section className="bg-blue-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Call Henderson Home?</h2>
          <p className="mb-8 text-xl text-blue-100">
            Our Henderson experts can help you find the perfect home in this family-friendly city
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              href="/properties?neighborhood=henderson"
              className="bg-white text-blue-800 hover:bg-blue-50"
            >
              Browse Henderson Homes
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-blue-800"
            >
              Get Expert Guidance
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

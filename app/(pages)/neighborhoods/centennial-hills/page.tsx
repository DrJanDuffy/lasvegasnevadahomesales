import type { Metadata } from 'next';
import { Button } from '../../../../components/Button/Button';
import { RealScoutYourListings } from '../../../../components/RealScout/RealScoutYourListings';

export const metadata: Metadata = {
  title: 'Centennial Hills Las Vegas Real Estate | New Homes for Sale | Las Vegas Nevada Home Sales',
  description:
    'Find new homes for sale in Centennial Hills Las Vegas. Growing master-planned community with modern amenities, great schools, and family-friendly atmosphere. Expert real estate guidance from Las Vegas Nevada Home Sales.',
  keywords:
    'Centennial Hills Las Vegas real estate, Centennial Hills homes for sale, new homes Las Vegas, master-planned community, Las Vegas Nevada Home Sales, North Las Vegas homes, family-friendly neighborhood',
  openGraph: {
    title: 'Centennial Hills Las Vegas Real Estate | New Homes for Sale',
    description: 'Find new homes for sale in Centennial Hills Las Vegas. Growing master-planned community with modern amenities, great schools, and family-friendly atmosphere.',
    url: 'https://lasvegasnevadahomesales.com/neighborhoods/centennial-hills',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-centennial-hills.jpg',
        width: 1200,
        height: 630,
        alt: 'Centennial Hills Las Vegas New Homes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centennial Hills Las Vegas Real Estate | New Homes for Sale',
    description: 'Find new homes for sale in Centennial Hills Las Vegas. Growing master-planned community with modern amenities, great schools, and family-friendly atmosphere.',
    images: ['https://lasvegasnevadahomesales.com/images/og-centennial-hills.jpg'],
  },
};

export default function CentennialHillsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Centennial Hills Las Vegas
            </h1>
            <p className="mb-8 text-xl text-emerald-100 md:text-2xl">
              Discover the newest master-planned community in Las Vegas with modern homes, 
              excellent amenities, and a family-friendly atmosphere.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                href="http://drjanduffy.realscout.com/onboarding"
                variant="default"
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100"
              >
                View Homes for Sale
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-600"
              >
                Get Market Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Welcome to Centennial Hills
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Centennial Hills is Las Vegas' newest master-planned community, offering 
                modern homes with contemporary designs and energy-efficient features. 
                This growing neighborhood provides an excellent opportunity for families 
                looking for new construction in a well-planned community.
              </p>
              <p className="mb-8 text-lg text-gray-700">
                With easy access to the 215 Beltway and close proximity to Red Rock Canyon, 
                Centennial Hills offers the perfect balance of urban convenience and natural beauty.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-emerald-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-emerald-900">
                    New Construction
                  </h3>
                  <p className="text-emerald-700">
                    Modern homes with latest features and energy-efficient designs
                  </p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-emerald-900">
                    Family-Friendly
                  </h3>
                  <p className="text-emerald-700">
                    Safe streets, parks, and excellent schools for growing families
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Centennial Hills Las Vegas new homes"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Community Amenities
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-emerald-600">🏫</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Top-Rated Schools</h3>
              <p className="text-gray-700">
                Excellent schools including Centennial Hills Elementary and Arbor View High School
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-emerald-600">🌳</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Parks & Recreation</h3>
              <p className="text-gray-700">
                Multiple parks, walking trails, and recreational facilities for families
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-emerald-600">🛍️</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Shopping & Dining</h3>
              <p className="text-gray-700">
                Convenient access to shopping centers, restaurants, and entertainment
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-emerald-600">🚗</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Easy Commuting</h3>
              <p className="text-gray-700">
                Quick access to 215 Beltway and major employment centers
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-emerald-600">🏔️</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Red Rock Access</h3>
              <p className="text-gray-700">
                Close proximity to Red Rock Canyon for outdoor enthusiasts
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-emerald-600">🏠</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">New Home Options</h3>
              <p className="text-gray-700">
                Wide variety of floor plans and home styles from top builders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Centennial Hills Market Data
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-emerald-600">$425,000</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-emerald-600">$2,200</div>
              <div className="text-gray-600">Average Rent</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-emerald-600">45</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-emerald-600">+8.2%</div>
              <div className="text-gray-600">Price Appreciation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Homes for Sale in Centennial Hills
          </h2>
          <RealScoutYourListings />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Ready to Find Your New Home in Centennial Hills?
          </h2>
          <p className="mb-8 text-xl text-emerald-100">
            Let our expert team help you discover the perfect new construction home 
            in this growing master-planned community.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              href="/contact"
              variant="default"
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100"
            >
              Schedule a Tour
            </Button>
            <Button
              href="http://drjanduffy.realscout.com/onboarding"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              View All Listings
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

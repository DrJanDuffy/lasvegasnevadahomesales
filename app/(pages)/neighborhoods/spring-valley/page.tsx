import type { Metadata } from 'next';
import { Button } from '../../../../components/Button/Button';
import { RealScoutYourListings } from '../../../../components/RealScout/RealScoutYourListings';

export const metadata: Metadata = {
  title: 'Spring Valley Las Vegas Real Estate | Central Location Homes for Sale | Las Vegas Nevada Home Sales',
  description:
    'Find homes for sale in Spring Valley Las Vegas. Central location with convenient access to everything, great schools, and diverse housing options. Expert real estate guidance from Las Vegas Nevada Home Sales.',
  keywords:
    'Spring Valley Las Vegas real estate, Spring Valley homes for sale, central Las Vegas homes, Las Vegas Nevada Home Sales, convenient location, diverse housing options, established neighborhood',
  openGraph: {
    title: 'Spring Valley Las Vegas Real Estate | Central Location Homes for Sale',
    description: 'Find homes for sale in Spring Valley Las Vegas. Central location with convenient access to everything, great schools, and diverse housing options.',
    url: 'https://lasvegasnevadahomesales.com/neighborhoods/spring-valley',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-spring-valley.jpg',
        width: 1200,
        height: 630,
        alt: 'Spring Valley Las Vegas Central Location Homes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spring Valley Las Vegas Real Estate | Central Location Homes for Sale',
    description: 'Find homes for sale in Spring Valley Las Vegas. Central location with convenient access to everything, great schools, and diverse housing options.',
    images: ['https://lasvegasnevadahomesales.com/images/og-spring-valley.jpg'],
  },
};

export default function SpringValleyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Spring Valley Las Vegas
            </h1>
            <p className="mb-8 text-xl text-orange-100 md:text-2xl">
              Discover the convenience of central Las Vegas living with diverse housing 
              options, excellent schools, and easy access to everything the city offers.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                href="http://drjanduffy.realscout.com/onboarding"
                variant="default"
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                View Homes for Sale
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600"
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
                Welcome to Spring Valley
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Spring Valley offers the perfect balance of suburban comfort and urban convenience. 
                This established neighborhood provides easy access to the Las Vegas Strip, 
                downtown, and major employment centers while maintaining a residential feel.
              </p>
              <p className="mb-8 text-lg text-gray-700">
                With a diverse mix of housing options from single-family homes to townhouses, 
                Spring Valley appeals to first-time buyers, growing families, and empty nesters alike.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-orange-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-orange-900">
                    Central Location
                  </h3>
                  <p className="text-orange-700">
                    Easy access to Strip, downtown, and major employment centers
                  </p>
                </div>
                <div className="rounded-lg bg-orange-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-orange-900">
                    Diverse Housing
                  </h3>
                  <p className="text-orange-700">
                    Wide variety of home styles and price points for every budget
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Spring Valley Las Vegas central location homes"
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
            Why Choose Spring Valley
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-orange-600">📍</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Prime Location</h3>
              <p className="text-gray-700">
                Centrally located with quick access to Strip, downtown, and major highways
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-orange-600">🏫</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Excellent Schools</h3>
              <p className="text-gray-700">
                Top-rated schools including Spring Valley High School and local elementary schools
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-orange-600">🛍️</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Shopping & Dining</h3>
              <p className="text-gray-700">
                Close to major shopping centers, restaurants, and entertainment venues
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-orange-600">🏥</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Healthcare Access</h3>
              <p className="text-gray-700">
                Convenient access to major hospitals and medical facilities
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-orange-600">🌳</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Parks & Recreation</h3>
              <p className="text-gray-700">
                Multiple parks, community centers, and recreational facilities
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl text-orange-600">💼</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Job Opportunities</h3>
              <p className="text-gray-700">
                Close to major employment centers and business districts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Spring Valley Market Data
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">$400,000</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">$2,100</div>
              <div className="text-gray-600">Average Rent</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">38</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">+6.8%</div>
              <div className="text-gray-600">Price Appreciation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Homes for Sale in Spring Valley
          </h2>
          <RealScoutYourListings />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Ready to Find Your Home in Spring Valley?
          </h2>
          <p className="mb-8 text-xl text-orange-100">
            Let our expert team help you discover the perfect home in this 
            convenient and established Las Vegas neighborhood.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              href="/contact"
              variant="default"
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              Schedule a Tour
            </Button>
            <Button
              href="http://drjanduffy.realscout.com/onboarding"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              View All Listings
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

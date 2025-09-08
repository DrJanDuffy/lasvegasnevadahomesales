import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '../../../../components/Button/Button';

export const metadata: Metadata = {
  title: 'Property Details | Las Vegas Real Estate',
  description:
    'View detailed information about this Las Vegas property including photos, amenities, and contact information.',
};

// Mock property data - in a real app, this would come from an API based on the slug
const getPropertyData = (slug: string) => {
  const properties = {
    '1234-summerlin-pkwy': {
      id: 1,
      address: '1234 Summerlin Pkwy',
      city: 'Las Vegas',
      neighborhood: 'Summerlin',
      price: 675000,
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: 'Single Family',
      status: 'Active',
      daysOnMarket: 12,
      description:
        'Beautiful single-family home in the heart of Summerlin. This stunning property features an open floor plan, gourmet kitchen, and spacious backyard perfect for entertaining.',
      features: [
        'Open Floor Plan',
        'Gourmet Kitchen',
        'Master Suite',
        'Backyard',
        '2-Car Garage',
        'Central AC',
      ],
      yearBuilt: 2018,
      lotSize: '0.25 acres',
      parking: '2-car garage',
      heating: 'Central',
      cooling: 'Central Air',
      appliances: ['Refrigerator', 'Dishwasher', 'Microwave', 'Washer/Dryer'],
      images: [
        '/images/properties/property-1-1.jpg',
        '/images/properties/property-1-2.jpg',
        '/images/properties/property-1-3.jpg',
      ],
    },
  };

  return properties[slug as keyof typeof properties] || null;
};

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyData(slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      {/* Property Header */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-4">
            <nav className="text-sm text-gray-500">
              <Link href="/properties" className="hover:text-blue-600">
                Properties
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/neighborhoods/${property.neighborhood.toLowerCase()}`}
                className="hover:text-blue-600"
              >
                {property.neighborhood}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{property.address}</span>
            </nav>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
                {property.address}
              </h1>
              <p className="mb-4 text-xl text-gray-600">
                {property.city}, NV • {property.neighborhood}
              </p>
              <div className="mb-6 flex items-center space-x-6 text-lg">
                <span className="font-semibold text-blue-600">
                  ${property.price.toLocaleString()}
                </span>
                <span className="text-gray-600">{property.beds} beds</span>
                <span className="text-gray-600">{property.baths} baths</span>
                <span className="text-gray-600">{property.sqft.toLocaleString()} sqft</span>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <Button href="/contact" className="bg-blue-600 text-white hover:bg-blue-700">
                Contact Agent
              </Button>
              <Button
                href="/home-valuation"
                intent="secondary"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Get Home Value
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Images */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {property.images.map((image, index) => (
              <div
                key={index}
                className="aspect-video rounded-lg bg-gradient-to-br from-gray-300 to-gray-400"
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-4xl">🏠</div>
                    <p className="text-gray-600">Property Image {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">About This Property</h2>
              <p className="mb-6 text-lg text-gray-600">{property.description}</p>

              <h3 className="mb-4 text-xl font-semibold text-gray-900">Features</h3>
              <div className="mb-8 grid grid-cols-1 gap-2 md:grid-cols-2">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-xl font-semibold text-gray-900">Property Details</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-semibold text-gray-900">{property.type}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Year Built</span>
                    <span className="font-semibold text-gray-900">{property.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Lot Size</span>
                    <span className="font-semibold text-gray-900">{property.lotSize}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Parking</span>
                    <span className="font-semibold text-gray-900">{property.parking}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Heating</span>
                    <span className="font-semibold text-gray-900">{property.heating}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Cooling</span>
                    <span className="font-semibold text-gray-900">{property.cooling}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Days on Market</span>
                    <span className="font-semibold text-gray-900">{property.daysOnMarket}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Status</span>
                    <span className="font-semibold text-green-600">{property.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact Agent</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Lead Real Estate Agent</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone: (702) 555-0123</p>
                    <Button
                      href="http://drjanduffy.realscout.com/onboarding"
                      className="mt-1 text-xs text-blue-600 hover:text-blue-800"
                    >
                      Contact Agent
                    </Button>
                    <p className="text-sm text-gray-600">
                      Email: sarah@lasvegasnevadahomesales.com
                    </p>
                  </div>
                  <Button
                    href="/contact"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Schedule Viewing
                  </Button>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Mortgage Calculator</h3>
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="home-price"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Home Price
                    </label>
                    <input
                      id="home-price"
                      type="text"
                      value={`$${property.price.toLocaleString()}`}
                      readOnly
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
                      aria-label="Home price"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="down-payment"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Down Payment
                    </label>
                    <select
                      id="down-payment"
                      name="down-payment"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
                      aria-label="Select down payment percentage"
                    >
                      <option>20% ($135,000)</option>
                      <option>10% ($67,500)</option>
                      <option>5% ($33,750)</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="interest-rate"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Interest Rate
                    </label>
                    <input
                      id="interest-rate"
                      type="text"
                      value="4.2%"
                      readOnly
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
                      aria-label="Interest rate"
                    />
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-gray-600">Estimated Monthly Payment:</p>
                    <p className="text-lg font-semibold text-gray-900">$2,847</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Similar Properties</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <p className="font-semibold text-gray-900">$650,000</p>
                    <p className="text-sm text-gray-600">3 beds • 2 baths • 2,200 sqft</p>
                    <p className="text-sm text-gray-500">4567 Summerlin Dr</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="font-semibold text-gray-900">$695,000</p>
                    <p className="text-sm text-gray-600">4 beds • 3 baths • 2,900 sqft</p>
                    <p className="text-sm text-gray-500">7890 Summerlin Blvd</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">$625,000</p>
                    <p className="text-sm text-gray-600">3 beds • 2.5 baths • 2,400 sqft</p>
                    <p className="text-sm text-gray-500">1234 Summerlin Way</p>
                  </div>
                </div>
                <Button
                  href="/properties?neighborhood=summerlin"
                  className="mt-4 w-full bg-gray-200 text-gray-900 hover:bg-gray-300"
                >
                  View More in {property.neighborhood}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Interested in This Property?</h2>
          <p className="mb-8 text-xl text-blue-100">
            Contact our team to schedule a viewing or get more information
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-white text-blue-900 hover:bg-blue-50">
              Schedule Viewing
            </Button>
            <Button
              href="tel:+17025001981"
              intent="secondary"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { Button } from '../../../components/Button/Button';
import { OptimizedImage } from '../../../components/OptimizedImage/OptimizedImage';
import { PropertyGallery } from '../../../components/PropertyGallery/PropertyGallery';
import { RealScoutYourListings } from '../../../components/RealScout/RealScoutYourListings';
import { FAQSchema, propertiesPageFAQs } from '../../../components/SEO/FAQSchema';
import {
  ReviewSchema,
  serviceAggregateRating,
  serviceReviews,
} from '../../../components/SEO/ReviewSchema';
import { SEOHead } from '../../../components/SEO/SEOHead';

export const metadata: Metadata = {
  title: 'Las Vegas Homes for Sale | Property Search & Listings',
  description:
    'Search thousands of Las Vegas homes for sale. Filter by price, location, bedrooms, and more. Find your dream home in Las Vegas, Henderson, Summerlin, and surrounding areas.',
  keywords:
    'Las Vegas homes for sale, Las Vegas real estate listings, Las Vegas property search, homes for sale Las Vegas',
  alternates: {
    canonical: 'https://lasvegasnevadahomesales.com/properties',
  },
  openGraph: {
    title: 'Las Vegas Homes for Sale | Property Search & Listings',
    description: 'Search thousands of Las Vegas homes for sale. Filter by price, location, bedrooms, and more.',
    url: 'https://lasvegasnevadahomesales.com/properties',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-properties.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Homes for Sale',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Homes for Sale | Property Search & Listings',
    description: 'Search thousands of Las Vegas homes for sale. Filter by price, location, bedrooms, and more.',
    images: ['https://lasvegasnevadahomesales.com/images/og-properties.jpg'],
  },
};

// Mock property data - in a real app, this would come from an API
const properties = [
  {
    id: 1,
    address: '1234 Summerlin Pkwy',
    city: 'Las Vegas',
    neighborhood: 'Summerlin',
    price: 675000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: 'Single Family',
    image: '/images/properties/property-1.jpg',
    status: 'Active',
    daysOnMarket: 12,
  },
  {
    id: 2,
    address: '5678 Green Valley Dr',
    city: 'Henderson',
    neighborhood: 'Green Valley',
    price: 425000,
    beds: 3,
    baths: 2,
    sqft: 2100,
    type: 'Townhouse',
    image: '/images/properties/property-2.jpg',
    status: 'Active',
    daysOnMarket: 8,
  },
  {
    id: 3,
    address: '9012 Downtown Blvd',
    city: 'Las Vegas',
    neighborhood: 'Downtown',
    price: 320000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: 'Condo',
    image: '/images/properties/property-3.jpg',
    status: 'Active',
    daysOnMarket: 15,
  },
  {
    id: 4,
    address: '3456 Centennial Hills Dr',
    city: 'Las Vegas',
    neighborhood: 'Centennial Hills',
    price: 485000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    type: 'Single Family',
    image: '/images/properties/property-4.jpg',
    status: 'Active',
    daysOnMarket: 5,
  },
];

export default function PropertiesPage() {
  return (
    <>
      <SEOHead
        title="Las Vegas Nevada Home Sales | Property Search & Listings"
        description="Search thousands of Las Vegas Nevada Home Sales listings. Find your dream home in Las Vegas, Henderson, Summerlin, and all of Nevada."
        keywords="Las Vegas Nevada Home Sales, Las Vegas homes for sale, Nevada real estate, property search, Summerlin homes, Henderson homes"
        canonical="/properties"
        ogImage="/images/og-properties.jpg"
      />
      <FAQSchema faqs={propertiesPageFAQs} />
      <ReviewSchema
        reviews={serviceReviews}
        aggregateRating={serviceAggregateRating}
        itemName="Las Vegas Nevada Home Sales Property Search"
        itemType="RealEstateAgent"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Las Vegas Nevada Home Sales – Property Listings
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Find your perfect home with Las Vegas Nevada Home Sales. Search all properties in Las
              Vegas, Summerlin, Henderson, and more.
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Advanced Search */}
      <section className="bg-white py-8 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-lg bg-gray-50 p-6">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Search Properties</h2>
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Properties Found</h2>
              <p className="text-gray-600">Showing {properties.length} of 2,847 active listings</p>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                Sort by:
              </label>
              <select
                id="sort"
                name="sort"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                aria-label="Sort properties"
              >
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Bedrooms</option>
                <option>Square Feet</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-64">
                  <OptimizedImage
                    src={
                      property.image ||
                      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
                    }
                    alt={`${property.address} - ${property.type} in ${property.neighborhood} | Las Vegas Nevada Home Sales`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-white">
                    {property.status}
                  </div>
                  <div className="absolute left-2 top-2 rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white">
                    {property.daysOnMarket} days
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      ${property.price.toLocaleString()}
                    </h3>
                    <span className="text-sm text-gray-500">{property.type}</span>
                  </div>
                  <p className="mb-2 text-lg text-gray-700">{property.address}</p>
                  <p className="mb-4 text-sm text-gray-500">
                    {property.city}, NV • {property.neighborhood}
                  </p>
                  <div className="mb-4 flex items-center space-x-4 text-sm text-gray-600">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                  <Button href={`/properties/${property.id}`} className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center space-x-2">
            <button
              type="button"
              className="rounded-xl border border-gray-300 bg-transparent px-6 py-2.5 text-lg text-gray-700 transition-colors delay-50 hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              type="button"
              className="rounded-xl bg-blue-600 px-6 py-2.5 text-lg text-white transition-colors delay-50 hover:bg-blue-700"
            >
              1
            </button>
            <button
              type="button"
              className="rounded-xl border border-gray-300 bg-transparent px-6 py-2.5 text-lg text-gray-700 transition-colors delay-50 hover:bg-gray-50"
            >
              2
            </button>
            <button
              type="button"
              className="rounded-xl border border-gray-300 bg-transparent px-6 py-2.5 text-lg text-gray-700 transition-colors delay-50 hover:bg-gray-50"
            >
              3
            </button>
            <span className="text-gray-500">...</span>
            <button
              type="button"
              className="rounded-xl border border-gray-300 bg-transparent px-6 py-2.5 text-lg text-gray-700 transition-colors delay-50 hover:bg-gray-50"
            >
              25
            </button>
            <button
              type="button"
              className="rounded-xl border border-gray-300 bg-transparent px-6 py-2.5 text-lg text-gray-700 transition-colors delay-50 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Featured Property Gallery */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Property Gallery
          </h2>
          <div className="mb-12">
            <PropertyGallery
              images={[
                {
                  src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
                  alt: 'Beautiful Summerlin home exterior',
                  caption: 'Stunning exterior with modern design',
                },
                {
                  src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
                  alt: 'Spacious kitchen with granite countertops',
                  caption: 'Gourmet kitchen with premium finishes',
                },
                {
                  src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
                  alt: 'Open concept living area',
                  caption: 'Bright and airy living space',
                },
                {
                  src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
                  alt: 'Master bedroom suite',
                  caption: 'Luxurious master bedroom',
                },
                {
                  src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                  alt: 'Backyard oasis',
                  caption: 'Private backyard with pool',
                },
              ]}
              propertyId="featured-1"
              showThumbnails={true}
              autoPlay={true}
              interval={4000}
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

      {/* Home Value Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Get Your Home's Market Value
            </h2>
            <p className="text-lg text-gray-600">
              Enter your address below to receive an instant property valuation and market analysis
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Can't Find What You're Looking For?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Our real estate experts can help you find the perfect home or set up custom alerts
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-white text-blue-900 hover:bg-blue-50">
              Contact an Agent
            </Button>
            <Button
              href="/properties/search"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              Advanced Search
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

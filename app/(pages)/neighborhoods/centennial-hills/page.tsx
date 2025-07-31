import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/Button/Button'
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs'
import { getPageSEO } from '@/config/seo-config'

export const metadata: Metadata = {
  title: "Centennial Hills Las Vegas Homes for Sale | Northwest Community",
  description: "Find homes in Centennial Hills, Northwest Las Vegas. Discover family homes with mountain views, newer construction, and a quiet suburban lifestyle.",
  keywords: "Centennial Hills homes for sale, Centennial Hills real estate, Northwest Las Vegas homes, mountain view homes, family homes Las Vegas",
  alternates: {
    canonical: "/neighborhoods/centennial-hills",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CentennialHillsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs 
              items={[
                { label: "Home", href: "/" },
                { label: "Neighborhoods", href: "/neighborhoods" },
                { label: "Centennial Hills" }
              ]}
            />
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Centennial Hills Homes for Sale
            </h1>
            <p className="mb-8 text-xl font-light text-yellow-100 md:text-2xl">
              Northwest Las Vegas community with mountain views and family homes
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="/properties?neighborhood=centennial-hills" className="bg-white text-yellow-600 hover:bg-yellow-50">
                View Homes in Centennial Hills
              </Button>
              <Button href="/home-valuation" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
                Get Home Valuation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">About Centennial Hills</h2>
              <p className="mb-6 text-lg text-gray-600">
                Centennial Hills is a master-planned community located in Northwest Las Vegas, offering a perfect blend of suburban tranquility and modern convenience. This family-friendly neighborhood features newer construction homes with stunning mountain views and a peaceful atmosphere.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                Residents enjoy easy access to shopping centers, parks, and excellent schools, making it an ideal location for families looking for quality living in Las Vegas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">$420,000</div>
                  <div className="text-sm text-gray-600">Median Home Price</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">4.2/5</div>
                  <div className="text-sm text-gray-600">School Rating</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mountain Views
                </li>
                <li className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Family Homes
                </li>
                <li className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Newer Construction
                </li>
                <li className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quiet Area
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Amenities */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Local Amenities</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Shopping & Dining</h3>
              <p className="text-gray-600">Centennial Center offers shopping, dining, and entertainment options just minutes away.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Parks & Recreation</h3>
              <p className="text-gray-600">Multiple parks and recreational facilities provide outdoor activities for families.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Schools</h3>
              <p className="text-gray-600">Excellent public and private schools serve the Centennial Hills community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Find Your Home in Centennial Hills?</h2>
          <p className="mb-8 text-xl">
            Let us help you discover the perfect home in this beautiful Northwest Las Vegas community.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/properties?neighborhood=centennial-hills" className="bg-white text-yellow-600 hover:bg-yellow-50">
              Browse Homes
            </Button>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
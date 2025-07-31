import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../../components/Button/Button'
import { Breadcrumbs } from '../../../../components/SEO/Breadcrumbs'
import { getPageSEO } from '../../../../config/seo-config'

export const metadata: Metadata = {
  title: "Spring Valley Las Vegas Homes for Sale | Diverse Community",
  description: "Find homes in Spring Valley, Las Vegas. Discover a diverse community with good schools, convenient access to the Strip, and established neighborhoods.",
  keywords: "Spring Valley homes for sale, Spring Valley real estate, Las Vegas diverse community, Strip access homes, established neighborhoods",
  alternates: {
    canonical: "/neighborhoods/spring-valley",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SpringValleyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-400 to-indigo-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs 
              items={[
                { label: "Home", href: "/" },
                { label: "Neighborhoods", href: "/neighborhoods" },
                { label: "Spring Valley" }
              ]}
            />
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Spring Valley Homes for Sale
            </h1>
            <p className="mb-8 text-xl font-light text-indigo-100 md:text-2xl">
              Diverse community with good schools and convenient access to the Strip
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="/properties?neighborhood=spring-valley" className="bg-white text-green-600 hover:bg-green-50">
                View Homes in Spring Valley
              </Button>
              <Button href="/home-valuation" intent="secondary" className="border-white text-white hover:bg-white hover:text-green-600">
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
              <h2 className="mb-6 text-3xl font-bold text-gray-900">About Spring Valley</h2>
              <p className="mb-6 text-lg text-gray-600">
                Spring Valley is a vibrant and diverse community located in the heart of Las Vegas, offering residents the perfect balance of suburban living and urban convenience. This established neighborhood features a mix of housing styles and excellent amenities.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                With its proximity to the Las Vegas Strip, shopping centers, and top-rated schools, Spring Valley is an ideal location for families and professionals seeking convenience and community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">$350,000</div>
                  <div className="text-sm text-gray-600">Median Home Price</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">4.0/5</div>
                  <div className="text-sm text-gray-600">School Rating</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Diverse Community
                </li>
                <li className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Good Schools
                </li>
                <li className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Strip Access
                </li>
                <li className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Established Area
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
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Shopping & Entertainment</h3>
              <p className="text-gray-600">Close proximity to the Las Vegas Strip and major shopping centers for all your needs.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Schools & Education</h3>
              <p className="text-gray-600">Top-rated public and private schools serve the Spring Valley community.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Transportation</h3>
              <p className="text-gray-600">Easy access to major highways and public transportation options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Find Your Home in Spring Valley?</h2>
          <p className="mb-8 text-xl">
            Let us help you discover the perfect home in this diverse and convenient Las Vegas community.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/properties?neighborhood=spring-valley" className="bg-white text-indigo-600 hover:bg-indigo-50">
              Browse Homes
            </Button>
            <Button href="/contact" intent="secondary" className="border-white text-white hover:bg-white hover:text-green-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
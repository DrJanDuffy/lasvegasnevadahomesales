import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../../components/ui/card';

export const metadata: Metadata = {
  title: 'Fashion District Las Vegas Real Estate | Shopping & Lifestyle | Las Vegas Nevada Home Sales',
  description:
    'Explore Fashion District Las Vegas real estate. Luxury shopping, dining, and entertainment in the heart of Las Vegas. Find homes near Fashion Show Mall and premium shopping.',
  keywords:
    'Fashion District Las Vegas, Fashion Show Mall, Las Vegas shopping, luxury real estate, Las Vegas Nevada Home Sales, Strip area homes',
  alternates: {
    canonical: 'https://lasvegasnevadahomesales.com/neighborhoods',
  },
  openGraph: {
    title: 'Fashion District Las Vegas Real Estate | Shopping & Lifestyle',
    description: 'Explore Fashion District Las Vegas real estate. Luxury shopping, dining, and entertainment in the heart of Las Vegas.',
    url: 'https://lasvegasnevadahomesales.com/neighborhoods',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-fashion-district.jpg',
        width: 1200,
        height: 630,
        alt: 'Fashion District Las Vegas Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion District Las Vegas Real Estate | Shopping & Lifestyle',
    description: 'Explore Fashion District Las Vegas real estate. Luxury shopping, dining, and entertainment in the heart of Las Vegas.',
    images: ['https://lasvegasnevadahomesales.com/images/og-fashion-district.jpg'],
  },
};

export default function FashionDistrictPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fashion District Las Vegas
          </h1>
          <p className="text-xl text-pink-100 mb-8">
            Luxury shopping, dining, and entertainment in the heart of Las Vegas Strip area.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fashion District Lifestyle
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The Fashion District in Las Vegas offers an unparalleled shopping and entertainment 
              experience. Located near the famous Las Vegas Strip, this area is home to Fashion Show Mall, 
              one of the largest shopping centers in the country.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
                  <span className="text-pink-600">🛍️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fashion Show Mall</h3>
                  <p className="text-gray-700">Over 250 stores including luxury brands and department stores</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
                  <span className="text-pink-600">🍽️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fine Dining</h3>
                  <p className="text-gray-700">World-class restaurants and celebrity chef establishments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
                  <span className="text-pink-600">🎭</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Entertainment</h3>
                  <p className="text-gray-700">Shows, concerts, and entertainment venues nearby</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Estate in Fashion District</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900">Luxury Condos</h4>
                <p className="text-gray-700">High-rise condos with Strip views and resort amenities</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900">Price Range</h4>
                <p className="text-gray-700">$500K - $2M+ depending on size and location</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900">Investment Potential</h4>
                <p className="text-gray-700">Strong rental demand from tourists and business travelers</p>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild className="w-full bg-pink-600 text-white hover:bg-pink-700">
                <Link href="/properties">View Fashion District Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

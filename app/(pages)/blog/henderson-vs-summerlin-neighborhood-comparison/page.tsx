import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';

export const metadata: Metadata = {
  title: 'Henderson vs Summerlin: Which Las Vegas Neighborhood is Right for You? | Las Vegas Nevada Home Sales',
  description: 'Compare Henderson vs Summerlin neighborhoods in Las Vegas. Expert analysis of schools, amenities, home prices, and lifestyle factors to help you choose the perfect community.',
  keywords: 'Henderson vs Summerlin, Las Vegas neighborhoods comparison, Henderson real estate, Summerlin real estate, Las Vegas Nevada Home Sales, best Las Vegas neighborhoods',
  openGraph: {
    title: 'Henderson vs Summerlin: Which Las Vegas Neighborhood is Right for You?',
    description: 'Compare Henderson vs Summerlin neighborhoods in Las Vegas. Expert analysis of schools, amenities, home prices, and lifestyle factors.',
    url: 'https://lasvegasnevadahomesales.com/blog/henderson-vs-summerlin-neighborhood-comparison',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-henderson-vs-summerlin.jpg',
        width: 1200,
        height: 630,
        alt: 'Henderson vs Summerlin Las Vegas Neighborhoods Comparison',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henderson vs Summerlin: Which Las Vegas Neighborhood is Right for You?',
    description: 'Compare Henderson vs Summerlin neighborhoods in Las Vegas. Expert analysis of schools, amenities, home prices, and lifestyle factors.',
    images: ['https://lasvegasnevadahomesales.com/images/og-henderson-vs-summerlin.jpg'],
  },
};

export default function HendersonVsSummerlinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Henderson vs Summerlin: Which Las Vegas Neighborhood is Right for You?
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Expert comparison of two of Las Vegas' most popular neighborhoods to help you make the best choice for your family.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">Neighborhood Comparison</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Las Vegas Real Estate</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Home Buying Guide</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Ultimate Neighborhood Showdown</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            When choosing where to live in Las Vegas, two neighborhoods consistently top the list: Henderson and Summerlin. 
            Both offer exceptional quality of life, but they cater to different lifestyles and budgets. Let's dive deep into 
            what makes each community special.
          </p>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Henderson</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Summerlin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Average Home Price</td>
                    <td className="border border-gray-300 px-4 py-3">$450,000 - $650,000</td>
                    <td className="border border-gray-300 px-4 py-3">$600,000 - $1,200,000+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">School District</td>
                    <td className="border border-gray-300 px-4 py-3">Clark County School District</td>
                    <td className="border border-gray-300 px-4 py-3">Clark County School District</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Commute to Strip</td>
                    <td className="border border-gray-300 px-4 py-3">20-25 minutes</td>
                    <td className="border border-gray-300 px-4 py-3">15-20 minutes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Golf Courses</td>
                    <td className="border border-gray-300 px-4 py-3">3 public courses</td>
                    <td className="border border-gray-300 px-4 py-3">8+ courses</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Shopping Centers</td>
                    <td className="border border-gray-300 px-4 py-3">Galleria at Sunset</td>
                    <td className="border border-gray-300 px-4 py-3">Downtown Summerlin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Henderson Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Henderson?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Pros</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    More affordable housing options
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Family-friendly atmosphere
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Excellent parks and recreation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Growing job market
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Lower property taxes
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Cons</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Longer commute to Las Vegas Strip
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Fewer luxury amenities
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Limited nightlife options
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Summerlin Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Summerlin?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Pros</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Master-planned community design
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    World-class golf courses
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Luxury shopping and dining
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Closer to Las Vegas Strip
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Higher property values
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Cons</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Higher home prices
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    HOA fees can be expensive
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    More traffic congestion
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Decision Guide */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Which Neighborhood is Right for You?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Choose Henderson if:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• You're a first-time homebuyer</li>
                  <li>• You have a growing family</li>
                  <li>• You work in Henderson or nearby</li>
                  <li>• You prefer a quieter, suburban feel</li>
                  <li>• You want more house for your money</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-purple-900 mb-4">Choose Summerlin if:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• You want luxury amenities</li>
                  <li>• You're an avid golfer</li>
                  <li>• You work on the Las Vegas Strip</li>
                  <li>• You enjoy upscale dining and shopping</li>
                  <li>• You're looking for investment potential</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Home?</h3>
            <p className="text-lg mb-6">
              Our expert team can help you explore both Henderson and Summerlin to find the perfect neighborhood for your lifestyle and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/neighborhoods/henderson">Explore Henderson Homes</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/neighborhoods/summerlin">Explore Summerlin Homes</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

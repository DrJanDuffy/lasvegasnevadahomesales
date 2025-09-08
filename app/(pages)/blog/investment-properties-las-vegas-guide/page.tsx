import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';

export const metadata: Metadata = {
  title: 'Investment Properties Las Vegas Guide 2025: Best Areas & Strategies | Las Vegas Nevada Home Sales',
  description: 'Complete guide to Las Vegas real estate investment properties. Learn about the best areas, rental yields, market trends, and investment strategies for Las Vegas rental properties.',
  keywords: 'Las Vegas investment properties, Las Vegas rental properties, real estate investment Las Vegas, Las Vegas Nevada Home Sales, rental property investment, Las Vegas market trends',
  openGraph: {
    title: 'Investment Properties Las Vegas Guide 2025: Best Areas & Strategies',
    description: 'Complete guide to Las Vegas real estate investment properties. Learn about the best areas, rental yields, market trends, and investment strategies.',
    url: 'https://lasvegasnevadahomesales.com/blog/investment-properties-las-vegas-guide',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-investment-properties.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Investment Properties Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Properties Las Vegas Guide 2025: Best Areas & Strategies',
    description: 'Complete guide to Las Vegas real estate investment properties. Learn about the best areas, rental yields, market trends, and investment strategies.',
    images: ['https://lasvegasnevadahomesales.com/images/og-investment-properties.jpg'],
  },
};

export default function InvestmentPropertiesGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Investment Properties Las Vegas: Complete 2025 Guide
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Discover the best Las Vegas neighborhoods for rental property investment, market trends, and proven strategies for maximizing your returns.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">Real Estate Investment</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Las Vegas Rentals</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Property Investment</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Las Vegas is a Top Investment Market</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Las Vegas has emerged as one of the most attractive markets for real estate investment, offering 
            strong rental yields, population growth, and a diverse economy beyond gaming. With no state income 
            tax and a business-friendly environment, Nevada provides excellent opportunities for property investors.
          </p>

          {/* Market Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Las Vegas Investment Market Overview</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Market Stats</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Average Rental Yield:</span>
                    <span className="font-semibold text-green-600">6.2%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Median Home Price:</span>
                    <span className="font-semibold">$425,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Population Growth:</span>
                    <span className="font-semibold text-green-600">+2.1% annually</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Job Growth:</span>
                    <span className="font-semibold text-green-600">+3.4% annually</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vacancy Rate:</span>
                    <span className="font-semibold">4.8%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Investment Advantages</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    No state income tax
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Strong tourism industry
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Growing tech sector
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Affordable entry point
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Landlord-friendly laws
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Investment Areas */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Las Vegas Areas for Investment Properties</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Henderson</CardTitle>
                  <CardDescription>Family-friendly with strong rental demand</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Average rental yield: 6.8%</li>
                    <li>• Median home price: $450,000</li>
                    <li>• Strong school district</li>
                    <li>• Low vacancy rates</li>
                    <li>• Growing job market</li>
                  </ul>
                  <div className="text-sm text-green-600 font-semibold">
                    Best for: Long-term rentals, families
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Summerlin</CardTitle>
                  <CardDescription>Luxury market with high-end rentals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Average rental yield: 5.2%</li>
                    <li>• Median home price: $750,000</li>
                    <li>• Premium amenities</li>
                    <li>• Executive rentals</li>
                    <li>• Strong appreciation</li>
                  </ul>
                  <div className="text-sm text-green-600 font-semibold">
                    Best for: High-end rentals, appreciation
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">North Las Vegas</CardTitle>
                  <CardDescription>Affordable entry with growth potential</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Average rental yield: 7.1%</li>
                    <li>• Median home price: $350,000</li>
                    <li>• New construction</li>
                    <li>• First-time buyers</li>
                    <li>• Development growth</li>
                  </ul>
                  <div className="text-sm text-green-600 font-semibold">
                    Best for: Cash flow, new investors
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Spring Valley</CardTitle>
                  <CardDescription>Central location with steady demand</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Average rental yield: 6.5%</li>
                    <li>• Median home price: $400,000</li>
                    <li>• Convenient location</li>
                    <li>• Mixed demographics</li>
                    <li>• Stable market</li>
                  </ul>
                  <div className="text-sm text-green-600 font-semibold">
                    Best for: Balanced approach, stability
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Investment Strategies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Investment Strategies</h3>
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">1. Buy and Hold Strategy</h4>
                <p className="text-gray-700 mb-4">
                  Purchase properties with strong rental potential and hold them for long-term appreciation and cash flow.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Focus on cash flow positive properties</li>
                  <li>• Look for areas with population growth</li>
                  <li>• Consider property management costs</li>
                  <li>• Plan for maintenance and repairs</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-green-900 mb-4">2. Short-Term Rental Strategy</h4>
                <p className="text-gray-700 mb-4">
                  Target properties near tourist attractions for Airbnb and VRBO rentals with higher nightly rates.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Research local short-term rental regulations</li>
                  <li>• Consider proximity to Strip and attractions</li>
                  <li>• Factor in higher management costs</li>
                  <li>• Plan for seasonal fluctuations</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-purple-900 mb-4">3. Fix and Flip Strategy</h4>
                <p className="text-gray-700 mb-4">
                  Purchase distressed properties, renovate them, and sell for a profit in a shorter timeframe.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Have renovation expertise or reliable contractors</li>
                  <li>• Understand local market values</li>
                  <li>• Budget for unexpected costs</li>
                  <li>• Time the market carefully</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financing Options */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Property Financing</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Conventional Loans</CardTitle>
                  <CardDescription>Traditional financing for investment properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 20-25% down payment</li>
                    <li>• Competitive interest rates</li>
                    <li>• Good credit required</li>
                    <li>• Up to 10 properties</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Hard Money Loans</CardTitle>
                  <CardDescription>Short-term financing for flips</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 15-20% down payment</li>
                    <li>• Higher interest rates</li>
                    <li>• Quick approval</li>
                    <li>• 6-12 month terms</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Portfolio Loans</CardTitle>
                  <CardDescription>For multiple properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 20-25% down payment</li>
                    <li>• Flexible terms</li>
                    <li>• Higher loan limits</li>
                    <li>• Portfolio-based underwriting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Market Trends */}
          <div className="bg-yellow-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">2025 Las Vegas Market Trends</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-yellow-900 mb-4">Positive Trends</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Continued population growth</li>
                  <li>• Diversifying economy</li>
                  <li>• Strong job market</li>
                  <li>• Limited new construction</li>
                  <li>• Rising rental demand</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-yellow-900 mb-4">Challenges to Watch</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rising interest rates</li>
                  <li>• Increased competition</li>
                  <li>• Regulatory changes</li>
                  <li>• Economic uncertainty</li>
                  <li>• Maintenance costs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
            <p className="text-lg mb-6">
              Our investment property specialists can help you identify the best opportunities, 
              analyze potential returns, and guide you through the entire investment process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Investment Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/properties">View Investment Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

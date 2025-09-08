import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

export const metadata: Metadata = {
  title: 'Real Estate Resources | Las Vegas Nevada Home Sales',
  description:
    'Comprehensive real estate resources including buying guides, selling tips, market reports, and expert advice for Las Vegas home buyers and sellers.',
  keywords:
    'Las Vegas real estate resources, home buying guide, selling tips, market reports, real estate advice, Las Vegas Nevada Home Sales',
  alternates: {
    canonical: 'https://lasvegasnevadahomesales.com/resources',
  },
  openGraph: {
    title: 'Real Estate Resources | Las Vegas Nevada Home Sales',
    description: 'Comprehensive real estate resources including buying guides, selling tips, market reports, and expert advice.',
    url: 'https://lasvegasnevadahomesales.com/resources',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Real Estate Resources',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Resources | Las Vegas Nevada Home Sales',
    description: 'Comprehensive real estate resources including buying guides, selling tips, market reports, and expert advice.',
    images: ['https://lasvegasnevadahomesales.com/images/og-resources.jpg'],
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real Estate Resources
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Everything you need to know about buying, selling, and investing in Las Vegas real estate.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Buying Guide */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Home Buying Guide</CardTitle>
              <CardDescription>
                Complete step-by-step guide to buying your first home in Las Vegas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Pre-approval process</li>
                <li>• Neighborhood selection</li>
                <li>• Home inspection tips</li>
                <li>• Closing process</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/strategies">View Buying Guide</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Selling Guide */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Home Selling Guide</CardTitle>
              <CardDescription>
                Expert tips for selling your Las Vegas home for maximum value
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Pricing strategy</li>
                <li>• Home staging tips</li>
                <li>• Marketing tactics</li>
                <li>• Negotiation skills</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/strategies">View Selling Guide</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Market Reports */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Market Reports</CardTitle>
              <CardDescription>
                Latest Las Vegas real estate market data and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Price trends</li>
                <li>• Inventory levels</li>
                <li>• Neighborhood analysis</li>
                <li>• Forecast data</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/market-reports">View Market Reports</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Investment Guide */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Investment Guide</CardTitle>
              <CardDescription>
                Real estate investment strategies for Las Vegas properties
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Rental property analysis</li>
                <li>• ROI calculations</li>
                <li>• Market timing</li>
                <li>• Tax benefits</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/strategies">View Investment Guide</Link>
              </Button>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
              <CardDescription>
                Common questions about Las Vegas real estate answered
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Buying process questions</li>
                <li>• Selling process questions</li>
                <li>• Market questions</li>
                <li>• Legal questions</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/faq">View FAQ</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Blog */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Real Estate Blog</CardTitle>
              <CardDescription>
                Latest insights, tips, and market updates from our experts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Market analysis</li>
                <li>• Neighborhood spotlights</li>
                <li>• Buying/selling tips</li>
                <li>• Local news</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/blog">View Blog</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

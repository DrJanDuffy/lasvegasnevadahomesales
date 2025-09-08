import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Market Trends | Market Analysis | Las Vegas Nevada Home Sales',
  description:
    'Stay informed with the latest Las Vegas real estate market trends, price analysis, and market forecasts. Expert insights for buyers and sellers.',
  keywords:
    'Las Vegas real estate market trends, market analysis, price trends, market forecast, Las Vegas Nevada Home Sales',
  alternates: {
    canonical: 'https://lasvegasnevadahomesales.com/market-reports',
  },
  openGraph: {
    title: 'Las Vegas Real Estate Market Trends | Market Analysis',
    description: 'Stay informed with the latest Las Vegas real estate market trends, price analysis, and market forecasts.',
    url: 'https://lasvegasnevadahomesales.com/market-reports',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-market-trends.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Real Estate Market Trends',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Real Estate Market Trends | Market Analysis',
    description: 'Stay informed with the latest Las Vegas real estate market trends, price analysis, and market forecasts.',
    images: ['https://lasvegasnevadahomesales.com/images/og-market-trends.jpg'],
  },
};

export default function MarketTrendsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Las Vegas Real Estate Market Trends
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Stay informed with the latest market analysis, price trends, and forecasts 
            for the Las Vegas real estate market.
          </p>
        </div>
      </section>

      {/* Market Analysis */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Price Trends */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Price Trends</CardTitle>
              <CardDescription>
                Current and historical price analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Median home prices</li>
                <li>• Price per square foot</li>
                <li>• Year-over-year changes</li>
                <li>• Neighborhood comparisons</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/market-reports">View Price Reports</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Market Forecast */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Market Forecast</CardTitle>
              <CardDescription>
                Future market predictions and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 6-month outlook</li>
                <li>• 12-month projections</li>
                <li>• Economic indicators</li>
                <li>• Investment opportunities</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/market-reports">View Forecasts</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Neighborhood Analysis */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Neighborhood Analysis</CardTitle>
              <CardDescription>
                Detailed analysis by area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Summerlin trends</li>
                <li>• Henderson market</li>
                <li>• Green Valley analysis</li>
                <li>• Downtown development</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods">Explore Neighborhoods</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Personalized Market Analysis
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our market experts can provide detailed analysis for your specific 
            property or investment goals in Las Vegas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              <Link href="/contact">Get Market Analysis</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link href="/home-valuation">Get Property Valuation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

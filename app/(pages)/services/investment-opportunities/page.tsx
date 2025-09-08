import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Investment Opportunities | Investment Properties | Las Vegas Nevada Home Sales',
  description:
    'Discover Las Vegas real estate investment opportunities. Expert guidance on rental properties, fix-and-flip investments, and commercial real estate in Las Vegas.',
  keywords:
    'Las Vegas real estate investment, investment properties Las Vegas, rental properties, fix and flip, commercial real estate, Las Vegas Nevada Home Sales',
  alternates: {
    canonical: 'https://lasvegasnevadahomesales.com/strategies',
  },
  openGraph: {
    title: 'Las Vegas Real Estate Investment Opportunities | Investment Properties',
    description: 'Discover Las Vegas real estate investment opportunities. Expert guidance on rental properties, fix-and-flip investments, and commercial real estate.',
    url: 'https://lasvegasnevadahomesales.com/strategies',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-investment-opportunities.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Real Estate Investment Opportunities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Real Estate Investment Opportunities | Investment Properties',
    description: 'Discover Las Vegas real estate investment opportunities. Expert guidance on rental properties, fix-and-flip investments, and commercial real estate.',
    images: ['https://lasvegasnevadahomesales.com/images/og-investment-opportunities.jpg'],
  },
};

export default function InvestmentOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Las Vegas Real Estate Investment Opportunities
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Discover profitable real estate investment opportunities in Las Vegas. 
            Expert guidance for rental properties, fix-and-flip, and commercial investments.
          </p>
        </div>
      </section>

      {/* Investment Types */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Rental Properties */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Rental Properties</CardTitle>
              <CardDescription>
                Long-term rental income opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Single-family rentals</li>
                <li>• Multi-family properties</li>
                <li>• Short-term vacation rentals</li>
                <li>• Student housing near UNLV</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/properties">View Rental Properties</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Fix & Flip */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Fix & Flip</CardTitle>
              <CardDescription>
                Renovation and resale opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Distressed properties</li>
                <li>• Foreclosure opportunities</li>
                <li>• Market analysis</li>
                <li>• Renovation guidance</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/properties">View Fix & Flip Properties</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Commercial Real Estate */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Commercial Real Estate</CardTitle>
              <CardDescription>
                Office, retail, and industrial investments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Office buildings</li>
                <li>• Retail spaces</li>
                <li>• Industrial properties</li>
                <li>• Mixed-use developments</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">Discuss Commercial Opportunities</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Real Estate Investment Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our investment specialists can help you identify the best opportunities 
            and develop a strategy that fits your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700">
              <Link href="/contact">Get Investment Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              <Link href="/market-reports">View Market Analysis</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

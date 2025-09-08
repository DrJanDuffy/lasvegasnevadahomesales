import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card';

export const metadata: Metadata = {
  title: 'Sports & Recreation Las Vegas Real Estate | Active Lifestyle | Las Vegas Nevada Home Sales',
  description:
    'Find homes near Las Vegas sports facilities, golf courses, and recreation areas. Perfect for active families and sports enthusiasts in Las Vegas.',
  keywords:
    'Las Vegas sports real estate, golf course homes, recreation areas, active lifestyle, Las Vegas Nevada Home Sales, sports facilities',
  alternates: {
    canonical: 'https://lasvegasnevadahomesales.com/neighborhoods',
  },
  openGraph: {
    title: 'Sports & Recreation Las Vegas Real Estate | Active Lifestyle',
    description: 'Find homes near Las Vegas sports facilities, golf courses, and recreation areas.',
    url: 'https://lasvegasnevadahomesales.com/neighborhoods',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-sports-recreation.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Sports & Recreation Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports & Recreation Las Vegas Real Estate | Active Lifestyle',
    description: 'Find homes near Las Vegas sports facilities, golf courses, and recreation areas.',
    images: ['https://lasvegasnevadahomesales.com/images/og-sports-recreation.jpg'],
  },
};

export default function SportsRecreationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sports & Recreation Las Vegas
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Find homes near world-class sports facilities, golf courses, and recreation areas in Las Vegas.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Golf Communities */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Golf Course Communities</CardTitle>
              <CardDescription>
                Luxury homes on premier golf courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• TPC Summerlin</li>
                <li>• Red Rock Country Club</li>
                <li>• Southern Highlands</li>
                <li>• Spanish Trail</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods/summerlin">Explore Golf Communities</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Sports Facilities */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Sports Facilities</CardTitle>
              <CardDescription>
                Professional and recreational sports venues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Allegiant Stadium</li>
                <li>• T-Mobile Arena</li>
                <li>• Las Vegas Ballpark</li>
                <li>• Community centers</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/properties">View Nearby Properties</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Outdoor Recreation */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Outdoor Recreation</CardTitle>
              <CardDescription>
                Natural areas and outdoor activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Red Rock Canyon</li>
                <li>• Lake Mead</li>
                <li>• Mount Charleston</li>
                <li>• Valley of Fire</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods">Explore Areas</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Active Lifestyle Home?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team specializes in helping active families and sports enthusiasts find the perfect 
            Las Vegas home near their favorite activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700">
              <Link href="/contact">Get Sports & Recreation Guide</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              <Link href="/properties">Search Properties</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

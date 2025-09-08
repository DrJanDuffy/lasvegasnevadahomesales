import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../../components/ui/card';

export const metadata: Metadata = {
  title: 'Las Vegas Neighborhood Insights | Complete Area Guide | Las Vegas Nevada Home Sales',
  description:
    'Comprehensive guide to Las Vegas neighborhoods including Summerlin, Henderson, Green Valley, Downtown, and more. Find the perfect area for your lifestyle and budget.',
  keywords:
    'Las Vegas neighborhoods, Summerlin, Henderson, Green Valley, Downtown Las Vegas, neighborhood guide, Las Vegas areas, Las Vegas Nevada Home Sales',
  alternates: {
    canonical: 'https://lasvegasnevadahomesales.com/neighborhoods',
  },
  openGraph: {
    title: 'Las Vegas Neighborhood Insights | Complete Area Guide',
    description: 'Comprehensive guide to Las Vegas neighborhoods including Summerlin, Henderson, Green Valley, Downtown, and more.',
    url: 'https://lasvegasnevadahomesales.com/neighborhoods',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-neighborhoods.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Neighborhoods Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Neighborhood Insights | Complete Area Guide',
    description: 'Comprehensive guide to Las Vegas neighborhoods including Summerlin, Henderson, Green Valley, Downtown, and more.',
    images: ['https://lasvegasnevadahomesales.com/images/og-neighborhoods.jpg'],
  },
};

export default function LasVegasNeighborhoodInsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Las Vegas Neighborhood Insights
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Discover the perfect Las Vegas neighborhood for your lifestyle, budget, and preferences.
          </p>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Summerlin */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Summerlin</CardTitle>
              <CardDescription>
                Master-planned community with luxury homes and amenities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Luxury homes $600K-$2M+</li>
                <li>• Golf courses & parks</li>
                <li>• Top-rated schools</li>
                <li>• Shopping & dining</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods/summerlin">Explore Summerlin</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Henderson */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Henderson</CardTitle>
              <CardDescription>
                Family-friendly city with excellent schools and parks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Family homes $400K-$800K</li>
                <li>• Excellent schools</li>
                <li>• Parks & recreation</li>
                <li>• Growing job market</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods/henderson">Explore Henderson</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Green Valley */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Green Valley</CardTitle>
              <CardDescription>
                Affordable homes with great community amenities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Affordable homes $300K-$600K</li>
                <li>• Great amenities</li>
                <li>• Convenient location</li>
                <li>• Growing community</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods/green-valley">Explore Green Valley</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Downtown */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Downtown Las Vegas</CardTitle>
              <CardDescription>
                Urban living with entertainment and cultural attractions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Urban condos & lofts</li>
                <li>• Entertainment district</li>
                <li>• Cultural attractions</li>
                <li>• Nightlife & dining</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods/downtown">Explore Downtown</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Centennial Hills */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Centennial Hills</CardTitle>
              <CardDescription>
                New master-planned community with modern homes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• New construction $400K-$700K</li>
                <li>• Modern amenities</li>
                <li>• Family-friendly</li>
                <li>• Red Rock access</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods/centennial-hills">Explore Centennial Hills</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Spring Valley */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Spring Valley</CardTitle>
              <CardDescription>
                Central location with diverse housing options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Central location $350K-$650K</li>
                <li>• Diverse housing</li>
                <li>• Easy commuting</li>
                <li>• Established area</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods/spring-valley">Explore Spring Valley</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right Neighborhood?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our expert team can help you find the perfect Las Vegas neighborhood based on your 
            lifestyle, budget, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#0A2540] text-white hover:bg-[#3A8DDE]">
              <Link href="/contact">Get Neighborhood Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white">
              <Link href="/properties">Search All Properties</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

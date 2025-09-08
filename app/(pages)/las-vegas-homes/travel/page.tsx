import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card';

export const metadata: Metadata = {
  title: 'Las Vegas Travel & Relocation Guide | Moving to Las Vegas | Las Vegas Nevada Home Sales',
  description:
    'Complete guide to moving to Las Vegas. Learn about neighborhoods, schools, entertainment, and lifestyle when relocating to Las Vegas, Nevada.',
  keywords:
    'Las Vegas travel, moving to Las Vegas, Las Vegas relocation, Las Vegas lifestyle, Las Vegas Nevada Home Sales',
  alternates: {
    canonical: 'https://lasvegasnevadahomesales.com/neighborhoods',
  },
  openGraph: {
    title: 'Las Vegas Travel & Relocation Guide | Moving to Las Vegas',
    description: 'Complete guide to moving to Las Vegas. Learn about neighborhoods, schools, entertainment, and lifestyle.',
    url: 'https://lasvegasnevadahomesales.com/neighborhoods',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-travel-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Travel & Relocation Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Travel & Relocation Guide | Moving to Las Vegas',
    description: 'Complete guide to moving to Las Vegas. Learn about neighborhoods, schools, entertainment, and lifestyle.',
    images: ['https://lasvegasnevadahomesales.com/images/og-travel-guide.jpg'],
  },
};

export default function TravelGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Las Vegas Travel & Relocation Guide
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Everything you need to know about moving to and living in Las Vegas, Nevada.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Getting Started */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Getting Started</CardTitle>
              <CardDescription>
                Essential information for newcomers to Las Vegas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Cost of living comparison</li>
                <li>• Climate and weather</li>
                <li>• Transportation options</li>
                <li>• Healthcare facilities</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods">Explore Neighborhoods</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Entertainment & Lifestyle */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Entertainment & Lifestyle</CardTitle>
              <CardDescription>
                World-class entertainment and recreational activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Shows and concerts</li>
                <li>• Restaurants and dining</li>
                <li>• Outdoor recreation</li>
                <li>• Shopping destinations</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods/downtown">Explore Downtown</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Schools & Education */}
          <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Schools & Education</CardTitle>
              <CardDescription>
                Educational opportunities for families
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Public school districts</li>
                <li>• Private schools</li>
                <li>• Higher education</li>
                <li>• Specialized programs</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/neighborhoods/henderson">Explore Henderson</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make Las Vegas Your Home?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our expert team can help you find the perfect Las Vegas neighborhood 
            and home that fits your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
              <Link href="/contact">Get Relocation Assistance</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              <Link href="/properties">Search Homes</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

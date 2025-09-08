import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { MarketDataWidget } from '../../components/MarketData/MarketDataWidget';
import { OptimizedImage } from '../../components/OptimizedImage/OptimizedImage';
import { RealScoutOfficeListings } from '../../components/RealScout/RealScoutOfficeListings';
import { RealScoutYourListings } from '../../components/RealScout/RealScoutYourListings';
import { AdvancedSEOMonitor } from '../../components/SEO/AdvancedSEOMonitor';
import { FAQSchema, homePageFAQs } from '../../components/SEO/FAQSchema';
import { buyHomeHowTo, HowToSchema } from '../../components/SEO/HowToSchema';
import { LocalBusinessSchema } from '../../components/SEO/LocalBusinessSchema';
import {
  companyAggregateRating,
  companyReviews,
  ReviewSchema,
} from '../../components/SEO/ReviewSchema';
import { SEOHead } from '../../components/SEO/SEOHead';
import { LatestBlogPosts } from '../../components/Blog/LatestBlogPosts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Market | Homes for Sale in Las Vegas, NV',
  description:
    'Discover the latest Las Vegas real estate market trends, homes for sale, and expert insights. Find your dream home in Las Vegas, Henderson, Summerlin, and surrounding areas.',
  keywords:
    'Las Vegas real estate, homes for sale Las Vegas, Las Vegas housing market, Las Vegas properties, Las Vegas homes',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    url: 'https://lasvegasnevadahomesales.com/',
    title: 'Las Vegas Real Estate Market | Expert Insights & Homes for Sale',
    description:
      'Your trusted source for Las Vegas real estate. Expert market analysis, neighborhood guides, and the latest homes for sale in Las Vegas, NV.',
    images: [
      {
        width: 1200,
        height: 630,
        url: '/images/las-vegas-real-estate-market.jpg',
        alt: 'Las Vegas Real Estate Market Overview',
      },
    ],
  },
};

export default function LasVegasMarketOverview() {
  return (
    <>
      <SEOHead
        title="Las Vegas Nevada Home Sales – Your Trusted Real Estate Experts"
        description="Las Vegas Nevada Home Sales offers expert real estate services in Las Vegas, Summerlin, Henderson, and all of Nevada. Find your dream home or sell your property with confidence."
        keywords="Las Vegas Nevada Home Sales, Las Vegas real estate, Nevada homes for sale, Summerlin homes, Henderson real estate, Las Vegas realtor"
        canonical="/"
        ogImage="/images/og-home.jpg"
      />
      <FAQSchema faqs={homePageFAQs} />
      <ReviewSchema
        reviews={companyReviews}
        aggregateRating={companyAggregateRating}
        itemType="Organization"
      />
      <HowToSchema {...buyHomeHowTo} />
      <LocalBusinessSchema />
      <AdvancedSEOMonitor
        pageUrl="/"
        pageTitle="Las Vegas Nevada Home Sales – Your Trusted Real Estate Experts"
        debug={process.env.NODE_ENV === 'development'}
        trackUserBehavior={true}
        trackConversions={true}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Las Vegas Nevada Home Sales – Your Trusted Real Estate Experts
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Welcome to Las Vegas Nevada Home Sales, your premier source for luxury homes, family
              residences, and investment properties in the heart of Nevada. Start your journey to
              homeownership in Summerlin, Henderson, and all of Las Vegas.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3">
                <Link href="/properties">Search Homes</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3"
              >
                <Link href="/home-valuation">Get Home Value</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3"
              >
                <Link href="/strategies">Real Estate Strategies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Las Vegas Market Overview
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">$425K</div>
              <div className="text-sm text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">+5.2%</div>
              <div className="text-sm text-gray-600">Year-over-Year Growth</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">28</div>
              <div className="text-sm text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">2,847</div>
              <div className="text-sm text-gray-600">Active Listings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Intelligence Widget */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <MarketDataWidget />
        </div>
      </section>

      {/* Featured Neighborhoods */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Popular Las Vegas Neighborhoods
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Summerlin luxury homes and golf course"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Summerlin</CardTitle>
                <CardDescription>
                  Master-planned community with luxury homes and amenities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  href="/neighborhoods/summerlin"
                  variant="default"
                  size="sm"
                  aria-label="See all Summerlin homes for sale with Las Vegas Nevada Home Sales"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Henderson family-friendly neighborhood"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Henderson</CardTitle>
                <CardDescription>
                  Family-friendly city with excellent schools and parks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button href="/neighborhoods/henderson" variant="default" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Green Valley affordable homes"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Green Valley</CardTitle>
                <CardDescription>
                  Affordable homes with great community amenities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button href="/neighborhoods/green-valley" variant="default" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Downtown Las Vegas urban living"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Downtown</CardTitle>
                <CardDescription>
                  Urban living with entertainment and cultural attractions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button href="/neighborhoods/downtown" variant="default" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Luxury Properties
          </h2>
          <div className="flex justify-center">
            <RealScoutOfficeListings
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
              listingStatus="For Sale"
              propertyTypes="SFR,MF,TC"
              priceMin="600000"
              priceMax="1200000"
            />
          </div>
        </div>
      </section>

      {/* Your Listings */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Our Latest Listings
          </h2>
          <div className="flex justify-center">
            <RealScoutYourListings
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
              listingStatus="For Sale,Sold"
              propertyTypes=""
              priceMin="500000"
            />
          </div>
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Don't See What You're Looking For?
              </h3>
              <p className="mb-6 text-gray-600">
                Our team has access to thousands of Las Vegas properties. Let us help you find 
                the perfect home that meets your specific criteria and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#0A2540] text-white hover:bg-[#3A8DDE]">
                  <Link href="/properties">Search All Properties</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white">
                  <Link href="/contact">Get Custom Search</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Why Choose Las Vegas for Your Next Home?
            </h2>
            <p className="text-lg text-gray-600">
              Discover what makes Las Vegas one of the most attractive real estate markets in the country
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 text-4xl">🏔️</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Red Rock Canyon</h3>
              <p className="text-gray-600">World-class outdoor recreation and stunning natural beauty</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🎭</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Entertainment Capital</h3>
              <p className="text-gray-600">World-class shows, dining, and entertainment options</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">💰</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">No State Income Tax</h3>
              <p className="text-gray-600">Keep more of your money with Nevada's tax-friendly policies</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">✈️</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Easy Access</h3>
              <p className="text-gray-600">Major airport hub with direct flights to anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Latest Real Estate Insights
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with the latest market trends, buying tips, and real estate news
            </p>
          </div>
          <LatestBlogPosts limit={3} showFeatured={true} />
          <div className="text-center mt-8">
            <Button asChild className="bg-[#0A2540] text-white hover:bg-[#3A8DDE]">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Home Value Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
                Get Your Home's Market Value
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Discover what your Las Vegas home is worth in today's market. Our advanced valuation 
                tool provides instant, accurate estimates based on recent sales data and market trends.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <span className="text-green-600">✓</span>
                  </div>
                  <span className="text-gray-700">Instant property valuation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <span className="text-green-600">✓</span>
                  </div>
                  <span className="text-gray-700">Market analysis & trends</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <span className="text-green-600">✓</span>
                  </div>
                  <span className="text-gray-700">No obligation consultation</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">What's my home worth?</h3>
              <p className="mb-6 text-gray-600">
                Get your free, instant home valuation in seconds
              </p>
              <div className="w-full">
                <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Find Your Dream Home?</h2>
          <p className="mb-8 text-xl text-blue-100">
            Get expert guidance and access to the latest Las Vegas real estate listings
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3"
            >
              <Link href="/market-reports">View Market Reports</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

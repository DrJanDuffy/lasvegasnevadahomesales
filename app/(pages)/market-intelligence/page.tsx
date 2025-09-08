import type { Metadata } from 'next';
import { OptimizedImage } from '../../../components/OptimizedImage/OptimizedImage';
import { SEOHead } from '../../../components/SEO/SEOHead';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Market Intelligence | Current Trends & Forecasts',
  description:
    'Stay informed with the latest Las Vegas real estate market trends, home price forecasts, mortgage rate projections, and expert insights for 2025.',
  keywords:
    'Las Vegas real estate market, home price forecasts, mortgage rates, market trends, housing market 2025, Las Vegas property values',
};

export default function MarketIntelligencePage() {
  return (
    <>
      <SEOHead
        title="Las Vegas Real Estate Market Intelligence | Current Trends & Forecasts"
        description="Stay informed with the latest Las Vegas real estate market trends, home price forecasts, mortgage rate projections, and expert insights for 2025."
        keywords="Las Vegas real estate market, home price forecasts, mortgage rates, market trends, housing market 2025, Las Vegas property values"
        canonical="/market-intelligence"
        ogImage="/images/market-reports/market-intelligence-hero.jpg"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Las Vegas Market Intelligence
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Expert insights, real-time data, and market forecasts to guide your real estate
              decisions in Las Vegas
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href="#market-overview"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Market Overview
              </a>
              <a
                href="#forecasts"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                See Forecasts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview Section */}
      <section id="market-overview" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Current Market Overview
          </h2>

          {/* Market Stats Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1.5-2%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Price Growth</h3>
              <p className="text-sm text-gray-600">Expected national growth in 2025</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6.5%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mortgage Rates</h3>
              <p className="text-sm text-gray-600">Projected average by year-end</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">0.13%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Foreclosure Rate</h3>
              <p className="text-sm text-gray-600">Only 1 in 758 homes affected</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">55%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Price Increase</h3>
              <p className="text-sm text-gray-600">Nationally over past 5 years</p>
            </div>
          </div>

          {/* Market Image Gallery */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Las Vegas luxury homes and market growth"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Market Stability</h3>
                <p className="text-gray-600">
                  Strong fundamentals support continued growth in Las Vegas real estate market
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Las Vegas housing inventory and demand"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Inventory Trends</h3>
                <p className="text-gray-600">
                  Balanced supply and demand creating healthy market conditions
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Las Vegas real estate investment opportunities"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Investment Outlook</h3>
                <p className="text-gray-600">
                  Favorable conditions for both buyers and sellers in Las Vegas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forecasts Section */}
      <section id="forecasts" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            2025 Market Forecasts
          </h2>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Home Price Forecasts */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Home Price Forecasts</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">National Growth</h4>
                    <p className="text-sm text-gray-600">Average of 8 leading forecasters</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">1.5-2%</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">5-Year Projection</h4>
                    <p className="text-sm text-gray-600">Annual growth through 2029</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">3.3%</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Optimistic Outlook</h4>
                    <p className="text-sm text-gray-600">Best-case scenario</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">5.0%</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Key Insight:</strong> No major national decline or crash predicted.
                  Experts expect steady, sustainable growth.
                </p>
              </div>
            </div>

            {/* Mortgage Rate Forecasts */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Mortgage Rate Projections</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Current Range</h4>
                    <p className="text-sm text-gray-600">Where rates are today</p>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">6-7%</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Year-End 2025</h4>
                    <p className="text-sm text-gray-600">Projected average</p>
                  </div>
                  <div className="text-2xl font-bold text-red-600">Mid-6%</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Long-term Trend</h4>
                    <p className="text-sm text-gray-600">Next 12 months</p>
                  </div>
                  <div className="text-2xl font-bold text-gray-600">Stable</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Expert Advice:</strong> Don't wait for rates to drop significantly. Focus
                  on your personal situation and market timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Myths vs Reality */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Market Myths vs Reality
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="mb-4 text-xl font-bold text-red-800">❌ Common Myths</h3>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Home prices will crash in 2025</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mortgage rates will drop significantly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Foreclosures are at crisis levels</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>It's better to wait before buying</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="mb-4 text-xl font-bold text-green-800">✅ Market Reality</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prices expected to rise 1.5-2% nationally</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Rates staying in 6s, no major drops expected</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Only 0.13% of homes in foreclosure (1 in 758)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Focus on personal situation, not market timing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Specific Insights */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Las Vegas Market Insights
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl">🏠</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Strong Fundamentals</h3>
              <p className="text-sm text-gray-600">
                Las Vegas continues to attract buyers with its lifestyle, affordability, and growth
                potential
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-4xl">📈</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Growth Potential</h3>
              <p className="text-sm text-gray-600">
                Market positioned for steady appreciation with strong economic drivers
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Investment Opportunity</h3>
              <p className="text-sm text-gray-600">
                Favorable conditions for both primary residence and investment properties
              </p>
            </div>
          </div>

          {/* Las Vegas Market Image */}
          <div className="mt-12">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Las Vegas real estate market overview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Las Vegas Real Estate Market</h3>
                <p className="text-lg">Your trusted source for market intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Navigate the Market?</h2>
          <p className="mb-8 text-xl text-blue-100">
            Get personalized market insights and expert guidance for your Las Vegas real estate
            journey.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              href="/contact"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Market Analysis
            </a>
            <a
              href="/home-valuation"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Home Value Check
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

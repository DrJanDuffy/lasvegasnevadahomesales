'use client';

import { ConversionTracker } from '../../../components/Analytics/ConversionTracker';
import { Button } from '../../../components/Button/Button';
import { GMBReviews } from '../../../components/Google/GMBReviews';
import { GoogleMaps } from '../../../components/Google/GoogleMaps';
import { HomebotValuation } from '../../../components/Homebot/HomebotValuation';
import { RealScoutHomeValue } from '../../../components/RealScout/RealScoutHomeValue';
import { RealScoutOfficeListings } from '../../../components/RealScout/RealScoutOfficeListings';
import { RealScoutYourListings } from '../../../components/RealScout/RealScoutYourListings';
import { googleConfig } from '../../../config/google-config';

// Declare gtag for TypeScript
declare global {
  function gtag(...args: unknown[]): void;
}

export default function HomeValuationPage() {
  return (
    <>
      <ConversionTracker pageType="home-valuation" />
      {/* Hero Section with Urgency */}
      <section className="bg-gradient-to-br from-[#0A2540] via-[#3A8DDE] to-[#16B286] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            {/* Urgency Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white animate-pulse">
              ⏰ Limited Evaluation Slots Available This Week
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Expert Las Vegas Home Evaluation
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Get Your Property's True Market Value in Today's Vegas Market
            </p>

            {/* Trust Indicators */}
            <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>15+ Years Local Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>2,500+ Successful Evaluations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Free & No Obligation</span>
              </div>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                href="#homebot-valuation-container"
                className="bg-[#FF6B35] text-white hover:bg-[#E55A2B] px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Schedule Free Evaluation
              </Button>
              <a
                href="tel:+17025001981"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#0A2540] transition-all duration-200"
                onClick={() => {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'phone_click', {
                      event_category: 'contact',
                      event_label: 'las_vegas_evaluation',
                    });
                  }
                }}
              >
                📞 Call (702) 500-1981
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Evaluation CTA Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
                Why Las Vegas Homeowners Choose Our Evaluation
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                In today's dynamic Vegas market, knowing your home's true value is crucial. Our
                expert evaluation combines local market knowledge with advanced analytics to give
                you the most accurate assessment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">Market Timing Analysis</h4>
                    <p className="text-gray-600 text-sm">
                      Understand the optimal time to sell in your neighborhood
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">Competitive Pricing Strategy</h4>
                    <p className="text-gray-600 text-sm">
                      Price your home to sell quickly and maximize profit
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">Local Market Insights</h4>
                    <p className="text-gray-600 text-sm">
                      Expert knowledge of Vegas neighborhoods and trends
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F9FC] p-6 rounded-lg border-l-4 border-[#3A8DDE]">
                <p className="text-[#0A2540] font-semibold mb-2">Current Vegas Market Alert:</p>
                <p className="text-gray-600 text-sm">
                  Homes in Summerlin, Henderson, and Green Valley are selling 15% faster than last
                  year. Don't miss your window of opportunity!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F7F9FC] to-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-6">
                Get Your Free Evaluation Today
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#16B286] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">Enter Your Address</h4>
                    <p className="text-gray-600 text-sm">
                      Start with our instant online valuation tool
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#3A8DDE] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">Expert Review</h4>
                    <p className="text-gray-600 text-sm">Our team analyzes your property details</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">Get Your Report</h4>
                    <p className="text-gray-600 text-sm">
                      Receive detailed valuation and market insights
                    </p>
                  </div>
                </div>
              </div>

              <Button
                href="#homebot-valuation-container"
                className="w-full mt-6 bg-[#FF6B35] text-white hover:bg-[#E55A2B] py-3 text-lg font-semibold"
                onClick={() => {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'cta_click', {
                      event_category: 'conversion',
                      event_label: 'pre_evaluation_cta',
                      value: 1,
                    });
                  }
                }}
              >
                Start Your Free Evaluation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Homebot Widget Section */}
      <section id="valuation-widget" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Get Your Home's Market Value
            </h2>
            <p className="text-lg text-gray-600">
              Enter your address below to receive an instant property valuation and market analysis
            </p>
          </div>

          {/* RealScout Home Value Widget */}
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold text-[#0A2540] text-center">
              Get Your Instant Home Value Estimate
            </h3>
            <p className="mb-8 text-center text-gray-600 max-w-2xl mx-auto">
              Get a quick estimate of your home's value with our advanced RealScout valuation tool.
              This instant estimate is based on current market data and recent sales in your area.
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>
          </div>

          {/* Homebot Valuation Widget Container */}
          <div id="homebot-valuation-container" className="relative mx-auto max-w-2xl">
            <h3 className="mb-6 text-2xl font-bold text-[#0A2540] text-center">
              Schedule Your Comprehensive Home Evaluation
            </h3>
            <p className="mb-8 text-center text-gray-600 max-w-2xl mx-auto">
              For a detailed, personalized evaluation with market analysis and strategic
              recommendations, schedule your free consultation with our expert team.
            </p>
            <HomebotValuation className="rounded-lg border border-gray-200 bg-white shadow-lg" />
          </div>
        </div>
      </section>

      {/* Post-Evaluation CTA Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Ready to Discover Your Home's Potential?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't leave money on the table. Our comprehensive evaluation includes market analysis,
              competitive insights, and personalized recommendations to maximize your home's value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#F7F9FC] p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#16B286] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Maximize Your Profit</h3>
              <p className="text-gray-600">
                Price your home competitively to sell faster and for more money
              </p>
            </div>
            <div className="bg-[#F7F9FC] p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#3A8DDE] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Market Intelligence</h3>
              <p className="text-gray-600">
                Understand current market trends and buyer preferences
              </p>
            </div>
            <div className="bg-[#F7F9FC] p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Strategic Timing</h3>
              <p className="text-gray-600">
                Know the best time to list your property for maximum exposure
              </p>
            </div>
          </div>

          {/* Google My Business Reviews */}
          <div className="mb-12">
            <GMBReviews
              appId={googleConfig.gmb.appId}
              title="What Our Clients Say"
              showTitle={true}
            />
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
              Don't Wait - Limited Evaluation Slots Available
            </h3>
            <p className="text-gray-600 mb-8">
              Join hundreds of satisfied Las Vegas homeowners who've maximized their property value
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#homebot-valuation-container"
                className="bg-[#FF6B35] text-white hover:bg-[#E55A2B] px-8 py-4 text-lg font-semibold shadow-lg"
                onClick={() => {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'cta_click', {
                      event_category: 'conversion',
                      event_label: 'final_evaluation_cta',
                      value: 1,
                    });
                  }
                }}
              >
                Get Started Today
              </Button>
              <a
                href="tel:+17025001981"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#0A2540] px-8 py-4 text-lg font-semibold text-[#0A2540] hover:bg-[#0A2540] hover:text-white transition-all duration-200"
                onClick={() => {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'phone_click', {
                      event_category: 'contact',
                      event_label: 'las_vegas_evaluation',
                    });
                  }
                }}
              >
                📞 Call Now (702) 500-1981
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0A2540] md:text-4xl">
            Why Get a Home Valuation?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-blue-600">💰</div>
              <h3 className="mb-3 text-xl font-bold text-[#0A2540]">Accurate Market Value</h3>
              <p className="text-gray-600">
                Get a precise estimate of your home's current market value based on recent sales and
                market trends in your neighborhood.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-green-600">📊</div>
              <h3 className="mb-3 text-xl font-bold text-[#0A2540]">Market Analysis</h3>
              <p className="text-gray-600">
                Understand your local market conditions, including price trends, inventory levels,
                and days on market.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-purple-600">🎯</div>
              <h3 className="mb-3 text-xl font-bold text-[#0A2540]">Selling Strategy</h3>
              <p className="text-gray-600">
                Receive recommendations on pricing strategy and timing to maximize your home's
                value.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-orange-600">📈</div>
              <h3 className="mb-3 text-xl font-bold text-[#0A2540]">Equity Tracking</h3>
              <p className="text-gray-600">
                Monitor your home's appreciation over time and track your equity growth.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-red-600">🏦</div>
              <h3 className="mb-3 text-xl font-bold text-[#0A2540]">Refinancing Insights</h3>
              <p className="text-gray-600">
                Determine if refinancing makes sense based on your current equity and market
                conditions.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-indigo-600">📋</div>
              <h3 className="mb-3 text-xl font-bold text-[#0A2540]">Detailed Report</h3>
              <p className="text-gray-600">
                Receive a comprehensive report with comparable sales, market trends, and expert
                insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Las Vegas Map */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0A2540] md:text-4xl">
            Las Vegas Neighborhoods
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our service areas and discover the perfect neighborhood for your next home
          </p>
          <GoogleMaps
            apiKey={googleConfig.maps.apiKey}
            height="500px"
            showNeighborhoods={true}
            showListings={true}
            center={googleConfig.maps.center}
            zoom={googleConfig.maps.zoom}
          />
        </div>
      </section>

      {/* Market Data */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0A2540] md:text-4xl">
            Las Vegas Market Overview
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-lg border border-gray-200">
              <div className="mb-2 text-3xl font-bold text-[#16B286]">$425K</div>
              <div className="text-sm text-gray-600">Median Home Value</div>
              <div className="mt-2 text-xs text-green-600">+5.2% vs last year</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-lg border border-gray-200">
              <div className="mb-2 text-3xl font-bold text-[#3A8DDE]">28</div>
              <div className="text-sm text-gray-600">Avg Days on Market</div>
              <div className="mt-2 text-xs text-green-600">-12% vs last year</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-lg border border-gray-200">
              <div className="mb-2 text-3xl font-bold text-[#FF6B35]">98.2%</div>
              <div className="text-sm text-gray-600">List to Sale Ratio</div>
              <div className="mt-2 text-xs text-green-600">+2.1% vs last year</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-lg border border-gray-200">
              <div className="mb-2 text-3xl font-bold text-[#0A2540]">3.2</div>
              <div className="text-sm text-gray-600">Months of Inventory</div>
              <div className="mt-2 text-xs text-red-600">+0.3 vs last year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0A2540] md:text-4xl">
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
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0A2540] md:text-4xl">
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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Know Your Home's True Value?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Get an instant valuation and connect with a local real estate expert
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              href="#homebot-valuation-container"
              className="bg-[#FF6B35] text-white hover:bg-[#E55A2B] px-8 py-4 text-lg font-semibold shadow-lg"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'cta_click', {
                    event_category: 'conversion',
                    event_label: 'final_bottom_cta',
                    value: 1,
                  });
                }
              }}
            >
              Get Free Valuation
            </Button>
            <a
              href="tel:+17025001981"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#0A2540] transition-all duration-200"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'phone_click', {
                    event_category: 'contact',
                    event_label: 'las_vegas_evaluation',
                  });
                }
              }}
            >
              📞 Call (702) 500-1981
            </a>
          </div>
        </div>
      </section>

      {/* Analytics Tracking Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Analytics event tracking
            function trackCTAClick(ctaType, location) {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                  'event_category': 'conversion',
                  'event_label': \`\${ctaType}_\${location}\`,
                  'value': 1
                });
              }
            }

            // Phone number click tracking
            function trackPhoneClick() {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_click', {
                  'event_category': 'contact',
                  'event_label': 'las_vegas_evaluation'
                });
              }
            }
          `,
        }}
      />
    </>
  );
}

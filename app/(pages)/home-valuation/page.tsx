import { Metadata } from "next"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "Las Vegas Home Valuation | Get Your Home's Market Value",
  description: "Get an accurate home valuation for your Las Vegas property. Professional market analysis and instant property value estimates from local real estate experts.",
  keywords: "Las Vegas home valuation, property value, home appraisal, Las Vegas real estate value, home worth",
}

export default function HomeValuationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Home Valuation
            </h1>
            <p className="mb-8 text-xl font-light text-teal-100 md:text-2xl">
              Get an accurate market value for your Las Vegas property
            </p>
            <Button href="#valuation-widget" className="bg-white text-teal-800 hover:bg-teal-50">
              Start Valuation
            </Button>
          </div>
        </div>
      </section>

      {/* Valuation Widget Section */}
      <section id="valuation-widget" className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Get Your Home's Market Value
            </h2>
            <p className="text-lg text-gray-600">
              Enter your address below to receive an instant property valuation and market analysis
            </p>
          </div>
          
          {/* Homebot Valuation Widget Container */}
          <div 
            className="relative mx-auto max-w-2xl min-h-[480px] z-[1000]"
          >
            {/* Shadow DOM Container for Homebot Widget */}
            <div 
              id="homebot-valuation-container"
              className="rounded-lg border border-gray-200 bg-white shadow-lg min-h-[480px] relative z-[1000]"
            >
              {/* Placeholder for Homebot Widget */}
              <div className="flex h-96 items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-4xl">🏠</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Home Valuation Widget</h3>
                  <p className="text-gray-600">
                    Enter your address to get an instant property valuation
                  </p>
                  <div className="mt-6">
                    <input
                      type="text"
                      placeholder="Enter your address..."
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      aria-label="Property address for valuation"
                    />
                    <button type="button" className="mt-4 w-full rounded-xl bg-teal-600 px-6 py-2.5 text-lg text-white transition-colors delay-50 hover:bg-teal-700">
                      Get Valuation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Why Get a Home Valuation?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-blue-600">💰</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Accurate Market Value</h3>
              <p className="text-gray-600">
                Get a precise estimate of your home's current market value based on recent sales 
                and market trends in your neighborhood.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-green-600">📊</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Market Analysis</h3>
              <p className="text-gray-600">
                Understand your local market conditions, including price trends, inventory levels, 
                and days on market.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-purple-600">🎯</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Selling Strategy</h3>
              <p className="text-gray-600">
                Receive recommendations on pricing strategy and timing to maximize your home's value.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-orange-600">📈</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Equity Tracking</h3>
              <p className="text-gray-600">
                Monitor your home's appreciation over time and track your equity growth.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-red-600">🏦</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Refinancing Insights</h3>
              <p className="text-gray-600">
                Determine if refinancing makes sense based on your current equity and market conditions.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-indigo-600">📋</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Detailed Report</h3>
              <p className="text-gray-600">
                Receive a comprehensive report with comparable sales, market trends, and expert insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            How Our Valuation Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-2xl font-bold text-teal-600">
                1
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Enter Your Address</h3>
              <p className="text-gray-600">
                Simply input your property address to begin the valuation process
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-2xl font-bold text-teal-600">
                2
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Instant Analysis</h3>
              <p className="text-gray-600">
                Our advanced algorithm analyzes recent sales, market trends, and property characteristics
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-2xl font-bold text-teal-600">
                3
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Get Your Report</h3>
              <p className="text-gray-600">
                Receive a detailed valuation report with market insights and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Las Vegas Market Overview
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <div className="mb-2 text-3xl font-bold text-teal-600">$425K</div>
              <div className="text-sm text-gray-600">Median Home Value</div>
              <div className="mt-2 text-xs text-green-600">+5.2% vs last year</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <div className="mb-2 text-3xl font-bold text-blue-600">28</div>
              <div className="text-sm text-gray-600">Avg Days on Market</div>
              <div className="mt-2 text-xs text-green-600">-12% vs last year</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <div className="mb-2 text-3xl font-bold text-purple-600">98.2%</div>
              <div className="text-sm text-gray-600">List to Sale Ratio</div>
              <div className="mt-2 text-xs text-green-600">+2.1% vs last year</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <div className="mb-2 text-3xl font-bold text-orange-600">3.2</div>
              <div className="text-sm text-gray-600">Months of Inventory</div>
              <div className="mt-2 text-xs text-red-600">+0.3 vs last year</div>
            </div>
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
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
              listing-status="For Sale" 
              property-types="SFR,MF,TC" 
              price-min="600000" 
              price-max="1200000">
            </realscout-office-listings>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Know Your Home's Value?
          </h2>
          <p className="mb-8 text-xl text-teal-100">
            Get an instant valuation and connect with a local real estate expert
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="#valuation-widget" className="bg-white text-teal-800 hover:bg-teal-50">
              Get Free Valuation
            </Button>
            <Button href="/contact" intent="secondary" className="border-white text-white hover:bg-white hover:text-teal-800">
              Speak with Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Homebot Integration Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Homebot Widget Integration
            document.addEventListener('DOMContentLoaded', function() {
              // Initialize Homebot valuation widget
              const container = document.getElementById('homebot-valuation-container');
              
              // Create shadow DOM for widget isolation
              const shadow = container.attachShadow({ mode: 'open' });
              
              // Add Homebot widget styles and content
              shadow.innerHTML = \`
                <style>
                  .homebot-widget {
                    min-height: 480px;
                    padding: 2rem;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  }
                  .widget-header {
                    text-align: center;
                    margin-bottom: 2rem;
                  }
                  .widget-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 0.5rem;
                  }
                  .widget-subtitle {
                    color: #6b7280;
                    font-size: 1rem;
                  }
                  .address-input {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    margin-bottom: 1rem;
                  }
                  .address-input:focus {
                    outline: none;
                    border-color: #0d9488;
                    box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
                  }
                  .valuation-btn {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    background-color: #0d9488;
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background-color 0.2s;
                  }
                  .valuation-btn:hover {
                    background-color: #0f766e;
                  }
                </style>
                <div class="homebot-widget">
                  <div class="widget-header">
                    <div class="widget-title">Home Valuation Tool</div>
                    <div class="widget-subtitle">Get your home's market value instantly</div>
                  </div>
                  <input type="text" class="address-input" placeholder="Enter your property address..." />
                  <button class="valuation-btn">Get Instant Valuation</button>
                </div>
              \`;
            });
          `
        }}
      />
    </>
  )
} 
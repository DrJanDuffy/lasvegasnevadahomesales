import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { RealScoutOfficeListings } from "components/RealScout/RealScoutOfficeListings"

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Market Reports | Market Trends & Analysis",
  description: "Get the latest Las Vegas real estate market reports, trends, and analysis. Expert insights on home prices, inventory, and market conditions in Las Vegas, NV.",
  keywords: "Las Vegas market reports, Las Vegas real estate trends, Las Vegas housing market, Las Vegas market analysis",
}

export default function MarketReportsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Las Vegas Market Reports
            </h1>
            <p className="mb-8 text-xl font-light text-purple-100 md:text-2xl">
              Expert analysis and insights on the Las Vegas real estate market
            </p>
            <Button href="/contact" className="bg-white text-purple-800 hover:bg-purple-50">
              Get Custom Report
            </Button>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Las Vegas Market Overview
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">$425K</div>
              <div className="text-sm text-gray-600">Median Home Price</div>
              <div className="mt-2 text-xs text-green-600">+5.2% vs last year</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">28</div>
              <div className="text-sm text-gray-600">Days on Market</div>
              <div className="mt-2 text-xs text-green-600">-12% vs last year</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">2,847</div>
              <div className="text-sm text-gray-600">Active Listings</div>
              <div className="mt-2 text-xs text-red-600">+8% vs last year</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">4.2%</div>
              <div className="text-sm text-gray-600">Interest Rate</div>
              <div className="mt-2 text-xs text-gray-600">30-year fixed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Market Trends & Analysis
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Price Trends</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Current Median Price</span>
                  <span className="font-semibold text-gray-900">$425,000</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">1 Year Change</span>
                  <span className="font-semibold text-green-600">+5.2%</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">3 Year Change</span>
                  <span className="font-semibold text-green-600">+18.7%</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">5 Year Change</span>
                  <span className="font-semibold text-green-600">+32.4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Price per Sq Ft</span>
                  <span className="font-semibold text-gray-900">$245</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Inventory & Demand</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Active Listings</span>
                  <span className="font-semibold text-gray-900">2,847</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">New Listings (30 days)</span>
                  <span className="font-semibold text-gray-900">1,234</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Pending Sales</span>
                  <span className="font-semibold text-gray-900">892</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Months of Inventory</span>
                  <span className="font-semibold text-gray-900">3.2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Market Status</span>
                  <span className="font-semibold text-green-600">Seller's Market</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Performance */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Neighborhood Performance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Neighborhood</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Median Price</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">YoY Change</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Days on Market</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Active Listings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-900">Summerlin</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">$650,000</td>
                  <td className="px-4 py-3 text-sm text-green-600">+6.2%</td>
                  <td className="px-4 py-3 text-sm text-gray-900">25</td>
                  <td className="px-4 py-3 text-sm text-gray-900">247</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-900">Henderson</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">$450,000</td>
                  <td className="px-4 py-3 text-sm text-green-600">+4.8%</td>
                  <td className="px-4 py-3 text-sm text-gray-900">28</td>
                  <td className="px-4 py-3 text-sm text-gray-900">456</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-900">Green Valley</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">$380,000</td>
                  <td className="px-4 py-3 text-sm text-green-600">+5.1%</td>
                  <td className="px-4 py-3 text-sm text-gray-900">32</td>
                  <td className="px-4 py-3 text-sm text-gray-900">234</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-900">Downtown</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">$320,000</td>
                  <td className="px-4 py-3 text-sm text-green-600">+3.9%</td>
                  <td className="px-4 py-3 text-sm text-gray-900">35</td>
                  <td className="px-4 py-3 text-sm text-gray-900">189</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Centennial Hills</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">$420,000</td>
                  <td className="px-4 py-3 text-sm text-green-600">+4.5%</td>
                  <td className="px-4 py-3 text-sm text-gray-900">30</td>
                  <td className="px-4 py-3 text-sm text-gray-900">312</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Market Insights & Predictions
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-blue-600">📈</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Price Growth</h3>
              <p className="text-gray-600">
                Las Vegas home prices are expected to continue their steady growth, with a projected 4-6% increase 
                over the next 12 months due to strong demand and limited inventory.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-green-600">🏠</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Inventory Trends</h3>
              <p className="text-gray-600">
                New construction is helping to balance the market, but inventory remains tight in popular 
                neighborhoods like Summerlin and Henderson.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-purple-600">💰</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Interest Rates</h3>
              <p className="text-gray-600">
                Current interest rates around 4.2% are creating opportunities for buyers, though rates may 
                fluctuate throughout the year.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-orange-600">🎯</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Investment Potential</h3>
              <p className="text-gray-600">
                Las Vegas continues to attract investors due to strong rental demand and appreciation potential, 
                particularly in emerging neighborhoods.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-red-600">📊</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Market Stability</h3>
              <p className="text-gray-600">
                The Las Vegas market shows strong fundamentals with diverse employment sectors and growing 
                population supporting long-term stability.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-3xl text-indigo-600">🌆</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Development</h3>
              <p className="text-gray-600">
                New developments and infrastructure projects are enhancing property values and quality of life 
                across the Las Vegas Valley.
              </p>
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

      {/* CTA Section */}
      <section className="bg-purple-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Get Your Custom Market Report
          </h2>
          <p className="mb-8 text-xl text-purple-100">
            Receive detailed market analysis for your specific neighborhood or property type
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-white text-purple-900 hover:bg-purple-50">
              Request Custom Report
            </Button>
            <Button href="/home-valuation" intent="secondary" className="border-white text-white hover:bg-white hover:text-purple-900">
              Get Home Valuation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
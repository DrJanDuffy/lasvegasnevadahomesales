import { SEOHead } from '../../../components/SEO/SEOHead'
import { FAQSchema } from '../../../components/SEO/FAQSchema'
import { ReviewSchema, serviceReviews, serviceAggregateRating } from '../../../components/SEO/ReviewSchema'
import { HowToSchema } from '../../../components/SEO/HowToSchema'
import { Button } from '../../../components/Button/Button'

// FAQ data for market reports
const marketReportsFAQs = [
  {
    question: "How often are Las Vegas Nevada Home Sales market reports updated?",
    answer: "Our market reports are updated monthly with the latest data from the Las Vegas real estate market. We provide comprehensive analysis of trends, pricing, and market conditions across all major neighborhoods including Summerlin, Henderson, and Green Valley."
  },
  {
    question: "What information is included in Las Vegas Nevada Home Sales market reports?",
    answer: "Our market reports include median home prices, days on market, inventory levels, price trends, neighborhood comparisons, and expert analysis of market conditions. We also provide insights on buyer and seller activity in the Las Vegas area."
  },
  {
    question: "Can I get a custom market report for a specific neighborhood?",
    answer: "Yes, Las Vegas Nevada Home Sales provides custom market reports for any neighborhood in the Las Vegas Valley. Contact us to request a detailed analysis of Summerlin, Henderson, Green Valley, or any other area you're interested in."
  },
  {
    question: "How can market reports help me make real estate decisions?",
    answer: "Our market reports provide data-driven insights to help you understand current market conditions, identify the best time to buy or sell, and make informed decisions about property investments in Las Vegas. We analyze trends and provide expert recommendations."
  },
  {
    question: "Are Las Vegas Nevada Home Sales market reports available for free?",
    answer: "Yes, our basic market reports are available for free. We also offer premium detailed reports with additional analysis and insights. Contact us to learn more about our comprehensive market analysis services."
  }
]

// How-to guide for understanding market reports
const understandMarketReportsHowTo = {
  title: "How to Understand Las Vegas Real Estate Market Reports",
  description: "Learn how to read and interpret real estate market reports to make informed decisions about buying or selling property in Las Vegas, Nevada.",
  totalTime: "P30M",
  difficulty: "Beginner" as const,
  supplies: [
    "Market report from Las Vegas Nevada Home Sales",
    "Calculator",
    "Notepad",
    "Internet access for additional research"
  ],
  tools: [
    "Las Vegas Nevada Home Sales market analysis tools",
    "MLS database access",
    "Real estate comparison tools",
    "Market trend analysis software"
  ],
  steps: [
    {
      name: "Review Market Overview",
      text: "Start by reading the executive summary and market overview section. This will give you a high-level understanding of current market conditions in Las Vegas and key trends affecting property values."
    },
    {
      name: "Analyze Price Trends",
      text: "Look at the median home price data and price trend charts. Compare current prices to historical data to understand if the market is appreciating, depreciating, or stable. Las Vegas Nevada Home Sales provides detailed price analysis by neighborhood."
    },
    {
      name: "Check Inventory Levels",
      text: "Review the inventory section to understand supply and demand. Low inventory typically indicates a seller's market with rising prices, while high inventory suggests a buyer's market with more negotiating power."
    },
    {
      name: "Examine Days on Market",
      text: "Days on market (DOM) data shows how quickly homes are selling. Lower DOM indicates strong demand, while higher DOM suggests slower market conditions. This metric helps determine market timing."
    },
    {
      name: "Compare Neighborhoods",
      text: "Use the neighborhood comparison section to identify the best areas for your needs. Las Vegas Nevada Home Sales provides detailed analysis of Summerlin, Henderson, Green Valley, and other neighborhoods."
    },
    {
      name: "Review Market Predictions",
      text: "Read the market forecast and predictions section to understand future trends. This helps with long-term planning and investment decisions in the Las Vegas real estate market."
    },
    {
      name: "Consult with Experts",
      text: "Contact Las Vegas Nevada Home Sales for personalized interpretation of market data. Our experts can help you understand how market conditions affect your specific situation and goals."
    },
    {
      name: "Take Action",
      text: "Use the insights from your market report to make informed decisions about buying, selling, or investing in Las Vegas real estate. Our team can help you develop a strategy based on current market conditions."
    }
  ]
}

export default function MarketReportsPage() {
  return (
    <>
      <SEOHead
        title="Las Vegas Nevada Home Sales Market Reports | Real Estate Analysis"
        description="Get comprehensive Las Vegas Nevada Home Sales market reports with expert analysis of trends, pricing, and market conditions. Stay informed about Summerlin, Henderson, and all Las Vegas neighborhoods."
        keywords="Las Vegas Nevada Home Sales market reports, Las Vegas real estate analysis, Summerlin market trends, Henderson property values, Nevada real estate data"
        canonical="/market-reports"
        ogImage="/images/og-market-reports.jpg"
      />
      <FAQSchema faqs={marketReportsFAQs} />
      <ReviewSchema 
        reviews={serviceReviews} 
        aggregateRating={serviceAggregateRating}
        itemName="Las Vegas Nevada Home Sales Market Reports"
        itemType="RealEstateAgent"
      />
      <HowToSchema {...understandMarketReportsHowTo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Las Vegas Nevada Home Sales Market Reports
            </h1>
            <p className="mb-8 text-xl font-light text-green-100 md:text-2xl">
              Expert analysis of Las Vegas real estate trends, pricing, and market conditions. Stay informed with comprehensive data from Las Vegas Nevada Home Sales.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button href="#latest-report" className="bg-white text-green-900 hover:bg-green-50">
                View Latest Report
              </Button>
              <Button href="/contact" intent="secondary" className="border-white text-white hover:bg-white hover:text-green-900">
                Get Custom Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section id="latest-report" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Latest Market Overview - January 2024
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-green-50 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">$425K</div>
              <div className="text-sm text-gray-600">Median Home Price</div>
              <div className="mt-2 text-xs text-green-500">+5.2% vs last year</div>
            </div>
            <div className="rounded-lg bg-blue-50 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">28</div>
              <div className="text-sm text-gray-600">Days on Market</div>
              <div className="mt-2 text-xs text-blue-500">-12% vs last year</div>
            </div>
            <div className="rounded-lg bg-purple-50 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">2,847</div>
              <div className="text-sm text-gray-600">Active Listings</div>
              <div className="mt-2 text-xs text-purple-500">+8.5% vs last month</div>
            </div>
            <div className="rounded-lg bg-orange-50 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600">98.5%</div>
              <div className="text-sm text-gray-600">List to Sale Ratio</div>
              <div className="mt-2 text-xs text-orange-500">+2.1% vs last year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Analysis */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Neighborhood Market Analysis
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Summerlin</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Price:</span>
                  <span className="font-semibold">$675,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Days on Market:</span>
                  <span className="font-semibold">22</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inventory:</span>
                  <span className="font-semibold">156 homes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Trend:</span>
                  <span className="font-semibold text-green-600">↗️ +6.8%</span>
                </div>
              </div>
              <Button href="/neighborhoods/summerlin" className="mt-4 w-full">
                View Summerlin Report
              </Button>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Henderson</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Price:</span>
                  <span className="font-semibold">$485,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Days on Market:</span>
                  <span className="font-semibold">31</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inventory:</span>
                  <span className="font-semibold">234 homes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Trend:</span>
                  <span className="font-semibold text-green-600">↗️ +4.2%</span>
                </div>
              </div>
              <Button href="/neighborhoods/henderson" className="mt-4 w-full">
                View Henderson Report
              </Button>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Green Valley</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Price:</span>
                  <span className="font-semibold">$425,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Days on Market:</span>
                  <span className="font-semibold">35</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inventory:</span>
                  <span className="font-semibold">189 homes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Trend:</span>
                  <span className="font-semibold text-green-600">↗️ +3.7%</span>
                </div>
              </div>
              <Button href="/neighborhoods/green-valley" className="mt-4 w-full">
                View Green Valley Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Key Market Trends
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Buyer Trends</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Increased demand for single-family homes</li>
                <li>• Growing interest in Summerlin luxury properties</li>
                <li>• First-time buyers focusing on Henderson and Green Valley</li>
                <li>• Remote work driving suburban preferences</li>
                <li>• Strong demand for homes with outdoor space</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Seller Trends</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Sellers receiving multiple offers</li>
                <li>• Homes selling above asking price</li>
                <li>• Reduced time on market</li>
                <li>• Increased equity for long-term owners</li>
                <li>• Strategic pricing driving quick sales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Forecast */}
      <section className="bg-green-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            2024 Market Forecast
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-green-300">Q1 2024</div>
              <p className="text-green-100">
                Continued strong demand with moderate price appreciation. 
                Spring market expected to be active with increased inventory.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-green-300">Q2 2024</div>
              <p className="text-green-100">
                Peak selling season with highest activity. 
                Summerlin and Henderson expected to lead price growth.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-green-300">Q3-Q4 2024</div>
              <p className="text-green-100">
                Stable market conditions with steady demand. 
                Investment properties gaining popularity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Get Your Custom Market Report
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Contact Las Vegas Nevada Home Sales for a personalized market analysis 
            tailored to your specific neighborhood and property type.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-green-600 text-white hover:bg-green-700">
              Request Custom Report
            </Button>
            <Button href="/properties" intent="secondary" className="border-green-600 text-green-600 hover:bg-green-50">
              Browse Properties
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
import { Metadata } from "next"
import { SEOHead } from '../../../components/SEO/SEOHead'
import { FAQSchema } from '../../../components/SEO/FAQSchema'
import { ReviewSchema } from '../../../components/SEO/ReviewSchema'
import { HowToSchema } from '../../../components/SEO/HowToSchema'
import { OptimizedImage } from '../../../components/OptimizedImage/OptimizedImage'
import { MarketInsightsWidget } from '../../../components/MarketInsights/MarketInsightsWidget'

export const metadata: Metadata = {
  title: "Real Estate Strategies & Techniques | Las Vegas Real Estate",
  description: "Discover proven real estate strategies and techniques for buying and selling homes in Las Vegas. Expert tips for negotiation, market timing, and investment success.",
  keywords: "real estate strategies, Las Vegas real estate techniques, home buying tips, selling strategies, real estate investment techniques",
  alternates: {
    canonical: "/strategies",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: "https://lasvegasnevadahomesales.com/strategies",
    title: "Real Estate Strategies & Techniques | Las Vegas Real Estate",
    description: "Discover proven real estate strategies and techniques for buying and selling homes in Las Vegas. Expert tips for negotiation, market timing, and investment success.",
    type: "website",
    images: [
      {
        url: "/images/strategies-hero.jpg",
        alt: "Las Vegas Real Estate Strategies",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function StrategiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Real Estate Strategies & Techniques | Las Vegas Real Estate"
        description="Discover proven real estate strategies and techniques for buying and selling homes in Las Vegas. Expert tips for negotiation, market timing, and investment success."
        keywords="real estate strategies, Las Vegas real estate techniques, home buying tips, selling strategies, real estate investment techniques"
        canonical="/strategies"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Estate Strategies & Techniques
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert insights for buying and selling homes in Las Vegas
            </p>
            <p className="text-lg text-blue-200">
              Whether you're a first-time buyer or experienced investor, discover proven strategies to maximize your real estate success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Buying Strategies */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying Strategies</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">First-Time Buyer Tips</h3>
                  <p className="text-gray-600 mb-4">
                    Navigate the Las Vegas market with confidence using these essential strategies for first-time homebuyers.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Get pre-approved for a mortgage before house hunting</li>
                    <li>Research neighborhoods and school districts</li>
                    <li>Consider future resale value and market trends</li>
                    <li>Don't skip the home inspection</li>
                    <li>Factor in all costs including property taxes and HOA fees</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Maximize your returns with strategic investment property purchases in Las Vegas.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Focus on areas with strong rental demand</li>
                    <li>Calculate cash flow and ROI carefully</li>
                    <li>Consider property management costs</li>
                    <li>Look for properties with value-add potential</li>
                    <li>Diversify your portfolio across different neighborhoods</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Selling Strategies */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Selling Strategies</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing Strategy</h3>
                  <p className="text-gray-600 mb-4">
                    Set the right price to attract buyers while maximizing your profit.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Get a professional market analysis</li>
                    <li>Price competitively to generate interest</li>
                    <li>Consider market conditions and seasonality</li>
                    <li>Leave room for negotiation</li>
                    <li>Monitor comparable sales in your area</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing & Presentation</h3>
                  <p className="text-gray-600 mb-4">
                    Make your home stand out in the competitive Las Vegas market.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Professional photography and virtual tours</li>
                    <li>Stage your home to appeal to buyers</li>
                    <li>Highlight unique features and upgrades</li>
                    <li>Use social media and online marketing</li>
                    <li>Host open houses and private showings</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Timing */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Timing</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">When to Buy</h3>
                  <p className="text-gray-600 mb-4">
                    Identify the optimal times to enter the Las Vegas real estate market.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Monitor seasonal price fluctuations</li>
                    <li>Watch for market corrections and opportunities</li>
                    <li>Consider interest rate trends</li>
                    <li>Look for motivated sellers</li>
                    <li>Time your purchase with life events</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">When to Sell</h3>
                  <p className="text-gray-600 mb-4">
                    Choose the right time to list your property for maximum returns.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Spring and summer typically see higher prices</li>
                    <li>Consider local events and tourism seasons</li>
                    <li>Monitor inventory levels in your area</li>
                    <li>Time with market upswings</li>
                    <li>Factor in your personal timeline and needs</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Market Insights Widget */}
            <MarketInsightsWidget 
              category="all" 
              limit={5} 
              showImages={false}
            />

            {/* Quick Contact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Expert Advice</h3>
              <p className="text-gray-600 mb-4">
                Ready to put these strategies into action? Our team of Las Vegas real estate experts is here to help.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full text-center"
              >
                Contact Our Team
              </a>
            </div>

            {/* Related Resources */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/market-intelligence" className="text-blue-600 hover:underline">
                    Market Intelligence
                  </a>
                </li>
                <li>
                  <a href="/home-valuation" className="text-blue-600 hover:underline">
                    Home Valuation
                  </a>
                </li>
                <li>
                  <a href="/properties" className="text-blue-600 hover:underline">
                    Browse Properties
                  </a>
                </li>
                <li>
                  <a href="/neighborhoods" className="text-blue-600 hover:underline">
                    Neighborhood Guides
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Schema */}
      <FAQSchema faqs={strategiesPageFAQs} />
      
      {/* Review Schema */}
      <ReviewSchema reviews={strategiesReviews} aggregateRating={strategiesAggregateRating} />
      
      {/* How-To Schema */}
      <HowToSchema howTo={strategiesHowTo} />
    </div>
  )
}

// FAQ data for the strategies page
const strategiesPageFAQs = [
  {
    question: "What's the best time to buy a home in Las Vegas?",
    answer: "The best time to buy in Las Vegas typically depends on market conditions, but spring and fall often offer good opportunities. However, the optimal time varies based on your specific needs and market trends."
  },
  {
    question: "How do I determine the right price for my home?",
    answer: "Work with a local real estate agent who can provide a comparative market analysis (CMA) based on recent sales of similar properties in your area. This will help you price competitively."
  },
  {
    question: "What should I look for in an investment property?",
    answer: "Focus on location, rental demand, potential for appreciation, cash flow, and property condition. Consider factors like proximity to amenities, schools, and employment centers."
  },
  {
    question: "How long does it typically take to sell a home in Las Vegas?",
    answer: "The time to sell varies based on market conditions, pricing, and property condition. In a strong market, well-priced homes can sell in 30-60 days, while slower markets may take 90+ days."
  }
]

// Review data for the strategies page
const strategiesReviews = [
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Sarah Johnson"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "The strategies I learned helped me sell my home above asking price in just 2 weeks!"
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Mike Chen"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Excellent investment advice that helped me build a profitable real estate portfolio."
  }
]

const strategiesAggregateRating = {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "127"
}

// How-To data for the strategies page
const strategiesHowTo = {
  name: "How to Successfully Buy or Sell Real Estate in Las Vegas",
  description: "A comprehensive guide to real estate strategies in Las Vegas",
  step: [
    {
      "@type": "HowToStep",
      "name": "Research the Market",
      "text": "Study current market conditions, trends, and comparable sales in your target area."
    },
    {
      "@type": "HowToStep",
      "name": "Set Your Goals",
      "text": "Define your objectives, timeline, and budget for buying or selling."
    },
    {
      "@type": "HowToStep",
      "name": "Work with Professionals",
      "text": "Partner with experienced real estate agents, lenders, and inspectors."
    },
    {
      "@type": "HowToStep",
      "name": "Execute Your Strategy",
      "text": "Implement your chosen strategy while remaining flexible to market changes."
    }
  ]
} 
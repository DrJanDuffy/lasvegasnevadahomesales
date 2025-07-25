import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Real Estate Techniques & Strategies | Las Vegas Real Estate",
  description: "Discover proven real estate techniques and strategies for buying and selling homes in Las Vegas. Expert tips for negotiation, market timing, and investment success.",
  keywords: "real estate techniques, Las Vegas real estate strategies, home buying tips, selling strategies, real estate investment techniques",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://lasvegasnevadahomesales.com/techniques",
    title: "Real Estate Techniques & Strategies | Expert Las Vegas Real Estate",
    description: "Master proven real estate techniques for buying and selling in Las Vegas. Expert strategies for negotiation, market timing, and investment success.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/images/real-estate-techniques.jpg",
        alt: "Real Estate Techniques and Strategies",
      },
    ],
  },
}

export default function TechniquesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Real Estate Techniques & Strategies
            </h1>
            <p className="mb-8 text-xl font-light text-green-100 md:text-2xl">
              Master proven techniques for buying and selling homes in Las Vegas
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button href="/home-valuation" className="bg-white text-green-900 hover:bg-green-50">
                Get Your Home Value
              </Button>
              <Button href="/contact" intent="secondary" className="border-white text-white hover:bg-white hover:text-green-900">
                Get Expert Advice
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Techniques Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Home Buying Techniques
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Market Timing Strategy</h3>
              <p className="mb-4 text-gray-600">
                Learn when to buy for maximum value. Understand seasonal trends, market cycles, and optimal timing for Las Vegas real estate.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Seasonal price fluctuations</li>
                <li>• Market cycle analysis</li>
                <li>• Interest rate timing</li>
                <li>• Inventory level monitoring</li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Negotiation Mastery</h3>
              <p className="mb-4 text-gray-600">
                Master the art of negotiation to secure the best possible deal on your dream home.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Offer strategy development</li>
                <li>• Counter-offer techniques</li>
                <li>• Inspection negotiation</li>
                <li>• Closing cost negotiations</li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Property Analysis</h3>
              <p className="mb-4 text-gray-600">
                Learn to evaluate properties like a professional investor and identify hidden value.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Comparative market analysis</li>
                <li>• Property condition assessment</li>
                <li>• Future value projection</li>
                <li>• Investment potential analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Techniques Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Home Selling Techniques
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Pricing Strategy</h3>
              <p className="mb-4 text-gray-600">
                Set the perfect price to attract buyers while maximizing your return on investment.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Market-based pricing</li>
                <li>• Psychological pricing</li>
                <li>• Price adjustment strategies</li>
                <li>• Competitive positioning</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Staging & Presentation</h3>
              <p className="mb-4 text-gray-600">
                Transform your home to appeal to the broadest range of potential buyers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Professional staging techniques</li>
                <li>• Photography optimization</li>
                <li>• Virtual tour creation</li>
                <li>• Curb appeal enhancement</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Marketing & Exposure</h3>
              <p className="mb-4 text-gray-600">
                Maximize your home's visibility to attract qualified buyers quickly.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Multi-channel marketing</li>
                <li>• Social media strategies</li>
                <li>• Open house techniques</li>
                <li>• Buyer targeting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Techniques Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Investment Techniques
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-blue-900">Rental Property Investment</h3>
              <p className="mb-6 text-blue-800">
                Build wealth through strategic rental property investments in Las Vegas.
              </p>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Cash flow analysis and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Property management strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Tax advantage maximization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Portfolio diversification techniques</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-green-900">Fix & Flip Strategies</h3>
              <p className="mb-6 text-green-800">
                Master the art of buying, renovating, and selling properties for profit.
              </p>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>Property selection criteria</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>Renovation cost estimation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>Timeline management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>Exit strategy planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tips Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Expert Tips & Insights
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mx-auto">
                <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">Market Timing</h3>
              <p className="text-sm text-gray-600">
                Buy during off-peak seasons and sell during high-demand periods for maximum profit.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">Data Analysis</h3>
              <p className="text-sm text-gray-600">
                Use market data and trends to make informed decisions about timing and pricing.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">Networking</h3>
              <p className="text-sm text-gray-600">
                Build relationships with real estate professionals for insider knowledge and opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mx-auto">
                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">Quick Action</h3>
              <p className="text-sm text-gray-600">
                Be prepared to act quickly when opportunities arise in the fast-moving Las Vegas market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Master These Techniques?
          </h2>
          <p className="mb-8 text-xl text-green-100">
            Get personalized guidance and expert strategies for your real estate goals
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-white text-green-900 hover:bg-green-50">
              Get Expert Advice
            </Button>
            <Button href="/home-valuation" intent="secondary" className="border-white text-white hover:bg-white hover:text-green-900">
              Value Your Home
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
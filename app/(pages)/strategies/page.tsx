import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Real Estate Strategies & Techniques | Las Vegas Real Estate",
  description: "Discover proven real estate strategies and techniques for buying and selling homes in Las Vegas. Expert tips for negotiation, market timing, and investment success.",
  keywords: "real estate strategies, Las Vegas real estate techniques, home buying tips, selling strategies, real estate investment techniques",
  openGraph: {
    url: "https://lasvegasnevadahomesales.com/strategies",
    title: "Real Estate Strategies & Techniques | Expert Las Vegas Real Estate",
    description: "Master proven real estate strategies for buying and selling in Las Vegas. Expert techniques for negotiation, market timing, and investment success.",
    type: "website",
    images: [
      {
        url: "/images/real-estate-strategies.jpg",
        alt: "Real Estate Strategies and Techniques",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function StrategiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Real Estate Strategies & Techniques
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Master proven strategies for buying and selling homes in Las Vegas
            </p>
          </div>
        </div>
      </section>

      {/* Buying Strategies Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
              Home Buying Strategies
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Pre-Purchase Strategies</h3>
                <ul className="space-y-2 text-left text-gray-700">
                  <li>• Market research and timing</li>
                  <li>• Financial preparation strategies</li>
                  <li>• Pre-approval optimization</li>
                  <li>• Neighborhood analysis techniques</li>
                  <li>• Property inspection strategies</li>
                  <li>• Negotiation preparation</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Negotiation Strategies</h3>
                <ul className="space-y-2 text-left text-gray-700">
                  <li>• Offer strategy development</li>
                  <li>• Counter-offer techniques</li>
                  <li>• Contingency management</li>
                  <li>• Closing cost negotiation</li>
                  <li>• Timeline optimization</li>
                  <li>• Multiple offer strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Strategies Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
              Home Selling Strategies
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Preparation Strategies</h3>
                <ul className="space-y-2 text-left text-gray-700">
                  <li>• Market timing strategies</li>
                  <li>• Pricing optimization techniques</li>
                  <li>• Curb appeal enhancement</li>
                  <li>• Interior staging strategies</li>
                  <li>• Professional staging techniques</li>
                  <li>• Photography optimization</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Marketing Strategies</h3>
                <ul className="space-y-2 text-left text-gray-700">
                  <li>• Digital marketing techniques</li>
                  <li>• Social media strategies</li>
                  <li>• Open house techniques</li>
                  <li>• Agent networking strategies</li>
                  <li>• Buyer agent incentives</li>
                  <li>• Showcase event planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
              Investment Strategies
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Market Analysis</h3>
                <ul className="space-y-2 text-left text-gray-700">
                  <li>• Market cycle timing</li>
                  <li>• Neighborhood growth analysis</li>
                  <li>• Rental market strategies</li>
                  <li>• Appreciation potential assessment</li>
                  <li>• Economic indicator analysis</li>
                  <li>• Development impact evaluation</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Portfolio Management</h3>
                <ul className="space-y-2 text-left text-gray-700">
                  <li>• Diversification strategies</li>
                  <li>• Risk management techniques</li>
                  <li>• Cash flow optimization</li>
                  <li>• Tax strategy implementation</li>
                  <li>• Portfolio diversification techniques</li>
                  <li>• Exit strategy planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tips Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold md:text-4xl">
              Expert Tips & Insights
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-blue-800 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-semibold">Market Timing</h3>
                <p className="text-blue-100">
                  Learn when to buy and sell based on market cycles, seasonal trends, and economic indicators.
                </p>
              </div>
              <div className="rounded-lg bg-blue-800 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-semibold">Negotiation Mastery</h3>
                <p className="text-blue-100">
                  Master the art of negotiation with proven techniques for getting the best deals.
                </p>
              </div>
              <div className="rounded-lg bg-blue-800 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-semibold">Financial Strategy</h3>
                <p className="text-blue-100">
                  Optimize your financial position with smart financing and investment strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Ready to Master These Strategies?
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Get personalized guidance from our Las Vegas real estate experts
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-blue-600 text-white hover:bg-blue-700">
              Get Expert Advice
            </Button>
            <Button href="/properties" intent="secondary" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Search Properties
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
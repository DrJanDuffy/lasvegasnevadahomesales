import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Market | Homes for Sale in Las Vegas, NV",
  description: "Discover the latest Las Vegas real estate market trends, homes for sale, and expert insights. Find your dream home in Las Vegas, Henderson, Summerlin, and surrounding areas.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LasVegasMarketOverview() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Las Vegas Nevada Home Sales
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Your Trusted Real Estate Experts
        </p>
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            Welcome to Las Vegas Nevada Home Sales
          </p>
          <p className="text-gray-500 mb-4">
            Phone: (702) 555-0123
          </p>
          <p className="text-gray-500 mb-4">
            Email: info@lasvegasnevadahomesales.com
          </p>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Las Vegas Real Estate Experts | Get in Touch",
  description: "Contact our Las Vegas real estate experts for personalized assistance. Get help buying, selling, or investing in Las Vegas properties. Call, email, or fill out our contact form.",
  keywords: "contact Las Vegas real estate, Las Vegas real estate agent, Las Vegas realtor contact, Las Vegas property expert",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Contact Las Vegas Nevada Home Sales
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Get in touch with our real estate experts
        </p>
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            Phone: (702) 555-0123
          </p>
          <p className="text-gray-500 mb-4">
            Email: info@lasvegasnevadahomesales.com
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 
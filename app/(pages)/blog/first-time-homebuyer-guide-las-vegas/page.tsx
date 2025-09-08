import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';

export const metadata: Metadata = {
  title: 'First-Time Homebuyer Guide Las Vegas: Complete 2025 Guide | Las Vegas Nevada Home Sales',
  description: 'Complete first-time homebuyer guide for Las Vegas. Learn about down payment assistance, loan programs, neighborhoods, and step-by-step process to buy your first home in Las Vegas.',
  keywords: 'first-time homebuyer Las Vegas, Las Vegas home buying guide, first-time buyer programs, Las Vegas Nevada Home Sales, home buying process, down payment assistance Las Vegas',
  openGraph: {
    title: 'First-Time Homebuyer Guide Las Vegas: Complete 2025 Guide',
    description: 'Complete first-time homebuyer guide for Las Vegas. Learn about down payment assistance, loan programs, neighborhoods, and step-by-step process.',
    url: 'https://lasvegasnevadahomesales.com/blog/first-time-homebuyer-guide-las-vegas',
    siteName: 'Las Vegas Nevada Home Sales',
    images: [
      {
        url: 'https://lasvegasnevadahomesales.com/images/og-first-time-homebuyer.jpg',
        width: 1200,
        height: 630,
        alt: 'First-Time Homebuyer Guide Las Vegas',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First-Time Homebuyer Guide Las Vegas: Complete 2025 Guide',
    description: 'Complete first-time homebuyer guide for Las Vegas. Learn about down payment assistance, loan programs, neighborhoods, and step-by-step process.',
    images: ['https://lasvegasnevadahomesales.com/images/og-first-time-homebuyer.jpg'],
  },
};

export default function FirstTimeHomebuyerGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            First-Time Homebuyer Guide Las Vegas: Your Complete 2025 Guide
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Everything you need to know about buying your first home in Las Vegas, from down payment assistance to closing day.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">First-Time Buyer</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Las Vegas Real Estate</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Home Buying Process</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Journey to Homeownership Starts Here</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Buying your first home in Las Vegas is an exciting milestone, but it can also feel overwhelming. 
            This comprehensive guide will walk you through every step of the process, from understanding your 
            budget to closing on your dream home.
          </p>

          {/* Step-by-Step Process */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">The 8-Step Home Buying Process</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Assess Your Financial Situation</h4>
                  <p className="text-gray-700">Review your credit score, calculate your debt-to-income ratio, and determine how much you can afford to spend on a home.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Get Pre-Approved for a Mortgage</h4>
                  <p className="text-gray-700">Work with a lender to get pre-approved, which will show sellers you're a serious buyer and help you understand your budget.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Find a Real Estate Agent</h4>
                  <p className="text-gray-700">Choose an experienced agent who knows the Las Vegas market and can guide you through the entire process.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Start House Hunting</h4>
                  <p className="text-gray-700">Visit neighborhoods, attend open houses, and work with your agent to find homes that meet your criteria and budget.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Make an Offer</h4>
                  <p className="text-gray-700">When you find the right home, your agent will help you craft a competitive offer based on market conditions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">6</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Get a Home Inspection</h4>
                  <p className="text-gray-700">Hire a professional inspector to identify any potential issues with the property before closing.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">7</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Finalize Your Mortgage</h4>
                  <p className="text-gray-700">Complete your loan application, provide required documentation, and work with your lender to secure final approval.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">8</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Close on Your Home</h4>
                  <p className="text-gray-700">Sign the final paperwork, pay closing costs, and receive the keys to your new home!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Down Payment Assistance */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Down Payment Assistance Programs in Las Vegas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Nevada Housing Division</CardTitle>
                  <CardDescription>State-sponsored assistance programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Down Payment Assistance (DPA) Program</li>
                    <li>• Mortgage Credit Certificate (MCC)</li>
                    <li>• First-time buyer programs</li>
                    <li>• Income limits apply</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">FHA Loans</CardTitle>
                  <CardDescription>Federal Housing Administration loans</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 3.5% down payment minimum</li>
                    <li>• Lower credit score requirements</li>
                    <li>• Competitive interest rates</li>
                    <li>• Available to first-time buyers</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">VA Loans</CardTitle>
                  <CardDescription>For eligible veterans and military</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• No down payment required</li>
                    <li>• No private mortgage insurance</li>
                    <li>• Competitive interest rates</li>
                    <li>• Must meet service requirements</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">USDA Loans</CardTitle>
                  <CardDescription>Rural Development loans</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• No down payment required</li>
                    <li>• Income limits apply</li>
                    <li>• Must be in eligible rural areas</li>
                    <li>• Low interest rates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Best Neighborhoods for First-Time Buyers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Las Vegas Neighborhoods for First-Time Buyers</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Green Valley</CardTitle>
                  <CardDescription>Affordable family-friendly area</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Average price: $450,000</li>
                    <li>• Great schools</li>
                    <li>• Family amenities</li>
                    <li>• Growing community</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">North Las Vegas</CardTitle>
                  <CardDescription>Budget-friendly options</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Average price: $350,000</li>
                    <li>• New construction</li>
                    <li>• Easy freeway access</li>
                    <li>• Investment potential</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Spring Valley</CardTitle>
                  <CardDescription>Convenient central location</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Average price: $400,000</li>
                    <li>• Close to everything</li>
                    <li>• Established neighborhood</li>
                    <li>• Good resale value</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Common Mistakes to Avoid */}
          <div className="bg-red-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common First-Time Buyer Mistakes to Avoid</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-red-900 mb-4">Financial Mistakes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Not getting pre-approved first</li>
                  <li>• Maxing out your budget</li>
                  <li>• Forgetting about closing costs</li>
                  <li>• Not saving for emergencies</li>
                  <li>• Making large purchases before closing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-red-900 mb-4">Process Mistakes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Skipping the home inspection</li>
                  <li>• Not researching the neighborhood</li>
                  <li>• Making emotional decisions</li>
                  <li>• Not understanding the contract</li>
                  <li>• Rushing the process</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Home Buying Journey?</h3>
            <p className="text-lg mb-6">
              Our experienced team specializes in helping first-time buyers navigate the Las Vegas real estate market. 
              We'll guide you through every step of the process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/neighborhoods">Explore Neighborhoods</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

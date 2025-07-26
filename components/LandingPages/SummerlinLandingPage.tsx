'use client'

import { Button } from '../Button/Button'
import Link from 'next/link'

export function SummerlinLandingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2540] via-[#3A8DDE] to-[#16B286] text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Summerlin Real Estate | Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Affiliate
            </h1>
            
            <p className="mx-auto max-w-4xl mb-8 text-xl text-blue-100">
              Experience the best of both worlds: the global reach and reputation of Berkshire Hathaway HomeServices Nevada combined with the personalized service of Las Vegas Nevada Home Sales. Dr. Jan Duffy's Suite 180 office in Downtown Summerlin provides convenient access to the area's most prestigious neighborhoods.
            </p>
            
            <div className="mb-8 space-y-2 text-lg">
              <p>📧 Email: <a href="mailto:drjanduffy@lasvegasnevadahomesales.com" className="underline hover:text-blue-200">drjanduffy@lasvegasnevadahomesales.com</a></p>
              <p>📞 Phone: <a href="tel:+17025001981" className="underline hover:text-blue-200">(702) 500-1981</a></p>
              <p>🏢 Office: Suite 180, Downtown Summerlin</p>
            </div>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button
                href="tel:+17025001981"
                className="bg-[#FF6B35] text-white hover:bg-[#E55A2B] px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Call (702) 500-1981
              </Button>
              <a
                href="mailto:drjanduffy@lasvegasnevadahomesales.com"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#0A2540] transition-all duration-200"
              >
                Email Dr. Duffy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Jan Duffy Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Why Choose Dr. Jan Duffy for Summerlin Real Estate?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="mb-4 text-xl font-bold text-[#0A2540]">✅ Berkshire Hathaway HomeServices Nevada Affiliate</h3>
              <p className="text-gray-600">Access to global resources, advanced technology, and the trusted Berkshire Hathaway brand reputation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="mb-4 text-xl font-bold text-[#0A2540]">✅ Independent Las Vegas Nevada Home Sales Practice</h3>
              <p className="text-gray-600">Personalized attention and local market expertise through Dr. Duffy's independent practice.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="mb-4 text-xl font-bold text-[#0A2540]">✅ Downtown Summerlin Office Location</h3>
              <p className="text-gray-600">Conveniently located in Suite 180 at 10980 W Charleston Blvd, serving the luxury real estate market.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="mb-4 text-xl font-bold text-[#0A2540]">✅ Direct Contact Access</h3>
              <p className="text-gray-600">Immediate response via phone (702) 500-1981 or email drjanduffy@lasvegasnevadahomesales.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Neighborhoods Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Summerlin Real Estate Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-[#0A2540]">Downtown Summerlin</h3>
              <p className="mb-4 text-gray-600">Luxury homes and investment properties in the heart of Summerlin's premier community. Access to world-class shopping, dining, and entertainment.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Luxury single-family homes</li>
                <li>• Investment properties</li>
                <li>• New construction opportunities</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-[#0A2540]">Red Rock Country Club</h3>
              <p className="mb-4 text-gray-600">Premium golf course communities and luxury estates with world-class amenities and stunning mountain views.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Golf course properties</li>
                <li>• Luxury estates</li>
                <li>• Mountain view homes</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-[#0A2540]">The Ridges</h3>
              <p className="mb-4 text-gray-600">Exclusive gated communities featuring custom luxury homes and spectacular Red Rock Canyon views.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom luxury homes</li>
                <li>• Gated communities</li>
                <li>• Canyon view properties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Expertise Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Summerlin Real Estate Market Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-[#0A2540]">Local Market Knowledge</h3>
              <p className="mb-6 text-gray-600">Dr. Jan Duffy specializes in the Summerlin real estate market, providing clients with:</p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#16B286] font-bold">✅</span>
                  <span>Current market trends and pricing analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#16B286] font-bold">✅</span>
                  <span>Neighborhood-specific insights and recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#16B286] font-bold">✅</span>
                  <span>Access to off-market properties and exclusive listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#16B286] font-bold">✅</span>
                  <span>Professional negotiation and transaction management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#16B286] font-bold">✅</span>
                  <span>Comprehensive buyer and seller representation</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-2xl font-bold text-[#0A2540]">Berkshire Hathaway HomeServices Nevada Resources</h3>
              <p className="mb-6 text-gray-600">As a Berkshire Hathaway HomeServices Nevada affiliate, Dr. Duffy provides access to:</p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#3A8DDE] font-bold">🌍</span>
                  <span>Global buyer networks and marketing reach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3A8DDE] font-bold">💻</span>
                  <span>Advanced technology and marketing tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3A8DDE] font-bold">📚</span>
                  <span>Professional training and continuing education</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3A8DDE] font-bold">🤝</span>
                  <span>Comprehensive transaction support and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3A8DDE] font-bold">🏆</span>
                  <span>Trusted brand recognition and credibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Contact Dr. Jan Duffy - Summerlin Real Estate Expert
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-[#0A2540]">Professional Contact Information</h3>
                              <div className="space-y-3 text-gray-700">
                  <p><strong>Office:</strong> Las Vegas Nevada Home Sales</p>
                  <p><strong>Affiliation:</strong> Berkshire Hathaway HomeServices Nevada</p>
                  <p><strong>Address:</strong> 10980 W Charleston Blvd, Suite 180, Las Vegas, NV 89135</p>
                  <p><strong>Phone:</strong> <a href="tel:+17025001981" className="text-[#3A8DDE] hover:underline">(702) 500-1981</a></p>
                  <p><strong>Email:</strong> <a href="mailto:drjanduffy@lasvegasnevadahomesales.com" className="text-[#3A8DDE] hover:underline">drjanduffy@lasvegasnevadahomesales.com</a></p>
                  <p><strong>Website:</strong> <a href="https://LasVegasNevadaHomesSales.com" className="text-[#3A8DDE] hover:underline">LasVegasNevadaHomesSales.com</a></p>
                  <p><strong>License:</strong> Nevada Real Estate License #0197614</p>
                </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-[#0A2540]">Send Dr. Duffy a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DDE] focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DDE] focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DDE] focus:border-transparent"
                />
                <select
                  name="interest"
                  required
                  aria-label="I'm interested in"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DDE] focus:border-transparent"
                >
                  <option value="">I'm interested in...</option>
                  <option value="buying">Buying a home in Summerlin</option>
                  <option value="selling">Selling my Summerlin home</option>
                  <option value="investing">Investment properties</option>
                  <option value="market-analysis">Market analysis</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="How can Dr. Duffy help you with your Summerlin real estate needs?"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DDE] focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#FF6B35] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#E55A2B] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Featured Summerlin Properties
            </h2>
            <p className="text-lg text-gray-600">
              Presented by Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Affiliate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                         <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
               <h3 className="mb-4 text-xl font-bold text-[#0A2540]">Downtown Summerlin Luxury Home</h3>
               <p className="mb-4 text-gray-600">Stunning luxury home in the heart of Downtown Summerlin with premium finishes and convenient access to shopping and dining.</p>
               <Link href="http://drjanduffy.realscout.com/onboarding" className="text-[#3A8DDE] hover:underline font-semibold">View Details →</Link>
             </div>
             
             <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
               <h3 className="mb-4 text-xl font-bold text-[#0A2540]">Red Rock Country Club Estate</h3>
               <p className="mb-4 text-gray-600">Magnificent estate with golf course views and world-class amenities in the prestigious Red Rock Country Club community.</p>
               <Link href="http://drjanduffy.realscout.com/onboarding" className="text-[#3A8DDE] hover:underline font-semibold">View Details →</Link>
             </div>
             
             <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
               <h3 className="mb-4 text-xl font-bold text-[#0A2540]">The Ridges Custom Home</h3>
               <p className="mb-4 text-gray-600">Custom luxury home with spectacular Red Rock Canyon views in the exclusive Ridges community.</p>
               <Link href="http://drjanduffy.realscout.com/onboarding" className="text-[#3A8DDE] hover:underline font-semibold">View Details →</Link>
             </div>
          </div>
          
          <div className="text-center">
            <p className="mb-6 text-xl text-gray-600">Ready to find your perfect Summerlin home?</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button
                href="tel:+17025001981"
                className="bg-[#FF6B35] text-white hover:bg-[#E55A2B] px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Call (702) 500-1981
              </Button>
              <a
                href="mailto:drjanduffy@lasvegasnevadahomesales.com"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#0A2540] px-8 py-4 text-lg font-semibold text-[#0A2540] hover:bg-[#0A2540] hover:text-white transition-all duration-200"
              >
                Email Dr. Duffy
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
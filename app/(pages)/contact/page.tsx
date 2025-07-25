import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"
import { RealScoutOfficeListings } from "../../../components/RealScout/RealScoutOfficeListings"
import { RealScoutYourListings } from "../../../components/RealScout/RealScoutYourListings"
import { SEOHead } from '../../../components/SEO/SEOHead'
import { FAQSchema, contactPageFAQs } from '../../../components/SEO/FAQSchema'
import { ReviewSchema, companyReviews, companyAggregateRating } from '../../../components/SEO/ReviewSchema'

export const metadata: Metadata = {
  title: "Contact Las Vegas Real Estate Experts | Get in Touch",
  description: "Contact our Las Vegas real estate experts for personalized assistance. Get help buying, selling, or investing in Las Vegas properties. Call, email, or fill out our contact form.",
  keywords: "contact Las Vegas real estate, Las Vegas real estate agent, Las Vegas realtor contact, Las Vegas property expert",
}

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Las Vegas Nevada Home Sales | Real Estate Experts in NV"
        description="Contact Las Vegas Nevada Home Sales for expert guidance on buying, selling, or investing in Las Vegas real estate. Call, email, or fill out our contact form."
        keywords="Las Vegas Nevada Home Sales, contact Las Vegas real estate, Las Vegas real estate agent, Las Vegas realtor contact, Las Vegas property expert"
        canonical="/contact"
        ogImage="/images/og-contact.jpg"
      />
      <FAQSchema faqs={contactPageFAQs} />
      <ReviewSchema 
        reviews={companyReviews} 
        aggregateRating={companyAggregateRating}
        itemName="Las Vegas Nevada Home Sales Contact"
        itemType="Organization"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Contact Las Vegas Nevada Home Sales
            </h1>
            <p className="mb-8 text-xl font-light text-indigo-100 md:text-2xl">
              Get in touch with our Las Vegas Nevada Home Sales experts for all your real estate needs in Nevada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your first name"
                      aria-label="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="your.email@example.com"
                    aria-label="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="(702) 555-0123"
                    aria-label="Phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700">
                    I'm interested in *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Select service of interest"
                  >
                    <option value="">Select a service</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="investing">Real Estate Investment</option>
                    <option value="valuation">Home Valuation</option>
                    <option value="market-report">Market Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-gray-700">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Select budget range"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-300k">Under $300K</option>
                    <option value="300k-500k">$300K - $500K</option>
                    <option value="500k-750k">$500K - $750K</option>
                    <option value="750k-1m">$750K - $1M</option>
                    <option value="over-1m">Over $1M</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Tell us about your real estate needs..."
                    aria-label="Message"
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    I'd like to receive market updates and real estate news
                  </label>
                </div>
                <Button href="http://drjanduffy.realscout.com/onboarding" className="w-full rounded-xl bg-indigo-600 px-6 py-2.5 text-lg text-white transition-colors delay-50 hover:bg-indigo-700">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 text-2xl text-indigo-600">📞</div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">(702) 555-0123</p>
                        <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
                        <Button href="http://drjanduffy.realscout.com/onboarding" className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">
                          Schedule a Call
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 text-2xl text-indigo-600">✉️</div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">info@lasvegasnevadahomesales.com</p>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                        <Button href="http://drjanduffy.realscout.com/onboarding" className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">
                          Send Message
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 text-2xl text-indigo-600">📍</div>
                      <div>
                        <p className="font-semibold text-gray-900">Office</p>
                        <p className="text-gray-600">
                          1234 Las Vegas Blvd<br />
                          Las Vegas, NV 89101
                        </p>
                        <p className="text-sm text-gray-500">Free parking available</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button href="http://drjanduffy.realscout.com/onboarding" className="w-full justify-start bg-gray-100 text-gray-900 hover:bg-gray-200">
                      🏠 Get Home Valuation
                    </Button>
                    <Button href="/properties" className="w-full justify-start bg-gray-100 text-gray-900 hover:bg-gray-200" aria-label="Browse Las Vegas Nevada Home Sales properties">
                      🔍 Search Properties
                    </Button>
                    <Button href="/market-reports" className="w-full justify-start bg-gray-100 text-gray-900 hover:bg-gray-200">
                      📊 View Market Reports
                    </Button>
                    <Button href="/neighborhoods" className="w-full justify-start bg-gray-100 text-gray-900 hover:bg-gray-200">
                      🏘️ Explore Neighborhoods
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">Our Team</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <p className="font-semibold text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Lead Real Estate Agent</p>
                      <p className="text-xs text-gray-500">15+ years experience in Las Vegas</p>
                      <Button href="http://drjanduffy.realscout.com/onboarding" className="mt-2 text-xs text-indigo-600 hover:text-indigo-800">
                        Contact Sarah
                      </Button>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                      <p className="text-sm text-gray-600">Investment Specialist</p>
                      <p className="text-xs text-gray-500">Expert in investment properties</p>
                      <Button href="http://drjanduffy.realscout.com/onboarding" className="mt-2 text-xs text-indigo-600 hover:text-indigo-800">
                        Contact Mike
                      </Button>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <p className="font-semibold text-gray-900">Lisa Chen</p>
                      <p className="text-sm text-gray-600">Luxury Home Specialist</p>
                      <p className="text-xs text-gray-500">Summerlin & Henderson expert</p>
                      <Button href="http://drjanduffy.realscout.com/onboarding" className="mt-2 text-xs text-indigo-600 hover:text-indigo-800">
                        Contact Lisa
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Map */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
                Office Hours
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-900">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Holidays</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Emergency Contact</h3>
                <p className="text-gray-600">
                  For urgent matters outside of business hours, please call our 24/7 hotline:
                </p>
                <p className="mt-2 text-lg font-semibold text-indigo-600">(702) 555-0124</p>
                <Button href="http://drjanduffy.realscout.com/onboarding" className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">
                  Emergency Contact Form
                </Button>
              </div>
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
                Visit Our Office
              </h2>
              <div className="h-64 rounded-lg bg-gradient-to-br from-gray-300 to-gray-400">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-4xl">🗺️</div>
                    <p className="text-gray-600">Visit Our Office</p>
                    <p className="text-sm text-gray-500">1234 Las Vegas Blvd, Las Vegas, NV 89101</p>
                    <Button href="http://drjanduffy.realscout.com/onboarding" className="mt-4 bg-indigo-600 text-white hover:bg-indigo-700">
                      Get Directions & Contact Us
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Getting Here</h3>
                <p className="text-gray-600">
                  Located in the heart of Las Vegas, just minutes from the Strip. 
                  Free parking available in our lot.
                </p>
              </div>
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

      {/* Your Listings */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Our Latest Listings
          </h2>
          <div className="flex justify-center">
            <RealScoutYourListings 
              agentEncodedId="QWdlbnQtMjI1MDUw" 
              sortOrder="STATUS_AND_SIGNIFICANT_CHANGE" 
              listingStatus="For Sale,Sold" 
              propertyTypes="" 
              priceMin="500000"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="mb-8 text-xl text-indigo-100">
            Our team is here to help you find your perfect Las Vegas home
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="http://drjanduffy.realscout.com/onboarding" className="bg-white text-indigo-900 hover:bg-indigo-50">
              Contact Us Now
            </Button>
            <Button href="/properties" intent="secondary" className="border-white text-white hover:bg-white hover:text-indigo-900">
              Browse Properties
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
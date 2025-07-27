import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"
import { RealScoutOfficeListings } from "../../../components/RealScout/RealScoutOfficeListings"
import { RealScoutYourListings } from "../../../components/RealScout/RealScoutYourListings"
import { LeadCaptureForm } from "../../../components/Forms/LeadCaptureForm"
import { SEOHead } from '../../../components/SEO/SEOHead'
import { FAQSchema, contactPageFAQs } from '../../../components/SEO/FAQSchema'
import { ReviewSchema, companyReviews, companyAggregateRating } from '../../../components/SEO/ReviewSchema'
import { AnalyticsDashboard } from '../../../components/Analytics/AnalyticsDashboard'

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
              <LeadCaptureForm
                title="Send Us a Message"
                subtitle="Get in touch with our Las Vegas real estate experts"
                source="contact-form"
                showPhone={true}
                showBudget={true}
                showTimeline={true}
              />
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
                    <Button href="http://drjanduffy.realscout.com/onboarding" className="w-full justify-start bg-gray-100 text-gray-900 hover:bg-gray-200">
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

      {/* RealScout Office Listings */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Our Latest Listings
          </h2>
          <div className="flex justify-center">
            <RealScoutOfficeListings 
              agentEncodedId="QWdlbnQtMjI1MDUw" 
              sortOrder="STATUS_AND_SIGNIFICANT_CHANGE" 
              listingStatus="For Sale,Sold" 
              propertyTypes="" 
              priceMin="500000"
            />
          </div>
        </div>
      </section>

      {/* RealScout Your Listings */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Properties
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
      
      {/* Analytics Dashboard (Development Only) */}
      <AnalyticsDashboard pageType="contact" debug={process.env.NODE_ENV === 'development'} />
    </>
  )
} 
import { useId } from 'react';
import { Button } from '../../../components/Button/Button';
import { FAQSchema } from '../../../components/SEO/FAQSchema';
import {
  companyAggregateRating,
  companyReviews,
  ReviewSchema,
} from '../../../components/SEO/ReviewSchema';
import { SEOHead } from '../../../components/SEO/SEOHead';

// Comprehensive FAQ data
const comprehensiveFAQs = [
  // General Company FAQs
  {
    question: 'What areas does Las Vegas Nevada Home Sales serve?',
    answer:
      'Las Vegas Nevada Home Sales serves the entire Las Vegas Valley including Summerlin, Henderson, Green Valley, Downtown Las Vegas, Centennial Hills, and all surrounding neighborhoods in Nevada. We have extensive knowledge of the local market and provide expert real estate services throughout the region.',
  },
  {
    question: 'How long has Las Vegas Nevada Home Sales been in business?',
    answer:
      'Las Vegas Nevada Home Sales has been serving the Las Vegas real estate market for over 15 years. Our team of experienced professionals has helped thousands of clients buy, sell, and invest in Las Vegas properties with exceptional results and personalized service.',
  },
  {
    question: 'What makes Las Vegas Nevada Home Sales different from other real estate companies?',
    answer:
      'Las Vegas Nevada Home Sales offers personalized service, deep local market knowledge, advanced technology integration, and a commitment to client satisfaction. We specialize in the Las Vegas market with years of experience, comprehensive market analysis, and a proven track record of successful transactions.',
  },

  // Buying FAQs
  {
    question: 'How do I get started with buying a home in Las Vegas?',
    answer:
      "To get started buying a home in Las Vegas, contact Las Vegas Nevada Home Sales for a free consultation. We'll help you get pre-approved for financing, understand your budget, identify your preferred neighborhoods, and begin your property search with our advanced tools and expert guidance.",
  },
  {
    question: 'What are the current market conditions for buyers in Las Vegas?',
    answer:
      'Current market conditions in Las Vegas show strong demand with moderate inventory. Prices have been appreciating steadily, and homes are selling quickly in desirable neighborhoods like Summerlin and Henderson. Contact us for the latest market analysis and to understand how conditions affect your buying strategy.',
  },
  {
    question: 'How much do I need for a down payment on a Las Vegas home?',
    answer:
      'Down payment requirements vary based on loan type and your financial situation. Conventional loans typically require 5-20%, FHA loans require 3.5%, and VA loans may require 0% down. Las Vegas Nevada Home Sales can connect you with trusted lenders to discuss your specific options.',
  },
  {
    question: 'What neighborhoods should I consider when buying in Las Vegas?',
    answer:
      'Popular neighborhoods include Summerlin for luxury homes and amenities, Henderson for family-friendly communities, Green Valley for established neighborhoods, and Downtown for urban living. Each area offers different benefits - contact Las Vegas Nevada Home Sales for personalized neighborhood recommendations based on your lifestyle and budget.',
  },

  // Selling FAQs
  {
    question: 'How do I prepare my home for sale in Las Vegas?',
    answer:
      "To prepare your home for sale, start with a professional home valuation from Las Vegas Nevada Home Sales. We'll provide recommendations for repairs, staging, and pricing strategy. Our team can also connect you with professional stagers, photographers, and contractors to maximize your home's appeal and value.",
  },
  {
    question: 'How long does it take to sell a home in Las Vegas?',
    answer:
      'The average time to sell a home in Las Vegas is currently 28 days, but this varies based on location, price, condition, and market conditions. Well-priced homes in desirable neighborhoods like Summerlin and Henderson often sell within 1-2 weeks. Our market analysis helps set the right price for quick sales.',
  },
  {
    question: 'What are the closing costs when selling a home in Las Vegas?',
    answer:
      'Typical closing costs for sellers in Las Vegas include real estate commissions (5-6%), title insurance, escrow fees, property taxes, and any outstanding liens or repairs. Las Vegas Nevada Home Sales provides detailed closing cost estimates during our initial consultation to help you plan your sale.',
  },
  {
    question: 'Should I sell my home before buying a new one?',
    answer:
      'This depends on your financial situation, market conditions, and personal preferences. Some buyers prefer to sell first to have cash for a down payment, while others buy first to avoid moving twice. Las Vegas Nevada Home Sales can help you evaluate both options and create a strategy that works for your situation.',
  },

  // Investment FAQs
  {
    question: 'Is Las Vegas a good market for real estate investment?',
    answer:
      'Yes, Las Vegas offers excellent investment opportunities due to strong rental demand, population growth, diverse employment sectors, and relatively affordable property prices compared to other major markets. Our investment specialists can help you identify properties with strong ROI potential and manage your investments.',
  },
  {
    question: 'What types of investment properties are available in Las Vegas?',
    answer:
      'Las Vegas offers various investment opportunities including single-family homes, condos, townhouses, multi-family properties, and commercial real estate. Each type has different benefits and considerations. Contact Las Vegas Nevada Home Sales for detailed analysis of investment options that match your goals and budget.',
  },
  {
    question: 'What is the average rental yield in Las Vegas?',
    answer:
      'Average rental yields in Las Vegas typically range from 4-8% depending on property type, location, and market conditions. Summerlin and Henderson often provide strong rental income with good appreciation potential. Our investment team can provide detailed ROI analysis for specific properties.',
  },

  // Services FAQs
  {
    question: 'What services does Las Vegas Nevada Home Sales provide?',
    answer:
      'We provide comprehensive real estate services including buying and selling assistance, property valuations, market analysis, investment consulting, property management, and relocation services. Our team also offers specialized services for first-time buyers, luxury properties, and investment portfolios.',
  },
  {
    question: 'Do you provide property management services?',
    answer:
      'Yes, Las Vegas Nevada Home Sales offers property management services for investors and absentee owners. Our services include tenant screening, rent collection, property maintenance, financial reporting, and legal compliance. We help maximize your investment returns while minimizing your involvement.',
  },
  {
    question: 'Can you help with relocation to Las Vegas?',
    answer:
      'Absolutely! Our relocation services include neighborhood tours, school information, community insights, and assistance with all aspects of your move to Las Vegas. We understand the unique needs of relocating families and provide comprehensive support throughout the process.',
  },

  // Market FAQs
  {
    question: 'How often do you update your market reports?',
    answer:
      'We update our market reports monthly with the latest data from the Las Vegas real estate market. Our reports include comprehensive analysis of trends, pricing, inventory, and neighborhood performance. Subscribe to our newsletter to receive regular market updates and insights.',
  },
  {
    question: 'What are the current interest rates for Las Vegas mortgages?',
    answer:
      'Interest rates vary based on loan type, credit score, and market conditions. Current rates for conventional loans are around 6-7%, FHA loans around 5.5-6.5%, and VA loans around 5-6%. Contact us to connect with trusted lenders for current rate quotes and pre-approval.',
  },
  {
    question: 'How do I get a free home valuation from Las Vegas Nevada Home Sales?',
    answer:
      'You can get a free home valuation by visiting our home value page, calling us directly, or filling out our contact form. Our experts will provide you with a comprehensive market analysis of your property including comparable sales, market trends, and pricing recommendations.',
  },
];

export default function FAQPage() {
  const generalQuestionsId = useId();

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | Las Vegas Nevada Home Sales"
        description="Get answers to common questions about Las Vegas Nevada Home Sales real estate services, buying and selling homes, market conditions, and investment opportunities in Las Vegas."
        keywords="Las Vegas Nevada Home Sales FAQ, real estate questions, buying selling homes Las Vegas, Nevada real estate FAQ, Summerlin Henderson real estate"
        canonical="/faq"
        ogImage="/images/og-faq.jpg"
      />
      <FAQSchema faqs={comprehensiveFAQs} />
      <ReviewSchema
        reviews={companyReviews}
        aggregateRating={companyAggregateRating}
        itemName="Las Vegas Nevada Home Sales FAQ"
        itemType="Organization"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mb-8 text-xl font-light text-indigo-100 md:text-2xl">
              Get answers to common questions about Las Vegas Nevada Home Sales real estate
              services, market conditions, and buying or selling in Las Vegas.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                href="#general-questions"
                className="bg-white text-indigo-900 hover:bg-indigo-50"
              >
                Browse Questions
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-indigo-900"
              >
                Ask Your Question
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section id={generalQuestionsId} className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Common Questions by Category
          </h2>

          {/* General Company Questions */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              About Las Vegas Nevada Home Sales
            </h3>
            <div className="space-y-6">
              {comprehensiveFAQs.slice(0, 3).map((faq) => (
                <div key={faq.question} className="rounded-lg border border-gray-200 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buying Questions */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Buying a Home in Las Vegas</h3>
            <div className="space-y-6">
              {comprehensiveFAQs.slice(3, 7).map((faq) => (
                <div key={faq.question} className="rounded-lg border border-gray-200 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selling Questions */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Selling Your Home</h3>
            <div className="space-y-6">
              {comprehensiveFAQs.slice(7, 11).map((faq) => (
                <div key={faq.question} className="rounded-lg border border-gray-200 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Questions */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Real Estate Investment</h3>
            <div className="space-y-6">
              {comprehensiveFAQs.slice(11, 14).map((faq) => (
                <div key={faq.question} className="rounded-lg border border-gray-200 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Questions */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Our Services</h3>
            <div className="space-y-6">
              {comprehensiveFAQs.slice(14, 17).map((faq) => (
                <div key={faq.question} className="rounded-lg border border-gray-200 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Market Questions */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Market Information</h3>
            <div className="space-y-6">
              {comprehensiveFAQs.slice(17, 20).map((faq) => (
                <div key={faq.question} className="rounded-lg border border-gray-200 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Can't find the answer you're looking for? Contact Las Vegas Nevada Home Sales directly
            for personalized assistance with your real estate needs.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-indigo-600 text-white hover:bg-indigo-700">
              Contact Us
            </Button>
            <Button
              href="/home-valuation"
              variant="secondary"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              Get Home Valuation
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 text-4xl">🏠</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Buy a Home</h3>
              <p className="mb-4 text-sm text-gray-600">Find your dream home in Las Vegas</p>
              <Button href="/properties" className="text-indigo-600 hover:text-indigo-700">
                Browse Properties →
              </Button>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">💰</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Sell Your Home</h3>
              <p className="mb-4 text-sm text-gray-600">Get maximum value for your property</p>
              <Button href="/home-valuation" className="text-indigo-600 hover:text-indigo-700">
                Get Valuation →
              </Button>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">📊</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Market Reports</h3>
              <p className="mb-4 text-sm text-gray-600">Latest market insights and trends</p>
              <Button href="/market-reports" className="text-indigo-600 hover:text-indigo-700">
                View Reports →
              </Button>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">📞</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Contact Us</h3>
              <p className="mb-4 text-sm text-gray-600">Get in touch with our experts</p>
              <Button href="/contact" className="text-indigo-600 hover:text-indigo-700">
                Contact Now →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

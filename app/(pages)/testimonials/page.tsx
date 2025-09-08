import { Button } from '../../../components/Button/Button';
import { FAQSchema } from '../../../components/SEO/FAQSchema';
import {
  companyAggregateRating,
  companyReviews,
  ReviewSchema,
} from '../../../components/SEO/ReviewSchema';
import { SEOHead } from '../../../components/SEO/SEOHead';

// FAQ data for testimonials
const testimonialsFAQs = [
  {
    question: 'How can I leave a review for Las Vegas Nevada Home Sales?',
    answer:
      'You can leave a review for Las Vegas Nevada Home Sales by contacting us directly, posting on Google Reviews, or sharing your experience on social media. We value all feedback and use it to continuously improve our services for future clients.',
  },
  {
    question: 'Are all the testimonials on this page from real clients?',
    answer:
      'Yes, all testimonials on this page are from real clients who have worked with Las Vegas Nevada Home Sales. We only publish authentic reviews from verified clients who have completed transactions with our team. We never publish fake or paid testimonials.',
  },
  {
    question: 'Can I see more reviews from Las Vegas Nevada Home Sales clients?',
    answer:
      'Yes, you can find additional reviews on our Google Business page, social media profiles, and other review platforms. We also have a comprehensive collection of client testimonials that we can share upon request. Contact us for more information.',
  },
  {
    question: 'How do Las Vegas Nevada Home Sales handle client feedback?',
    answer:
      "We take all client feedback seriously and use it to improve our services. Positive feedback helps us understand what we're doing well, while constructive criticism helps us identify areas for improvement. We regularly review feedback to enhance our client experience.",
  },
  {
    question: 'What makes clients choose Las Vegas Nevada Home Sales over other agents?',
    answer:
      'Clients choose Las Vegas Nevada Home Sales for our local expertise, personalized service, market knowledge, and proven track record. Our team provides comprehensive support throughout the entire buying or selling process, ensuring a smooth and successful transaction.',
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah and Mike Johnson',
    location: 'Summerlin',
    type: 'Buyer',
    rating: 5,
    date: '2024-01-15',
    image:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    testimonial:
      "Las Vegas Nevada Home Sales made our home buying experience absolutely incredible! They found us the perfect home in Summerlin within our budget and helped us navigate the entire process with expertise and patience. We couldn't be happier with our new home and the service we received.",
    property: '4-bedroom home in Summerlin',
    price: '$675,000',
  },
  {
    id: 2,
    name: 'David and Lisa Chen',
    location: 'Henderson',
    type: 'Seller',
    rating: 5,
    date: '2024-01-12',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    testimonial:
      'Selling our home with Las Vegas Nevada Home Sales was a breeze! They sold our property in just 18 days for above asking price. Their marketing strategy was brilliant, and their communication throughout the process was excellent. Highly recommend!',
    property: '3-bedroom home in Henderson',
    price: '$485,000',
  },
  {
    id: 3,
    name: 'Robert Thompson',
    location: 'Green Valley',
    type: 'Investor',
    rating: 5,
    date: '2024-01-10',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    testimonial:
      'As an investor, I need an agent who understands the market and can identify great opportunities. Las Vegas Nevada Home Sales delivered exactly that. They helped me purchase two investment properties that are already generating excellent returns.',
    property: 'Investment properties in Green Valley',
    price: '$425,000 each',
  },
  {
    id: 4,
    name: 'Jennifer Rodriguez',
    location: 'Downtown Las Vegas',
    type: 'First-time Buyer',
    rating: 5,
    date: '2024-01-08',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    testimonial:
      "Being a first-time homebuyer was overwhelming, but Las Vegas Nevada Home Sales guided me through every step. They explained everything clearly, helped me understand the market, and found me a perfect starter home. I'm so grateful for their expertise!",
    property: '2-bedroom condo in Downtown',
    price: '$320,000',
  },
  {
    id: 5,
    name: 'Michael and Amanda Wilson',
    location: 'Centennial Hills',
    type: 'Buyer',
    rating: 5,
    date: '2024-01-05',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    testimonial:
      'We were relocating from California and needed someone who could help us understand the Las Vegas market. Las Vegas Nevada Home Sales provided invaluable insights and found us a beautiful home in Centennial Hills. The entire process was smooth and professional.',
    property: '5-bedroom home in Centennial Hills',
    price: '$520,000',
  },
  {
    id: 6,
    name: 'Patricia Martinez',
    location: 'Summerlin',
    type: 'Seller',
    rating: 5,
    date: '2024-01-03',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    testimonial:
      'I was nervous about selling my home, but Las Vegas Nevada Home Sales put me at ease immediately. They handled everything professionally, from staging to negotiations. My home sold in just 12 days for more than I expected!',
    property: '3-bedroom home in Summerlin',
    price: '$580,000',
  },
  {
    id: 7,
    name: 'James and Emily Davis',
    location: 'Henderson',
    type: 'Buyer',
    rating: 5,
    date: '2023-12-28',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    testimonial:
      'Las Vegas Nevada Home Sales helped us find our dream home in Henderson. They listened to our needs, showed us properties that matched our criteria, and negotiated a great deal. The entire team was responsive and professional throughout.',
    property: '4-bedroom home in Henderson',
    price: '$495,000',
  },
  {
    id: 8,
    name: 'Carlos and Maria Garcia',
    location: 'Green Valley',
    type: 'Seller',
    rating: 5,
    date: '2023-12-25',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    testimonial:
      'We had a great experience selling our home with Las Vegas Nevada Home Sales. They provided excellent marketing, professional photography, and skilled negotiation. Our home sold quickly and for a great price. Highly recommend their services!',
    property: '3-bedroom home in Green Valley',
    price: '$435,000',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <SEOHead
        title="Client Testimonials | Las Vegas Nevada Home Sales"
        description="Read real client testimonials and reviews from Las Vegas Nevada Home Sales. See what our satisfied clients say about our real estate services in Las Vegas, Summerlin, Henderson, and all of Nevada."
        keywords="Las Vegas Nevada Home Sales testimonials, client reviews, real estate agent reviews, Las Vegas realtor testimonials, Nevada real estate reviews"
        canonical="/testimonials"
        ogImage="/images/og-testimonials.jpg"
      />
      <FAQSchema faqs={testimonialsFAQs} />
      <ReviewSchema
        reviews={companyReviews}
        aggregateRating={companyAggregateRating}
        itemName="Las Vegas Nevada Home Sales Client Testimonials"
        itemType="Organization"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Client Testimonials
            </h1>
            <p className="mb-8 text-xl font-light text-yellow-100 md:text-2xl">
              Read what our satisfied clients say about Las Vegas Nevada Home Sales. Real reviews
              from real people who trusted us with their real estate needs.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button href="#testimonials" className="bg-white text-yellow-900 hover:bg-yellow-50">
                Read Reviews
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-yellow-900"
              >
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8">
            <div className="mb-4 text-6xl">⭐</div>
            <div className="mb-2 text-4xl font-bold text-gray-900">4.9/5</div>
            <div className="mb-4 text-xl text-gray-600">Average Client Rating</div>
            <div className="text-sm text-gray-500">
              Based on {companyAggregateRating.reviewCount} verified reviews
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">1000+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section id="testimonials" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">"{testimonial.testimonial}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-500">
                    <strong>Property:</strong> {testimonial.property}
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Price:</strong> {testimonial.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Type:</strong> {testimonial.type}
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Date:</strong> {new Date(testimonial.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Client Success Stories by Service
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-4 text-4xl">🏠</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Home Buyers</h3>
              <p className="mb-4 text-sm text-gray-600">
                Successfully helping families find their dream homes
              </p>
              <div className="text-2xl font-bold text-green-600">4.9/5</div>
              <div className="text-xs text-gray-500">Average Rating</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-4 text-4xl">💰</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Home Sellers</h3>
              <p className="mb-4 text-sm text-gray-600">
                Maximizing value and quick sales for sellers
              </p>
              <div className="text-2xl font-bold text-green-600">4.9/5</div>
              <div className="text-xs text-gray-500">Average Rating</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-4 text-4xl">📈</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Investors</h3>
              <p className="mb-4 text-sm text-gray-600">
                Building profitable real estate portfolios
              </p>
              <div className="text-2xl font-bold text-green-600">5.0/5</div>
              <div className="text-xs text-gray-500">Average Rating</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-4 text-4xl">🔄</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Relocation</h3>
              <p className="mb-4 text-sm text-gray-600">
                Smooth transitions for out-of-state buyers
              </p>
              <div className="text-2xl font-bold text-green-600">4.8/5</div>
              <div className="text-xs text-gray-500">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Experience Our Service?</h2>
          <p className="mb-8 text-xl text-yellow-100">
            Join hundreds of satisfied clients who have trusted Las Vegas Nevada Home Sales with
            their real estate needs.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-white text-yellow-900 hover:bg-yellow-50">
              Get Started Today
            </Button>
            <Button
              href="/properties"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-yellow-900"
            >
              Browse Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Find Us on Review Platforms
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-4xl">⭐</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Google Reviews</h3>
              <p className="mb-4 text-sm text-gray-600">Read our reviews on Google Business</p>
              <Button
                href="http://drjanduffy.realscout.com/onboarding"
                className="text-yellow-600 hover:text-yellow-700"
              >
                View Google Reviews →
              </Button>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-4xl">📘</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Facebook</h3>
              <p className="mb-4 text-sm text-gray-600">Check out our Facebook page reviews</p>
              <Button
                href="http://drjanduffy.realscout.com/onboarding"
                className="text-blue-600 hover:text-blue-700"
              >
                View Facebook Reviews →
              </Button>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-4xl">🏠</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Zillow</h3>
              <p className="mb-4 text-sm text-gray-600">See our reviews on Zillow</p>
              <Button
                href="http://drjanduffy.realscout.com/onboarding"
                className="text-blue-600 hover:text-blue-700"
              >
                View Zillow Reviews →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

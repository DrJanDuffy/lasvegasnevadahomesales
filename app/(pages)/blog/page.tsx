import { SEOHead } from '../../../components/SEO/SEOHead'
import { FAQSchema } from '../../../components/SEO/FAQSchema'
import { ReviewSchema, serviceReviews, serviceAggregateRating } from '../../../components/SEO/ReviewSchema'
import { Button } from '../../../components/Button/Button'

// FAQ data for blog
const blogFAQs = [
  {
    question: "How often does Las Vegas Nevada Home Sales publish new blog content?",
    answer: "We publish new blog content weekly, covering topics like market trends, neighborhood guides, buying and selling tips, and real estate investment strategies. Our content is written by Las Vegas real estate experts to provide valuable insights for our community."
  },
  {
    question: "What topics does the Las Vegas Nevada Home Sales blog cover?",
    answer: "Our blog covers comprehensive real estate topics including market analysis, neighborhood spotlights, buying and selling guides, investment strategies, home improvement tips, and local Las Vegas real estate news. We focus on providing actionable insights for buyers, sellers, and investors."
  },
  {
    question: "Can I subscribe to Las Vegas Nevada Home Sales blog updates?",
    answer: "Yes, you can subscribe to our blog updates to receive the latest real estate insights, market reports, and neighborhood guides directly to your email. Contact us to join our newsletter and stay informed about Las Vegas real estate trends."
  },
  {
    question: "Are the blog articles written by real estate experts?",
    answer: "Yes, all our blog content is written by experienced Las Vegas real estate professionals from Las Vegas Nevada Home Sales. Our team has deep knowledge of the local market and provides expert insights based on years of experience in the Las Vegas real estate industry."
  },
  {
    question: "Can I request specific topics for the Las Vegas Nevada Home Sales blog?",
    answer: "Absolutely! We welcome topic suggestions from our readers. If you have specific questions about Las Vegas real estate, neighborhood information, or market trends you'd like us to cover, please contact us and we'll consider your request for future blog posts."
  }
]

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "2024 Las Vegas Real Estate Market Predictions",
    excerpt: "Expert analysis of what to expect in the Las Vegas real estate market in 2024, including price trends, inventory forecasts, and investment opportunities.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Market Analysis",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    slug: "2024-las-vegas-real-estate-market-predictions",
    featured: true
  },
  {
    id: 2,
    title: "Complete Guide to Buying a Home in Summerlin",
    excerpt: "Everything you need to know about buying a home in Summerlin, from neighborhood overview to financing options and closing process.",
    author: "Mike Rodriguez",
    date: "2024-01-12",
    category: "Buying Guide",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=400&fit=crop",
    slug: "complete-guide-buying-home-summerlin",
    featured: false
  },
  {
    id: 3,
    title: "Investment Properties in Las Vegas: What You Need to Know",
    excerpt: "Comprehensive guide to real estate investment in Las Vegas, including market analysis, property types, and ROI expectations.",
    author: "Lisa Chen",
    date: "2024-01-10",
    category: "Investment",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
    slug: "investment-properties-las-vegas-guide",
    featured: false
  },
  {
    id: 4,
    title: "Henderson vs. Summerlin: Which Neighborhood is Right for You?",
    excerpt: "Detailed comparison of Henderson and Summerlin neighborhoods, including lifestyle, amenities, schools, and real estate values.",
    author: "David Thompson",
    date: "2024-01-08",
    category: "Neighborhood Guide",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop",
    slug: "henderson-vs-summerlin-neighborhood-comparison",
    featured: false
  },
  {
    id: 5,
    title: "Selling Your Home in Las Vegas: Maximize Your Profit",
    excerpt: "Expert tips and strategies for selling your home in Las Vegas for maximum profit, including staging, pricing, and marketing techniques.",
    author: "Sarah Johnson",
    date: "2024-01-05",
    category: "Selling Guide",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",
    slug: "selling-home-las-vegas-maximize-profit",
    featured: false
  },
  {
    id: 6,
    title: "First-Time Homebuyer Guide: Las Vegas Edition",
    excerpt: "Essential guide for first-time homebuyers in Las Vegas, covering everything from pre-approval to closing and beyond.",
    author: "Mike Rodriguez",
    date: "2024-01-03",
    category: "Buying Guide",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=400&fit=crop",
    slug: "first-time-homebuyer-guide-las-vegas",
    featured: false
  }
]

// Categories for filtering
const categories = [
  "All",
  "Market Analysis",
  "Buying Guide",
  "Selling Guide",
  "Investment",
  "Neighborhood Guide",
  "Tips & Advice"
]

export default function BlogPage() {
  return (
    <>
      <SEOHead
        title="Las Vegas Nevada Home Sales Blog | Real Estate Insights & Tips"
        description="Stay informed with the latest Las Vegas Nevada Home Sales blog posts covering market trends, neighborhood guides, buying and selling tips, and real estate investment strategies."
        keywords="Las Vegas Nevada Home Sales blog, Las Vegas real estate blog, real estate tips, market insights, neighborhood guides, buying selling tips"
        canonical="/blog"
        ogImage="/images/og-blog.jpg"
      />
      <FAQSchema faqs={blogFAQs} />
      <ReviewSchema 
        reviews={serviceReviews} 
        aggregateRating={serviceAggregateRating}
        itemName="Las Vegas Nevada Home Sales Blog"
        itemType="RealEstateAgent"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Las Vegas Nevada Home Sales Blog
            </h1>
            <p className="mb-8 text-xl font-light text-purple-100 md:text-2xl">
              Expert insights, market analysis, and real estate tips from Las Vegas Nevada Home Sales professionals. Stay informed about the latest trends and opportunities.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button href="#featured-posts" className="bg-white text-purple-900 hover:bg-purple-50">
                Read Latest Posts
              </Button>
              <Button href="/contact" intent="secondary" className="border-white text-white hover:bg-white hover:text-purple-900">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="featured-posts" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Article
          </h2>
          {blogPosts.filter(post => post.featured).map(post => (
            <div key={post.id} className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative h-64 md:h-96">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center space-x-4 text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mb-6 text-lg text-gray-600">
                    {post.excerpt}
                  </p>
                  <Button href={`/blog/${post.slug}`} className="bg-purple-600 text-white hover:bg-purple-700">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-purple-50 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.filter(post => !post.featured).map(post => (
              <article key={post.id} className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-sm font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center space-x-3 text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-600">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {post.excerpt}
                  </p>
                  <Button href={`/blog/${post.slug}`} className="text-purple-600 hover:text-purple-700">
                    Read More →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-purple-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Stay Updated with Las Vegas Real Estate
          </h2>
          <p className="mb-8 text-xl text-purple-100">
            Subscribe to our newsletter for the latest market insights, neighborhood guides, and real estate tips from Las Vegas Nevada Home Sales experts.
          </p>
          <div className="mx-auto max-w-md">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-lg border border-purple-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button href="http://drjanduffy.realscout.com/onboarding" className="bg-white text-purple-900 hover:bg-purple-50">
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-sm text-purple-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Popular Topics
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-4xl">📊</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Market Analysis</h3>
              <p className="text-sm text-gray-600">
                Expert insights on Las Vegas real estate trends and market conditions
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-4xl">🏠</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Buying Guides</h3>
              <p className="text-sm text-gray-600">
                Comprehensive guides for homebuyers in Las Vegas
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-4xl">💰</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Investment Tips</h3>
              <p className="text-sm text-gray-600">
                Strategies for real estate investment in Las Vegas
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-4xl">🏘️</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Neighborhoods</h3>
              <p className="text-sm text-gray-600">
                Detailed guides to Las Vegas neighborhoods and communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Need Expert Real Estate Advice?
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Contact Las Vegas Nevada Home Sales for personalized guidance on buying, selling, or investing in Las Vegas real estate.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-purple-600 text-white hover:bg-purple-700">
              Contact Our Experts
            </Button>
            <Button href="/properties" intent="secondary" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Browse Properties
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 
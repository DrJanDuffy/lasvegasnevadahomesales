import { Metadata } from 'next'
import { PhotoAnalyzer } from '../../../components/PhotoAnalysis/PhotoAnalyzer'
import { SEOHead } from '../../../components/SEO/SEOHead'

export const metadata: Metadata = {
  title: 'AI Photo Analysis | Las Vegas Nevada Home Sales',
  description: 'Analyze your real estate photos with AI to optimize them for your Las Vegas Nevada Home Sales website. Get insights on brand fit, quality, SEO potential, and emotional impact.',
  keywords: 'AI photo analysis, real estate photography, Las Vegas real estate photos, photo optimization, SEO photo analysis',
}

export default function PhotoAnalysisPage() {
  return (
    <>
      <SEOHead
        title="AI Photo Analysis | Las Vegas Nevada Home Sales"
        description="Analyze your real estate photos with AI to optimize them for your Las Vegas Nevada Home Sales website. Get insights on brand fit, quality, SEO potential, and emotional impact."
        keywords="AI photo analysis, real estate photography, Las Vegas real estate photos, photo optimization, SEO photo analysis"
        canonical="/photo-analysis"
        ogImage="/images/og-photo-analysis.jpg"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              AI Photo Analysis for Real Estate
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Optimize your real estate photos with AI-powered analysis. Get insights on brand fit, quality, SEO potential, and emotional impact for your Las Vegas Nevada Home Sales website.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Analysis Tool */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <PhotoAnalyzer />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            What Our AI Analysis Covers
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Brand Fit</h3>
              <p className="text-sm text-gray-600">
                Evaluate how well the photo aligns with your luxury real estate brand
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">📸</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Quality Assessment</h3>
              <p className="text-sm text-gray-600">
                Analyze technical quality, lighting, composition, and improvements
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">SEO Potential</h3>
              <p className="text-sm text-gray-600">
                Get keywords, alt text suggestions, and title recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">💝</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Emotional Impact</h3>
              <p className="text-sm text-gray-600">
                Understand how the photo affects viewers emotionally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl">1️⃣</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Upload Photo</h3>
              <p className="text-sm text-gray-600">
                Provide the URL of your real estate photo for analysis
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">2️⃣</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">AI Analysis</h3>
              <p className="text-sm text-gray-600">
                Our AI analyzes the photo for multiple factors in seconds
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">3️⃣</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Get Results</h3>
              <p className="text-sm text-gray-600">
                Receive detailed insights and recommendations for optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Benefits for Real Estate Professionals
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Save Time</h3>
              <p className="text-sm text-gray-600">
                Get instant analysis instead of manually reviewing each photo
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Improve SEO</h3>
              <p className="text-sm text-gray-600">
                Get optimized alt text and keywords for better search rankings
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Enhance Brand</h3>
              <p className="text-sm text-gray-600">
                Ensure all photos align with your luxury real estate brand
              </p>
            </div>
            <div className="rounded-lg bg-yellow-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Increase Engagement</h3>
              <p className="text-sm text-gray-600">
                Use photos that create emotional connections with potential buyers
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Professional Quality</h3>
              <p className="text-sm text-gray-600">
                Maintain high standards across all your marketing materials
              </p>
            </div>
            <div className="rounded-lg bg-indigo-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Data-Driven Decisions</h3>
              <p className="text-sm text-gray-600">
                Make informed choices about which photos to use on your website
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Optimize Your Real Estate Photos?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Start analyzing your photos now and improve your Las Vegas Nevada Home Sales website performance.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a href="#photo-analyzer" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Try Photo Analysis
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 
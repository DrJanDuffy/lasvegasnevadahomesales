import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../../../components/Button/Button';
import { SEOHead } from '../../../../components/SEO/SEOHead';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
  featured: boolean;
  externalUrl: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/rss-feed`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json() as { success: boolean; posts?: BlogPost[] };
    
    if (data.success && data.posts) {
      return data.posts.find((post: BlogPost) => post.slug === slug) || null;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Las Vegas Nevada Home Sales`,
    description: post.excerpt,
    keywords: `Las Vegas real estate, ${post.category.toLowerCase()}, real estate news, market insights`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <SEOHead
        title={`${post.title} | Las Vegas Nevada Home Sales`}
        description={post.excerpt}
        keywords={`Las Vegas real estate, ${post.category.toLowerCase()}, real estate news, market insights`}
        canonical={`/blog/${post.slug}`}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gray-900 py-20">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
          </div>
          <div className="relative mx-auto max-w-4xl px-4">
            <div className="mb-4">
              <span className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white">
                {post.category}
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center space-x-6 text-gray-300">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed"
            />
          </div>
          
          {/* External Link */}
          <div className="mt-12 border-t pt-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Read the Full Article
              </h3>
              <p className="mb-4 text-gray-600">
                This article was originally published on Simplifying the Market. 
                Click below to read the complete version with additional insights and data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Read Full Article →
                </a>
                <Button
                  href="/blog"
                  variant="secondary"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Back to Blog
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts CTA */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Stay Updated with Market Insights
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Get the latest real estate news and market analysis delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/blog" className="bg-[#0A2540] text-white hover:bg-[#3A8DDE]">
                View All Articles
              </Button>
              <Button href="/contact" variant="secondary" className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

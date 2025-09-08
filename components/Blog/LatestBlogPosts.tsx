'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

interface LatestBlogPostsProps {
  limit?: number;
  showFeatured?: boolean;
  className?: string;
}

export function LatestBlogPosts({ 
  limit = 3, 
  showFeatured = false, 
  className = '' 
}: LatestBlogPostsProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/rss-feed');
        const data = await response.json() as { success: boolean; posts?: BlogPost[] };
        
        if (data.success) {
          let filteredPosts = data.posts || [];
          
          if (showFeatured) {
            filteredPosts = (data.posts || []).filter((post: BlogPost) => post.featured);
          }
          
          setPosts(filteredPosts.slice(0, limit));
        } else {
          setError('Failed to fetch blog posts');
        }
      } catch (err) {
        setError('Error loading blog posts');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit, showFeatured]);

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: limit }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <div className="h-4 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-red-600">Error loading blog posts: {error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-gray-600">No blog posts available at the moment.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              <p className="mb-4 text-gray-600">{post.excerpt}</p>
              <div className="flex space-x-2">
                <Link
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Read More →
                </Link>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

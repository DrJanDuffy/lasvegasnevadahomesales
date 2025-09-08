import { NextRequest, NextResponse } from 'next/server';
import { parseString } from 'xml2js';

interface RSSItem {
  title: string[];
  link: string[];
  description: string[];
  pubDate: string[];
  'content:encoded'?: string[];
  'media:content'?: Array<{
    $: {
      url: string;
      type?: string;
      medium?: string;
    };
  }>;
  'media:thumbnail'?: Array<{
    $: {
      url: string;
    };
  }>;
}

interface RSSFeed {
  rss: {
    channel: Array<{
      item: RSSItem[];
    }>;
  };
}

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

function extractImageFromContent(content: string): string {
  // Try to extract image from content
  const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  
  // Fallback to a default real estate image
  return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop';
}

function extractExcerpt(content: string, maxLength: number = 150): string {
  // Remove HTML tags and extract plain text
  const plainText = content.replace(/<[^>]*>/g, '');
  
  // Clean up extra whitespace
  const cleaned = plainText.replace(/\s+/g, ' ').trim();
  
  // Truncate to max length
  if (cleaned.length <= maxLength) {
    return cleaned;
  }
  
  // Find the last complete word within the limit
  const truncated = cleaned.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function categorizePost(title: string, content: string): string {
  const titleLower = title.toLowerCase();
  const contentLower = content.toLowerCase();
  
  if (titleLower.includes('selling') || contentLower.includes('seller')) {
    return 'Selling Guide';
  }
  if (titleLower.includes('buying') || titleLower.includes('buyer') || contentLower.includes('first-time')) {
    return 'Buying Guide';
  }
  if (titleLower.includes('investment') || contentLower.includes('investment')) {
    return 'Investment';
  }
  if (titleLower.includes('market') || titleLower.includes('forecast') || titleLower.includes('trend')) {
    return 'Market Analysis';
  }
  if (titleLower.includes('condo') || titleLower.includes('neighborhood')) {
    return 'Neighborhood Guide';
  }
  
  return 'Market Analysis'; // Default category
}

export async function GET(request: NextRequest) {
  try {
    const feedUrl = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';
    
    // Fetch the RSS feed
    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Las Vegas Nevada Home Sales Blog Bot 1.0',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }
    
    const xmlData = await response.text();
    
    // Parse XML
    const result = await new Promise<RSSFeed>((resolve, reject) => {
      parseString(xmlData, (err, result) => {
        if (err) reject(err);
        else resolve(result as RSSFeed);
      });
    });
    
    if (!result.rss?.channel?.[0]?.item) {
      throw new Error('Invalid RSS feed structure');
    }
    
    const items = result.rss.channel[0].item;
    const blogPosts: BlogPost[] = [];
    
    // Process the latest 10 items
    const latestItems = items.slice(0, 10);
    
    for (const item of latestItems) {
      const title = item.title?.[0] || 'Untitled';
      const link = item.link?.[0] || '#';
      const description = item.description?.[0] || '';
      const pubDate = item.pubDate?.[0] || new Date().toISOString();
      const dateString = new Date(pubDate).toISOString().split('T')[0];
      const content = item['content:encoded']?.[0] || description || '';
      
      // Extract image - try description first, then content
      let image = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop';
      
      // First try to extract from description (which often has the featured image)
      const descriptionImage = extractImageFromContent(description);
      if (descriptionImage !== 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop') {
        image = descriptionImage;
      } else if (item['media:content']?.[0]?.$.url) {
        image = item['media:content'][0].$.url;
      } else if (item['media:thumbnail']?.[0]?.$.url) {
        image = item['media:thumbnail'][0].$.url;
      } else {
        image = extractImageFromContent(content);
      }
      
      const blogPost: BlogPost = {
        id: `rss-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        title,
        excerpt: extractExcerpt(description),
        content,
        author: 'Simplifying the Market',
        date: dateString as string,
        category: categorizePost(title, content),
        readTime: estimateReadTime(content),
        image,
        slug: generateSlug(title),
        featured: false,
        externalUrl: link,
      };
      
      blogPosts.push(blogPost);
    }
    
    // Mark the first 3 as featured for homepage display
    blogPosts.slice(0, 3).forEach(post => {
      post.featured = true;
    });
    
    return NextResponse.json({
      success: true,
      posts: blogPosts,
      lastUpdated: new Date().toISOString(),
    });
    
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch RSS feed',
        posts: [],
      },
      { status: 500 }
    );
  }
}

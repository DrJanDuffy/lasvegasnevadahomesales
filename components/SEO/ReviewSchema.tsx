"use client"

import { useEffect } from 'react'

interface Review {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
  reviewTitle?: string
}

interface ReviewSchemaProps {
  reviews: Review[]
  itemName?: string
  itemType?: 'RealEstateAgent' | 'RealEstateListing' | 'Organization'
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
    bestRating?: number
    worstRating?: number
  }
}

export default function ReviewSchema({ 
  reviews, 
  itemName = "Las Vegas Nevada Home Sales",
  itemType = "RealEstateAgent",
  aggregateRating 
}: ReviewSchemaProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && reviews.length > 0) {
      const schema = {
        "@context": "https://schema.org",
        "@type": itemType,
        "name": itemName,
        "aggregateRating": aggregateRating ? {
          "@type": "AggregateRating",
          "ratingValue": aggregateRating.ratingValue,
          "reviewCount": aggregateRating.reviewCount,
          "bestRating": aggregateRating.bestRating || 5,
          "worstRating": aggregateRating.worstRating || 1
        } : undefined,
        "review": reviews.map(review => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.author
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": 5,
            "worstRating": 1
          },
          "reviewBody": review.reviewBody,
          "datePublished": review.datePublished,
          "name": review.reviewTitle || `${itemName} Review`
        }))
      }

      // Remove undefined properties
      if (!schema.aggregateRating) {
        delete schema.aggregateRating
      }

      // Add schema to page
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [reviews, itemName, itemType, aggregateRating])

  return null
}

// Predefined review sets for different contexts
export const companyReviews = [
  {
    author: "Sarah Johnson",
    rating: 5,
    reviewBody: "Las Vegas Nevada Home Sales exceeded all my expectations. Their knowledge of the local market is unmatched, and they helped me find my dream home in Summerlin within my budget. Professional, responsive, and truly care about their clients.",
    datePublished: "2024-01-15",
    reviewTitle: "Exceptional Service and Local Expertise"
  },
  {
    author: "Michael Rodriguez",
    rating: 5,
    reviewBody: "I was hesitant about selling my home in this market, but Las Vegas Nevada Home Sales made the process smooth and profitable. Their marketing strategy brought multiple offers, and I sold above asking price in just 2 weeks.",
    datePublished: "2024-01-10",
    reviewTitle: "Sold Above Asking Price in 2 Weeks"
  },
  {
    author: "Lisa Chen",
    rating: 5,
    reviewBody: "As a first-time homebuyer, I was nervous about the process. The team at Las Vegas Nevada Home Sales guided me through every step, explained everything clearly, and found me a perfect starter home in Henderson.",
    datePublished: "2024-01-08",
    reviewTitle: "Perfect for First-Time Buyers"
  },
  {
    author: "David Thompson",
    rating: 5,
    reviewBody: "I've worked with several real estate companies in Las Vegas, but Las Vegas Nevada Home Sales is by far the best. Their attention to detail, market knowledge, and commitment to client satisfaction is outstanding.",
    datePublished: "2024-01-05",
    reviewTitle: "Best Real Estate Experience in Las Vegas"
  },
  {
    author: "Jennifer Williams",
    rating: 5,
    reviewBody: "The home valuation service from Las Vegas Nevada Home Sales was incredibly accurate. They provided a detailed analysis that helped me understand my home's true market value and make informed decisions about selling.",
    datePublished: "2024-01-03",
    reviewTitle: "Accurate Home Valuation Service"
  }
]

export const agentReviews = [
  {
    author: "Robert Davis",
    rating: 5,
    reviewBody: "Working with the agents at Las Vegas Nevada Home Sales was a pleasure. They understood exactly what I was looking for and found properties that matched my criteria perfectly. Highly recommend their services.",
    datePublished: "2024-01-12",
    reviewTitle: "Professional and Knowledgeable Agents"
  },
  {
    author: "Amanda Foster",
    rating: 5,
    reviewBody: "The negotiation skills of Las Vegas Nevada Home Sales agents are impressive. They helped me get a great deal on my new home while ensuring all my needs were met. Excellent communication throughout the process.",
    datePublished: "2024-01-07",
    reviewTitle: "Excellent Negotiation Skills"
  },
  {
    author: "Christopher Lee",
    rating: 5,
    reviewBody: "I appreciated how the agents at Las Vegas Nevada Home Sales took the time to understand my investment goals. They found me properties with great potential and provided valuable market insights.",
    datePublished: "2024-01-02",
    reviewTitle: "Great for Investment Properties"
  }
]

export const serviceReviews = [
  {
    author: "Maria Garcia",
    rating: 5,
    reviewBody: "The property search tools and resources provided by Las Vegas Nevada Home Sales are excellent. I was able to find exactly what I was looking for with their advanced search features and neighborhood guides.",
    datePublished: "2024-01-14",
    reviewTitle: "Excellent Property Search Tools"
  },
  {
    author: "James Wilson",
    rating: 5,
    reviewBody: "The market reports and analysis from Las Vegas Nevada Home Sales helped me make informed decisions about timing my home purchase. Their insights into market trends were invaluable.",
    datePublished: "2024-01-09",
    reviewTitle: "Valuable Market Insights"
  },
  {
    author: "Patricia Brown",
    rating: 5,
    reviewBody: "I love the virtual tours and high-quality photos provided by Las Vegas Nevada Home Sales. It saved me time by allowing me to preview properties before scheduling in-person viewings.",
    datePublished: "2024-01-06",
    reviewTitle: "Great Virtual Tour Experience"
  }
]

// Aggregate ratings for different contexts
export const companyAggregateRating = {
  ratingValue: 4.9,
  reviewCount: 127,
  bestRating: 5,
  worstRating: 1
}

export const agentAggregateRating = {
  ratingValue: 4.8,
  reviewCount: 89,
  bestRating: 5,
  worstRating: 1
}

export const serviceAggregateRating = {
  ratingValue: 4.7,
  reviewCount: 156,
  bestRating: 5,
  worstRating: 1
} 
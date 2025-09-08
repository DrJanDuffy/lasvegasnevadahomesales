import React from 'react';

export const serviceReviews = [
  {
    author: 'Sarah Johnson',
    rating: 5,
    text: 'Excellent service in Las Vegas home sales',
    date: '2024-01-15',
  },
];

export const serviceAggregateRating = {
  ratingValue: 4.8,
  reviewCount: 127,
};

// Predefined review sets for different contexts
export const companyReviews = [
  {
    author: 'Sarah Johnson',
    rating: 5,
    text: 'Las Vegas Nevada Home Sales exceeded all my expectations. Their knowledge of the local market is unmatched, and they helped me find my dream home in Summerlin within my budget. Professional, responsive, and truly care about their clients.',
    date: '2024-01-15',
  },
  {
    author: 'Michael Rodriguez',
    rating: 5,
    text: 'I was hesitant about selling my home in this market, but Las Vegas Nevada Home Sales made the process smooth and profitable. Their marketing strategy brought multiple offers, and I sold above asking price in just 2 weeks.',
    date: '2024-01-10',
  },
  {
    author: 'Lisa Chen',
    rating: 5,
    text: 'As a first-time homebuyer, I was nervous about the process. The team at Las Vegas Nevada Home Sales guided me through every step, explained everything clearly, and found me a perfect starter home in Henderson.',
    date: '2024-01-08',
  },
  {
    author: 'David Thompson',
    rating: 5,
    text: "I've worked with several real estate companies in Las Vegas, but Las Vegas Nevada Home Sales is by far the best. Their attention to detail, market knowledge, and commitment to client satisfaction is outstanding.",
    date: '2024-01-05',
  },
  {
    author: 'Jennifer Williams',
    rating: 5,
    text: "The home valuation service from Las Vegas Nevada Home Sales was incredibly accurate. They provided a detailed analysis that helped me understand my home's true market value and make informed decisions about selling.",
    date: '2024-01-03',
  },
];

export const agentReviews = [
  {
    author: 'Robert Davis',
    rating: 5,
    text: 'Working with the agents at Las Vegas Nevada Home Sales was a pleasure. They understood exactly what I was looking for and found properties that matched my criteria perfectly. Highly recommend their services.',
    date: '2024-01-12',
  },
  {
    author: 'Amanda Foster',
    rating: 5,
    text: 'The negotiation skills of Las Vegas Nevada Home Sales agents are impressive. They helped me get a great deal on my new home while ensuring all my needs were met. Excellent communication throughout the process.',
    date: '2024-01-07',
  },
  {
    author: 'Christopher Lee',
    rating: 5,
    text: 'I appreciated how the agents at Las Vegas Nevada Home Sales took the time to understand my investment goals. They found me properties with great potential and provided valuable market insights.',
    date: '2024-01-02',
  },
];

// Aggregate ratings for different contexts
export const companyAggregateRating = {
  ratingValue: 4.9,
  reviewCount: 127,
};

export const agentAggregateRating = {
  ratingValue: 4.8,
  reviewCount: 89,
};

interface ReviewSchemaProps {
  reviews?: typeof serviceReviews;
  aggregateRating?: typeof serviceAggregateRating;
  itemName?: string;
  itemType?: string;
}

export default function ReviewSchema({
  reviews = serviceReviews,
  aggregateRating = serviceAggregateRating,
  itemName = 'Las Vegas Nevada Home Sales',
  itemType = 'RealEstateAgent',
}: ReviewSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': itemType,
    name: itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      reviewRating: { '@type': 'Rating', ratingValue: review.rating },
      reviewBody: review.text,
      datePublished: review.date,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export { ReviewSchema };

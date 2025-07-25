import React from 'react';

export const serviceReviews = [
  {
    author: "Sarah Johnson",
    rating: 5,
    text: "Excellent service in Las Vegas home sales",
    date: "2024-01-15"
  }
];

export const serviceAggregateRating = {
  ratingValue: 4.8,
  reviewCount: 127
};

interface ReviewSchemaProps {
  reviews?: typeof serviceReviews;
  aggregateRating?: typeof serviceAggregateRating;
}

export default function ReviewSchema({ 
  reviews = serviceReviews, 
  aggregateRating = serviceAggregateRating 
}: ReviewSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": review.author },
      "reviewRating": { "@type": "Rating", "ratingValue": review.rating },
      "reviewBody": review.text,
      "datePublished": review.date
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export { ReviewSchema }; 
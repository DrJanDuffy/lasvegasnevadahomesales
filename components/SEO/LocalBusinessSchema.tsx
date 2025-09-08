'use client';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  paymentAccepted?: string[];
  currenciesAccepted?: string[];
  areaServed?: string[];
  serviceArea?: {
    '@type': 'GeoCircle';
    geoMidpoint: {
      '@type': 'GeoCoordinates';
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
  hasOfferCatalog?: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: Array<{
      '@type': 'Offer';
      itemOffered: {
        '@type': 'Service';
        name: string;
        description: string;
      };
    }>;
  };
}

export default function LocalBusinessSchema({
  name = 'Las Vegas Nevada Home Sales',
  description = 'Premier Las Vegas real estate agency specializing in luxury homes, family properties, and investment opportunities across Summerlin, Henderson, Green Valley, and Downtown Las Vegas.',
  url = 'https://lasvegasnevadahomesales.com',
  telephone = '+1-702-555-0123',
  email = 'info@lasvegasnevadahomesales.com',
  address = {
    streetAddress: '123 Las Vegas Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    addressCountry: 'US',
  },
  geo = {
    latitude: 36.1699,
    longitude: -115.1398,
  },
  openingHours = ['Mo-Fr 09:00-18:00', 'Sa 09:00-17:00', 'Su 10:00-16:00'],
  priceRange = '$$',
  paymentAccepted = ['Cash', 'Check', 'Credit Card', 'Bank Transfer'],
  currenciesAccepted = ['USD'],
  areaServed = ['Las Vegas', 'Henderson', 'Summerlin', 'Green Valley', 'North Las Vegas', 'Boulder City'],
  serviceArea = {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    geoRadius: '50',
  },
  hasOfferCatalog = {
    '@type': 'OfferCatalog',
    name: 'Real Estate Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Home Buying Services',
          description: 'Expert guidance for first-time and experienced home buyers in Las Vegas',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Home Selling Services',
          description: 'Professional home selling services with market analysis and pricing strategy',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Investment Property Services',
          description: 'Real estate investment opportunities and property management services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Market Analysis',
          description: 'Comprehensive market reports and property valuations for Las Vegas area',
        },
      },
    ],
  },
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name,
    description,
    url,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...geo,
    },
    openingHours,
    priceRange,
    paymentAccepted,
    currenciesAccepted,
    areaServed: areaServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    serviceArea,
    hasOfferCatalog,
    sameAs: [
      'https://www.facebook.com/lasvegasnevadahomesales',
      'https://www.instagram.com/lasvegasnevadahomesales',
      'https://www.linkedin.com/company/lasvegasnevadahomesales',
    ],
    image: 'https://lasvegasnevadahomesales.com/images/logo.jpg',
    logo: 'https://lasvegasnevadahomesales.com/images/logo.jpg',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export { LocalBusinessSchema };

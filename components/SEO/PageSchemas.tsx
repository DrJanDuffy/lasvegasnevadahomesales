'use client';

import { StructuredData } from './StructuredData';

// Homepage Schema
export function HomepageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Las Vegas Nevada Home Sales',
    description: 'Premier Las Vegas real estate agency specializing in luxury homes, family properties, and investment opportunities across Summerlin, Henderson, Green Valley, and Downtown Las Vegas.',
    url: 'https://lasvegasnevadahomesales.com',
    telephone: '+1-702-500-1981',
    email: 'info@lasvegasnevadahomesales.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Las Vegas Blvd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-17:00', 'Su 10:00-16:00'],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: ['USD'],
    areaServed: ['Las Vegas', 'Henderson', 'Summerlin', 'Green Valley', 'North Las Vegas', 'Boulder City'],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.1699,
        longitude: -115.1398,
      },
      geoRadius: '50',
    },
    hasOfferCatalog: {
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
    sameAs: [
      'https://www.facebook.com/lasvegasnevadahomesales',
      'https://www.instagram.com/lasvegasnevadahomesales',
      'https://www.linkedin.com/company/lasvegasnevadahomesales',
    ],
    image: 'https://lasvegasnevadahomesales.com/images/logo.jpg',
    logo: 'https://lasvegasnevadahomesales.com/images/logo.jpg',
  };

  return <StructuredData data={schema} />;
}

// Properties Page Schema
export function PropertiesPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Las Vegas Homes for Sale | Property Search & Listings',
    description: 'Search thousands of Las Vegas homes for sale. Filter by price, location, bedrooms, and more. Find your dream home in Las Vegas, Henderson, Summerlin, and surrounding areas.',
    url: 'https://lasvegasnevadahomesales.com/properties',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Las Vegas Real Estate Listings',
      description: 'Comprehensive list of homes for sale in Las Vegas area',
      numberOfItems: '1000+',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://lasvegasnevadahomesales.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Properties',
          item: 'https://lasvegasnevadahomesales.com/properties',
        },
      ],
    },
    publisher: {
      '@type': 'RealEstateAgent',
      name: 'Las Vegas Nevada Home Sales',
      url: 'https://lasvegasnevadahomesales.com',
    },
  };

  return <StructuredData data={schema} />;
}

// Neighborhood Page Schema
export function NeighborhoodPageSchema({ 
  neighborhood, 
  description, 
  averagePrice, 
  population, 
  medianAge 
}: {
  neighborhood: string;
  description: string;
  averagePrice: string;
  population?: string;
  medianAge?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${neighborhood} Las Vegas Real Estate`,
    description,
    url: `https://lasvegasnevadahomesales.com/neighborhoods/${neighborhood.toLowerCase().replace(/\s+/g, '-')}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Average Home Price',
        value: averagePrice,
      },
      ...(population ? [{
        '@type': 'PropertyValue',
        name: 'Population',
        value: population,
      }] : []),
      ...(medianAge ? [{
        '@type': 'PropertyValue',
        name: 'Median Age',
        value: medianAge,
      }] : []),
    ],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://lasvegasnevadahomesales.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Neighborhoods',
          item: 'https://lasvegasnevadahomesales.com/neighborhoods',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: neighborhood,
          item: `https://lasvegasnevadahomesales.com/neighborhoods/${neighborhood.toLowerCase().replace(/\s+/g, '-')}`,
        },
      ],
    },
  };

  return <StructuredData data={schema} />;
}

// Blog Post Schema
export function BlogPostSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: image,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Las Vegas Nevada Home Sales',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lasvegasnevadahomesales.com/images/logo.jpg',
      },
    },
    datePublished,
    dateModified,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://lasvegasnevadahomesales.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://lasvegasnevadahomesales.com/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: url,
        },
      ],
    },
  };

  return <StructuredData data={schema} />;
}

// Service Page Schema
export function ServicePageSchema({
  serviceName,
  description,
  serviceType,
  url,
}: {
  serviceName: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Las Vegas Nevada Home Sales',
      url: 'https://lasvegasnevadahomesales.com',
    },
    serviceType,
    url,
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
    },
    offers: {
      '@type': 'Offer',
      description: 'Professional real estate services',
      priceRange: '$$',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://lasvegasnevadahomesales.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://lasvegasnevadahomesales.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: serviceName,
          item: url,
        },
      ],
    },
  };

  return <StructuredData data={schema} />;
}

// Contact Page Schema
export function ContactPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Las Vegas Nevada Home Sales',
    description: 'Get in touch with our Las Vegas real estate experts. Contact us for buying, selling, or investment property services.',
    url: 'https://lasvegasnevadahomesales.com/contact',
    mainEntity: {
      '@type': 'RealEstateAgent',
      name: 'Las Vegas Nevada Home Sales',
      telephone: '+1-702-500-1981',
      email: 'info@lasvegasnevadahomesales.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Las Vegas Blvd',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89101',
        addressCountry: 'US',
      },
      openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-17:00', 'Su 10:00-16:00'],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://lasvegasnevadahomesales.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contact',
          item: 'https://lasvegasnevadahomesales.com/contact',
        },
      ],
    },
  };

  return <StructuredData data={schema} />;
}

// FAQ Page Schema
export function FAQPageSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={schema} />;
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Las Vegas Nevada Home Sales',
    url: 'https://lasvegasnevadahomesales.com',
    description: 'Find your dream home in Las Vegas, Nevada. Browse properties in Summerlin, Henderson, Green Valley, and Downtown Las Vegas.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://lasvegasnevadahomesales.com/properties?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Las Vegas Nevada Home Sales',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lasvegasnevadahomesales.com/images/logo.jpg',
      },
    },
  };

  return <StructuredData data={schema} />;
}

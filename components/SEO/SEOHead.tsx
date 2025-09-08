'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://lasvegasnevadahomesales.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false,
}: SEOHeadProps) {
  const baseUrl = 'https://lasvegasnevadahomesales.com';
  const fullUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Las Vegas Nevada Home Sales" />
      <meta
        name="robots"
        content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Las Vegas Nevada Home Sales" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@lasvegasrealtor" />
      <meta name="twitter:creator" content="@lasvegasrealtor" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0A2540" />
      <meta name="msapplication-TileColor" content="#0A2540" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
}

// Predefined structured data for real estate
export const realEstateStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Las Vegas Nevada Home Sales',
  description:
    'Premier real estate services in Las Vegas, Nevada. Find your dream home in Summerlin, Henderson, Green Valley, and Downtown Las Vegas.',
  url: 'https://lasvegasnevadahomesales.com',
  telephone: '+1-702-555-0123',
  email: 'info@lasvegasnevadahomesales.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1234 Las Vegas Blvd',
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
  areaServed: [
    {
      '@type': 'City',
      name: 'Las Vegas',
    },
    {
      '@type': 'City',
      name: 'Henderson',
    },
    {
      '@type': 'City',
      name: 'Summerlin',
    },
  ],
  serviceType: 'Real Estate Sales',
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-16:00',
};

export const propertyStructuredData = (property: {
  name: string;
  description: string;
  price: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: property.name,
  description: property.description,
  image: property.image,
  offers: {
    '@type': 'Offer',
    price: property.price.replace(/[^0-9]/g, ''),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: property.address,
    addressLocality: property.city,
    addressRegion: property.state,
    postalCode: property.zip,
    addressCountry: 'US',
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Bedrooms',
      value: property.beds,
    },
    {
      '@type': 'PropertyValue',
      name: 'Bathrooms',
      value: property.baths,
    },
    {
      '@type': 'PropertyValue',
      name: 'Square Feet',
      value: property.sqft,
    },
  ],
});

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Las Vegas Nevada Home Sales',
  url: 'https://lasvegasnevadahomesales.com',
  logo: 'https://lasvegasnevadahomesales.com/logo.png',
  sameAs: [
    'https://www.facebook.com/lasvegasnevadahomesales',
    'https://www.linkedin.com/company/lasvegasnevadahomesales',
    'https://www.instagram.com/lasvegasnevadahomesales',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-702-555-0123',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
  },
};

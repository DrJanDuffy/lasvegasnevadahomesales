"use client"

interface StructuredDataProps {
  data: object
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

// Real Estate specific structured data schemas
export const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Las Vegas Nevada Home Sales",
  "description": "Premier real estate services in Las Vegas, Nevada. Find your dream home in Summerlin, Henderson, Green Valley, and Downtown Las Vegas.",
  "url": "https://lasvegasnevadahomesales.com",
  "telephone": "+1-702-555-0123",
  "email": "info@lasvegasnevadahomesales.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Las Vegas Blvd",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1699,
    "longitude": -115.1398
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Las Vegas"
    },
    {
      "@type": "City", 
      "name": "Henderson"
    },
    {
      "@type": "City",
      "name": "Summerlin"
    }
  ],
  "serviceType": "Real Estate Sales",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00"
}

export const propertySchema = (property: {
  name: string
  description: string
  price: string
  address: string
  city: string
  state: string
  zip: string
  beds: number
  baths: number
  sqft: number
  image: string
  propertyType: string
  yearBuilt?: number
  lotSize?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": property.name,
  "description": property.description,
  "image": property.image,
  "category": property.propertyType,
  "offers": {
    "@type": "Offer",
    "price": property.price.replace(/[^0-9]/g, ''),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString()
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": property.address,
    "addressLocality": property.city,
    "addressRegion": property.state,
    "postalCode": property.zip,
    "addressCountry": "US"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Bedrooms",
      "value": property.beds
    },
    {
      "@type": "PropertyValue", 
      "name": "Bathrooms",
      "value": property.baths
    },
    {
      "@type": "PropertyValue",
      "name": "Square Feet",
      "value": property.sqft
    },
    ...(property.yearBuilt ? [{
      "@type": "PropertyValue",
      "name": "Year Built",
      "value": property.yearBuilt
    }] : []),
    ...(property.lotSize ? [{
      "@type": "PropertyValue",
      "name": "Lot Size",
      "value": property.lotSize
    }] : [])
  ]
})

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Las Vegas Nevada Home Sales",
  "url": "https://lasvegasnevadahomesales.com",
  "logo": "https://lasvegasnevadahomesales.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/lasvegasnevadahomesales",
    "https://www.linkedin.com/company/lasvegasnevadahomesales",
    "https://www.instagram.com/lasvegasnevadahomesales"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-702-555-0123",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Las Vegas Blvd",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89101",
    "addressCountry": "US"
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Las Vegas Nevada Home Sales",
  "description": "Premier real estate services in Las Vegas, Nevada",
  "url": "https://lasvegasnevadahomesales.com",
  "telephone": "+1-702-555-0123",
  "email": "info@lasvegasnevadahomesales.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Las Vegas Blvd",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1699,
    "longitude": -115.1398
  },
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 10:00-16:00"
  ],
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Las Vegas"
    },
    {
      "@type": "City",
      "name": "Henderson"
    },
    {
      "@type": "City",
      "name": "Summerlin"
    }
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Las Vegas Nevada Home Sales",
  "url": "https://lasvegasnevadahomesales.com",
  "description": "Find your dream home in Las Vegas, Nevada. Browse properties in Summerlin, Henderson, Green Valley, and Downtown Las Vegas.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://lasvegasnevadahomesales.com/properties/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Las Vegas Nevada Home Sales",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lasvegasnevadahomesales.com/logo.png"
    }
  }
}

export const breadcrumbSchema = (items: Array<{ name: string; item?: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
}) 
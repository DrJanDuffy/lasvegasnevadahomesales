'use client'

import { useEffect } from 'react'

interface SchemaMarkupProps {
  agentName?: string
  agentImage?: string
  phone?: string
  email?: string
  address?: {
    street: string
    city: string
    state: string
    zip: string
  }
  businessName?: string
  logo?: string
  website?: string
  rating?: number
  reviewCount?: number
  description?: string
  primaryCategory?: string
  secondaryCategories?: string[]
  openingHours?: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
  }
}

export function SchemaMarkup({
  agentName = 'Dr. Jan Duffy',
  agentImage = 'https://lasvegasnevadahomesales.com/dr-jan-duffy-photo.jpg',
  phone = '(702) 500-1981',
  email = 'drjanduffy@lasvegasnevadahomesales.com',
  address = {
    street: '10980 W Charleston Blvd, Suite 180',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89135'
  },
  businessName = 'Las Vegas Nevada Home Sales | Homes by Dr. Jan Duffy',
  logo = 'https://lasvegasnevadahomesales.com/logo.jpg',
  website = 'https://lasvegasnevadahomesales.com',
  rating = 4.9,
  reviewCount = 127,
  description = 'Expert Summerlin REALTOR Dr. Jan Duffy specializes in luxury homes & investment properties. Office in Downtown Summerlin Suite 180.',
  primaryCategory = 'Real Estate Agent',
  secondaryCategories = ['Real Estate Consultant', 'Property Management Company'],
  openingHours = {
    monday: '08:00-18:00',
    tuesday: '08:00-18:00',
    wednesday: '08:00-18:00',
    thursday: '08:00-18:00',
    friday: '08:00-18:00',
    saturday: '09:00-17:00',
    sunday: '10:00-16:00'
  }
}: SchemaMarkupProps) {
  useEffect(() => {
    // Real Estate Agent Schema
    const agentSchema = {
      '@context': 'https://schema.org',
      '@type': ['RealEstateAgent', 'LocalBusiness'],
      name: businessName,
      alternateName: ['Dr. Jan Duffy REALTOR', 'Las Vegas Nevada Home Sales'],
      image: agentImage,
      logo: logo,
      telephone: phone,
      email: email,
      url: website,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zip,
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.1547,
        longitude: -115.3267
      },
      founder: {
        '@type': 'Person',
        name: agentName,
        jobTitle: 'REALTOR',
        telephone: phone,
        email: email,
        hasCredential: 'Nevada Real Estate License #0197614',
        worksFor: {
          '@type': 'Organization',
          name: 'Berkshire Hathaway HomeServices Nevada',
          url: 'https://bhhsnv.com'
        }
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'Berkshire Hathaway HomeServices Nevada',
        url: 'https://bhhsnv.com'
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Las Vegas',
          addressRegion: 'Nevada'
        },
        {
          '@type': 'Neighborhood',
          name: 'Downtown Summerlin'
        },
        {
          '@type': 'Neighborhood',
          name: 'Red Rock Country Club'
        },

      ],
      knowsAbout: [
        'Summerlin Real Estate',
        'Las Vegas Luxury Homes',
        'Downtown Summerlin Properties',
        'Nevada Investment Properties'
      ],
      memberOf: [
        {
          '@type': 'Organization',
          name: 'Las Vegas REALTORS'
        },
        {
          '@type': 'Organization',
          name: 'Berkshire Hathaway HomeServices Nevada'
        }
      ],
      openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-17:00, Su 10:00-16:00',
      priceRange: '$$',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Real Estate Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Home Valuation',
              description: 'Professional property evaluation and market analysis'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Buyer Representation',
              description: 'Expert guidance for home buyers in Las Vegas'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Seller Representation',
              description: 'Comprehensive marketing and selling services'
            }
          }
        ]
      }
    }

    // Local Business Schema
    const businessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: businessName,
      description: description,
      image: logo,
      '@id': website,
      url: website,
      telephone: phone,
      email: email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zip,
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.1547,
        longitude: -115.3267
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Monday',
          opens: openingHours.monday?.split('-')[0] || '08:00',
          closes: openingHours.monday?.split('-')[1] || '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Tuesday',
          opens: openingHours.tuesday?.split('-')[0] || '08:00',
          closes: openingHours.tuesday?.split('-')[1] || '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Wednesday',
          opens: openingHours.wednesday?.split('-')[0] || '08:00',
          closes: openingHours.wednesday?.split('-')[1] || '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Thursday',
          opens: openingHours.thursday?.split('-')[0] || '08:00',
          closes: openingHours.thursday?.split('-')[1] || '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Friday',
          opens: openingHours.friday?.split('-')[0] || '08:00',
          closes: openingHours.friday?.split('-')[1] || '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: openingHours.saturday?.split('-')[0] || '09:00',
          closes: openingHours.saturday?.split('-')[1] || '17:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: openingHours.sunday?.split('-')[0] || '10:00',
          closes: openingHours.sunday?.split('-')[1] || '16:00'
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating.toString(),
        reviewCount: reviewCount.toString()
      },
      priceRange: '$$',
      paymentAccepted: ['Cash', 'Check', 'Credit Card'],
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'Nevada'
      },
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 36.1547,
          longitude: -115.3267
        },
        geoRadius: '50000'
      },
      category: primaryCategory,
      additionalType: secondaryCategories
    }

    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: businessName,
      url: website,
      logo: logo,
      parentOrganization: {
        '@type': 'Organization',
        name: 'Berkshire Hathaway HomeServices Nevada',
        url: 'https://bhhsnv.com'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: phone,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://www.facebook.com/yourbusiness',
        'https://www.linkedin.com/company/yourbusiness',
        'https://www.instagram.com/yourbusiness'
      ]
    }

    // WebSite Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: businessName,
      url: website,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${website}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: website
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${website}/services`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Home Valuation',
          item: `${website}/home-valuation`
        }
      ]
    }

    // Add all schemas to the page
    const schemas = [agentSchema, businessSchema, organizationSchema, websiteSchema, breadcrumbSchema]
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      script.id = `schema-${index}`
      document.head.appendChild(script)
    })

    return () => {
      // Cleanup schemas on unmount
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`)
        if (script) {
          script.remove()
        }
      })
    }
  }, [
    agentName,
    agentImage,
    phone,
    email,
    address,
    businessName,
    logo,
    website,
    rating,
    reviewCount,
    description,
    primaryCategory,
    secondaryCategories,
    openingHours
  ])

  return null
} 
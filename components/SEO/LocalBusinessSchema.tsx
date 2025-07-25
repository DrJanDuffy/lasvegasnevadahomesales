"use client"

import { useEffect } from 'react'

interface LocalBusinessSchemaProps {
  name?: string
  description?: string
  url?: string
  telephone?: string
  email?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: string[]
  priceRange?: string
  paymentAccepted?: string[]
  currenciesAccepted?: string[]
  areaServed?: string[]
  serviceArea?: {
    "@type": "GeoCircle"
    geoMidpoint: {
      "@type": "GeoCoordinates"
      latitude: number
      longitude: number
    }
    geoRadius: string
  }
  hasOfferCatalog?: {
    "@type": "OfferCatalog"
    name: string
    itemListElement: Array<{
      "@type": "Offer"
      itemOffered: {
        "@type": "Service"
        name: string
        description: string
      }
    }>
  }
}

export default function LocalBusinessSchema({
  name = "Las Vegas Nevada Home Sales",
  description = "Premier real estate services in Las Vegas, Nevada. Expert agents specializing in residential and commercial properties throughout the Las Vegas Valley.",
  url = "https://lasvegasnevadahomesales.com",
  telephone = "(702) 555-0123",
  email = "info@lasvegasnevadahomesales.com",
  address = {
    streetAddress: "1234 Las Vegas Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89101",
    addressCountry: "US"
  },
  geo = {
    latitude: 36.1699,
    longitude: -115.1398
  },
  openingHours = [
    "Mo-Fr 09:00-18:00",
    "Sa 10:00-16:00",
    "Su By Appointment"
  ],
  priceRange = "$$",
  paymentAccepted = ["Cash", "Check", "Credit Card", "Bank Transfer"],
  currenciesAccepted = ["USD"],
  areaServed = [
    "Las Vegas, NV",
    "Summerlin, NV", 
    "Henderson, NV",
    "Green Valley, NV",
    "Centennial Hills, NV",
    "Downtown Las Vegas, NV"
  ],
  serviceArea = {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 36.1699,
      longitude: -115.1398
    },
    geoRadius: "50 miles"
  },
  hasOfferCatalog = {
    "@type": "OfferCatalog",
    name: "Real Estate Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Buying Services",
          description: "Complete home buying assistance including property search, negotiation, and closing support."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Selling Services",
          description: "Comprehensive home selling services including market analysis, marketing, and transaction management."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Valuation",
          description: "Professional home valuation and market analysis services."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Property Services",
          description: "Real estate investment consulting and property management services."
        }
      }
    ]
  }
}: LocalBusinessSchemaProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const schema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": name,
        "description": description,
        "url": url,
        "telephone": telephone,
        "email": email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": address.streetAddress,
          "addressLocality": address.addressLocality,
          "addressRegion": address.addressRegion,
          "postalCode": address.postalCode,
          "addressCountry": address.addressCountry
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": geo.latitude,
          "longitude": geo.longitude
        },
        "openingHours": openingHours,
        "priceRange": priceRange,
        "paymentAccepted": paymentAccepted,
        "currenciesAccepted": currenciesAccepted,
        "areaServed": areaServed.map(area => ({
          "@type": "City",
          "name": area
        })),
        "serviceArea": serviceArea,
        "hasOfferCatalog": hasOfferCatalog,
        "sameAs": [
          "https://www.facebook.com/lasvegasnevadahomesales",
          "https://www.linkedin.com/company/lasvegasnevadahomesales",
          "https://www.instagram.com/lasvegasnevadahomesales"
        ],
        "image": [
          "https://lasvegasnevadahomesales.com/images/office-exterior.jpg",
          "https://lasvegasnevadahomesales.com/images/team-photo.jpg",
          "https://lasvegasnevadahomesales.com/images/las-vegas-skyline.jpg"
        ],
        "logo": "https://lasvegasnevadahomesales.com/images/logo.png",
        "foundingDate": "2020",
        "numberOfEmployees": "15",
        "slogan": "Your Trusted Real Estate Experts in Las Vegas",
        "knowsAbout": [
          "Las Vegas Real Estate Market",
          "Residential Property Sales",
          "Commercial Real Estate",
          "Property Investment",
          "Market Analysis",
          "Property Valuation",
          "Real Estate Law",
          "Mortgage Financing"
        ],
        "award": [
          "Top Producer Award 2023",
          "Best of Las Vegas Real Estate 2023",
          "5-Star Client Satisfaction Rating"
        ],
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sarah Johnson"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Exceptional service and local expertise. Highly recommend Las Vegas Nevada Home Sales for all your real estate needs."
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        }
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
  }, [name, description, url, telephone, email, address, geo, openingHours, priceRange, paymentAccepted, currenciesAccepted, areaServed, serviceArea, hasOfferCatalog])

  return null
} 
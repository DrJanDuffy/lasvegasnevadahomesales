export const seoConfig = {
  // Site Information
  site: {
    name: "Las Vegas Nevada Home Sales",
    url: "https://www.lasvegasnevadahomesales.com",
    description: "Premier real estate services in Las Vegas, Nevada. Find your dream home in Summerlin, Henderson, Green Valley, and Downtown Las Vegas.",
    keywords: "Las Vegas real estate, Summerlin homes, Henderson real estate, Green Valley homes, Downtown Las Vegas, Nevada real estate, Las Vegas homes for sale, Las Vegas realtor, Las Vegas real estate agent",
    author: "Las Vegas Nevada Home Sales",
    language: "en-US",
    locale: "en_US",
  },

  // Contact Information
  contact: {
    phone: "+1-702-555-0123",
    email: "info@lasvegasnevadahomesales.com",
    address: {
      street: "1234 Las Vegas Blvd",
      city: "Las Vegas",
      state: "NV",
      zip: "89101",
      country: "US"
    },
    coordinates: {
      latitude: 36.1699,
      longitude: -115.1398
    }
  },

  // Social Media
  social: {
    facebook: "https://www.facebook.com/lasvegasnevadahomesales",
    twitter: "https://twitter.com/lasvegasrealtor",
    instagram: "https://www.instagram.com/lasvegasnevadahomesales",
    linkedin: "https://www.linkedin.com/company/lasvegasnevadahomesales",
    youtube: "https://www.youtube.com/channel/lasvegasnevadahomesales"
  },

  // Business Information
  business: {
    name: "Las Vegas Nevada Home Sales",
    type: "RealEstateAgent",
    priceRange: "$$",
    openingHours: [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-16:00"
    ],
    areaServed: [
      "Las Vegas",
      "Henderson", 
      "Summerlin",
      "Green Valley",
      "Downtown Las Vegas",
      "Centennial Hills",
      "North Las Vegas"
    ],
    services: [
      "Residential Real Estate Sales",
      "Property Valuation",
      "Market Analysis",
      "Home Buying",
      "Home Selling",
      "Investment Properties"
    ]
  },

  // Page-specific SEO configurations
  pages: {
    home: {
      title: "Las Vegas Nevada Home Sales | Premier Real Estate Services",
      description: "Find your dream home in Las Vegas, Nevada. Browse luxury homes in Summerlin, Henderson, Green Valley, and Downtown Las Vegas. Expert real estate services with local market knowledge.",
      keywords: "Las Vegas homes for sale, Summerlin real estate, Henderson homes, Green Valley properties, Las Vegas realtor, Nevada real estate",
      ogImage: "/images/og-home.jpg",
      canonical: "/"
    },
    
    properties: {
      title: "Las Vegas Homes for Sale | Browse Properties",
      description: "Browse the latest Las Vegas homes for sale. Find your perfect home in Summerlin, Henderson, Green Valley, and other premier Las Vegas neighborhoods.",
      keywords: "Las Vegas homes for sale, Summerlin homes, Henderson properties, Green Valley real estate, Las Vegas listings",
      ogImage: "/images/og-properties.jpg",
      canonical: "/properties"
    },

    summerlin: {
      title: "Summerlin Las Vegas Homes for Sale | Luxury Real Estate",
      description: "Discover luxury homes in Summerlin, Las Vegas' premier master-planned community. Find your dream home with Red Rock Canyon views and world-class amenities.",
      keywords: "Summerlin homes for sale, Summerlin real estate, Las Vegas luxury homes, Red Rock Canyon views, Summerlin golf courses",
      ogImage: "/images/og-summerlin.jpg",
      canonical: "/neighborhoods/summerlin"
    },

    henderson: {
      title: "Henderson NV Homes for Sale | Family-Friendly Real Estate",
      description: "Find family-friendly homes in Henderson, Nevada. Browse properties in one of America's safest cities with excellent schools and amenities.",
      keywords: "Henderson homes for sale, Henderson real estate, Nevada family homes, Henderson schools, safe neighborhoods",
      ogImage: "/images/og-henderson.jpg",
      canonical: "/neighborhoods/henderson"
    },

    greenValley: {
      title: "Green Valley Las Vegas Homes for Sale | Suburban Living",
      description: "Explore homes in Green Valley, Las Vegas. Find suburban living with easy access to shopping, dining, and entertainment.",
      keywords: "Green Valley homes for sale, Green Valley real estate, Las Vegas suburban homes, Green Valley shopping",
      ogImage: "/images/og-green-valley.jpg",
      canonical: "/neighborhoods/green-valley"
    },

    downtown: {
      title: "Downtown Las Vegas Homes for Sale | Urban Living",
      description: "Experience urban living in Downtown Las Vegas. Find condos and homes in the heart of the city with easy access to entertainment and nightlife.",
      keywords: "Downtown Las Vegas homes, Las Vegas condos, urban living, downtown real estate, Las Vegas entertainment",
      ogImage: "/images/og-downtown.jpg",
      canonical: "/neighborhoods/downtown"
    },

    homeValuation: {
      title: "Las Vegas Home Valuation | Get Your Home's Worth",
      description: "Get an accurate home valuation for your Las Vegas property. Professional market analysis and comparative market reports.",
      keywords: "Las Vegas home valuation, property value, home worth, market analysis, Las Vegas real estate market",
      ogImage: "/images/og-valuation.jpg",
      canonical: "/home-valuation"
    },

    marketReports: {
      title: "Las Vegas Real Estate Market Reports | Market Analysis",
      description: "Stay informed with the latest Las Vegas real estate market reports. Expert analysis of market trends, prices, and investment opportunities.",
      keywords: "Las Vegas market reports, real estate market analysis, Las Vegas market trends, investment opportunities",
      ogImage: "/images/og-market-reports.jpg",
      canonical: "/market-reports"
    },

    strategies: {
      title: "Las Vegas Real Estate Strategies | Expert Tips & Advice",
      description: "Learn proven real estate strategies for buying and selling in Las Vegas. Expert tips from local real estate professionals.",
      keywords: "Las Vegas real estate strategies, buying tips, selling tips, real estate advice, investment strategies",
      ogImage: "/images/og-strategies.jpg",
      canonical: "/strategies"
    },

    contact: {
      title: "Contact Las Vegas Real Estate Agent | Get Expert Help",
      description: "Contact our Las Vegas real estate experts for personalized assistance. Get help buying or selling your home in Las Vegas.",
      keywords: "Las Vegas real estate agent, contact realtor, Las Vegas real estate help, expert assistance",
      ogImage: "/images/og-contact.jpg",
      canonical: "/contact"
    }
  },

  // SEO Meta Tags
  meta: {
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#0A2540",
    msTileColor: "#0A2540",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",
    appleMobileWebAppTitle: "Las Vegas Nevada Home Sales",
    formatDetection: "telephone=no",
    mobileWebAppCapable: "yes",
    msapplicationConfig: "/browserconfig.xml"
  },

  // Open Graph Defaults
  openGraph: {
    type: "website",
    siteName: "Las Vegas Nevada Home Sales",
    locale: "en_US",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg"
  },

  // Twitter Card Defaults
  twitter: {
    card: "summary_large_image",
    site: "@lasvegasrealtor",
    creator: "@lasvegasrealtor",
    imageAlt: "Las Vegas Nevada Home Sales"
  },

  // Verification Codes
  verification: {
    google: "your-google-verification-code",
    bing: "your-bing-verification-code",
    yandex: "your-yandex-verification-code",
    facebook: "your-facebook-app-id"
  },

  // Analytics
  analytics: {
    googleAnalytics: "G-XXXXXXXXXX",
    googleTagManager: "GTM-XXXXXXX",
    facebookPixel: "your-facebook-pixel-id",
    linkedInInsight: "your-linkedin-insight-tag"
  }
}

// Helper function to get page-specific SEO config
export function getPageSEO(page: keyof typeof seoConfig.pages) {
  return seoConfig.pages[page]
}

// Helper function to generate full page title
export function getFullTitle(pageTitle: string) {
  return `${pageTitle} | ${seoConfig.site.name}`
}

// Helper function to generate canonical URL
export function getCanonicalUrl(path: string) {
  return `${seoConfig.site.url}${path}`
} 
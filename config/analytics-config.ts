// Analytics Configuration for Las Vegas Nevada Home Sales
// Real Estate Visitor Behavior Tracking

export const analyticsConfig = {
  // Vercel Analytics Configuration
  vercel: {
    enabled: true,
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    debug: process.env.NODE_ENV === 'development',
    trackPageViews: true,
    trackEvents: true,
    trackUserJourney: true
  },

  // Real Estate Specific Tracking Events
  events: {
    // Property Related Events
    propertyView: {
      name: 'Property Viewed',
      properties: ['propertyId', 'price', 'neighborhood', 'propertyType', 'market']
    },
    propertySearch: {
      name: 'Property Search',
      properties: ['searchQuery', 'filters', 'resultsCount', 'market']
    },
    propertyFavorite: {
      name: 'Property Favorited',
      properties: ['propertyId', 'price', 'neighborhood', 'market']
    },

    // Lead Generation Events
    leadSubmission: {
      name: 'Lead Submitted',
      properties: ['leadType', 'value', 'source', 'market', 'formType']
    },
    valuationRequest: {
      name: 'Valuation Requested',
      properties: ['propertyAddress', 'estimatedValue', 'market']
    },
    contactRequest: {
      name: 'Contact Requested',
      properties: ['contactType', 'source', 'market']
    },

    // User Engagement Events
    scrollDepth: {
      name: 'Scroll Depth Reached',
      properties: ['depth', 'page', 'market']
    },
    timeOnPage: {
      name: 'Time on Page',
      properties: ['timeSpent', 'page', 'market']
    },
    userJourney: {
      name: 'User Journey Step',
      properties: ['step', 'page', 'referrer', 'market']
    },

    // Widget Interactions
    widgetInteraction: {
      name: 'Widget Interaction',
      properties: ['widgetType', 'action', 'market']
    },
    homebotInteraction: {
      name: 'Homebot Widget Interaction',
      properties: ['action', 'market']
    },
    realscoutInteraction: {
      name: 'RealScout Widget Interaction',
      properties: ['action', 'market']
    },

    // CTA and Conversion Events
    ctaClick: {
      name: 'CTA Clicked',
      properties: ['ctaType', 'location', 'value', 'market']
    },
    phoneCall: {
      name: 'Phone Call Initiated',
      properties: ['phoneNumber', 'callSource', 'market']
    },
    emailClick: {
      name: 'Email Clicked',
      properties: ['emailType', 'source', 'market']
    },

    // Market Research Events
    neighborhoodSearch: {
      name: 'Neighborhood Searched',
      properties: ['neighborhood', 'searchType', 'market']
    },
    marketReportDownload: {
      name: 'Market Report Downloaded',
      properties: ['reportType', 'neighborhood', 'market']
    },
    marketAnalysis: {
      name: 'Market Analysis Viewed',
      properties: ['analysisType', 'neighborhood', 'market']
    }
  },

  // User Journey Mapping
  userJourney: {
    steps: {
      homepage_visit: {
        name: 'Homepage Visit',
        description: 'User visited the homepage',
        conversionValue: 1
      },
      contact_page_visit: {
        name: 'Contact Page Visit',
        description: 'User visited the contact page',
        conversionValue: 5
      },
      property_search_visit: {
        name: 'Property Search Visit',
        description: 'User visited the property search page',
        conversionValue: 3
      },
      property_detail_visit: {
        name: 'Property Detail Visit',
        description: 'User viewed a specific property',
        conversionValue: 7
      },
      about_page_visit: {
        name: 'About Page Visit',
        description: 'User visited the about page',
        conversionValue: 2
      },
      testimonials_visit: {
        name: 'Testimonials Visit',
        description: 'User visited the testimonials page',
        conversionValue: 2
      },
      faq_visit: {
        name: 'FAQ Visit',
        description: 'User visited the FAQ page',
        conversionValue: 2
      },
      lead_form_started: {
        name: 'Lead Form Started',
        description: 'User started filling out a lead form',
        conversionValue: 10
      },
      lead_form_completed: {
        name: 'Lead Form Completed',
        description: 'User completed a lead form',
        conversionValue: 25
      },
      phone_call_initiated: {
        name: 'Phone Call Initiated',
        description: 'User initiated a phone call',
        conversionValue: 30
      },
      valuation_requested: {
        name: 'Valuation Requested',
        description: 'User requested a property valuation',
        conversionValue: 20
      }
    }
  },

  // Market Segmentation
  marketSegments: {
    buyer: {
      name: 'Property Buyer',
      description: 'Users looking to buy property',
      conversionValue: 15
    },
    seller: {
      name: 'Property Seller',
      description: 'Users looking to sell property',
      conversionValue: 20
    },
    investor: {
      name: 'Real Estate Investor',
      description: 'Users looking for investment properties',
      conversionValue: 25
    },
    firstTimeBuyer: {
      name: 'First Time Buyer',
      description: 'Users buying their first property',
      conversionValue: 10
    },
    luxuryBuyer: {
      name: 'Luxury Buyer',
      description: 'Users looking for luxury properties',
      conversionValue: 35
    }
  },

  // Neighborhood Tracking
  neighborhoods: {
    summerlin: {
      name: 'Summerlin',
      description: 'Summerlin neighborhood',
      conversionValue: 8
    },
    henderson: {
      name: 'Henderson',
      description: 'Henderson neighborhood',
      conversionValue: 6
    },
    downtown: {
      name: 'Downtown Las Vegas',
      description: 'Downtown Las Vegas',
      conversionValue: 5
    },
    greenValley: {
      name: 'Green Valley',
      description: 'Green Valley neighborhood',
      conversionValue: 7
    },
    centennialHills: {
      name: 'Centennial Hills',
      description: 'Centennial Hills neighborhood',
      conversionValue: 6
    }
  },

  // Price Range Segmentation
  priceRanges: {
    under_300k: {
      name: 'Under $300k',
      description: 'Properties under $300,000',
      conversionValue: 5
    },
    '300k_500k': {
      name: '$300k - $500k',
      description: 'Properties between $300,000 and $500,000',
      conversionValue: 8
    },
    '500k_750k': {
      name: '$500k - $750k',
      description: 'Properties between $500,000 and $750,000',
      conversionValue: 12
    },
    '750k_1m': {
      name: '$750k - $1M',
      description: 'Properties between $750,000 and $1,000,000',
      conversionValue: 18
    },
    over_1m: {
      name: 'Over $1M',
      description: 'Properties over $1,000,000',
      conversionValue: 25
    }
  },

  // Lead Source Tracking
  leadSources: {
    organic: {
      name: 'Organic Search',
      description: 'Traffic from organic search',
      conversionValue: 3
    },
    paid: {
      name: 'Paid Advertising',
      description: 'Traffic from paid advertising',
      conversionValue: 8
    },
    social: {
      name: 'Social Media',
      description: 'Traffic from social media',
      conversionValue: 5
    },
    referral: {
      name: 'Referral',
      description: 'Traffic from referrals',
      conversionValue: 12
    },
    direct: {
      name: 'Direct Traffic',
      description: 'Direct traffic to the website',
      conversionValue: 4
    },
    email: {
      name: 'Email Marketing',
      description: 'Traffic from email marketing',
      conversionValue: 10
    }
  },

  // Conversion Funnel Tracking
  conversionFunnel: {
    awareness: {
      name: 'Awareness',
      description: 'User becomes aware of the brand',
      conversionValue: 1
    },
    interest: {
      name: 'Interest',
      description: 'User shows interest in properties',
      conversionValue: 3
    },
    consideration: {
      name: 'Consideration',
      description: 'User considers specific properties',
      conversionValue: 7
    },
    intent: {
      name: 'Intent',
      description: 'User shows intent to buy/sell',
      conversionValue: 15
    },
    evaluation: {
      name: 'Evaluation',
      description: 'User evaluates properties/services',
      conversionValue: 20
    },
    purchase: {
      name: 'Purchase',
      description: 'User completes a transaction',
      conversionValue: 50
    }
  },

  // Performance Tracking
  performance: {
    pageLoadTime: {
      threshold: 3000, // 3 seconds
      description: 'Page load time threshold'
    },
    timeToInteractive: {
      threshold: 5000, // 5 seconds
      description: 'Time to interactive threshold'
    },
    scrollDepth: {
      thresholds: [25, 50, 75, 90],
      description: 'Scroll depth tracking thresholds'
    },
    timeOnPage: {
      thresholds: [30, 60, 120, 300], // seconds
      description: 'Time on page tracking thresholds'
    }
  },

  // Debug Configuration
  debug: {
    enabled: process.env.NODE_ENV === 'development',
    logEvents: true,
    logUserJourney: true,
    logPerformance: true,
    logErrors: true
  }
}

// Helper functions for analytics
export const analyticsHelpers = {
  // Get conversion value based on user segment
  getConversionValue: (segment: string, action: string): number => {
    const segmentConfig = analyticsConfig.marketSegments[segment as keyof typeof analyticsConfig.marketSegments]
    const journeyStep = analyticsConfig.userJourney.steps[action as keyof typeof analyticsConfig.userJourney.steps]
    
    if (segmentConfig && journeyStep) {
      return segmentConfig.conversionValue + journeyStep.conversionValue
    }
    
    return journeyStep?.conversionValue || 1
  },

  // Track user segment
  trackUserSegment: (segment: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.analytics) {
      window.analytics.track('User Segment Identified', {
        segment,
        ...data,
        market: 'las_vegas',
        timestamp: new Date().toISOString()
      })
    }
  },

  // Track conversion funnel step
  trackFunnelStep: (step: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.analytics) {
      window.analytics.track('Funnel Step Reached', {
        step,
        ...data,
        market: 'las_vegas',
        timestamp: new Date().toISOString()
      })
    }
  },

  // Track performance metrics
  trackPerformance: (metric: string, value: number) => {
    if (typeof window !== 'undefined' && window.analytics) {
      window.analytics.track('Performance Metric', {
        metric,
        value,
        market: 'las_vegas',
        timestamp: new Date().toISOString()
      })
    }
  }
} 
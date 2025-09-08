// Google Components Configuration
// Replace placeholder values with your actual API keys and settings

export const googleConfig = {
  // Google Analytics 4
  analytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
    enableEnhancedMeasurement: true,
    enableEcommerce: true,
    enableDebug: process.env.NODE_ENV === 'development',
  },

  // Google Maps
  maps: {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY',
    center: { lat: 36.1699, lng: -115.1398 }, // Las Vegas
    zoom: 12,
    neighborhoods: [
      {
        name: 'Summerlin',
        bounds: {
          north: 36.2,
          south: 36.1,
          east: -115.3,
          west: -115.4,
        },
        center: { lat: 36.15, lng: -115.35 },
      },
      {
        name: 'Henderson',
        bounds: {
          north: 36.05,
          south: 35.95,
          east: -114.9,
          west: -115.0,
        },
        center: { lat: 36.0, lng: -114.95 },
      },
      {
        name: 'Green Valley',
        bounds: {
          north: 36.05,
          south: 35.98,
          east: -114.95,
          west: -115.05,
        },
        center: { lat: 36.015, lng: -115.0 },
      },
      {
        name: 'Downtown Las Vegas',
        bounds: {
          north: 36.18,
          south: 36.16,
          east: -115.13,
          west: -115.15,
        },
        center: { lat: 36.17, lng: -115.14 },
      },
    ],
  },

  // Google My Business
  gmb: {
    appId: process.env.NEXT_PUBLIC_ELFSIGHT_APP_ID || 'YOUR_APP_ID',
    businessName: 'Las Vegas Nevada Home Sales | Homes by Dr. Jan Duffy',
    phone: '(702) 500-1981',
    email: 'drjanduffy@lasvegasnevadahomesales.com',
    address: {
      street: '10980 W Charleston Blvd, Suite 180',
      city: 'Las Vegas',
      state: 'NV',
      zip: '89135',
    },
  },

  // Schema Markup
  schema: {
    agentName: 'Dr. Jan Duffy',
    agentImage: 'https://lasvegasnevadahomesales.com/dr-jan-duffy-photo.jpg',
    license: 'Nevada Real Estate License #0197614',
    businessName: 'Las Vegas Nevada Home Sales | Homes by Dr. Jan Duffy',
    logo: 'https://lasvegasnevadahomesales.com/logo.png',
    website: 'https://lasvegasnevadahomesales.com',
    rating: 4.9,
    reviewCount: 127,
    description:
      'Expert Summerlin REALTOR Dr. Jan Duffy specializes in luxury homes & investment properties. Office in Downtown Summerlin Suite 180.',
    primaryCategory: 'Real Estate Agent',
    secondaryCategories: ['Real Estate Consultant', 'Property Management Company'],
    openingHours: {
      monday: '08:00-18:00',
      tuesday: '08:00-18:00',
      wednesday: '08:00-18:00',
      thursday: '08:00-18:00',
      friday: '08:00-18:00',
      saturday: '09:00-17:00',
      sunday: '10:00-16:00',
    },
  },

  // Google Tag Manager
  gtm: {
    containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || 'GTM-XXXXXXX',
  },

  // Google Ads
  ads: {
    conversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-CONVERSION_ID',
  },

  // Google Search Console
  searchConsole: {
    verificationCode:
      process.env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION || 'YOUR_VERIFICATION_CODE',
  },

  // PageSpeed Insights
  pageSpeed: {
    apiKey: process.env.NEXT_PUBLIC_PAGESPEED_API_KEY || 'YOUR_API_KEY',
  },

  // Core Web Vitals
  webVitals: {
    enabled: true,
    debug: process.env.NODE_ENV === 'development',
  },
};

// Environment variables template
export const envTemplate = `
# Google Components Environment Variables
# Copy this to your .env.local file and replace with your actual values

# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY

# Google My Business (Elfsight)
NEXT_PUBLIC_ELFSIGHT_APP_ID=YOUR_APP_ID

# Google Tag Manager
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX

# Google Ads
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-CONVERSION_ID

# Google Search Console
NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION=YOUR_VERIFICATION_CODE

# PageSpeed Insights
NEXT_PUBLIC_PAGESPEED_API_KEY=YOUR_API_KEY
`;

// Validation function
export const validateGoogleConfig = () => {
  const warnings: string[] = [];
  const errors: string[] = [];

  // Check required API keys
  if (
    !googleConfig.analytics.measurementId ||
    googleConfig.analytics.measurementId === 'G-XXXXXXXXXX'
  ) {
    warnings.push('Google Analytics measurement ID not configured');
  }

  if (!googleConfig.maps.apiKey || googleConfig.maps.apiKey === 'YOUR_API_KEY') {
    warnings.push('Google Maps API key not configured');
  }

  if (!googleConfig.gmb.appId || googleConfig.gmb.appId === 'YOUR_APP_ID') {
    warnings.push('Google My Business (Elfsight) app ID not configured');
  }

  if (!googleConfig.gtm.containerId || googleConfig.gtm.containerId === 'GTM-XXXXXXX') {
    warnings.push('Google Tag Manager container ID not configured');
  }

  // Log warnings and errors
  if (warnings.length > 0) {
    console.warn('Google Components Configuration Warnings:', warnings);
  }

  if (errors.length > 0) {
    console.error('Google Components Configuration Errors:', errors);
  }

  return {
    isValid: errors.length === 0,
    warnings,
    errors,
  };
};

// Helper functions
export const getGoogleConfig = () => googleConfig;

export const isGoogleConfigured = () => {
  const validation = validateGoogleConfig();
  return validation.isValid && validation.warnings.length === 0;
};

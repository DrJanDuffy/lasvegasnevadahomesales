export const emailjsConfig = {
  // EmailJS Service Configuration
  service: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your-service-id',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your-template-id',
    userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'your-user-id',
  },

  // Real Estate Specific Templates
  templates: {
    // General Contact Form
    contact: {
      templateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE || 'contact_template',
      subject: 'New Contact Form Submission - Las Vegas Nevada Home Sales',
    },

    // Property Inquiry
    propertyInquiry: {
      templateId: process.env.NEXT_PUBLIC_EMAILJS_PROPERTY_TEMPLATE || 'property_inquiry_template',
      subject: 'Property Inquiry - Las Vegas Nevada Home Sales',
    },

    // Home Valuation Request
    homeValuation: {
      templateId: process.env.NEXT_PUBLIC_EMAILJS_VALUATION_TEMPLATE || 'home_valuation_template',
      subject: 'Home Valuation Request - Las Vegas Nevada Home Sales',
    },

    // Neighborhood Specific
    summerlin: {
      templateId: process.env.NEXT_PUBLIC_EMAILJS_SUMMERLIN_TEMPLATE || 'summerlin_inquiry_template',
      subject: 'Summerlin Property Inquiry - Las Vegas Nevada Home Sales',
    },

    henderson: {
      templateId: process.env.NEXT_PUBLIC_EMAILJS_HENDERSON_TEMPLATE || 'henderson_inquiry_template',
      subject: 'Henderson Property Inquiry - Las Vegas Nevada Home Sales',
    },

    greenValley: {
      templateId: process.env.NEXT_PUBLIC_EMAILJS_GREENVALLEY_TEMPLATE || 'green_valley_inquiry_template',
      subject: 'Green Valley Property Inquiry - Las Vegas Nevada Home Sales',
    },

    downtown: {
      templateId: process.env.NEXT_PUBLIC_EMAILJS_DOWNTOWN_TEMPLATE || 'downtown_inquiry_template',
      subject: 'Downtown Las Vegas Property Inquiry - Las Vegas Nevada Home Sales',
    },
  },

  // Email Recipients
  recipients: {
    primary: process.env.NEXT_PUBLIC_EMAILJS_PRIMARY_EMAIL || 'info@lasvegasnevadahomesales.com',
    sales: process.env.NEXT_PUBLIC_EMAILJS_SALES_EMAIL || 'sales@lasvegasnevadahomesales.com',
    support: process.env.NEXT_PUBLIC_EMAILJS_SUPPORT_EMAIL || 'support@lasvegasnevadahomesales.com',
  },

  // Form Field Mappings
  fieldMappings: {
    // Contact Form Fields
    contact: {
      name: 'user_name',
      email: 'user_email',
      phone: 'user_phone',
      message: 'user_message',
      source: 'form_source',
      pageUrl: 'page_url',
    },

    // Property Inquiry Fields
    property: {
      name: 'user_name',
      email: 'user_email',
      phone: 'user_phone',
      propertyAddress: 'property_address',
      propertyType: 'property_type',
      budget: 'budget_range',
      timeline: 'timeline',
      message: 'user_message',
      source: 'form_source',
      pageUrl: 'page_url',
    },

    // Home Valuation Fields
    valuation: {
      name: 'user_name',
      email: 'user_email',
      phone: 'user_phone',
      propertyAddress: 'property_address',
      estimatedValue: 'estimated_value',
      propertyType: 'property_type',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      squareFootage: 'square_footage',
      message: 'user_message',
      source: 'form_source',
      pageUrl: 'page_url',
    },
  },

  // Success Messages
  successMessages: {
    contact: 'Thank you! We\'ll contact you within 24 hours.',
    propertyInquiry: 'Thank you! We\'ll send you property details within 1 hour.',
    homeValuation: 'Thank you! We\'ll provide your home valuation within 24 hours.',
    summerlin: 'Thank you! We\'ll send you Summerlin property details within 1 hour.',
    henderson: 'Thank you! We\'ll send you Henderson property details within 1 hour.',
    greenValley: 'Thank you! We\'ll send you Green Valley property details within 1 hour.',
    downtown: 'Thank you! We\'ll send you Downtown Las Vegas property details within 1 hour.',
  },

  // Error Messages
  errorMessages: {
    general: 'There was an error submitting your request. Please try again or call us at (702) 555-0123.',
    network: 'Network error. Please check your connection and try again.',
    validation: 'Please fill in all required fields.',
  },

  // Analytics Tracking
  analytics: {
    eventCategory: 'email_submission',
    eventAction: 'form_submit',
    eventLabel: 'emailjs_contact',
  },
}

// Helper function to get template configuration
export function getEmailTemplate(type: keyof typeof emailjsConfig.templates) {
  return emailjsConfig.templates[type]
}

// Helper function to get field mappings
export function getFieldMappings(type: keyof typeof emailjsConfig.fieldMappings) {
  return emailjsConfig.fieldMappings[type]
}

// Helper function to get success message
export function getSuccessMessage(type: keyof typeof emailjsConfig.successMessages) {
  return emailjsConfig.successMessages[type]
}

// Helper function to get error message
export function getErrorMessage(type: keyof typeof emailjsConfig.errorMessages) {
  return emailjsConfig.errorMessages[type]
} 
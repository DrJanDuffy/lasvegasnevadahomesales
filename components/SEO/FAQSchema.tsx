import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Named export for backward compatibility
export { FAQSchema };

// Predefined FAQ sets for different pages
export const homePageFAQs = [
  {
    question: "What areas does Las Vegas Nevada Home Sales serve?",
    answer: "Las Vegas Nevada Home Sales serves the entire Las Vegas Valley including Summerlin, Henderson, Green Valley, Downtown Las Vegas, Centennial Hills, and all surrounding neighborhoods in Nevada."
  },
  {
    question: "How can I get a free home valuation from Las Vegas Nevada Home Sales?",
    answer: "You can get a free home valuation by visiting our home value page, calling us directly, or filling out our contact form. Our experts will provide you with a comprehensive market analysis of your property."
  },
  {
    question: "What makes Las Vegas Nevada Home Sales different from other real estate companies?",
    answer: "Las Vegas Nevada Home Sales offers personalized service, deep local market knowledge, advanced technology integration, and a commitment to client satisfaction. We specialize in the Las Vegas market with years of experience."
  },
  {
    question: "Do you help with both buying and selling homes in Las Vegas?",
    answer: "Yes, Las Vegas Nevada Home Sales provides comprehensive services for both buyers and sellers. We offer market analysis, property search, negotiation support, and complete transaction management."
  },
  {
    question: "What are the current market conditions in Las Vegas?",
    answer: "Las Vegas real estate market conditions vary by neighborhood. Contact us for the latest market reports and trends specific to your area of interest in the Las Vegas Valley."
  }
];

export const propertiesPageFAQs = [
  {
    question: "How do I search for properties with Las Vegas Nevada Home Sales?",
    answer: "You can search properties using our advanced search tool, browse listings by neighborhood, or contact us for personalized property recommendations based on your specific needs and preferences."
  },
  {
    question: "What types of properties does Las Vegas Nevada Home Sales list?",
    answer: "We list all types of properties including single-family homes, condos, townhouses, luxury properties, investment properties, and new construction throughout the Las Vegas area."
  },
  {
    question: "Can I set up property alerts with Las Vegas Nevada Home Sales?",
    answer: "Yes, you can set up custom property alerts to receive notifications when new listings match your criteria. Contact us to set up your personalized alert system."
  },
  {
    question: "How often are property listings updated?",
    answer: "Our property listings are updated in real-time to ensure you have access to the most current information about available properties in the Las Vegas market."
  },
  {
    question: "Do you offer virtual tours of properties?",
    answer: "Yes, many of our listings include virtual tours, high-quality photos, and detailed property information to help you explore homes remotely before scheduling in-person viewings."
  }
];

export const contactPageFAQs = [
  {
    question: "What are the office hours for Las Vegas Nevada Home Sales?",
    answer: "Our office is open Monday-Friday 9AM-6PM, Saturday 10AM-4PM, and Sunday by appointment. We also offer 24/7 emergency contact for urgent matters."
  },
  {
    question: "How quickly will Las Vegas Nevada Home Sales respond to my inquiry?",
    answer: "We typically respond to all inquiries within 24 hours, often much sooner. For urgent matters, we provide immediate assistance through our emergency contact line."
  },
  {
    question: "What information should I provide when contacting Las Vegas Nevada Home Sales?",
    answer: "Please provide your name, contact information, whether you're buying or selling, your timeline, budget or property details, and any specific questions you have about Las Vegas real estate."
  },
  {
    question: "Do you offer free consultations with Las Vegas Nevada Home Sales?",
    answer: "Yes, we offer free initial consultations to discuss your real estate needs, answer questions, and provide guidance on buying or selling in the Las Vegas market."
  },
  {
    question: "Can I schedule a meeting outside of regular office hours?",
    answer: "Absolutely! We offer flexible scheduling including evenings and weekends to accommodate your schedule. Contact us to arrange a convenient meeting time."
  }
];

export const strategiesPageFAQs = [
  {
    question: "What are the best strategies for buying a home in Las Vegas?",
    answer: "The best strategies include getting pre-approved for financing, researching neighborhoods, working with experienced agents like Las Vegas Nevada Home Sales, understanding market timing, and being prepared to act quickly in competitive situations."
  },
  {
    question: "How can I maximize my home's value when selling in Las Vegas?",
    answer: "To maximize value, focus on curb appeal, professional staging, strategic pricing, high-quality marketing, and working with experienced agents who understand the Las Vegas market dynamics."
  },
  {
    question: "What investment strategies work best in the Las Vegas real estate market?",
    answer: "Successful investment strategies include analyzing market cycles, focusing on growing neighborhoods, understanding rental demand, considering property management, and diversifying your portfolio across different property types."
  },
  {
    question: "How important is timing when buying or selling in Las Vegas?",
    answer: "Timing is crucial in the Las Vegas market. Understanding seasonal trends, market cycles, and local economic factors can significantly impact your success in buying or selling properties."
  },
  {
    question: "What negotiation strategies should I use in Las Vegas real estate?",
    answer: "Effective negotiation strategies include understanding market value, being prepared with comparable sales, knowing your limits, working with experienced agents, and being flexible on terms while firm on price when appropriate."
  }
]; 
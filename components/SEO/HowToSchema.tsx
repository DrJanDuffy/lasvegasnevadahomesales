"use client"

import React from 'react';

interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

interface HowToSchemaProps {
  title: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  difficulty?: string;
  supplies?: string[];
  tools?: string[];
  image?: string;
}

export default function HowToSchema({
  title,
  description,
  steps,
  totalTime,
  difficulty,
  supplies,
  tools,
  image
}: HowToSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "image": image || "https://lasvegasnevadahomesales.com/images/how-to-real-estate.jpg",
    "totalTime": totalTime,
    "difficulty": difficulty,
    "supply": supplies?.map(supply => ({
      "@type": "HowToSupply",
      "name": supply
    })),
    "tool": tools?.map(tool => ({
      "@type": "HowToTool",
      "name": tool
    })),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url,
      "image": step.image
    }))
  };

  // Remove undefined properties
  Object.keys(structuredData).forEach(key => {
    if (structuredData[key] === undefined) {
      delete structuredData[key];
    }
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export { HowToSchema };

// Predefined How-To guides for real estate
export const buyHomeHowTo = {
  title: "How to Buy a Home in Las Vegas",
  description: "Complete guide to buying a home in Las Vegas, from pre-approval to closing",
  totalTime: "P3M",
  difficulty: "Beginner",
  supplies: ["Pre-approval letter", "Down payment", "Closing costs", "Home inspection report"],
  tools: ["Real estate agent", "Mortgage calculator", "Property search tools", "Negotiation skills"],
  steps: [
    {
      name: "Get Pre-Approved",
      text: "Contact a mortgage lender to get pre-approved for a home loan. This will help you understand your budget and show sellers you're serious."
    },
    {
      name: "Find a Real Estate Agent",
      text: "Choose an experienced Las Vegas real estate agent who knows the local market and can guide you through the process."
    },
    {
      name: "Search for Properties",
      text: "Use online tools and your agent's expertise to find properties that match your criteria and budget."
    },
    {
      name: "Make an Offer",
      text: "Work with your agent to make a competitive offer based on market analysis and comparable sales."
    },
    {
      name: "Complete Due Diligence",
      text: "Schedule a home inspection, review disclosures, and ensure the property meets your requirements."
    },
    {
      name: "Close the Deal",
      text: "Complete the final walkthrough, sign closing documents, and receive the keys to your new home."
    }
  ]
};

export const sellHomeHowTo = {
  title: "How to Sell Your Home in Las Vegas",
  description: "Step-by-step guide to selling your home quickly and for maximum value in Las Vegas",
  totalTime: "P2M",
  difficulty: "Intermediate",
  supplies: ["Professional photos", "Home staging materials", "Marketing materials", "Disclosure documents"],
  tools: ["Real estate agent", "Market analysis tools", "Pricing strategy", "Marketing platform"],
  steps: [
    {
      name: "Prepare Your Home",
      text: "Clean, declutter, and make necessary repairs to maximize your home's appeal to potential buyers."
    },
    {
      name: "Get a Market Analysis",
      text: "Work with your agent to determine the optimal listing price based on comparable sales and market conditions."
    },
    {
      name: "List Your Property",
      text: "Create compelling listings with professional photos, virtual tours, and detailed descriptions."
    },
    {
      name: "Show Your Home",
      text: "Coordinate showings and open houses to showcase your home to potential buyers."
    },
    {
      name: "Review Offers",
      text: "Evaluate offers with your agent, considering price, terms, and buyer qualifications."
    },
    {
      name: "Close the Sale",
      text: "Complete the closing process, including final inspections, document signing, and transfer of ownership."
    }
  ]
};

export const investRealEstateHowTo = {
  title: "How to Invest in Las Vegas Real Estate",
  description: "Comprehensive guide to real estate investment strategies in the Las Vegas market",
  totalTime: "P6M",
  difficulty: "Advanced",
  supplies: ["Investment capital", "Market research", "Financial analysis tools", "Legal documents"],
  tools: ["Real estate agent", "Property management software", "Investment calculator", "Market analysis tools"],
  steps: [
    {
      name: "Define Investment Goals",
      text: "Determine your investment objectives, timeline, and risk tolerance to guide your strategy."
    },
    {
      name: "Research the Market",
      text: "Analyze Las Vegas market trends, neighborhood growth, and rental demand to identify opportunities."
    },
    {
      name: "Calculate Returns",
      text: "Use investment calculators to analyze potential returns, including cash flow, appreciation, and tax benefits."
    },
    {
      name: "Secure Financing",
      text: "Explore financing options including conventional loans, investment property loans, and cash purchases."
    },
    {
      name: "Make the Purchase",
      text: "Execute your investment strategy by purchasing properties that align with your goals and analysis."
    },
    {
      name: "Manage Your Investment",
      text: "Implement property management strategies to maximize returns and maintain property value."
    }
  ]
}; 
"use client"

import { useEffect } from 'react'

interface HowToStep {
  name: string
  text: string
  url?: string
  image?: string
}

interface HowToSchemaProps {
  title: string
  description: string
  steps: HowToStep[]
  totalTime?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  supplies?: string[]
  tools?: string[]
  image?: string
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
  useEffect(() => {
    if (typeof window !== 'undefined' && steps.length > 0) {
      const schema = {
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
      }

      // Remove undefined properties
      Object.keys(schema).forEach(key => {
        if (schema[key] === undefined) {
          delete schema[key]
        }
      })

      // Add schema to page
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [title, description, steps, totalTime, difficulty, supplies, tools, image])

  return null
}

// Predefined How-To guides for real estate
export const buyHomeHowTo = {
  title: "How to Buy a Home in Las Vegas with Las Vegas Nevada Home Sales",
  description: "Complete guide to buying a home in Las Vegas, Nevada. Learn the step-by-step process from pre-approval to closing with expert guidance from Las Vegas Nevada Home Sales.",
  totalTime: "P3M",
  difficulty: "Intermediate" as const,
  supplies: [
    "Pre-approval letter",
    "Down payment funds",
    "Closing costs",
    "Home inspection report",
    "Property insurance"
  ],
  tools: [
    "Mortgage calculator",
    "Property search tools",
    "Real estate agent",
    "Home inspector",
    "Title company"
  ],
  steps: [
    {
      name: "Get Pre-Approved for a Mortgage",
      text: "Contact a mortgage lender to get pre-approved for a home loan. This will help you understand your budget and show sellers you're a serious buyer. Las Vegas Nevada Home Sales can recommend trusted lenders in the area."
    },
    {
      name: "Define Your Home Requirements",
      text: "Create a list of must-haves and nice-to-haves for your new home. Consider location, size, number of bedrooms, budget, and any specific features you need."
    },
    {
      name: "Choose Your Neighborhood",
      text: "Research Las Vegas neighborhoods like Summerlin, Henderson, Green Valley, or Downtown. Consider factors like schools, amenities, commute times, and property values."
    },
    {
      name: "Start Your Property Search",
      text: "Use Las Vegas Nevada Home Sales' advanced search tools to find properties that match your criteria. Set up alerts for new listings and schedule viewings."
    },
    {
      name: "Make an Offer",
      text: "When you find the right home, work with your Las Vegas Nevada Home Sales agent to make a competitive offer. Consider market conditions, comparable sales, and your budget."
    },
    {
      name: "Complete Home Inspection",
      text: "Schedule a professional home inspection to identify any issues with the property. This is crucial for understanding the home's condition and negotiating repairs if needed."
    },
    {
      name: "Finalize Financing",
      text: "Work with your lender to complete the mortgage application process. Provide all required documentation and respond quickly to any requests for additional information."
    },
    {
      name: "Close on Your Home",
      text: "Attend the closing meeting to sign final documents, pay closing costs, and receive the keys to your new Las Vegas home. Congratulations on your new home!"
    }
  ]
}

export const sellHomeHowTo = {
  title: "How to Sell Your Home in Las Vegas with Las Vegas Nevada Home Sales",
  description: "Expert guide to selling your home in Las Vegas for maximum value. Learn proven strategies and techniques with Las Vegas Nevada Home Sales.",
  totalTime: "P2M",
  difficulty: "Intermediate" as const,
  supplies: [
    "Professional photos",
    "Home staging materials",
    "Marketing materials",
    "Property disclosures",
    "Repair supplies"
  ],
  tools: [
    "Real estate agent",
    "Professional photographer",
    "Home stager",
    "Market analysis tools",
    "Marketing platforms"
  ],
  steps: [
    {
      name: "Prepare Your Home for Sale",
      text: "Clean, declutter, and make necessary repairs to maximize your home's appeal. Consider professional staging to showcase your home's potential to buyers."
    },
    {
      name: "Get a Professional Home Valuation",
      text: "Contact Las Vegas Nevada Home Sales for a comprehensive market analysis. Understand your home's current value and how it compares to similar properties in your area."
    },
    {
      name: "Set the Right Price",
      text: "Work with your agent to set a competitive price based on market conditions, comparable sales, and your timeline. Pricing too high can deter buyers, while pricing too low leaves money on the table."
    },
    {
      name: "Create a Marketing Strategy",
      text: "Develop a comprehensive marketing plan including professional photography, virtual tours, online listings, and open houses. Las Vegas Nevada Home Sales uses advanced marketing techniques to reach qualified buyers."
    },
    {
      name: "Show Your Home",
      text: "Prepare for showings by keeping your home clean and accessible. Consider temporary relocation during the selling process to make showings easier and more effective."
    },
    {
      name: "Review and Negotiate Offers",
      text: "Carefully review all offers with your agent. Consider not just the price, but also the buyer's financing, timeline, and any contingencies. Negotiate terms that work for you."
    },
    {
      name: "Complete the Sale Process",
      text: "Work through the closing process including inspections, appraisals, and final negotiations. Your Las Vegas Nevada Home Sales agent will guide you through each step."
    },
    {
      name: "Close and Move",
      text: "Attend the closing meeting, sign final documents, and hand over the keys. Plan your move and enjoy the proceeds from your successful home sale."
    }
  ]
}

export const investRealEstateHowTo = {
  title: "How to Invest in Las Vegas Real Estate with Las Vegas Nevada Home Sales",
  description: "Complete guide to real estate investment in Las Vegas. Learn strategies for building wealth through property investment with expert guidance.",
  totalTime: "P6M",
  difficulty: "Advanced" as const,
  supplies: [
    "Investment capital",
    "Market research data",
    "Financial analysis tools",
    "Property management plan",
    "Legal documentation"
  ],
  tools: [
    "Real estate agent",
    "Financial advisor",
    "Property manager",
    "Market analysis tools",
    "Investment calculator"
  ],
  steps: [
    {
      name: "Define Your Investment Goals",
      text: "Determine your investment objectives: cash flow, appreciation, tax benefits, or a combination. Set clear financial goals and timeline for your real estate investment strategy."
    },
    {
      name: "Research the Las Vegas Market",
      text: "Study market trends, neighborhood growth, rental demand, and economic indicators in Las Vegas. Focus on areas with strong potential for appreciation and rental income."
    },
    {
      name: "Analyze Investment Properties",
      text: "Evaluate potential properties using key metrics: cap rate, cash-on-cash return, price per square foot, and potential for value-add improvements."
    },
    {
      name: "Secure Financing",
      text: "Explore investment property financing options including conventional loans, FHA loans for owner-occupied properties, and private financing. Understand down payment requirements and interest rates."
    },
    {
      name: "Make Your Investment Purchase",
      text: "Work with Las Vegas Nevada Home Sales to find and purchase your investment property. Consider factors like location, condition, rental potential, and future appreciation."
    },
    {
      name: "Prepare for Tenants",
      text: "Make necessary repairs and improvements to attract quality tenants. Consider hiring a property manager to handle day-to-day operations and tenant relations."
    },
    {
      name: "Manage Your Investment",
      text: "Monitor your investment performance, maintain the property, and adjust your strategy based on market conditions and tenant feedback."
    },
    {
      name: "Scale Your Portfolio",
      text: "As you build equity and experience, consider expanding your real estate portfolio. Reinvest profits and leverage your growing expertise to acquire additional properties."
    }
  ]
} 
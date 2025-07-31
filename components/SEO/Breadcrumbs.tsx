"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  showHome?: boolean
  className?: string
}

export function Breadcrumbs({ 
  items = [], 
  showHome = true, 
  className = '' 
}: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // Generate breadcrumbs from pathname if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items.length > 0) return items
    
    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = []
    
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      breadcrumbs.push({
        label,
        href: index === pathSegments.length - 1 ? undefined : currentPath
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbItems = generateBreadcrumbs()
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`text-sm text-gray-600 ${className}`}
    >
      <ol className="flex items-center space-x-2">
        {showHome && (
          <li>
            <Link 
              href="/" 
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            {breadcrumbItems.length > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        )}
        
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link 
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">
                {item.label}
              </span>
            )}
            {index < breadcrumbItems.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Predefined breadcrumb configurations
export const getHomeBreadcrumbs = () => [
  { label: "Home", href: "/" }
]

export const getPropertiesBreadcrumbs = () => [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" }
]

export const getPropertyDetailBreadcrumbs = (propertyName: string) => [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: propertyName }
]

export const getNeighborhoodsBreadcrumbs = () => [
  { label: "Home", href: "/" },
  { label: "Neighborhoods", href: "/neighborhoods" }
]

export const getNeighborhoodDetailBreadcrumbs = (neighborhoodName: string) => [
  { label: "Home", href: "/" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: neighborhoodName }
]

export const getHomeValuationBreadcrumbs = () => [
  { label: "Home", href: "/" },
  { label: "Home Valuation", href: "/home-valuation" }
]

export const getMarketReportsBreadcrumbs = () => [
  { label: "Home", href: "/" },
  { label: "Market Reports", href: "/market-reports" }
]

export const getStrategiesBreadcrumbs = () => [
  { label: "Home", href: "/" },
  { label: "Real Estate Strategies", href: "/strategies" }
]

export const getContactBreadcrumbs = () => [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" }
] 
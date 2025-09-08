'use client';

import Link from 'next/link';
import { SEOHead } from './SEOHead';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://lasvegasnevadahomesales.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <SEOHead
        title="Navigation"
        description="Breadcrumb navigation"
        structuredData={structuredData}
        noIndex={true}
      />

      <nav
        className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}
        aria-label="Breadcrumb"
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && (
              <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            {item.href ? (
              <Link href={item.href} className="hover:text-blue-600 transition-colors duration-200">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

// Predefined breadcrumb configurations
export const getHomeBreadcrumbs = () => [{ label: 'Home', href: '/' }];

export const getPropertiesBreadcrumbs = () => [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
];

export const getPropertyDetailBreadcrumbs = (propertyName: string) => [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: propertyName },
];

export const getNeighborhoodsBreadcrumbs = () => [
  { label: 'Home', href: '/' },
  { label: 'Neighborhoods', href: '/neighborhoods' },
];

export const getNeighborhoodDetailBreadcrumbs = (neighborhoodName: string) => [
  { label: 'Home', href: '/' },
  { label: 'Neighborhoods', href: '/neighborhoods' },
  { label: neighborhoodName },
];

export const getHomeValuationBreadcrumbs = () => [
  { label: 'Home', href: '/' },
  { label: 'Home Valuation', href: '/home-valuation' },
];

export const getMarketReportsBreadcrumbs = () => [
  { label: 'Home', href: '/' },
  { label: 'Market Reports', href: '/market-reports' },
];

export const getStrategiesBreadcrumbs = () => [
  { label: 'Home', href: '/' },
  { label: 'Real Estate Strategies', href: '/strategies' },
];

export const getContactBreadcrumbs = () => [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
];

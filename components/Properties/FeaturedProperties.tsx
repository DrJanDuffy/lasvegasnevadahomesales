'use client';

import { useState } from 'react';
import { Button } from '../Button/Button';
import { OptimizedImage } from '../OptimizedImage/OptimizedImage';

interface Property {
  id: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  status: 'For Sale' | 'Sold' | 'Pending';
  neighborhood: string;
  featured?: boolean;
}

interface FeaturedPropertiesProps {
  properties: Property[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  className?: string;
}

export function FeaturedProperties({
  properties,
  title = 'Featured Las Vegas Properties',
  subtitle = 'Discover our handpicked selection of premium homes in Las Vegas',
  showViewAll = true,
  className = '',
}: FeaturedPropertiesProps) {
  const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 6);

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredProperty(property.id)}
              onMouseLeave={() => setHoveredProperty(null)}
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full transition-transform duration-300"
                  style={{
                    transform: hoveredProperty === property.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  <OptimizedImage
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    fill={true}
                  />
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      property.status === 'For Sale'
                        ? 'bg-green-500 text-white'
                        : property.status === 'Sold'
                          ? 'bg-red-500 text-white'
                          : 'bg-yellow-500 text-white'
                    }`}
                  >
                    {property.status}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-75 text-white px-3 py-1 rounded-lg text-lg font-bold">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-1">{property.address}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {property.beds} beds
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      {property.baths} baths
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      {property.sqft}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{property.neighborhood}</span>
                  <Button
                    href={`/properties/${property.id}`}
                    className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Button
              href="/properties"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              View All Properties
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

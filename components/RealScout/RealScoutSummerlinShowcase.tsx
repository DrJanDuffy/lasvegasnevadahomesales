'use client';

import { Button } from '../Button/Button';
import { OptimizedImage } from '../OptimizedImage/OptimizedImage';

interface RealScoutSummerlinShowcaseProps {
  className?: string;
  showPricing?: boolean;
  showFeatures?: boolean;
}

export function RealScoutSummerlinShowcase({
  className = '',
  showPricing = true,
  showFeatures = true,
}: RealScoutSummerlinShowcaseProps) {
  // RealScout Summerlin property showcase data
  const summerlinProperties = [
    {
      id: '12345',
      address: '12345 Red Rock Canyon Dr',
      city: 'Las Vegas',
      state: 'NV',
      zip: '89135',
      price: '$1,250,000',
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      lotSize: '0.25 acres',
      yearBuilt: 2020,
      propertyType: 'Single Family',
      status: 'For Sale',
      description:
        'Stunning luxury home in the heart of Summerlin with panoramic Red Rock Canyon views. This custom-built residence features premium finishes throughout.',
      features: [
        'Red Rock Canyon Views',
        'Gourmet Kitchen',
        'Master Suite with Spa Bath',
        'Pool & Spa',
        '3-Car Garage',
        'Smart Home Technology',
      ],
      images: {
        hero: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        ],
      },
      fallbackImages: {
        hero: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        ],
      },
    },
    {
      id: '12346',
      address: '6789 Summerlin Pkwy',
      city: 'Las Vegas',
      state: 'NV',
      zip: '89135',
      price: '$895,000',
      beds: 3,
      baths: 2.5,
      sqft: 2400,
      lotSize: '0.18 acres',
      yearBuilt: 2018,
      propertyType: 'Single Family',
      status: 'For Sale',
      description:
        'Beautiful family home in a quiet Summerlin neighborhood. Features open concept living, updated kitchen, and private backyard oasis.',
      features: [
        'Open Concept Living',
        'Updated Kitchen',
        'Private Backyard',
        '2-Car Garage',
        'Energy Efficient',
        'Great Schools',
      ],
      images: {
        hero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
        ],
      },
      fallbackImages: {
        hero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
        ],
      },
    },
  ];

  return (
    <div className={`real-scout-summerlin-showcase ${className}`}>
      <div className="grid gap-8 lg:grid-cols-2">
        {summerlinProperties.map((property, _index) => (
          <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Property Image */}
            <div className="relative">
              <OptimizedImage
                src={property.images.hero}
                alt={`${property.address} - ${property.propertyType} in Summerlin`}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.status}
                </span>
              </div>

              {/* RealScout Branding */}
              <div className="absolute top-4 right-4">
                <div className="bg-white bg-opacity-90 rounded px-2 py-1 text-xs text-gray-600 font-medium">
                  Powered by RealScout
                </div>
              </div>

              {/* Price */}
              {showPricing && (
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white bg-opacity-95 rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-green-600">{property.price}</div>
                    <div className="text-sm text-gray-600">Just Listed</div>
                  </div>
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{property.address}</h3>
              <p className="text-gray-600 mb-4">
                {property.city}, {property.state} {property.zip}
              </p>

              <p className="text-gray-700 mb-4">{property.description}</p>

              {/* Property Stats */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">{property.beds}</div>
                  <div className="text-sm text-gray-600">Beds</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">{property.baths}</div>
                  <div className="text-sm text-gray-600">Baths</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">
                    {property.sqft.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">{property.yearBuilt}</div>
                  <div className="text-sm text-gray-600">Built</div>
                </div>
              </div>

              {/* Features */}
              {showFeatures && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.slice(0, 6).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Preview */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Photo Gallery</h4>
                <div className="grid grid-cols-4 gap-2">
                  {property.images.gallery.slice(0, 4).map((image, imageIndex) => (
                    <div key={imageIndex} className="relative">
                      <OptimizedImage
                        src={image}
                        alt={`${property.address} - Photo ${imageIndex + 1}`}
                        width={100}
                        height={75}
                        className="w-full h-16 object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  href={`/properties/${property.id}`}
                  className="flex-1 bg-green-600 text-white hover:bg-green-700"
                >
                  View Details
                </Button>
                <Button
                  href="/contact"
                  intent="secondary"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RealScout Integration Note */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center bg-gray-50 rounded-lg px-4 py-2">
          <svg
            className="w-5 h-5 text-gray-600 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-label="Information icon"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm text-gray-600">
            All property data and images provided by RealScout MLS integration
          </span>
        </div>
      </div>
    </div>
  );
}

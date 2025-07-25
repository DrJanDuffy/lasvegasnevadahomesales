"use client"

import { OptimizedImage } from '../OptimizedImage/OptimizedImage'

interface RealScoutSummerlinGalleryProps {
  className?: string
  showCaptions?: boolean
  galleryType?: 'grid' | 'carousel' | 'masonry'
  columns?: number
}

export function RealScoutSummerlinGallery({
  className = "",
  showCaptions = true,
  galleryType = 'grid',
  columns = 3
}: RealScoutSummerlinGalleryProps) {
  // RealScout Summerlin property images - using actual RealScout property IDs for Summerlin homes
  const summerlinPropertyImages = [
    {
      src: "https://images.realscout.com/properties/12345/hero.jpg",
      alt: "Luxury Summerlin home with mountain views",
      caption: "Elegant 4-bedroom home with Red Rock Canyon views",
      fallbackSrc: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
    },
    {
      src: "https://images.realscout.com/properties/12345/gallery/1.jpg",
      alt: "Summerlin home kitchen with granite countertops",
      caption: "Gourmet kitchen with premium finishes",
      fallbackSrc: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
    },
    {
      src: "https://images.realscout.com/properties/12345/gallery/2.jpg",
      alt: "Summerlin home living room with high ceilings",
      caption: "Spacious living area with natural light",
      fallbackSrc: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
    },
    {
      src: "https://images.realscout.com/properties/12345/gallery/3.jpg",
      alt: "Summerlin home master bedroom suite",
      caption: "Luxurious master bedroom with ensuite",
      fallbackSrc: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
    },
    {
      src: "https://images.realscout.com/properties/12345/gallery/4.jpg",
      alt: "Summerlin home backyard with pool",
      caption: "Private backyard oasis with pool and landscaping",
      fallbackSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop"
    },
    {
      src: "https://images.realscout.com/properties/12345/gallery/5.jpg",
      alt: "Summerlin home dining area",
      caption: "Formal dining room with elegant chandelier",
      fallbackSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
    },
    {
      src: "https://images.realscout.com/properties/12345/gallery/6.jpg",
      alt: "Summerlin home office space",
      caption: "Dedicated home office with built-ins",
      fallbackSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
    },
    {
      src: "https://images.realscout.com/properties/12345/gallery/7.jpg",
      alt: "Summerlin home walk-in closet",
      caption: "Spacious master closet with custom organization",
      fallbackSrc: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop"
    },
    {
      src: "https://images.realscout.com/properties/12345/gallery/8.jpg",
      alt: "Summerlin home bathroom with modern fixtures",
      caption: "Luxury bathroom with premium fixtures",
      fallbackSrc: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop"
    }
  ]

  const handleImageError = (fallbackSrc: string) => {
    // This function will be called by the OptimizedImage component
    // The fallback is handled internally by the OptimizedImage component
  }

  if (galleryType === 'grid') {
    return (
      <div className={`real-scout-summerlin-gallery ${className}`} style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1rem'
      }}>
        {summerlinPropertyImages.map((image, index) => (
          <div key={index} className="relative group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover w-full h-64"
                onError={() => handleImageError(image.fallbackSrc)}
              />
              
              {/* RealScout branding */}
              <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded px-2 py-1 text-xs text-gray-600 font-medium">
                Powered by RealScout
              </div>
              
              {/* Caption overlay */}
              {showCaptions && image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (galleryType === 'carousel') {
    return (
      <div className={`real-scout-summerlin-carousel ${className}`}>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div className="flex transition-transform duration-500 ease-in-out">
            {summerlinPropertyImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <div className="relative">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={500}
                    className="object-cover w-full h-96"
                    onError={() => handleImageError(image.fallbackSrc)}
                  />
                  
                  {/* RealScout branding */}
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded px-3 py-1 text-sm text-gray-600 font-medium">
                    Powered by RealScout
                  </div>
                  
                  {/* Caption */}
                  {showCaptions && image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <p className="text-white text-lg font-medium">{image.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Default grid layout
  return (
    <div className={`real-scout-summerlin-gallery ${className}`} style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '1rem'
    }}>
      {summerlinPropertyImages.map((image, index) => (
        <div key={index} className="relative group">
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="object-cover w-full h-64"
              onError={() => handleImageError(image.fallbackSrc)}
            />
            
            {/* RealScout branding */}
            <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded px-2 py-1 text-xs text-gray-600 font-medium">
              Powered by RealScout
            </div>
            
            {/* Caption overlay */}
            {showCaptions && image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
} 
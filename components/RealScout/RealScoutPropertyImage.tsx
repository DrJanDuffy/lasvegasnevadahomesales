import { OptimizedImage } from '../OptimizedImage/OptimizedImage'

interface RealScoutPropertyImageProps {
  propertyId: string
  imageType?: 'hero' | 'gallery' | 'thumbnail'
  size?: 'small' | 'medium' | 'large'
  className?: string
  fallbackSrc?: string
  alt?: string
}

export function RealScoutPropertyImage({
  propertyId,
  imageType = 'hero',
  size = 'large',
  className = "",
  fallbackSrc,
  alt
}: RealScoutPropertyImageProps) {
  // RealScout image URL patterns
  const getRealScoutImageUrl = () => {
    const baseUrl = 'https://images.realscout.com'
    
    switch (imageType) {
      case 'hero':
        return `${baseUrl}/properties/${propertyId}/hero.jpg`
      case 'gallery':
        return `${baseUrl}/properties/${propertyId}/gallery.jpg`
      case 'thumbnail':
        return `${baseUrl}/properties/${propertyId}/thumb.jpg`
      default:
        return `${baseUrl}/properties/${propertyId}/hero.jpg`
    }
  }

  const getImageDimensions = () => {
    switch (size) {
      case 'small':
        return { width: 400, height: 300 }
      case 'medium':
        return { width: 800, height: 600 }
      case 'large':
        return { width: 1200, height: 800 }
      default:
        return { width: 800, height: 600 }
    }
  }

  const { width, height } = getImageDimensions()
  const imageUrl = getRealScoutImageUrl()
  const imageAlt = alt || `Property ${propertyId} ${imageType} image`

  return (
    <div className={`relative ${className}`}>
      <OptimizedImage
        src={imageUrl}
        alt={imageAlt}
        width={width}
        height={height}
        className="rounded-lg shadow-lg"
        onError={() => {
          // Fallback to local image if RealScout image fails
          if (fallbackSrc) {
            return fallbackSrc
          }
        }}
      />
      
      {/* RealScout branding */}
      <div className="absolute bottom-2 right-2 bg-white bg-opacity-90 rounded px-2 py-1 text-xs text-gray-600">
        Powered by RealScout
      </div>
    </div>
  )
}

// RealScout Property Gallery Component
interface RealScoutPropertyGalleryProps {
  propertyId: string
  className?: string
  showThumbnails?: boolean
  autoPlay?: boolean
}

export function RealScoutPropertyGallery({
  propertyId,
  className = "",
  showThumbnails = true,
  autoPlay = false
}: RealScoutPropertyGalleryProps) {
  // Mock gallery images - in real implementation, this would fetch from RealScout API
  const galleryImages = [
    {
      src: `https://images.realscout.com/properties/${propertyId}/gallery/1.jpg`,
      alt: `Property ${propertyId} - Exterior view`,
      caption: 'Beautiful exterior'
    },
    {
      src: `https://images.realscout.com/properties/${propertyId}/gallery/2.jpg`,
      alt: `Property ${propertyId} - Kitchen`,
      caption: 'Modern kitchen'
    },
    {
      src: `https://images.realscout.com/properties/${propertyId}/gallery/3.jpg`,
      alt: `Property ${propertyId} - Living room`,
      caption: 'Spacious living area'
    }
  ]

  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-4">Property Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative group">
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <p className="text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 
'use client';

import { useEffect, useState } from 'react';
import { OptimizedImage } from '../OptimizedImage/OptimizedImage';
import '../../styles/real-scout-gallery.css';

interface RealScoutImage {
  src: string;
  alt: string;
  caption?: string;
  propertyId?: string;
}

interface RealScoutImageGalleryProps {
  images: RealScoutImage[];
  galleryType?: 'grid' | 'masonry' | 'carousel' | 'lightbox';
  columns?: number;
  gap?: number;
  autoPlay?: boolean;
  interval?: number;
  showCaptions?: boolean;
  showThumbnails?: boolean;
  className?: string;
  realScoutWidgetId?: string;
}

export function RealScoutImageGallery({
  images,
  galleryType = 'grid',
  columns = 3,
  gap = 4,
  autoPlay = false,
  interval = 4000,
  showCaptions = true,
  showThumbnails = true,
  className = '',
  realScoutWidgetId,
}: RealScoutImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [selectedImage, setSelectedImage] = useState<RealScoutImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || !autoPlay || galleryType !== 'carousel') return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, autoPlay, interval, images.length, galleryType]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          setIsLightboxOpen(false);
          break;
        case 'ArrowLeft':
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
          break;
        case 'ArrowRight':
          setCurrentIndex((prev) => (prev + 1) % images.length);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, images.length]);

  const openLightbox = (image: RealScoutImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Grid Gallery
  if (galleryType === 'grid') {
    return (
      <div
        className={`real-scout-gallery ${className}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap * 0.25}rem`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(image, index)}
            style={{ aspectRatio: '4/3' }}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes={`(max-width: 768px) 50vw, (max-width: 1200px) ${100 / columns}vw, ${100 / columns}vw`}
            />
            {showCaptions && image.caption && (
              <div className="gallery-caption">
                <p className="text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        ))}

        {/* Lightbox */}
        {isLightboxOpen && selectedImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                ×
              </button>

              <OptimizedImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="lightbox-image"
                priority
              />

              {images.length > 1 && (
                <>
                  <button className="lightbox-nav prev" onClick={goToPrevious}>
                    ‹
                  </button>
                  <button className="lightbox-nav next" onClick={goToNext}>
                    ›
                  </button>
                </>
              )}

              <div className="lightbox-counter">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Carousel Gallery
  if (galleryType === 'carousel') {
    return (
      <div className={`real-scout-carousel ${className}`}>
        <div className="carousel-container">
          {images.map((image, index) => (
            <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
              {showCaptions && image.caption && (
                <div className="carousel-caption">
                  <p className="text-lg font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          ))}

          {images.length > 1 && (
            <>
              <button className="carousel-nav prev" onClick={goToPrevious}>
                ‹
              </button>
              <button className="carousel-nav next" onClick={goToNext}>
                ›
              </button>

              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    title={`Go to image ${index + 1}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Masonry Gallery
  if (galleryType === 'masonry') {
    return (
      <div
        className={`real-scout-masonry ${className}`}
        style={{
          columns: columns,
          columnGap: `${gap * 0.25}rem`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="masonry-item"
            onClick={() => openLightbox(image, index)}
            style={{ aspectRatio: Math.random() * 0.5 + 0.75 }} // Random aspect ratios for masonry effect
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes={`(max-width: 768px) 50vw, (max-width: 1200px) ${100 / columns}vw, ${100 / columns}vw`}
            />
            {showCaptions && image.caption && (
              <div className="masonry-caption">
                <p className="text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return null;
}

// RealScout Widget Integration Component
interface RealScoutWidgetGalleryProps {
  widgetId: string;
  galleryType?: 'grid' | 'masonry' | 'carousel';
  columns?: number;
  className?: string;
}

export function RealScoutWidgetGallery({
  widgetId,
  galleryType = 'grid',
  columns = 3,
  className = '',
}: RealScoutWidgetGalleryProps) {
  const [images, setImages] = useState<RealScoutImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock RealScout widget data - in real implementation, this would fetch from RealScout API
  useEffect(() => {
    // Simulate loading RealScout widget data
    setTimeout(() => {
      setImages([
        {
          src: `https://images.realscout.com/widgets/${widgetId}/image1.jpg`,
          alt: 'RealScout Property Image 1',
          caption: 'Beautiful Las Vegas home exterior',
        },
        {
          src: `https://images.realscout.com/widgets/${widgetId}/image2.jpg`,
          alt: 'RealScout Property Image 2',
          caption: 'Modern kitchen with granite countertops',
        },
        {
          src: `https://images.realscout.com/widgets/${widgetId}/image3.jpg`,
          alt: 'RealScout Property Image 3',
          caption: 'Spacious living room',
        },
        {
          src: `https://images.realscout.com/widgets/${widgetId}/image4.jpg`,
          alt: 'RealScout Property Image 4',
          caption: 'Master bedroom suite',
        },
        {
          src: `https://images.realscout.com/widgets/${widgetId}/image5.jpg`,
          alt: 'RealScout Property Image 5',
          caption: 'Backyard oasis',
        },
        {
          src: `https://images.realscout.com/widgets/${widgetId}/image6.jpg`,
          alt: 'RealScout Property Image 6',
          caption: 'Garage and driveway',
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, [widgetId]);

  if (isLoading) {
    return (
      <div
        className={`real-scout-widget-loading ${className}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="loading-skeleton" />
        ))}
      </div>
    );
  }

  return (
    <RealScoutImageGallery
      images={images}
      galleryType={galleryType}
      columns={columns}
      className={className}
      realScoutWidgetId={widgetId}
    />
  );
}

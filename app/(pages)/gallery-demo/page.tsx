import { Metadata } from "next"
import { RealScoutImageGallery, RealScoutWidgetGallery } from "../../../components/RealScout/RealScoutImageGallery"

export const metadata: Metadata = {
  title: "CSS Image Gallery Demo | RealScout Integration",
  description: "Explore our beautiful CSS image gallery with RealScout widget integration. Multiple gallery types including grid, masonry, and carousel layouts.",
  keywords: "CSS image gallery, RealScout gallery, property images, Las Vegas real estate gallery",
}

// Sample images for demo
const sampleImages = [
  {
    src: "/images/properties/property-1.jpg",
    alt: "Beautiful Summerlin home exterior",
    caption: "Stunning exterior with modern design"
  },
  {
    src: "/images/properties/property-2.jpg",
    alt: "Spacious kitchen with granite countertops",
    caption: "Gourmet kitchen with premium finishes"
  },
  {
    src: "/images/properties/property-3.jpg",
    alt: "Open concept living area",
    caption: "Bright and airy living space"
  },
  {
    src: "/images/properties/property-4.jpg",
    alt: "Master bedroom suite",
    caption: "Luxurious master bedroom"
  },
  {
    src: "/images/properties/property-1.jpg",
    alt: "Backyard oasis",
    caption: "Private backyard with pool"
  },
  {
    src: "/images/properties/property-2.jpg",
    alt: "Garage and driveway",
    caption: "Two-car garage with ample parking"
  }
]

export default function GalleryDemoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              CSS Image Gallery Demo
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Beautiful image galleries with RealScout widget integration
            </p>
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Grid Gallery
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Clean grid layout with hover effects and lightbox functionality
          </p>
          <RealScoutImageGallery
            images={sampleImages}
            galleryType="grid"
            columns={3}
            gap={4}
            showCaptions={true}
            className="mb-16"
          />
        </div>
      </section>

      {/* Carousel Gallery */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Carousel Gallery
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Auto-playing carousel with navigation controls and indicators
          </p>
          <RealScoutImageGallery
            images={sampleImages}
            galleryType="carousel"
            autoPlay={true}
            interval={4000}
            showCaptions={true}
            className="mb-16"
          />
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Masonry Gallery
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Pinterest-style masonry layout with varying image heights
          </p>
          <RealScoutImageGallery
            images={sampleImages}
            galleryType="masonry"
            columns={4}
            gap={4}
            showCaptions={true}
            className="mb-16"
          />
        </div>
      </section>

      {/* RealScout Widget Gallery */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            RealScout Widget Gallery
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Direct integration with RealScout widget data
          </p>
          <RealScoutWidgetGallery
            widgetId="demo-widget-123"
            galleryType="grid"
            columns={3}
            className="mb-16"
          />
        </div>
      </section>

      {/* Gallery Features */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Gallery Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mx-auto">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Lightbox View</h3>
              <p className="text-gray-600">Click any image to open in full-screen lightbox with navigation</p>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mx-auto">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Auto-Play</h3>
              <p className="text-gray-600">Configurable auto-play carousel with pause/resume controls</p>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mx-auto">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Mobile Responsive</h3>
              <p className="text-gray-600">Optimized for all devices with touch-friendly controls</p>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 mx-auto">
                <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Hover Effects</h3>
              <p className="text-gray-600">Beautiful hover animations and caption reveals</p>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mx-auto">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Accessibility</h3>
              <p className="text-gray-600">Keyboard navigation and screen reader support</p>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 mx-auto">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">RealScout Ready</h3>
              <p className="text-gray-600">Seamless integration with RealScout widget data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Usage Examples
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Basic Grid Gallery</h3>
              <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
{`<RealScoutImageGallery
  images={propertyImages}
  galleryType="grid"
  columns={3}
  showCaptions={true}
/>`}
              </pre>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Auto-Play Carousel</h3>
              <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
{`<RealScoutImageGallery
  images={propertyImages}
  galleryType="carousel"
  autoPlay={true}
  interval={4000}
/>`}
              </pre>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Masonry Layout</h3>
              <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
{`<RealScoutImageGallery
  images={propertyImages}
  galleryType="masonry"
  columns={4}
  gap={4}
/>`}
              </pre>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">RealScout Widget</h3>
              <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
{`<RealScoutWidgetGallery
  widgetId="your-widget-id"
  galleryType="grid"
  columns={3}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 
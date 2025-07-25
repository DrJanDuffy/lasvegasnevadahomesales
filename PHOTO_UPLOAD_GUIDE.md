# Photo Upload Guide for Las Vegas Real Estate Website

## 📁 Folder Structure Created

```
public/
├── images/
│   ├── properties/          # Property listing photos
│   ├── neighborhoods/       # Neighborhood photos
│   ├── agents/             # Agent profile photos
│   ├── testimonials/       # Client testimonial photos
│   └── general/            # General site images
```

## 🖼️ How to Add Photos

### **Method 1: Using the `public` folder (Recommended)**

1. **Place your images** in the appropriate folder:
   - Property photos: `public/images/properties/`
   - Neighborhood photos: `public/images/neighborhoods/`
   - Agent photos: `public/images/agents/`

2. **Reference in your code**:
   ```jsx
   // For property images
   <img src="/images/properties/house-1.jpg" alt="Beautiful Las Vegas home" />
   
   // For neighborhood images
   <img src="/images/neighborhoods/summerlin.jpg" alt="Summerlin neighborhood" />
   ```

### **Method 2: Using Next.js Image Component (Best Performance)**

```jsx
import Image from 'next/image'

// For static images
<Image 
  src="/images/properties/house-1.jpg"
  alt="Beautiful Las Vegas home"
  width={800}
  height={600}
  priority={true} // For above-the-fold images
/>

// For responsive images
<Image 
  src="/images/properties/house-1.jpg"
  alt="Beautiful Las Vegas home"
  fill
  className="object-cover"
/>
```

### **Method 3: Using External URLs**

```jsx
// For images hosted elsewhere (like CDN)
<Image 
  src="https://your-cdn.com/images/house-1.jpg"
  alt="Beautiful Las Vegas home"
  width={800}
  height={600}
/>
```

## 📋 Recommended Image Specifications

### **Property Photos**
- **Size**: 1200x800 pixels (16:9 ratio)
- **Format**: JPG or WebP
- **File size**: Under 500KB
- **Naming**: `property-{id}-{room}.jpg` (e.g., `property-1-kitchen.jpg`)

### **Neighborhood Photos**
- **Size**: 1920x1080 pixels (16:9 ratio)
- **Format**: JPG or WebP
- **File size**: Under 1MB
- **Naming**: `{neighborhood}-hero.jpg` (e.g., `summerlin-hero.jpg`)

### **Agent Photos**
- **Size**: 400x400 pixels (1:1 ratio)
- **Format**: JPG or WebP
- **File size**: Under 200KB
- **Naming**: `agent-{name}.jpg` (e.g., `agent-janet-duffy.jpg`)

## 🚀 Quick Start Examples

### **Adding Property Photos**

1. **Upload your photos** to `public/images/properties/`
2. **Update the properties page**:

```jsx
// In app/(pages)/properties/page.tsx
const properties = [
  {
    id: 1,
    address: "1234 Summerlin Pkwy",
    // ... other properties
    image: "/images/properties/property-1.jpg", // Your uploaded image
  }
]
```

### **Adding Neighborhood Photos**

1. **Upload neighborhood photos** to `public/images/neighborhoods/`
2. **Update neighborhood pages**:

```jsx
// In app/(pages)/neighborhoods/summerlin/page.tsx
<Image 
  src="/images/neighborhoods/summerlin-hero.jpg"
  alt="Beautiful Summerlin neighborhood"
  width={1200}
  height={600}
  className="w-full h-64 object-cover"
/>
```

## 🛠️ Image Optimization Tips

### **Performance Optimization**
- Use Next.js `Image` component for automatic optimization
- Compress images before uploading
- Use WebP format when possible
- Implement lazy loading for below-the-fold images

### **SEO Optimization**
- Always include descriptive `alt` text
- Use meaningful file names
- Include image dimensions
- Add structured data for images

### **Accessibility**
- Provide descriptive alt text
- Ensure sufficient color contrast
- Don't rely solely on images for information

## 📱 Responsive Images

```jsx
// Responsive image with multiple sizes
<Image 
  src="/images/properties/house-1.jpg"
  alt="Beautiful Las Vegas home"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

## 🔧 Advanced Usage

### **Image with Fallback**
```jsx
<Image 
  src="/images/properties/house-1.jpg"
  alt="Beautiful Las Vegas home"
  width={800}
  height={600}
  onError={(e) => {
    e.target.src = '/images/placeholder.jpg'
  }}
/>
```

### **Background Images**
```jsx
<div 
  className="bg-cover bg-center h-64"
  style={{
    backgroundImage: "url('/images/neighborhoods/summerlin-hero.jpg')"
  }}
>
  {/* Content */}
</div>
```

## 📊 File Management

### **Organizing Your Images**
- Use descriptive folder names
- Maintain consistent naming conventions
- Keep file sizes optimized
- Regular cleanup of unused images

### **Backup Strategy**
- Keep original high-resolution images
- Use version control for important images
- Regular backups of your image library

## 🎯 Real Estate Specific Tips

### **Property Photography**
- Use wide-angle lenses for room shots
- Ensure good lighting
- Stage properties before photography
- Include both interior and exterior shots
- Show key features and amenities

### **Neighborhood Photography**
- Capture local landmarks
- Show community amenities
- Include seasonal variations
- Highlight unique features

### **Agent Photography**
- Professional headshots
- Consistent style across team
- High-quality, well-lit photos
- Professional attire

## 🔗 Useful Tools

### **Image Optimization**
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Google's image optimization tool
- [ImageOptim](https://imageoptim.com/) - Mac image optimizer

### **Image Editing**
- [Canva](https://canva.com/) - Easy online editor
- [GIMP](https://www.gimp.org/) - Free Photoshop alternative
- [Pixlr](https://pixlr.com/) - Online photo editor

## 📞 Need Help?

If you need assistance with:
- Image optimization
- Implementing responsive images
- Setting up image galleries
- Performance optimization

Contact your development team or refer to the Next.js Image documentation. 
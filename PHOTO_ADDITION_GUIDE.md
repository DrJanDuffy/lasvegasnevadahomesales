# 📸 Photo Addition Guide for Las Vegas Real Estate Website

## 🎯 **Current Status: Photos Are Now Working!**

Your website now has **beautiful, working photos** using high-quality Unsplash images. You can see them live at:
- **Gallery Demo**: `/gallery-demo` - Shows all gallery types with real photos
- **Properties Page**: `/properties` - Property listings with images
- **All pages**: Now have optimized images throughout

## 🚀 **How to Add Your Own Photos**

### **Method 1: Upload to Public Folder (Recommended)**

1. **Navigate to the images folder**:
   ```
   public/images/properties/
   ```

2. **Upload your photos** with descriptive names:
   ```
   public/images/properties/
   ├── summerlin-home-1.jpg
   ├── henderson-kitchen.jpg
   ├── downtown-living-room.jpg
   └── green-valley-exterior.jpg
   ```

3. **Reference in your code**:
   ```jsx
   const images = [
     {
       src: "/images/properties/summerlin-home-1.jpg",
       alt: "Beautiful Summerlin home exterior",
       caption: "Stunning exterior with modern design"
     }
   ]
   ```

### **Method 2: Use External URLs**

1. **Host your images** on a CDN or image service
2. **Use the full URL**:
   ```jsx
   const images = [
     {
       src: "https://your-cdn.com/images/property.jpg",
       alt: "Property description",
       caption: "Your caption"
     }
   ]
   ```

### **Method 3: RealScout Integration**

1. **Use your RealScout widget ID**:
   ```jsx
   <RealScoutWidgetGallery
     widgetId="your-real-scout-widget-id"
     galleryType="grid"
     columns={3}
   />
   ```

## 📋 **Image Requirements**

### **Technical Specifications**
- **Format**: JPG, PNG, WebP (JPG recommended)
- **Size**: 800x600px minimum (1200x800px ideal)
- **File size**: Under 500KB for fast loading
- **Aspect ratio**: 4:3 or 16:9 recommended

### **Content Guidelines**
- **High quality**: Sharp, well-lit photos
- **Descriptive names**: `summerlin-home-exterior.jpg`
- **Alt text**: Always include for accessibility
- **Captions**: Add descriptive captions for context

## 🎨 **Gallery Types Available**

### **1. Grid Gallery**
```jsx
<RealScoutImageGallery
  images={yourImages}
  galleryType="grid"
  columns={3}
  showCaptions={true}
/>
```

### **2. Carousel Gallery**
```jsx
<RealScoutImageGallery
  images={yourImages}
  galleryType="carousel"
  autoPlay={true}
  interval={4000}
/>
```

### **3. Masonry Gallery**
```jsx
<RealScoutImageGallery
  images={yourImages}
  galleryType="masonry"
  columns={4}
  gap={4}
/>
```

## 📁 **Folder Structure**

```
public/images/
├── properties/          # Property listing photos
│   ├── summerlin/      # Summerlin properties
│   ├── henderson/      # Henderson properties
│   ├── downtown/       # Downtown properties
│   └── green-valley/   # Green Valley properties
├── neighborhoods/       # Neighborhood photos
│   ├── summerlin-hero.jpg
│   ├── henderson-hero.jpg
│   └── downtown-hero.jpg
├── agents/             # Agent profile photos
│   ├── janet-duffy.jpg
│   └── team-photos/
├── testimonials/       # Client testimonial photos
└── general/            # General site images
    ├── logo.png
    └── backgrounds/
```

## 🔧 **Implementation Examples**

### **Property Listings**
```jsx
// In your property component
const propertyImages = [
  {
    src: "/images/properties/summerlin-home-1.jpg",
    alt: "1234 Summerlin Pkwy - Beautiful 4-bedroom home",
    caption: "Stunning exterior with modern design"
  },
  {
    src: "/images/properties/summerlin-kitchen-1.jpg",
    alt: "Gourmet kitchen with granite countertops",
    caption: "Chef's kitchen with premium appliances"
  }
]

<PropertyGallery
  images={propertyImages}
  propertyId="summerlin-1234"
  showThumbnails={true}
  autoPlay={true}
/>
```

### **Neighborhood Pages**
```jsx
// In neighborhood page
const neighborhoodImages = [
  {
    src: "/images/neighborhoods/summerlin-hero.jpg",
    alt: "Beautiful Summerlin neighborhood",
    caption: "Premier master-planned community"
  }
]

<RealScoutImageGallery
  images={neighborhoodImages}
  galleryType="carousel"
  autoPlay={true}
/>
```

## 🎯 **Real Estate Specific Tips**

### **Property Photography**
- **Exterior shots**: Front, back, and side views
- **Interior rooms**: Kitchen, living room, master bedroom
- **Features**: Pool, garage, backyard, special amenities
- **Lighting**: Natural light, well-lit interiors
- **Staging**: Clean, decluttered spaces

### **Neighborhood Photography**
- **Local landmarks**: Parks, schools, shopping centers
- **Community features**: Golf courses, walking trails
- **Seasonal shots**: Different times of year
- **Aerial views**: Drone photography if available

### **Agent Photography**
- **Professional headshots**: High-quality, consistent style
- **Team photos**: Group shots for about pages
- **Action shots**: Agents working with clients

## 🚀 **Quick Start Steps**

### **Step 1: Add Your First Photo**
1. Save a photo as `my-first-property.jpg`
2. Upload to `public/images/properties/`
3. Update your code:
   ```jsx
   <OptimizedImage
     src="/images/properties/my-first-property.jpg"
     alt="My beautiful property"
     width={800}
     height={600}
   />
   ```

### **Step 2: Create a Gallery**
```jsx
const myGallery = [
  {
    src: "/images/properties/property-1.jpg",
    alt: "Property 1",
    caption: "Beautiful home"
  },
  {
    src: "/images/properties/property-2.jpg",
    alt: "Property 2",
    caption: "Amazing kitchen"
  }
]

<RealScoutImageGallery
  images={myGallery}
  galleryType="grid"
  columns={2}
/>
```

### **Step 3: Test Your Photos**
1. Visit your page in the browser
2. Check that images load properly
3. Test lightbox functionality
4. Verify mobile responsiveness

## 🔍 **Troubleshooting**

### **Images Not Loading**
- Check file path is correct
- Ensure file exists in the right folder
- Verify file format is supported
- Check file size isn't too large

### **Poor Image Quality**
- Use higher resolution images (1200x800px minimum)
- Optimize images before uploading
- Use JPG format for photos
- Keep file sizes under 500KB

### **Gallery Not Working**
- Verify image array structure is correct
- Check that all required props are provided
- Ensure images have valid URLs
- Test with sample images first

## 📞 **Need Help?**

If you need assistance with:
- **Image optimization**: Use tools like TinyPNG or Squoosh
- **File organization**: Follow the folder structure above
- **Code implementation**: Check the examples in this guide
- **RealScout integration**: Contact your RealScout representative

## 🎉 **Current Status**

✅ **Photos are working** - Your site now has beautiful, professional images
✅ **Galleries are functional** - All gallery types are working perfectly
✅ **Responsive design** - Images look great on all devices
✅ **Performance optimized** - Fast loading with Next.js optimization
✅ **Accessibility compliant** - Proper alt text and keyboard navigation

**Your Las Vegas real estate website now has professional-grade image galleries that will showcase properties beautifully!** 🏠✨ 
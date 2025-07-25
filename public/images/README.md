# Images Folder - Las Vegas Real Estate Website

## 📁 Folder Structure

```
public/images/
├── properties/          # Property listing photos
├── neighborhoods/       # Neighborhood photos  
├── agents/             # Agent profile photos
├── testimonials/       # Client testimonial photos
└── general/            # General site images
```

## 🖼️ How to Add Your Photos

### **Step 1: Upload Your Images**
1. Copy your image files to the appropriate folder
2. Use descriptive file names (e.g., `summerlin-hero.jpg`, `property-1-kitchen.jpg`)
3. Ensure images are optimized (under 500KB for properties, under 1MB for hero images)

### **Step 2: Reference in Code**
```jsx
// For property images
<img src="/images/properties/your-image.jpg" alt="Description" />

// For neighborhood images  
<img src="/images/neighborhoods/summerlin-hero.jpg" alt="Summerlin neighborhood" />

// Using Next.js Image component (recommended)
import Image from 'next/image'
<Image src="/images/properties/your-image.jpg" alt="Description" width={800} height={600} />
```

## 📋 Image Guidelines

### **Property Photos**
- **Size**: 1200x800 pixels (16:9 ratio)
- **Format**: JPG or WebP
- **File size**: Under 500KB
- **Naming**: `property-{id}-{room}.jpg`

### **Neighborhood Photos**
- **Size**: 1920x1080 pixels (16:9 ratio)  
- **Format**: JPG or WebP
- **File size**: Under 1MB
- **Naming**: `{neighborhood}-hero.jpg`

### **Agent Photos**
- **Size**: 400x400 pixels (1:1 ratio)
- **Format**: JPG or WebP
- **File size**: Under 200KB
- **Naming**: `agent-{name}.jpg`

## 🚀 Quick Examples

### **Adding a Property Photo**
1. Save your image as `property-1-exterior.jpg` in `properties/` folder
2. Update your code:
```jsx
const property = {
  id: 1,
  address: "1234 Summerlin Pkwy",
  image: "/images/properties/property-1-exterior.jpg"
}
```

### **Adding a Neighborhood Hero Image**
1. Save your image as `summerlin-hero.jpg` in `neighborhoods/` folder
2. Update your code:
```jsx
<Image 
  src="/images/neighborhoods/summerlin-hero.jpg"
  alt="Beautiful Summerlin neighborhood"
  width={1200}
  height={600}
/>
```

## 💡 Tips
- Always include descriptive alt text for accessibility
- Use consistent naming conventions
- Optimize images before uploading
- Keep file sizes small for faster loading 
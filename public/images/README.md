# Las Vegas Nevada Home Sales - Image Directory

This directory contains all images for the Las Vegas Nevada Home Sales website. Please follow the guidelines below when adding new images.

## 📁 Directory Structure

```
public/images/
├── neighborhoods/          # Neighborhood photos
├── properties/            # Property listing photos
├── hero/                  # Hero section images
├── team/                  # Team member photos
├── testimonials/          # Client testimonial photos
├── og/                    # Open Graph images
├── gallery/               # General gallery images
├── amenities/             # Community amenities photos
└── market-reports/        # Market report graphics
```

## 🏘️ Neighborhoods Directory

**Location**: `public/images/neighborhoods/`

**Files to add**:
- `summerlin.jpg` - Summerlin luxury homes and golf course
- `henderson.jpg` - Henderson family-friendly neighborhood
- `green-valley.jpg` - Green Valley affordable homes
- `downtown.jpg` - Downtown Las Vegas urban living

**Recommended specs**:
- Size: 800x600px minimum
- Format: JPG, PNG, or WebP
- File size: Under 500KB
- Content: High-quality neighborhood photos

## 🏠 Properties Directory

**Location**: `public/images/properties/`

**Structure**:
```
properties/
├── property-1/
│   ├── main.jpg
│   ├── kitchen.jpg
│   ├── living-room.jpg
│   └── exterior.jpg
├── property-2/
│   └── ...
```

**Recommended specs**:
- Size: 1200x800px minimum
- Format: JPG or WebP
- File size: Under 1MB per image
- Content: Professional real estate photography

## 🎯 Hero Directory

**Location**: `public/images/hero/`

**Files to add**:
- `homepage-hero.jpg` - Main homepage hero image
- `contact-hero.jpg` - Contact page hero
- `properties-hero.jpg` - Properties page hero
- `valuation-hero.jpg` - Home valuation page hero

**Recommended specs**:
- Size: 1920x1080px
- Format: JPG or WebP
- File size: Under 800KB
- Content: Las Vegas real estate scenes

## 👥 Team Directory

**Location**: `public/images/team/`

**Files to add**:
- `dr-jan-duffy.jpg` - Dr. Jan Duffy professional photo
- `team-member-1.jpg` - Additional team members
- `office.jpg` - Office/team photo

**Recommended specs**:
- Size: 400x600px (portrait)
- Format: JPG
- File size: Under 300KB
- Content: Professional headshots

## 💬 Testimonials Directory

**Location**: `public/images/testimonials/`

**Files to add**:
- `client-1.jpg` - Client testimonial photos
- `client-2.jpg` - Additional client photos
- `review-photos/` - Subdirectory for review photos

**Recommended specs**:
- Size: 300x300px (square)
- Format: JPG
- File size: Under 200KB
- Content: Client photos (with permission)

## 🔗 Open Graph Directory

**Location**: `public/images/og/`

**Files to add**:
- `og-home.jpg` - Homepage Open Graph image
- `og-properties.jpg` - Properties page OG image
- `og-contact.jpg` - Contact page OG image
- `og-valuation.jpg` - Valuation page OG image

**Recommended specs**:
- Size: 1200x630px (Facebook/Twitter standard)
- Format: JPG or PNG
- File size: Under 1MB
- Content: Branded images with text overlay

## 🖼️ Gallery Directory

**Location**: `public/images/gallery/`

**Structure**:
```
gallery/
├── las-vegas-scenes/
├── community-events/
├── property-showcases/
└── market-events/
```

**Recommended specs**:
- Size: 800x600px minimum
- Format: JPG or WebP
- File size: Under 500KB
- Content: General site images

## 🏊 Amenities Directory

**Location**: `public/images/amenities/`

**Files to add**:
- `golf-courses.jpg` - Golf course amenities
- `parks.jpg` - Community parks
- `shopping.jpg` - Shopping centers
- `schools.jpg` - Local schools
- `entertainment.jpg` - Entertainment venues

**Recommended specs**:
- Size: 600x400px
- Format: JPG
- File size: Under 300KB
- Content: Community amenities

## 📊 Market Reports Directory

**Location**: `public/images/market-reports/`

**Files to add**:
- `market-trends.jpg` - Market trend graphics
- `price-charts.jpg` - Price chart images
- `neighborhood-stats.jpg` - Neighborhood statistics

**Recommended specs**:
- Size: 800x600px
- Format: PNG or JPG
- File size: Under 400KB
- Content: Market data visualizations

## 📋 Image Guidelines

### **File Naming Convention**
- Use lowercase letters
- Separate words with hyphens
- Include descriptive names
- Example: `summerlin-luxury-homes.jpg`

### **Image Optimization**
- Compress images before uploading
- Use appropriate formats (JPG for photos, PNG for graphics)
- Consider WebP for better performance
- Keep file sizes reasonable for fast loading

### **Content Guidelines**
- Use high-quality, professional photos
- Ensure proper lighting and composition
- Include variety in perspectives and styles
- Respect copyright and licensing requirements
- Get permission for client photos

### **SEO Best Practices**
- Use descriptive alt text
- Include relevant keywords in filenames
- Optimize for web performance
- Consider lazy loading for large galleries

## 🚀 How to Use Images in Code

### **Next.js Image Component**
```typescript
import { OptimizedImage } from '../../components/OptimizedImage/OptimizedImage'

<OptimizedImage
  src="/images/neighborhoods/summerlin.jpg"
  alt="Summerlin luxury homes and golf course"
  width={800}
  height={600}
  className="object-cover"
/>
```

### **Regular HTML Image**
```html
<img 
  src="/images/neighborhoods/summerlin.jpg" 
  alt="Summerlin luxury homes and golf course"
  className="w-full h-48 object-cover"
/>
```

## 📞 Support

For questions about image requirements or optimization, contact the development team.

---

**Last Updated**: July 26, 2025
**Version**: 1.0 
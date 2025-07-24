# Google Components Setup Guide for Las Vegas Nevada Home Sales

## 🚀 **Complete Setup Instructions**

This guide will walk you through setting up all the Google components for your Las Vegas real estate website.

## 📋 **Required API Keys & Configuration**

### **1. Google Analytics 4 (GA4)**

**Step 1: Create GA4 Property**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring" or "Create Property"
3. Enter property name: "Las Vegas Nevada Home Sales"
4. Select timezone: "Pacific Time"
5. Select currency: "USD"
6. Click "Next" and complete setup

**Step 2: Get Measurement ID**
1. In GA4, go to Admin → Data Streams
2. Click on your web stream
3. Copy the Measurement ID (format: G-XXXXXXXXXX)

**Step 3: Configure Enhanced Measurement**
1. In Data Streams, click on your stream
2. Enable "Enhanced measurement"
3. Turn on all options: Scrolls, Outbound clicks, Site search, etc.

### **2. Google Maps API**

**Step 1: Create Google Cloud Project**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project: "Las Vegas Nevada Home Sales"
3. Enable billing (required for Maps API)

**Step 2: Enable APIs**
1. Go to "APIs & Services" → "Library"
2. Search and enable these APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
   - Directions API

**Step 3: Create API Key**
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy the API key
4. **Important**: Restrict the key to your domain

**Step 4: Restrict API Key**
1. Click on your API key
2. Under "Application restrictions" select "HTTP referrers"
3. Add your domain: `https://lasvegasnevadahomesales.com/*`
4. Under "API restrictions" select "Restrict key"
5. Select the APIs you enabled above

### **3. Google My Business (Elfsight Reviews)**

**Step 1: Set up Google My Business**
1. Go to [Google My Business](https://business.google.com/)
2. Create/claim your business listing
3. Verify your business address and phone number
4. Add photos and business information

**Step 2: Get Elfsight App ID**
1. Go to [Elfsight](https://elfsight.com/)
2. Sign up for a free account
3. Create a new widget → "Google Reviews"
4. Connect your Google My Business account
5. Copy the App ID from the widget code

### **4. Google Tag Manager (GTM)**

**Step 1: Create GTM Account**
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Create Account"
3. Account name: "Las Vegas Nevada Home Sales"
4. Container name: "Website"
5. Select "Web" platform

**Step 2: Get Container ID**
1. After creation, copy the Container ID (format: GTM-XXXXXXX)
2. Install the GTM code (already done in the implementation)

### **5. Google Search Console**

**Step 1: Add Property**
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property"
3. Enter your domain: `https://lasvegasnevadahomesales.com`
4. Choose "Domain" property type

**Step 2: Verify Ownership**
1. Choose "HTML tag" verification method
2. Copy the verification code
3. The meta tag is already added to your site

### **6. Google Ads (Optional)**

**Step 1: Create Google Ads Account**
1. Go to [Google Ads](https://ads.google.com/)
2. Create account for "Las Vegas Nevada Home Sales"
3. Set up billing information

**Step 2: Get Conversion ID**
1. Go to Tools → Conversions
2. Create a new conversion action
3. Copy the Conversion ID (format: AW-CONVERSION_ID)

## 🔧 **Environment Configuration**

### **Create .env.local File**

Create a `.env.local` file in your project root with the following content:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY

# Google My Business (Elfsight)
NEXT_PUBLIC_ELFSIGHT_APP_ID=YOUR_ELFSIGHT_APP_ID

# Google Tag Manager
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX

# Google Ads (Optional)
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-CONVERSION_ID

# Google Search Console
NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION=YOUR_VERIFICATION_CODE

# PageSpeed Insights (Optional)
NEXT_PUBLIC_PAGESPEED_API_KEY=YOUR_PAGESPEED_API_KEY
```

### **Replace Placeholder Values**

Replace the placeholder values with your actual API keys and IDs:

```bash
# Example with real values (replace with your actual values)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123DEF4
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyB1234567890abcdefghijklmnopqrstuvwxyz
NEXT_PUBLIC_ELFSIGHT_APP_ID=12345678-1234-1234-1234-123456789012
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-ABC1234
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-123456789
NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION=abc123def456ghi789
```

## 🎯 **Business Information Configuration**

Your business information has been automatically configured:

- **Business Name**: Las Vegas Nevada Home Sales | Homes by Dr. Jan Duffy
- **Address**: 10980 W Charleston Blvd, Suite 180, Las Vegas, NV 89135
- **Phone**: (702) 500-1981
- **Website**: https://lasvegasnevadahomesales.com
- **Agent**: Dr. Jan Duffy

## 📊 **Verification Steps**

### **1. Test Google Analytics**
1. Visit your website
2. Open browser developer tools
3. Go to Network tab
4. Look for requests to `google-analytics.com`
5. Check GA4 real-time reports

### **2. Test Google Maps**
1. Visit your home valuation page
2. Check if the interactive map loads
3. Test neighborhood search functionality
4. Verify property markers display correctly

### **3. Test GMB Reviews**
1. Check if reviews widget loads
2. Verify fallback testimonials display if widget fails
3. Test responsive design on mobile

### **4. Test Schema Markup**
1. Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your website URL
3. Verify all schema markup is detected

### **5. Test Search Console**
1. Go to Google Search Console
2. Check if your property is verified
3. Submit your sitemap
4. Monitor for any issues

## 🔍 **Local SEO Optimization**

### **Google My Business Optimization**
1. **Complete Profile**: Add all business information
2. **Photos**: Upload high-quality photos of your office and team
3. **Posts**: Create regular posts about market updates
4. **Reviews**: Encourage customer reviews
5. **Q&A**: Monitor and respond to questions

### **Local Keywords to Target**
- "Las Vegas real estate agent"
- "realtor near me Las Vegas"
- "Summerlin homes for sale"
- "Henderson real estate"
- "Green Valley properties"
- "Las Vegas home valuation"
- "Dr. Jan Duffy real estate"

### **Local Citations**
Ensure consistent NAP (Name, Address, Phone) across:
- Google My Business
- Yelp
- Zillow
- Realtor.com
- Local business directories

## 📈 **Performance Monitoring**

### **Core Web Vitals Targets**
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds
- **CLS (Cumulative Layout Shift)**: < 0.1

### **Analytics Goals**
- **Conversion Rate**: > 15%
- **Phone Call Clicks**: > 5%
- **Time on Page**: > 2 minutes
- **Bounce Rate**: < 40%

## 🛠️ **Troubleshooting**

### **Common Issues**

**1. Google Maps Not Loading**
- Check API key restrictions
- Verify billing is enabled
- Check browser console for errors

**2. Analytics Not Tracking**
- Verify measurement ID is correct
- Check for ad blockers
- Ensure gtag is loading

**3. GMB Reviews Not Showing**
- Verify Elfsight app ID
- Check widget configuration
- Test fallback content

**4. Schema Markup Errors**
- Use Google's Rich Results Test
- Check for syntax errors
- Verify all required fields

### **Support Resources**
- [Google Analytics Help](https://support.google.com/analytics/)
- [Google Maps Platform](https://developers.google.com/maps/documentation)
- [Google My Business Help](https://support.google.com/business/)
- [Google Tag Manager Help](https://support.google.com/tagmanager/)

## 🎉 **Next Steps**

1. **Complete API Setup**: Follow the steps above to get all API keys
2. **Test Everything**: Verify all components are working
3. **Monitor Performance**: Set up regular monitoring
4. **Optimize**: Use analytics data to improve conversion rates
5. **Scale**: Add more Google components as needed

Your Las Vegas real estate website is now equipped with a comprehensive Google ecosystem that will maximize local search visibility and drive qualified leads! 
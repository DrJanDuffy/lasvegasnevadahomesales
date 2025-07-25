#!/usr/bin/env node

/**
 * Search Console Setup Helper Script
 * 
 * This script helps with the initial setup of Google Search Console
 * for the Las Vegas Nevada Home Sales website.
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Google Search Console Setup Helper');
console.log('=====================================\n');

// Configuration
const config = {
  domain: 'lasvegasnevadahomesales.com',
  sitemapUrl: 'https://lasvegasnevadahomesales.com/sitemap.xml',
  keyPages: [
    'https://lasvegasnevadahomesales.com/',
    'https://lasvegasnevadahomesales.com/properties',
    'https://lasvegasnevadahomesales.com/contact',
    'https://lasvegasnevadahomesales.com/strategies',
    'https://lasvegasnevadahomesales.com/neighborhoods/summerlin',
    'https://lasvegasnevadahomesales.com/home-value',
    'https://lasvegasnevadahomesales.com/market-reports'
  ],
  targetKeywords: [
    'Las Vegas Nevada Home Sales',
    'Las Vegas real estate',
    'Summerlin homes for sale',
    'Henderson real estate',
    'Las Vegas homes for sale',
    'Nevada real estate'
  ]
};

// Setup checklist
const setupChecklist = [
  {
    step: 1,
    title: 'Property Verification',
    description: 'Add your domain to Search Console',
    url: 'https://search.google.com/search-console',
    instructions: [
      'Go to Google Search Console',
      'Click "Add Property"',
      'Enter: ' + config.domain,
      'Choose "Domain" property type',
      'Follow verification instructions'
    ]
  },
  {
    step: 2,
    title: 'Submit Sitemap',
    description: 'Submit your XML sitemap for indexing',
    url: config.sitemapUrl,
    instructions: [
      'In Search Console, go to "Sitemaps"',
      'Enter: sitemap.xml',
      'Click "Submit"',
      'Verify successful processing'
    ]
  },
  {
    step: 3,
    title: 'Test Key URLs',
    description: 'Use URL Inspection tool to test important pages',
    url: 'https://search.google.com/search-console/inspect',
    instructions: [
      'Go to URL Inspection tool',
      'Test each key page:',
      ...config.keyPages.map(url => `  - ${url}`),
      'Check for indexing status and structured data'
    ]
  },
  {
    step: 4,
    title: 'Rich Results Test',
    description: 'Validate structured data implementation',
    url: 'https://search.google.com/test/rich-results',
    instructions: [
      'Go to Rich Results Test tool',
      'Test each page with schema markup:',
      '  - Homepage (FAQ, Review, How-To, Local Business)',
      '  - Properties page (FAQ, Review)',
      '  - Contact page (FAQ, Review)',
      '  - Strategies page (FAQ, Review, How-To)',
      'Verify all structured data is valid'
    ]
  },
  {
    step: 5,
    title: 'Core Web Vitals',
    description: 'Monitor page performance metrics',
    url: 'https://search.google.com/search-console/core-web-vitals',
    instructions: [
      'Go to Core Web Vitals report',
      'Check mobile and desktop performance',
      'Target: 75%+ pages in "Good" range',
      'Monitor LCP, FID, and CLS metrics'
    ]
  },
  {
    step: 6,
    title: 'Performance Monitoring',
    description: 'Set up regular monitoring schedule',
    url: 'https://search.google.com/search-console/performance',
    instructions: [
      'Go to Performance report',
      'Filter by target keywords:',
      ...config.targetKeywords.map(keyword => `  - "${keyword}"`),
      'Set up weekly monitoring schedule',
      'Track clicks, impressions, CTR, and position'
    ]
  }
];

// Display setup instructions
console.log('📋 Setup Checklist:\n');

setupChecklist.forEach(item => {
  console.log(`${item.step}. ${item.title}`);
  console.log(`   ${item.description}`);
  console.log(`   URL: ${item.url}`);
  console.log('   Instructions:');
  item.instructions.forEach(instruction => {
    console.log(`   - ${instruction}`);
  });
  console.log('');
});

// Generate verification HTML tag
const verificationTag = `
<!-- Google Search Console Verification -->
<!-- Add this to your homepage <head> section -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
`;

console.log('🔧 Verification HTML Tag:');
console.log(verificationTag);

// Generate monitoring schedule
const monitoringSchedule = `
📅 Monitoring Schedule:

Daily (First Week):
- Check Overview page for issues
- Monitor new URL indexing
- Review any errors or warnings

Weekly:
- Performance report analysis
- Rich results status check
- Core Web Vitals review
- Coverage report scan

Monthly:
- Comprehensive performance review
- Keyword ranking analysis
- Competitor analysis
- Strategy adjustments
`;

console.log(monitoringSchedule);

// Generate expected metrics
const expectedMetrics = `
📈 Expected Metrics (Month 1-3):

Traffic Growth:
- Month 1: 0-100 clicks
- Month 2: 100-500 clicks
- Month 3: 500-1000 clicks

Keyword Rankings:
- "Las Vegas Nevada Home Sales": Top 10
- Location-based keywords: Top 20
- Long-tail keywords: Top 30

Rich Results:
- FAQ snippets: 5-10 appearances
- Review stars: 3-5 appearances
- How-to guides: 2-3 appearances
- Local business: 1-2 appearances
`;

console.log(expectedMetrics);

// Generate troubleshooting tips
const troubleshootingTips = `
🛠️ Quick Troubleshooting:

Rich Results Not Appearing:
- Use Rich Results Test tool
- Check structured data validation
- Ensure content matches schema
- Wait 1-4 weeks for indexing

Pages Not Indexing:
- Submit URLs for indexing
- Check robots.txt
- Verify internal linking
- Add to sitemap

Core Web Vitals Issues:
- Optimize images
- Minimize JavaScript
- Optimize CSS delivery
- Improve server performance
`;

console.log(troubleshootingTips);

console.log('✅ Setup complete! Follow the checklist above to get started.');
console.log('📚 For detailed instructions, see: SEARCH_CONSOLE_SETUP_GUIDE.md');
console.log('🎯 For advanced SEO features, see: ADVANCED_SEO_IMPLEMENTATION.md');

module.exports = {
  config,
  setupChecklist
}; 
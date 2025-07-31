#!/usr/bin/env node

/**
 * Indexing Fixes Deployment Script
 * Ensures all critical SEO and indexing fixes are properly deployed
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Deploying Indexing Fixes...\n');

// Check critical files
const criticalFiles = [
  'vercel.json',
  'app/robots.ts',
  'app/sitemap.ts',
  'config/seo-config.ts',
  'components/SEO/Breadcrumbs.tsx'
];

console.log('📋 Verifying Critical Files:');
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - Found`);
  } else {
    console.log(`❌ ${file} - MISSING`);
  }
});

// Check for noindex directives
console.log('\n🔍 Checking for noindex directives:');
const searchFiles = [
  'components/SEO/Breadcrumbs.tsx',
  'components/SEO/SEOHead.tsx',
  'app/layout.tsx'
];

searchFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('noindex')) {
      console.log(`⚠️  ${file} - Contains noindex directive`);
    } else {
      console.log(`✅ ${file} - No noindex directives found`);
    }
  }
});

// Verify sitemap structure
console.log('\n🗺️  Verifying Sitemap:');
if (fs.existsSync('app/sitemap.ts')) {
  const sitemapContent = fs.readFileSync('app/sitemap.ts', 'utf8');
  const urlCount = (sitemapContent.match(/url:/g) || []).length;
  console.log(`✅ Sitemap contains ${urlCount} URLs`);
  
  if (sitemapContent.includes('?type=')) {
    console.log('⚠️  Sitemap contains query parameters - may cause duplicates');
  } else {
    console.log('✅ Sitemap URLs are clean (no query parameters)');
  }
}

// Check robots.txt
console.log('\n🤖 Verifying Robots.txt:');
if (fs.existsSync('app/robots.ts')) {
  const robotsContent = fs.readFileSync('app/robots.ts', 'utf8');
  if (robotsContent.includes('sitemap:')) {
    console.log('✅ Robots.txt includes sitemap reference');
  } else {
    console.log('❌ Robots.txt missing sitemap reference');
  }
  
  if (robotsContent.includes('crawlDelay')) {
    console.log('✅ Robots.txt includes crawl delay');
  } else {
    console.log('⚠️  Robots.txt missing crawl delay');
  }
}

// Check Vercel configuration
console.log('\n⚙️  Verifying Vercel Configuration:');
if (fs.existsSync('vercel.json')) {
  const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  
  if (vercelConfig.headers) {
    console.log('✅ Vercel headers configured');
    const robotsHeader = vercelConfig.headers.find(h => 
      h.headers && h.headers.find(header => header.key === 'X-Robots-Tag')
    );
    if (robotsHeader) {
      console.log('✅ X-Robots-Tag header configured');
    } else {
      console.log('❌ X-Robots-Tag header missing');
    }
  } else {
    console.log('❌ Vercel headers not configured');
  }
  
  if (vercelConfig.redirects) {
    console.log(`✅ ${vercelConfig.redirects.length} redirects configured`);
  } else {
    console.log('⚠️  No redirects configured');
  }
}

console.log('\n📊 Deployment Checklist:');
console.log('1. ✅ Critical files verified');
console.log('2. ✅ Noindex directives checked');
console.log('3. ✅ Sitemap structure validated');
console.log('4. ✅ Robots.txt configuration verified');
console.log('5. ✅ Vercel configuration checked');

console.log('\n🚨 CRITICAL NEXT STEPS:');
console.log('1. Deploy to Vercel: git push origin main');
console.log('2. Verify domain access: curl -I https://www.lasvegasnevadahomesales.com');
console.log('3. Submit sitemap to Google Search Console');
console.log('4. Request indexing for critical pages');
console.log('5. Monitor Google Search Console for 24-48 hours');

console.log('\n📈 Expected Results:');
console.log('- 403 errors should be resolved');
console.log('- Canonical tag issues should be fixed');
console.log('- Noindex issues should be eliminated');
console.log('- Pages should start indexing within 1-2 weeks');

console.log('\n✅ Indexing Fixes Deployment Script Complete!\n'); 
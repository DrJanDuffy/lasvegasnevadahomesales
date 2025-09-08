#!/usr/bin/env node

/**
 * Submit sitemap to Google Search Console
 * This script automatically submits the sitemap to Google Search Console
 * 
 * Prerequisites:
 * 1. Set up Google Search Console API credentials
 * 2. Add GOOGLE_SEARCH_CONSOLE_SITE_URL environment variable
 * 3. Add GOOGLE_SEARCH_CONSOLE_CREDENTIALS environment variable (JSON key file content)
 */

const https = require('https');
const { google } = require('googleapis');

async function submitSitemapToGoogle() {
  try {
    // Get environment variables
    const siteUrl = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || 'https://lasvegasnevadahomesales.com';
    const credentials = process.env.GOOGLE_SEARCH_CONSOLE_CREDENTIALS;
    
    if (!credentials) {
      console.log('❌ GOOGLE_SEARCH_CONSOLE_CREDENTIALS environment variable not set');
      console.log('📝 To set up Google Search Console API:');
      console.log('1. Go to https://console.developers.google.com/');
      console.log('2. Create a new project or select existing one');
      console.log('3. Enable Google Search Console API');
      console.log('4. Create credentials (Service Account)');
      console.log('5. Download the JSON key file');
      console.log('6. Add the JSON content to GOOGLE_SEARCH_CONSOLE_CREDENTIALS environment variable');
      console.log('7. Add the service account email to your Google Search Console property');
      return;
    }

    // Parse credentials
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ['https://www.googleapis.com/auth/webmasters']
    });

    const searchConsole = google.searchconsole({ version: 'v1', auth });
    
    const sitemapUrl = `${siteUrl}/sitemap.xml`;
    
    console.log(`🚀 Submitting sitemap: ${sitemapUrl}`);
    
    // Submit sitemap
    const response = await searchConsole.sitemaps.submit({
      siteUrl: siteUrl,
      feedpath: '/sitemap.xml'
    });
    
    console.log('✅ Sitemap submitted successfully!');
    console.log('📊 Response:', response.data);
    
  } catch (error) {
    console.error('❌ Error submitting sitemap:', error.message);
    
    if (error.message.includes('403')) {
      console.log('🔑 Make sure the service account has access to your Google Search Console property');
    } else if (error.message.includes('404')) {
      console.log('🌐 Make sure the site URL is correct and verified in Google Search Console');
    }
  }
}

// Run the script
submitSitemapToGoogle();

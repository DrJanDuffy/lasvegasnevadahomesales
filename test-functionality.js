// Functionality Test Script for Las Vegas Nevada Home Sales
// This script tests the key functionality of your real estate website

const https = require('https');
const http = require('http');

console.log('🔍 Testing Las Vegas Nevada Home Sales Website Functionality\n');

// Test Configuration
const BASE_URL = 'http://localhost:3000';
const API_ENDPOINTS = {
  leads: '/api/leads',
  contact: '/contact',
  properties: '/properties',
  search: '/properties/search',
};

// Test Results
const testResults = {
  contactForms: { passed: 0, failed: 0, issues: [] },
  propertySearch: { passed: 0, failed: 0, issues: [] },
  leadCapture: { passed: 0, failed: 0, issues: [] },
  apiEndpoints: { passed: 0, failed: 0, issues: [] },
};

// Utility function to make HTTP requests
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;

    const requestOptions = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Functionality-Test-Script/1.0',
        ...options.headers,
      },
    };

    const req = client.request(requestOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          data: data,
        });
      });
    });

    req.on('error', reject);

    if (options.body) {
      req.write(JSON.stringify(options.body));
    }

    req.end();
  });
}

// Test 1: Contact Form Functionality
async function testContactForms() {
  console.log('📝 Testing Contact Forms...');

  try {
    // Test contact page accessibility
    const contactResponse = await makeRequest(`${BASE_URL}${API_ENDPOINTS.contact}`);

    if (contactResponse.status === 200) {
      testResults.contactForms.passed++;
      console.log('✅ Contact page is accessible');
    } else {
      testResults.contactForms.failed++;
      testResults.contactForms.issues.push(
        `Contact page returned status ${contactResponse.status}`
      );
      console.log('❌ Contact page is not accessible');
    }

    // Test lead capture form API
    const testLeadData = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '(702) 555-0123',
      budget: '300k-500k',
      timeline: '1-3-months',
      message: 'Test lead submission',
      source: 'contact-form',
    };

    const leadResponse = await makeRequest(`${BASE_URL}${API_ENDPOINTS.leads}`, {
      method: 'POST',
      body: testLeadData,
    });

    if (leadResponse.status === 200) {
      testResults.contactForms.passed++;
      console.log('✅ Lead capture API is working');
    } else {
      testResults.contactForms.failed++;
      testResults.contactForms.issues.push(
        `Lead API returned status ${leadResponse.status}: ${leadResponse.data}`
      );
      console.log('❌ Lead capture API is not working');
    }
  } catch (error) {
    testResults.contactForms.failed++;
    testResults.contactForms.issues.push(`Contact form test error: ${error.message}`);
    console.log('❌ Contact form test failed:', error.message);
  }
}

// Test 2: Property Search Functionality
async function testPropertySearch() {
  console.log('\n🔍 Testing Property Search...');

  try {
    // Test properties page accessibility
    const propertiesResponse = await makeRequest(`${BASE_URL}${API_ENDPOINTS.properties}`);

    if (propertiesResponse.status === 200) {
      testResults.propertySearch.passed++;
      console.log('✅ Properties page is accessible');
    } else {
      testResults.propertySearch.failed++;
      testResults.propertySearch.issues.push(
        `Properties page returned status ${propertiesResponse.status}`
      );
      console.log('❌ Properties page is not accessible');
    }

    // Test advanced search page
    const searchResponse = await makeRequest(`${BASE_URL}${API_ENDPOINTS.search}`);

    if (searchResponse.status === 200) {
      testResults.propertySearch.passed++;
      console.log('✅ Advanced search page is accessible');
    } else {
      testResults.propertySearch.failed++;
      testResults.propertySearch.issues.push(
        `Search page returned status ${searchResponse.status}`
      );
      console.log('❌ Advanced search page is not accessible');
    }
  } catch (error) {
    testResults.propertySearch.failed++;
    testResults.propertySearch.issues.push(`Property search test error: ${error.message}`);
    console.log('❌ Property search test failed:', error.message);
  }
}

// Test 3: Lead Capture System
async function testLeadCapture() {
  console.log('\n📊 Testing Lead Capture System...');

  try {
    // Test different lead sources
    const leadSources = [
      'home-valuation',
      'contact-form',
      'lead-capture-form',
      'property-search',
      'neighborhood-page',
    ];

    for (const source of leadSources) {
      const testLead = {
        firstName: 'Test',
        lastName: 'User',
        email: `test-${source}@example.com`,
        phone: '(702) 555-0123',
        budget: '500k-750k',
        timeline: '3-6-months',
        message: `Test lead from ${source}`,
        source: source,
      };

      const response = await makeRequest(`${BASE_URL}${API_ENDPOINTS.leads}`, {
        method: 'POST',
        body: testLead,
      });

      if (response.status === 200) {
        testResults.leadCapture.passed++;
        console.log(`✅ Lead capture from ${source} is working`);
      } else {
        testResults.leadCapture.failed++;
        testResults.leadCapture.issues.push(`${source} lead capture failed: ${response.status}`);
        console.log(`❌ Lead capture from ${source} is not working`);
      }
    }
  } catch (error) {
    testResults.leadCapture.failed++;
    testResults.leadCapture.issues.push(`Lead capture test error: ${error.message}`);
    console.log('❌ Lead capture test failed:', error.message);
  }
}

// Test 4: API Endpoints
async function testAPIEndpoints() {
  console.log('\n🔌 Testing API Endpoints...');

  try {
    // Test GET endpoint
    const getResponse = await makeRequest(`${BASE_URL}${API_ENDPOINTS.leads}`);

    if (getResponse.status === 200) {
      testResults.apiEndpoints.passed++;
      console.log('✅ GET /api/leads endpoint is working');
    } else {
      testResults.apiEndpoints.failed++;
      testResults.apiEndpoints.issues.push(`GET /api/leads returned status ${getResponse.status}`);
      console.log('❌ GET /api/leads endpoint is not working');
    }

    // Test invalid data handling
    const invalidLead = {
      firstName: '', // Missing required field
      lastName: '',
      email: 'invalid-email',
    };

    const invalidResponse = await makeRequest(`${BASE_URL}${API_ENDPOINTS.leads}`, {
      method: 'POST',
      body: invalidLead,
    });

    if (invalidResponse.status === 400) {
      testResults.apiEndpoints.passed++;
      console.log('✅ API properly validates required fields');
    } else {
      testResults.apiEndpoints.failed++;
      testResults.apiEndpoints.issues.push('API does not properly validate required fields');
      console.log('❌ API does not properly validate required fields');
    }
  } catch (error) {
    testResults.apiEndpoints.failed++;
    testResults.apiEndpoints.issues.push(`API endpoint test error: ${error.message}`);
    console.log('❌ API endpoint test failed:', error.message);
  }
}

// Test 5: Environment Configuration
function testEnvironmentConfig() {
  console.log('\n⚙️ Testing Environment Configuration...');

  const requiredEnvVars = ['NEXT_PUBLIC_FOLLOW_UP_BOSS_API_KEY'];

  const configIssues = [];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      configIssues.push(`Missing environment variable: ${envVar}`);
      console.log(`❌ Missing: ${envVar}`);
    } else {
      console.log(`✅ Found: ${envVar}`);
    }
  }

  if (configIssues.length > 0) {
    console.log('\n⚠️ Environment Configuration Issues:');
    configIssues.forEach((issue) => console.log(`  - ${issue}`));
  } else {
    console.log('✅ All required environment variables are configured');
  }

  return configIssues;
}

// Generate Test Report
function generateReport() {
  console.log('\n📋 FUNCTIONALITY TEST REPORT');
  console.log('================================');

  const totalTests = Object.values(testResults).reduce(
    (sum, category) => sum + category.passed + category.failed,
    0
  );
  const totalPassed = Object.values(testResults).reduce(
    (sum, category) => sum + category.passed,
    0
  );
  const totalFailed = Object.values(testResults).reduce(
    (sum, category) => sum + category.failed,
    0
  );

  console.log(`\nOverall Results: ${totalPassed}/${totalTests} tests passed`);
  console.log(`Success Rate: ${((totalPassed / totalTests) * 100).toFixed(1)}%`);

  console.log('\nDetailed Results:');

  Object.entries(testResults).forEach(([category, results]) => {
    const categoryTotal = results.passed + results.failed;
    const successRate =
      categoryTotal > 0 ? ((results.passed / categoryTotal) * 100).toFixed(1) : '0';

    console.log(`\n${category.toUpperCase()}:`);
    console.log(`  Passed: ${results.passed}/${categoryTotal} (${successRate}%)`);

    if (results.issues.length > 0) {
      console.log('  Issues:');
      results.issues.forEach((issue) => console.log(`    - ${issue}`));
    }
  });

  // Recommendations
  console.log('\n🔧 RECOMMENDATIONS:');

  if (testResults.contactForms.failed > 0) {
    console.log('• Fix contact form functionality - critical for lead generation');
  }

  if (testResults.propertySearch.failed > 0) {
    console.log('• Ensure property search pages are accessible');
  }

  if (testResults.leadCapture.failed > 0) {
    console.log('• Verify Follow Up Boss API integration');
    console.log('• Check API key configuration');
  }

  if (testResults.apiEndpoints.failed > 0) {
    console.log('• Review API endpoint implementation');
    console.log('• Check server-side validation');
  }

  console.log('\n• Monitor Google Analytics for form submission events');
  console.log('• Set up error tracking for failed form submissions');
  console.log('• Implement retry logic for API failures');
  console.log('• Add comprehensive logging for debugging');
}

// Main test execution
async function runTests() {
  console.log('🚀 Starting functionality tests...\n');

  try {
    await testContactForms();
    await testPropertySearch();
    await testLeadCapture();
    await testAPIEndpoints();

    const configIssues = testEnvironmentConfig();

    generateReport();

    if (configIssues.length > 0) {
      console.log('\n⚠️ CRITICAL: Environment configuration issues detected');
      console.log('Please fix these before deploying to production.');
    }
  } catch (error) {
    console.error('❌ Test execution failed:', error.message);
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { runTests, testResults };

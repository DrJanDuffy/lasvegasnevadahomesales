// Test Follow Up Boss CRM Connection
const { crmConfig } = require('./config/crm-config.ts');

console.log('🔧 Testing Follow Up Boss CRM Connection...\n');

// Check API key configuration
const apiKey = crmConfig.followUpBoss.apiKey;
console.log('API Key configured:', apiKey ? '✅ Yes' : '❌ No');
console.log('API Key length:', apiKey ? apiKey.length : 0);
console.log('API Key starts with:', apiKey ? apiKey.substring(0, 10) + '...' : 'N/A');

// Check base URL
console.log('\nBase URL:', crmConfig.followUpBoss.baseUrl);

// Check headers
console.log('\nHeaders configured:', Object.keys(crmConfig.followUpBoss.headers));

// Test API key format
if (apiKey && apiKey.startsWith('fka_')) {
  console.log('\n✅ API Key format looks correct (starts with fka_)');
} else {
  console.log('\n❌ API Key format may be incorrect');
}

console.log('\n🎯 CRM Configuration Status:');
console.log('- API Key:', apiKey ? '✅ Configured' : '❌ Missing');
console.log('- Base URL:', crmConfig.followUpBoss.baseUrl ? '✅ Configured' : '❌ Missing');
console.log('- Headers:', Object.keys(crmConfig.followUpBoss.headers).length > 0 ? '✅ Configured' : '❌ Missing');

if (apiKey) {
  console.log('\n🚀 Ready to process leads!');
} else {
  console.log('\n⚠️  API key needs to be configured');
}

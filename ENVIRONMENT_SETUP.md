# Environment Setup Guide
## Las Vegas Nevada Home Sales Website

### Critical Configuration Issues Fixed

Your website has several configuration issues that are preventing proper lead capture and form functionality. This guide will help you fix them.

---

## 🚨 **Immediate Action Required**

### 1. **Set Up Environment Variables**

Create a `.env.local` file in your project root:

```bash
# .env.local
FOLLOW_UP_BOSS_API_KEY=your_actual_follow_up_boss_api_key_here
```

**Important**: 
- Remove `NEXT_PUBLIC_` prefix from the API key
- The API key should only be accessible server-side
- Never commit this file to version control

### 2. **Get Your Follow Up Boss API Key**

1. Log into your Follow Up Boss account
2. Go to Settings → API
3. Generate a new API key
4. Copy the key and add it to your `.env.local` file

### 3. **Verify Configuration**

Run the test script to verify everything is working:

```bash
node test-functionality.js
```

---

## 🔧 **Configuration Changes Made**

### Fixed Issues:

1. **Security Issue**: Moved API key from client-side to server-side only
2. **Error Handling**: Added comprehensive error handling and logging
3. **Retry Logic**: Implemented retry mechanism for failed API calls
4. **Analytics**: Enhanced tracking for form submissions and errors
5. **Search Functionality**: Made search bar functional with proper tracking

### Files Modified:

- `config/crm-config.ts` - Fixed API key configuration
- `app/api/leads/route.ts` - Enhanced error handling
- `components/Forms/LeadCaptureForm.tsx` - Added retry logic and better tracking
- `components/Search/SearchBar.tsx` - Made search functional

---

## 📊 **Testing Your Setup**

### 1. **Start Development Server**
```bash
npm run dev
```

### 2. **Test Contact Form**
- Go to `/contact`
- Fill out the form
- Submit and check for success message
- Check browser console for any errors

### 3. **Test Property Search**
- Go to `/properties/search`
- Use the search bar
- Verify search interactions are tracked

### 4. **Check API Endpoints**
```bash
# Test GET endpoint
curl http://localhost:3000/api/leads

# Test POST endpoint
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User", 
    "email": "test@example.com",
    "source": "test"
  }'
```

---

## 🎯 **Expected Results After Fix**

### Lead Generation:
- ✅ Forms submit successfully
- ✅ Leads appear in Follow Up Boss
- ✅ Analytics events fire properly
- ✅ Error handling works correctly

### Search Functionality:
- ✅ Search bar redirects to results
- ✅ Search interactions are tracked
- ✅ Advanced search form is accessible

### Technical Improvements:
- ✅ API endpoints respond correctly
- ✅ Error messages are user-friendly
- ✅ Retry logic handles failures
- ✅ Comprehensive logging for debugging

---

## 🚨 **Troubleshooting**

### If Forms Still Don't Work:

1. **Check API Key**
   ```bash
   # Verify environment variable is set
   echo $FOLLOW_UP_BOSS_API_KEY
   ```

2. **Check Server Logs**
   ```bash
   # Look for API errors in console
   npm run dev
   ```

3. **Test API Directly**
   ```bash
   # Test Follow Up Boss API
   curl -H "Authorization: Basic $(echo -n 'your_api_key:' | base64)" \
        https://api.followupboss.com/v1/people
   ```

### Common Issues:

1. **"Service temporarily unavailable"**
   - API key not configured
   - Check `.env.local` file

2. **"Failed to process lead"**
   - Follow Up Boss API issue
   - Check API key validity

3. **Forms submit but no leads appear**
   - Check Follow Up Boss dashboard
   - Verify API integration

---

## 📈 **Monitoring Setup**

### 1. **Google Analytics Events**
Monitor these events:
- `form_submit` - Form interaction
- `lead_submitted` - Successful submission
- `form_error` - Failed submission
- `search` - Search interactions

### 2. **Server Logs**
Check for:
- API errors
- Lead processing logs
- Error rates

### 3. **Follow Up Boss Dashboard**
Monitor:
- New lead creation
- Lead source attribution
- Response times

---

## 🔄 **Next Steps**

1. **Immediately**: Set up environment variables
2. **This week**: Test all functionality
3. **Next week**: Monitor performance
4. **Ongoing**: Track conversion rates

### Success Metrics to Monitor:
- Form submission rate: Target >80%
- API success rate: Target >95%
- Lead quality: Track conversion to contact
- User engagement: Monitor search interactions

---

## 📞 **Support**

If you encounter issues:

1. Check the test script output
2. Review server logs
3. Verify Follow Up Boss API key
4. Test API endpoints directly

The fixes implemented should resolve the "zero function invocations" issue and significantly improve your lead capture performance. 
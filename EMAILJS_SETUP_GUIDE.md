# 🚀 **EmailJS & Lead Capture Implementation Guide**

## **Step 1: EmailJS Dashboard Setup**

### **1.1 Create EmailJS Account**
1. Visit: https://www.emailjs.com/
2. Create account and navigate to Email Services
3. Add your email service (Gmail recommended for real estate)

### **1.2 Required Configuration Values**
Add these to your `.env.local` file:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx  
NEXT_PUBLIC_EMAILJS_USER_ID=user_xxxxxxxxx

# EmailJS Template IDs for Different Forms
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE=template_contact
NEXT_PUBLIC_EMAILJS_PROPERTY_TEMPLATE=template_property
NEXT_PUBLIC_EMAILJS_VALUATION_TEMPLATE=template_valuation
NEXT_PUBLIC_EMAILJS_SUMMERLIN_TEMPLATE=template_summerlin
NEXT_PUBLIC_EMAILJS_HENDERSON_TEMPLATE=template_henderson
NEXT_PUBLIC_EMAILJS_GREENVALLEY_TEMPLATE=template_greenvalley
NEXT_PUBLIC_EMAILJS_DOWNTOWN_TEMPLATE=template_downtown

# Email Recipients
NEXT_PUBLIC_EMAILJS_PRIMARY_EMAIL=info@lasvegasnevadahomesales.com
NEXT_PUBLIC_EMAILJS_SALES_EMAIL=sales@lasvegasnevadahomesales.com
NEXT_PUBLIC_EMAILJS_SUPPORT_EMAIL=support@lasvegasnevadahomesales.com
```

### **1.3 Template Variables for Real Estate Forms**
In your EmailJS template, use these variables:

```javascript
// Required Variables
{{name}} - Client name (e.g., "John Smith")
{{email}} - Client email (e.g., "john@example.com")
{{phone}} - Client phone (e.g., "(702) 555-0123")

// Optional Variables
{{message}} - General inquiry message
{{propertyAddress}} - Specific property interest (e.g., "123 Main St, Summerlin")
{{propertyType}} - House/Condo/Townhome
{{budget}} - Budget range (e.g., "$500K-$750K")
{{timeline}} - Purchase timeline (e.g., "3-6 months")
{{source}} - Page source (e.g., "Summerlin", "Downtown", "Contact Form")
{{pageUrl}} - Originating page URL
{{estimatedValue}} - Home valuation estimate
{{bedrooms}} - Number of bedrooms
{{bathrooms}} - Number of bathrooms
{{squareFootage}} - Property square footage
```

## **Step 2: Test Summerlin Page Form**

### **2.1 Testing Checklist**
Visit your live site: https://www.lasvegashomeexpert.com/summerlin

Test scenarios:
1. ✅ **General inquiry form submission**
2. ✅ **Property-specific inquiry with all fields**
3. ✅ **Mobile form submission** (70% of traffic)
4. ✅ **Form validation errors**
5. ✅ **Success message display**

### **2.2 Debug Form Issues**
Add this to browser console for debugging:

```javascript
// Debug EmailJS Configuration
console.log('EmailJS Config:', {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID
});

// Test EmailJS Connection
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
console.log('EmailJS initialized:', emailjs);
```

## **Step 3: Monitor Lead Capture in Supabase**

### **3.1 Supabase Table Setup**
```sql
-- Create leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  property_address VARCHAR(500),
  property_type VARCHAR(100),
  budget VARCHAR(100),
  timeline VARCHAR(100),
  estimated_value VARCHAR(100),
  bedrooms VARCHAR(10),
  bathrooms VARCHAR(10),
  square_footage VARCHAR(100),
  source VARCHAR(100),
  page_url TEXT,
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new',
  assigned_to VARCHAR(100),
  notes TEXT
);

-- Add indexes for performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_source ON leads(source);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_status ON leads(status);

-- Add RLS policy
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users
CREATE POLICY "Enable read access for authenticated users" ON leads
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy for inserting leads
CREATE POLICY "Enable insert for all users" ON leads
  FOR INSERT WITH CHECK (true);
```

### **3.2 Real-Time Lead Monitoring**
```typescript
// Add to your admin dashboard
import { supabase } from '@/lib/supabase';

const monitorLeads = () => {
  const channel = supabase
    .channel('leads-channel')
    .on('postgres_changes', 
      { event: 'INSERT', schema: 'public', table: 'leads' },
      (payload) => {
        console.log('New lead received:', payload.new);
        // Send instant notification to your phone/email
        sendLeadNotification(payload.new);
      }
    )
    .subscribe();
};

const sendLeadNotification = (lead: any) => {
  // Send SMS notification
  // Send email notification
  // Update CRM
  console.log('🚨 NEW LEAD ALERT:', lead);
};
```

## **Step 4: Set Up Email Notifications**

### **4.1 Dual Notification System**

#### **A) EmailJS Direct Notifications (Immediate)**
In your EmailJS template, set recipient to:
```
your-realestate-email@gmail.com
```

#### **B) Supabase Email Notifications (CRM Integration)**
Create `/app/api/notify-lead/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const lead = await request.json();
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
    
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'your-business-email@domain.com',
      subject: `🏠 New Las Vegas Lead: ${lead.propertyType || 'General Inquiry'}`,
      html: `
        <h2>New Lead from ${lead.source}</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Budget:</strong> ${lead.budget}</p>
        <p><strong>Timeline:</strong> ${lead.timeline}</p>
        <p><strong>Property Interest:</strong> ${lead.propertyAddress}</p>
        <p><strong>Message:</strong> ${lead.message}</p>
        <p><strong>Source Page:</strong> <a href="${lead.pageUrl}">${lead.pageUrl}</a></p>
        <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
      `
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email notification error:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
```

### **4.2 Environment Variables for Email Notifications**
Add to `.env.local`:

```bash
# Gmail Configuration for Notifications
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# Business Email Addresses
BUSINESS_EMAIL=info@lasvegasnevadahomesales.com
SALES_EMAIL=sales@lasvegasnevadahomesales.com
SUPPORT_EMAIL=support@lasvegasnevadahomesales.com
```

## **Step 5: Testing & Validation**

### **5.1 Form Testing Checklist**
- [ ] **Desktop form submission** works
- [ ] **Mobile form submission** works (test on phone)
- [ ] **Form validation** shows proper errors
- [ ] **Success message** displays correctly
- [ ] **Email received** in your inbox
- [ ] **Lead stored** in Supabase database
- [ ] **Analytics tracking** working (Vercel Analytics)
- [ ] **UTM parameters** captured correctly

### **5.2 Performance Monitoring**
```typescript
// Add to your EmailJSContactForm component
const trackFormPerformance = (startTime: number) => {
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  console.log(`Form submission took ${duration}ms`);
  
  // Track with Vercel Analytics
  if (typeof window !== 'undefined' && window.realEstateTracking?.trackFormInteraction) {
    window.realEstateTracking.trackFormInteraction('emailjs-form', 'submission_time', duration);
  }
};
```

## **Step 6: Real Estate Specific Optimizations**

### **6.1 Lead Scoring System**
```typescript
const calculateLeadScore = (lead: any) => {
  let score = 0;
  
  // Budget scoring
  if (lead.budget?.includes('$750K+')) score += 10;
  else if (lead.budget?.includes('$500K')) score += 7;
  else if (lead.budget?.includes('$300K')) score += 5;
  
  // Timeline scoring
  if (lead.timeline?.includes('1 month')) score += 10;
  else if (lead.timeline?.includes('3 months')) score += 7;
  else if (lead.timeline?.includes('6 months')) score += 5;
  
  // Property type scoring
  if (lead.propertyType === 'House') score += 5;
  else if (lead.propertyType === 'Condo') score += 3;
  
  return score;
};
```

### **6.2 Neighborhood-Specific Templates**
- **Summerlin**: Luxury homes, golf courses, master-planned community
- **Henderson**: Family-friendly, schools, parks
- **Green Valley**: Affordable homes, community amenities
- **Downtown**: Urban living, entertainment, cultural attractions

## **🎯 Success Metrics**

### **Immediate Goals (This Weekend)**
- ✅ **EmailJS configured** and sending emails
- ✅ **Summerlin page** form working
- ✅ **Lead database** storing submissions
- ✅ **Email notifications** received instantly

### **This Week**
- ✅ **All neighborhood pages** with working forms
- ✅ **Lead scoring** system implemented
- ✅ **CRM integration** with Follow Up Boss
- ✅ **Analytics dashboard** for lead tracking

---

**Status: 🚀 READY FOR IMPLEMENTATION**
**Next Action: Configure EmailJS Dashboard** 
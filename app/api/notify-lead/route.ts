import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface LeadData {
  name: string
  email: string
  phone?: string
  message?: string
  propertyAddress?: string
  propertyType?: string
  budget?: string
  timeline?: string
  estimatedValue?: string
  bedrooms?: string
  bathrooms?: string
  squareFootage?: string
  source: string
  pageUrl: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

// Type guard to validate LeadData
function isValidLeadData(data: unknown): data is LeadData {
  if (typeof data !== 'object' || data === null) {
    return false
  }
  
  const lead = data as Record<string, unknown>
  
  // Check required fields
  if (typeof lead.name !== 'string' || typeof lead.email !== 'string' || typeof lead.source !== 'string' || typeof lead.pageUrl !== 'string') {
    return false
  }
  
  // Check optional fields if they exist
  if (lead.phone !== undefined && typeof lead.phone !== 'string') return false
  if (lead.message !== undefined && typeof lead.message !== 'string') return false
  if (lead.propertyAddress !== undefined && typeof lead.propertyAddress !== 'string') return false
  if (lead.propertyType !== undefined && typeof lead.propertyType !== 'string') return false
  if (lead.budget !== undefined && typeof lead.budget !== 'string') return false
  if (lead.timeline !== undefined && typeof lead.timeline !== 'string') return false
  if (lead.estimatedValue !== undefined && typeof lead.estimatedValue !== 'string') return false
  if (lead.bedrooms !== undefined && typeof lead.bedrooms !== 'string') return false
  if (lead.bathrooms !== undefined && typeof lead.bathrooms !== 'string') return false
  if (lead.squareFootage !== undefined && typeof lead.squareFootage !== 'string') return false
  if (lead.utmSource !== undefined && typeof lead.utmSource !== 'string') return false
  if (lead.utmMedium !== undefined && typeof lead.utmMedium !== 'string') return false
  if (lead.utmCampaign !== undefined && typeof lead.utmCampaign !== 'string') return false
  
  return true
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Type guard to validate the request body
    if (!isValidLeadData(body)) {
      return NextResponse.json(
        { error: 'Invalid request body format' },
        { status: 400 }
      )
    }
    
    const lead: LeadData = body
    
    // Validate required fields
    if (!lead.name || !lead.email || !lead.source) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, source' },
        { status: 400 }
      )
    }

    // Check if email configuration is available
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail configuration not found')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    })

    // Calculate lead score
    const leadScore = calculateLeadScore(lead)
    
    // Determine recipient based on lead source
    const recipient = getRecipientBySource(lead.source)
    
    // Create email subject with urgency indicators
    const subject = createEmailSubject(lead, leadScore)
    
    // Create email HTML content
    const htmlContent = createEmailHTML(lead, leadScore)
    
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: recipient,
      subject: subject,
      html: htmlContent,
      replyTo: lead.email // Allow direct reply to lead
    })

    console.log('Lead notification sent successfully:', {
      lead: lead.name,
      email: lead.email,
      source: lead.source,
      score: leadScore,
      recipient: recipient,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Lead notification sent successfully',
      leadScore: leadScore
    })

  } catch (error) {
    console.error('Email notification error:', error)
    return NextResponse.json(
      { error: 'Failed to send lead notification' },
      { status: 500 }
    )
  }
}

// Calculate lead score based on real estate criteria
function calculateLeadScore(lead: LeadData): number {
  let score = 0
  
  // Budget scoring (higher budget = higher score)
  if (lead.budget?.includes('$750K+') || lead.budget?.includes('$1M+')) score += 10
  else if (lead.budget?.includes('$500K') || lead.budget?.includes('$750K')) score += 7
  else if (lead.budget?.includes('$300K') || lead.budget?.includes('$500K')) score += 5
  else if (lead.budget?.includes('$200K') || lead.budget?.includes('$300K')) score += 3
  else if (lead.budget) score += 1 // Any budget specified
  
  // Timeline scoring (shorter timeline = higher score)
  if (lead.timeline?.includes('1 month') || lead.timeline?.includes('immediately')) score += 10
  else if (lead.timeline?.includes('3 months')) score += 7
  else if (lead.timeline?.includes('6 months')) score += 5
  else if (lead.timeline?.includes('1 year')) score += 3
  else if (lead.timeline) score += 1 // Any timeline specified
  
  // Property type scoring
  if (lead.propertyType === 'House' || lead.propertyType === 'Single Family') score += 5
  else if (lead.propertyType === 'Condo' || lead.propertyType === 'Townhouse') score += 3
  else if (lead.propertyType) score += 1
  
  // Source scoring (neighborhood-specific = higher score)
  if (lead.source?.includes('summerlin')) score += 5 // High-value market
  else if (lead.source?.includes('henderson')) score += 4
  else if (lead.source?.includes('green-valley')) score += 3
  else if (lead.source?.includes('downtown')) score += 2
  else if (lead.source) score += 1
  
  // Property details scoring
  if (lead.propertyAddress) score += 3 // Specific property interest
  if (lead.estimatedValue) score += 2 // Home valuation request
  if (lead.bedrooms && lead.bathrooms) score += 2 // Detailed requirements
  if (lead.squareFootage) score += 1
  
  // Message scoring
  if (lead.message && lead.message.length > 20) score += 2 // Detailed inquiry
  else if (lead.message) score += 1
  
  return Math.min(score, 50) // Cap at 50 points
}

// Determine recipient based on lead source
function getRecipientBySource(source: string): string {
  const sourceLower = source.toLowerCase()
  
  if (sourceLower.includes('summerlin')) {
    return process.env.SALES_EMAIL || process.env.BUSINESS_EMAIL || process.env.GMAIL_USER || ''
  }
  
  if (sourceLower.includes('henderson') || sourceLower.includes('green-valley')) {
    return process.env.SALES_EMAIL || process.env.BUSINESS_EMAIL || process.env.GMAIL_USER || ''
  }
  
  if (sourceLower.includes('valuation') || sourceLower.includes('home-value')) {
    return process.env.SALES_EMAIL || process.env.BUSINESS_EMAIL || process.env.GMAIL_USER || ''
  }
  
  // Default to primary business email
  return process.env.BUSINESS_EMAIL || process.env.GMAIL_USER || ''
}

// Create email subject with urgency indicators
function createEmailSubject(lead: LeadData, score: number): string {
  const urgency = score >= 15 ? '🔥 URGENT' : score >= 10 ? '⚡ HIGH PRIORITY' : '📧'
  const propertyType = lead.propertyType || 'Property'
  const source = lead.source.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  return `${urgency} New Las Vegas Lead: ${propertyType} Inquiry from ${source}`
}

// Create detailed email HTML content
function createEmailHTML(lead: LeadData, score: number): string {
  const urgencyColor = score >= 15 ? '#dc2626' : score >= 10 ? '#ea580c' : '#059669'
  const urgencyText = score >= 15 ? 'URGENT' : score >= 10 ? 'HIGH PRIORITY' : 'NEW LEAD'
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Las Vegas Lead</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #0A2540, #3A8DDE); color: white; padding: 20px; text-align: center; }
        .urgency { background-color: ${urgencyColor}; color: white; padding: 10px; text-align: center; font-weight: bold; font-size: 18px; }
        .content { padding: 20px; }
        .lead-info { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .field { margin: 10px 0; }
        .label { font-weight: bold; color: #0A2540; }
        .value { color: #333; }
        .score { background: #e5f3ff; padding: 10px; border-radius: 5px; margin: 15px 0; }
        .actions { background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .button { background: #3A8DDE; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 5px; }
        .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🏠 New Las Vegas Real Estate Lead</h1>
        <p>Las Vegas Nevada Home Sales</p>
      </div>
      
      <div class="urgency">
        ${urgencyText} - Lead Score: ${score}/50
      </div>
      
      <div class="content">
        <div class="lead-info">
          <h2>Lead Information</h2>
          
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${lead.name}</span>
          </div>
          
          <div class="field">
            <span class="label">Email:</span>
            <span class="value"><a href="mailto:${lead.email}">${lead.email}</a></span>
          </div>
          
          ${lead.phone ? `
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value"><a href="tel:${lead.phone}">${lead.phone}</a></span>
          </div>
          ` : ''}
          
          ${lead.propertyAddress ? `
          <div class="field">
            <span class="label">Property Interest:</span>
            <span class="value">${lead.propertyAddress}</span>
          </div>
          ` : ''}
          
          ${lead.propertyType ? `
          <div class="field">
            <span class="label">Property Type:</span>
            <span class="value">${lead.propertyType}</span>
          </div>
          ` : ''}
          
          ${lead.budget ? `
          <div class="field">
            <span class="label">Budget:</span>
            <span class="value">${lead.budget}</span>
          </div>
          ` : ''}
          
          ${lead.timeline ? `
          <div class="field">
            <span class="label">Timeline:</span>
            <span class="value">${lead.timeline}</span>
          </div>
          ` : ''}
          
          ${lead.estimatedValue ? `
          <div class="field">
            <span class="label">Estimated Value:</span>
            <span class="value">${lead.estimatedValue}</span>
          </div>
          ` : ''}
          
          ${lead.bedrooms && lead.bathrooms ? `
          <div class="field">
            <span class="label">Requirements:</span>
            <span class="value">${lead.bedrooms} bed, ${lead.bathrooms} bath</span>
          </div>
          ` : ''}
          
          ${lead.squareFootage ? `
          <div class="field">
            <span class="label">Square Footage:</span>
            <span class="value">${lead.squareFootage}</span>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">Source:</span>
            <span class="value">${lead.source}</span>
          </div>
          
          <div class="field">
            <span class="label">Page URL:</span>
            <span class="value"><a href="${lead.pageUrl}">${lead.pageUrl}</a></span>
          </div>
          
          ${lead.message ? `
          <div class="field">
            <span class="label">Message:</span>
            <span class="value">${lead.message}</span>
          </div>
          ` : ''}
        </div>
        
        <div class="score">
          <h3>📊 Lead Analysis</h3>
          <p><strong>Lead Score:</strong> ${score}/50</p>
          <p><strong>Priority Level:</strong> ${score >= 15 ? 'URGENT - Respond within 15 minutes' : score >= 10 ? 'HIGH - Respond within 1 hour' : 'NORMAL - Respond within 24 hours'}</p>
          <p><strong>Recommended Action:</strong> ${score >= 15 ? 'Call immediately' : score >= 10 ? 'Call within 1 hour' : 'Email within 24 hours'}</p>
        </div>
        
        <div class="actions">
          <h3>🚀 Quick Actions</h3>
          <a href="mailto:${lead.email}?subject=Re: Your Las Vegas Real Estate Inquiry" class="button">📧 Reply to Lead</a>
          <a href="tel:${lead.phone || ''}" class="button">📞 Call Lead</a>
          <a href="${lead.pageUrl}" class="button">🌐 View Source Page</a>
          <a href="https://www.lasvegashomeexpert.com/contact" class="button">📋 Add to CRM</a>
        </div>
        
        ${lead.utmSource || lead.utmMedium || lead.utmCampaign ? `
        <div class="lead-info">
          <h3>📈 Marketing Attribution</h3>
          ${lead.utmSource ? `<p><strong>UTM Source:</strong> ${lead.utmSource}</p>` : ''}
          ${lead.utmMedium ? `<p><strong>UTM Medium:</strong> ${lead.utmMedium}</p>` : ''}
          ${lead.utmCampaign ? `<p><strong>UTM Campaign:</strong> ${lead.utmCampaign}</p>` : ''}
        </div>
        ` : ''}
      </div>
      
      <div class="footer">
        <p>This lead was automatically generated from your Las Vegas Nevada Home Sales website.</p>
        <p>Received: ${new Date().toLocaleString()}</p>
        <p>Lead ID: ${Date.now()}</p>
      </div>
    </body>
    </html>
  `
} 
import { NextRequest, NextResponse } from 'next/server'
import { dbHelpers } from '../../../../config/database-config'

interface EmailJSLeadData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message?: string
  source: string
  pageUrl?: string
  propertyAddress?: string
  propertyType?: string
  budget?: string
  timeline?: string
  estimatedValue?: string
  bedrooms?: string
  bathrooms?: string
  squareFootage?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

export async function POST(request: NextRequest) {
  try {
    // Check if database is configured
    if (!process.env.POSTGRES_HOST) {
      console.error('PostgreSQL database not configured')
      return NextResponse.json(
        { error: 'Database not configured. Please try again later.' },
        { status: 503 }
      )
    }

    const body = await request.json() as EmailJSLeadData

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.source) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, lastName, email, source' },
        { status: 400 }
      )
    }

    // Get client IP and user agent
    const ipAddress = request.headers.get('x-forwarded-for') ||
                     request.headers.get('x-real-ip') ||
                     'unknown'
    
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Extract UTM parameters from pageUrl if present
    let utmSource, utmMedium, utmCampaign
    if (body.pageUrl) {
      try {
        const url = new URL(body.pageUrl)
        utmSource = url.searchParams.get('utm_source')
        utmMedium = url.searchParams.get('utm_medium')
        utmCampaign = url.searchParams.get('utm_campaign')
      } catch (error) {
        console.warn('Invalid pageUrl for UTM extraction:', body.pageUrl)
      }
    }

    // Prepare lead data for database
    const leadData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      message: body.message,
      source: body.source,
      pageUrl: body.pageUrl,
      propertyAddress: body.propertyAddress,
      propertyType: body.propertyType,
      budget: body.budget,
      timeline: body.timeline,
      estimatedValue: body.estimatedValue,
      bedrooms: body.bedrooms,
      bathrooms: body.bathrooms,
      squareFootage: body.squareFootage,
      utmSource: utmSource || body.utmSource,
      utmMedium: utmMedium || body.utmMedium,
      utmCampaign: utmCampaign || body.utmCampaign,
      ipAddress,
      userAgent,
    }

    // Log lead submission attempt
    console.log('Processing EmailJS lead submission:', {
      source: leadData.source,
      email: leadData.email,
      timestamp: new Date().toISOString()
    })

    // Store lead in database
    const leadId = await dbHelpers.insertLead(leadData)

    if (leadId) {
      // Log successful submission
      console.log('EmailJS lead stored successfully:', {
        leadId,
        source: leadData.source,
        timestamp: new Date().toISOString()
      })

      // Return success response
      return NextResponse.json({
        success: true,
        leadId,
        message: 'Lead submitted successfully'
      })
    } else {
      throw new Error('Failed to insert lead into database')
    }

  } catch (error) {
    console.error('Error processing EmailJS lead submission:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to process lead submission. Please try again or contact us directly at (702) 555-0123.',
        details: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check if database is configured
    if (!process.env.POSTGRES_HOST) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      )
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') || 'new'
    const limit = parseInt(searchParams.get('limit') || '50')

    // Get leads by status
    const leads = await dbHelpers.getLeadsByStatus(status, limit)

    return NextResponse.json({
      success: true,
      leads,
      count: leads.length
    })

  } catch (error) {
    console.error('Error fetching leads:', error)
    
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
} 
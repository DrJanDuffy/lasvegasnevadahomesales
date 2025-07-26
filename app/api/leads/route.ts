import { NextRequest, NextResponse } from 'next/server';
import { followUpBossService } from '../../../services/followUpBossService';
import { LeadData } from '../../../config/crm-config';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as any;
    const leadData: LeadData = {
      ...body,
      pageUrl: request.headers.get('referer') || 'Unknown',
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ipAddress: request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip') || 
                 'Unknown',
    };

    // Validate required fields
    if (!leadData.firstName || !leadData.lastName || !leadData.email) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, lastName, email' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Process the lead through Follow Up Boss
    const result = await followUpBossService.processLead(leadData);

    if (result.success) {
      // Track conversion in analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'lead_submitted', {
          event_category: 'lead_generation',
          event_label: leadData.source,
          value: 1,
          custom_parameter_1: leadData.budget,
          custom_parameter_2: leadData.timeline,
        });
      }

      return NextResponse.json({
        success: true,
        message: 'Lead submitted successfully',
        personId: result.personId,
      });
    } else {
      console.error('Failed to process lead:', result.error);
      return NextResponse.json(
        { error: 'Failed to process lead. Please try again.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing lead submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Lead submission endpoint. Use POST to submit leads.' },
    { status: 200 }
  );
} 
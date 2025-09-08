import { type NextRequest, NextResponse } from 'next/server';
import type { LeadData } from '../../../config/crm-config';
import { followUpBossService } from '../../../services/followUpBossService';

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.FOLLOW_UP_BOSS_API_KEY) {
      console.error('Follow Up Boss API key not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    const body = (await request.json()) as any;
    const leadData: LeadData = {
      ...body,
      pageUrl: request.headers.get('referer') || 'Unknown',
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ipAddress:
        request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown',
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
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Log lead submission attempt
    console.log('Processing lead submission:', {
      source: leadData.source,
      email: leadData.email,
      timestamp: new Date().toISOString(),
    });

    // Process the lead through Follow Up Boss
    const result = await followUpBossService.processLead(leadData);

    if (result.success) {
      // Log successful submission
      console.log('Lead processed successfully:', {
        personId: result.personId,
        source: leadData.source,
        timestamp: new Date().toISOString(),
      });

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
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Lead submission endpoint. Use POST to submit leads.' },
    { status: 200 }
  );
}

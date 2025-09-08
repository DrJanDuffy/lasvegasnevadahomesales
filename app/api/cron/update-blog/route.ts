import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Verify this is a legitimate cron request
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Trigger the RSS feed update
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/rss-feed`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`RSS feed update failed: ${response.status}`);
    }

    const data = await response.json() as { success: boolean; posts?: any[] };
    
    return NextResponse.json({
      success: true,
      message: 'Blog content updated successfully',
      postsCount: data.posts?.length || 0,
      lastUpdated: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Cron job error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update blog content',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

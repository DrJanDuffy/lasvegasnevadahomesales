import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

// Schema for photo analysis results
const photoAnalysisSchema = z.object({
  brandFit: z.object({
    score: z.number().min(1).max(10),
    reasoning: z.string(),
    recommendations: z.array(z.string())
  }),
  quality: z.object({
    score: z.number().min(1).max(10),
    technicalAssessment: z.string(),
    improvements: z.array(z.string())
  }),
  seoPotential: z.object({
    score: z.number().min(1).max(10),
    keywords: z.array(z.string()),
    altTextSuggestion: z.string(),
    titleSuggestion: z.string()
  }),
  emotionalImpact: z.object({
    score: z.number().min(1).max(10),
    targetAudience: z.array(z.string()),
    emotionalTriggers: z.array(z.string()),
    callToAction: z.string()
  }),
  realEstateSpecific: z.object({
    propertyType: z.string(),
    neighborhoodVibe: z.string(),
    lifestyleAppeal: z.array(z.string()),
    marketPositioning: z.string()
  }),
  overallRecommendation: z.object({
    useForWebsite: z.boolean(),
    priority: z.enum(['high', 'medium', 'low']),
    suggestedUse: z.array(z.string()),
    optimizationNotes: z.string()
  })
});

export async function POST(request: Request) {
  try {
    const body = await request.json() as { imageUrl: string };
    const { imageUrl } = body;
    
    if (!imageUrl) {
      return Response.json(
        { error: 'Image URL is required' },
        { status: 400 }
      );
    }

    // Use OpenAI's vision model for analysis
    const analysis = await generateObject({
      model: openai('gpt-4o'),
      schema: photoAnalysisSchema,
      prompt: `Analyze this real estate photo for Las Vegas Nevada Home Sales website. Consider:

1. BRAND FIT (1-10): Does this align with our luxury real estate brand?
2. QUALITY (1-10): Technical quality, lighting, composition
3. SEO POTENTIAL (1-10): Keywords, alt text, search optimization
4. EMOTIONAL IMPACT (1-10): How does this make viewers feel?
5. REAL ESTATE SPECIFIC: Property type, neighborhood appeal, lifestyle
6. OVERALL RECOMMENDATION: Should we use this on our website?

Focus on Las Vegas real estate market, luxury homes, family appeal, and professional presentation.`,
      messages: [
        { 
          role: 'user', 
          content: [
            { 
              type: 'image', 
              image: imageUrl 
            }
          ] 
        }
      ]
    });

    return Response.json({
      success: true,
      analysis,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Photo analysis error:', error);
    return Response.json(
      { 
        error: 'Failed to analyze photo',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 
'use client'

import { useState } from 'react'

interface PhotoAnalysis {
  brandFit: {
    score: number
    reasoning: string
    recommendations: string[]
  }
  quality: {
    score: number
    technicalAssessment: string
    improvements: string[]
  }
  seoPotential: {
    score: number
    keywords: string[]
    altTextSuggestion: string
    titleSuggestion: string
  }
  emotionalImpact: {
    score: number
    targetAudience: string[]
    emotionalTriggers: string[]
    callToAction: string
  }
  realEstateSpecific: {
    propertyType: string
    neighborhoodVibe: string
    lifestyleAppeal: string[]
    marketPositioning: string
  }
  overallRecommendation: {
    useForWebsite: boolean
    priority: 'high' | 'medium' | 'low'
    suggestedUse: string[]
    optimizationNotes: string
  }
}

interface PhotoAnalyzerProps {
  className?: string
}

export function PhotoAnalyzer({ className = '' }: PhotoAnalyzerProps) {
  const [imageUrl, setImageUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<PhotoAnalysis | null>(null)
  const [error, setError] = useState('')

  const analyzePhoto = async () => {
    if (!imageUrl.trim()) {
      setError('Please enter an image URL')
      return
    }

    setIsAnalyzing(true)
    setError('')
    setAnalysis(null)

    try {
      const response = await fetch('/api/analyze-photo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: imageUrl.trim() }),
      })

      const data = await response.json() as { success: boolean; analysis?: PhotoAnalysis; error?: string }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze photo')
      }

      if (data.analysis) {
        setAnalysis(data.analysis)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analysis failed')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600'
    if (score >= 6) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        AI Photo Analysis for Real Estate
      </h2>
      
      {/* Input Section */}
      <div className="mb-6">
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
          Image URL
        </label>
        <div className="flex gap-2">
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/photo.jpg"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={analyzePhoto}
            disabled={isAnalyzing}
            className="bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Photo'}
          </button>
        </div>
        {error && (
          <p className="text-red-600 text-sm mt-2">{error}</p>
        )}
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6">
          {/* Overall Recommendation */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Overall Recommendation
            </h3>
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${getPriorityColor(analysis.overallRecommendation.priority)}`}>
                {analysis.overallRecommendation.priority.toUpperCase()} PRIORITY
              </span>
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${analysis.overallRecommendation.useForWebsite ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {analysis.overallRecommendation.useForWebsite ? 'USE FOR WEBSITE' : 'DO NOT USE'}
              </span>
            </div>
            <p className="text-gray-700 mb-2">{analysis.overallRecommendation.optimizationNotes}</p>
            <div className="text-sm text-gray-600">
              <strong>Suggested Uses:</strong> {analysis.overallRecommendation.suggestedUse.join(', ')}
            </div>
          </div>

          {/* Scores Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Brand Fit</h4>
              <div className={`text-2xl font-bold ${getScoreColor(analysis.brandFit.score)}`}>
                {analysis.brandFit.score}/10
              </div>
              <p className="text-sm text-gray-600 mt-1">{analysis.brandFit.reasoning}</p>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Quality</h4>
              <div className={`text-2xl font-bold ${getScoreColor(analysis.quality.score)}`}>
                {analysis.quality.score}/10
              </div>
              <p className="text-sm text-gray-600 mt-1">{analysis.quality.technicalAssessment}</p>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">SEO Potential</h4>
              <div className={`text-2xl font-bold ${getScoreColor(analysis.seoPotential.score)}`}>
                {analysis.seoPotential.score}/10
              </div>
              <p className="text-sm text-gray-600 mt-1">Keywords: {analysis.seoPotential.keywords.join(', ')}</p>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Emotional Impact</h4>
              <div className={`text-2xl font-bold ${getScoreColor(analysis.emotionalImpact.score)}`}>
                {analysis.emotionalImpact.score}/10
              </div>
              <p className="text-sm text-gray-600 mt-1">Target: {analysis.emotionalImpact.targetAudience.join(', ')}</p>
            </div>
          </div>

          {/* Real Estate Specific */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Real Estate Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Property Type:</strong> {analysis.realEstateSpecific.propertyType}
              </div>
              <div>
                <strong>Neighborhood Vibe:</strong> {analysis.realEstateSpecific.neighborhoodVibe}
              </div>
              <div>
                <strong>Market Positioning:</strong> {analysis.realEstateSpecific.marketPositioning}
              </div>
              <div>
                <strong>Lifestyle Appeal:</strong> {analysis.realEstateSpecific.lifestyleAppeal.join(', ')}
              </div>
            </div>
          </div>

          {/* SEO Suggestions */}
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              SEO Suggestions
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Alt Text:</strong> {analysis.seoPotential.altTextSuggestion}
              </div>
              <div>
                <strong>Title:</strong> {analysis.seoPotential.titleSuggestion}
              </div>
              <div>
                <strong>Keywords:</strong> {analysis.seoPotential.keywords.join(', ')}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Recommendations
            </h3>
            <div className="space-y-2">
              {analysis.brandFit.recommendations.map((rec, index) => (
                <div key={index} className="text-sm text-gray-700">
                  • {rec}
                </div>
              ))}
              {analysis.quality.improvements.map((improvement, index) => (
                <div key={index} className="text-sm text-gray-700">
                  • {improvement}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
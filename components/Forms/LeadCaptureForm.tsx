'use client'

import { useState } from 'react'
import { Button } from '../Button/Button'

interface LeadCaptureFormProps {
  title?: string
  subtitle?: string
  className?: string
  onLeadCapture?: (data: LeadData) => void
  showPhone?: boolean
  showBudget?: boolean
  showTimeline?: boolean
  source?: string
}

interface LeadData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  budget?: string
  timeline?: string
  message?: string
  source: string
}

export function LeadCaptureForm({
  title = "Get Your Free Home Valuation",
  subtitle = "Find out what your home is worth in today's Las Vegas market",
  className = '',
  onLeadCapture,
  showPhone = true,
  showBudget = true,
  showTimeline = true,
  source = 'lead-capture-form'
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<LeadData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    timeline: '',
    message: '',
    source: 'lead-capture-form'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Track form interaction with Vercel Analytics
      if (typeof window !== 'undefined' && window.realEstateTracking?.trackFormInteraction) {
        window.realEstateTracking.trackFormInteraction('lead-capture-form', 'form_started')
      }
      
      // Track with Google Analytics as well
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'lead_generation',
          event_label: source,
          value: 1
        })
      }

      // Call the callback if provided
      if (onLeadCapture) {
        onLeadCapture(formData)
      }

      // Prepare enhanced lead data
      const enhancedFormData = {
        ...formData,
        source: source,
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        timestamp: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : '',
        // Add UTM parameters if available
        utm_source: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') || 'direct' : 'direct',
        utm_medium: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_medium') || 'website' : 'website',
        utm_campaign: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_campaign') || 'organic' : 'organic',
      }

      // Submit to API with retry logic
      let response
      let retries = 0
      const maxRetries = 3

      while (retries < maxRetries) {
        try {
          response = await fetch('/api/leads', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(enhancedFormData),
          })

          if (response.ok) break
          
          retries++
          if (retries < maxRetries) {
            await new Promise(resolve => setTimeout(resolve, 1000 * retries)) // Exponential backoff
          }
        } catch (fetchError) {
          retries++
          if (retries >= maxRetries) throw fetchError
          await new Promise(resolve => setTimeout(resolve, 1000 * retries))
        }
      }

      if (!response || !response.ok) {
        throw new Error(`HTTP ${response?.status}: ${response?.statusText || 'Network error'}`)
      }

      const result = await response.json() as { success: boolean; error?: string; personId?: string }

      if (result.success) {
        // Track successful submission with Vercel Analytics
        if (typeof window !== 'undefined' && window.realEstateTracking?.trackLeadSubmission) {
          window.realEstateTracking.trackLeadSubmission('contact-form', 25, source)
        }
        
        // Track with Google Analytics as well
        if (typeof gtag !== 'undefined') {
          gtag('event', 'lead_submitted', {
            event_category: 'lead_generation',
            event_label: source,
            value: 1,
            custom_parameter_1: formData.budget,
            custom_parameter_2: formData.timeline,
          })
        }

        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            budget: '',
            timeline: '',
            message: '',
            source: 'lead-capture-form'
          })
        }, 3000)
      } else {
        throw new Error(result.error || 'Failed to submit lead')
      }

    } catch (error) {
      console.error('Error submitting form:', error)
      
      // Track failed submission
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_error', {
          event_category: 'lead_generation',
          event_label: source,
          value: 1,
          error_message: error instanceof Error ? error.message : 'Unknown error'
        })
      }

      // Show user-friendly error message
      alert('There was an error submitting your request. Please try again or contact us directly at (702) 555-0123.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof LeadData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <div className="text-green-600 text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          We've received your request. Our team will contact you within 24 hours with your personalized home valuation.
        </p>
      </div>
    )
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-lg p-6 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              required
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="your.email@example.com"
          />
        </div>

        {showPhone && (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="(702) 555-0123"
            />
          </div>
        )}

        {showBudget && (
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
              Budget Range
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select budget range</option>
              <option value="under-300k">Under $300,000</option>
              <option value="300k-500k">$300,000 - $500,000</option>
              <option value="500k-750k">$500,000 - $750,000</option>
              <option value="750k-1m">$750,000 - $1,000,000</option>
              <option value="over-1m">Over $1,000,000</option>
            </select>
          </div>
        )}

        {showTimeline && (
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
              Timeline
            </label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select timeline</option>
              <option value="immediately">Immediately</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-12-months">6-12 months</option>
              <option value="just-looking">Just looking</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tell us about your specific needs..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 py-3 rounded-md font-semibold transition-colors duration-200"
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Valuation'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to receive communications from Las Vegas Nevada Home Sales. 
          We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  )
} 
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { emailjsConfig, getEmailTemplate, getFieldMappings, getSuccessMessage, getErrorMessage } from '../../config/emailjs-config'

interface EmailJSContactFormProps {
  title?: string
  subtitle?: string
  className?: string
  formType?: 'contact' | 'propertyInquiry' | 'homeValuation' | 'summerlin' | 'henderson' | 'greenValley' | 'downtown'
  showPhone?: boolean
  showBudget?: boolean
  showTimeline?: boolean
  showPropertyDetails?: boolean
  source?: string
  onSuccess?: () => void
  onError?: (error: string) => void
}

interface FormData {
  firstName: string
  lastName: string
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
}

export function EmailJSContactForm({
  title = "Get Your Free Home Valuation",
  subtitle = "Find out what your home is worth in today's Las Vegas market",
  className = '',
  formType = 'contact',
  showPhone = true,
  showBudget = true,
  showTimeline = true,
  showPropertyDetails = false,
  source = 'emailjs-contact-form',
  onSuccess,
  onError
}: EmailJSContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Get template configuration
      const template = getEmailTemplate(formType)
      const fieldMappings = getFieldMappings(formType === 'propertyInquiry' ? 'property' : formType === 'homeValuation' ? 'valuation' : 'contact')

      // Prepare template parameters
      const templateParams = {
        [fieldMappings.name]: `${data.firstName} ${data.lastName}`,
        [fieldMappings.email]: data.email,
        [fieldMappings.phone]: data.phone || '',
        [fieldMappings.message]: data.message || '',
        [fieldMappings.source]: source,
        [fieldMappings.pageUrl]: typeof window !== 'undefined' ? window.location.href : '',
        // Property-specific fields
        ...(data.propertyAddress && { [fieldMappings.propertyAddress]: data.propertyAddress }),
        ...(data.propertyType && { [fieldMappings.propertyType]: data.propertyType }),
        ...(data.budget && { [fieldMappings.budget]: data.budget }),
        ...(data.timeline && { [fieldMappings.timeline]: data.timeline }),
        ...(data.estimatedValue && { [fieldMappings.estimatedValue]: data.estimatedValue }),
        ...(data.bedrooms && { [fieldMappings.bedrooms]: data.bedrooms }),
        ...(data.bathrooms && { [fieldMappings.bathrooms]: data.bathrooms }),
        ...(data.squareFootage && { [fieldMappings.squareFootage]: data.squareFootage }),
      }

      // Send email via EmailJS
      const result = await emailjs.send(
        emailjsConfig.service.serviceId,
        template.templateId,
        templateParams,
        emailjsConfig.service.userId
      )

      if (result.status === 200) {
        // Also store lead in database for CRM integration
        try {
          const dbResponse = await fetch('/api/leads/emailjs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phone: data.phone,
              message: data.message,
              source: source,
              pageUrl: typeof window !== 'undefined' ? window.location.href : '',
              propertyAddress: data.propertyAddress,
              propertyType: data.propertyType,
              budget: data.budget,
              timeline: data.timeline,
              estimatedValue: data.estimatedValue,
              bedrooms: data.bedrooms,
              bathrooms: data.bathrooms,
              squareFootage: data.squareFootage,
            }),
          })

          if (!dbResponse.ok) {
            console.warn('Failed to store lead in database, but email was sent successfully')
          }
        } catch (dbError) {
          console.warn('Database storage failed, but email was sent successfully:', dbError)
        }

        // Track successful submission with Vercel Analytics
        if (typeof window !== 'undefined' && window.realEstateTracking?.trackLeadSubmission) {
          window.realEstateTracking.trackLeadSubmission('emailjs-form', 25, source)
        }

        // Track with Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'lead_submitted', {
            event_category: 'lead_generation',
            event_label: source,
            value: 1,
            custom_parameter_1: data.budget,
            custom_parameter_2: data.timeline,
          })
        }

        setIsSubmitted(true)
        reset()
        onSuccess?.()
      } else {
        throw new Error('EmailJS failed to send')
      }
    } catch (error) {
      console.error('EmailJS submission error:', error)
      setSubmitError(getErrorMessage('general'))
      onError?.(error instanceof Error ? error.message : 'Unknown error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    // This is handled by react-hook-form
  }

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <div className="text-green-600 text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          {getSuccessMessage(formType)}
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

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-700">{submitError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', { required: 'First name is required' })}
              className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.firstName ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Your first name"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              {...register('lastName', { required: 'Last name is required' })}
              className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.lastName ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Your last name"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {showPhone && (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="(702) 555-0123"
            />
          </div>
        )}

        {showPropertyDetails && (
          <>
            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Property Address
              </label>
              <input
                type="text"
                id="propertyAddress"
                {...register('propertyAddress')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="1234 Las Vegas Blvd, Las Vegas, NV"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  {...register('bedrooms')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
              <div>
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
                  Bathrooms
                </label>
                <select
                  id="bathrooms"
                  {...register('bathrooms')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4+">4+</option>
                </select>
              </div>
              <div>
                <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-1">
                  Square Feet
                </label>
                <input
                  type="number"
                  id="squareFootage"
                  {...register('squareFootage')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1,500"
                />
              </div>
            </div>
          </>
        )}

        {showBudget && (
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
              Budget Range
            </label>
            <select
              id="budget"
              {...register('budget')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Budget Range</option>
              <option value="Under $200,000">Under $200,000</option>
              <option value="$200,000 - $300,000">$200,000 - $300,000</option>
              <option value="$300,000 - $400,000">$300,000 - $400,000</option>
              <option value="$400,000 - $500,000">$400,000 - $500,000</option>
              <option value="$500,000 - $750,000">$500,000 - $750,000</option>
              <option value="$750,000 - $1,000,000">$750,000 - $1,000,000</option>
              <option value="$1,000,000+">$1,000,000+</option>
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
              {...register('timeline')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Timeline</option>
              <option value="Immediately">Immediately</option>
              <option value="Within 30 days">Within 30 days</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
              <option value="Just exploring">Just exploring</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tell us about your real estate needs..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'hover:bg-blue-700 focus:ring-4 focus:ring-blue-200'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Submit Request'}
        </button>
      </form>
    </div>
  )
} 
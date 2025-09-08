'use client';

import { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Form, FormField, FormLabel, FormControl, FormDescription, FormMessage } from '../ui/form';

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  onLeadCapture?: (data: LeadData) => void;
  showPhone?: boolean;
  showBudget?: boolean;
  showTimeline?: boolean;
  source?: string;
}

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  source: string;
}

export function LeadCaptureForm({
  title = 'Get Your Free Home Valuation',
  subtitle = "Find out what your home is worth in today's Las Vegas market",
  className = '',
  onLeadCapture,
  showPhone = true,
  showBudget = true,
  showTimeline = true,
  source = 'lead-capture-form',
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<LeadData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    timeline: '',
    message: '',
    source: 'lead-capture-form',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track form interaction with Vercel Analytics
      if (typeof window !== 'undefined' && window.realEstateTracking?.trackFormInteraction) {
        window.realEstateTracking.trackFormInteraction('lead-capture-form', 'form_started');
      }

      // Track with Google Analytics as well
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'lead_generation',
          event_label: source,
          value: 1,
        });
      }

      // Call the callback if provided
      if (onLeadCapture) {
        onLeadCapture(formData);
      }

      // Prepare enhanced lead data
      const enhancedFormData = {
        ...formData,
        source: source,
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        timestamp: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : '',
        // Add UTM parameters if available
        utm_source:
          typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search).get('utm_source') || 'direct'
            : 'direct',
        utm_medium:
          typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search).get('utm_medium') || 'website'
            : 'website',
        utm_campaign:
          typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search).get('utm_campaign') || 'organic'
            : 'organic',
      };

      // Submit to API with retry logic
      let response;
      let retries = 0;
      const maxRetries = 3;

      while (retries < maxRetries) {
        try {
          response = await fetch('/api/leads', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(enhancedFormData),
          });

          if (response.ok) break;

          retries++;
          if (retries < maxRetries) {
            await new Promise((resolve) => setTimeout(resolve, 1000 * retries)); // Exponential backoff
          }
        } catch (fetchError) {
          retries++;
          if (retries >= maxRetries) throw fetchError;
          await new Promise((resolve) => setTimeout(resolve, 1000 * retries));
        }
      }

      if (!response || !response.ok) {
        throw new Error(`HTTP ${response?.status}: ${response?.statusText || 'Network error'}`);
      }

      const result = (await response.json()) as {
        success: boolean;
        error?: string;
        personId?: string;
      };

      if (result.success) {
        // Track successful submission with Vercel Analytics
        if (typeof window !== 'undefined' && window.realEstateTracking?.trackLeadSubmission) {
          window.realEstateTracking.trackLeadSubmission('contact-form', 25, source);
        }

        // Track with Google Analytics as well
        if (typeof gtag !== 'undefined') {
          gtag('event', 'lead_submitted', {
            event_category: 'lead_generation',
            event_label: source,
            value: 1,
            custom_parameter_1: formData.budget,
            custom_parameter_2: formData.timeline,
          });
        }

        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            budget: '',
            timeline: '',
            message: '',
            source: 'lead-capture-form',
          });
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to submit lead');
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      // Track failed submission
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_error', {
          event_category: 'lead_generation',
          event_label: source,
          value: 1,
          error_message: error instanceof Error ? error.message : 'Unknown error',
        });
      }

      // Show user-friendly error message
      alert(
        'There was an error submitting your request. Please try again or contact us directly at (702) 555-0123.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof LeadData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className={`bg-green-50 border-green-200 ${className}`}>
        <CardContent className="p-6 text-center">
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <CardTitle className="text-xl text-green-800 mb-2">Thank You!</CardTitle>
          <CardDescription className="text-green-700">
            We've received your request. Our team will contact you within 24 hours with your
            personalized home valuation.
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField>
            <FormLabel htmlFor="firstName">
              First Name *
            </FormLabel>
            <FormControl>
              <Input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Your first name"
              />
            </FormControl>
          </FormField>
          <FormField>
            <FormLabel htmlFor="lastName">
              Last Name *
            </FormLabel>
            <FormControl>
              <Input
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Your last name"
              />
            </FormControl>
          </FormField>
        </div>

        <FormField>
          <FormLabel htmlFor="email">
            Email Address *
          </FormLabel>
          <FormControl>
            <Input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@example.com"
            />
          </FormControl>
        </FormField>

        {showPhone && (
          <FormField>
            <FormLabel htmlFor="phone">
              Phone Number
            </FormLabel>
            <FormControl>
              <Input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(702) 555-0123"
              />
            </FormControl>
          </FormField>
        )}

        {showBudget && (
          <FormField>
            <FormLabel htmlFor="budget">
              Budget Range
            </FormLabel>
            <FormControl>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select budget range</option>
                <option value="under-300k">Under $300,000</option>
                <option value="300k-500k">$300,000 - $500,000</option>
                <option value="500k-750k">$500,000 - $750,000</option>
                <option value="750k-1m">$750,000 - $1,000,000</option>
                <option value="over-1m">Over $1,000,000</option>
              </select>
            </FormControl>
          </FormField>
        )}

        {showTimeline && (
          <FormField>
            <FormLabel htmlFor="timeline">
              Timeline
            </FormLabel>
            <FormControl>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select timeline</option>
                <option value="immediately">Immediately</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="just-looking">Just looking</option>
              </select>
            </FormControl>
          </FormField>
        )}

        <FormField>
          <FormLabel htmlFor="message">
            Additional Information
          </FormLabel>
          <FormControl>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Tell us about your specific needs..."
            />
          </FormControl>
        </FormField>

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          size="lg"
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Valuation'}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to receive communications from Las Vegas Nevada Home
          Sales. We respect your privacy and will never share your information.
        </p>
        </Form>
      </CardContent>
    </Card>
  );
}

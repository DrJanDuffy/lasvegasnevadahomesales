'use client';

import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';

interface VercelAnalyticsProps {
  mode?: 'production' | 'development';
  debug?: boolean;
}

// Real estate specific tracking events
interface RealEstateTracking {
  trackPropertyView: (
    propertyId: string,
    price: number,
    neighborhood: string,
    propertyType: string
  ) => void;
  trackLeadSubmission: (leadType: string, value: number, source: string) => void;
  trackValuationRequest: (propertyAddress: string, estimatedValue: number) => void;
  trackNeighborhoodSearch: (neighborhood: string, searchType: string) => void;
  trackMarketReportDownload: (reportType: string, neighborhood: string) => void;
  trackPhoneCall: (phoneNumber: string, callSource: string) => void;
  trackFormInteraction: (formId: string, action: string) => void;
  trackCTAClick: (ctaType: string, location: string, value?: number) => void;
  trackWidgetInteraction: (widgetType: string, action: string) => void;
  trackScrollDepth: (depth: number) => void;
  trackTimeOnPage: (timeSpent: number) => void;
  trackUserJourney: (step: string, data?: Record<string, any>) => void;
}

// Extend Window interface for global tracking functions
declare global {
  interface Window {
    analytics?: {
      track: (event: string, properties?: Record<string, any>) => void;
    };
    realEstateTracking?: RealEstateTracking;
  }
}

export function VercelAnalytics({ mode = 'production', debug = false }: VercelAnalyticsProps) {
  useEffect(() => {
    // Initialize real estate tracking functions
    const realEstateTracking: RealEstateTracking = {
      trackPropertyView: (
        propertyId: string,
        price: number,
        neighborhood: string,
        propertyType: string
      ) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('Property Viewed', {
            propertyId,
            price,
            neighborhood,
            propertyType,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('Property View Tracked:', { propertyId, price, neighborhood, propertyType });
        }
      },

      trackLeadSubmission: (leadType: string, value: number, source: string) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('Lead Submitted', {
            leadType,
            value,
            source,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('Lead Submission Tracked:', { leadType, value, source });
        }
      },

      trackValuationRequest: (propertyAddress: string, estimatedValue: number) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('Valuation Requested', {
            propertyAddress,
            estimatedValue,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('Valuation Request Tracked:', { propertyAddress, estimatedValue });
        }
      },

      trackNeighborhoodSearch: (neighborhood: string, searchType: string) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('Neighborhood Searched', {
            neighborhood,
            searchType,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('Neighborhood Search Tracked:', { neighborhood, searchType });
        }
      },

      trackMarketReportDownload: (reportType: string, neighborhood: string) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('Market Report Downloaded', {
            reportType,
            neighborhood,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('Market Report Download Tracked:', { reportType, neighborhood });
        }
      },

      trackPhoneCall: (phoneNumber: string, callSource: string) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('Phone Call Initiated', {
            phoneNumber,
            callSource,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('Phone Call Tracked:', { phoneNumber, callSource });
        }
      },

      trackFormInteraction: (formId: string, action: string) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('Form Interaction', {
            formId,
            action,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('Form Interaction Tracked:', { formId, action });
        }
      },

      trackCTAClick: (ctaType: string, location: string, value?: number) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('CTA Clicked', {
            ctaType,
            location,
            value,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('CTA Click Tracked:', { ctaType, location, value });
        }
      },

      trackWidgetInteraction: (widgetType: string, action: string) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('Widget Interaction', {
            widgetType,
            action,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('Widget Interaction Tracked:', { widgetType, action });
        }
      },

      trackScrollDepth: (depth: number) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('Scroll Depth Reached', {
            depth,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('Scroll Depth Tracked:', { depth });
        }
      },

      trackTimeOnPage: (timeSpent: number) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('Time on Page', {
            timeSpent,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('Time on Page Tracked:', { timeSpent });
        }
      },

      trackUserJourney: (step: string, data?: Record<string, any>) => {
        if (typeof window !== 'undefined' && window.analytics) {
          window.analytics.track('User Journey Step', {
            step,
            ...data,
            market: 'las_vegas',
            timestamp: new Date().toISOString(),
          });
        }
        if (debug) {
          console.log('User Journey Step Tracked:', { step, data });
        }
      },
    };

    // Make tracking functions available globally
    window.realEstateTracking = realEstateTracking;

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll >= 25 && maxScroll < 50) {
          realEstateTracking.trackScrollDepth(25);
        } else if (maxScroll >= 50 && maxScroll < 75) {
          realEstateTracking.trackScrollDepth(50);
        } else if (maxScroll >= 75) {
          realEstateTracking.trackScrollDepth(75);
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent >= 30 && timeSpent < 60) {
        realEstateTracking.trackTimeOnPage(30);
      } else if (timeSpent >= 60 && timeSpent < 120) {
        realEstateTracking.trackTimeOnPage(60);
      } else if (timeSpent >= 120) {
        realEstateTracking.trackTimeOnPage(120);
      }
    };

    // Track user journey based on page
    const trackUserJourneyStep = () => {
      const path = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);

      let step = 'page_view';
      const data: Record<string, any> = {
        page: path,
        referrer: document.referrer,
      };

      // Determine journey step based on page
      if (path === '/') {
        step = 'homepage_visit';
      } else if (path === '/contact') {
        step = 'contact_page_visit';
      } else if (path === '/properties/search') {
        step = 'property_search_visit';
        data.searchQuery = searchParams.get('q');
      } else if (path.startsWith('/properties/')) {
        step = 'property_detail_visit';
        data.propertyId = path.split('/').pop();
      } else if (path === '/about') {
        step = 'about_page_visit';
      } else if (path === '/testimonials') {
        step = 'testimonials_visit';
      } else if (path === '/faq') {
        step = 'faq_visit';
      }

      realEstateTracking.trackUserJourney(step, data);
    };

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth);
    const timeInterval = setInterval(trackTimeOnPage, 30000); // Check every 30 seconds

    // Track initial page view and user journey
    trackUserJourneyStep();

    // Track form interactions
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;

              // Track Homebot widget interactions
              if (element.id === 'homebot_homeowner') {
                realEstateTracking.trackWidgetInteraction('homebot', 'widget_loaded');
              }

              // Track RealScout widget interactions
              if (
                element.tagName === 'REALSCOUT-OFFICE-LISTINGS' ||
                element.tagName === 'REALSCOUT-HOME-VALUE' ||
                element.tagName === 'REALSCOUT-YOUR-LISTINGS' ||
                element.tagName === 'REALSCOUT-SIMPLE-SEARCH' ||
                element.tagName === 'REALSCOUT-ADVANCED-SEARCH'
              ) {
                realEstateTracking.trackWidgetInteraction('realscout', 'widget_loaded');
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      clearInterval(timeInterval);
      observer.disconnect();

      // Clean up global functions
      delete window.realEstateTracking;
    };
  }, [debug]);

  return <Analytics mode={mode} />;
}

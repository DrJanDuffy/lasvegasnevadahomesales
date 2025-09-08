'use client';

import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
  enableEnhancedMeasurement?: boolean;
  enableEcommerce?: boolean;
  enableDebug?: boolean;
}

export function GoogleAnalytics({
  measurementId = 'G-XXXXXXXXXX',
  enableEnhancedMeasurement = true,
  enableEcommerce = true,
  enableDebug = false,
}: GoogleAnalyticsProps) {
  useEffect(() => {
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics: Please provide a valid measurement ID');
      return;
    }

    // Load gtag script
    const loadGtag = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());

      // Configure GA4
      gtag('config', measurementId, {
        // Enhanced measurement for real estate
        enhanced_measurements: enableEnhancedMeasurement
          ? {
              scrolls: true,
              outbound_clicks: true,
              site_search: true,
              video_engagement: true,
              file_downloads: true,
              page_loads: true,
              form_interactions: true,
            }
          : false,

        // Custom dimensions for real estate
        custom_map: {
          cd1: 'user_type', // buyer, seller, investor
          cd2: 'property_type', // residential, commercial, luxury
          cd3: 'neighborhood', // Summerlin, Henderson, etc.
          cd4: 'price_range', // under_500k, 500k_1m, over_1m
          cd5: 'lead_source', // organic, paid, referral
          cd6: 'conversion_value', // lead value
          cd7: 'market_segment', // first_time_buyer, luxury, investment
          cd8: 'interaction_depth', // low, medium, high
        },

        // E-commerce settings
        send_page_view: true,
        anonymize_ip: true,
        allow_google_signals: true,
        allow_ad_personalization_signals: true,
      });

      // Make gtag available globally
      window.gtag = gtag;

      // Note: Real estate tracking functions are now handled by VercelAnalytics.tsx
      // This component focuses on Google Analytics (gtag) setup and basic tracking

      // Track page views with custom parameters
      const trackPageView = (pageTitle: string, pageLocation: string) => {
        gtag('event', 'page_view', {
          page_title: pageTitle,
          page_location: pageLocation,
          custom_parameter: 'las_vegas_real_estate',
        });
      };

      // Track current page
      trackPageView(document.title, window.location.href);

      // Track scroll depth
      let maxScroll = 0;
      const trackScrollDepth = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          if (maxScroll >= 25 && maxScroll < 50) {
            gtag('event', 'scroll_depth', {
              event_label: '25%',
              custom_parameter: 'engagement',
            });
          } else if (maxScroll >= 50 && maxScroll < 75) {
            gtag('event', 'scroll_depth', {
              event_label: '50%',
              custom_parameter: 'engagement',
            });
          } else if (maxScroll >= 75) {
            gtag('event', 'scroll_depth', {
              event_label: '75%',
              custom_parameter: 'engagement',
            });
          }
        }
      };

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent >= 30 && timeSpent < 60) {
          gtag('event', 'time_on_page', {
            event_label: '30_seconds',
            custom_parameter: 'engagement',
          });
        } else if (timeSpent >= 60 && timeSpent < 120) {
          gtag('event', 'time_on_page', {
            event_label: '1_minute',
            custom_parameter: 'engagement',
          });
        } else if (timeSpent >= 120) {
          gtag('event', 'time_on_page', {
            event_label: '2_minutes',
            custom_parameter: 'engagement',
          });
        }
      };

      // Add event listeners
      window.addEventListener('scroll', trackScrollDepth);
      const timeInterval = setInterval(trackTimeOnPage, 30000);

      // Track form interactions
      const trackFormInteraction = (formId: string, action: string): void => {
        gtag('event', 'form_interaction', {
          form_id: formId,
          form_action: action,
          custom_parameter: 'lead_generation',
        });
      };

      // Track CTA clicks
      const trackCTAClick = (ctaType: string, location: string, value?: number) => {
        gtag('event', 'cta_click', {
          cta_type: ctaType,
          cta_location: location,
          value: value,
          custom_parameter: 'conversion',
        });
      };

      // Note: Real estate tracking functions are now handled by VercelAnalytics.tsx
      // This component focuses on Google Analytics (gtag) setup and basic tracking

      // Debug mode
      if (enableDebug) {
        console.log('Google Analytics 4 initialized with measurement ID:', measurementId);
        console.log('Enhanced measurement enabled:', enableEnhancedMeasurement);
        console.log('E-commerce tracking enabled:', enableEcommerce);
      }

      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
        clearInterval(timeInterval);
      };
    };

    loadGtag();
  }, [measurementId, enableEnhancedMeasurement, enableEcommerce, enableDebug]);

  return null;
}

// Extend Window interface for global functions
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

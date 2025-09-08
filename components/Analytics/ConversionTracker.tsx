'use client';

import { useEffect } from 'react';

interface ConversionTrackerProps {
  pageType: 'home-valuation' | 'contact' | 'property-search';
}

// Note: Window interface extensions are now handled in VercelAnalytics.tsx
// This component uses Google Analytics (gtag) for tracking

export function ConversionTracker({ pageType }: ConversionTrackerProps) {
  useEffect(() => {
    // Track page view
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        custom_parameter: pageType,
      });
    }

    // Track CTA button clicks
    const trackCTAClick = (ctaType: string, location: string, value?: number) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'cta_click', {
          event_category: 'conversion',
          event_label: `${ctaType}_${location}`,
          value: value || 1,
          custom_parameter: pageType,
        });
      }
    };

    // Track phone number clicks
    const trackPhoneClick = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_click', {
          event_category: 'contact',
          event_label: 'las_vegas_evaluation',
          custom_parameter: pageType,
        });
      }
    };

    // Track form submissions
    const trackFormSubmission = (formType: string) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'conversion',
          event_label: formType,
          value: 1,
          custom_parameter: pageType,
        });
      }
    };

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll >= 25 && maxScroll < 50) {
          gtag('event', 'scroll_depth', { event_label: '25%' });
        } else if (maxScroll >= 50 && maxScroll < 75) {
          gtag('event', 'scroll_depth', { event_label: '50%' });
        } else if (maxScroll >= 75) {
          gtag('event', 'scroll_depth', { event_label: '75%' });
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent >= 30 && timeSpent < 60) {
        gtag('event', 'time_on_page', { event_label: '30_seconds' });
      } else if (timeSpent >= 60 && timeSpent < 120) {
        gtag('event', 'time_on_page', { event_label: '1_minute' });
      } else if (timeSpent >= 120) {
        gtag('event', 'time_on_page', { event_label: '2_minutes' });
      }
    };

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth);
    const timeInterval = setInterval(trackTimeOnPage, 30000); // Check every 30 seconds

    // Track widget interactions
    const trackWidgetInteraction = (widgetType: string, action: string) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'widget_interaction', {
          event_category: 'engagement',
          event_label: `${widgetType}_${action}`,
          custom_parameter: pageType,
        });
      }
    };

    // Note: Global tracking functions are now handled by VercelAnalytics.tsx
    // This component focuses on Google Analytics (gtag) tracking only

    // Track Homebot widget interactions
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.id === 'homebot_homeowner') {
                trackWidgetInteraction('homebot', 'widget_loaded');
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
      // Note: Global tracking functions are managed by VercelAnalytics.tsx
    };
  }, [pageType]);

  return null;
}

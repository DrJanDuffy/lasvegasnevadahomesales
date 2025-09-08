'use client';

import React, { useEffect } from 'react';

// Type declarations for Performance API
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface AdvancedSEOMonitorProps {
  pageUrl?: string;
  pageTitle?: string;
  debug?: boolean;
  trackUserBehavior?: boolean;
  trackConversions?: boolean;
}

export default function AdvancedSEOMonitor({
  pageUrl = typeof window !== 'undefined' ? window.location.pathname : '/',
  pageTitle = document.title,
  debug = false,
  trackUserBehavior = true,
  trackConversions = true,
}: AdvancedSEOMonitorProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const startTime = performance.now();

    // Track page load time
    const trackPageLoad = () => {
      const loadTime = performance.now() - startTime;
      if (debug) {
        console.log(`Page load time: ${loadTime.toFixed(2)}ms`);
      }

      // Send to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'timing_complete', {
          name: 'page_load',
          value: Math.round(loadTime),
          page_url: pageUrl,
          page_title: pageTitle,
        });
      }
    };

    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry && lastEntry.startTime) {
          if (debug) {
            console.log(`LCP: ${lastEntry.startTime.toFixed(2)}ms`);
          }
          if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
              name: 'lcp',
              value: Math.round(lastEntry.startTime),
              page_url: pageUrl,
            });
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          if (fidEntry.processingStart && fidEntry.startTime) {
            const fid = fidEntry.processingStart - fidEntry.startTime;
            if (debug) {
              console.log(`FID: ${fid.toFixed(2)}ms`);
            }
            if (typeof gtag !== 'undefined') {
              gtag('event', 'timing_complete', {
                name: 'fid',
                value: Math.round(fid),
                page_url: pageUrl,
              });
            }
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const layoutShiftEntry = entry as LayoutShift;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        });
        if (debug) {
          console.log(`CLS: ${clsValue.toFixed(4)}`);
        }
        if (typeof gtag !== 'undefined') {
          gtag('event', 'timing_complete', {
            name: 'cls',
            value: Math.round(clsValue * 1000),
            page_url: pageUrl,
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    };

    // Track user behavior
    const trackUserBehavior = () => {
      if (!trackUserBehavior) return;

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScroll = () => {
        const scrollDepth = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          if (debug && maxScrollDepth % 25 === 0) {
            console.log(`Scroll depth: ${maxScrollDepth}%`);
          }
        }
      };

      // Track time on page
      let timeOnPage = 0;
      const trackTime = () => {
        timeOnPage += 1;
        if (debug && timeOnPage % 30 === 0) {
          console.log(`Time on page: ${timeOnPage}s`);
        }
      };

      // Track interactions
      const trackInteractions = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
          if (debug) {
            console.log(`Interaction: ${target.tagName} clicked`);
          }
          if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
              event_category: 'user_interaction',
              event_label: target.textContent?.trim() || target.tagName,
              page_url: pageUrl,
            });
          }
        }
      };

      window.addEventListener('scroll', trackScroll);
      window.addEventListener('click', trackInteractions);
      const timeInterval = setInterval(trackTime, 1000);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', trackScroll);
        window.removeEventListener('click', trackInteractions);
        clearInterval(timeInterval);
      };
    };

    // Track conversions
    const trackConversions = () => {
      if (!trackConversions) return;

      // Track form submissions
      const trackFormSubmission = (event: Event) => {
        const form = event.target as HTMLFormElement;
        if (debug) {
          console.log(`Form submitted: ${form.action}`);
        }
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            event_category: 'conversion',
            event_label: form.action,
            page_url: pageUrl,
          });
        }
      };

      // Track phone/email clicks
      const trackContactClicks = (event: Event) => {
        const target = event.target as HTMLElement;
        const link = target.closest('a');
        if (link) {
          const href = link.getAttribute('href');
          if (href && (href.startsWith('tel:') || href.startsWith('mailto:'))) {
            if (debug) {
              console.log(`Contact click: ${href}`);
            }
            if (typeof gtag !== 'undefined') {
              gtag('event', 'click', {
                event_category: 'conversion',
                event_label: href,
                page_url: pageUrl,
              });
            }
          }
        }
      };

      document.addEventListener('submit', trackFormSubmission);
      document.addEventListener('click', trackContactClicks);

      // Cleanup
      return () => {
        document.removeEventListener('submit', trackFormSubmission);
        document.removeEventListener('click', trackContactClicks);
      };
    };

    // Initialize tracking
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        trackPageLoad();
        trackCoreWebVitals();
      });
    } else {
      trackPageLoad();
      trackCoreWebVitals();
    }

    const behaviorCleanup = trackUserBehavior();
    const conversionCleanup = trackConversions();

    // Cleanup on unmount
    return () => {
      if (behaviorCleanup) behaviorCleanup();
      if (conversionCleanup) conversionCleanup();
    };
  }, [pageUrl, pageTitle, debug, trackUserBehavior, trackConversions]);

  return null;
}

export { AdvancedSEOMonitor };

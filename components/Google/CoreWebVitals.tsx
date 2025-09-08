'use client';

import { useEffect } from 'react';

interface CoreWebVitalsProps {
  enabled?: boolean;
  debug?: boolean;
}

export function CoreWebVitals({ enabled = true, debug = false }: CoreWebVitalsProps) {
  useEffect(() => {
    if (!enabled) return;

    // Simple Core Web Vitals tracking without external dependencies
    const trackWebVitals = () => {
      // Track LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as PerformanceEntry;
            if (lastEntry && typeof gtag !== 'undefined') {
              gtag('event', 'LCP', {
                event_category: 'Web Vitals',
                value: Math.round(lastEntry.startTime),
                event_label: 'las_vegas_real_estate',
                non_interaction: true,
              });
            }
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.warn('Failed to track LCP:', error);
        }
      }

      // Track FID (First Input Delay)
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (typeof gtag !== 'undefined' && 'processingStart' in entry) {
                const firstInputEntry = entry as PerformanceEventTiming;
                gtag('event', 'FID', {
                  event_category: 'Web Vitals',
                  value: Math.round(firstInputEntry.processingStart - firstInputEntry.startTime),
                  event_label: 'las_vegas_real_estate',
                  non_interaction: true,
                });
              }
            });
          });
          observer.observe({ entryTypes: ['first-input'] });
        } catch (error) {
          console.warn('Failed to track FID:', error);
        }
      }

      if (debug) {
        console.log('Core Web Vitals tracking initialized');
      }
    };

    trackWebVitals();
  }, [enabled, debug]);

  return null;
}

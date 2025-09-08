'use client';

import { useEffect, useRef } from 'react';
import { homebotConfig } from '../../config/homebot-config';

interface HomebotValuationProps {
  className?: string;
  agentId?: string;
}

export function HomebotValuation({
  className = '',
  agentId = homebotConfig.agentId,
}: HomebotValuationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if Homebot script is already loaded
    if (typeof window !== 'undefined' && (window as any).Homebot) {
      initializeHomebot();
      return;
    }

    // Load Homebot script if not already loaded
    const script = document.createElement('script');
    script.src = homebotConfig.widget.scriptUrl;
    script.async = true;
    script.onload = initializeHomebot;
    document.head.appendChild(script);

    function initializeHomebot() {
      if (!containerRef.current) return;

      // Clear any existing content
      containerRef.current.innerHTML = '<div id="homebot_homeowner"></div>';

      // Initialize Homebot widget
      if (typeof (window as any).Homebot === 'function') {
        (window as any).Homebot('#homebot_homeowner', agentId);
      }
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [agentId]);

  return (
    <div
      ref={containerRef}
      className={`homebot-valuation-widget ${className}`}
      style={{
        ...homebotConfig.styling.container,
        ...homebotConfig.styling.widget,
      }}
    />
  );
}

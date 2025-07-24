'use client'

import { useEffect, useRef } from 'react'

interface HomebotValuationProps {
  className?: string
}

export function HomebotValuation({ className = '' }: HomebotValuationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create shadow DOM for widget isolation
    const shadow = containerRef.current.attachShadow({ mode: 'open' })
    
    // Add Homebot widget with exact code provided
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          min-height: 480px;
          z-index: 1000;
          position: relative;
        }
        
        #homebot_homeowner {
          min-height: 480px;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        
        /* Ensure widget takes full height */
        #homebot_homeowner iframe {
          min-height: 480px;
          width: 100%;
          border: none;
        }
      </style>
      <div id="homebot_homeowner"></div>
    `

    // Initialize Homebot widget with exact script provided
    const script = document.createElement('script')
    script.innerHTML = `
      (function (h,b) {
          var w = window, d = document, s = 'script', x, y;
          w['__hb_namespace'] = h;
          w[h] = w[h] || function () {
              (w[h].q=w[h].q||[]).push(arguments)
          };
          y = d.createElement(s);
          x = d.getElementsByTagName(s)[0];
          y.async = 1;
          y.src = b;
          x.parentNode.insertBefore(y,x)
      })('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js');
      Homebot('#homebot_homeowner', '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43')
    `
    
    shadow.appendChild(script)
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`homebot-valuation-widget ${className}`}
      style={{ 
        minHeight: '480px',
        zIndex: 1000,
        position: 'relative'
      }}
    />
  )
} 
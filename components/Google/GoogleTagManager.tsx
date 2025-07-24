'use client'

import { useEffect } from 'react'

interface GoogleTagManagerProps {
  containerId?: string
  enableDebug?: boolean
}

export function GoogleTagManager({
  containerId = 'GTM-XXXXXXX',
  enableDebug = false
}: GoogleTagManagerProps) {
  useEffect(() => {
    if (!containerId || containerId === 'GTM-XXXXXXX') {
      console.warn('Google Tag Manager: Please provide a valid container ID')
      return
    }

    // GTM Head Script
    const gtmHeadScript = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${containerId}');
    `

    // Create and inject GTM head script
    const script = document.createElement('script')
    script.innerHTML = gtmHeadScript
    script.id = 'gtm-head-script'
    document.head.appendChild(script)

    // Debug mode
    if (enableDebug) {
      console.log('Google Tag Manager initialized with container ID:', containerId)
    }

    return () => {
      // Cleanup
      const existingScript = document.getElementById('gtm-head-script')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [containerId, enableDebug])

  return null
}

// GTM Body component (noscript fallback)
export function GoogleTagManagerBody({ containerId = 'GTM-XXXXXXX' }: { containerId?: string }) {
  if (!containerId || containerId === 'GTM-XXXXXXX') {
    return null
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${containerId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
} 
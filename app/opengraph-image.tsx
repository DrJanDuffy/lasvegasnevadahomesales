import { ImageResponse } from 'next/og'
import { seoConfig } from '../config/seo-config'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          🏠 Las Vegas Nevada Home Sales
        </div>
        
        {/* Tagline */}
        <div
          style={{
            fontSize: '24px',
            marginBottom: '40px',
            textAlign: 'center',
            opacity: 0.9,
          }}
        >
          Find Your Dream Home in Las Vegas
        </div>
        
        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            fontSize: '18px',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🏘️</div>
            <div>Summerlin</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🏡</div>
            <div>Henderson</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🌆</div>
            <div>Downtown</div>
          </div>
        </div>
        
        {/* CTA */}
        <div
          style={{
            fontSize: '20px',
            fontWeight: '600',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '12px 24px',
            borderRadius: '8px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          Expert Real Estate Services
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 
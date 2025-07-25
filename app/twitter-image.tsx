import { ImageResponse } from 'next/og'

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
          background: 'linear-gradient(135deg, #1DA1F2 0%, #0A2540 100%)',
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
        {/* Twitter-specific branding */}
        <div
          style={{
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          🏠 @LasVegasHomeSales
        </div>
        
        {/* Main message */}
        <div
          style={{
            fontSize: '28px',
            marginBottom: '30px',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.4',
          }}
        >
          Discover Luxury Homes in Las Vegas
        </div>
        
        {/* Property types */}
        <div
          style={{
            display: 'flex',
            gap: '30px',
            fontSize: '16px',
            marginBottom: '30px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '6px' }}>🏘️</div>
            <div>Luxury Homes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '6px' }}>🏡</div>
            <div>Family Homes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '6px' }}>🌆</div>
            <div>Downtown Condos</div>
          </div>
        </div>
        
        {/* Call to action */}
        <div
          style={{
            fontSize: '18px',
            fontWeight: '600',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            padding: '10px 20px',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          #LasVegasRealEstate #Summerlin #Henderson
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 
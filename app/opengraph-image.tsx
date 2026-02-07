import { ImageResponse } from 'next/og'
import { siteConfig } from '@/content/siteContent'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = `${siteConfig.business.name} - Професионални масажи в Русе`
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '900px',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              marginBottom: '20px',
              background: 'linear-gradient(45deg, #f3f4f6, #e5e7eb)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {siteConfig.business.name}
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: '#d1d5db',
              marginBottom: '30px',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            {siteConfig.business.tagline}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontSize: '20px',
              color: '#9ca3af',
            }}
          >
            <span>📍 {siteConfig.business.address.city}</span>
            <span>📞 {siteConfig.business.phone}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
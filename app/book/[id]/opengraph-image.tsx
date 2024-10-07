import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Book Chapters'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { id: string } }) {
  const bookTitle = params.id.replace(/-/g, ' ')

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          fontWeight: 'bold',
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 24, color: '#666' }}>Chapters of</div>
        <div style={{ textAlign: 'center', padding: '0 32px' }}>{bookTitle}</div>
      </div>
    ),
    {
      ...size,
    }
  )
}
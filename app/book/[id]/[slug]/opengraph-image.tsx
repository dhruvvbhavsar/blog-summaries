import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Book Chapter'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { id: string; slug: string } }) {
  const bookTitle = params.id.replace(/-/g, ' ')
  const chapterTitle = params.slug.split('.')[0].replace(/-/g, ' ')

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          color: 'black',
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 40,
            padding: '0 32px',
          }}
        >
          {bookTitle}
        </div>
        <div
          style={{
            fontSize: 48,
            textAlign: 'center',
            padding: '0 32px',
          }}
        >
          {chapterTitle}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
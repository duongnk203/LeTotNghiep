import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const hasName = searchParams.has('name');
    const name = hasName ? searchParams.get('name').slice(0, 100) : 'Khách Quý';

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '1200px',
            height: '630px',
            backgroundColor: '#FDFBF7',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Top Flap */}
          <svg width="1200" height="630" style={{ position: 'absolute', top: 0, left: 0 }}>
            <polygon points="0,0 1200,0 600,350" fill="#F8F3EA" />
          </svg>
          
          {/* Left Pocket */}
          <svg width="1200" height="630" style={{ position: 'absolute', top: 0, left: 0 }}>
            <polygon points="0,0 600,350 0,630" fill="#E7DFCF" />
          </svg>

          {/* Right Pocket */}
          <svg width="1200" height="630" style={{ position: 'absolute', top: 0, left: 0 }}>
            <polygon points="1200,0 600,350 1200,630" fill="#DFD7C5" />
          </svg>

          {/* Bottom Pocket */}
          <svg width="1200" height="630" style={{ position: 'absolute', top: 0, left: 0 }}>
            <polygon points="0,630 600,350 1200,630" fill="#EFE8DA" />
          </svg>

          {/* Wax Seal */}
          <div
            style={{
              position: 'absolute',
              top: '290px',
              left: '540px', // 600 - 60
              width: '120px',
              height: '120px',
              borderRadius: '60px',
              background: 'radial-gradient(circle at 35% 35%, #9E1B2C, #670815 75%, #42020B)',
              border: '4px solid rgba(248, 211, 135, 0.4)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: '48px' }}>🎓</span>
          </div>

          {/* Name Label */}
          <div
            style={{
              position: 'absolute',
              bottom: '50px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B08A4A',
                fontWeight: 700,
                marginBottom: '10px',
                fontFamily: 'serif',
              }}
            >
              Kính gửi
            </span>
            <span
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: '#3D302A',
                letterSpacing: '0.03em',
                fontFamily: 'serif',
              }}
            >
              {name}
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}

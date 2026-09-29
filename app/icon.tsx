import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#0b192c',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0d9488',
          borderRadius: 6,
          fontWeight: 900,
          fontFamily: 'sans-serif',
        }}
      >
        +
      </div>
    ),
    {
      ...size,
    }
  );
}

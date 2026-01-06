import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Pimdee - Thai Typing Practice';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: '#f0f4f8',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2563eb',
                    fontWeight: 700,
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 40,
                }}>
                    <div style={{
                        width: 150,
                        height: 150,
                        background: '#2563eb',
                        borderRadius: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        marginRight: 40,
                        fontSize: 100,
                    }}>
                        P
                    </div>
                    <span>Pimdee</span>
                </div>
                <div style={{ fontSize: 40, color: '#64748b', marginTop: 20 }}>
                    Thai & English Typing Practice
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}

import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Thai, Roboto_Mono } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pimdee.games'),
  title: {
    default: "Pimdee - ฝึกพิมพ์ไทย เรียนพิมพ์ดีดออนไลน์ Typing Practice",
    template: "%s | Pimdee"
  },

  description: "ฝึกพิมพ์ไทยและอังกฤษแบบออนไลน์ ฟรี! เพิ่มความเร็วในการพิมพ์ของคุณด้วยบทเรียนและเกมฝึกพิมพ์ที่ทันสมัย Minimalist Thai and English typing practice application.",

  keywords: [
    "typing practice", "thai typing", "pimdee", "typing test", "wpm", "touch typing",
    "ฝึกพิมพ์ไทย", "ฝึกพิมพ์ดีด", "พิมพ์ดีดออนไลน์", "ฝึกพิมพ์เร็ว", "เกมฝึกพิมพ์",
    "หัดพิมพ์", "แป้นพิมพ์ภาษาไทย", "เรียนพิมพ์ดีด", "ทดสอบความเร็วในการพิมพ์", "พิมพ์สัมผัส",
    "ฝึกพิมพ์", "เรียนพิมพ์", "typing speed test thai"
  ],

  authors: [{ name: "Pimdee Team", url: "https://pimdee.games" }],

  creator: "Theerawit Waithayawan",

  // ตั้งค่าสำหรับ Bot ของ Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ตั้งค่าเวลาแชร์ลง Facebook / LINE
  openGraph: {
    title: "Pimdee - ฝึกพิมพ์ไทย เรียนพิมพ์ดีดออนไลน์",
    description: "ฝึกพิมพ์ไทยและอังกฤษแบบออนไลน์ ฟรี! มินิมอล ใช้งานง่าย",
    url: 'https://pimdee.games',
    siteName: 'Pimdee',
    locale: 'th_TH',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pimdee Typing Practice Preview',
      },
    ],
  },

  // ตั้งค่าเวลาแชร์ลง Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: "Pimdee - ฝึกพิมพ์ไทย เรียนพิมพ์ดีดออนไลน์",
    description: "ฝึกพิมพ์ไทยและอังกฤษแบบออนไลน์ ฟรี! มินิมอล ใช้งานง่าย",
    images: ['/og-image.png'],
    creator: '@theerawit_waithayawan',
  },

  // ไอคอนเว็บ (Favicon)
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${notoSans.variable} ${notoSansThai.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

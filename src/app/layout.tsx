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
  title: "Pimdee - ฝึกพิมพ์ไทย เรียนพิมพ์ดีดออนไลน์ Typing Practice",
  description: "ฝึกพิมพ์ไทยและอังกฤษแบบออนไลน์ ฟรี! เพิ่มความเร็วในการพิมพ์ของคุณด้วยบทเรียนและเกมฝึกพิมพ์ที่ทันสมัย Minimalist Thai and English typing practice application.",
  keywords: [
    "typing practice", "thai typing", "pimdee", "typing test", "wpm", "touch typing",
    "ฝึกพิมพ์ไทย", "ฝึกพิมพ์ดีด", "พิมพ์ดีดออนไลน์", "ฝึกพิมพ์เร็ว", "เกมฝึกพิมพ์",
    "หัดพิมพ์", "แป้นพิมพ์ภาษาไทย", "เรียนพิมพ์ดีด", "ทดสอบความเร็วในการพิมพ์", "พิมพ์สัมผัส",
    "ฝึกพิมพ์", "เรียนพิมพ์"
  ],
  authors: [{ name: "Pimdee Team" }],
  openGraph: {
    title: "Pimdee - ฝึกพิมพ์ไทย เรียนพิมพ์ดีดออนไลน์",
    description: "ฝึกพิมพ์ไทยและอังกฤษแบบออนไลน์ ฟรี! เพิ่มความเร็วในการพิมพ์ของคุณด้วยบทเรียนและเกมฝึกพิมพ์ที่ทันสมัย",
    type: "website",
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

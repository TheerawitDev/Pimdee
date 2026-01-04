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
  title: "Pimdee - Thai Typing Practice",
  description: "Minimalist Thai and English typing practice application.",
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

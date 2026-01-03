import type { Metadata } from "next";
import { Noto_Sans_Thai, Roboto_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${notoSansThai.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://car-repair-calc.vercel.app";
const SITE_NAME = "車 修理vs買い替え診断";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "車 修理vs買い替え診断ツール｜無料・登録不要",
    template: "%s｜車 修理vs買い替え診断",
  },
  description:
    "年式・走行距離・修理見積もり額を入力するだけで、車を修理して乗り続けるべきか買い替えるべきかの目安が分かる無料診断ツール。",
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "53zGJ3S5Tn5TXdBLxYRwgOhvQoasQyENbQ1NIlsoTCk",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "車 修理vs買い替え診断ツール｜無料・登録不要",
    description:
      "年式・走行距離・修理見積もり額を入力するだけで、修理を続けるべきか買い替えるべきかの目安が分かります。",
  },
  twitter: {
    card: "summary",
    title: "車 修理vs買い替え診断ツール｜無料・登録不要",
    description:
      "年式・走行距離・修理見積もり額を入力するだけで、修理を続けるべきか買い替えるべきかの目安が分かります。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

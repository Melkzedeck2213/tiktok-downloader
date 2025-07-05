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

export const metadata = {
  title: "Zippy - TikTok Video Downloader (No Watermark)",
  description:
    "Download TikTok videos for free with Zippy. No watermark. Fast, simple, and 100% free.",
  keywords: [
    "TikTok Downloader",
    "No Watermark",
    "Zippy",
    "Download TikTok Videos",
    "Free TikTok Download",
  ],
  openGraph: {
    title: "Zippy - TikTok Video Downloader",
    description:
      "Download TikTok videos with no watermark. Instant, free, and clean.",
    url: "https://your-vercel-domain.vercel.app", // Replace this
    siteName: "Zippy",
    icons: {
      icon: "/zippy.ico",
    },
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
        <head>
          <link rel="icon" href="/zippy.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="FIXORO" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Zippy" />
          <meta name="twitter:card" content="summary_large_image" />
        </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

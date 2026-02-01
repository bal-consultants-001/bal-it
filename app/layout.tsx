import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bal-it.co.uk"), // change if needed

  title: {
    default: "BAL-IT | Home & Business IT Support in South Wales",
    template: "%s | BAL-IT IT Support",
  },

  description:
    "BAL-IT provides friendly, professional in-home and remote IT support for laptops, PCs, tablets, Android phones and selected Apple devices across South Wales.",

  keywords: [
    "Home IT Support",
    "Business IT Support",
    "PC Repair",
    "Laptop Support",
    "WiFi Help",
    "Virus Removal",
    "Remote IT Support",
    "South Wales IT Support",
    "BAL-IT",
  ],

  authors: [{ name: "BAL-IT" }],
  creator: "BAL-IT",
  publisher: "BAL-IT",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "BAL-IT | Home & Business IT Support",
    description:
      "Reliable home and business IT support in South Wales. Remote and in-person help for all your technology needs.",
    url: "https://www.bal-it.co.uk",
    siteName: "BAL-IT",
    images: [
      {
        url: "/images/og-image.jpg", // put an image in /public/images
        width: 1200,
        height: 630,
        alt: "BAL-IT Home and Business IT Support",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BAL-IT | Home & Business IT Support",
    description:
      "Friendly, professional IT support for homes and businesses across South Wales.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}

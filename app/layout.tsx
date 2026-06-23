import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tritonworldseries.com"),
  title: {
    default: "TRITON World Series | Global Triathlon Platform",
    template: "%s | TRITON World Series"
  },
  description: "TRITON is a global triathlon series built around participation, progression, and international competition. Discover races, formats, rankings, and standard distances.",
  keywords: ["Triton World Series", "triathlon", "swim bike run", "triathlon global ranking", "triathlon races", "Triton 1", "Triton 3"],
  authors: [{ name: "TRITON World Series Team" }],
  openGraph: {
    title: "TRITON World Series | Global Triathlon Platform",
    description: "Discover the new global triathlon series platform design for progression, performance, and reward.",
    url: "https://tritonworldseries.com",
    siteName: "TRITON World Series",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TRITON World Series",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRITON World Series | Global Triathlon Platform",
    description: "The global standard for multi-distance triathlon races and progression systems.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-B370GDSYNG" />
    </html>
  );
}

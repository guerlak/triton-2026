import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { DictionaryProvider } from "./components/DictionaryProvider";
import { getDictionary } from "./lib/getDictionary";
import Footer from "./components/Footer";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Triton World Series",
  description: "Triton World Series 2026",
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
    </html>
  );
}

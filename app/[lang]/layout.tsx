import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { DictionaryProvider } from "../components/DictionaryProvider";
import { getDictionary } from "../lib/getDictionary";
import Footer from "../components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Triton World Series",
  description: "Triton World Series 2026",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${montserrat.variable} antialiased`}>
        <DictionaryProvider dict={dict} lang={lang}>
          {children}
          <Footer />
        </DictionaryProvider>
      </body>
    </html>
  );
}

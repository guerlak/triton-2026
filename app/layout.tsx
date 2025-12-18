import type { Metadata } from "next";
import { Montserrat, Exo_2 } from "next/font/google";
import "./globals.css";

const geistSans = Exo_2({
  subsets: ["latin"],
  weight: ["400", "700"], // Escolha os pesos que vai usar
  variable: "--font-geist-sans", // Opcional: define uma variável CSS
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Escolha os pesos que vai usar
  variable: '--font-montserrat', // Opcional: define uma variável CSS
});

export const metadata: Metadata = {
  title: "Triton World Series",
  description: "Triton World Series 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

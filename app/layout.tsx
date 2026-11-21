import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zion AG Church | Kamarajapuram, Chennai",
  description:
    "Zion AG Church in Kamarajapuram, Sembakkam, Tambaram. Join us for Sunday services, fellowships and prayer, or watch our services online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${bebas.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
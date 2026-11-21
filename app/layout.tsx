import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#000000",
};
import { Bebas_Neue, Montserrat } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import SwipeBack from "@/components/SwipeBack";
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
    <html lang="en" className={`${montserrat.variable} ${bebas.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        <ScrollProgress />
        <SwipeBack />
        {children}
      </body>
    </html>
  );
}
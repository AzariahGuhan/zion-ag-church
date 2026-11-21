import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "About | Zion AG Church",
  description: "About Zion AG Church in Kamarajapuram, and our service times.",
};

export default function AboutPage() {
  return (
    <main className="bg-neutral-950 text-white">
      <Navbar />
      <div className="pt-16">
        <About />
        <Services />
      </div>
      <Contact />
    </main>
  );
}
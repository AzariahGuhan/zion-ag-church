import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Zion AG Church",
  description: "Address, phone and email for Zion AG Church, Kamarajapuram.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
    </main>
  );
}
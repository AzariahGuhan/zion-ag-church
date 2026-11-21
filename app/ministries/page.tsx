import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Ministries from "@/components/Ministries";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Ministries | Zion AG Church",
  description: "Sunday school, youth, women's and men's fellowships at Zion AG Church.",
};

export default function MinistriesPage() {
  return (
    <main className="bg-neutral-950 text-white">
      <Navbar />
      <div className="pt-16">
        <Ministries />
      </div>
      <Contact />
    </main>
  );
}
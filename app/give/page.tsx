import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Give from "@/components/Give";

export const metadata: Metadata = {
  title: "Give | Zion AG Church",
  description: "Support the work of Zion AG Church, Kamarajapuram.",
};

export default function GivePage() {
  return (
    <main className="bg-neutral-950 text-white">
      <Navbar />
      <div className="pt-12">
        <Give />
      </div>
    </main>
  );
}
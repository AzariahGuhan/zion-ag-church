import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Prayer from "@/components/Prayer";

export const metadata: Metadata = {
  title: "Prayer Request | Zion AG Church",
  description: "Share your prayer request with the Zion AG Church family.",
};

export default function PrayerPage() {
  return (
    <main className="bg-neutral-950 text-white">
      <Navbar />
      <div className="pt-16">
        <Prayer />
      </div>
    </main>
  );
}
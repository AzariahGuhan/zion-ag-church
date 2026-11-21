import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery | Zion AG Church",
  description: "Photos from the events and celebrations at Zion AG Church, Kamarajapuram.",
};

export default function GalleryPage() {
  return (
    <main className="bg-neutral-950 text-white">
      <Navbar />
      <div className="pt-12">
        <Gallery />
      </div>
    </main>
  );
}
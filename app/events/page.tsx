import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";

export const metadata: Metadata = {
  title: "Events | Zion AG Church",
  description: "Upcoming events and announcements at Zion AG Church.",
};

export default function EventsPage() {
  return (
    <main className="bg-neutral-950 text-white">
      <Navbar />
      <div className="pt-16">
        <Events />
      </div>
    </main>
  );
}
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Radio } from "lucide-react";

export const metadata: Metadata = {
  title: "Watch Live | Zion AG Church",
  description:
    "Watch the Zion AG Church service live from Kamarajapuram, Chennai.",
};

const CHANNEL_ID = "UCgsM_ZziYzUbGXCmRBnypOA";

// OPTIONAL: for a specific stream, paste its video ID here, e.g. "AbCdEfGhIjK".
// Leave empty to automatically show whichever stream the channel is live with.
const LIVE_VIDEO_ID = "";

const embedSrc = LIVE_VIDEO_ID
  ? `https://www.youtube.com/embed/${LIVE_VIDEO_ID}?rel=0`
  : `https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&rel=0`;

const times = [
  { day: "Sunday", name: "First Service", time: "6:00 AM" },
  { day: "Sunday", name: "Second Service", time: "9:00 AM" },
  { day: "Sunday", name: "Evening Bible Study", time: "6:00 PM" },
  { day: "Friday", name: "Fasting Service", time: "10:00 AM" },
];

export default function LivePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/80 hover:text-white"
          >
            <ArrowLeft size={18} /> Back to site
          </Link>
          <span className="text-lg font-bold tracking-[0.3em]">ZION AG</span>
        </div>
      </header>

      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.5em] text-red-400">
              <Radio size={16} /> Live Stream
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Watch Live</h1>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Join our service online from wherever you are. The stream starts
              here automatically when we go live.
            </p>
          </div>

          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={embedSrc}
              title="Zion AG Church live stream"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>

          <p className="mt-4 text-center text-sm text-white/60">
            Not live right now? The player will show as unavailable. Watch our
            recent services below, or come back at service time.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.youtube.com/@zionagchennaiofficial/live"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-white/80"
            >
              Open on YouTube
            </a>
            <Link
              href="/#sermons"
              className="rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
            >
              Recent Services
            </Link>
          </div>

          <div className="mt-16">
            <h2 className="text-center text-2xl font-semibold">Service Times</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {times.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
                >
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    {t.day}
                  </p>
                  <p className="mt-1 font-semibold">{t.name}</p>
                  <p className="mt-1 text-white/80">{t.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
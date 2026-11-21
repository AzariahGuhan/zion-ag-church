import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import VideoCard from "@/components/VideoCard";
import { featured, getLatestVideos, UPLOADS_PLAYLIST } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Sermons & Services | Zion AG Church",
  description: "Watch recent services and messages from Zion AG Church, Kamarajapuram.",
};

export default async function SermonsPage() {
  const latest = (await getLatestVideos()).slice(0, 6);

  return (
    <main className="bg-neutral-950 text-white">
      <Navbar />

      <section className="px-6 pb-20 pt-40">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
              Watch Online
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Sermons &amp; Services</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75">
              Can&apos;t make it in person? Watch our services and messages anytime.
            </p>
          </div>

          <h2 className="mt-16 text-2xl font-semibold">Latest Videos</h2>
          {latest.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latest.map((v) => (
                <VideoCard key={v.id} id={v.id} title={v.title} />
              ))}
            </div>
          ) : (
            <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/videoseries?list=${UPLOADS_PLAYLIST}`}
                title="Latest videos from Zion AG Church"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <h2 className="mt-16 text-2xl font-semibold">Featured Messages</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((v) => (
              <VideoCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="https://www.youtube.com/@zionagchennaiofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-white/80"
            >
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
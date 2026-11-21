import Link from "next/link";
import VideoCard from "@/components/VideoCard";
import { getLatestVideos } from "@/lib/videos";

export default async function SermonsPreview() {
  const latest = (await getLatestVideos()).slice(0, 3);

  return (
    <section id="sermons" className="bg-neutral-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            Watch Online
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Latest Services</h2>
        </div>

        {latest.length > 0 && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((v) => (
              <VideoCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/sermons"
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-white/80"
          >
            All Sermons &amp; Services
          </Link>
        </div>
      </div>
    </section>
  );
}
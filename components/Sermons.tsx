import { cacheLife } from "next/cache";
import VideoCard from "@/components/VideoCard";

const CHANNEL_ID = "UCgsM_ZziYzUbGXCmRBnypOA";
const UPLOADS_PLAYLIST = "UU" + CHANNEL_ID.slice(2);

// Featured videos. Change the titles to the real video titles.
const featured: { id: string; title: string }[] = [
  { id: "SkDo3cNmnEE", title: "Featured Message 1" },
  { id: "sH5lagxGT7g", title: "Featured Message 2" },
  { id: "H5Q17LOcv9Q", title: "Featured Message 3" },
  { id: "dTeCM_eII-Q", title: "Featured Message 4" },
  { id: "zMxo1uA1sbk", title: "Featured Service (Live) 1" },
  { id: "YPH3RXPpnIE", title: "Featured Service (Live) 2" },
];

function decode(text: string) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function getLatestVideos(): Promise<{ id: string; title: string }[]> {
  "use cache";
  cacheLife("hours");

  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
    );
    if (!res.ok) return [];
    const xml = await res.text();

    return xml
      .split("<entry>")
      .slice(1, 4)
      .map((entry) => {
        const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
        const title = entry.match(/<title>([^<]+)<\/title>/)?.[1];
        return id && title ? { id, title: decode(title) } : null;
      })
      .filter((v): v is { id: string; title: string } => v !== null);
  } catch {
    return [];
  }
}

export default async function Sermons() {
  const latest = await getLatestVideos();

  return (
    <section id="sermons" className="bg-neutral-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            Watch Online
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Sermons &amp; Services</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75">
            Can&apos;t make it in person? Watch our services and messages anytime.
          </p>
        </div>

        {/* LATEST VIDEOS (top) */}
        <h3 className="mt-16 text-2xl font-semibold">Latest Videos</h3>
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

        {/* FEATURED VIDEOS (below) */}
        {featured.length > 0 && (
          <>
            <h3 className="mt-16 text-2xl font-semibold">Featured Messages</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((v) => (
                <VideoCard key={v.id} id={v.id} title={v.title} />
              ))}
            </div>
          </>
        )}

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
  );
}
import Link from "next/link";
import { albums } from "@/lib/gallery";

export default function GalleryPreview() {
  const album = albums.find((a) => a.photos.length > 0);
  if (!album) return null;
  const photos = album.photos.slice(0, 3);

  return (
    <section id="gallery-preview" className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            Moments
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Gallery</h2>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-6">
          {photos.map((p) => (
            <div key={p.src} className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-block rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
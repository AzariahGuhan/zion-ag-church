"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Photo = { src: string; alt: string };
type Album = { id: string; name: string; photos: Photo[] };

// Add each photo's file name to its album. Albums with no photos stay hidden.
const albums: Album[] = [
  {
    id: "christmas-2026",
    name: "Christmas 2026",
    photos: [
      { src: "/gallery/christmas-2026/photo1.jpg", alt: "Christmas 2026 celebration" },
      { src: "/gallery/christmas-2026/photo2.jpg", alt: "Christmas 2026 celebration" },
      { src: "/gallery/christmas-2026/photo3.jpg", alt: "Christmas 2026 celebration" },
      { src: "/gallery/christmas-2026/photo4.jpg", alt: "Christmas 2026 celebration" },
      { src: "/gallery/christmas-2026/photo5.jpg", alt: "Christmas 2026 celebration" },
      { src: "/gallery/christmas-2026/photo6.jpg", alt: "Christmas 2026 celebration" },
    ],
  },
  {
    id: "new-year",
    name: "New Year",
    photos: [
      // { src: "/gallery/new-year/photo1.jpg", alt: "New Year service" },
    ],
  },
  {
    id: "annual-convention",
    name: "Annual Convention",
    photos: [
      // { src: "/gallery/annual-convention/photo1.jpg", alt: "Annual Convention" },
    ],
  },
  {
    id: "holy-spirit-conference",
    name: "Holy Spirit Conference",
    photos: [
      // { src: "/gallery/holy-spirit-conference/photo1.jpg", alt: "Holy Spirit Conference" },
    ],
  },
];

export default function Gallery() {
  const filled = albums.filter((a) => a.photos.length > 0);
  const [activeId, setActiveId] = useState(filled[0]?.id ?? "");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (filled.length === 0) return null;

  const active = filled.find((a) => a.id === activeId) ?? filled[0];
  const photos = active.photos;

  const prev = () =>
    setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));

  return (
    <section id="gallery" className="bg-neutral-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            Moments
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Gallery</h2>
        </div>

        {/* Album tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filled.map((a) => (
            <button
              key={a.id}
              onClick={() => {
                setActiveId(a.id);
                setOpenIndex(null);
              }}
              className={`rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-widest transition ${
                a.id === active.id
                  ? "bg-white text-black"
                  : "border border-white/30 text-white/80 hover:bg-white/10"
              }`}
            >
              {a.name}
              <span className="ml-2 opacity-60">{a.photos.length}</span>
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setOpenIndex(i)}
              className="group overflow-hidden rounded-2xl"
              aria-label={`Open photo: ${p.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Full-size viewer */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute right-5 top-5 text-white"
          >
            <X size={32} />
          </button>
          <button
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 text-white sm:left-8"
          >
            <ChevronLeft size={40} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[openIndex].src}
            alt={photos[openIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
          <button
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 text-white sm:right-8"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
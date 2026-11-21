// Add photos to /public/gallery and list them here.
const photos: { src: string; alt: string }[] = [
  // { src: "/gallery/worship.jpg", alt: "Sunday worship" },
  // { src: "/gallery/youth.jpg", alt: "Youth fellowship" },
];

export default function Gallery() {
  if (photos.length === 0) return null;

  return (
    <section id="gallery" className="bg-neutral-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            Moments
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Gallery</h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((p) => (
            <div key={p.src} className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export type Photo = { src: string; alt: string };
export type Album = { id: string; name: string; photos: Photo[] };

// Add each photo's file name to its album. Albums with no photos stay hidden.
export const albums: Album[] = [
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
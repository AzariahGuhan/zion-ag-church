"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoCard({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative aspect-video">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            className="group absolute inset-0 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black">
                <Play size={28} fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="p-4 font-semibold">{title}</p>
    </div>
  );
}
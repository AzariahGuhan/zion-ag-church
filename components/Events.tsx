"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, MapPin, Maximize2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Lightbox from "@/components/Lightbox";

type EventItem = {
  title: string;
  poster: string;
  date?: string;
  time?: string;
  place?: string;
  text?: string;
};

// SAMPLE posters. Add date, time and place for each event, and delete
// events that have already passed.
const events: EventItem[] = [
  {
    title: "December Promise Service",
    poster: "/events/december-promise-service.jpg",
    // date: "",
    // time: "",
    // place: "",
  },
  {
    title: "Evening Service",
    poster: "/events/evening-service.jpg",
  },
  {
    title: "New Year Service",
    poster: "/events/new-year-service.jpg",
  },
  {
    title: "September Service",
    poster: "/events/september-service.jpg",
  },
];

export default function Events() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(
    null
  );

  return (
    <section id="events" className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal y={20}>
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
              <CalendarDays size={14} />
              What&apos;s Happening
            </p>
          </Reveal>
          <RevealText text="Upcoming" accent="Events" />
        </div>

        {events.length > 0 ? (
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={(i % 4) * 0.1} className="h-full">
                <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <button
                    type="button"
                    onClick={() =>
                      setActive({ src: e.poster, alt: `${e.title} poster` })
                    }
                    aria-label={`Open ${e.title} poster full size`}
                    className="group relative block w-full cursor-zoom-in overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={e.poster}
                      alt={`${e.title} poster`}
                      loading="lazy"
                      className="w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                      <Maximize2 size={16} />
                    </span>
                  </button>
                  <div className="p-5">
                    <h3 className="text-3xl">{e.title}</h3>
                    {e.date && (
                      <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
                        <CalendarDays size={16} className="shrink-0 text-white/50" />
                        {e.date}
                      </p>
                    )}
                    {e.time && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
                        <Clock size={16} className="shrink-0 text-white/50" />
                        {e.time}
                      </p>
                    )}
                    {e.place && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
                        <MapPin size={16} className="shrink-0 text-white/50" />
                        {e.place}
                      </p>
                    )}
                    {e.text && (
                      <p className="mt-3 text-sm leading-6 text-white/70">
                        {e.text}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mx-auto mt-10 max-w-xl text-center text-lg leading-8 text-white/70">
            No upcoming events are listed right now. Follow us on Facebook and
            Instagram for the latest announcements.
          </p>
        )}
      </div>

      <AnimatePresence>
        {active && (
          <Lightbox
            src={active.src}
            alt={active.alt}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
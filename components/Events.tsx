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
  return (
    <section id="events" className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            What&apos;s Happening
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Upcoming Events</h2>
        </div>

        {events.length > 0 ? (
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((e) => (
              <div
                key={e.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={e.poster}
                  alt={`${e.title} poster`}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{e.title}</h3>
                  {(e.date || e.time) && (
                    <p className="mt-2 text-sm uppercase tracking-widest text-white/60">
                      {[e.date, e.time].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  {e.place && <p className="mt-2 text-white/80">{e.place}</p>}
                  {e.text && (
                    <p className="mt-2 text-sm leading-6 text-white/70">{e.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mx-auto mt-10 max-w-xl text-center text-lg leading-8 text-white/70">
            No upcoming events are listed right now. Follow us on Facebook and
            Instagram for the latest announcements.
          </p>
        )}
      </div>
    </section>
  );
}
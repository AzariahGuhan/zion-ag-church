// Add upcoming events here. Delete old ones when they pass.
const events: { title: string; date: string; time: string; text: string }[] = [
  // {
  //   title: "Christmas Service",
  //   date: "Thursday, 25 December 2026",
  //   time: "9:00 AM",
  //   text: "Join us as we celebrate the birth of Jesus.",
  // },
];

export default function Events() {
  return (
    <section id="events" className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            What&apos;s Happening
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Events &amp; Announcements</h2>
        </div>

        {events.length > 0 ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {events.map((e) => (
              <div
                key={e.title + e.date}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <p className="text-sm uppercase tracking-widest text-white/60">
                  {e.date} · {e.time}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{e.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{e.text}</p>
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
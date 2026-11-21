import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Plan Your Visit",
    text: "Service times and how to find us.",
    href: "/about#services",
  },
  {
    title: "Ministries",
    text: "Sunday school, youth, women and men.",
    href: "/ministries",
  },
  {
    title: "Events",
    text: "What is coming up at Zion AG.",
    href: "/events",
  },
  {
    title: "Need Prayer?",
    text: "Share your request. We will pray with you.",
    href: "/prayer",
  },
];

export default function HomeCards() {
  return (
    <section className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            Find Your Place
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            There is a place for you here
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-[#d9b26f]/60"
            >
              <ArrowUpRight
                size={28}
                className="self-end text-white/60 transition group-hover:text-[#d9b26f]"
              />
              <div>
                <h3 className="text-3xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70">{c.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";

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
          <Reveal y={20}>
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
              Find Your Place
            </p>
          </Reveal>
          <RevealText text="There is a place" accent="for you here" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.href} delay={(i % 2) * 0.12} className="h-full">
              <Link
                href={c.href}
                className="group flex h-full min-h-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <ArrowUpRight
                  size={28}
                  className="self-end text-white/60 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
                <div>
                  <h3 className="text-4xl">{c.title}</h3>
                  <p className="mt-2 text-white/70">{c.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "About Us | Zion AG Church",
  description:
    "The story, vision and senior pastor of Zion AG Church, Kamarajapuram, Chennai.",
};

/* ==================================================================
   EDIT THE TEXT BELOW. Replace everything in [square brackets] with
   the real facts, then delete the brackets.
   Photos go in /public/about/history/ (see the steps I gave you).
=================================================================== */

// Key numbers shown at the top of the history. Delete any you don't want.
const stats = [
  { value: "[Year]", label: "Year founded" },
  { value: "[Number]", label: "People at the first service" },
  { value: "[Number]", label: "Worshippers today" },
];

const historyIntro =
  "Every church begins with a small group of people who believe God has called them together. This is how Zion AG Church, Kamarajapuram began, and how the Lord has built it, step by step.";

type Milestone = {
  year: string;
  title: string;
  text: string;
  image?: string; // e.g. "/about/history/beginning.jpg"
  caption?: string;
};

const milestones: Milestone[] = [
  {
    year: "[Year]",
    title: "The Beginning",
    text: "[Tell how the church started. Who gathered first? Where did they meet (a home, a rented hall, a shed)? How many people were there at the first service, and what led them to start?]",
    image: "",
    caption: "[Caption, e.g. the first prayer meeting]",
  },
  {
    year: "[Year]",
    title: "Prayer and Faith",
    text: "[Describe the early years: the first regular services, the prayers that were prayed, the challenges the small congregation faced, and how God answered.]",
    image: "",
    caption: "[Caption]",
  },
  {
    year: "[Year]",
    title: "Building the Church",
    text: "[Tell how the church building came to be: how the land was found, when the foundation was laid, who gave and who worked, how long it took, and the day it was dedicated.]",
    image: "",
    caption: "[Caption, e.g. the foundation being laid]",
  },
  {
    year: "[Year]",
    title: "A Growing Family",
    text: "[Describe the growth: more families joining, new services added, and the ministries that began, such as Sunday School, Youth Fellowship, Women's Fellowship and Men's Fellowship.]",
    image: "",
    caption: "[Caption]",
  },
  {
    year: "Today",
    title: "Zion AG Church Today",
    text: "[Describe the church today: how many gather, what services and ministries run each week, and how the church serves Kamarajapuram and Sembakkam.]",
    image: "",
    caption: "[Caption]",
  },
];

const vision = {
  statement: "[Write the church's vision statement in one or two sentences.]",
  points: [
    { title: "[Point 1]", text: "[A short line explaining it.]" },
    { title: "[Point 2]", text: "[A short line explaining it.]" },
    { title: "[Point 3]", text: "[A short line explaining it.]" },
  ],
};

const pastor = {
  name: "Rev. B. Sudhakaran Samuel",
  role: "Senior Pastor",
  photo: "/about/pastor.jpg",
  bio: [
    "Rev. B. Sudhakaran Samuel is the Senior Pastor of Zion AG Church, Kamarajapuram. He shepherds the congregation with a heart for prayer, the teaching of God's Word, and the care of every family in the church.",
    "Together with Dr. Ben Samuel, he leads the church in worship, teaching and outreach, and walks alongside people in every season of life.",
    "[Add his calling, years in ministry, family and anything else the church would like to share.]",
  ],
  message:
    "[A short personal message from the Senior Pastor to everyone visiting the website.]",
};

/* ------------------------------------------------------------------ */

const isDev = process.env.NODE_ENV !== "production";
const label = "mb-4 text-xs uppercase tracking-[0.5em] text-white/60";
const heading = "font-display text-4xl uppercase sm:text-6xl";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Page title */}
      <section className="px-6 pb-16 pt-40 text-center">
        <p className={label}>About Us</p>
        <h1 className={heading}>Zion AG Church</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70">
          Kamarajapuram, Sembakkam, Tambaram, Chennai
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          {[
            ["Our Story", "#history"],
            ["Our Vision", "#vision"],
            ["Senior Pastor", "#pastor"],
          ].map(([text, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-white/20 px-5 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {text}
            </a>
          ))}
        </nav>
      </section>

      {/* 1. History */}
      <section id="history" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className={label}>Where We Come From</p>
            <h2 className={heading}>Our Story</h2>
            <p className="mt-8 text-lg leading-8 text-white/75">{historyIntro}</p>
          </div>

          {stats.length > 0 && (
            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <p className="font-display text-5xl">{s.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-20 space-y-20">
            {milestones.map((m, i) => (
              <div
                key={m.title}
                className="grid items-center gap-10 md:grid-cols-2"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  {m.image ? (
                    <figure>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.image}
                        alt={m.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full rounded-2xl object-cover"
                      />
                      {m.caption && (
                        <figcaption className="mt-3 text-sm text-white/50">
                          {m.caption}
                        </figcaption>
                      )}
                    </figure>
                  ) : (
                    isDev && (
                      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-dashed border-white/20 text-sm text-white/40">
                        Add photo for &ldquo;{m.title}&rdquo; (visible only on your computer)
                      </div>
                    )
                  )}
                </div>

                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-sm uppercase tracking-widest text-white/50">
                    {m.year}
                  </p>
                  <h3 className="font-display mt-2 text-3xl uppercase sm:text-4xl">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-white/75">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Vision */}
      <section id="vision" className="scroll-mt-24 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className={label}>Where We Are Going</p>
            <h2 className={heading}>Our Vision</h2>
            <p className="mt-8 text-2xl leading-10 text-white/90">
              {vision.statement}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {vision.points.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Senior Pastor */}
      <section id="pastor" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="mx-auto w-full max-w-sm">
            {pastor.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={pastor.photo}
                alt={pastor.name}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <span className="font-display text-7xl text-white/40">BSS</span>
              </div>
            )}
          </div>

          <div>
            <p className={label}>{pastor.role}</p>
            <h2 className={heading}>{pastor.name}</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-white/75">
              {pastor.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {pastor.message && (
              <blockquote className="mt-8 border-l-2 border-white/30 pl-5 text-xl italic leading-8 text-white/85">
                {pastor.message}
              </blockquote>
            )}
          </div>
        </div>
      </section>

      <Services />
    </main>
  );
}
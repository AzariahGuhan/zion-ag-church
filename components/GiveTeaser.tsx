import Link from "next/link";

export default function GiveTeaser() {
  return (
    <section id="give-teaser" className="bg-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-white/60">
          Generosity
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Support the Work</h2>
        <p className="mt-4 leading-7 text-white/70">
          Your giving supports the church and its ministries.
        </p>
        <Link
          href="/give"
          className="mt-8 inline-block rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
        >
          Give
        </Link>
      </div>
    </section>
  );
}
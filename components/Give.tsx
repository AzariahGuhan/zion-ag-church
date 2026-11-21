"use client";

import { motion } from "framer-motion";

export default function Give() {
  return (
    <section id="give" className="bg-black px-6 py-28 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
          Generosity
        </p>
        <h2 className="text-4xl font-bold sm:text-5xl">Give</h2>
        <p className="mt-8 text-lg leading-8 text-white/75">
          Your giving supports the work of the church and its ministries. To
          give or to ask about giving options, please contact the church office.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
        >
          Contact Us to Give
        </a>
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-black px-6 py-28 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
          About Us
        </p>
        <h2 className="text-4xl font-bold sm:text-5xl">
          A family of faith in Kamarajapuram
        </h2>
        <p className="mt-8 text-lg leading-8 text-white/75">
          {/* DRAFT TEXT: replace with the church's own words */}
          Zion AG Church is a welcoming community in Sembakkam, Tambaram,
          where people come together to worship, learn God&apos;s Word and
          grow in faith. Whoever you are, there is a place for you here.
        </p>
        <p className="mt-10 text-sm uppercase tracking-widest text-white/60">
          Led by Rev. B. Sudhakaran Samuel &amp; Dr. Ben Samuel
        </p>
      </motion.div>
    </section>
  );
}
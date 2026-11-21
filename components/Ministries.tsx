"use client";

import { motion } from "framer-motion";

const ministries = [
  {
    name: "Sunday School",
    text: "Teaching children the Word of God in a caring, joyful environment.",
  },
  {
    name: "Youth Fellowship",
    text: "A place for young people to grow in faith, friendship and purpose.",
  },
  {
    name: "Women's Fellowship",
    text: "Women gathering to pray, encourage one another and serve together.",
  },
  {
    name: "Men's Fellowship",
    text: "Men meeting on Thursdays to study the Word and strengthen one another.",
  },
];

export default function Ministries() {
  return (
    <section id="ministries" className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            Get Involved
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Our Ministries</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {ministries.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-semibold">{m.name}</h3>
              <p className="mt-3 leading-7 text-white/70">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const letters = "ZION AG CHURCH".split("");

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-black"
    >
      {/* Background video: /public/media/hero.mp4 */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      <div className="relative z-10 px-4 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4 text-xs uppercase tracking-[0.5em] text-white/70 sm:text-sm"
        >
          Welcome to
        </motion.p>

        <h1 className="flex justify-center whitespace-nowrap text-[8.5vw] font-extrabold sm:text-6xl md:text-7xl lg:text-8xl">
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + i * 0.07,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mx-auto mt-6 max-w-xl text-base text-white/80 sm:text-lg"
        >
          A place to belong, believe and become.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#services"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-white/80"
          >
            Plan Your Visit
          </a>
          <a
            href="#sermons"
            className="rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
          >
            Watch Online
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 z-10 text-white/70"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
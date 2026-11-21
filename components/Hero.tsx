"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden"
    >
      {/* Background video: /public/media/hero.mp4 */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#060606]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(80,130,80,0.18), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-4 text-center text-white"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.5em]">Welcome home</p>

        <h1 className="whitespace-nowrap text-[15vw] sm:text-9xl md:text-[11rem]">
          Zion AG <span className="accent">Church</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base text-white/70 sm:text-lg">
          A place to belong, believe and become.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/about#services"
            className="inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-black transition hover:bg-white/85"
          >
            Plan Your Visit
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
              <ArrowRight size={16} />
            </span>
          </a>
          <a
            href="/live"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Watch Live
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#sermons"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 z-10 text-white/60"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
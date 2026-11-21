"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import RevealText from "@/components/RevealText";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden"
    >
      {/* Background video: /public/media/hero.mp4 */}
      <motion.div
  style={{ y: videoY, scale: videoScale, willChange: "transform" }}
  className="absolute inset-0 transform-gpu"
>
        <video
          className="h-full w-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#060606]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(80,130,80,0.18), transparent 70%)",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 px-4 text-center text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mb-6 text-xs uppercase tracking-[0.5em]"
        >
          Welcome home
        </motion.p>

        <RevealText
          as="h1"
          text="Zion AG"
          accent="Church"
          delay={0.25}
          className="whitespace-nowrap text-[15vw] sm:text-9xl md:text-[11rem]"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="mx-auto mt-6 max-w-md text-base text-white/70 sm:text-lg"
        >
          A place to belong, believe and become.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="/about#services"
            className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-black hover:bg-white/85"
          >
            Plan Your Visit
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={16} />
            </span>
          </a>
          <a
            href="/live"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            Watch Live
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sermons"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.8 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-8 z-10 text-white/60"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
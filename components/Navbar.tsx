"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const mainLinks = [
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Live Stream", href: "/live" },
  { label: "Events", href: "/events" },
  { label: "Ministries", href: "/ministries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

const quickLinks = [
  { label: "Need Prayer", href: "/prayer" },
  { label: "Plan Your Visit", href: "/about#services" },
];

const social = [
  { label: "YouTube", href: "https://www.youtube.com/@zionagchennaiofficial" },
  { label: "Instagram", href: "https://instagram.com/zion_ag_church" },
  { label: "Facebook", href: "https://www.facebook.com/zionagchurch.kamarajapuram" },
];

const topLinks = [
  { label: "Give", href: "/give" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/60 py-3 backdrop-blur-md" : "bg-transparent py-6"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="whitespace-nowrap text-sm font-bold tracking-[0.2em] text-white sm:text-lg"
          >
            ZION AG CHURCH
          </Link>

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-6 md:flex">
              {topLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm uppercase tracking-widest text-white/80 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/live"
                  className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/80 transition hover:text-white"
                >
                  <span className="h-2 w-2 rounded-full bg-red-500" /> Live
                </Link>
              </li>
            </ul>

            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-sm uppercase tracking-widest text-white"
            >
              <span className="hidden sm:inline">Menu</span>
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-black"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="whitespace-nowrap text-sm font-bold tracking-[0.2em] text-white sm:text-lg"
              >
                ZION AG CHURCH
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X size={30} />
              </button>
            </div>

            <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-6 md:grid-cols-[2fr_1fr]">
              <ul className="space-y-2">
                {mainLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i, duration: 0.5 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-display block text-4xl font-semibold text-white transition hover:text-[#d9b26f] sm:text-5xl"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-white/50">
                    Get Started
                  </p>
                  <ul className="mt-5 space-y-3">
                    {quickLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="text-xl text-white/90 transition hover:text-[#d9b26f]"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-white/50">
                    Follow Us
                  </p>
                  <ul className="mt-5 space-y-3">
                    {social.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-white/90 transition hover:text-[#d9b26f]"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

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

const centerLinks = [
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Ministries", href: "/ministries" },
  { label: "Gallery", href: "/gallery" },
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

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="font-display whitespace-nowrap text-3xl uppercase tracking-wide text-white"
    >
      Zion AG <span className="accent">Church</span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,padding] duration-500 ${
          scrolled ? "bg-black/50 py-3 backdrop-blur-md" : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Logo />

          <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md lg:flex">
            {centerLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block rounded-full px-4 py-2 text-sm transition hover:bg-white/10 hover:text-white ${
                    pathname === l.href
                      ? "bg-white/10 text-white"
                      : "text-white/70"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/live"
              className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10 md:flex"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />{" "}
              Live
            </Link>
            <Link
              href="/give"
              className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/85 md:block"
            >
              Give
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-[#060606]"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
              <Logo onClick={() => setOpen(false)} />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition duration-500 hover:rotate-90 hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-6 md:grid-cols-[2fr_1fr]">
              <ul className="space-y-1">
                {mainLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.7, ease }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-display block text-6xl uppercase tracking-wide text-white transition duration-500 hover:translate-x-3 hover:text-white/50 sm:text-8xl"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="space-y-10"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease }}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.5em]">Get Started</p>
                  <ul className="mt-5 space-y-3">
                    {quickLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="text-xl text-white/90 transition hover:text-white/50"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.5em]">Follow Us</p>
                  <ul className="mt-5 space-y-3">
                    {social.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-white/90 transition hover:text-white/50"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Info,
  BookOpen,
  Radio,
  CalendarDays,
  Users,
  Camera,
  Gift,
  Phone,
  HeartHandshake,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const mainLinks = [
  { label: "About", href: "/about", icon: Info },
  { label: "Sermons", href: "/sermons", icon: BookOpen },
  { label: "Live Stream", href: "/live", icon: Radio },
  { label: "Events", href: "/events", icon: CalendarDays },
  { label: "Ministries", href: "/ministries", icon: Users },
  { label: "Gallery", href: "/gallery", icon: Camera },
  { label: "Give", href: "/give", icon: Gift },
  { label: "Contact", href: "/contact", icon: Phone },
];

const centerLinks = [
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Ministries", href: "/ministries" },
  { label: "Gallery", href: "/gallery" },
];

const quickLinks = [
  { label: "Need Prayer", href: "/prayer", icon: HeartHandshake },
  { label: "Plan Your Visit", href: "/about#services", icon: MapPin },
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
          scrolled ? "bg-black/75 py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Logo />

          <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
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
              className="hidden items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/85 md:flex"
            >
              <Gift size={16} />
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

            <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-4 md:grid-cols-[1.5fr_1fr] md:gap-20">
              <ul className="border-t border-white/10">
                {mainLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.6, ease }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 py-3.5 text-white sm:py-4"
                    >
                      <span className="w-8 text-xs tracking-widest text-white/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition duration-500 group-hover:border-white/40 group-hover:text-white sm:flex">
                        <l.icon size={18} />
                      </span>
                      <span className="font-display text-4xl uppercase leading-none tracking-wide transition duration-500 group-hover:translate-x-2 sm:text-5xl">
                        {l.label}
                      </span>
                      <ArrowUpRight
                        size={24}
                        className="ml-auto text-white/0 transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease }}
                className="space-y-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:self-start"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.5em]">Get Started</p>
                  <ul className="mt-5 space-y-4">
                    {quickLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 text-lg text-white/90 transition hover:text-white/50"
                        >
                          <l.icon size={20} className="text-white/50" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-xs uppercase tracking-[0.5em]">Follow Us</p>
                  <ul className="mt-5 space-y-4">
                    {social.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between text-lg text-white/90 transition hover:text-white/50"
                        >
                          {s.label}
                          <ArrowUpRight
                            size={18}
                            className="text-white/40 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
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
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

type SocialName = "youtube" | "instagram" | "facebook";

const social: { label: string; href: string; name: SocialName }[] = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@zionagchennaiofficial",
    name: "youtube",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/zion_ag_church",
    name: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/zionagchurch.kamarajapuram",
    name: "facebook",
  },
];

function SocialIcon({ name }: { name: SocialName }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "shrink-0 text-white/45",
    "aria-hidden": true,
  };

  if (name === "youtube") {
    return (
      <svg {...common}>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

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

            <div className="mx-auto grid max-w-5xl gap-14 px-6 pb-16 pt-8 md:grid-cols-[1.4fr_1fr] md:gap-24">
              <ul className="border-t border-white/10">
                {mainLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.04 * i + 0.1, duration: 0.6, ease }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 py-3 text-white"
                    >
                      <l.icon
                        size={18}
                        strokeWidth={1.5}
                        className="shrink-0 text-white/45 transition duration-500 group-hover:text-white"
                      />
                      <span className="font-display text-3xl uppercase leading-none tracking-wide transition duration-500 group-hover:translate-x-1.5 sm:text-4xl">
                        {l.label}
                      </span>
                      {pathname === l.href && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                      <ArrowUpRight
                        size={20}
                        className="ml-auto text-white/0 transition duration-500 group-hover:text-white/70"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.7, ease }}
                className="space-y-12 md:pt-3"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                    Get Started
                  </p>
                  <ul className="mt-5 space-y-3">
                    {quickLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 text-base text-white/80 transition hover:text-white"
                        >
                          <l.icon
                            size={17}
                            strokeWidth={1.5}
                            className="text-white/45"
                          />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                    Follow Us
                  </p>
                  <ul className="mt-5 space-y-3">
                    {social.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 text-base text-white/80 transition hover:text-white"
                        >
                          <SocialIcon name={s.name} />
                          {s.label}
                          <ArrowUpRight
                            size={16}
                            className="ml-auto text-white/40 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
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

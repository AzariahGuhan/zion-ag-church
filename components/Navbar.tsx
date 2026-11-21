"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Events", href: "/#events" },
  { label: "Ministries", href: "/#ministries" },
  { label: "Sermons", href: "/sermons" },
  { label: "Gallery", href: "/gallery" },
  { label: "Give", href: "/give" },
  { label: "Prayer", href: "/#prayer" },
  { label: "Contact", href: "/#contact" },
  { label: "Live", href: "/live" },
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
    return () => {
      document.body.style.overflow = "";
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

          <ul className="hidden items-center gap-6 xl:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm uppercase tracking-widest text-white/80 transition hover:text-white"
                >
                  {l.label === "Live" ? (
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-500" /> Live
                    </span>
                  ) : (
                    l.label
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="z-50 text-white xl:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 overflow-y-auto bg-black/95 py-20"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.06 * i, duration: 0.5 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold uppercase tracking-widest text-white"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
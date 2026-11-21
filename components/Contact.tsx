"use client";

import { Mail, MapPin, Phone } from "lucide-react";

const address =
  "No. 8, Budher Street, Kamarajapuram, Sembakkam, Tambaram, Tamil Nadu 600073";

const social = [
  { label: "YouTube", href: "https://www.youtube.com/@zionagchennaiofficial" },
  { label: "Instagram", href: "https://instagram.com/zion_ag_church" },
  { label: "Facebook", href: "https://www.facebook.com/zionagchurch.kamarajapuram" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 px-6 pb-12 pt-28 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
          Get in Touch
        </p>
        <h2 className="text-4xl font-bold sm:text-5xl">Contact Us</h2>

        <div className="mt-12 space-y-4 text-white/80">
          <p className="flex items-start justify-center gap-3">
            <MapPin size={20} className="mt-1 shrink-0" /> {address}
          </p>
          <p className="flex items-center justify-center gap-3">
            <Phone size={20} className="shrink-0" />
            <a href="tel:+919382117257" className="hover:text-white">
              +91 93821 17257
            </a>
          </p>
          <p className="flex items-center justify-center gap-3">
            <Mail size={20} className="shrink-0" />
            <a href="mailto:chennaizionagchurch@gmail.com" className="hover:text-white">
              chennaizionagchurch@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-2 text-sm uppercase tracking-widest text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="mt-16 border-t border-white/10 pt-8 text-sm text-white/50">
                    © 2026 Zion AG Church, Kamarajapuram. All rights reserved.
        </p>
      </div>
    </section>
  );
}
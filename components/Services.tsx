"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

const services = [
  { day: "Sunday", name: "First Service", time: "6:00 AM" },
  { day: "Sunday", name: "Second Service", time: "9:00 AM" },
  { day: "Sunday", name: "Evening Bible Study", time: "6:00 PM" },
  { day: "Friday", name: "Fasting Service", time: "10:00 AM" },
];

const address =
  "No. 8, Budher Street, Kamarajapuram, Sembakkam, Tambaram, Tamil Nadu 600073";

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            Join Us
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Service Times</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-sm uppercase tracking-widest text-white/60">
                {s.day}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{s.name}</h3>
              <p className="mt-4 flex items-center gap-2 text-xl text-white/90">
                <Clock size={20} /> {s.time}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Visit Us</h3>
          <p className="mt-4 flex items-start gap-3 text-white/80">
            <MapPin size={20} className="mt-1 shrink-0" /> {address}
          </p>
          <p className="mt-3 flex items-center gap-3 text-white/80">
            <Phone size={20} className="shrink-0" />
            <a href="tel:+919382117257" className="hover:text-white">
              +91 93821 17257
            </a>
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              "Zion AG Church, " + address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-white/80"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
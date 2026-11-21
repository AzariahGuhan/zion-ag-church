"use client";

import { useState } from "react";

// Fill these in ONLY after the church approves showing them publicly.
const UPI_ID = ""; // e.g. "zionagchurch@okhdfcbank"
const QR_IMAGE = ""; // e.g. "/upi-qr.png" (put the file in /public)

export default function Give() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <section id="give" className="bg-neutral-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
          Generosity
        </p>
        <h2 className="text-4xl font-bold sm:text-5xl">Give</h2>
        <p className="mt-8 text-lg leading-8 text-white/75">
          Your giving supports the work of the church and its ministries.
        </p>

        {UPI_ID ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
            {QR_IMAGE && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={QR_IMAGE}
                alt="UPI QR code for Zion AG Church"
                className="mx-auto h-56 w-56 rounded-xl bg-white p-2"
              />
            )}
            <p className="mt-6 text-sm uppercase tracking-widest text-white/60">UPI ID</p>
            <p className="mt-1 text-xl font-semibold">{UPI_ID}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent("Zion AG Church")}&cu=INR`}
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-white/80"
              >
                Pay with UPI
              </a>
              <button
                onClick={copy}
                className="rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
              >
                {copied ? "Copied!" : "Copy UPI ID"}
              </button>
            </div>
            <p className="mt-6 text-sm text-white/50">
              On a phone, &quot;Pay with UPI&quot; opens your UPI app.
            </p>
          </div>
        ) : (
          <>
            <p className="mt-4 text-lg leading-8 text-white/75">
              To give or to ask about giving options, please contact the church office.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-block rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
            >
              Contact Us to Give
            </a>
          </>
        )}
      </div>
    </section>
  );
}
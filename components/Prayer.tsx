"use client";

import { useState } from "react";

const ACCESS_KEY = "PASTE_ACCESS_KEY_HERE";

export default function Prayer() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New prayer request - Zion AG website",
          from_name: "Zion AG Website",
          name: data.get("name"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/50";

  return (
    <section id="prayer" className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            We Are Praying
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Prayer Request</h2>
          <p className="mt-6 leading-7 text-white/70">
            Share what is on your heart and our church family will pray with you.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <input name="name" required placeholder="Your name" className={field} />
          <input name="phone" placeholder="Phone (optional)" className={field} />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your prayer request"
            className={field}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-white/80 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Request"}
          </button>

          {status === "sent" && (
            <p className="text-center text-green-400">
              Thank you. Your request has been sent. God bless you.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400">
              Something went wrong. Please call us on +91 93821 17257.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
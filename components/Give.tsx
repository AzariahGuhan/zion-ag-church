"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Check, Copy, Landmark, Lock, QrCode } from "lucide-react";

/* ==================================================================
   FILL THESE IN after the church approves showing them publicly.
=================================================================== */
const PAYEE_NAME = "Zion AG Church";
const UPI_ID = ""; // e.g. "zionagchurch@okhdfcbank"

const BANK = {
  accountName: "", // name on the account
  bank: "", // e.g. "State Bank of India"
  branch: "",
  accountNumber: "",
  ifsc: "",
};

// Sample funds. Change these to the church's real giving categories.
const funds = [
  "Tithes & Offerings",
  "Thanksgiving Offering",
  "Building Fund",
  "Missions & Outreach",
];

const quickAmounts = [500, 1000, 2000, 5000];
/* ------------------------------------------------------------------ */

const hasUpi = UPI_ID.trim() !== "";
const hasBank = BANK.accountNumber.trim() !== "" && BANK.ifsc.trim() !== "";

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4 last:border-b-0">
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
        <p className="mt-1 break-all text-lg">{value}</p>
      </div>
      <button
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function Give() {
  const [tab, setTab] = useState<"upi" | "bank">("upi");
  const [amount, setAmount] = useState("");
  const [fund, setFund] = useState(funds[0]);

  const amountNum = Number(amount);
  const validAmount = amountNum > 0;

  const params = [
    `pa=${UPI_ID.trim()}`,
    `pn=${encodeURIComponent(PAYEE_NAME)}`,
    validAmount ? `am=${amountNum}` : "",
    "cu=INR",
    `tn=${encodeURIComponent(fund)}`,
  ]
    .filter(Boolean)
    .join("&");
  const upiLink = `upi://pay?${params}`;

  const tabBtn = (active: boolean) =>
    `flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
      active ? "bg-white text-black" : "text-white/70 hover:text-white"
    }`;

  return (
    <section id="give" className="bg-black px-6 pb-24 pt-40 text-white">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">
            Generosity
          </p>
          <h1 className="font-display text-5xl uppercase sm:text-6xl">Give</h1>
          <p className="mt-5 leading-7 text-white/70">
            Your giving supports the work of the church and its ministries.
            Thank you for your generosity.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6">
          {/* Tabs */}
          <div className="flex gap-1 rounded-2xl bg-white/5 p-1">
            <button onClick={() => setTab("upi")} className={tabBtn(tab === "upi")}>
              <QrCode size={17} /> UPI / QR
            </button>
            <button onClick={() => setTab("bank")} className={tabBtn(tab === "bank")}>
              <Landmark size={17} /> Net Banking
            </button>
          </div>

          {tab === "upi" && (
            <div className="mt-6">
              {/* Amount */}
              <div className="text-center">
                <p className="font-display text-6xl">
                  <span className="text-white/50">₹</span>
                  {validAmount ? amountNum.toLocaleString("en-IN") : "0"}
                </p>
                <label
                  htmlFor="amount"
                  className="mt-2 block text-sm text-white/60"
                >
                  Enter an amount
                </label>
                <input
                  id="amount"
                  inputMode="numeric"
                  placeholder="Amount in ₹"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value.replace(/\D/g, "").slice(0, 7))
                  }
                  className="mx-auto mt-3 w-48 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center text-lg outline-none placeholder:text-white/30 focus:border-white/50"
                />
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {quickAmounts.map((q) => (
                  <button
                    key={q}
                    onClick={() => setAmount(String(q))}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      amountNum === q
                        ? "border-white bg-white text-black"
                        : "border-white/20 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    ₹{q.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>

              {/* Fund */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <label
                  htmlFor="fund"
                  className="block text-xs uppercase tracking-widest text-white/50"
                >
                  Fund
                </label>
                <select
                  id="fund"
                  value={fund}
                  onChange={(e) => setFund(e.target.value)}
                  className="mt-1 w-full bg-transparent text-lg outline-none"
                >
                  {funds.map((f) => (
                    <option key={f} value={f} className="bg-neutral-900">
                      {f}
                    </option>
                  ))}
                </select>
              </div>

              {hasUpi ? (
                <>
                  <a
                    href={validAmount ? upiLink : undefined}
                    aria-disabled={!validAmount}
                    className={`mt-6 block rounded-full px-8 py-4 text-center text-sm font-semibold uppercase tracking-widest transition ${
                      validAmount
                        ? "bg-white text-black hover:bg-white/85"
                        : "pointer-events-none bg-white/20 text-white/40"
                    }`}
                  >
                    Give now
                  </a>
                  <p className="mt-3 text-center text-sm text-white/50">
                    On a phone this opens your UPI app (GPay, PhonePe, Paytm,
                    BHIM).
                  </p>

                  <div className="mt-8 flex flex-col items-center border-t border-white/10 pt-8">
                    <p className="text-sm text-white/60">
                      On a computer? Scan with any UPI app
                    </p>
                    <div className="mt-4 rounded-2xl bg-white p-4">
                      <QRCodeSVG value={upiLink} size={190} />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-widest text-white/50">
                      UPI ID
                    </p>
                    <p className="mt-1 text-lg">{UPI_ID}</p>
                  </div>
                </>
              ) : (
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5 text-center text-white/70">
                  Online giving by UPI will be available soon. To give now,
                  please call the church office on{" "}
                  <a href="tel:+919382117257" className="text-white underline">
                    +91 93821 17257
                  </a>
                  .
                </div>
              )}
            </div>
          )}

          {tab === "bank" && (
            <div className="mt-6">
              {hasBank ? (
                <>
                  <p className="leading-7 text-white/70">
                    Transfer using your bank&apos;s net banking, mobile banking,
                    NEFT, IMPS or RTGS with these details.
                  </p>
                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 px-5">
                    <CopyRow label="Account name" value={BANK.accountName} />
                    <CopyRow label="Bank" value={BANK.bank} />
                    {BANK.branch && <CopyRow label="Branch" value={BANK.branch} />}
                    <CopyRow label="Account number" value={BANK.accountNumber} />
                    <CopyRow label="IFSC code" value={BANK.ifsc} />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/50">
                    Please mention your name and the fund in the transfer
                    remarks.
                  </p>
                </>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center text-white/70">
                  Bank transfer details will be available soon. To give now,
                  please call the church office on{" "}
                  <a href="tel:+919382117257" className="text-white underline">
                    +91 93821 17257
                  </a>
                  .
                </div>
              )}
            </div>
          )}

          <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-white/40">
            <Lock size={14} className="mt-0.5 shrink-0" />
            Your payment goes directly from your own UPI or banking app to the
            church. This website does not collect or store your payment details.
          </p>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

export function CallToAction() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only — no backend wired up yet.
    setSubmitted(true);
  }

  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-gradient-to-br from-brand-bright via-brand to-[#b8430f] py-28 sm:py-32"
    >
      {/* Depth: radial highlight, grain, and a dark floor for grounding */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 10%, rgba(255,255,255,0.22), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2"
      >
        {/* Left — call prompt */}
        <div className="text-center lg:text-left">
          <h2 className="text-5xl leading-[0.9] text-white sm:text-6xl">
            Ready to Book?
            <span className="block">Call Us Today</span>
          </h2>
          <a
            href={SITE.phoneHref}
            className="mt-8 inline-block font-heading text-5xl font-bold tracking-wide text-white tabular-nums underline-offset-8 transition-[text-decoration-color] hover:underline sm:text-6xl"
          >
            {SITE.phoneDisplay}
          </a>
          <p className="mt-5 font-heading text-lg uppercase tracking-[0.15em] text-white/90">
            Or fill out our form and we&rsquo;ll call you
          </p>
        </div>

        {/* Right — quick contact form */}
        <div className="rounded-2xl border border-white/10 bg-charcoal-dark p-8 shadow-2xl shadow-black/40 ring-1 ring-black/20">
          {submitted ? (
            <div
              className="flex min-h-[280px] flex-col items-center justify-center text-center"
              aria-live="polite"
            >
              <h3 className="text-3xl text-brand">Thanks, {name || "friend"}!</h3>
              <p className="mt-3 text-white/80">
                We&rsquo;ve got your number and will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-heading text-sm uppercase tracking-wider text-white/80"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="rounded-md border border-white/15 bg-charcoal px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-dark"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-heading text-sm uppercase tracking-wider text-white/80"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(208) 555-0123"
                  className="rounded-md border border-white/15 bg-charcoal px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-dark"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2 w-full">
                Request My Callback
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

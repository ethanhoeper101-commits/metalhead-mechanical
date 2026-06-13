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
    <section id="quote" className="bg-brand py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2"
      >
        {/* Left — call prompt */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl leading-tight text-white sm:text-5xl">
            Ready to Book?
            <span className="block">Call Us Today</span>
          </h2>
          <a
            href={SITE.phoneHref}
            className="mt-6 inline-block font-heading text-4xl font-bold tracking-wide text-white underline-offset-4 hover:underline sm:text-5xl"
          >
            {SITE.phoneDisplay}
          </a>
          <p className="mt-4 font-heading text-lg uppercase tracking-wide text-white/90">
            Or fill out our form and we&apos;ll call you
          </p>
        </div>

        {/* Right — quick contact form */}
        <div className="rounded-lg bg-charcoal-dark p-8 shadow-2xl">
          {submitted ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
              <h3 className="text-3xl text-brand">Thanks, {name || "friend"}!</h3>
              <p className="mt-3 text-white/80">
                We&apos;ve got your number and will reach out shortly.
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
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="rounded-sm border border-white/15 bg-charcoal px-4 py-3 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
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
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(208) 555-0123"
                  className="rounded-sm border border-white/15 bg-charcoal px-4 py-3 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-sm bg-brand px-6 py-4 font-heading text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#c44d12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request My Callback
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

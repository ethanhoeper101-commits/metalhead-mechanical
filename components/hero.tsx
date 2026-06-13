"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

// High-quality, free Unsplash photo (modern home exterior) — loaded by URL.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/85 via-charcoal-dark/75 to-charcoal/95"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.p
          variants={item}
          className="font-heading text-sm uppercase tracking-[0.35em] text-brand sm:text-base"
        >
          {SITE.serviceArea}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-5 text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl"
        >
          Nampa&apos;s Most Trusted
          <span className="block text-brand">Heating &amp; Cooling</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-heading text-xl uppercase tracking-wide text-white/85 sm:text-2xl"
        >
          Fast. Reliable. Licensed &amp; Insured.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#quote"
            className="inline-flex w-full items-center justify-center rounded-sm bg-brand px-8 py-4 font-heading text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#c44d12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
          >
            Get a Free Quote
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex w-full items-center justify-center rounded-sm border-2 border-white/80 px-8 py-4 font-heading text-base font-bold uppercase tracking-wider text-white transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Call Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

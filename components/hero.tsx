"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

// High-quality, free Unsplash photo (HVAC technician at work) — loaded by URL.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden="true"
      />
      {/* 60% dark overlay for legibility + directional gradient for depth */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent"
        aria-hidden="true"
      />
      {/* Blend into the next section + burnt-orange floor glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-brand/20 blur-[120px]"
        aria-hidden="true"
      />
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.07] mix-blend-overlay"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 py-32 text-left"
      >
        <motion.p variants={item} className="eyebrow flex items-center gap-3">
          <span className="h-px w-10 bg-brand" aria-hidden="true" />
          {SITE.serviceArea}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl text-6xl font-bold leading-[0.88] text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          Nampa&rsquo;s Most Trusted
          <span className="mt-2 block text-brand drop-shadow-[0_2px_24px_rgba(224,90,26,0.35)]">
            Heating &amp; Cooling
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 font-heading text-2xl uppercase tracking-[0.15em] text-white/90 sm:text-3xl"
        >
          Fast. Reliable. Licensed &amp; Insured.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
        >
          <a href="#quote" className="btn btn-primary">
            Get a Free Quote
          </a>
          <a href={SITE.phoneHref} className="btn btn-outline">
            Call Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

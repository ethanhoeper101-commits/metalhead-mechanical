"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconClass = "h-10 w-10 text-brand";

const SERVICES: Service[] = [
  {
    title: "AC Repair",
    description:
      "Blowing warm air? We diagnose and fix any AC unit fast — same-day service across the Treasure Valley.",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
      </svg>
    ),
  },
  {
    title: "Heating Installation",
    description:
      "Furnaces, heat pumps, and full HVAC systems installed by licensed pros — sized right and built to last.",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8.5 14.5A4.5 4.5 0 0 0 13 19c2.5 0 4.5-2 4.5-4.5 0-2-1-3.5-2.5-5.5-.5 1-1 1.5-2 2 .5-2-.5-4.5-2.5-6 .5 3-1.5 4.5-2.5 6.5-.5 1-1 2-1 3.5Z" />
      </svg>
    ),
  },
  {
    title: "Maintenance Plans",
    description:
      "Affordable tune-up plans that keep your system running efficiently and head off breakdowns before they start.",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-ink via-charcoal-dark to-ink py-28 sm:py-36"
    >
      {/* Blueprint grid + grain for depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-4 text-5xl text-white sm:text-6xl">Our Services</h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 border-t-4 border-t-brand bg-gradient-to-b from-charcoal/80 to-charcoal-dark/80 p-8 shadow-xl shadow-black/30 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-brand/15"
            >
              {/* Orange glow that blooms on hover */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/0 blur-2xl transition-colors duration-300 group-hover:bg-brand/20"
                aria-hidden="true"
              />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-lg bg-brand/10 ring-1 ring-brand/30 transition-colors duration-300 group-hover:bg-brand/20">
                {service.icon}
              </div>
              <h3 className="relative mt-6 text-2xl text-white">
                {service.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-white/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

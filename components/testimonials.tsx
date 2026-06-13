"use client";

import { motion } from "framer-motion";

type Review = {
  quote: string;
  name: string;
  location: string;
};

const REVIEWS: Review[] = [
  {
    quote:
      "Our AC died in the middle of July and MetalHead had a tech out the same afternoon. Fixed fast, fair price, no nonsense. These guys are the real deal.",
    name: "Jessica R.",
    location: "Nampa, ID",
  },
  {
    quote:
      "They installed a whole new furnace and heat pump for us. Clean work, showed up on time, and walked me through everything. Couldn't be happier.",
    name: "Marcus T.",
    location: "Caldwell, ID",
  },
  {
    quote:
      "Signed up for their maintenance plan two years ago and haven't had a single issue since. Honest, reliable, and they actually answer the phone.",
    name: "Dana & Phil K.",
    location: "Meridian, ID",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-brand"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-charcoal to-charcoal-dark py-28 sm:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Reviews</p>
          <h2 className="mt-4 text-5xl text-white sm:text-6xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.figure
              key={review.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex flex-col overflow-hidden rounded-xl border border-white/10 border-l-4 border-l-brand bg-gradient-to-b from-charcoal/80 to-ink/60 p-8 shadow-xl shadow-black/30"
            >
              {/* Decorative oversized quote mark */}
              <span
                className="pointer-events-none absolute -right-2 top-0 select-none font-heading text-[8rem] leading-none text-brand/10"
                aria-hidden="true"
              >
                &rdquo;
              </span>
              <Stars />
              <blockquote className="relative mt-5 flex-1 leading-relaxed text-white/80">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="relative mt-6 border-t border-white/10 pt-4">
                <span className="font-heading text-lg uppercase tracking-wide text-white">
                  {review.name}
                </span>
                <span className="block text-sm text-white/60">
                  {review.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

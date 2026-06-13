"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Jobs Completed" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Emergency Service" },
  { value: 100, suffix: "%", label: "Satisfaction Guaranteed" },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const numbers = gsap.utils.toArray<HTMLElement>("[data-count]");

      numbers.forEach((el) => {
        const target = Number(el.dataset.count);
        const prefix = el.dataset.prefix ?? "";
        const suffix = el.dataset.suffix ?? "";
        const counter = { val: 0 };

        gsap.to(counter, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(counter.val)}${suffix}`;
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-brand">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-4xl text-white sm:text-5xl">
            Built On Trust &amp; Hard Work
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/10 bg-charcoal-dark/70 p-8 text-center"
            >
              <div
                className="font-heading text-5xl font-bold text-brand sm:text-6xl"
                data-count={stat.value}
                data-prefix={stat.prefix ?? ""}
                data-suffix={stat.suffix ?? ""}
              >
                {stat.prefix ?? ""}0{stat.suffix ?? ""}
              </div>
              <p className="mt-3 font-heading text-sm uppercase tracking-wider text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

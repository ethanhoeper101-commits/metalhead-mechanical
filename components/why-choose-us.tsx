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

    const numbers = gsap.utils.toArray<HTMLElement>(
      "[data-count]",
      root,
    );

    const finalText = (el: HTMLElement) =>
      `${el.dataset.prefix ?? ""}${el.dataset.count}${el.dataset.suffix ?? ""}`;

    // Respect reduced-motion: show final numbers immediately, skip the tween.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      numbers.forEach((el) => (el.textContent = finalText(el)));
      return;
    }

    const ctx = gsap.context(() => {
      numbers.forEach((el) => {
        const target = Number(el.dataset.count);
        const prefix = el.dataset.prefix ?? "";
        const suffix = el.dataset.suffix ?? "";
        const counter = { val: 0 };

        gsap.to(counter, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(counter.val)}${suffix}`;
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative overflow-hidden bg-ink py-28 sm:py-36"
    >
      {/* Layered gradient + radial orange glows for an atmospheric backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 15% 0%, rgba(224,90,26,0.18), transparent 60%), radial-gradient(50% 70% at 90% 100%, rgba(224,90,26,0.12), transparent 60%), linear-gradient(180deg, #1c1c1c 0%, #2a2a2a 50%, #1c1c1c 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="mt-4 text-5xl text-white sm:text-6xl">
            Built On Trust &amp; Hard Work
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 text-center backdrop-blur-sm transition-colors duration-300 hover:border-brand/40"
            >
              <div
                className="font-heading text-7xl font-bold leading-none text-brand tabular-nums drop-shadow-[0_2px_20px_rgba(224,90,26,0.35)] sm:text-8xl"
                data-count={stat.value}
                data-prefix={stat.prefix ?? ""}
                data-suffix={stat.suffix ?? ""}
              >
                {stat.prefix ?? ""}0{stat.suffix ?? ""}
              </div>
              <p className="mt-4 font-heading text-sm uppercase tracking-[0.15em] text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

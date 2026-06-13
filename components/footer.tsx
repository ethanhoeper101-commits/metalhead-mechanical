import Image from "next/image";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1f1f1f] py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="MetalHead Mechanical logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-heading text-lg font-bold uppercase tracking-wide text-white">
              MetalHead <span className="text-brand">Mechanical</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {SITE.tagline}. {SITE.serviceArea}.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-brand">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href={SITE.phoneHref} className="hover:text-brand">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={SITE.emailHref} className="hover:text-brand">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-brand">
            Location
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{SITE.city}</li>
            <li>{SITE.serviceArea}</li>
          </ul>
        </div>

        {/* Licensing */}
        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-brand">
            Licensed &amp; Insured
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {SITE.licenses.map((license) => (
              <li key={license}>{license}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-8">
        <p className="text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

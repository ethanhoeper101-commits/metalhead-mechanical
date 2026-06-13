import Image from "next/image";
import Link from "next/link";

const PHONE_NUMBER = "(208) 555-0199";
const PHONE_HREF = "tel:+12085550199";

export function Navbar() {
  return (
    <header className="w-full bg-charcoal-dark border-b border-white/10">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo — left */}
        <Link href="/" className="flex items-center gap-3" aria-label="MetalHead Mechanical home">
          <Image
            src="/logo/logo.png"
            alt="MetalHead Mechanical logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12 object-contain"
          />
          <span className="hidden font-heading text-xl font-bold uppercase tracking-wide text-foreground sm:inline">
            MetalHead <span className="text-brand">Mechanical</span>
          </span>
        </Link>

        {/* CALL NOW — right */}
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-sm bg-brand px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#c44d12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <span aria-hidden="true">📞</span>
          <span>
            Call Now<span className="hidden md:inline">: {PHONE_NUMBER}</span>
          </span>
        </a>
      </nav>
    </header>
  );
}

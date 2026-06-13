export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-heading text-sm uppercase tracking-[0.3em] text-brand">
        Nampa, Idaho
      </p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[0.95] sm:text-7xl">
        MetalHead Mechanical
        <span className="block text-brand">Heating &amp; Cooling</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-foreground/70">
        Foundation in place. Sections coming soon.
      </p>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="relative overflow-hidden bg-timber pt-24 sm:pt-28">
      <img
        src="/images/rytro-zamek.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        style={{ objectPosition: "center 40%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-timber/70 to-timber/85" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-paper/80">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold text-paper">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-paper/80 sm:text-base">
          {lede}
        </p>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const CARDS = [
  {
    title: "Dania sygnaturowe",
    image: "/images/dish-pierogi.jpg",
    alt: "Pierogi ruskie ze skwarkami",
    to: "/menu" as const,
    body: null as string | null,
  },
  {
    title: "Zjedz u nas",
    image: "/images/dine-interior.jpg",
    alt: "Sala bistro z widokiem na góry",
    to: "/rezerwacja" as const,
    body: "Bistro pod zamkiem — zarezerwuj stolik na rustykalną kolację z widokiem na ruiny.",
  },
  {
    title: "Przytulny klimat",
    image: "/images/cozy-nook.jpg",
    alt: "Zakątek chaty z lampą i lasem za oknem",
    to: "/o-nas" as const,
    body: "Jedz w naturze. Ciepłe zakątki zaprojektowane do odpoczynku po szlaku.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-frame">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/wood.jpg)" }}
        aria-hidden="true"
      />

      <div className="relative min-h-[100svh]">
        <div className="absolute inset-[10px] overflow-hidden sm:inset-[18px] lg:inset-[24px]">
          <img
            src="/images/rytro-zamek.jpg"
            alt="Zamek w Rytrze o zachodzie słońca — widok z okna chaty"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 62%" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/10 to-ink/20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] sm:h-[34%]"
            aria-hidden="true"
          >
            <img
              src="/images/table.jpg"
              alt=""
              className="h-full w-full object-cover object-top"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 28%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 28%, black 100%)",
              }}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_90px_rgb(20_12_8/0.5)]"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pb-8 pt-24 text-center sm:pb-56 sm:pt-28">
          <h1 className="font-display text-[clamp(2.35rem,6.6vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-paper">
            Górskie smaki,
            <br />
            na zamówienie.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper/90 sm:text-base">
            Bez kolejek. Autentyczne beskidzkie dania gotowe na Twoją przygodę —
            u stóp zamku w Rytrze.
          </p>
          <Link to="/menu" className="mt-8 no-underline">
            <Button size="lg">Zamów teraz</Button>
          </Link>
        </div>
      </div>

      <div className="relative z-20 px-4 pb-8 sm:-mt-52 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-3 sm:gap-4">
          {CARDS.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group block overflow-hidden rounded-[var(--radius-xl)] bg-paper p-2.5 no-underline shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
            >
              <p className="px-1 pb-2 text-center font-display text-lg font-semibold tracking-wide text-ink sm:text-xl">
                {card.title}
              </p>
              <div className="relative overflow-hidden rounded-[calc(var(--radius-xl)-10px)]">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:aspect-[16/11]"
                />
                {card.body && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 pt-10">
                    <p className="text-left text-[12px] leading-snug text-paper sm:text-[13px]">
                      {card.body}
                    </p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

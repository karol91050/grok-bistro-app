import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/hero/Hero";
import { DishCard } from "@/components/menu/DishCard";
import { Button } from "@/components/ui/button";
import { MENU } from "@/lib/menu-data";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = MENU.filter((item) => item.featured);

  return (
    <main>
      <Hero />

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
              U stóp zamku
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Kuchnia beskidzka, podana na czas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Zamawiasz rano — odbierasz przed szlakiem albo jesz u nas, z widokiem
              na ruiny zamku w Rytrze. Te same przepisy, ten sam ogień.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/menu" className="no-underline">
              <Button variant="outline">Pełne menu</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-timber">
        <div className="mx-auto grid max-w-6xl items-center gap-0 md:grid-cols-2">
          <img
            src="/images/rytro-zamek.jpg"
            alt="Zamek w Rytrze wśród wzgórz Beskidu Sądeckiego"
            className="h-full min-h-[280px] w-full object-cover md:min-h-[420px]"
            style={{ objectPosition: "center 60%" }}
          />
          <div className="px-6 py-12 sm:px-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
              Miejsce
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-paper">
              Nad Popradem, pod warownią
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/75 sm:text-base">
              Rytro leży w Beskidzie Sądeckim, tam gdzie dolina otwiera się na
              zamek. Gotujemy z tego, co dają las, rzeka i szałasy: pstrąg,
              oscypek, kwaśnica, pierogi. Catering na wesele w stodole, lunch
              na rajd, kolację przy kominku.
            </p>
            <Link to="/o-nas" className="mt-8 inline-block no-underline">
              <Button variant="ghost">Nasza historia</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
              Jak to działa
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
              Zamów. Odbierz. Idź w góry.
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Wybierz dania",
                d: "Z menu góralskiego — na wynos, na stół albo na event.",
              },
              {
                n: "02",
                t: "Wskaż godzinę",
                d: "Odbiór w chacie albo dowóz w dolinie Popradu.",
              },
              {
                n: "03",
                t: "Jedz bez kolejki",
                d: "Paczki gotowe na szlak. Albo stolik z widokiem na zamek.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="rounded-[var(--radius-xl)] bg-paper p-6 shadow-[var(--shadow-card)]"
              >
                <p className="font-display text-3xl text-ember">{step.n}</p>
                <h3 className="mt-3 font-display text-2xl text-ink">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/images/dine-interior.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-24">
          <h2 className="font-display text-4xl font-semibold text-paper sm:text-5xl">
            Stolik przy oknie, albo paczka na szlak
          </h2>
          <p className="mt-4 text-sm text-paper/80">
            Rezerwacje na wieczór i zamówienia na rano przyjmujemy tego samego dnia.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/rezerwacja" className="no-underline">
              <Button>Zarezerwuj stolik</Button>
            </Link>
            <Link to="/menu" className="no-underline">
              <Button variant="ghost">Zamów na wynos</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

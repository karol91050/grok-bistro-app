import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/o-nas")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Karczma i catering"
        title="O nas"
        lede="Gotujemy u stóp XIV-wiecznego zamku w Rytrze. Dla tych, co schodzą ze szlaku — i dla tych, co niosą ucztę w góry."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
            Historia
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
            Chata pod warownią
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Zamek w Rytrze strzeże doliny Popradu od średniowiecza. Pod jego
            murem stoi nasza chata: kuchnia na otwartym ogniu, stół z desek
            jodłowych i okna, przez które widać basztę o zachodzie.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Rytro Catering powstało z prostego gestu — paczki na szlak, żeby
            nie stać w kolejce po powrocie. Dziś woźimy gulasz na wesela w
            stodołach, obiady na rajdy PTTK i kolacje dla tych, co rezerwują
            stolik z widokiem.
          </p>
        </div>
        <img
          src="/images/cozy-nook.jpg"
          alt="Zakątek chaty z lampą i widokiem na las"
          className="aspect-[4/3] w-full rounded-[var(--radius-xl)] object-cover shadow-[var(--shadow-card)]"
        />
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
          {[
            {
              t: "Kuchnia z doliny",
              d: "Pstrąg z Popradu, oscypek z szałasu, kapusta z beczki. Sezon dyktuje kartę.",
            },
            {
              t: "Catering w teren",
              d: "Od dwóch torebek na Wielką Przehybę po stół weselny dla stu gości.",
            },
            {
              t: "Bistro przy kominku",
              d: "Drewniane ławy, lampy naftowe i cisza, której szuka się po górach.",
            },
          ].map((block) => (
            <article
              key={block.t}
              className="rounded-[var(--radius-xl)] bg-paper p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-2xl text-ink">{block.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{block.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <img
          src="/images/rytro-zamek.jpg"
          alt="Ruiny zamku w Rytrze o zachodzie słońca"
          className="aspect-[16/10] w-full rounded-[var(--radius-xl)] object-cover shadow-[var(--shadow-card)]"
          style={{ objectPosition: "center 70%" }}
        />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
            Zamek
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
            Widok, który zostaje
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Baszta, mur i flaga nad doliną — to ten sam krajobraz, który widać
            z naszego okna. Po obiedzie warto wejść na zamek: kwadrans stromym
            podejściem, a Poprad leży pod nogami.
          </p>
          <Link to="/rezerwacja" className="mt-8 inline-block no-underline">
            <Button>Zarezerwuj stolik przy oknie</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

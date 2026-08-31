import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="bg-timber text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
            Górskie smaki u stóp zamku w Rytrze. Catering na szlak, do schroniska
            i na stół — oraz bistro, w którym zostaje się na dłużej.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/50">
            Odwiedź
          </p>
          <p className="mt-3 text-sm leading-relaxed text-paper/80">
            ul. Zamkowa 12
            <br />
            33-343 Rytro
            <br />
            Beskid Sądecki
          </p>
          <p className="mt-3 text-sm text-paper/80">
            Wt–Nd 12:00–21:00
            <br />
            Poniedziałek nieczynne
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/50">
            Nawigacja
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/menu" className="text-paper/80 no-underline hover:text-paper">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/rezerwacja" className="text-paper/80 no-underline hover:text-paper">
                Rezerwacja stolika
              </Link>
            </li>
            <li>
              <Link to="/o-nas" className="text-paper/80 no-underline hover:text-paper">
                O nas
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="text-paper/80 no-underline hover:text-paper">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-4 text-center text-xs tracking-wide text-paper/45">
        Rytro Catering · u stóp zamku · {new Date().getFullYear()}
      </div>
    </footer>
  );
}

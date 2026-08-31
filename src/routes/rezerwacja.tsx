import { type FormEvent, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/rezerwacja")({ component: ReservePage });

function ReservePage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <PageHero
        eyebrow="Bistro pod zamkiem"
        title="Rezerwacja stolika"
        lede="Rustykalna sala z oknami na ruiny. Kolacje, obiady po szlaku, małe przyjęcia do 40 osób."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div>
          <img
            src="/images/dine-interior.jpg"
            alt="Wnętrze bistro Rytro Catering"
            className="aspect-[4/3] w-full rounded-[var(--radius-xl)] object-cover shadow-[var(--shadow-card)]"
          />
          <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Godziny</dt>
              <dd className="mt-1 text-ink">Wt–Nd 12:00–21:00</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Stoliki</dt>
              <dd className="mt-1 text-ink">2–10 osób · sala do 40</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Adres</dt>
              <dd className="mt-1 text-ink">ul. Zamkowa 12, Rytro</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Telefon</dt>
              <dd className="mt-1 text-ink">+48 18 444 12 12</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-[var(--radius-xl)] bg-paper p-6 shadow-[var(--shadow-card)] sm:p-8">
          {sent ? (
            <div className="flex min-h-72 flex-col justify-center text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] text-ember">Potwierdzenie</p>
              <h2 className="mt-3 font-display text-3xl text-ink">Stolik zarezerwowany</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Dziękujemy. Oddzwonimy, jeśli będziemy potrzebować doprecyzowania.
                Do zobaczenia pod zamkiem.
              </p>
              <Button className="mx-auto mt-8" variant="outline" onClick={() => setSent(false)}>
                Nowa rezerwacja
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <h2 className="font-display text-3xl text-ink">Zarezerwuj</h2>
              <div>
                <Label htmlFor="name">Imię i nazwisko</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <Label htmlFor="date">Dzień</Label>
                  <Input id="date" name="date" type="date" required />
                </div>
                <div>
                  <Label htmlFor="time">Godzina</Label>
                  <Input id="time" name="time" type="time" required defaultValue="18:00" />
                </div>
                <div>
                  <Label htmlFor="guests">Goście</Label>
                  <Input id="guests" name="guests" type="number" min={1} max={40} required defaultValue={2} />
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Uwagi</Label>
                <Textarea id="notes" name="notes" placeholder="Alergie, okazja, stolik przy oknie…" />
              </div>
              <Button type="submit" className="mt-2 w-full" size="lg">
                Potwierdź rezerwację
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

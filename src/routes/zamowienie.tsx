import { type FormEvent, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getItem } from "@/lib/menu-data";
import { formatPln } from "@/lib/utils";
import { cartTotal, useCart } from "@/store/cart";

export const Route = createFileRoute("/zamowienie")({ component: OrderPage });

function OrderPage() {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);
  const total = cartTotal(lines);
  const [placed, setPlaced] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (lines.length === 0) return;
    setPlaced(true);
    clear();
  }

  if (placed) {
    return (
      <main>
        <PageHero
          eyebrow="Zamówienie"
          title="Przyjęte"
          lede="Kuchnia już wie. Odbierz w umówionej godzinie — albo usiądź, jeśli jesz u nas."
        />
        <div className="mx-auto max-w-lg px-4 py-16 text-center">
          <p className="text-sm text-muted">
            Potwierdzenie wyślemy SMS-em. Do zobaczenia pod zamkiem.
          </p>
          <Link to="/menu" className="mt-8 inline-block no-underline">
            <Button>Zamów jeszcze</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow="Na wynos i na stół"
        title="Moje zamówienie"
        lede="Sprawdź koszyk, wybierz godzinę odbioru i zostaw telefon. Płatność przy odbiorze."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {lines.length === 0 ? (
            <div className="rounded-[var(--radius-xl)] bg-paper p-10 text-center shadow-[var(--shadow-card)]">
              <p className="font-display text-2xl text-ink">Koszyk jest pusty</p>
              <p className="mt-2 text-sm text-muted">Dodaj dania z menu, potem wróć tutaj.</p>
              <Link to="/menu" className="mt-6 inline-block no-underline">
                <Button>Przejdź do menu</Button>
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {lines.map((line) => {
                const item = getItem(line.id);
                if (!item) return null;
                return (
                  <li
                    key={line.id}
                    className="flex gap-4 rounded-[var(--radius-lg)] bg-paper p-3 shadow-[var(--shadow-card)]"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="size-20 rounded-[var(--radius-md)] object-cover sm:size-24"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-xl leading-tight text-ink">{item.name}</h3>
                        <p className="tabular-nums text-sm font-medium text-ember">
                          {formatPln(item.price * line.qty)}
                        </p>
                      </div>
                      <p className="mt-1 text-xs tabular-nums text-muted">{formatPln(item.price)} / szt.</p>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          className="grid size-10 place-items-center rounded-[var(--radius-sm)] bg-cream text-ink"
                          aria-label="Mniej"
                          onClick={() => setQty(line.id, line.qty - 1)}
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">{line.qty}</span>
                        <button
                          type="button"
                          className="grid size-10 place-items-center rounded-[var(--radius-sm)] bg-cream text-ink"
                          aria-label="Więcej"
                          onClick={() => setQty(line.id, line.qty + 1)}
                        >
                          <Plus className="size-4" />
                        </button>
                        <button
                          type="button"
                          className="ml-auto grid size-10 place-items-center text-muted hover:text-ember"
                          aria-label={`Usuń ${item.name}`}
                          onClick={() => remove(line.id)}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <aside className="h-fit rounded-[var(--radius-xl)] bg-paper p-6 shadow-[var(--shadow-card)] sm:p-8">
          <h2 className="font-display text-3xl text-ink">Odbiór</h2>
          <p className="mt-1 text-sm text-muted">
            Razem:{" "}
            <span className="font-medium tabular-nums text-ink">{formatPln(total)}</span>
          </p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div>
              <Label htmlFor="oname">Imię</Label>
              <Input id="oname" name="name" required autoComplete="name" disabled={lines.length === 0} />
            </div>
            <div>
              <Label htmlFor="ophone">Telefon</Label>
              <Input
                id="ophone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                disabled={lines.length === 0}
              />
            </div>
            <div>
              <Label htmlFor="opickup">Godzina odbioru</Label>
              <Input
                id="opickup"
                name="pickup"
                type="time"
                required
                defaultValue="13:00"
                disabled={lines.length === 0}
              />
            </div>
            <div>
              <Label htmlFor="onotes">Uwagi dla kuchni</Label>
              <Textarea id="onotes" name="notes" disabled={lines.length === 0} />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={lines.length === 0}>
              Złóż zamówienie
            </Button>
          </form>
        </aside>
      </div>
    </main>
  );
}

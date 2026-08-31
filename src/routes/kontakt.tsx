import { type FormEvent, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/kontakt")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <PageHero
        eyebrow="Napisz lub wpadnij"
        title="Kontakt"
        lede="Catering, rezerwacje i pytania o menu — odpowiadamy tego samego dnia, oprócz poniedziałków."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-ink">Chata</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            ul. Zamkowa 12
            <br />
            33-343 Rytro
            <br />
            powiat nowosądecki
          </p>
          <p className="mt-6 text-sm text-ink">
            <span className="block text-[11px] uppercase tracking-[0.16em] text-muted">
              Telefon
            </span>
            +48 18 444 12 12
          </p>
          <p className="mt-4 text-sm text-ink">
            <span className="block text-[11px] uppercase tracking-[0.16em] text-muted">
              E-mail
            </span>
            hallo@rytrocatering.pl
          </p>
          <p className="mt-4 text-sm text-ink">
            <span className="block text-[11px] uppercase tracking-[0.16em] text-muted">
              Godziny
            </span>
            Wtorek–niedziela 12:00–21:00
            <br />
            Poniedziałek — kuchnia odpoczywa
          </p>
          <img
            src="/images/rytro-zamek.jpg"
            alt="Dolina Rytra i zamek"
            className="mt-8 aspect-[16/9] w-full rounded-[var(--radius-xl)] object-cover shadow-[var(--shadow-card)]"
            style={{ objectPosition: "center 55%" }}
          />
        </div>

        <div className="rounded-[var(--radius-xl)] bg-paper p-6 shadow-[var(--shadow-card)] sm:p-8">
          {sent ? (
            <div className="flex min-h-72 flex-col justify-center text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] text-ember">Wysłane</p>
              <h2 className="mt-3 font-display text-3xl text-ink">Dziękujemy</h2>
              <p className="mt-3 text-sm text-muted">
                Wiadomość doszła. Oddzwonimy albo odpiszemy najpóźniej następnego
                dnia roboczego.
              </p>
              <Button className="mx-auto mt-8" variant="outline" onClick={() => setSent(false)}>
                Napisz kolejną
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <h2 className="font-display text-3xl text-ink">Napisz do nas</h2>
              <div>
                <Label htmlFor="cname">Imię</Label>
                <Input id="cname" name="name" required autoComplete="name" />
              </div>
              <div>
                <Label htmlFor="cemail">E-mail</Label>
                <Input id="cemail" name="email" type="email" required autoComplete="email" />
              </div>
              <div>
                <Label htmlFor="ctopic">Temat</Label>
                <Input id="ctopic" name="topic" placeholder="Catering, stolik, menu…" />
              </div>
              <div>
                <Label htmlFor="cmsg">Wiadomość</Label>
                <Textarea id="cmsg" name="message" required rows={6} />
              </div>
              <Button type="submit" size="lg" className="mt-2 w-full">
                Wyślij
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

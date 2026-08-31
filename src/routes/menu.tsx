import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DishCard } from "@/components/menu/DishCard";
import { PageHero } from "@/components/layout/PageHero";
import { CATEGORIES, MENU, type MenuCategory } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

type MenuSearch = { q?: string };

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  validateSearch: (search: Record<string, unknown>): MenuSearch => ({
    q: typeof search.q === "string" ? search.q : undefined,
  }),
});

function MenuPage() {
  const { q } = Route.useSearch();
  const [cat, setCat] = useState<MenuCategory | "all">("all");
  const [query, setQuery] = useState(q ?? "");

  const items = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return MENU.filter((item) => {
      if (cat !== "all" && item.category !== cat) return false;
      if (!needle) return true;
      return (
        item.name.toLowerCase().includes(needle) ||
        item.description.toLowerCase().includes(needle)
      );
    });
  }, [cat, query]);

  return (
    <main>
      <PageHero
        eyebrow="Karta dań"
        title="Menu"
        lede="Beskidzka kuchnia na wynos i do bistro. Wszystko, co chcesz zjeść przed szlakiem albo po powrocie pod zamek."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <FilterChip active={cat === "all"} onClick={() => setCat("all")}>
              Wszystko
            </FilterChip>
            {CATEGORIES.map((c) => (
              <FilterChip
                key={c.id}
                active={cat === c.id}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </FilterChip>
            ))}
          </div>
          <label className="sr-only" htmlFor="menu-search">
            Filtruj menu
          </label>
          <input
            id="menu-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Szukaj dań…"
            className="h-11 w-full rounded-[var(--radius-md)] bg-paper px-3.5 text-sm shadow-[0_0_0_1px_rgb(28_25_23/0.12)] placeholder:text-muted focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-ember)] sm:max-w-xs"
          />
        </div>

        {items.length === 0 ? (
          <p className="py-20 text-center text-sm text-muted">
            Brak dań dla tych filtrów.
          </p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 rounded-full px-4 text-xs font-medium uppercase tracking-[0.14em] transition-colors",
        active ? "bg-timber text-paper" : "bg-paper text-ink hover:bg-mist",
      )}
    >
      {children}
    </button>
  );
}

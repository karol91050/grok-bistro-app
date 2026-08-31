import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { searchMenu } from "@/lib/menu-data";
import { formatPln } from "@/lib/utils";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const add = useCart((s) => s.add);

  const results = useMemo(() => searchMenu(query).slice(0, 8), [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 40);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Szukaj w menu">
      <button
        type="button"
        className="absolute inset-0 bg-ink/50"
        aria-label="Zamknij wyszukiwanie"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-[12vh] w-[min(560px,calc(100%-2rem))] rounded-[var(--radius-xl)] bg-paper p-3 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2 rounded-[var(--radius-lg)] bg-cream px-3">
          <Search className="size-4 text-muted" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Szukaj dań, np. pierogi, pstrąg…"
            className="h-12 w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 place-items-center text-muted hover:text-ink"
            aria-label="Zamknij"
          >
            <X className="size-4" />
          </button>
        </div>
        <ul className="mt-2 max-h-[50vh] overflow-auto">
          {results.map((item) => (
            <li key={item.id}>
              <div className="flex items-center gap-3 rounded-[var(--radius-md)] p-2 hover:bg-cream">
                <img
                  src={item.image}
                  alt=""
                  className="size-14 rounded-[var(--radius-sm)] object-cover"
                />
                <Link to="/menu" onClick={onClose} className="min-w-0 flex-1 no-underline">
                  <p className="truncate font-display text-lg text-ink">{item.name}</p>
                  <p className="text-sm tabular-nums text-muted">{formatPln(item.price)}</p>
                </Link>
                <Button
                  size="sm"
                  onClick={() => {
                    add(item.id);
                    onClose();
                  }}
                >
                  Dodaj
                </Button>
              </div>
            </li>
          ))}
          {results.length === 0 && (
            <li className="px-3 py-8 text-center text-sm text-muted">
              Nic nie znaleziono dla „{query}”.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export function SearchTrigger({
  onClick,
  light,
}: {
  onClick: () => void;
  light?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Szukaj"
      className={
        light
          ? "grid size-11 place-items-center text-paper hover:text-paper/80"
          : "grid size-11 place-items-center text-ink hover:text-ember"
      }
    >
      <Search className="size-4" strokeWidth={1.75} />
    </button>
  );
}

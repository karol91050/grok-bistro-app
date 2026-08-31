import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { SearchDialog, SearchTrigger } from "@/components/search/SearchDialog";
import { cn } from "@/lib/utils";
import { cartCount, useCart } from "@/store/cart";

const NAV = [
  { to: "/", label: "Start" },
  { to: "/menu", label: "Menu" },
  { to: "/rezerwacja", label: "Rezerwacja" },
  { to: "/o-nas", label: "O nas" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const lines = useCart((s) => s.lines);
  const count = cartCount(lines);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const light = isHome && !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-200",
          light
            ? "bg-transparent text-paper"
            : "bg-cream/95 text-ink shadow-[0_1px_0_rgb(28_25_23/0.08)] backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
          <Logo light={light} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Główne">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] no-underline transition-opacity",
                    light ? "text-paper hover:opacity-80" : "text-ink hover:text-ember",
                    active && (light ? "border-b border-paper" : "border-b border-ember"),
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <Link
              to="/zamowienie"
              className={cn(
                "hidden items-center gap-2 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] no-underline sm:flex",
                light ? "text-paper" : "text-ink hover:text-ember",
              )}
            >
              Moje zamówienie
              <span className="tabular-nums">({count})</span>
            </Link>
            <SearchTrigger light={light} onClick={() => setSearchOpen(true)} />
            <button
              type="button"
              className="grid size-11 place-items-center lg:hidden"
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-ink/10 bg-cream px-4 py-4 text-ink lg:hidden">
            <nav className="flex flex-col" aria-label="Mobilne">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-11 items-center text-sm font-medium uppercase tracking-[0.18em] text-ink no-underline"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/zamowienie"
                className="flex min-h-11 items-center text-sm font-medium uppercase tracking-[0.18em] text-ink no-underline"
              >
                Moje zamówienie ({count})
              </Link>
            </nav>
          </div>
        )}
      </header>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

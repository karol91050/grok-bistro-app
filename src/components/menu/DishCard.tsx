import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type MenuItem } from "@/lib/menu-data";
import { cn, formatPln } from "@/lib/utils";
import { useCart } from "@/store/cart";

export function DishCard({ item }: { item: MenuItem }) {
  const add = useCart((s) => s.add);
  const [justAdded, setJustAdded] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius-xl)] bg-paper shadow-[var(--shadow-card)]">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="aspect-[4/3] w-full object-cover"
        />
        {item.vegetarian && (
          <span className="absolute left-3 top-3 rounded-full bg-paper/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-timber">
            Wegetariańskie
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
            {item.name}
          </h3>
          <p className="shrink-0 font-sans text-sm font-medium tabular-nums text-ember">
            {formatPln(item.price)}
          </p>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
        <Button
          className={cn("mt-4 w-full", justAdded && "bg-timber hover:bg-timber")}
          onClick={() => {
            add(item.id);
            setJustAdded(true);
            window.setTimeout(() => setJustAdded(false), 1200);
          }}
        >
          {justAdded ? (
            <>
              <Check className="size-4" /> Dodano
            </>
          ) : (
            "Dodaj do zamówienia"
          )}
        </Button>
      </div>
    </article>
  );
}

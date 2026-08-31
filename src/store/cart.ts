import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getItem } from "@/lib/menu-data";

export type CartLine = {
  id: string;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (id, qty = 1) => {
        const lines = [...get().lines];
        const existing = lines.find((line) => line.id === id);
        if (existing) existing.qty += qty;
        else lines.push({ id, qty });
        set({ lines });
      },
      setQty: (id, qty) => {
        if (qty <= 0) {
          set({ lines: get().lines.filter((line) => line.id !== id) });
          return;
        }
        set({
          lines: get().lines.map((line) =>
            line.id === id ? { ...line, qty } : line,
          ),
        });
      },
      remove: (id) => set({ lines: get().lines.filter((line) => line.id !== id) }),
      clear: () => set({ lines: [] }),
    }),
    { name: "rytro-cart", skipHydration: true },
  ),
);

export function cartCount(lines: CartLine[]) {
  return lines.reduce((sum, line) => sum + line.qty, 0);
}

export function cartTotal(lines: CartLine[]) {
  return lines.reduce((sum, line) => {
    const item = getItem(line.id);
    return sum + (item ? item.price * line.qty : 0);
  }, 0);
}

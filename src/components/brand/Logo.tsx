import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-2.5 no-underline",
        light ? "text-paper" : "text-ink",
      )}
      aria-label="Rytro Catering — strona główna"
    >
      <svg
        viewBox="0 0 40 40"
        className="size-9 shrink-0"
        aria-hidden="true"
      >
        <path
          d="M4 30 L14 12 L20 22 L26 10 L36 30 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M20 16 v12 M17 22 h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="20" cy="14.5" r="1.2" fill="currentColor" />
      </svg>
      <span className={cn("leading-none", compact && "sr-only")}>
        <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.28em]">
          Rytro
        </span>
        <span className="mt-0.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.28em]">
          Catering
        </span>
      </span>
    </Link>
  );
}

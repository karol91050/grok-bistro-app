import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-[var(--radius-md)] bg-paper px-3.5 text-sm text-ink",
        "shadow-[0_0_0_1px_rgb(28_25_23/0.12)] placeholder:text-muted",
        "transition-[box-shadow] duration-150",
        "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-ember)]",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

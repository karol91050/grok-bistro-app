import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-28 w-full rounded-[var(--radius-md)] bg-paper px-3.5 py-3 text-sm text-ink",
      "shadow-[0_0_0_1px_rgb(28_25_23/0.12)] placeholder:text-muted",
      "transition-[box-shadow] duration-150",
      "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-ember)]",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

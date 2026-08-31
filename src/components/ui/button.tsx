import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember",
  {
    variants: {
      variant: {
        ember:
          "bg-ember text-paper hover:bg-ember-dark active:scale-[0.98] shadow-[0_1px_0_rgb(0_0_0/0.12)]",
        timber: "bg-timber text-paper hover:bg-ink",
        ghost:
          "bg-transparent text-paper hover:bg-paper/10 border border-paper/40",
        outline:
          "bg-transparent text-ink border border-ink/15 hover:border-ink/40 hover:bg-mist",
        paper: "bg-paper text-ink hover:bg-cream shadow-[0_1px_0_rgb(0_0_0/0.06)]",
      },
      size: {
        sm: "h-10 px-4 text-xs uppercase tracking-[0.14em] rounded-[var(--radius-sm)]",
        md: "h-11 px-5 text-xs uppercase tracking-[0.16em] rounded-[var(--radius-md)]",
        lg: "h-12 px-7 text-sm uppercase tracking-[0.18em] rounded-[var(--radius-md)]",
        icon: "size-11 rounded-[var(--radius-md)]",
      },
    },
    defaultVariants: { variant: "ember", size: "md" },
  },
);

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    {...props}
  />
));
Button.displayName = "Button";

export { buttonVariants };

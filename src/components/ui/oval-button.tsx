import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const ovalButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-105 active:scale-95",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:scale-105 active:scale-95",
        outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground hover:shadow-md active:scale-95",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-lg hover:scale-105 active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:rounded-full hover:shadow-sm active:scale-95",
        link: "text-primary underline-offset-4 hover:underline hover:rounded-full hover:bg-primary/10 active:scale-95",
        cta: "bg-gradient-to-r from-cta to-secondary text-cta-foreground hover:from-cta-hover hover:to-secondary/80 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 animate-pulse-slow",
        oval: "bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground hover:from-primary/20 hover:to-secondary/20 hover:shadow-lg hover:scale-105 active:scale-95 border border-primary/20 hover:border-primary/30",
        ovalGradient: "bg-gradient-to-r from-primary via-secondary to-cta text-white hover:shadow-xl active:scale-95 animate-gradient bg-[length:200%_200%]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-5 py-2.5 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface OvalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ovalButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const OvalButton = React.forwardRef<HTMLButtonElement, OvalButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(ovalButtonVariants({ variant, size, className }), "oval-button")}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-full">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <span className={cn("transition-opacity", loading && "opacity-0")}>
          {children}
        </span>
      </Comp>
    );
  },
);
OvalButton.displayName = "OvalButton";

export { OvalButton, ovalButtonVariants };
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-normal",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground ",
        secondary: "border-transparent bg-secondary text-secondary-foreground ",
      },
      size: {
        sm: "text-xxs px-2 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-lg px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

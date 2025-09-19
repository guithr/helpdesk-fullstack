import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const cardVariants = tv({
  base: `bg-transparent border border-solid border-gray-500 rounded-[10px]`,
  variants: {
    size: {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface CardProps
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  as = "div",
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children
  );
}

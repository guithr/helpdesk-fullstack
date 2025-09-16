import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const textVariants = tv({
  base: `font-sans`,
  variants: {
    variant: {
      "text-xl": "text-2xl leading-[140%] font-bold",
      "text-lg": "text-xl leading-[140%] font-bold",
      "heading-md-regular": "text-base leading-[140%] font-normal",
      "heading-md-bold": "text-base leading-[140%] font-bold",
      "text-sm-regular": "text-sm leading-[140%] font-normal",
      "text-sm-bold": "text-sm leading-[140%] font-bold",
      "text-xs-regular": "text-xs leading-[140%] font-normal",
      "text-xs-bold": "text-xs leading-[140%] font-bold",
      "text-xxs": "text-[10px] leading-[140%] font-bold uppercase",
    },
  },
  defaultVariants: {
    variant: "heading-md-regular",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}

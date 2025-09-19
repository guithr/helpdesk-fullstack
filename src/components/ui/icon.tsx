import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const IconVariants = tv({
  variants: {
    size: {
      sm: "w-[14px] h-[14px]",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    },
  },
});

interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof IconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  className,
  size,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={IconVariants({ size, className })} {...props} />
  );
}

import type React from "react";
import Icon from "./icon";
import { tv, type VariantProps } from "tailwind-variants";
import Text from "./text";

export const buttonVariants = tv({
  base: `
    flex items-center justify-center gap-2
    transition group 
    cursor-pointer
    border-none rounded-[5px] 
  `,
  variants: {
    variant: {
      primary: "bg-gray-200 text-gray-600 hover:bg-gray-100",
      secondary:
        "bg-gray-500 text-gray-200 hover:bg-gray-400 hover:text-gray-100",
      link: "bg-transparent text-gray-300 hover:bg-gray-500",
    },
    size: {
      md: "h-10 px-4 py-2.5",
      sm: "h-7 px-2 py-1.5",
    },
    disabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
    },
    iconOnly: {
      true: "gap-0",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
    iconOnly: false,
  },
});

export const buttonIconVariants = tv({
  variants: {
    variant: {
      primary: "fill-gray-600",
      secondary: "fill-gray-200",
      link: "fill-gray-300",
    },
    size: {
      md: "h-[18px] w-[18px]",
      sm: "h-[14px] w-[14px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const buttonTextVariants = tv({
  variants: {
    size: {
      md: "text-sm-regular",
      sm: "text-xs-regular",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({
  variant,
  size,
  disabled,
  children,
  icon: IconComponent,
  className,
  iconOnly,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      {children && (
        <Text className={buttonTextVariants({ size })}>{children}</Text>
      )}
    </button>
  );
}

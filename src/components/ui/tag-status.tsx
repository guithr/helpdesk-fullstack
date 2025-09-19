import React from "react";
import CircleHelp from "../../assets/icons/circle-help.svg?react";
import Icon from "./icon";
import Text from "./text";
import { tv, type VariantProps } from "tailwind-variants";

export const tagStatusVariants = tv({
  base: "inline-flex items-center justify-center pl-1.5 pr-2 gap-1 py-1.5 rounded-full",
  variants: {
    variant: {
      new: "text-feedback-open bg-feedback-open/20",
      info: "text-feedback-progress bg-feedback-progress/20",
      success: "text-feedback-done bg-feedback-done/20",
      danger: "text-feedback-danger bg-feedback-danger/20",
    },
  },
  defaultVariants: {
    variant: "new",
  },
});

export const tagStatusIconVariants = tv({
  base: "",
  variants: {
    variant: {
      new: "fill-feedback-open",
      info: "fill-feedback-progress",
      success: "fill-feedback-done",
      danger: "fill-feedback-danger",
    },
  },
  defaultVariants: {
    variant: "new",
  },
});

interface TagStatusProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof tagStatusVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function TagStatus({
  variant,
  icon: IconSvg = CircleHelp,
  children,
  ...props
}: TagStatusProps) {
  return (
    <div className={tagStatusVariants({ variant })} role="status" {...props}>
      <Icon
        svg={IconSvg}
        size="md"
        className={tagStatusIconVariants({ variant })}
      />
      <Text variant="text-xs-bold">{children}</Text>
    </div>
  );
}

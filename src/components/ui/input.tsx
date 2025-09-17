import type React from "react";
import { tv } from "tailwind-variants";
import Text from "./text";
import Icon from "./icon";
import CircleAlert from "../../assets/icons/circle-alert.svg?react";

// Container agora tem variante para controlar o gap
export const inputContainerVariants = tv({
  base: `flex flex-col w-full group`,
  variants: {
    withHelper: {
      true: "gap-2",
      false: "gap-0",
    },
  },
});

export const inputWrapperVariants = tv({
  base: `
    outline-none border-b border-gray-500
    text-md-regular text-gray-200
    placeholder-gray-400
    focus:border-blue-base
    focus:caret-blue-base
    transition-colors
  `,
  variants: {
    state: {
      error: "border-feedback-danger focus:border-feedback-danger",
      default: "", // precisa declarar explicitamente
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export const labelVariants = tv({
  base: `
  text-gray-300
  group-focus-within:text-blue-base
  transition-colors
  `,
  variants: {
    state: {
      error: "text-feedback-danger group-focus-within:text-feedback-danger",
      default: "",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export const helperVariant = tv({
  base: `flex items-center gap-1 transition-colors`,
  variants: {
    state: {
      default: "text-gray-400",
      error: "text-feedback-danger",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

interface inputProps extends React.ComponentProps<"input"> {
  label: string;
  helperText?: string;
  error?: string;
}

export default function Input({
  label,
  helperText,
  error,
  ...props
}: inputProps) {
  const state = error ? "error" : "default";
  const inputId =
    props.id ?? `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      className={inputContainerVariants({ withHelper: Boolean(helperText) })}
    >
      <label htmlFor={inputId} className={labelVariants({ state })}>
        <Text variant="text-xxs">{label}</Text>
      </label>

      <input
        {...props}
        id={inputId}
        className={inputWrapperVariants({ state })}
      />

      {helperText && (
        <div className={helperVariant({ state })}>
          {state === "error" && (
            <Icon
              svg={CircleAlert}
              className="w-4 h-4 fill-current text-feedback-danger"
            />
          )}
          <Text variant="text-xs-regular">{helperText}</Text>
        </div>
      )}
    </div>
  );
}

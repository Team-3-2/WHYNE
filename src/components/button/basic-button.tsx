import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
  BUTTON_TEXT_COLOR_VARIANTS,
  ButtonShape,
  ButtonState,
  ButtonTextColor,
} from "./style";
import Icon, { iconVariants } from "../icon/icon";
import type { IconName } from "../icon/icon-map";
import type { VariantProps } from "class-variance-authority";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  iconClassName?: string;
  iconColor?: VariantProps<typeof iconVariants>["color"];
  appearance?: ButtonState;
  label?: string;
  shape?: ButtonShape;
  textColor?: ButtonTextColor;
  className?: string;
  children?: React.ReactNode;
}

const Button = ({
  appearance = "default",
  icon,
  iconColor,
  iconClassName,
  label,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        COMMON_BUTTON_STYLES,
        BUTTON_SHAPE_VARIANTS.default,
        BUTTON_STATE_VARIANTS[appearance],
        className
      )}
      {...props}
    >
      {icon && (
        <Icon
          icon={icon}
          className={iconClassName}
          color={iconColor ?? "default"}
        />
      )}
      <span className={BUTTON_TEXT_COLOR_VARIANTS[appearance]}>{label}</span>
      {children}
    </button>
  );
};

export default Button;

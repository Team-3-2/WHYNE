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
import Icon from "../icon/Icon";
import type { IconName } from "../icon/icon-map";

interface ButtonProps {
  icon?: IconName;
  type?: ButtonState;
  label?: string;
  shape?: ButtonShape;
  textColor?: ButtonTextColor;
  className?: string;
  children?: React.ReactNode;
}

const Button = ({
  type = "default",
  icon,
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
        BUTTON_STATE_VARIANTS[type],
        className
      )}
      {...props}
    >
      {icon && <Icon icon={icon} />}
      <span className={BUTTON_TEXT_COLOR_VARIANTS[type]}>{label}</span>
      {children}
    </button>
  );
};

export default Button;

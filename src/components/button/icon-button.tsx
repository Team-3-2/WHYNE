import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Icon, { iconVariants } from "../icon/icon";
import type { VariantProps } from "class-variance-authority";
import type { IconName } from "../icon/icon-map";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
} from "./style";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  iconClassName?: string;
  iconColor?: VariantProps<typeof iconVariants>["color"];
  iconSize?: VariantProps<typeof iconVariants>["size"];
  className?: string;
  "aria-label": string; //접근성을 위해 아이콘 버튼 사용시 필수적으로 넣어주세요
}

const IconButton = ({
  icon,
  iconColor,
  iconSize,
  iconClassName,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(
        COMMON_BUTTON_STYLES,
        BUTTON_SHAPE_VARIANTS.square,
        BUTTON_STATE_VARIANTS.secondary,
        className
      )}
      {...props}
    >
      <Icon
        icon={icon}
        className={iconClassName}
        color={iconColor ?? "default"}
        size={iconSize ?? "md"}
      />
    </button>
  );
};

export default IconButton;

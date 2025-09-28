import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Icon from "../icon/icon";
import type { IconName } from "../icon/icon-map";

import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
} from "./style";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  className?: string;
  "aria-label": string; //접근성을 위해 아이콘 버튼 사용시 필수적으로 넣어주세요
}

const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
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
      <Icon icon={icon} />
    </button>
  );
};

export default IconButton;

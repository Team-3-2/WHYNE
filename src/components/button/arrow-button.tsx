import { cn } from "@/lib/utils";
import Icon from "../icon/icon";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
} from "./style";

interface ArrowButtonProps {
  direction: "prev" | "next";
  className?: string;
}

const ArrowButton = ({ direction, className, ...props }: ArrowButtonProps) => {
  const iconName = direction === "prev" ? "ArrowLeftIcon" : "ArrowRightIcon";
  const ariaLabel = direction === "prev" ? "이전으로 이동" : "다음으로 이동";
  return (
    <button
      aria-label={ariaLabel}
      className={cn(
        COMMON_BUTTON_STYLES,
        BUTTON_SHAPE_VARIANTS.round,
        BUTTON_STATE_VARIANTS.secondary,
        className
      )}
      {...props}
    >
      <Icon icon={iconName} />
    </button>
  );
};

export default ArrowButton;

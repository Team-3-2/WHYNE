import { cn } from "@/lib/utils";
import Icon from "../icon/Icon";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
} from "./style";

interface ArrowButtonProps {
  direction: "left" | "right";
  className?: string;
}

const ArrowButton = ({ direction, className, ...props }: ArrowButtonProps) => {
  const iconName = direction === "left" ? "ArrowLeftIcon" : "ArrowRightIcon";
  return (
    <button
      aria-label={direction === "left" ? "이전으로 이동" : "다음으로 이동"}
      className={cn(
        COMMON_BUTTON_STYLES.base,
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

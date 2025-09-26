import { cn } from "@/lib/utils";
import Icon from "../icon/Icon";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
} from "./style";

interface IconButtonProps {
  icon: keyof typeof import("../icon/icon-map").default;
  className?: string;
}

const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
  return (
    <button
      className={cn(
        COMMON_BUTTON_STYLES.base,
        BUTTON_SHAPE_VARIANTS.round,
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

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Icon, { iconVariants } from "@/components/icon/icon";
import type { VariantProps } from "class-variance-authority";
import type { UnifiedIconName } from "@/components/icon/icon";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
} from "./style";

/**
 * 아이콘 버튼 컴포넌트
 * @param icon : 버튼에 노출할 아이콘 이름
 * @param iconColor : 아이콘 색상 (default | primary | danger | gray | black | white)
 * @param iconSize : 아이콘 크기 (xs | sm | md | md2 | lg | xl | 2xl)
 * @param iconClassName : 아이콘에 추가할 CSS 클래스
 * @param label : 버튼에 표시할 텍스트
 * @param className : 버튼에 추가할 CSS 클래스
 * @param shape : 버튼의 모양 (default)
 */

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: UnifiedIconName;
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

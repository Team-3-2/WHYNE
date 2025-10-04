import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
  BUTTON_TEXT_COLOR_VARIANTS,
  ButtonShape,
  ButtonState,
} from "./style";
import Icon, { iconVariants } from "@/components/icon/icon";
import type { UnifiedIconName } from "@/components/icon/icon";
import type { VariantProps } from "class-variance-authority";

/**
 * 기본 버튼 컴포넌트
 * @param appearance : 버튼 스타일 (default | outline)
 * @param icon : 버튼에 노출할 아이콘 이름
 * @param iconColor : 아이콘 색상 (default | primary | danger | gray | black | white)
 * @param iconSize : 아이콘 크기 (xs | sm | md | md2 | lg | xl | 2xl)
 * @param iconClassName : 아이콘에 추가할 CSS 클래스
 * @param label : 버튼에 표시할 텍스트
 * @param className : 버튼에 추가할 CSS 클래스
 * @param shape : 버튼의 모양 (default)
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: UnifiedIconName;
  iconClassName?: string;
  iconColor?: VariantProps<typeof iconVariants>["color"];
  iconSize?: VariantProps<typeof iconVariants>["size"];
  appearance?: ButtonState;
  label?: string;
  shape?: ButtonShape;
  className?: string;
  children?: React.ReactNode;
}

const Button = ({
  appearance = "default",
  icon,
  iconColor,
  iconSize,
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
          size={iconSize ?? "md"}
        />
      )}
      <span className={BUTTON_TEXT_COLOR_VARIANTS[appearance]}>{label}</span>
      {children}
    </button>
  );
};

export default Button;

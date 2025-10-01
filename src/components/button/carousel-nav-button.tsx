import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Icon, { iconVariants } from "../icon/icon";
import type { IconName } from "../icon/icon-map";
import type { VariantProps } from "class-variance-authority";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
} from "./style";

/**
 * 캐러셀 내비게이션 버튼 컴포넌트
 * @param slide : 슬라이드 방향 (prev | next)
 * @param className : 버튼 커스텀 클래스
 * @param customIcon : 커스텀 아이콘 (ArrowLeftIcon | ArrowRightIcon)
 * @param iconClassName : 아이콘 커스텀 클래스
 * @param iconColor : 아이콘 색상 (기본값: default)
 * @param iconSize : 아이콘 크기 (기본값: md)
 * @param ariaLabel : 접근성 라벨 (이전으로 이동 | 다음으로 이동)
 */

interface CarouselNavButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  slide: "prev" | "next";
  className?: string;
  customIcon?: IconName;
  iconClassName?: string;
  iconColor?: VariantProps<typeof iconVariants>["color"];
  iconSize?: VariantProps<typeof iconVariants>["size"];
  ariaLabel?: string;
}

const CarouselNavButton = ({
  customIcon,
  iconColor = "default",
  iconSize = "md",
  iconClassName,
  slide,
  className,
  ariaLabel,
  type = "button",
  ...props
}: CarouselNavButtonProps) => {
  const defaultIcon = slide === "prev" ? "ArrowLeftIcon" : "ArrowRightIcon";
  const defaultLabel = slide === "prev" ? "이전으로 이동" : "다음으로 이동";

  return (
    <button
      type={type}
      aria-label={ariaLabel ?? defaultLabel}
      className={cn(
        COMMON_BUTTON_STYLES,
        BUTTON_SHAPE_VARIANTS.round,
        BUTTON_STATE_VARIANTS.secondary,
        className
      )}
      {...props}
    >
      <Icon
        icon={customIcon ?? defaultIcon}
        className={iconClassName}
        color={iconColor ?? "default"}
        size={iconSize ?? "md"}
      />
    </button>
  );
};

export default CarouselNavButton;

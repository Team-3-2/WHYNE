import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Icon, { iconVariants } from "@/components/icon/icon";
import type { UnifiedIconName } from "@/components/icon/icon";
import type { VariantProps } from "class-variance-authority";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
} from "./style";

/**
 * 캐러셀 내비게이션 버튼 컴포넌트
 * @param id : 버튼 id
 * @param slide : 슬라이드 방향 (prev | next)
 * @param className : 버튼 커스텀 클래스
 * @param customIcon : 커스텀 아이콘
 * @param iconClassName : 아이콘 커스텀 클래스
 * @param iconColor : 아이콘 색상 (default | primary | danger | gray | black | white)
 * @param iconSize : 아이콘 크기 (xs | sm | md | md2 | lg | xl | 2xl)
 * @param ariaLabel : 접근성 라벨 (이전으로 이동 | 다음으로 이동)
 */

interface CarouselNavButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  slide: "prev" | "next";
  className?: string;
  customIcon?: UnifiedIconName;
  iconClassName?: string;
  iconColor?: VariantProps<typeof iconVariants>["color"];
  iconSize?: VariantProps<typeof iconVariants>["size"];
  ariaLabel?: string;
}

const CarouselNavButton = ({
  id,
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
      id={id}
      type={type}
      aria-label={ariaLabel ?? defaultLabel}
      className={cn(
        COMMON_BUTTON_STYLES,
        BUTTON_SHAPE_VARIANTS.round,
        BUTTON_STATE_VARIANTS.secondary,
        slide === "prev" ? "swiper-button-prev" : "swiper-button-next",
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

CarouselNavButton.displayName = "CarouselNavButton";

export default CarouselNavButton;

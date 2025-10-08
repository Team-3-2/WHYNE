"use client";

import Link from "next/link";
import type { LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Icon, { iconVariants } from "@/components/icon/icon";
import type { VariantProps } from "class-variance-authority";
import type { UnifiedIconName } from "@/components/icon/icon";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
  BUTTON_TEXT_COLOR_VARIANTS,
  ButtonState,
} from "./style";

/**
 * 링크 버튼 컴포넌트
 * @param href 이동 경로 (필수)
 * @param label 텍스트 레이블
 * @param icon 아이콘 이름
 * @param iconColor 아이콘 색상
 * @param iconSize 아이콘 크기
 * @param className 추가 스타일
 * @param children 버튼에 표시할 텍스트
 */

interface LinkButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  label?: string;
  icon?: UnifiedIconName;
  iconClassName?: string;
  iconColor?: VariantProps<typeof iconVariants>["color"];
  iconSize?: VariantProps<typeof iconVariants>["size"];
  className?: string;
  children?: ReactNode;
  variant?: ButtonState;
}

const LinkButton = ({
  href,
  label,
  icon,
  iconColor,
  iconSize,
  iconClassName,
  className,
  children,
  variant = "default",
  scroll = false,
  prefetch,
  replace,
  shallow,
  ...linkProps
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      scroll={scroll}
      prefetch={prefetch}
      replace={replace}
      shallow={shallow}
      className={cn(
        COMMON_BUTTON_STYLES,
        BUTTON_SHAPE_VARIANTS.default,
        BUTTON_STATE_VARIANTS[variant],
        BUTTON_TEXT_COLOR_VARIANTS[variant],
        className
      )}
      {...linkProps}
    >
      {icon && (
        <Icon
          icon={icon}
          className={iconClassName}
          color={iconColor ?? "default"}
          size={iconSize ?? "md"}
        />
      )}
      {children ?? label}
    </Link>
  );
};

export default LinkButton;

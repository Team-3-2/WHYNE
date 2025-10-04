import { Suspense, lazy, useMemo, ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import ICON_MAP from "./icon-map";
import STATIC_ICON_MAP from "./static-icon-map";

import type { IconName as DynamicIconName } from "./icon-map";
import type { StaticIconName } from "./static-icon-map";

export type UnifiedIconName = DynamicIconName | StaticIconName;

type IconPropsType = {
  icon: UnifiedIconName;
} & VariantProps<typeof iconVariants> &
  ComponentProps<"span">;

export const iconVariants = cva("inline-block", {
  variants: {
    color: {
      default: "",
      primary: "text-black",
      gray800: "text-gray-800",
      gray600: "text-gray-600",
      gray300: "text-gray-300",
      gray100: "text-gray-100",
      red100: "text-red-100",
      red200: "text-red-200",
      red300: "text-red-300",
      red400: "text-red-400",
      white: "text-white",
    },
    size: {
      xs: "ic-xs",
      sm: "ic-sm",
      md: "ic-md",
      md2: "ic-md2",
      lg: "ic-lg",
      xl: "ic-xl",
      "2xl": "ic-2xl",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

/**
 * 아이콘 컴포넌트
 * ICON_MAP : 동적 임포트 아이콘 맵 (default)
 * STATIC_ICON_MAP : 정적 임포트 아이콘 맵 (빠른 반응이 필요한 아이콘 분류)
 */

const Icon = ({ icon, color, size, className, ...props }: IconPropsType) => {
  const isStatic = icon in STATIC_ICON_MAP;
  const DynamicIconComponent = useMemo(() => {
    return lazy(ICON_MAP[icon as DynamicIconName]);
  }, [icon]);

  const StaticIconComponent = STATIC_ICON_MAP[icon as StaticIconName];

  const mergedClassName = cn(iconVariants({ color, size }), className);

  return (
    <span className={mergedClassName} {...props}>
      {isStatic ? (
        <StaticIconComponent width="100%" height="100%" />
      ) : (
        <Suspense fallback={null}>
          <DynamicIconComponent width="100%" height="100%" />
        </Suspense>
      )}
    </span>
  );
};

export default Icon;

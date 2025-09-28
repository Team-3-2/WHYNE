import { Suspense, lazy, useMemo, ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import ICON_MAP from "./icon-map";

const iconVariants = cva("inline-block", {
  variants: {
    color: {
      default: "",
      primary: "text-black",
      gray800: "text-gray-800",
      gray600: "text-gray-600",
      gray300: "text-gray-300",
      gray100: "text-gray-100",
      danger100: "text-red-100",
      danger200: "text-red-200",
      danger300: "text-red-300",
      danger400: "text-red-400",
      white: "text-white",
    },
    size: {
      xs: "ic-xs",
      sm: "ic-sm",
      md: "ic-md",
      "2md": "ic-2md",
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

type IconPropsType = {
  icon: keyof typeof ICON_MAP;
} & VariantProps<typeof iconVariants> &
  ComponentProps<"span">;

const Icon = ({ icon, color, size, className, ...props }: IconPropsType) => {
  const IconComponent = useMemo(() => lazy(ICON_MAP[icon]), [icon]);
  const mergeClassName = cn(iconVariants({ color, size }), className);

  return (
    <span className={mergeClassName} {...props}>
      <Suspense>
        <IconComponent {...({ width: "100%", height: "100%" } as any)} />
      </Suspense>
    </span>
  );
};

export default Icon;

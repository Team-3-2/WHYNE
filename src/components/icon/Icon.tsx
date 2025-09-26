import { Suspense, lazy, useMemo, ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import ICON_MAP from "./icon-map";

const iconVariants = cva("inline-block", {
  variants: {
    color: {
      default: "",
      primary: "text-primary",
      secondary: "text-secondary",
      danger100: "text-danger100",
      danger200: "text-danger200",
      gray: "text-gray800",
      black: "text-black",
      white: "text-white",
    },
    size: {
      xs: "ic-xs",
      sm: "ic-sm",
      md: "ic-md",
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

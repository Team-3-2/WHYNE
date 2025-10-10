import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components";
import type { UnifiedIconName } from "@/components";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
  BUTTON_TEXT_COLOR_VARIANTS,
  ButtonState,
} from "@/components/button/style";

interface EmptyStateProps {
  icon?: UnifiedIconName;
  iconClassName?: string;
  title: string;
  description: string;
  className?: string;
  actionLabel?: string;
  actionHref?: string;
  actionClassName?: string;
  variant?: ButtonState;
}

const EmptyState = ({
  icon = "EmptyStateIcon",
  iconClassName = "",
  title,
  description,
  className = "",
  actionLabel,
  actionHref,
  actionClassName = "",
  variant = "default",
}: EmptyStateProps) => (
  <div className={cn("flex-center w-full py-[80px]", className)}>
    <div>
      <Icon
        icon={icon}
        className={cn(
          "m-[0_auto_24px] block mobile:h-[100px] mobile:w-[100px]",
          "tablet:h-[136px] tablet:w-[136px]",
          "pc:h-[136px] pc:w-[136px]",
          iconClassName
        )}
      />
      <div className="text-center">
        <p className="text-heading-lg text-default">{title}</p>
        <p
          className={cn(
            "mt-[8px] !font-normal text-gray-400 mobile:text-body-sm",
            "tablet:mt-[12px] tablet:text-body-lg",
            "pc:mt-[12px] pc:text-body-lg"
          )}
        >
          {description}
        </p>
      </div>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className={cn(
            COMMON_BUTTON_STYLES,
            BUTTON_SHAPE_VARIANTS.default,
            BUTTON_STATE_VARIANTS[variant],
            BUTTON_TEXT_COLOR_VARIANTS[variant],
            "mt-[35px] block w-auto",
            actionClassName
          )}
        >
          {actionLabel}
        </Link>
      )}
    </div>
  </div>
);

export default EmptyState;

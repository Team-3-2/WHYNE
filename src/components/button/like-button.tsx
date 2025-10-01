import { cn } from "@/lib/utils";
import Button from "./basic-button";
import { ComponentProps } from "react";

interface LikeButtonProps extends ComponentProps<"button"> {
  isLike?: boolean;
  count?: number;
}

/**
 * 좋아요 버튼 컴포넌트
 * @author hwitae
 * @param isLike 좋아요 상태 true/false
 * @param count 좋아요 개수
 * @returns button
 */
const LikeButton = ({ isLike, count = 0, ...props }: LikeButtonProps) => {
  return (
    <Button
      icon={isLike ? "LikeOnIcon" : "LikeOffIcon"}
      appearance="outline"
      aria-label={isLike ? "좋아요" : "좋아요 취소"}
      aria-pressed={isLike}
      className={cn(
        "h-8 cursor-pointer gap-[2px] rounded-lg py-1 pl-2 pr-3",
        "tablet:h-8 tablet:gap-[2px]",
        "pc:h-9 pc:gap-[4px] pc:py-[6px] pc:pl-3 pc:pr-[14px]",
        isLike && "border border-red-200"
      )}
      iconClassName={cn("mobile:ic-sm", "tablet:ic-sm", "pc:ic-md")}
      iconColor={isLike ? "danger200" : "default"}
      {...props}
    >
      <span
        className={cn(
          "text-lg font-normal tracking-[-0.02em]",
          isLike ? "text-red-200" : "text-primary"
        )}
      >
        {count}
      </span>
    </Button>
  );
};

export default LikeButton;

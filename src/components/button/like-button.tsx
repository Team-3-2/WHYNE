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
const LikeButton = ({ isLike, count, ...props }: LikeButtonProps) => {
  return (
    <div>
      <Button
        icon={isLike ? "LikeOnIcon" : "LikeOffIcon"}
        appearance="outline"
        aria-label="좋아요버튼"
        className={cn(
          "cursor-pointer rounded-lg py-1 pl-2 pr-3",
          "mobile:h-8 mobile:gap-[2px]",
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
            "text-body-lg font-normal tracking-[-0.02em]",
            isLike && "text-lg text-red-200"
          )}
        >
          {count}
        </span>
      </Button>
    </div>
  );
};

export default LikeButton;

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import IconButton from "./icon-button";

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
const LikeButton = ({
  isLike = false,
  count = 0,
  ...props
}: LikeButtonProps) => {
  return (
    <IconButton
      icon={isLike ? "LikeOnIcon" : "LikeOffIcon"}
      aria-label={isLike ? "좋아요" : "좋아요 취소"}
      aria-pressed={isLike}
      className={cn(
        "h-6 w-6 cursor-pointer",
        "border-none hover:bg-inherit active:bg-inherit active:text-inherit",
        "tablet:h-6 tablet:w-6",
        "pc:h-6 pc:w-6",
        isLike && "border border-red-200"
      )}
      iconClassName={cn("mobile:ic-sm", "tablet:ic-sm", "pc:ic-md")}
      iconColor={isLike ? "red200" : "default"}
      {...props}
    />
  );
};

export default LikeButton;

"use client";

import { cn } from "@/lib/utils";
import type { Review } from "@/types/wine";
import ReviewItemHeader from "./wine-review-item/review-item-header";
import ReviewItemFooter from "./wine-review-item/review-item-footer";

interface WineReviewItemProps {
  review: Review;
  wineId: number;
  currentUserId?: number;
  isFirst?: boolean;
}

const WineReviewItem = ({
  review,
  wineId,
  currentUserId,
  isFirst = false,
}: WineReviewItemProps) => (
  <article
    className={cn(
      "flex w-full select-none flex-col gap-6 py-8",
      "tablet:gap-8 tablet:py-10",
      "pc:gap-6 pc:py-8",
      !isFirst && "border-t border-gray-300"
    )}
    aria-label={`${review.user.nickname}님의 리뷰`}
  >
    <ReviewItemHeader
      review={review}
      wineId={wineId}
      currentUserId={currentUserId}
    />

    <p className="whitespace-pre-wrap break-keep text-body-md leading-relaxed tracking-[-0.02em] text-gray-900">
      {review.content}
    </p>

    <ReviewItemFooter review={review} />
  </article>
);

export default WineReviewItem;

"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import LikeButton from "@/components/button/like-button";
import WineTaste from "@/components/wine-taste/wine-taste";
import { getTasteDescription } from "@/components/wine-taste";
import type { TasteData } from "@/components/wine-taste";
import type { GaugeLevel } from "@/components/gauge/block-gauge";
import type { Review } from "@/types/wine";
import WineReviewRating from "./wine-review-rating";

interface WineReviewItemProps {
  review: Review;
  isFirst?: boolean;
}

export default function WineReviewItem({
  review,
  isFirst = false,
}: WineReviewItemProps) {
  const [isLike, setIsLike] = useState(review.isLiked);

  const tastes: TasteData[] = [
    {
      type: "바디감",
      data: review.lightBold as GaugeLevel,
      taste: getTasteDescription("바디감", review.lightBold as GaugeLevel),
    },
    {
      type: "탄닌",
      data: review.smoothTannic as GaugeLevel,
      taste: getTasteDescription("탄닌", review.smoothTannic as GaugeLevel),
    },
    {
      type: "당도",
      data: review.drySweet as GaugeLevel,
      taste: getTasteDescription("당도", review.drySweet as GaugeLevel),
    },
    {
      type: "산미",
      data: review.softAcidic as GaugeLevel,
      taste: getTasteDescription("산미", review.softAcidic as GaugeLevel),
    },
  ];

  // TODO: 좋아요 개수 API 없음 - 백엔드 확인 필요
  // 임시로 0으로 표시
  const likeCount = 0;

  return (
    <div
      className={cn(
        "flex flex-col gap-[51px] py-[16px] pb-[28px] pt-[39px]",
        "tablet:gap-[54px]",
        "pc:gap-[50px] pc:py-[40px]",
        !isFirst && "border-t border-gray-300"
      )}
    >
      <div className="flex w-full flex-col items-start justify-center gap-8 px-[14px]">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <WineReviewRating
            rating={review.rating}
            createdAt={review.createdAt}
            user={review.user}
          />

          <p className="w-full text-body-md tracking-[-0.02em] text-gray-900">
            {review.content}
          </p>
        </div>

        <WineTaste type="review" tastes={tastes} />
      </div>

      {/* 좋아요 버튼 - 개수는 0으로 임시 표시 */}
      <LikeButton
        count={likeCount}
        isLike={isLike}
        onClick={() => setIsLike(!isLike)}
      />
    </div>
  );
}

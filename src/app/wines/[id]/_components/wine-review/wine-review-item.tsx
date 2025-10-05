// app/wines/[id]/_components/reviews/wine-review-item.tsx
"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import LikeButton from "@/components/button/like-button";
import WineTaste from "@/components/wine-taste/wine-taste";
import Icon from "@/components/icon/icon";
import { getTasteDescription } from "@/components/wine-taste";
import { aromaMap } from "@/components/flavor/aroma-map";
import type { TasteData } from "@/components/wine-taste";
import type { GaugeLevel } from "@/components/gauge/block-gauge";
import type { Review } from "@/types/wine";
import type { AromaKey } from "@/types/AromaType";
import WineReviewRating from "./wine-review-rating";
import StarRating from "@/components/star-rating/star-rating";

interface WineReviewItemProps {
  review: Review;
  isFirst?: boolean;
}

// AromaKey를 IconName으로 매핑
function getAromaIconName(aroma: AromaKey): string {
  const iconMap: Record<AromaKey, string> = {
    CHERRY: "CherryIcon",
    BERRY: "BerryIcon",
    OAK: "OakIcon",
    VANILLA: "VanillaIcon",
    PEPPER: "PepperIcon",
    BAKING: "BakingIcon",
    GRASS: "GrassIcon",
    APPLE: "AppleIcon",
    PEACH: "PeachIcon",
    CITRUS: "CitrusIcon",
    TROPICAL: "TropicalIcon",
    MINERAL: "MineralIcon",
    FLOWER: "FlowerIcon",
    TOBACCO: "TobaccoIcon",
    EARTH: "EarthIcon",
    CHOCOLATE: "ChocolateIcon",
    SPICE: "SpiceIcon",
    CARAMEL: "CaramelIcon",
    LEATHER: "LeatherIcon",
    EMPTY: "WineIcon", // fallback
  };
  return iconMap[aroma] || "WineIcon";
}

export default function WineReviewItem({
  review,
  isFirst = false,
}: WineReviewItemProps) {
  const initialIsLiked =
    typeof review.isLiked === "boolean" ? review.isLiked : false;
  const [isLike, setIsLike] = useState(initialIsLiked);

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

  const likeCount = 24;

  return (
    <div
      className={cn(
        "flex flex-col gap-6 px-4 py-8",
        "tablet:gap-8 tablet:py-10",
        "pc:gap-6 pc:py-8",
        !isFirst && "border-t border-gray-300"
      )}
    >
      {/* 1. 별점 (최상단) */}
      <div className="flex items-center">
        <StarRating rating={review.rating} size="sm" />
      </div>

      {/* 2. 프로필 + 닉네임 + 시간 */}
      <WineReviewRating createdAt={review.createdAt} user={review.user} />

      {/* 3. 향 정보 */}
      {review.aroma && review.aroma.length > 0 && (
        <div className="flex flex-wrap items-center gap-1">
          {review.aroma.map((aroma, index) => {
            const aromaInfo = aromaMap[aroma];
            if (!aromaInfo) return null;

            return (
              <div key={aroma} className="flex items-center">
                <div className="flex items-center gap-3 px-1">
                  <Icon
                    icon={getAromaIconName(aroma) as any}
                    size="sm"
                    className="text-gray-700"
                  />
                  <span className="text-body-sm text-gray-500">
                    {aromaInfo.label}
                  </span>
                </div>
                {index < review.aroma.length - 1 && (
                  <span className="text-gray-300">•</span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 4. 리뷰 내용 */}
      <p className="text-body-md leading-relaxed tracking-[-0.02em] text-gray-900">
        {review.content}
      </p>

      {/* 5. 맛 평가 */}
      <WineTaste type="review" tastes={tastes} />

      {/* 6. 좋아요 버튼 */}
      <LikeButton
        count={likeCount}
        isLike={isLike}
        onClick={() => setIsLike(!isLike)}
      />
    </div>
  );
}

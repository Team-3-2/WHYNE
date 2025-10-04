// app/wines/[id]/_components/wine-header.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import StarRating from "@/components/star-rating/star-rating";
import type { WineDetail } from "@/types/wine";

interface WineHeaderProps {
  wine: WineDetail;
}

export default function WineHeader({ wine }: WineHeaderProps) {
  const [imageError, setImageError] = useState(false);
  const hasImage =
    wine.image && (wine.image.startsWith("http") || wine.image.startsWith("/"));

  return (
    <div
      className={cn(
        "mx-auto flex gap-8 px-4 py-8",
        "tablet:px-8",
        "pc:max-w-7xl pc:px-16"
      )}
    >
      {/* 와인 이미지 */}
      <div
        className={cn(
          "flex-center flex-shrink-0 rounded-lg bg-gray-100",
          "h-[180px] w-[120px]",
          "tablet:h-[220px] tablet:w-[140px]",
          "pc:h-[360px] pc:w-[362px]"
        )}
      >
        {hasImage && !imageError ? (
          <img
            src={wine.image}
            alt={wine.name}
            className="h-full w-full object-contain p-3"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex-col-center gap-2 text-gray-400">
            <span className="text-xs">이미지 준비중</span>
          </div>
        )}
      </div>

      {/* 와인 정보 */}
      <div className="flex flex-1 flex-col gap-4">
        {/* 평점 + 후기 개수 */}
        <div className="flex items-center gap-3">
          <StarRating rating={wine.avgRating} maxRating={5} size="sm" />
          <span className="text-body-sm text-gray-500">
            {wine.reviewCount}개의 후기
          </span>
        </div>

        {/* 와인명 */}
        <h1 className="text-title-page-sm font-bold text-gray-900">
          {wine.name}
        </h1>

        {/* 지역 */}
        <p className="text-body-md text-gray-600">{wine.region}</p>

        {/* 가격 */}
        <div className="text-heading-lg text-gray-900">
          {wine.price.toLocaleString()}원
        </div>

        {/* 썸네일 */}
        {hasImage && !imageError && (
          <div className="mt-2 flex gap-2">
            <div className="h-14 w-10 overflow-hidden rounded border border-gray-300">
              <img
                src={wine.image}
                alt={`${wine.name} 썸네일`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

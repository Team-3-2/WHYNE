// app/wines/[id]/_components/wine-detail-content.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { getWine } from "@/api/wines/get-wine";
import { cn } from "@/lib/utils";
import WineHeader from "../wine-header/wine-header";
import WineTasteSection from "../wine-taste/wine-taste-section";
import FlavorSection from "../wine-flavor/wine-flavor-section";
import ReviewSection from "../wine-review/wine-review-section";
import WineDetailSkeleton from "./wine-detail-skeleton";

interface WineDetailContentProps {
  wineId: number;
}

export default function WineDetailContent({ wineId }: WineDetailContentProps) {
  const { data: wine, isLoading } = useQuery({
    queryKey: ["wine", wineId],
    queryFn: () => getWine(wineId),
  });

  if (isLoading) return <WineDetailSkeleton />;

  if (!wine) {
    return (
      <div className="flex-center min-h-screen">
        <p className="text-body-lg text-gray-500">와인을 찾을 수 없습니다.</p>
      </div>
    );
  }

  // app/wines/[id]/_components/wine-detail-content.tsx

  return (
    <main className="min-h-screen bg-white">
      {/* 1. 와인 헤더 */}
      <section
        className={cn(
          "rounded-b-[88px] bg-[rgba(217,217,217,0.2)]",
          "pt-[60px] tablet:pt-[70px] pc:pt-[70px]"
        )}
      >
        <WineHeader wine={wine} />
      </section>

      {/* 2. 맛/향 섹션 */}
      {wine.reviews.length > 0 && (
        <section className="bg-white pb-6 pt-12">
          {" "}
          {/* py-12 → pt-12 pb-6 */}
          <div
            className={cn(
              "mx-auto flex px-4",
              "tablet:px-8",
              "pc:max-w-7xl pc:px-16",
              "flex-col gap-12 tablet:gap-16",
              "pc:flex-row pc:items-start pc:justify-start pc:gap-44"
            )}
          >
            <div className="pc:flex-1">
              <WineTasteSection
                reviews={wine.reviews}
                reviewCount={wine.reviewCount}
              />
            </div>

            <div className="pc:flex-1">
              <FlavorSection
                reviews={wine.reviews}
                reviewCount={wine.reviewCount}
              />
            </div>
          </div>
        </section>
      )}

      {/* 3. 리뷰 섹션 */}
      <section className="bg-white pb-12 pt-6">
        <div className={cn("mx-auto px-4 tablet:px-8 pc:max-w-7xl pc:px-16")}>
          <div className="mb-6 w-full border-t border-gray-300" />
          <ReviewSection
            reviews={wine.reviews}
            avgRating={wine.avgRating}
            avgRatings={wine.avgRatings}
            isLoading={isLoading}
          />
        </div>
      </section>
    </main>
  );
}

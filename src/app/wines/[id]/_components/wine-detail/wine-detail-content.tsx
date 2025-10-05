"use client";

import { useQuery } from "@tanstack/react-query";
import { getWine } from "@/api/wines/get-wine";
import WineHeader from "../wine-header/wine-header";
import WineTasteSection from "../wine-taste/wine-taste-section";
import FlavorSection from "../wine-flavor/wine-flavor-section";
import ReviewSection from "../wine-review/wine-review-section";
import WineDetailSkeleton from "./wine-detail-skeleton";
import instance from "@/lib/axios";
import { useEffect, useState } from "react";

interface WineDetailContentProps {
  wineId: number;
}

export default function WineDetailContent({ wineId }: WineDetailContentProps) {
  const [currentUserId, setCurrentUserId] = useState<number | undefined>();

  const { data: wine, isLoading } = useQuery({
    queryKey: ["wine", wineId],
    queryFn: () => getWine(wineId),
  });

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await instance.get("/users/me");
        setCurrentUserId(response.data.id);
      } catch (error) {
        console.error("사용자 정보 가져오기 실패:", error);
        setCurrentUserId(undefined);
      }
    };

    fetchCurrentUser();
  }, []);

  if (isLoading) return <WineDetailSkeleton />;

  if (!wine) {
    return (
      <div className="flex-center min-h-screen">
        <p className="text-body-lg text-gray-500">와인을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 */}
      <section className="rounded-b-[88px] bg-[rgba(217,217,217,0.2)] pt-[60px] tablet:pt-[70px] pc:pt-[70px]">
        <WineHeader wine={wine} />
      </section>

      {/* 맛/향 섹션 */}
      <section className="bg-white px-4 pt-4 tablet:px-8 tablet:pb-4 tablet:pt-12 pc:px-16 pc:pb-6 pc:pt-12">
        <div className="mx-auto flex flex-col gap-8 tablet:gap-12 pc:max-w-7xl pc:flex-row pc:gap-44">
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

      {/* 리뷰 섹션 */}
      <section className="bg-white px-4 pb-12 pt-6 tablet:px-8 tablet:pt-12 pc:px-16 pc:pt-12">
        <div className="mx-auto pc:max-w-7xl">
          <div className="mb-6 w-full border-t border-gray-300" />
          <ReviewSection
            reviews={wine.reviews}
            avgRating={wine.avgRating}
            avgRatings={wine.avgRatings}
            isLoading={isLoading}
            wineId={wineId}
            currentUserId={currentUserId}
          />
        </div>
      </section>
    </main>
  );
}

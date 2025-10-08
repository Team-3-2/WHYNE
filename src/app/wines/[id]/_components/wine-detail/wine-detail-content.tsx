"use client";

import { useQuery } from "@tanstack/react-query";
import { getWine } from "@/api/wines/get-wine";
import WineHeader from "../wine-header/wine-header";
import WineTasteSection from "../wine-taste/wine-taste-section";
import FlavorSection from "../wine-flavor/wine-flavor-section";
import ReviewSection from "../wine-review/wine-review-section";
import ReviewFormErrorState from "../wine-review-form/review-form-error-state";
import Loader from "@/components/loader/loader";
import instance from "@/lib/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface WineDetailContentProps {
  wineId: number;
}

const WineDetailContent = ({ wineId }: WineDetailContentProps) => {
  const router = useRouter();

  const [currentUserId, setCurrentUserId] = useState<number | undefined>();

  const { data: wine, isLoading } = useQuery({
    queryKey: ["wine", wineId],
    queryFn: () => getWine(wineId),
  });

  const handleCancel = () => {
    router.replace(`/`);
  };
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await instance.get("/users/me");
        setCurrentUserId(response.data.id);
      } catch {
        setCurrentUserId(undefined);
      }
    };

    fetchCurrentUser();
  }, []);

  if (isLoading) return <Loader />;

  if (!wine) {
    return <ReviewFormErrorState onRetry={handleCancel} />;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 */}
      <section className="rounded-b-none bg-[rgba(217,217,217,0.2)] pt-[60px] tablet:rounded-b-none tablet:pt-[70px] pc:rounded-b-[88px] pc:pt-[70px]">
        <WineHeader wine={wine} />
      </section>

      {/* 맛/향 섹션 */}
      <section className="bg-white pb-0 pt-6 tablet:pb-0 tablet:pt-16 pc:pb-12 pc:pt-16">
        <div className="container">
          <div className="flex flex-col gap-8 tablet:gap-20 pc:flex-row pc:gap-32">
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
        </div>
      </section>

      {/* 구분선 */}
      <div className="bg-white">
        <div className="container">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>

      {/* 리뷰 섹션 */}
      <section className="bg-white pb-12 pt-14 tablet:pt-14 pc:pt-14">
        <div className="container">
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
};

export default WineDetailContent;

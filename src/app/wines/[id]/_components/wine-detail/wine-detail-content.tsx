"use client";

import { useQuery } from "@tanstack/react-query";
import getCurrentUser from "@/api/user/get-current-user";
import WineHeader from "../wine-header/wine-header";
import ReviewFormErrorState from "../wine-state/review-error-state";
import Loader from "@/components/loader/loader";
import { useRouter } from "next/navigation";
import useWineQuery from "@/hooks/api/wines/use-wine-query";
import WineTasteSection from "../wine-taste/wine-taste-section";
import FlavorSection from "../wine-flavor/wine-flavor-section";
import ReviewSection from "../wine-review/wine-review-section";

interface WineDetailContentProps {
  wineId: number;
}

const WineDetailContent = ({ wineId }: WineDetailContentProps) => {
  const router = useRouter();

  const { data: wine, isLoading, isError } = useWineQuery(wineId);

  const { data: currentUser } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: 1,
  });

  const currentUserId = currentUser?.id;

  const handleGoHome = () => {
    router.replace(`/`);
  };

  if (isLoading) return <Loader />;

  if (isError || !wine) {
    return <ReviewFormErrorState onRetry={handleGoHome} />;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 */}
      <section className="rounded-b-none pt-[60px] tablet:rounded-b-none tablet:pt-[70px] pc:rounded-b-[88px] pc:pt-[70px]">
        <WineHeader wine={wine} />
      </section>

      {/* 맛/향 섹션 */}
      <section className="mb-0 mt-12 bg-white tablet:mb-0 tablet:mt-16 pc:mb-12 pc:mt-16">
        <div className="container">
          <div className="flex flex-col gap-12 tablet:gap-20 pc:flex-row pc:gap-32">
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
      <div className="container">
        <hr className="mt-[-5px] border-t border-gray-300 tablet:mt-0 pc:mt-0" />
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

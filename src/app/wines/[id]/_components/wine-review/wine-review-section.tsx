// app/wines/[id]/_components/wine-review/wine-review-section.tsx
import RatingDistribution from "@/components/rating/rating-distribution";
import WineReviewItem from "./wine-review-item";
import Button from "@/components/button/basic-button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Review } from "@/types/wine";

interface ReviewSectionProps {
  reviews: Review[];
  avgRating: number;
  avgRatings: {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
  };
  isLoading: boolean;
  wineId: number;
  currentUserId?: number;
}

export default function ReviewSection({
  reviews,
  avgRating,
  avgRatings,
  isLoading,
  wineId,
  currentUserId,
}: ReviewSectionProps) {
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex-center rounded-lg bg-white p-12">
        <p className="text-body-md text-gray-500">리뷰를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* 리뷰가 없을 때 */}
      {reviews.length === 0 ? (
        <div className="flex-col-center py-16 tablet:py-20">
          <div className="flex-center mb-4 h-20 w-20 rounded-full bg-gray-200 tablet:mb-6 tablet:h-24 tablet:w-24">
            <span className="text-4xl font-bold text-gray-500 tablet:text-5xl">
              !
            </span>
          </div>
          <p className="mb-4 text-body-sm text-gray-500 tablet:mb-6 tablet:text-body-lg">
            작성된 리뷰가 없어요
          </p>
          <Button
            label="리뷰 남기기"
            onClick={() => router.push(`/wines/${wineId}/write`)}
            className="h-[42px] w-[240px] tablet:h-[50px] tablet:w-[283px]"
          />
        </div>
      ) : (
        <>
          {/* 모바일/태블릿: 평점 분포 (상단) */}
          <div
            className={cn(
              "z-10 block bg-white pt-8",
              "tablet:sticky tablet:top-[70px] tablet:block tablet:h-fit",
              "pc:hidden"
            )}
          >
            <RatingDistribution
              average={avgRating}
              distribution={avgRatings}
              wineId={wineId}
            />
          </div>

          {/* PC: 그리드 레이아웃 (리뷰 목록 + 평점 분포) */}
          <div
            className={cn(
              "flex flex-col gap-8",
              "pc:grid pc:grid-cols-[1fr_280px]"
            )}
          >
            {/* 리뷰 목록 */}
            <div className="w-full">
              {/* 리뷰 목록 타이틀 */}
              <div className="mb-4 mt-8 flex items-center gap-3 tablet:mb-6 tablet:mt-12 pc:mt-12">
                <h2 className="text-heading-lg text-gray-900 tablet:text-heading-lg pc:text-heading-lg">
                  리뷰 목록
                </h2>
                <span className="text-body-md text-gray-500 tablet:text-body-md pc:text-body-md">
                  {reviews.length.toLocaleString()}개
                </span>
              </div>

              {/* 리뷰 아이템들 */}
              <div className="space-y-3 tablet:space-y-4">
                {reviews.map((review, index) => (
                  <WineReviewItem
                    key={review.id}
                    review={review}
                    isFirst={index === 0}
                    currentUserId={currentUserId}
                  />
                ))}
              </div>
            </div>

            {/* PC: 평점 분포 (오른쪽 사이드) */}
            <div
              className={cn(
                "hidden",
                "pc:sticky pc:top-[70px] pc:block pc:h-fit pc:pt-8"
              )}
            >
              <RatingDistribution
                average={avgRating}
                distribution={avgRatings}
                wineId={wineId}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

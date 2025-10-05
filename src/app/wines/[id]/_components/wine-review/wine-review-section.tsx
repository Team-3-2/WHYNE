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
    <div
      className={cn(
        reviews.length === 0
          ? "flex flex-col"
          : "flex flex-col gap-8 pc:grid pc:grid-cols-[1fr_280px]"
      )}
    >
      <div className="w-full">
        {/* 리뷰 목록 타이틀 */}
        {reviews.length > 0 && (
          <div className="mb-4 mt-8 flex items-center gap-3 tablet:mb-6 tablet:mt-12">
            <h2 className="text-lg font-bold text-gray-900 tablet:text-heading-lg">
              리뷰 목록
            </h2>
            <span className="text-body-sm text-gray-500 tablet:text-body-md">
              {reviews.length.toLocaleString()}개
            </span>
          </div>
        )}

        {/* 리뷰 없을 때 */}
        {reviews.length === 0 ? (
          <div className="flex-col-center py-16 tablet:py-20">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 tablet:mb-6 tablet:h-24 tablet:w-24">
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
        )}
      </div>

      {/* 평점 분포 */}
      {reviews.length > 0 && (
        <div className="mt-8 tablet:mt-0 pc:sticky pc:top-24 pc:h-fit">
          <RatingDistribution
            average={avgRating}
            distribution={avgRatings}
            wineId={wineId}
          />
        </div>
      )}
    </div>
  );
}

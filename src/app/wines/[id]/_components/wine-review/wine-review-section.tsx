import RatingDistribution from "@/components/rating/rating-distribution";
import WineReviewItem from "./wine-review-item";
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
  currentUserId, // ✅ 받기
}: ReviewSectionProps) {
  if (isLoading) {
    return (
      <div className="flex-center rounded-lg bg-white p-12">
        <p className="text-body-md text-gray-500">리뷰를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 pc:grid-cols-[1fr_280px]">
      <div>
        <div className="mb-6 mt-12 flex items-center gap-4">
          <h2 className="text-heading-lg text-gray-900">리뷰 목록</h2>
          <span className="text-body-md text-gray-500">
            {reviews.length.toLocaleString()}개
          </span>
        </div>

        {reviews.length === 0 ? (
          <div className="flex-center rounded-lg bg-white p-12">
            <p className="text-body-lg text-gray-500">
              아직 리뷰가 없습니다. 첫 리뷰를 작성해보세요!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
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

      <div className="pc:sticky pc:top-24 pc:h-fit">
        <RatingDistribution
          average={avgRating}
          distribution={avgRatings}
          wineId={wineId}
        />
      </div>
    </div>
  );
}

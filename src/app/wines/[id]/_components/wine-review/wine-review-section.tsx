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
}

export default function ReviewSection({
  reviews,
  avgRating,
  avgRatings,
  isLoading,
}: ReviewSectionProps) {
  if (isLoading) {
    return (
      <div className="flex-center rounded-lg bg-white p-12">
        <p className="text-body-md text-gray-500">리뷰를 불러오는 중...</p>
      </div>
    );
  }

  // app/wines/[id]/_components/review-section.tsx

  return (
    <div className="grid gap-8 pc:grid-cols-[1fr_280px]">
      {/* 왼쪽: 리뷰 목록 */}
      <div>
        {/* 리뷰 목록 타이틀 */}
        <div className="mb-6 mt-12 flex items-center gap-4">
          <h2 className="text-heading-lg text-gray-900">리뷰 목록</h2>
          <span className="text-body-md text-gray-500">
            {reviews.length.toLocaleString()}개
          </span>
        </div>

        {/* 리뷰 목록 */}
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
              />
            ))}
          </div>
        )}
      </div>

      {/* 오른쪽: 평점 분포 */}
      <div className="pc:sticky pc:top-24 pc:h-fit">
        <RatingDistribution average={avgRating} distribution={avgRatings} />
      </div>
    </div>
  );
}

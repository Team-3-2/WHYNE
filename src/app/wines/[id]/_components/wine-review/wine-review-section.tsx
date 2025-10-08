import RatingDistribution from "@/components/rating/rating-distribution";
import WineReviewItem from "./wine-review-item";
import ReviewEmptyState from "./review-empty-state";
import ReviewListHeader from "./wine-review-list-header";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Review } from "@/types/wine";
import Loader from "@/components/loader/loader";

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

const ReviewSection = ({
  reviews,
  avgRating,
  avgRatings,
  isLoading,
  wineId,
  currentUserId,
}: ReviewSectionProps) => {
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex-center rounded-lg bg-white p-12">
        <Loader />
      </div>
    );
  }

  // 리뷰가 없을 때
  if (reviews.length === 0) return <ReviewEmptyState wineId={wineId} />;

  // 리뷰가 있을 때
  return (
    <div>
      {/* 모바일/태블릿: 평점 분포 */}
      <div
        className={cn(
          "mb-12",
          "tablet:sticky tablet:top-[70px] tablet:z-10 tablet:mb-8 tablet:bg-white tablet:pb-4 tablet:pt-4",
          "pc:hidden"
        )}
      >
        <RatingDistribution
          average={avgRating}
          distribution={avgRatings}
          wineId={wineId}
        />
      </div>

      {/* PC: 그리드 레이아웃 (타이틀부터 시작) */}
      <div className="flex flex-col pc:grid pc:grid-cols-[1fr_280px] pc:gap-x-8">
        {/* 왼쪽 영역: 리뷰 목록 타이틀 + 리뷰들 */}
        <div>
          {/* 리뷰 목록 타이틀 */}
          <ReviewListHeader totalCount={reviews.length} />

          {/* 리뷰 목록 */}
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

        {/* 오른쪽 영역: PC 평점 분포 (sticky) */}
        <div className="hidden pc:sticky pc:top-[70px] pc:block pc:h-fit">
          <RatingDistribution
            average={avgRating}
            distribution={avgRatings}
            wineId={wineId}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

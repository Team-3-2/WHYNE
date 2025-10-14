"use client";
import { cn } from "@/lib/utils";
import Rating from "./rating";
import RatingBar from "./rating-bar-item";
import LinkButton from "@/components/button/link-button";

/**
 * 평점 분포 컴포넌트
 * @param average 평균 별점
 * @param maxRating 최대 별점 (기본값: 5)
 * @param distribution 별점 : 해당 별점을 받은 리뷰 수
 * @param wineId 와인 ID (리뷰 작성 페이지 이동용)
 */

interface RatingDistributionProps {
  average: number; //평균 별점
  maxRating?: number; //최대 별점 (기본값: 5)
  distribution: Record<number, number>; // 별점 : 해당 별점을 받은 리뷰 수
  wineId: number; // 와인 ID (리뷰 작성 페이지 이동용)
}

const RatingDistribution = ({
  average,
  maxRating = 5,
  distribution,
  wineId,
}: RatingDistributionProps) => {
  const reviewCounts = Object.values(distribution);
  const totalReviews = reviewCounts.reduce((total, count) => total + count, 0);

  return (
    <div className="relative grid gap-y-[24px] pc:gap-y-[40px]">
      <div
        className={cn(
          "grid grid-cols-[110px_auto] items-center gap-x-[20px]",
          "tablet:grid-cols-[280px_auto] tablet:items-start tablet:gap-x-[77px]",
          "pc:grid pc:grid-cols-[auto] pc:items-start pc:gap-x-0 pc:gap-y-[40px]"
        )}
      >
        <div>
          <Rating rating={average} size="md2" showRatingRatio />
        </div>
        <div
          className={cn(
            "grid gap-y-[2px]",
            "tablet:gap-y-[4px]",
            "pc:gap-y-[8px]"
          )}
        >
          {Array.from({ length: maxRating }).map((_, i) => {
            const showRating = maxRating - i;
            const count = distribution[showRating] ?? 0;
            return (
              <RatingBar
                key={showRating}
                showRating={showRating}
                reviewCount={count}
                totalCount={totalReviews}
              />
            );
          })}
        </div>
      </div>
      <LinkButton
        href={`/reviews/${wineId}/write`}
        scroll={false}
        label="리뷰 남기기"
        className={cn(
          "w-full",
          "tablet:absolute tablet:bottom-[-10px] tablet:mt-0 tablet:w-[280px]"
        )}
      />
    </div>
  );
};

export default RatingDistribution;

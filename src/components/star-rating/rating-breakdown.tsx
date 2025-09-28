"use client";

import StarRating from "./star-rating";
import ScoreBar from "./scorebar";

interface RatingBreakdownProps {
  average: number;
  maxRating?: number;
  distribution: Record<number, number>; // 별점 : 해당 별점을 받은 리뷰 수
}

const RatingBreakdown = ({
  average,
  maxRating = 5,
  distribution,
}: RatingBreakdownProps) => {
  const reviewCounts = Object.values(distribution);
  const totalReviews = reviewCounts.reduce((total, count) => total + count, 0);

  return (
    <div className="relative">
      <div className="flex mobile:items-center tablet:flex-row tablet:items-start pc:grid">
        <div className="flex-1">
          <StarRating rating={average} size="md2" totalScore />
        </div>
        <div className="flex-1">
          {[...Array(maxRating)].map((_, i) => {
            const score = maxRating - i;
            const count = distribution[score] ?? 0;
            return (
              <ScoreBar
                key={score}
                score={score}
                reviewCount={count}
                totalCount={totalReviews}
              />
            );
          })}
        </div>
      </div>
      <button
        onClick={() => {}}
        className="top-[80px] w-full tablet:absolute tablet:w-auto"
      >
        리뷰 남기기
      </button>
    </div>
  );
};

export default RatingBreakdown;

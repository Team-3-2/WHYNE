"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import RatingDistribution from "@/components/rating/rating-distribution";
import ReviewListHeader from "./wine-review-list-header";
import WineReviewItem from "./wine-review-item";
import ReviewEmptyState from "../wine-state/review-empty-state";
import Loader from "@/components/loader/loader";
import Button from "@/components/button/basic-button";
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

const REVIEW_PIECES = 5;

const ReviewSection = ({
  reviews,
  avgRating,
  avgRatings,
  isLoading,
  wineId,
  currentUserId,
}: ReviewSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(REVIEW_PIECES, reviews.length)
  );

  const visibleReviews = reviews.slice(0, visibleCount);

  const hasMore =
    reviews.length > REVIEW_PIECES && visibleCount < reviews.length;

  const prevLengthRef = useRef(reviews.length);

  useEffect(() => {
    const prevLength = prevLengthRef.current;

    if (reviews.length > prevLength) {
      setVisibleCount(Math.min(REVIEW_PIECES, reviews.length));
    } else if (reviews.length < prevLength) {
      setVisibleCount((prev) => Math.min(prev, reviews.length));
    }

    prevLengthRef.current = reviews.length;
  }, [reviews.length]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + REVIEW_PIECES, reviews.length));
  };

  if (isLoading) {
    return (
      <div className="flex-center rounded-lg bg-white p-12">
        <Loader />
      </div>
    );
  }

  if (reviews.length === 0) return <ReviewEmptyState wineId={wineId} />;

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

      {/* PC: 그리드 레이아웃 */}
      <div
        className={cn(
          "flex flex-col",
          "pc:grid pc:grid-cols-[1fr_280px] pc:gap-x-8"
        )}
      >
        {/* 왼쪽: 리뷰 목록 */}
        <div>
          <ReviewListHeader totalCount={reviews.length} />

          <div className="space-y-3 tablet:space-y-4">
            {visibleReviews.map((review, index) => (
              <WineReviewItem
                key={review.id}
                review={review}
                isFirst={index === 0}
                currentUserId={currentUserId}
                wineId={wineId}
              />
            ))}
          </div>

          {/* 더보기 버튼 */}
          {hasMore && (
            <div className="mt-8 flex justify-center">
              <Button
                label={"더보기"}
                variant="default"
                onClick={handleLoadMore}
              />
            </div>
          )}
        </div>

        {/* 오른쪽: PC 평점 분포 */}
        <div
          className={cn("hidden", "pc:sticky pc:top-[70px] pc:block pc:h-fit")}
        >
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

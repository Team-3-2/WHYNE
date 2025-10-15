"use client";
import { cn } from "@/lib/utils";
import { Card, EmptyState } from "@/components";
import CardSkeleton from "@/components/card/card-skeleton";
import { Wine } from "@/types/wine";

interface WineListProps {
  wine: Wine[];
  isLoading: boolean;
}

const WineList = ({ wine, isLoading }: WineListProps) => {
  if (isLoading) {
    return (
      <div
        className={cn(
          "grid w-full gap-y-[48px]",
          "tablet:grid-cols-2 tablet:gap-x-[16px]",
          "pc:grid-cols-2 pc:gap-x-[61px] pc:gap-y-[64px]"
        )}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} showReview />
        ))}
      </div>
    );
  }

  if (wine.length === 0) {
    return (
      <EmptyState
        icon="EmptyStateIcon"
        title="아직 아무도 모르는 와인이네요!"
        description="지금 등록해서 다른 사람들에게 첫 번째로 소개해보세요"
      />
    );
  }

  return (
    <div
      className={cn(
        "grid w-full gap-y-[48px]",
        "tablet:grid-cols-2 tablet:gap-x-[16px]",
        "pc:grid-cols-2 pc:gap-x-[61px] pc:gap-y-[64px]"
      )}
    >
      {wine.map((wine) => (
        <div key={wine.id}>
          <Card
            image={wine.image}
            avgRating={wine.avgRating}
            reviewCount={wine.reviewCount}
            name={wine.name}
            region={wine.region}
            recentReview={wine.recentReview ?? null}
            href={`/wines/${wine.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default WineList;

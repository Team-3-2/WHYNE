"use client";
import { Card, EmptyState } from "@/components";
import { Wine } from "@/types/wine";

interface WineListProps {
  wine: Wine[];
  isLoading: boolean;
}

const WineList = ({ wine, isLoading }: WineListProps) => {
  if (isLoading) {
    return;
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
    <>
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
    </>
  );
};

export default WineList;

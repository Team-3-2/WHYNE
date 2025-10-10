"use client";
import { Card } from "@/components";
import { Wine } from "@/types/wine";

interface WineListProps {
  wine: Wine[];
}

const WineList = ({ wine }: WineListProps) => {
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

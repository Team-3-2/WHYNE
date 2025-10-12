import Flavor from "@/components/flavor/flavor";
import type { AromaKey } from "@/types/aroma-type";
import type { Review } from "@/types/wine";
import { cn } from "@/lib/utils";

interface FlavorSectionProps {
  reviews: Review[];
  reviewCount: number;
}

const getTopAromas = (reviews: Review[]): AromaKey[] => {
  const aromaCount = new Map<AromaKey, number>();

  reviews.forEach((review) => {
    review.aroma.forEach((aroma) => {
      aromaCount.set(aroma, (aromaCount.get(aroma) || 0) + 1);
    });
  });

  const sortedAromas = Array.from(aromaCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([aroma]) => aroma);

  return sortedAromas;
};

const FlavorSection = ({ reviews, reviewCount }: FlavorSectionProps) => {
  const topAromas = getTopAromas(reviews);

  const displayAromas: AromaKey[] = [...topAromas];
  while (displayAromas.length < 4) {
    displayAromas.push("EMPTY");
  }

  return (
    <div
      className={cn(
        "w-full",
        "tablet:grid tablet:grid-cols-2",
        "pc:flex pc:flex-col pc:gap-6"
      )}
    >
      {/* 제목 + 참여 인원 */}
      <div
        className={cn(
          "mb-4 flex flex-col items-start gap-1",
          "tablet:mb-0 tablet:flex-col tablet:gap-3",
          "pc:flex-row pc:items-center pc:justify-between pc:pr-8"
        )}
      >
        <h2 className="text-heading-lg text-gray-900">어떤 향이 있나요?</h2>
        <span className="text-body-sm text-gray-400">
          ({reviewCount}명 참여)
        </span>
      </div>

      {/* Flavor 컴포넌트 */}
      <div className="flex w-full justify-center tablet:justify-start">
        <div className="[&>div>div:first-child]:hidden">
          <Flavor count={reviewCount} items={displayAromas} />
        </div>
      </div>
    </div>
  );
};

export default FlavorSection;

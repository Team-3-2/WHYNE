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

  return Array.from(aromaCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([aroma]) => aroma);
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
        "tablet:grid tablet:grid-cols-[1fr_2fr]",
        "pc:flex pc:flex-col pc:gap-6"
      )}
    >
      <div
        className={cn(
          "mb-4 flex select-none flex-col items-start gap-1",
          "tablet:mb-0 tablet:flex-col tablet:gap-3",
          "pc:flex-row pc:items-center pc:justify-between"
        )}
      >
        <h3 className="text-heading-lg text-gray-900 pc:ml-10">
          어떤 향이 있나요?
        </h3>
        <span className="mr-8 text-body-sm text-gray-400">
          ({reviewCount}명 참여)
        </span>
      </div>
      <div className="flex w-full select-none justify-center tablet:justify-start">
        <div className="w-full max-w-[340px] tablet:max-w-[440px] pc:ml-10 pc:max-w-none">
          <Flavor
            count={reviewCount}
            items={displayAromas}
            showHeader={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FlavorSection;

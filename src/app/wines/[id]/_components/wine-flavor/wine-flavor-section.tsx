import Flavor from "@/components/flavor/flavor";
import type { AromaKey } from "@/types/AromaType";
import type { Review } from "@/types/wine";
import { cn } from "@/lib/utils";

interface FlavorSectionProps {
  reviews: Review[];
  reviewCount: number;
}

function getTopAromas(reviews: Review[]): AromaKey[] {
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
}

export default function FlavorSection({
  reviews,
  reviewCount,
}: FlavorSectionProps) {
  const topAromas = getTopAromas(reviews);

  const displayAromas: AromaKey[] = [...topAromas];
  while (displayAromas.length < 4) {
    displayAromas.push("EMPTY");
  }

  return (
    <div className="w-full tablet:grid tablet:max-w-[680px] tablet:grid-cols-2">
      <div
        className={cn(
          "mb-4 ml-4 mr-4",
          "pc:ml-0 pc:mr-0 pc:flex pc:items-center pc:gap-52",
          "tablet:mb-6 tablet:flex-col tablet:gap-3"
        )}
      >
        <h2 className="text-heading-lg text-gray-900 tablet:text-heading-lg pc:text-heading-lg">
          어떤 향이 있나요?
        </h2>
        <span className="text-body-sm text-gray-400 tablet:text-body-sm">
          ({reviewCount}명 참여)
        </span>
      </div>

      <div
        className={cn(
          "mobile:flex mobile:flex-col mobile:items-center mobile:justify-center [&>div>div:first-child]:hidden"
        )}
      >
        <Flavor count={reviewCount} items={displayAromas} />
      </div>
    </div>
  );
}

// app/wines/[id]/_components/taste-flavor/flavor-section.tsx
import Flavor from "@/components/flavor/flavor";
import { cn } from "@/lib/utils";
import type { AromaKey } from "@/types/AromaType";
import type { Review } from "@/types/wine";

interface FlavorSectionProps {
  reviews: Review[];
  reviewCount: number;
}

/**
 * 리뷰에서 가장 많이 선택된 향 TOP 4 추출
 */
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

  // 향이 없으면 렌더링하지 않음
  if (topAromas.length === 0) return null;

  return (
    <div>
      <div
        className={cn(
          "mb-6 flex items-center justify-between",
          "w-[343px] tablet:w-[480px] pc:w-[480px]"
        )}
      >
        <h2 className="text-heading-md font-bold text-gray-900">
          어떤 향이 있나요?
        </h2>
        <span className="text-body-sm text-gray-400">
          ({reviewCount}명 참여)
        </span>
      </div>

      <div className="[&>div>div:first-child]:hidden">
        <Flavor count={reviewCount} items={topAromas} />
      </div>
    </div>
  );
}

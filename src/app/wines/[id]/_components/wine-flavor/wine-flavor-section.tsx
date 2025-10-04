// app/wines/[id]/_components/flavor-section.tsx
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
  let topAromas = getTopAromas(reviews);

  // 임시: 향이 4개 미만일 때 더미 데이터로 채우기
  if (topAromas.length < 4) {
    const dummyAromas: AromaKey[] = ["BERRY", "OAK", "VANILLA", "CHOCOLATE"];
    const displayAromas = [...topAromas];

    for (const dummy of dummyAromas) {
      if (displayAromas.length >= 4) break;
      if (!displayAromas.includes(dummy)) {
        displayAromas.push(dummy);
      }
    }

    topAromas = displayAromas;
  }

  if (topAromas.length === 0) return null;

  return (
    <div className="ml-12">
      <div
        className={cn(
          "mb-6 flex items-center gap-60",
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

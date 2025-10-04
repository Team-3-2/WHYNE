// app/wines/[id]/_components/wine-taste-section.tsx
import { cn } from "@/lib/utils";
import WineTaste from "@/components/wine-taste/wine-taste";
import { getTasteDescription } from "@/components/wine-taste";
import type { TasteData } from "@/components/wine-taste";
import type { GaugeLevel } from "@/components/gauge/block-gauge";
import type { Review } from "@/types/wine";

interface WineTasteSectionProps {
  reviews: Review[];
  reviewCount: number; // 🆕 추가
}

/**
 * 리뷰 데이터에서 평균 맛 점수 계산
 * @param reviews 리뷰 배열
 * @returns 각 맛 특성의 평균값 (0-6 사이로 반올림)
 */
function calculateAverageTastes(reviews: Review[]) {
  if (reviews.length === 0) {
    return {
      avgLightBold: 0,
      avgSmoothTannic: 0,
      avgDrySweet: 0,
      avgSoftAcidic: 0,
    };
  }

  const sum = reviews.reduce(
    (acc, review) => ({
      lightBold: acc.lightBold + review.lightBold,
      smoothTannic: acc.smoothTannic + review.smoothTannic,
      drySweet: acc.drySweet + review.drySweet,
      softAcidic: acc.softAcidic + review.softAcidic,
    }),
    { lightBold: 0, smoothTannic: 0, drySweet: 0, softAcidic: 0 }
  );

  const count = reviews.length;

  return {
    avgLightBold: Math.round(sum.lightBold / count),
    avgSmoothTannic: Math.round(sum.smoothTannic / count),
    avgDrySweet: Math.round(sum.drySweet / count),
    avgSoftAcidic: Math.round(sum.softAcidic / count),
  };
}

export default function WineTasteSection({
  reviews,
  reviewCount,
}: WineTasteSectionProps) {
  const { avgLightBold, avgSmoothTannic, avgDrySweet, avgSoftAcidic } =
    calculateAverageTastes(reviews);

  const tastes: TasteData[] = [
    {
      type: "바디감",
      data: avgLightBold as GaugeLevel,
      taste: getTasteDescription("바디감", avgLightBold as GaugeLevel),
    },
    {
      type: "탄닌",
      data: avgSmoothTannic as GaugeLevel,
      taste: getTasteDescription("탄닌", avgSmoothTannic as GaugeLevel),
    },
    {
      type: "당도",
      data: avgDrySweet as GaugeLevel,
      taste: getTasteDescription("당도", avgDrySweet as GaugeLevel),
    },
    {
      type: "산미",
      data: avgSoftAcidic as GaugeLevel,
      taste: getTasteDescription("산미", avgSoftAcidic as GaugeLevel),
    },
  ];

  return (
    <div>
      {/* 제목 - WineTaste와 동일한 너비 */}
      <div
        className={cn(
          "mb-6 flex items-center justify-between",
          "w-[343px] tablet:w-[480px] pc:w-[480px]"
        )}
      >
        <h2 className="text-heading-md font-bold text-gray-900">
          어떤 맛인가요?
        </h2>
        <span className="text-body-sm text-gray-400">
          ({reviewCount}명 참여)
        </span>
      </div>

      <WineTaste type="detail" tastes={tastes} />
    </div>
  );
}

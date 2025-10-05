import WineTaste from "@/components/wine-taste/wine-taste";
import { getTasteDescription } from "@/components/wine-taste";
import type { TasteData } from "@/components/wine-taste";
import type { GaugeLevel } from "@/components/gauge/block-gauge";
import type { Review } from "@/types/wine";
import { cn } from "@/lib/utils";

interface WineTasteSectionProps {
  reviews: Review[];
  reviewCount: number;
}

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
    <div className="w-full tablet:grid tablet:max-w-[680px] tablet:grid-cols-2">
      <div
        className={cn(
          "mb-4 ml-4 mr-4",
          "pc:ml-0 pc:mr-0 pc:flex pc:items-center pc:gap-56",
          "tablet:mb-6 tablet:flex-col tablet:gap-3"
        )}
      >
        <h2 className="text-heading-lg text-gray-900 tablet:text-heading-lg pc:text-heading-lg">
          어떤 맛이 나나요?
        </h2>
        <span className="text-body-sm text-gray-400 tablet:text-body-sm">
          ({reviewCount}명 참여)
        </span>
      </div>
      <div className="mobile:flex mobile:flex-col mobile:items-center mobile:justify-center">
        <WineTaste type="detail" tastes={tastes} />
      </div>
    </div>
  );
}

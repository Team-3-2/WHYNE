import WineTaste, {
  getTasteDescription,
  type TasteData,
} from "@/components/wine-taste";
import type { GaugeLevel } from "@/components/gauge/block-gauge";
import type { Review } from "@/types/wine";
import { cn } from "@/lib/utils";

interface WineTasteSectionProps {
  reviews: Review[];
  reviewCount: number;
}

const calculateAverageTastes = (reviews: Review[]) => {
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
};

const WineTasteSection = ({ reviews, reviewCount }: WineTasteSectionProps) => {
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
          "pc:flex-row pc:items-center pc:justify-between pc:pr-3"
        )}
      >
        <h2 className="text-heading-lg text-gray-900">어떤 맛이 나나요?</h2>
        <span className="text-body-sm text-gray-400">
          ({reviewCount}명 참여)
        </span>
      </div>

      {/* WineTaste 컴포넌트 */}
      <div className="flex w-full justify-center tablet:justify-start">
        <div className="w-full max-w-[360px] tablet:max-w-[480px] pc:max-w-[560px]">
          <WineTaste type="detail" tastes={tastes} />
        </div>
      </div>
    </div>
  );
};

export default WineTasteSection;

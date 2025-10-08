import WineTaste, {
  getTasteDescription,
  type TasteData,
} from "@/components/wine-taste";
import type { GaugeLevel } from "@/components/gauge/block-gauge";
import type { Review } from "@/types/wine";
import calculateAverageTastes from "@/app/wines/[id]/_utils/utils";
import { cn } from "@/lib/utils";

interface WineTasteSectionProps {
  reviews: Review[];
  reviewCount: number;
}

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

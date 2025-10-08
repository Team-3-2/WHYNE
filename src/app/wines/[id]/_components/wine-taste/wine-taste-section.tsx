import WineTaste, {
  getTasteDescription,
  type TasteData,
} from "@/components/wine-taste";
import type { GaugeLevel } from "@/components/gauge/block-gauge";
import type { Review } from "@/types/wine";
import { cn, calculateAverageTastes } from "@/lib/utils";

/**
 * 와인 맛 섹션이 소비하는 리뷰 데이터 형태
 * @author junyeol
 * @property reviews 사용자 리뷰 목록
 * @property reviewCount 리뷰 작성 참여 인원 수
 */
interface WineTasteSectionProps {
  reviews: Review[];
  reviewCount: number;
}

/** 섹션 제목과 연결되는 heading id */
const tasteHeadingId = "wine-taste-heading";

/**
 * @author junyeol
 * 리뷰 데이터를 기반으로 와인 맛 평균을 계산한 뒤
 * Grid 형태의 WineTaste 컴포넌트로 노출한다.
 */
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
    <section
      aria-labelledby={tasteHeadingId}
      className={cn(
        "w-full",
        "tablet:grid tablet:grid-cols-2",
        "pc:flex pc:flex-col pc:gap-6"
      )}
    >
      {/* 제목 + 갯수 */}
      <header
        className={cn(
          "mb-4 flex flex-col items-start gap-1",
          "tablet:mb-0 tablet:flex-col tablet:gap-3",
          "pc:flex-row pc:items-center pc:justify-between pc:pr-3"
        )}
      >
        <h2 id={tasteHeadingId} className="text-heading-lg text-gray-900">
          어떤 맛이 나나요?
        </h2>
        <p className="text-body-sm text-gray-400">({reviewCount}명 참여)</p>
      </header>

      {/* 와인 맛 분포 컴포넌트 */}
      <section
        aria-label="와인 맛 분포"
        className="flex w-full justify-center tablet:justify-start"
      >
        <div className="w-full max-w-[360px] tablet:max-w-[480px] pc:max-w-[560px]">
          <WineTaste type="detail" tastes={tastes} />
        </div>
      </section>
    </section>
  );
};

export default WineTasteSection;

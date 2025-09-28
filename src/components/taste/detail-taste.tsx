"use client";

import { cn } from "@/lib/utils";
import BlockGauge, { type GaugeLevel } from "../gauge/block-gauge";

// review-taste.tsx와 동일한 인터페이스 사용
interface TasteData {
  type: string;
  data: GaugeLevel;
  taste: string;
}

interface DetailTasteProps {
  tastes: TasteData[];
  onChange?: (index: number, newLevel: GaugeLevel) => void;
}

// 내부 아이템 컴포넌트
const DetailTasteItem = ({
  type,
  data,
  taste,
  onChange,
}: TasteData & { onChange?: (newLevel: GaugeLevel) => void }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start",
        "w-[343px] tablet:w-[480px] pc:w-[480px]",
        "gap-3 tablet:gap-4 pc:gap-4"
      )}
    >
      <div className="flex w-full items-center gap-3">
        {/* 왼쪽: type */}
        <div
          className={cn(
            "truncate rounded-md bg-gray-200 px-1 py-1",
            "text-center text-body-sm text-gray-600",
            "w-[53px] tablet:w-[70px] pc:w-[70px]"
          )}
          title={type}
        >
          {type}
        </div>

        {/* PC/태블릿에서만 구분선 추가 */}
        <div
          className={cn(
            "hidden", // 모바일에서 숨김
            "tablet:block tablet:h-5 tablet:w-px tablet:bg-gray-400", // 태블릿에서 표시
            "pc:block pc:h-5 pc:w-px pc:bg-gray-400" // PC에서 표시
          )}
        />

        {/* 중간: 게이지 */}
        <div className="flex flex-1 justify-center">
          <BlockGauge level={data} onChange={onChange} />
        </div>

        {/* 오른쪽: taste - data가 0일 때 색상 변경 */}
        <div
          className={cn(
            "truncate px-1 py-1 text-center text-body-sm",
            "w-[68px] tablet:w-[80px] pc:w-[80px]",
            data === 0 ? "text-gray-400" : "text-black"
          )}
          title={taste}
        >
          {taste}
        </div>
      </div>
    </div>
  );
};

// 메인 컴포넌트
const DetailTaste = ({ tastes, onChange }: DetailTasteProps) => {
  return (
    <div className="flex flex-col gap-4">
      {tastes.map((taste, index) => (
        <DetailTasteItem
          key={taste.type}
          type={taste.type}
          data={taste.data}
          taste={taste.taste}
          onChange={
            onChange ? (newLevel) => onChange(index, newLevel) : undefined
          }
        />
      ))}
    </div>
  );
};

export default DetailTaste;
export type { TasteData };

"use client";

import { cn } from "@/lib/utils";
import BlockGauge, { type GaugeLevel } from "../gauge/block-gauge";

interface TasteData {
  type: string;
  data: GaugeLevel;
  taste: string;
}

interface ReviewTasteProps {
  tastes: TasteData[];
  onChange?: (index: number, newLevel: GaugeLevel) => void;
}

// 리뷰용 Taste 컴포넌트 (항상 모바일 스타일 고정)
const ReviewTasteItem = ({
  type,
  data,
  taste,
  onChange,
}: TasteData & { onChange?: (newLevel: GaugeLevel) => void }) => {
  return (
    <div className="flex w-[343px] flex-col items-start gap-3">
      <div className="flex w-full items-center gap-3">
        {/* 왼쪽: type (모바일 스타일 고정) */}
        <div
          className="w-[53px] truncate rounded-md bg-gray-200 px-1 py-1 text-center text-body-sm text-gray-600"
          title={type}
        >
          {type}
        </div>

        {/* 중간: 게이지 */}
        <div className="flex flex-1 justify-center">
          <BlockGauge level={data} onChange={onChange} />
        </div>

        {/* 오른쪽: taste (모바일 스타일 고정) */}
        <div
          className={cn(
            "w-[80px] truncate px-1 py-1 text-center text-body-sm", // 2 x 2 그리드를 적용간의 텍스트 가려짐 방지로 너비를 넓힘.
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

const ReviewTaste = ({ tastes, onChange }: ReviewTasteProps) => {
  return (
    <div
      className={cn(
        // 모바일: 세로로 배치
        "flex flex-col gap-3",
        // 태블릿/PC: 2x2 그리드로 배치
        "tablet:grid tablet:grid-cols-2 tablet:gap-4",
        "pc:grid pc:grid-cols-2 pc:gap-4",
        "w-full"
      )}
    >
      {tastes.map((taste, index) => (
        <ReviewTasteItem
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

export default ReviewTaste;
export type { TasteData };

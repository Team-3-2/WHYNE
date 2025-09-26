"use client";

import { cn } from "@/lib/utils";
import BlockGauge, { type GaugeLevel } from "../gauge/block-gauge";

interface TasteProps {
  type: string;
  data: GaugeLevel; // 0-6 사이의 값
  taste: string;
  onChange?: (newLevel: GaugeLevel) => void;
}

const Taste = ({ type, data, taste, onChange }: TasteProps) => {
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
            "bg-neutral200 truncate rounded-md px-1 py-1 text-center text-body-sm text-gray600",
            "w-[53px] tablet:w-[70px] pc:w-[70px]"
          )}
          title={type}
        >
          {type}
        </div>

        {/* 중간: 게이지 */}
        <div className="flex flex-1 justify-center">
          <BlockGauge level={data} onChange={onChange} />
        </div>

        {/* 오른쪽: taste - data가 0일 때 색상 변경 */}
        <div
          className={cn(
            "truncate px-1 py-1 text-center text-body-sm",
            "w-[68px] tablet:w-[80px] pc:w-[80px]",
            data === 0 ? "text-neutral400" : "text-black"
          )}
          title={taste}
        >
          {taste}
        </div>
      </div>
    </div>
  );
};

export default Taste;

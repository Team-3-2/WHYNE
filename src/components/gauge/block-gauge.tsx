"use client";

import { cn } from "@/lib/utils";

type GaugeLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface BlockGaugeProps {
  level: GaugeLevel; // 0-6 사이의 값 (0: 비어있음, 6: 가득 참)
  color?: string; // 활성화된 블록 색상 (기본: bg-black)
  onChange?: (newLevel: GaugeLevel) => void; // 클릭 시 호출될 함수
}

const BlockGauge = ({
  level,
  color = "bg-black",
  onChange,
}: BlockGaugeProps) => {
  const handleClick = (clickedIndex: number) => {
    if (!onChange) return;

    const newLevel = (clickedIndex + 1) as GaugeLevel;
    onChange(newLevel === level ? 0 : newLevel);
  };

  return (
    <div className="flex w-full gap-0.5 tablet:gap-1 pc:gap-1">
      {Array.from({ length: 6 }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={cn(
            "h-2.5 tablet:h-2.5 pc:h-2.5",
            "flex-1 shrink-0 basis-0",
            index === 0 && "rounded-l-md",
            index === 5 && "rounded-r-md",
            index < level ? color : "bg-gray-200",
            onChange && [
              "cursor-pointer hover:opacity-80",
              "focus:outline-none focus:ring-2 focus:ring-gray-600",
            ]
          )}
          onClick={() => handleClick(index)}
          disabled={!onChange}
        />
      ))}
    </div>
  );
};

export default BlockGauge;

export type { GaugeLevel };

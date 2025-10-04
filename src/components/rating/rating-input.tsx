"use client";

import { useState } from "react";
import Icon from "@/components/icon/icon";
import { cn } from "@/lib/utils";
import { COLOR_STYLES, ERROR_MESSAGE_STYLES } from "./style";
import type { UnifiedIconName } from "@/components/icon/icon";

/**
 * 별점 입력 컴포넌트
 * @param icon 별점 아이콘 (기본값: StarIcon)
 * @param label 별점 라벨
 * @param value 선택된 별점 값
 * @param onChange 별점 변경 핸들러
 * @param maxRating 최대 별점 (기본값: 5)
 * @param size 별 크기 (기본값: sm)
 * @param errorMsg 에러 메시지
 * @param className 추가 클래스명
 */

interface RatingInputProps {
  icon?: UnifiedIconName;
  label?: string;
  value: number;
  onChange: (value: number) => void;
  maxRating?: number;
  size?: "xs" | "sm" | "md" | "md2" | "lg" | "xl" | "2xl";
  errorMsg?: string | null;
  className?: string;
}

const RatingInput = ({
  icon = "StarIcon",
  label,
  value,
  onChange,
  maxRating = 5,
  size = "sm",
  errorMsg,
  className,
}: RatingInputProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const activeRating = hovered ?? value;

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === "ArrowRight" && value < maxRating) {
      onChange(value + 1);
    }
    if (e.key === "ArrowLeft" && value > 1) {
      onChange(value - 1);
    }
    if (e.key === "Enter" || e.key === " ") {
      onChange(index + 1);
    }
  };

  return (
    <div
      role="radiogroup"
      className={cn("flex items-center gap-x-[8px]", className)}
    >
      <div className="flex items-center gap-x-[16px]">
        {label && <span className="text-body-sm text-gray-500">{label}</span>}
        <div className="flex items-center">
          {Array.from({ length: maxRating }).map((_, i) => {
            const isFilled = i < activeRating;

            return (
              <button
                key={i}
                type="button"
                role="radio"
                onClick={() => onChange(i + 1)}
                onMouseEnter={() => setHovered(i + 1)}
                onMouseLeave={() => setHovered(null)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                aria-checked={i + 1 === value}
                aria-label={`${i + 1}점${i + 1 === value ? " 선택됨" : ""}`}
              >
                <Icon
                  icon={icon}
                  size={size}
                  className={`block tablet:ic-md2 pc:ic-md2 ${isFilled ? COLOR_STYLES.active : COLOR_STYLES.inactive}`}
                />
              </button>
            );
          })}
        </div>
      </div>
      {errorMsg && <span className={ERROR_MESSAGE_STYLES}>{errorMsg}</span>}
    </div>
  );
};

export default RatingInput;

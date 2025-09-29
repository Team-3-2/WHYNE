"use client";

import { cn } from "@/lib/utils";
import { WineTasteProps } from "./_types";
import DetailTasteItem from "./_components/detail-taste-item";
import ReviewTasteItem from "./_components/review-taste-item";

/**
 * 와인 맛 표시 통합 컴포넌트
 * 'detail' 또는 'review' 타입에 따라 다른 레이아웃과 스타일 적용
 * @author junyeol
 */
const WineTaste = ({ type, tastes, onChange }: WineTasteProps) => {
  // 변경 이벤트 핸들러
  const handleChange = (index: number) => (newLevel: any) => {
    if (onChange) {
      onChange(index, newLevel);
    }
  };

  // 타입별 컨테이너 클래스 결정
  const containerClass =
    type === "detail"
      ? "flex flex-col gap-4" // 디테일 타입: 세로 배열
      : cn(
          // 모바일: 세로로 배치
          "flex flex-col gap-3",
          // 태블릿/PC: 2x2 그리드로 배치
          "tablet:grid tablet:grid-cols-2 tablet:gap-4",
          "pc:grid pc:grid-cols-2 pc:gap-4",
          "w-full"
        ); // 리뷰 타입: 모바일에서는 세로, 태블릿/PC에서는 2x2 그리드

  return (
    <div className={containerClass}>
      {tastes.map((taste, index) =>
        type === "detail" ? (
          <DetailTasteItem
            key={taste.type}
            type={taste.type}
            data={taste.data}
            taste={taste.taste}
            onChange={onChange ? handleChange(index) : undefined}
          />
        ) : (
          <ReviewTasteItem
            key={taste.type}
            type={taste.type}
            data={taste.data}
            taste={taste.taste}
            onChange={onChange ? handleChange(index) : undefined}
          />
        )
      )}
    </div>
  );
};

export default WineTaste;

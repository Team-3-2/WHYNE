"use client";

import { cn } from "@/lib/utils";
import BlockGauge from "@/components/gauge/block-gauge";
import { TasteItemProps } from "../_types";

/**
 * 리뷰 타입의 테이스팅 아이템 컴포넌트
 * 모바일 스타일로 고정되며, 부모 컴포넌트에서 그리드 레이아웃 적용
 * @author junyeol
 */
const ReviewTasteItem = ({ type, data, taste, onChange }: TasteItemProps) => {
  return (
    <div className="flex w-[343px] flex-col items-start gap-3">
      <div className="flex w-full items-center gap-3">
        {/* 왼쪽: 맛 유형 라벨 (모바일 스타일 고정) */}
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

        {/* 오른쪽: 맛 설명 (data가 0일 때 색상 변경) */}
        <div
          className={cn(
            "w-[80px] truncate px-1 py-1 text-center text-body-sm", // 2 x 2 그리드에서 텍스트 가려짐 방지로 너비를 넓힘
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

export default ReviewTasteItem;

"use client";

import { cn } from "@/lib/utils";
import BlockGauge from "@/components/gauge/block-gauge";
import { TasteItemProps } from "../_types";

/**
 * 디테일 타입의 테이스팅 아이템 컴포넌트
 * 모바일, 태블릿, PC에서 각각 다른 스타일 적용
 */
const DetailTasteItem = ({ type, data, taste, onChange }: TasteItemProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start",
        "w-[343px] tablet:w-[480px] pc:w-[480px]",
        "gap-3 tablet:gap-4 pc:gap-4"
      )}
    >
      <div className="flex w-full items-center gap-3">
        {/* 왼쪽: 맛 유형 라벨 */}
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

        {/* 오른쪽: 맛 설명 (data가 0일 때 색상 변경) */}
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

export default DetailTasteItem;

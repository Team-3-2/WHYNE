"use client";
import { cn } from "@/lib/utils";
import { ScrollTopButton } from "@/components";
/**
 * 화면 우측 하단에 떠 있는 유틸리티 액션 버튼 모음
 * @author yeonsu
 */

const FloatingActions = () => {
  return (
    <div
      className={cn(
        "fixed bottom-[16px] right-[16px] z-20",
        "tablet:bottom-[32px] tablet:right-[32px]",
        "pc:bottom-[32px] pc:right-[32px]"
      )}
    >
      <ScrollTopButton />
    </div>
  );
};

export default FloatingActions;

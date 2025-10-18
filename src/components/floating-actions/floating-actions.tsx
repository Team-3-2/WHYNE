"use client";
import { cn } from "@/lib/utils";
import { ChatButton, ScrollTopButton } from "@/components";
/**
 * 화면 우측 하단에 떠 있는 유틸리티 액션 버튼 모음
 * @author yeonsu
 */

const FloatingActions = () => {
  return (
    <div
      className={cn(
        "fixed bottom-[16px] right-[16px] z-20 flex flex-col items-center gap-[8px]",
        "tablet:bottom-[32px] tablet:right-[32px]",
        "pc:bottom-[32px] pc:right-[32px]"
      )}
    >
      <ScrollTopButton />
      <ChatButton />
    </div>
  );
};

export default FloatingActions;

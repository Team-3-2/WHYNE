"use client";

import { cn } from "@/lib/utils";
import { IconButton } from "@/components";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ChatBot from "../chat-bot/chat-bot";

/**
 * 채팅 봇을 열기 위한 버튼 컴포넌트
 * @author jikwon
 */

const ChatButton = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname !== "/wines") return null;

  return (
    <>
      <IconButton
        icon="GptIcon"
        iconSize="md"
        className={cn(
          "relative h-[40px] w-[40px] rounded-full border-gray-300",
          "tablet:h-[50px] tablet:w-[50px]",
          "pc:h-[50px] pc:w-[50px]"
        )}
        aria-label="채팅 봇 열기"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <ChatBot open={isOpen} />}
    </>
  );
};

export default ChatButton;

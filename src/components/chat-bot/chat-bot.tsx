"use client";

import { showErrorToast } from "@/lib/toast";
import { allowScroll, cn, lockingScroll } from "@/lib/utils";
import {
  Avatar,
  ChatContainer,
  Message,
  MessageInput,
  MessageList,
  MainContainer,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useEffect, useRef, useState } from "react";
import "./chat-style.css";

type Message = {
  role: "user" | "assistant";
  id: string;
  content: string;
  time: string;
};

const styles = {
  box: "max-w-[200px] text-[16px] tracking-[-0.02em]",
};

const ChatBot = ({ open }: { open: boolean }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const dialogRef = useRef<HTMLDialogElement>(null);
  const currentScrollY = window.scrollY;

  useEffect(() => {
    if (!dialogRef.current?.open && open) {
      dialogRef.current?.showModal();
      lockingScroll(currentScrollY);
    } else {
      dialogRef.current?.close();
    }

    return () => {
      allowScroll(currentScrollY);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleSend = async (text: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = text;
    const cleanText = tempDiv.textContent || tempDiv.innerText || "";
    const clean = cleanText.trim();

    if (!clean) return;

    addMessage({
      role: "user",
      id: Date.now().toString(),
      content: clean,
      time: new Date().toISOString(),
    });

    try {
      setIsTyping(true);

      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean }),
      });

      const { reply } = await r.json();

      addMessage({
        role: "assistant",
        id: Date.now().toString(),
        content: reply,
        time: new Date().toISOString(),
      });
    } catch (err) {
      showErrorToast("오류가 발생했습니다.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div
      className={cn(
        "absolute -right-[5px] bottom-[100px] h-[500px] max-h-[600px] w-[400px] max-w-[700px] resize overflow-auto rounded-[12px] border border-[#6F7172] bg-[#15191B] px-4 py-6",
        "tablet:bottom-[10px] tablet:right-[70px]",
        "pc:bottom-[10px] pc:right-[70px]"
      )}
    >
      <MainContainer responsive className="h-full w-full border-none">
        <ChatContainer className="">
          <MessageList
            className="mb-2 h-full overflow-y-auto"
            scrollBehavior="smooth"
            autoScrollToBottom
            typingIndicator={
              isTyping && <TypingIndicator content="GPT가 입력 중..." />
            }
          >
            <Message
              model={{ direction: "incoming", position: "first" }}
              className={styles.box}
            >
              <Message.CustomContent>
                안녕하세요! 무엇을 도와드릴까요?
              </Message.CustomContent>
            </Message>
            {messages.map((message) => (
              <div key={message.id}>
                <Message
                  model={{
                    direction:
                      message.role === "user" ? "outgoing" : "incoming",
                    type: "custom",
                    position: "first",
                  }}
                >
                  <Message.CustomContent
                    className={cn(
                      styles.box,
                      message.role === "user" ? "text-right" : "text-left"
                    )}
                  >
                    {message.content}
                  </Message.CustomContent>
                </Message>
              </div>
            ))}
          </MessageList>
          <MessageInput
            placeholder="메시지를 입력해주세요."
            onSend={handleSend}
            disabled={isTyping}
            attachButton={false}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBot;

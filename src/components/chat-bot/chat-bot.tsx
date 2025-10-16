"use client";

import { showErrorToast } from "@/lib/toast";
import { cn } from "@/lib/utils";
import {
  Avatar,
  ChatContainer,
  Message,
  MessageInput,
  MessageList,
  MainContainer,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import "./chat-style.css";

type Message = {
  role: "user" | "assistant";
  id: string;
  content: string;
  time: string;
};

const AVATAR_IMAGE =
  "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/10362e2b-df25-5614-88fd-01a520d2f89c/03daec0e-4d19-577c-98ca-aa63b3185aa3.jpg";

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

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
    <div className="absolute bottom-[10px] right-[70px] h-[500px] max-h-[600px] w-[400px] max-w-[700px] resize overflow-auto rounded-[15px] border border-black bg-white p-4">
      <MainContainer responsive className="h-full w-full border-none">
        <ChatContainer className="h-full w-full">
          <MessageList
            className="mb-2 h-full overflow-y-auto"
            scrollBehavior="smooth"
            autoScrollToBottom
            typingIndicator={
              isTyping && <TypingIndicator content="GPT가 입력 중..." />
            }
          >
            {/* <Message model={{ direction: "incoming", position: "first" }} className="w-[200px] text-[14px] tracking-[-0.02em]">
              <Avatar src={AVATAR_IMAGE} name="GPT" />
              <Message.CustomContent>
                안녕하세요, 무엇을 도와드릴까요?
              </Message.CustomContent>
            </Message> */}
            {Array.from({ length: 20 }).map((_, index) => (
              <Message
                key={index}
                model={{ direction: "incoming", position: "first" }}
                className="w-[200px] text-[14px] tracking-[-0.02em]"
              >
                <Avatar src={AVATAR_IMAGE} name="GPT" className="bg-black" />
                <Message.CustomContent className="bg-black text-white">
                  안녕하세요, 무엇을 도와드릴까요?
                </Message.CustomContent>
              </Message>
            ))}
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
                  <Avatar src={AVATAR_IMAGE} name="User" />
                  <Message.CustomContent
                    className={cn(
                      "max-w-[200px] !rounded-[20px] text-[14px] tracking-[-0.02em]",
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
            // sendDisabled={isTyping}
            // style={{ backgroundColor: "black" }}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBot;

// TODO: placeholder 스타일 수정
// TODO: 와인 API 연동

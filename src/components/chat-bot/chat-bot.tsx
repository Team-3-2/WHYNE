"use client";

import {
  Avatar,
  ChatContainer,
  Message,
  MessageInput,
  MessageList,
  MainContainer,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const AVATAR_IMAGE =
  "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/10362e2b-df25-5614-88fd-01a520d2f89c/03daec0e-4d19-577c-98ca-aa63b3185aa3.jpg";

const ChatBot = () => {
  return (
    <div className="absolute bottom-[20px] right-[55px] min-h-[400px] w-[400px] overflow-y-auto rounded-[15px] border border-black bg-white p-4">
      <MainContainer responsive className="w-full999">
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            autoScrollToBottom
            typingIndicator={<TypingIndicator content="GPT가 입력 중..." />}
          >
            <Message
              model={{
                direction: "incoming",
                type: "custom",
                position: "first",
              }}
            >
              <Avatar src={AVATAR_IMAGE} name="GPT" />
              <Message.CustomContent>
                <strong>This is strong text</strong>
                <br />
                Message content is provided as
                <span
                  style={{
                    color: "red",
                  }}
                >
                  custom elements
                </span>
                from child <strong>Message.CustomContent</strong> element
              </Message.CustomContent>
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "first",
              }}
            />
            <Message
              model={{
                position: "first",
                direction: "incoming",
                payload: (
                  <Message.CustomContent>
                    <strong>This is strong text</strong>
                    <br />
                    Message content is provided as
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      custom elements
                    </span>
                    from payload property
                  </Message.CustomContent>
                ),
              }}
            >
              <Avatar src={AVATAR_IMAGE} name="User" />
            </Message>
          </MessageList>
          <MessageInput placeholder="메시지를 입력해주세요." />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBot;

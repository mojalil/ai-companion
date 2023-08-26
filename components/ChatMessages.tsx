"use Client";

import { Companion, Message } from "@prisma/client";
import ChatMessage from "@/components/ChatMessage";
import { ChatMessageProps } from "@/lib/interfaces";
import { ElementRef, useEffect, useRef, useState } from "react";

interface ChatMessagesProps {
  companion: Companion;
  messages: ChatMessageProps[];
  isLoading: boolean;
}

const ChatMessages = ({
  companion,
  messages,
  isLoading,
}: ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null);
  const [fakeLoading, setFakeLoading] = useState(
    messages.length === 0 ? true : false
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }
  , [messages.length]);


  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        src={companion.src}
        content={`Hi, I'm ${companion.name}, ${companion.description} How can I help you?`}
        role="system"
        isLoading={fakeLoading}
      />
      {messages.map((message) => (
        <ChatMessage
          key={message.content + Math.random().toString(36).substring(7)}
          role={message.role}
          content={message.content}
          src={companion.src}
        />
      ))}
      {isLoading && (
        <ChatMessage
          role="system"
          src={companion.src}
          isLoading
        />
      )}
      <div ref={scrollRef} />
    </div>
  );
};

export default ChatMessages;

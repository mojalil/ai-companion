"use Client";

import { Companion, Message } from "@prisma/client";
import ChatMessage from "@/components/ChatMessage";

interface ChatMessagesProps {
  companion: Companion;
  messages: any[];
  isLoading: boolean;
}

const ChatMessages = ({
  companion,
  messages,
  isLoading,
}: ChatMessagesProps) => {
  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage 
      src={companion.src}
        content={`Hi, I'm ${companion.name}, ${companion.description} How can I help you?`}
        role="system"
        isLoading={isLoading}

      />
    </div>
  );
};

export default ChatMessages;

"use Client";

import { Companion, Message } from "@prisma/client";

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
  return <div>ChatMessages</div>;
};

export default ChatMessages;

export interface ChatMessageProps {
    role?: "system" | "user";
    content?: string;
    isLoading?: boolean;
    src?: string;
  }
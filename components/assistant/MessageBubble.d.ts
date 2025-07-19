declare module './MessageBubble' {
  import { FC } from 'react';
  
  interface MessageBubbleProps {
    message: {
      content: string;
      role: 'user' | 'assistant';
      timestamp: Date;
    };
    theme: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  }

  export const MessageBubble: FC<MessageBubbleProps>;
} 
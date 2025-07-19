import { useCallback, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useAssistant as useAssistantContext } from '@/contexts/AssistantContext';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface QuickAction {
  id: string;
  label: string;
  prompt: string;
  icon?: string;
}

interface AssistantState {
  messages: Message[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  sendMessage: (content: string) => Promise<void>;
  quickActions: QuickAction[];
  currentPage: string;
  clearMessages: () => void;
}

export const useAssistant = (): AssistantState => {
  const { data: session } = useSession();
  const {
    messages,
    isOpen,
    setIsOpen,
    sendMessage: contextSendMessage,
    quickActions,
    currentPage,
    setCurrentPage,
    clearMessages,
  } = useAssistantContext();

  const sendMessage = useCallback(
    async (content: string) => {
      if (!session?.user) return;

      try {
        await contextSendMessage(content);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    },
    [session?.user, contextSendMessage]
  );

  // Update current page when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [setCurrentPage]);

  return {
    messages,
    isOpen,
    setIsOpen,
    sendMessage,
    quickActions,
    currentPage,
    clearMessages,
  };
}; 
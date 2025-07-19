'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useSession } from 'next-auth/react';

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

interface AssistantContextType {
  messages: Message[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  sendMessage: (content: string) => Promise<void>;
  quickActions: QuickAction[];
  currentPage: string;
  setCurrentPage: (page: string) => void;
  clearMessages: () => void;
}

const AssistantContext = createContext<AssistantContextType | undefined>(undefined);

export const AssistantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const { data: session } = useSession();

  // Initialize quick actions based on current page
  const quickActions: QuickAction[] = [
    {
      id: 'help',
      label: 'Get Help',
      prompt: 'How can I help you with the current page?',
      icon: 'help',
    },
    {
      id: 'tutorial',
      label: 'Show Tutorial',
      prompt: 'Can you show me how to use this feature?',
      icon: 'school',
    },
    {
      id: 'feedback',
      label: 'Give Feedback',
      prompt: 'I would like to provide feedback about this feature.',
      icon: 'feedback',
    },
  ];

  const clearMessages = useCallback(() => {
    setMessages([]);
    sessionStorage.removeItem('assistantMessages');
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    console.log('🚀 AssistantContext: Starting sendMessage with:', content);

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);

    try {
      console.log('📡 AssistantContext: Making API request...');
      const response = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          context: {
            currentPage,
            userRole: session?.user?.role,
          },
        }),
      });

      console.log('📨 AssistantContext: Response received:', response.status, response.ok);

      // Get response text first
      const responseText = await response.text();
      console.log('📄 AssistantContext: Raw response:', responseText);

      if (!response.ok) {
        // Try to parse error as JSON
        let errorData;
        try {
          errorData = JSON.parse(responseText);
        } catch (e) {
          errorData = { error: 'Invalid response', details: responseText };
        }
        
        console.error('❌ AssistantContext: API Error:', errorData);
        throw new Error(
          errorData.details || errorData.error || `API Error: ${response.status}`
        );
      }

      // Parse successful response
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('❌ AssistantContext: Invalid JSON response:', responseText);
        throw new Error('Invalid response from server');
      }

      console.log('✅ AssistantContext: Success:', data);

      if (!data.response) {
        throw new Error('No response content received from server');
      }

      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: data.response,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('💥 AssistantContext: Error:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: error instanceof Error ? error.message : 'Sorry, I encountered an error. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  }, [currentPage, session?.user?.role]);

  // Persist messages in session storage
  useEffect(() => {
    const savedMessages = sessionStorage.getItem('assistantMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('assistantMessages', JSON.stringify(messages));
  }, [messages]);

  return (
    <AssistantContext.Provider
      value={{
        messages,
        isOpen,
        setIsOpen,
        sendMessage,
        quickActions,
        currentPage,
        setCurrentPage,
        clearMessages,
      }}
    >
      {children}
    </AssistantContext.Provider>
  );
};

export const useAssistant = () => {
  const context = useContext(AssistantContext);
  if (context === undefined) {
    throw new Error('useAssistant must be used within an AssistantProvider');
  }
  return context;
}; 
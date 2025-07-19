'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageBubble } from '@/components/assistant/MessageBubble';
import { MessageInput } from '@/components/assistant/MessageInput';
import { QuickActions } from '@/components/assistant/QuickActions';
import { TypingIndicator } from '@/components/assistant/TypingIndicator';
import { AssistantHeader } from '@/components/assistant/AssistantHeader';
import { useAssistant } from '@/hooks/useAssistant';
import styles from './WebAssistant.module.css';

interface WebAssistantProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPage: string;
  userRole: string;
  theme?: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export const WebAssistant: React.FC<WebAssistantProps> = ({
  isOpen,
  onToggle,
  currentPage,
  userRole,
  theme = {
    primary: '#4F46E5',
    secondary: '#818CF8',
    background: '#FFFFFF',
    text: '#1F2937',
  },
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, quickActions, clearMessages } = useAssistant();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleClearChat = async () => {
    try {
      await fetch('/api/assistant/chat', {
        method: 'GET',
      });
      clearMessages();
    } catch (error) {
      console.error('Error clearing chat:', error);
    }
  };

  return (
    <div className={styles.assistantContainer}>
      {/* Floating Action Button */}
      <motion.button
        className={styles.fab}
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ backgroundColor: theme.primary }}
      >
        {isOpen ? '×' : '?'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{ backgroundColor: theme.background }}
          >
            <AssistantHeader 
              onClose={onToggle} 
              onClear={handleClearChat}
              theme={theme} 
            />
            
            <div className={styles.messagesContainer}>
              {messages.map((message, index) => (
                <MessageBubble
                  key={index}
                  message={message}
                  theme={theme}
                />
              ))}
              {isTyping && <TypingIndicator theme={theme} />}
              <div ref={messagesEndRef} />
            </div>

            <QuickActions
              actions={quickActions}
              onAction={(action) => {
                sendMessage(action.prompt);
              }}
              theme={theme}
            />

            <MessageInput
              onSend={async (message) => {
                setIsTyping(true);
                await sendMessage(message);
                setIsTyping(false);
              }}
              theme={theme}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import styles from './MessageBubble.module.css';

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

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, theme }) => {
  const isUser = message.role === 'user';
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <motion.div
      className={`${styles.messageContainer} ${isUser ? styles.userMessage : styles.assistantMessage}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={styles.messageBubble}
        style={{
          backgroundColor: isUser ? theme.primary : theme.secondary,
          color: isUser ? '#FFFFFF' : theme.text,
        }}
      >
        <ReactMarkdown
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <pre className={styles.codeBlock}>
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              ) : (
                <code className={styles.inlineCode} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {message.content}
        </ReactMarkdown>
        <span className={styles.timestamp}>{formattedTime}</span>
      </div>
    </motion.div>
  );
}; 
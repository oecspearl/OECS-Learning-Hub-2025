'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import styles from './AssistantHeader.module.css';

interface AssistantHeaderProps {
  onClose: () => void;
  onClear: () => void;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export const AssistantHeader: React.FC<AssistantHeaderProps> = ({
  onClose,
  onClear,
  theme,
}) => {
  return (
    <div
      className={styles.header}
      style={{
        backgroundColor: theme.primary,
        color: '#FFFFFF',
      }}
    >
      <div className={styles.title}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.icon}
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>Pearl AI</span>
      </div>
      <div className={styles.actions}>
        <motion.button
          className={styles.actionButton}
          onClick={onClear}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Clear chat"
        >
          <Trash2 className="h-4 w-4" />
        </motion.button>
        <motion.button
          className={styles.closeButton}
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}; 
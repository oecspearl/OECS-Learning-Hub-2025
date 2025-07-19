'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './QuickActions.module.css';

interface QuickAction {
  id: string;
  label: string;
  prompt: string;
  icon?: string;
}

interface QuickActionsProps {
  actions: QuickAction[];
  onAction: (action: QuickAction) => void;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  actions,
  onAction,
  theme,
}) => {
  if (actions.length === 0) return null;

  return (
    <div className={styles.container}>
      <div className={styles.actionsList}>
        {actions.map((action) => (
          <motion.button
            key={action.id}
            className={styles.actionButton}
            onClick={() => onAction(action)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: theme.background,
              color: theme.text,
              borderColor: theme.secondary,
            }}
          >
            {action.icon && (
              <span className={styles.icon}>
                {action.icon === 'help' && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                )}
                {action.icon === 'school' && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                )}
                {action.icon === 'feedback' && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                )}
              </span>
            )}
            <span className={styles.label}>{action.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}; 
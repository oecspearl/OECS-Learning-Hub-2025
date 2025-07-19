'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './TypingIndicator.module.css';

interface TypingIndicatorProps {
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ theme }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: theme.secondary,
        color: theme.text,
      }}
    >
      <div className={styles.dots}>
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={styles.dot}
            animate={{
              y: ['0%', '-50%', '0%'],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}; 
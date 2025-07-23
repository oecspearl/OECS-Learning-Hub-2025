'use client';

import React from 'react';
import { useAssistant } from '@/hooks/useAssistant';
import { WebAssistant } from './WebAssistant';

interface AssistantWrapperProps {
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export const AssistantWrapper: React.FC<AssistantWrapperProps> = ({
  theme,
}) => {
  const { isOpen, setIsOpen, currentPage, userRole } = useAssistant();

  return (
    <WebAssistant
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      currentPage={currentPage}
      userRole={userRole}
      theme={theme}
    />
  );
}; 
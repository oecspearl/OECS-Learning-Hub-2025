'use client';

import React from 'react';
import { useAssistant } from '@/hooks/useAssistant';
import { WebAssistant } from './WebAssistant';

interface AssistantWrapperProps {
  userRole: string;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export const AssistantWrapper: React.FC<AssistantWrapperProps> = ({
  userRole,
  theme,
}) => {
  const { isOpen, setIsOpen, currentPage } = useAssistant();

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
"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export const useAssistant = () => {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  
  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, newMessage])

    // TODO: Implement actual message sending to API
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: "I'm here to help! This is a placeholder response.",
      role: 'assistant',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, assistantMessage])
  }

  const clearMessages = () => {
    setMessages([])
  }

  const quickActions = [
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
  ]
  
  return {
    user,
    userRole: user?.user_metadata?.role || 'teacher',
    isAuthenticated: !!user,
    isOpen,
    setIsOpen,
    currentPage,
    setCurrentPage,
    messages,
    sendMessage,
    quickActions,
    clearMessages
  }
} 
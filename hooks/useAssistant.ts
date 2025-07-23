"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useState, useEffect } from "react"

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export const useAssistant = () => {
  const { user, session } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  // Update current page when component mounts or route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPage(window.location.pathname)
    }
  }, [])
  
  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, newMessage])

    try {
      // Call the OpenAI API
      const response = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.access_token || ''}`,
        },
        body: JSON.stringify({
          message: content,
          context: {
            currentPage,
            userRole: user?.user_metadata?.role || 'teacher',
          },
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response from assistant')
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || 'Sorry, I encountered an error. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message to assistant:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, errorMessage])
    }
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
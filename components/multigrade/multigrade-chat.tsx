"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"
import { Send, Trash2, Loader2, Users, AlertCircle } from "lucide-react"
import { chatWithPearl, type ChatMessage } from "@/app/actions/chat-with-pearl"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

type Message = ChatMessage

export function MultigradeChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm Pearl, your AI assistant specialized in multigrade teaching. Generate a multigrade lesson plan, and I'll help you optimize it for teaching multiple grade levels effectively!",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentLessonPlan, setCurrentLessonPlan] = useState<string | null>(null)
  const [lessonContext, setLessonContext] = useState<{
    subject?: string
    gradeRange?: string
    topic?: string
    differentiationStrategies?: string[]
  }>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const handleLessonPlanGenerated = (event: Event) => {
      console.log("MultigradeChat received lesson plan event:", event)
      const customEvent = event as CustomEvent

      if (customEvent.detail) {
        const { content, metadata } = customEvent.detail;
        if (content) {
          console.log("MultigradeChat found lesson plan content, length:", content.length)
          setCurrentLessonPlan(content)

          // Capture multigrade-specific context
          const newContext = {
            subject: metadata?.subject || "",
            gradeRange: metadata?.gradeRange || "",
            topic: metadata?.topic || "",
            differentiationStrategies: metadata?.differentiationStrategies || [],
          }

          setLessonContext(newContext)
          console.log("Set multigrade lesson context:", newContext)

          // Add a message from Pearl acknowledging the new multigrade lesson plan
          const newMessage: Message = {
            id: typeof window !== 'undefined' ? Date.now().toString() : 'server',
            role: "assistant",
            content: `I see you've generated a multigrade lesson plan${newContext.topic ? ` on "${newContext.topic}"` : ""}${
              newContext.gradeRange ? ` for ${newContext.gradeRange}` : ""
            }! I can help you with differentiation strategies, managing multiple grade levels, assessment approaches, and classroom management techniques. What would you like to discuss?`,
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, newMessage])
        }
      }
    }

    window.addEventListener("multigradePlanGenerated", handleLessonPlanGenerated)

    return () => {
      window.removeEventListener("multigradePlanGenerated", handleLessonPlanGenerated)
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: typeof window !== 'undefined' ? Date.now().toString() : 'server',
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const messageHistory = [...messages, userMessage]

      // Add multigrade-specific context to the chat
      const multigradeChatParams = {
        messages: messageHistory,
        lessonPlan: currentLessonPlan || undefined,
        specialNeeds: [],
        multigradeFocus: true,
        gradeRange: lessonContext.gradeRange,
        differentiationStrategies: lessonContext.differentiationStrategies,
      }

      const assistantMessage = await chatWithPearl(multigradeChatParams)
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: currentLessonPlan
          ? `I'm here to help with your multigrade lesson plan${lessonContext.topic ? ` on "${lessonContext.topic}"` : ""}${
              lessonContext.gradeRange ? ` for ${lessonContext.gradeRange}` : ""
            }. What multigrade teaching questions do you have?`
          : "Hello! I'm Pearl, your AI assistant specialized in multigrade teaching. Generate a multigrade lesson plan, and I'll help you optimize it for teaching multiple grade levels effectively!",
        timestamp: new Date(),
      },
    ])
  }

  const formatTimestamp = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <Card className="h-full shadow-lg border-green-200">
      <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-green-300">
            <AvatarImage src="/Pearl_sign.png" alt="Pearl AI" />
            <AvatarFallback className="bg-green-600 text-white">P</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl font-bold text-green-800">Chat with Pearl - Multigrade Expert</CardTitle>
            {currentLessonPlan && lessonContext.subject && lessonContext.topic && (
              <div className="flex items-center gap-2 mt-1">
                <Users className="h-3 w-3 text-green-600" />
                <span className="text-xs text-green-600">
                  Discussing: {lessonContext.subject} - {lessonContext.topic} ({lessonContext.gradeRange})
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {currentLessonPlan && lessonContext.gradeRange && (
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-xs">
              {lessonContext.gradeRange}
            </Badge>
          )}
          <Button variant="ghost" size="sm" onClick={handleClearChat} className="hover:bg-green-100">
            <Trash2 className="h-4 w-4 mr-1" /> Clear
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        {!currentLessonPlan && (
          <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Generate a multigrade lesson plan first to get specialized assistance from Pearl for teaching multiple
              grade levels.
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4 h-[400px] overflow-y-auto pr-2">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src="/Pearl_sign.png" alt="Pearl" />
                    <AvatarFallback className="bg-green-600 text-white">P</AvatarFallback>
                  </Avatar>
                )}
                {message.role === "user" && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback className="bg-secondary">You</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-green-600 text-white"
                      : "bg-green-50 border border-green-200 text-green-900"
                  }`}
                >
                  <div className="mb-1 text-xs opacity-70">
                    {message.role === "user" ? "You" : "Pearl"} • {formatTimestamp(message.timestamp)}
                  </div>
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarImage src="/Pearl_sign.png" alt="Pearl" />
                  <AvatarFallback className="bg-green-600 text-white">P</AvatarFallback>
                </Avatar>
                <div className="rounded-lg p-3 bg-green-50 border border-green-200">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Thinking about multigrade strategies...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>

      <CardFooter className="border-t p-4 bg-green-50/50">
        <div className="flex w-full items-center space-x-2">
          <Textarea
            placeholder={
              currentLessonPlan
                ? "Ask Pearl about multigrade teaching strategies, differentiation, or classroom management..."
                : "Generate a multigrade lesson plan first, then ask questions..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
            className="flex-1 min-h-[60px] max-h-[120px] border-green-200 focus-visible:ring-green-300"
            disabled={!currentLessonPlan}
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim() || !currentLessonPlan}
            className="h-full bg-green-600 hover:bg-green-700"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Send className="h-4 w-4 mr-2" />}
            Send
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

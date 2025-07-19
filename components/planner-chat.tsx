"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"
import { Send, Trash2, Loader2, BookOpen, AlertCircle } from "lucide-react"
import { chatWithPearl, type ChatMessage, type ChatWithPearlParams } from "@/app/actions/chat-with-pearl"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

type Message = ChatMessage

export function PlannerChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm Pearl, your AI assistant. Generate a lesson plan, and I'll be ready to answer your questions about it!",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentLessonPlan, setCurrentLessonPlan] = useState<string | null>(null)
  const [lessonContext, setLessonContext] = useState<{
    subject?: string
    gradeLevel?: string
    topic?: string
    specialNeeds?: string[]
  }>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Listen for lesson plan generation events
  useEffect(() => {
    const handleLessonPlanGenerated = (event: Event) => {
      console.log("PlannerChat received lesson plan event:", event)
      const customEvent = event as CustomEvent

      if (customEvent.detail) {
        console.log("Event detail:", customEvent.detail)

        // Try to find the lesson plan content
        let lessonPlanContent = null

        if (customEvent.detail.lessonPlan) {
          lessonPlanContent = customEvent.detail.lessonPlan
        } else if (customEvent.detail.content) {
          lessonPlanContent = customEvent.detail.content
        } else if (typeof customEvent.detail === "string") {
          lessonPlanContent = customEvent.detail
        } else if (customEvent.detail && typeof customEvent.detail === "object") {
          // Try to find any string property that might contain the lesson plan
          for (const key in customEvent.detail) {
            if (typeof customEvent.detail[key] === "string" && customEvent.detail[key].length > 100) {
              lessonPlanContent = customEvent.detail[key]
              break
            }
          }
        }

        if (lessonPlanContent) {
          console.log("PlannerChat found lesson plan content, length:", lessonPlanContent.length)
          setCurrentLessonPlan(lessonPlanContent)

          // Capture lesson context
          const newContext = {
            subject: customEvent.detail.subject || "",
            gradeLevel: customEvent.detail.gradeLevel || "",
            topic: customEvent.detail.topic || "",
            specialNeeds: customEvent.detail.specialNeeds || [],
          }

          setLessonContext(newContext)
          console.log("Set lesson context:", newContext)

          // Add a message from Pearl acknowledging the new lesson plan
          const newMessage: Message = {
            id: typeof window !== 'undefined' ? Date.now().toString() : 'server',
            role: "assistant",
            content: `I see you've generated a new lesson plan${newContext.topic ? ` on "${newContext.topic}"` : ""}${
              newContext.gradeLevel ? ` for grade ${newContext.gradeLevel}` : ""
            }! Feel free to ask me any questions about it or how to improve specific sections.`,
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, newMessage])
        } else {
          console.warn("PlannerChat could not find lesson plan content in event")
        }
      }
    }

    // Listen for both event naming conventions
    window.addEventListener("lessonPlanGenerated", handleLessonPlanGenerated)
    window.addEventListener("lesson-plan-generated", handleLessonPlanGenerated)

    // Check if there's a lesson plan in localStorage on mount
    const checkLocalStorage = () => {
      try {
        const storedLessonPlan = localStorage.getItem("currentLessonPlan")
        if (storedLessonPlan) {
          const parsedData = JSON.parse(storedLessonPlan)
          if (parsedData.content) {
            console.log("PlannerChat found lesson plan in localStorage")
            setCurrentLessonPlan(parsedData.content)

            // Add a message from Pearl acknowledging the existing lesson plan
            const newMessage: Message = {
              id: typeof window !== 'undefined' ? Date.now().toString() : 'server',
              role: "assistant",
              content: "I see you have an existing lesson plan. Feel free to ask me any questions about it!",
              timestamp: new Date(),
            }
            setMessages((prev) => [...prev, newMessage])
          }
        }
      } catch (error) {
        console.error("Error checking localStorage for lesson plan:", error)
      }
    }

    checkLocalStorage()

    return () => {
      window.removeEventListener("lessonPlanGenerated", handleLessonPlanGenerated)
      window.removeEventListener("lesson-plan-generated", handleLessonPlanGenerated)
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
      // Get all messages for context
      const messageHistory = [...messages, userMessage]

      // Prepare parameters for the chat with Pearl
      const chatParams: ChatWithPearlParams = {
        messages: messageHistory,
        lessonPlan: currentLessonPlan || undefined,
        specialNeeds: lessonContext.specialNeeds,
      }

      // Call the server action to get a response from Pearl
      const assistantMessage = await chatWithPearl(chatParams)

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
          ? `I'm here to help with your lesson plan${lessonContext.topic ? ` on "${lessonContext.topic}"` : ""}${
              lessonContext.gradeLevel ? ` for grade ${lessonContext.gradeLevel}` : ""
            }. What questions do you have?`
          : "Hello! I'm Pearl, your AI assistant. Generate a lesson plan, and I'll be ready to answer your questions about it!",
        timestamp: new Date(),
      },
    ])
  }

  const formatTimestamp = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <Card className="h-full shadow-lg border-primary/10">
      <CardHeader className="flex flex-row items-center justify-between bg-muted/30 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarImage src="/Pearl_sign.png" alt="Pearl AI" />
            <AvatarFallback className="bg-primary text-primary-foreground">P</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl font-bold text-primary">Chat with Pearl</CardTitle>
            {currentLessonPlan && lessonContext.subject && lessonContext.topic && (
              <div className="flex items-center gap-2 mt-1">
                <BookOpen className="h-3 w-3 text-primary/70" />
                <span className="text-xs text-muted-foreground">
                  Discussing: {lessonContext.subject} - {lessonContext.topic}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {currentLessonPlan && lessonContext.gradeLevel && (
            <Badge variant="outline" className="bg-primary/5 text-xs">
              Grade {lessonContext.gradeLevel}
            </Badge>
          )}
          <Button variant="ghost" size="sm" onClick={handleClearChat} className="hover:bg-primary/10">
            <Trash2 className="h-4 w-4 mr-1" /> Clear
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        {!currentLessonPlan && (
          <Alert className="mb-4 bg-amber-50 text-amber-800 border-amber-200">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Generate a lesson plan first to get personalized assistance from Pearl.</AlertDescription>
          </Alert>
        )}
        <div className="space-y-4 h-[400px] overflow-y-auto pr-2">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src="/Pearl_sign.png" alt="Pearl" />
                    <AvatarFallback className="bg-primary text-primary-foreground">P</AvatarFallback>
                  </Avatar>
                )}
                {message.role === "user" && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback className="bg-secondary">You</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg p-3 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted border border-border/50"
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
                  <AvatarFallback className="bg-primary text-primary-foreground">P</AvatarFallback>
                </Avatar>
                <div className="rounded-lg p-3 bg-muted border border-border/50">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="border-t p-4 bg-muted/20">
        <div className="flex w-full items-center space-x-2">
          <Textarea
            placeholder={
              currentLessonPlan
                ? "Ask Pearl about your lesson plan..."
                : "Generate a lesson plan first, then ask questions..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
            className="flex-1 min-h-[60px] max-h-[120px] border-primary/20 focus-visible:ring-primary/30"
            disabled={!currentLessonPlan}
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim() || !currentLessonPlan}
            className="h-full"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Send className="h-4 w-4 mr-2" />}
            Send
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

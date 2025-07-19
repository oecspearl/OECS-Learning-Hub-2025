"use client"

import type React from "react"

import { QuizProvider } from "@/lib/stores/quiz-store"

export function QuizStoreProvider({ children }: { children: React.ReactNode }) {
  return <QuizProvider>{children}</QuizProvider>
}

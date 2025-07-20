"use client"

import type React from "react"

import { createContext, useContext, useReducer, type ReactNode } from "react"

interface GeneratedQuiz {
  id?: string
  title: string
  description?: string
  subject: string
  grade: string
  topic: string
  content: string
  questionCount: number
  questionTypes?: string[]
  difficulty?: string
  timeLimit?: number
  tags?: string[]
  instructions?: string
}

interface QuizState {
  generatedQuiz: GeneratedQuiz | null
  isGenerating: boolean
}

type QuizAction =
  | { type: "SET_GENERATED_QUIZ"; payload: GeneratedQuiz | null }
  | { type: "SET_IS_GENERATING"; payload: boolean }

const initialState: QuizState = {
  generatedQuiz: null,
  isGenerating: false,
}

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SET_GENERATED_QUIZ":
      return { ...state, generatedQuiz: action.payload }
    case "SET_IS_GENERATING":
      return { ...state, isGenerating: action.payload }
    default:
      return state
  }
}

const QuizContext = createContext<{
  state: QuizState
  dispatch: React.Dispatch<QuizAction>
} | null>(null)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState)

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>
}

export function useQuizStore() {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error("useQuizStore must be used within a QuizProvider")
  }

  const { state, dispatch } = context

  return {
    generatedQuiz: state.generatedQuiz,
    isGenerating: state.isGenerating,
    setGeneratedQuiz: (quiz: GeneratedQuiz | null) => dispatch({ type: "SET_GENERATED_QUIZ", payload: quiz }),
    setIsGenerating: (isGenerating: boolean) => dispatch({ type: "SET_IS_GENERATING", payload: isGenerating }),
  }
}

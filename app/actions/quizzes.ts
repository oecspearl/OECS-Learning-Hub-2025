"use server"

import { z } from "zod"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

interface Quiz {
  id?: string
  title: string
  description?: string | null
  subject: string
  grade: string
  topic: string
  content: string
  question_count?: number
  question_types?: string | null
  difficulty?: string | null
  time_limit?: number | null
  tags?: string | null
  instructions?: string | null
  user_id: string
  created_at?: string
  updated_at?: string
}

export async function saveQuiz(quizData: Quiz) {
  try {
    console.log("Attempting to save quiz with data:", quizData)
    
    const id = `quiz_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    const quiz = {
      id,
      title: quizData.title,
      description: quizData.description || "",
      subject: quizData.subject,
      grade: quizData.grade,
      topic: quizData.topic,
      content: quizData.content,
      question_count: quizData.question_count || 10,
      question_types: quizData.question_types || "[]",
      difficulty: quizData.difficulty || "Medium",
      time_limit: quizData.time_limit || 30,
      tags: quizData.tags || "[]",
      instructions: quizData.instructions || "",
      user_id: quizData.user_id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    
    console.log("Quiz object to save:", quiz)
    
    const result = await db.quizzes.create(quiz)
    
    console.log("Quiz saved successfully:", result)
    
    return { success: true, data: result }
  } catch (error) {
    console.error("Error saving quiz:", error)
    console.error("Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      quizData
    })
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error",
      details: error instanceof Error ? error.stack : undefined
    }
  }
}

export async function getAllQuizzes(): Promise<Quiz[]> {
  try {
    const result = await db.quizzes.findMany()
    return result || []
  } catch (error) {
    console.error("Error fetching quizzes:", error)
    return []
  }
}

export async function getQuizzesByUserId(userId: string): Promise<Quiz[]> {
  try {
    const result = await db.quizzes.findMany({ user_id: userId })
    return result || []
  } catch (error) {
    console.error("Error fetching quizzes for user:", error)
    return []
  }
}

export async function getQuizById(id: string): Promise<Quiz | null> {
  try {
    const result = await db.quizzes.findFirst({ id })
    return result || null
  } catch (error) {
    console.error("Error fetching quiz:", error)
    return null
  }
}

export async function updateQuiz(id: string, quizData: Partial<Quiz>) {
  try {
    const result = await db.quizzes.update(id, {
      ...quizData,
      updated_at: new Date().toISOString()
    })
    
    revalidatePath('/dashboard/teacher')
    revalidatePath('/quiz')
    
    return { success: true, data: result }
  } catch (error) {
    console.error("Error updating quiz:", error)
    return { success: false, error: "Failed to update quiz" }
  }
}

export async function deleteQuiz(id: string) {
  try {
    await db.quizzes.delete(id)
    
    revalidatePath('/dashboard/teacher')
    revalidatePath('/quiz')
    
    return { success: true }
  } catch (error) {
    console.error("Error deleting quiz:", error)
    return { success: false, error: "Failed to delete quiz" }
  }
}

"use server"

import { z } from "zod"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

const quizSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  grade_level: z.string().min(1, "Grade is required"),
  topic: z.string().optional(),
  questions: z.array(z.object({
    question: z.string(),
    options: z.array(z.string()),
    correct_answer: z.string(),
    explanation: z.string().optional(),
  })),
  instructions: z.string().optional(),
  answer_key: z.array(z.object({
    question_index: z.number(),
    correct_answer: z.string(),
    explanation: z.string().optional(),
  })).optional(),
  question_count: z.number().default(10),
  time_limit_minutes: z.number().default(30),
  difficulty_level: z.enum(["easy", "medium", "hard"]).default("medium"),
  randomize_questions: z.boolean().default(false),
  show_correct_answers: z.boolean().default(true),
  allow_retakes: z.boolean().default(true),
  tags: z.array(z.string()).optional(),
  is_public: z.boolean().default(false),
  created_by: z.string(),
})

export interface Quiz {
  id: string
  title: string
  description: string | null
  subject: string
  grade_level: string
  topic: string | null
  questions: any
  instructions: string | null
  answer_key: any | null
  question_count: number
  time_limit_minutes: number
  difficulty_level: string
  randomize_questions: boolean
  show_correct_answers: boolean
  allow_retakes: boolean
  tags: string[] | null
  is_public: boolean
  created_by: string
  created_at: string
  updated_at: string
}

export interface QuizzesResponse {
  success: boolean
  data: Quiz[]
  error?: string
}

export async function generateQuiz(formData: any) {
  try {
    console.log("generateQuiz called with:", formData)

    const prompt = `Create a comprehensive quiz for the following specifications:

Subject: ${formData.subject}
Grade Level: ${formData.gradeLevel}
Topic: ${formData.topic}
Number of Questions: ${formData.questionCount || 10}
Difficulty Level: ${formData.difficultyLevel || "medium"}
Question Types: ${formData.questionTypes || "multiple choice"}

Please create a quiz that includes:

1. **Clear Instructions** for students
2. **Multiple Choice Questions** with 4 options each
3. **Correct Answers** for each question
4. **Explanations** for why answers are correct
5. **Age-appropriate language** for the grade level
6. **Comprehensive coverage** of the topic
7. **Varied difficulty** within the specified level

Format the response as a JSON object with the following structure:
{
  "title": "Quiz Title",
  "description": "Quiz description",
  "instructions": "Instructions for students",
  "questions": [
    {
      "question": "Question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct_answer": "Option A",
      "explanation": "Explanation of why this is correct"
    }
  ],
  "answer_key": [
    {
      "question_index": 0,
      "correct_answer": "Option A",
      "explanation": "Explanation of why this is correct"
    }
  ]
}

Make sure the quiz is:
- Educational and engaging
- Appropriate for the grade level
- Covers the topic comprehensively
- Has clear, unambiguous questions
- Includes helpful explanations`

    const result = await generateText({
      model: openai("gpt-4"),
      prompt,
      temperature: 0.7,
      maxTokens: 3000,
    })

    if (!result.text) {
      throw new Error("Failed to generate quiz content")
    }

    // Try to parse the JSON response
    try {
      const quizData = JSON.parse(result.text)
      return {
        success: true,
        quiz: quizData,
      }
    } catch (parseError) {
      console.error("Error parsing quiz JSON:", parseError)
      // Return the raw text if JSON parsing fails
      return {
        success: true,
        quiz: {
          title: `Quiz on ${formData.topic}`,
          description: "Generated quiz",
          instructions: "Answer all questions to the best of your ability.",
          questions: [],
          answer_key: [],
          rawContent: result.text,
        },
      }
    }
  } catch (error) {
    console.error("Error in generateQuiz:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

export async function saveQuiz(formData: any) {
  try {
    console.log("Starting saveQuiz function")

    // Check if we're dealing with FormData or a regular object
    const id = formData.get ? formData.get("id") : formData.id
    const title = formData.get ? formData.get("title") : formData.title
    const description = formData.get ? formData.get("description") : formData.description
    const subject = formData.get ? formData.get("subject") : formData.subject
    const grade_level = formData.get ? formData.get("gradeLevel") : formData.gradeLevel
    const topic = formData.get ? formData.get("topic") : formData.topic
    const questions = formData.get ? JSON.parse(formData.get("questions")) : formData.questions
    const instructions = formData.get ? formData.get("instructions") : formData.instructions
    const answer_key = formData.get ? JSON.parse(formData.get("answer_key")) : formData.answer_key
    const question_count = formData.get ? parseInt(formData.get("question_count") || "10") : parseInt(formData.question_count || "10")
    const time_limit_minutes = formData.get ? parseInt(formData.get("time_limit_minutes") || "30") : parseInt(formData.time_limit_minutes || "30")
    const difficulty_level = formData.get ? formData.get("difficulty_level") : formData.difficulty_level || "medium"
    const randomize_questions = formData.get ? formData.get("randomize_questions") === "true" : formData.randomize_questions || false
    const show_correct_answers = formData.get ? formData.get("show_correct_answers") === "true" : formData.show_correct_answers !== false
    const allow_retakes = formData.get ? formData.get("allow_retakes") === "true" : formData.allow_retakes !== false
    const tags = formData.get ? JSON.parse(formData.get("tags") || "[]") : formData.tags || []
    const is_public = formData.get ? formData.get("is_public") === "true" : formData.is_public || false
    const created_by = formData.get ? formData.get("userId") : formData.userId || "1"

    console.log("Extracted quiz data:", {
      title,
      subject,
      grade_level,
      topic,
      question_count,
      difficulty_level,
      created_by,
    })

    // Validate required fields
    const missingFields = []
    if (!title) missingFields.push("title")
    if (!subject) missingFields.push("subject")
    if (!questions) missingFields.push("questions")
    if (!grade_level) missingFields.push("grade level")

    if (missingFields.length > 0) {
      console.error("Missing required fields:", missingFields)
      return {
        success: false,
        error: `Missing required fields: ${missingFields.join(", ")} ${missingFields.length > 1 ? "are" : "is"} required`,
      }
    }

    // Store the quiz in the database
    try {
      const now = new Date().toISOString()
      
      if (id) {
        // Update existing quiz
        console.log("Updating existing quiz with ID:", id)
        const updatedQuiz = await db.quizzes.update(id, {
          title,
          description,
          subject,
          grade_level,
          topic,
          questions,
          instructions,
          answer_key,
          question_count,
          time_limit_minutes,
          difficulty_level,
          randomize_questions,
          show_correct_answers,
          allow_retakes,
          tags,
          is_public,
          updated_at: now,
        })

        console.log("Update successful")
        return { success: true, data: updatedQuiz }
      } else {
        // Create new quiz
        console.log("Creating new quiz")
        const newQuiz = await db.quizzes.create({
          title,
          description,
          subject,
          grade_level,
          topic,
          questions,
          instructions,
          answer_key,
          question_count,
          time_limit_minutes,
          difficulty_level,
          randomize_questions,
          show_correct_answers,
          allow_retakes,
          tags,
          is_public,
          created_by,
          created_at: now,
          updated_at: now,
        })

        console.log("Insert successful, returned ID:", newQuiz.id)
        return { success: true, data: newQuiz }
      }
    } catch (dbError) {
      console.error("Database operation failed:", dbError)
      return {
        success: false,
        error: `Database error: ${dbError instanceof Error ? dbError.message : "Unknown error"}`,
      }
    }
  } catch (error) {
    console.error("Error saving quiz:", error)
    return {
      success: false,
      error: "Failed to save quiz",
    }
  }
}

export async function getQuizzes() {
  try {
    const quizzes = await db.quizzes.findMany()
    return {
      success: true,
      data: quizzes,
    }
  } catch (error) {
    console.error("Error getting quizzes:", error)
    return {
      success: false,
      data: [],
      error: "Failed to get quizzes",
    }
  }
}

export async function getQuizById(id: string) {
  try {
    const quiz = await db.quizzes.findFirst({ id })

    if (!quiz) {
      return null
    }

    return quiz
  } catch (error) {
    console.error("Error getting quiz by ID:", error)
    return null
  }
}

export async function deleteQuiz(id: string) {
  try {
    await db.quizzes.delete(id)

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error deleting quiz:", error)
    return {
      success: false,
      error: "Failed to delete quiz",
    }
  }
}

export async function updateQuiz(id: string, data: Partial<z.infer<typeof quizSchema>>) {
  try {
    console.log(`UPDATE QUIZ: Starting update for quiz ${id}`)
    console.log("UPDATE QUIZ: Data to update:", data)

    const result = await db.quizzes.update(id, {
      ...data,
      updated_at: new Date().toISOString(),
    })

    console.log(`UPDATE QUIZ: Database update successful for quiz ${id}`)

    // Revalidate relevant paths
    revalidatePath(`/quiz/${id}`)
    revalidatePath(`/quiz/${id}/edit`)
    revalidatePath("/dashboard")

    return {
      success: true,
      data: result,
      source: "database",
    }
  } catch (error) {
    console.error("UPDATE QUIZ: Error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update quiz",
    }
  }
}

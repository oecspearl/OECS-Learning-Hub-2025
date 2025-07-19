"use server"

import { generateText } from "@/lib/openai"

interface QuizParams {
  title: string
  subject: string
  grade: string
  topic: string
  description?: string
  questionCount: number
  questionTypes: string[]
  difficulty: string
  timeLimit?: number
  instructions?: string
  tags?: string[]
}

export async function generateQuiz(params: QuizParams) {
  try {
    const prompt = `Create a comprehensive quiz with the following specifications:

Title: ${params.title}
Subject: ${params.subject}
Grade Level: ${params.grade}
Topic: ${params.topic}
${params.description ? `Description: ${params.description}` : ""}
Number of Questions: ${params.questionCount}
Question Types: ${params.questionTypes.join(", ")}
Difficulty Level: ${params.difficulty}
${params.timeLimit ? `Time Limit: ${params.timeLimit} minutes` : ""}
${params.instructions ? `Instructions: ${params.instructions}` : ""}
${params.tags?.length ? `Tags: ${params.tags.join(", ")}` : ""}

Create a well-structured quiz that:
1. Is appropriate for the specified grade level
2. Covers the topic comprehensively
3. Includes a mix of question types as specified
4. Has clear, unambiguous questions
5. Includes detailed answer explanations
6. Follows the specified difficulty level
7. Includes a clear scoring key with points per question and total possible score

IMPORTANT: Generate actual quiz questions, answers, and scoring information. Do not use placeholder text.

Format your response as a complete quiz with the following structure:

# ${params.title}

**Subject:** ${params.subject}
**Grade Level:** ${params.grade}
**Topic:** ${params.topic}
${params.description ? `**Description:** ${params.description}` : ""}

## Questions

[Generate ${params.questionCount} actual questions based on the topic. Use the specified question types: ${params.questionTypes.join(", ")}]

## Answer Key

[Provide correct answers with explanations for each question]

## Scoring Key

[Specify points for each question and total possible score]

## Instructions

${params.instructions || "Complete all questions to the best of your ability."}`

    const result = await generateText({
      model: "gpt-4",
      prompt,
      temperature: 0.7,
      maxTokens: 4000,
    })

    if (!result.text) {
      throw new Error("Failed to generate quiz content")
    }

    console.log("Raw AI response:", result.text)

    // Create quiz data from the natural language response
    const quizData = {
      title: params.title,
      description: params.description || `Quiz on ${params.topic}`,
      subject: params.subject,
      grade: params.grade,
      topic: params.topic,
      content: result.text, // Use the AI response directly as content
      questionCount: params.questionCount,
      questionTypes: params.questionTypes,
      difficulty: params.difficulty,
      timeLimit: params.timeLimit,
      tags: params.tags || [],
      instructions: params.instructions || "Complete all questions to the best of your ability."
    }

    console.log("Successfully generated quiz:", quizData.title)

    return {
      success: true,
      data: quizData,
    }
  } catch (error) {
    console.error("Error generating quiz:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to generate quiz",
    }
  }
}

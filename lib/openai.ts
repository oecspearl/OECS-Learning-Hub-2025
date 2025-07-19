import { OpenAI } from "openai"

// Initialize the OpenAI client
const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
})

// Function to generate text using OpenAI
export async function generateText({
  model,
  prompt,
  temperature = 0.7,
  maxTokens = 2000,
}: {
  model: string
  prompt: string
  temperature?: number
  maxTokens?: number
}) {
  try {
    const response = await openaiClient.chat.completions.create({
      model: model === "gpt-4o" ? "gpt-4o" : "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an expert educator and quiz creator. Create comprehensive, well-structured educational quizzes that are appropriate for the specified grade level and subject. Always include clear instructions, properly formatted questions, and detailed answer keys with explanations.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature,
      max_tokens: maxTokens,
    })

    return { text: response.choices[0]?.message?.content || "" }
  } catch (error) {
    console.error("Error generating text with OpenAI:", error)

    // Provide more specific error handling
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        throw new Error("OpenAI API key is not configured properly")
      } else if (error.message.includes("quota")) {
        throw new Error("OpenAI API quota exceeded")
      } else if (error.message.includes("rate limit")) {
        throw new Error("Rate limit exceeded. Please try again in a moment")
      }
    }

    throw new Error("Failed to generate content with AI")
  }
}

// Helper function to specify OpenAI model
export const openai = (model: string) => model

// Export the OpenAI client for direct use
export { openaiClient }

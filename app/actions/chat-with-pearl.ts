"use server"

export type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export type ChatWithPearlParams = {
  messages: ChatMessage[]
  lessonPlan?: string
  specialNeeds?: string[]
}

export async function chatWithPearl(params: ChatWithPearlParams): Promise<ChatMessage> {
  try {
    const { messages, lessonPlan, specialNeeds } = params

    // Format the conversation history
    const formattedHistory = messages
      .map((msg) => {
        return `${msg.role === "user" ? "User" : "Pearl"}: ${msg.content}`
      })
      .join("\n\n")

    // Create the prompt for Pearl
    const prompt = `
You are Pearl, an AI teaching assistant for OECS (Organization of Eastern Caribbean States) teachers.
You help teachers create lesson plans, find resources, and answer questions about teaching methodologies.

Here is the conversation history:
${formattedHistory}

${lessonPlan ? `Current lesson plan context:\n${lessonPlan.substring(0, 1000)}${lessonPlan.length > 1000 ? "..." : ""}` : "No lesson plan provided yet."}

${specialNeeds && specialNeeds.length > 0 ? `Special needs to consider: ${specialNeeds.join(", ")}` : "No special needs specified."}

Respond as Pearl, providing helpful, accurate, and supportive information for teachers.
Focus on OECS curriculum standards and best teaching practices.
If asked to create a lesson plan, provide a structured outline that the teacher can use.
`

    // Temporary mock response until AI SDK is properly configured
    const mockResponse = `Hello! I'm Pearl, your AI teaching assistant. I'm here to help you with lesson planning, finding resources, and answering questions about teaching methodologies. 

Based on our conversation, I can see you're working on creating engaging lessons. Would you like me to help you with:
- Lesson plan structure and objectives
- Finding relevant resources and activities
- Assessment strategies
- Cross-curricular connections

Please let me know what specific assistance you need!`

    const assistantMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "assistant",
      content: mockResponse,
      timestamp: new Date(),
    }

    return assistantMessage
  } catch (error) {
    console.error("Error chatting with Pearl:", error)
    return {
      id: Date.now().toString(),
      role: "assistant",
      content: "I'm sorry, I'm having trouble responding right now. Please try again in a moment.",
      timestamp: new Date(),
    }
  }
}

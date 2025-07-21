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
  multigradeFocus?: boolean
  gradeRange?: string
  differentiationStrategies?: string[]
}

export async function chatWithPearl(params: ChatWithPearlParams): Promise<ChatMessage> {
  try {
    const { messages, lessonPlan, specialNeeds, multigradeFocus, gradeRange, differentiationStrategies } = params

    // Format the conversation history
    const formattedHistory = messages
      .map((msg) => {
        return `${msg.role === "user" ? "User" : "Pearl"}: ${msg.content}`
      })
      .join("\n\n")

    // Create context-aware prompt for Pearl
    let contextPrompt = ""
    
    if (lessonPlan) {
      contextPrompt += `\n\nCURRENT LESSON PLAN CONTEXT:\n${lessonPlan.substring(0, 2000)}${lessonPlan.length > 2000 ? "..." : ""}`
    }
    
    if (multigradeFocus) {
      contextPrompt += `\n\nMULTIGRADE TEACHING CONTEXT:
- Grade Range: ${gradeRange || "Multiple grades"}
- Differentiation Strategies: ${differentiationStrategies?.join(", ") || "Standard differentiation"}
- Focus: Teaching multiple grade levels simultaneously`
    }
    
    if (specialNeeds && specialNeeds.length > 0) {
      contextPrompt += `\n\nSPECIAL NEEDS CONSIDERATIONS: ${specialNeeds.join(", ")}`
    }

    const systemPrompt = `You are Pearl, an AI teaching assistant for OECS (Organization of Eastern Caribbean States) teachers.
You help teachers create lesson plans, find resources, and answer questions about teaching methodologies.

Your expertise includes:
- OECS curriculum standards and best practices
- Lesson planning and assessment strategies
- Cross-curricular integration
- Differentiation and inclusive teaching
- Technology integration in education
- Professional development guidance

${contextPrompt}

CONVERSATION HISTORY:
${formattedHistory}

Respond as Pearl, providing helpful, accurate, and supportive information for teachers.
Focus on OECS curriculum standards and best teaching practices.
If asked to create a lesson plan, provide a structured outline that the teacher can use.
Be specific and actionable in your advice.`

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: messages[messages.length - 1].content }
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    const assistantResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response at this time."

    const assistantMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "assistant",
      content: assistantResponse,
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

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    // Get user from Supabase Auth
    const authHeader = request.headers.get('authorization')
    let user = null
    
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '')
      const { data: { user: authUser }, error } = await supabase.auth.getUser(token)
      if (!error && authUser) {
        user = authUser
      }
    }

    // For now, we'll proceed without user authentication for the assistant
    // In a production environment, you'd want to properly authenticate the user

    const systemPrompt = `You are an AI assistant for the OECS Learning Hub, an educational platform for teachers in the Organization of Eastern Caribbean States. 

Current context:
- Page: ${context?.currentPage || 'Unknown'}
- User role: ${context?.userRole || 'teacher'}

Provide helpful, educational guidance while being concise and practical. Focus on curriculum development, teaching strategies, and educational best practices relevant to the Caribbean context.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    const assistantResponse = data.choices[0]?.message?.content || 'Sorry, I encountered an error. Please try again.'

    return NextResponse.json({ response: assistantResponse })
  } catch (error) {
    console.error('Assistant chat error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
} 
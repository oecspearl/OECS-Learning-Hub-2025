import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { OpenAIService } from '@/services/openaiService';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  console.log('🚀 API Route: Received POST request');
  
  try {
    // Validate request body
    let body;
    try {
      body = await req.json();
      console.log('📝 API Route: Request body:', body);
    } catch (e) {
      console.error('❌ API Route: Invalid JSON in request body');
      return NextResponse.json(
        { error: 'Invalid request body', details: 'Request body must be valid JSON' },
        { status: 400 }
      );
    }

    const { message, context } = body;

    // Validate required fields
    if (!message) {
      console.log('❌ API Route: Missing message field');
      return NextResponse.json(
        { error: 'Missing required field', details: 'message is required' },
        { status: 400 }
      );
    }

    if (!context) {
      console.log('❌ API Route: Missing context field');
      return NextResponse.json(
        { error: 'Missing required field', details: 'context is required' },
        { status: 400 }
      );
    }

    // Check authentication
    const session = await getServerSession(authOptions);
    console.log('👤 API Route: Session check:', !!session?.user);

    if (!session?.user) {
      console.log('❌ API Route: Unauthorized - No session');
      return NextResponse.json(
        { error: 'Unauthorized', details: 'You must be logged in to use this feature' },
        { status: 401 }
      );
    }

    console.log('🔄 API Route: Getting OpenAIService instance');
    const openAIService = OpenAIService.getInstance();
    
    console.log('📤 API Route: Sending message to OpenAI');
    const response = await openAIService.sendMessage(
      message,
      context,
      session.user.id
    );
    console.log('✅ API Route: Successfully got response from OpenAI');

    return NextResponse.json({ response });
  } catch (error) {
    console.error('💥 API Route Error:', error);
    
    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('Rate limit')) {
        return NextResponse.json(
          { 
            error: 'Rate limit exceeded',
            details: error.message,
            timestamp: new Date().toISOString()
          },
          { status: 429 }
        );
      }
      
      return NextResponse.json(
        { 
          error: 'Internal server error',
          details: error.message,
          timestamp: new Date().toISOString()
        },
        { status: 500 }
      );
    }

    // Handle unknown errors
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: 'An unexpected error occurred',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const openAIService = OpenAIService.getInstance();
    openAIService.clearConversation();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Clear Conversation API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
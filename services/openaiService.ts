import OpenAI from 'openai';

const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ConversationContext {
  currentPage: string;
  userRole: string;
}

class TokenBucket {
  private tokens: number;
  private lastRefillTime: number;
  private readonly capacity: number;
  private readonly refillRate: number; // tokens per millisecond

  constructor(capacity: number, refillRate: number) {
    this.capacity = capacity;
    this.refillRate = refillRate;
    this.tokens = capacity;
    this.lastRefillTime = Date.now();
  }

  private refill(): void {
    const now = Date.now();
    const timePassed = now - this.lastRefillTime;
    const newTokens = timePassed * this.refillRate;
    
    this.tokens = Math.min(this.capacity, this.tokens + newTokens);
    this.lastRefillTime = now;
  }

  public consume(tokens: number = 1): boolean {
    this.refill();
    
    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }
    return false;
  }

  public getTokensRemaining(): number {
    this.refill();
    return this.tokens;
  }

  public getTimeUntilNextToken(): number {
    if (this.tokens >= 1) return 0;
    return Math.ceil((1 - this.tokens) / this.refillRate);
  }
}

const SYSTEM_PROMPT = `You are Pearl AI, an educational assistant for the OECS Learning Hub, a comprehensive curriculum management platform. Your role is to:

1. Provide pedagogical guidance and support to educators
2. Help users navigate and understand the platform's features
3. Offer curriculum development and implementation advice
4. Assist with lesson planning and assessment strategies
5. Support professional development needs

OECS Curriculum Framework:
- Core Subjects: Mathematics, English Language Arts, Science, Social Studies
- Grade Levels: Primary (K-6) and Secondary (7-12)
- Curriculum Standards: Aligned with OECS regional standards
- Assessment Framework: Formative and summative assessment guidelines
- Learning Outcomes: Specific to each subject and grade level
- Teaching Resources: Lesson plans, activities, and materials
- Professional Development: Teacher training and support materials

OECS Harmonised Kindergarten Curriculum:
Thematic Integrated Units:
1. Belonging
   - Building identity and relationships
   - Awareness of self and community
   - Social-emotional development
   - Family and community connections

2. Weather
   - Weather patterns and changes
   - Effects of sun, rain, and wind
   - Climate awareness
   - Environmental observation

3. Celebrations
   - Family traditions
   - Cultural celebrations
   - Community festivals
   - Cultural identity

4. Plants and Animals
   - Living things investigation
   - Habitats exploration
   - Interdependence concepts
   - Environmental awareness

5. Games
   - Physical development
   - Social skills
   - Cognitive development
   - Motor skills

Subject Integration:
Language Arts:
- Progressive phonics introduction (e.g., "s, a, t, i, p, n" in Unit 1)
- Theme-based reading and writing
- Shared reading activities
- Storytelling and oral language development
- Drawing and dictation tasks

Mathematics:
- Number sense and counting (Unit 1)
- Comparing and ordering
- Simple operations
- Geometry and measurement
- Patterns and data handling
- Non-standard measurement
- Weather charts and classification

Science:
- Weather observation (Unit 2)
- Living things needs (Unit 4)
- Forces and motion (Unit 5)
- Environmental awareness
- Basic scientific concepts

Social Studies:
- Community understanding (Unit 1)
- Cultural traditions (Unit 3)
- Civic responsibility
- Environmental awareness
- Cultural relevance

Developmental Approach:
- Play-based learning
- Integrated activities
- Progressive complexity
- Cultural relevance
- Inclusive practices

Sample Activities:
- Weather Unit: Weather wheels, daily charts, themed poems
- Celebrations Unit: Family drawings, role-play, counting activities
- Plants and Animals Unit: Sorting activities, habitat models, animal writing

Key Features of the OECS Learning Hub:
- Curriculum Management: Create, edit, and organize curriculum content
- Resource Sharing: Share and access educational resources
- Lesson Planning: Tools for creating and managing lesson plans
- Assessment Tools: Create and manage assessments
- Professional Development: Access training materials and courses
- Collaboration: Work with other educators in the OECS region
- Analytics: Track student progress and curriculum effectiveness

User Roles:
- Administrators: Manage users, content, and platform settings
- Teachers: Create and manage curriculum, lessons, and assessments
- Students: Access learning materials and complete assignments
- Parents: Monitor student progress and access resources

Always maintain a professional, encouraging, and educational tone. Focus on practical, actionable advice that aligns with educational best practices. When users ask about specific features or curriculum content, provide detailed guidance based on their role, current page context, and the OECS curriculum framework.`;

export class OpenAIService {
  private static instance: OpenAIService;
  private conversationHistory: Message[] = [];
  private rateLimiters: Map<string, TokenBucket> = new Map();
  private readonly RATE_LIMIT_CAPACITY = 20; // Maximum burst capacity
  private readonly RATE_LIMIT_REFILL_RATE = 20 / 30000; // 20 tokens per 30 seconds

  private constructor() {
    this.initializeConversation();
  }

  public static getInstance(): OpenAIService {
    if (!OpenAIService.instance) {
      OpenAIService.instance = new OpenAIService();
    }
    return OpenAIService.instance;
  }

  private initializeConversation() {
    this.conversationHistory = [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
      },
    ];
  }

  private getRateLimiter(userId: string): TokenBucket {
    let limiter = this.rateLimiters.get(userId);
    if (!limiter) {
      limiter = new TokenBucket(this.RATE_LIMIT_CAPACITY, this.RATE_LIMIT_REFILL_RATE);
      this.rateLimiters.set(userId, limiter);
    }
    return limiter;
  }

  private checkRateLimit(userId: string): { allowed: boolean; retryAfter?: number } {
    const limiter = this.getRateLimiter(userId);
    const allowed = limiter.consume();
    
    if (!allowed) {
      const retryAfter = limiter.getTimeUntilNextToken();
      return { allowed: false, retryAfter };
    }
    
    return { allowed: true };
  }

  public async sendMessage(
    message: string,
    context: ConversationContext,
    userId: string
  ): Promise<string> {
    if (!openai) {
      return "OpenAI API key is not configured. Please set the OPENAI_API_KEY environment variable to use the AI assistant.";
    }

    console.log('🚀 OpenAIService: Starting sendMessage');
    
    const rateLimitCheck = this.checkRateLimit(userId);
    if (!rateLimitCheck.allowed) {
      console.log('❌ OpenAIService: Rate limit exceeded');
      throw new Error(`Rate limit exceeded. Please try again in ${Math.ceil(rateLimitCheck.retryAfter! / 1000)} seconds.`);
    }

    try {
      // Add context to the message
      const contextualizedMessage = `[Page: ${context.currentPage}, Role: ${context.userRole}] ${message}`;
      console.log('📝 OpenAIService: Contextualized message:', contextualizedMessage);

      // Add user message to history
      this.conversationHistory.push({
        role: 'user',
        content: contextualizedMessage,
      });

      console.log('📤 OpenAIService: Sending request to OpenAI');
      // Get response from OpenAI
      const completion = await openai?.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4',
        messages: this.conversationHistory,
        temperature: 0.7,
        max_tokens: 500,
      });

      const response = completion?.choices[0]?.message?.content || '';
      console.log('📨 OpenAIService: Received response from OpenAI');

      if (!response) {
        console.log('❌ OpenAIService: No response content received');
        throw new Error('No response received from OpenAI');
      }

      // Add assistant response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: response,
      });

      // Maintain conversation history length
      if (this.conversationHistory.length > 10) {
        this.conversationHistory = [
          this.conversationHistory[0], // Keep system prompt
          ...this.conversationHistory.slice(-9), // Keep last 9 messages
        ];
      }

      console.log('✅ OpenAIService: Successfully processed response');
      return response;
    } catch (error) {
      console.error('💥 OpenAIService Error:', error);
      if (error instanceof Error) {
        throw new Error(`Failed to get response from assistant: ${error.message}`);
      }
      throw new Error('Failed to get response from assistant: Unknown error');
    }
  }

  public async streamResponse(
    message: string,
    context: ConversationContext,
    userId: string,
    onUpdate: (chunk: string) => void
  ): Promise<void> {
    if (!openai) {
      onUpdate("OpenAI API key is not configured. Please set the OPENAI_API_KEY environment variable to use the AI assistant.");
      return;
    }

    console.log('📤 OpenAIService: Starting streamResponse');
    
    if (!this.checkRateLimit(userId)) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }

    try {
      const contextualizedMessage = `[Page: ${context.currentPage}, Role: ${context.userRole}] ${message}`;

      this.conversationHistory.push({
        role: 'user',
        content: contextualizedMessage,
      });

      const stream = await openai?.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4',
        messages: this.conversationHistory,
        temperature: 0.7,
        max_tokens: 500,
        stream: true,
      });

      let fullResponse = '';

      for await (const chunk of stream!) {
        const content = chunk.choices[0]?.delta?.content || '';
        if (content) {
          fullResponse += content;
          onUpdate(content);
        }
      }

      this.conversationHistory.push({
        role: 'assistant',
        content: fullResponse,
      });

      if (this.conversationHistory.length > 10) {
        this.conversationHistory = [
          this.conversationHistory[0],
          ...this.conversationHistory.slice(-9),
        ];
      }
    } catch (error) {
      console.error('OpenAI Stream Error:', error);
      throw new Error('Failed to stream response from assistant');
    }
  }

  public clearConversation() {
    this.initializeConversation();
  }
} 
import { NextResponse } from 'next/server';
import { generateAIResponse } from '@/lib/ai';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    // 1. Validate Input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string.' },
        { status: 400 }
      );
    }

    // 2. Call AI Logic
    const response = await generateAIResponse(message);

    // 3. Return JSON with the AI's reply
    return NextResponse.json({ reply: response });

  } catch (error) {
    console.error('API Route Error in /api/chat:', error);
    
    // Fallback response for 500 Server Error
    return NextResponse.json(
      { reply: "I'm currently unable to connect to my brain. Please try again later or contact Pradeep directly!" },
      { status: 500 }
    );
  }
}

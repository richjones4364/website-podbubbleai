import { GoogleGenerativeAI } from '@google/generative-ai';
import { contentFilters, privacyGuards } from '@/lib/ai-safety';
import { NextRequest } from 'next/server';
import { saveChatMessage, createChatSession, getChatHistory } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId, image } = await req.json();
    let currentSessionId = sessionId;

    if (!currentSessionId) {
      currentSessionId = await createChatSession();
    }

    const validationResult = await contentFilters.validateContent(message);
    if (!validationResult.safe) {
      return new Response(JSON.stringify({
        error: 'Content not appropriate for educational context',
        reason: validationResult.reason
      }), { status: 400 });
    }

    const sanitizedInput = await privacyGuards.sanitizeInput(message);

    await saveChatMessage(currentSessionId, 'user', sanitizedInput, image);

    const history = await getChatHistory(currentSessionId);
    const conversationContext = history
      .map(msg => `${msg.role}: ${msg.content}`)
      .join('\n');

    let model;
    let result;

    if (image) {
      model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
      
      // Convert base64 to Uint8Array
      const base64Data = image.split(',')[1];
      const binaryData = atob(base64Data);
      const bytes = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        bytes[i] = binaryData.charCodeAt(i);
      }

      const imageData = {
        inlineData: {
          data: base64Data,
          mimeType: "image/jpeg"
        }
      };

      result = await model.generateContent([imageData, sanitizedInput || "Analyze this image"]);
    } else {
      model = genAI.getGenerativeModel({
        model: 'gemini-pro',
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
        ],
      });

      result = await model.generateContent([conversationContext, sanitizedInput].join('\n'));
    }

    const response = result.response;
    const text = response.text();

    const filteredResponse = await contentFilters.filterResponse(text);

    await saveChatMessage(currentSessionId, 'assistant', filteredResponse.filtered);

    await privacyGuards.logSafeInteraction({
      timestamp: new Date(),
      type: 'chat',
      sanitizedContent: sanitizedInput,
    });

    return new Response(JSON.stringify({
      content: filteredResponse.filtered,
      modified: filteredResponse.modified,
      sessionId: currentSessionId,
    }), { status: 200 });
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({
      error: 'An error occurred while processing your request',
    }), { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get('sessionId');
    
    if (!sessionId) {
      return new Response(JSON.stringify({
        error: 'Session ID is required'
      }), { status: 400 });
    }

    const history = await getChatHistory(sessionId);
    
    return new Response(JSON.stringify({
      messages: history
    }), { status: 200 });
  } catch (error) {
    console.error('Chat History Error:', error);
    return new Response(JSON.stringify({
      error: 'An error occurred while fetching chat history'
    }), { status: 500 });
  }
}
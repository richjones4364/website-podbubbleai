import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { jsPDF } from 'jspdf';

// Ensure the API key is properly loaded
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log("API Key Loaded:", apiKey);

const IncidentReport: React.FC = () => {
  const [messages, setMessages] = useState<{ type: string; text: string }[]>([]);
  const [message, setMessage] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [isChatEnded, setIsChatEnded] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [, setTempSentMessage] = useState<string | null>(null);
  const chatSessionRef = useRef<any>(null);

  useEffect(() => {
    if (!apiKey) {
      console.error('Gemini API key is not configured');
      setMessages([{ type: 'received', text: 'Error: API key is missing. Check configuration.' }]);
      return;
    }

    const initializeChat = async () => {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
          systemInstruction: `You are a school counsellor named Mr. Jones. Your role is to listen to students reporting incidents. 
          Keep responses simple (8-year-old reading level). Follow these steps:
          1. Greet and introduce yourself.
          2. Ask for the student's full name.
          3. Ask for their tutor group.
          4. Collect details about the incident: what happened, who was involved, and any witnesses.
          5. Ask how they feel about it.
          6. Ask if they have anything else to share.
          7. Confirm that Miss Smith will be contacted and say "Click End Chat."`,
          generationConfig: {
            temperature: 0.2,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192,
          },
        });

        chatSessionRef.current = model.startChat({ history: [] });

        // Send a welcome message
        const result = await chatSessionRef.current.sendMessage("Hello");
        setMessages([{ type: 'received', text: result.response.text() }]);
      } catch (error) {
        console.error('Initialization error:', error);
        setMessages([{ type: 'received', text: 'Error initializing chat. Try again later.' }]);
      }
    };

    initializeChat();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatSessionRef.current) {
      setMessages(prev => [...prev, { type: 'received', text: 'Chat session not initialized.' }]);
      return;
    }

    const currentMessage = message.trim();
    if (!currentMessage) return;
    
    setMessage('');
    setTempSentMessage(currentMessage);
    setMessages(prev => [...prev, { type: 'sent', text: currentMessage }]);
    setIsFetching(true);

    try {
      const result = await chatSessionRef.current.sendMessage(currentMessage);
      const responseText = result.response.text();
      setMessages(prev => [...prev, { type: 'received', text: responseText }]);

      if (responseText.toLowerCase().includes('click end chat')) {
        setIsChatEnded(true);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { type: 'received', text: 'Error processing message.' }]);
    } finally {
      setIsFetching(false);
      setTempSentMessage(null);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 10;
    messages.forEach((msg) => {
      doc.text(`${msg.type === 'sent' ? 'You' : 'Counsellor'}: ${msg.text}`, 10, y);
      y += 10;
    });
    doc.save('incident_report.pdf');
  };

  useEffect(() => {
    // Scroll the chat container to the bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-lg font-bold text-center mb-4">Incident Report Chat</h2>
      <div 
        ref={chatContainerRef}
        className="h-64 overflow-y-auto border p-2 rounded"
      >
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 my-1 rounded-lg ${msg.type === 'sent' ? 'bg-blue-500 text-white text-right' : 'bg-gray-300 text-black text-left'}`}>
            {msg.text}
          </div>
        ))}
        {isFetching && (
          <div className="flex justify-center my-2">
            <span className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></span>
          </div>
        )}
      </div>
      {!isChatEnded && (
        <form onSubmit={handleSubmit} className="mt-4 flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 border rounded"
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
            Send
          </button>
        </form>
      )}
      {isChatEnded && (
        <button onClick={generatePDF} className="mt-4 w-full p-2 bg-green-500 text-white rounded">
          End Chat & Download PDF
        </button>
      )}
    </div>
  );
};

export default IncidentReport;
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { jsPDF } from 'jspdf';

const IncidentReport = () => {
  const [messages, setMessages] = useState<{ type: string; text: string }[]>([]);
  const [message, setMessage] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [isChatEnded, setIsChatEnded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [tempSentMessage, setTempSentMessage] = useState<string | null>(null);
  const chatSessionRef = useRef<any>(null);

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        
        if (!apiKey) {
          throw new Error('Gemini API key is not configured');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
          systemInstruction: "You are a counsellor, trained to listen to children in a school as they describe their problems to you. They are speaking to you because they wish to report an incident that has happened to them. You need to find out and record in a pdf document. All of your messages must be written with a reading age of 8. Keep the conversation brief but caring. Standard Operating Procedure:1. Start your chat with a greeting and your name [Mr Jones]. 2. Collect name of student (first name and last name are essential)3. tutor group of student (essential ) 4. What happened i.e. the details of the incident they are reporting, names of those involved, and names of witnesses5. how this makes the student feel. 6. Confirm: is there anything else the student needs to tell you? 7. Inform them that you will contact Miss Smith with the details, thank them, and say 'Click End Chat'",
          generationConfig: {
            temperature: 0.2,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192,
          },
        });

        chatSessionRef.current = model.startChat({
          history: [],
        });

        // Test the connection with a simple message
        const result = await chatSessionRef.current.sendMessage("Hello");
        setMessages([{ 
          type: 'received', 
          text: result.response.text() 
        }]);

      } catch (error) {
        console.error('Initialization error:', error);
        setMessages([{ 
          type: 'received', 
          text: 'Error initializing chat. Please check your API key configuration.' 
        }]);
      }
    };

    initializeChat();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatSessionRef.current) {
      setMessages(prev => [...prev, {
        type: 'received',
        text: 'Chat session not initialized. Please refresh the page.'
      }]);
      return;
    }

    const currentMessage = message;
    setMessage('');
    setTempSentMessage(currentMessage);
    setMessages(prev => [...prev, { type: 'sent', text: currentMessage }]);
    setIsFetching(true);

    try {
      const result = await chatSessionRef.current.sendMessage(currentMessage);
      const responseText = result.response.text();
      setMessages(prev => [...prev, { type: 'received', text: responseText }]);

      // Check if the conversation should end
      if (responseText.toLowerCase().includes('click end chat')) {
        setIsChatEnded(true);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'An error occurred while processing your message.';
      
      setMessages(prev => [...prev, { 
        type: 'received', 
        text: errorMessage 
      }]);
    } finally {
      setIsFetching(false);
      setTempSentMessage(null);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 10;
    messages.forEach((msg) => {
      doc.text(10, y, `${msg.type === 'sent' ? 'You' : 'Counsellor'}: ${msg.text}`);
      y += 10;
    });
    doc.save('incident_report.pdf');
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (tempSentMessage) {
      setTempSentMessage(null);
    }
  }, [tempSentMessage]);

  return (
    <div className="glass p-2">
      <div className="flex flex-col h-50vh rounded-lg">
        <div className="flex-1 max-w-full pb-2 min-h-0 overflow-y-auto scroll-smooth min-h-[50vh] max-h-[50vh] space-y-0.5">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.type} flex ${msg.type === 'sent' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`p-2 rounded ${
                  msg.type === 'sent' ? 'bg-gray-300 text-black' : 'bg-gray-500 text-white'
                } max-w-[90%] break-words m-1 rounded-lg`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {tempSentMessage && (
            <div className={`message sent flex justify-start`}>
              <div className={`p-2 rounded bg-gray-300 text-black max-w-[70%] break-words`}>
                {tempSentMessage}
              </div>
            </div>
          )}
          {isFetching && (
            <div className="flex justify-center my-2">
              <div className="dot-container flex space-x-1">
                <div className="dot dot1 w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="dot dot2 w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                <div className="dot dot3 w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-400"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <div className="input-area flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={isFetching ? '' : 'Ask a question...'}
              className="flex-grow p-2 border rounded"
            />
            <button className="btn-primary ml-2 p-2 bg-blue-500 text-white rounded" type="submit">
              Send
            </button>
          </div>
        </form>
        {isChatEnded && (
          <button onClick={generatePDF} className="btn-primary mt-4 p-2 bg-green-500 text-white rounded">
            End Chat
          </button>
        )}
      </div>
    </div>
  );
};

export default IncidentReport;
import React, { useState, useRef, useEffect } from 'react';

// Define the Message type - now just for UI display
export interface Message {
  type: 'sent' | 'received';
  text: string;
}

// Define the ConversationEntry type
interface ConversationEntry {
    role: 'user' | 'model';
    text: string;
}

interface ErrorData {
    error?: string;
  }

const IncidentReport = () => {
  const [messages, setMessages] = useState<Message[]>([{ type: 'received', text: "👋 Hi, I'm Lucy. I'd like to help. Can you tell me your name?" }]);
  const [message, setMessage] = useState<string>('');
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isChatEnded, setIsChatEnded] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  //const [conversationHistory, setConversationHistory] = useState<ConversationEntry[]>([]); // Store the full conversation, no longer needed here

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentMessage = message.trim();
    if (!currentMessage) return;

    setMessages((prevMessages) => [...prevMessages, { type: 'sent', text: currentMessage }]);
    setMessage('');
    setIsFetching(true);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentMessage }),
      });

      if (!response.ok) {
        const errorData:ErrorData = await response.json(); //correct error type
        const errorMessage = errorData.error || `API request failed with status ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const geminiText = data.response || 'No response text.';
      

      setMessages((prevMessages) => [...prevMessages, { type: 'received', text: geminiText }]);

      if (geminiText.toLowerCase().includes('inform them that you will contact miss smith with the details')) {
        setIsChatEnded(true);
          // Dynamically import jsPDF and generate PDF
          import('jspdf').then(({ default: jsPDF }) => {
              generatePDF(jsPDF, data.conversationHistory);
          });
      }
    } catch (error) { //remove any
      console.error('Chat error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          type: 'received',
          text: `Error processing message: ${error.message || 'Unknown error'}`,
        },
      ]);
    } finally {
      setIsFetching(false);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };
    //Move generate PDF here
    const generatePDF = (jsPDF: typeof import('jspdf').jsPDF, history: ConversationEntry[]) => { //correct jsPDF type

        const doc = new jsPDF();
        let y = 10;

        // Add title
        doc.setFontSize(16);
        doc.text('Incident Report', 10, y);
        y += 10;

        // Add date
        doc.setFontSize(12);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, y);
        y += 10;

        // Add conversation with better formatting
        doc.setFontSize(10);
        history.forEach((msg) => {
            if (msg.role === "user") {
                const textLines = doc.splitTextToSize(`You: ${msg.text}`, 180);
                doc.text(textLines, 10, y);
                y += textLines.length * 7;
            } else if (msg.role === "model") {
                const textLines = doc.splitTextToSize(`Lucy: ${msg.text}`, 180);
                doc.text(textLines, 10, y);
                y += textLines.length * 7;
            }
        });

        doc.save('incident_report.pdf');
    };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages]);

  useEffect(() => {
    setMessages([{ type: 'received', text: "👋 Hi, I'm Lucy. I'd like to help. Can you tell me your name?" }]);
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-lg font-bold text-center mb-4">Incident Report Chat</h2>
      <div ref={chatContainerRef} className="h-64 overflow-y-auto border p-2 rounded">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded-lg ${msg.type === 'sent' ? 'bg-blue-500 text-white text-right' : 'bg-gray-300 text-black text-left'
              }`}
          >
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
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 border rounded"
            disabled={isFetching}
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded" disabled={isFetching}>
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default IncidentReport;

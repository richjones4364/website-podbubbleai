import React, { useState, useRef, useEffect } from 'react';

// Define the Message type - now just for UI display
export interface Message {
  type: 'sent' | 'received';
  text: string;
}

const ParentFAQ = () => {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'received', text: "Hi, I'm Rob, the Reception Assistant. How can I help you today?" },
  ]);
  const [message, setMessage] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentMessage = message;
    if (!currentMessage.trim()) return; // Prevent sending empty messages
    setMessage('');

    setMessages((prevMessages) => [...prevMessages, { type: 'sent', text: currentMessage }]);
    setIsFetching(true);

    try {
      const response = await fetch('/api/getWebhookParentFAQ', { // Changed this line
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentMessage }),
      });

      if (!response.ok) {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.text !== currentMessage));
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();
      console.log('Success:', data);

      if (Array.isArray(data) && data.length > 0 && data[0].output) {
        setMessages((prevMessages) => [...prevMessages, { type: 'received', text: data[0].output }]);
      } else if (typeof data === 'object' && data !== null) {
        if (data.output) {
          setMessages((prevMessages) => [...prevMessages, { type: 'received', text: data.output }]);
        } else {
          setMessages((prevMessages) => [...prevMessages, { type: 'received', text: "No 'output' found in the response." }]);
        }
      } else {
        setMessages((prevMessages) => [...prevMessages, { type: 'received', text: String(data) }]);
      }
    } catch (error) {
      let responseMessage = 'An unknown error occurred.';
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        responseMessage = 'Error: ' + error.message;
      } else if (typeof error === 'string') {
        console.error('Error string:', error);
        responseMessage = 'Error: ' + error;
      } else {
        console.error('Unknown error:', error);
      }
      setMessages((prevMessages) => [...prevMessages, { type: 'received', text: responseMessage }]);
    } finally {
      setIsFetching(false);
    }
  };

    // Add useEffect to display initial message
    useEffect(() => {
        setMessages([{ type: 'received', text: "🙋‍♂️ Hi, I'm Rob, the Reception Assistant. How can I help you today?" }]);
    }, []);

      useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto mt-4">
      <h3 className="text-lg font-bold text-center mb-4">
        Parent FAQs
      </h3>
      <div className="flex flex-col rounded-lg" style={{height: '50vh'}}>
        <div ref={chatContainerRef} className="flex-1 max-w-full pb-2 min-h-0 overflow-y-auto scroll-smooth max-h-full space-y-0.5">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.type} flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-2 rounded ${
                  msg.type === 'sent' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                } max-w-[90%] break-words m-1 rounded-lg`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isFetching && (
            <div className="flex justify-center my-2">
              <div className="dot-container flex space-x-1">
                <div className="dot dot1 w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="dot dot2 w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                <div className="dot dot3 w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-400"></div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="relative mt-auto">
          <div className="input-area flex items-center">
            <input
              ref={inputRef}
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
      </div>
    </div>
  );
};

export default ParentFAQ;

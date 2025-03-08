import React, { useState, useRef, useEffect } from 'react';

// interface N8nResponse {
//   output?: string;
//   // Add other properties as needed based on the actual response structure
// }

const ParentFAQ = () => {
  const [messages, setMessages] = useState<{ type: string; text: string }[]>([]);
  const [message, setMessage] = useState('');
  // const [n8nResponse, setN8nResponse] = useState<N8nResponse | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [tempSentMessage, setTempSentMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentMessage = message;
    setMessage('');

    setTempSentMessage(currentMessage);

    setMessages((prevMessages) => [...prevMessages, { type: 'sent', text: currentMessage }]);

    setIsFetching(true);

    try {
      const response = await fetch('https://n8n-production-d809.up.railway.app/webhook/b9de4bc3-f3ec-4bd2-a335-5c1e45c01a38', {
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

      // setN8nResponse(data); // Remove this line

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
      // setN8nResponse(null); // Remove this line
      setMessages((prevMessages) => [...prevMessages, { type: 'received', text: responseMessage }]);
    } finally {
      setIsFetching(false);
      // Removed setTempSentMessage(null) from here
    }
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
      </div>
    </div>
  );
};

export default ParentFAQ;
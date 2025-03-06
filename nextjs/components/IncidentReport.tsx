import React, { useState, useRef, useEffect } from 'react';
import jsPDF from 'jspdf';

// Define the Message type
export interface Message {
    type: 'sent' | 'received';
    text: string;
}

const IncidentReport = ({ initialMessages }: { initialMessages: Message[] }) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [message, setMessage] = useState<string>('');
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isChatEnded, setIsChatEnded] = useState<boolean>(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const systemMessage = `You are a counsellor, trained to listen to children in a school as they describe their problems to you. They are speaking to you because they wish to report an incident that has happened to them. You need to find out and record in a pdf document. All of your messages must be written with a reading age of 8. Keep the conversation brief but caring.`;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const currentMessage = message.trim();
        if (!currentMessage) return;

        // Add the current message to the history
        const newMessages: Message[] = [...messages, { type: 'sent', text: currentMessage }];
        setMessages(newMessages);
        setMessage('');
        setIsFetching(true);

        try {
            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: currentMessage,
                    systemMessage,
                    history: newMessages.map(msg => ({ type: msg.type, text: msg.text }))
                }),
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            const geminiText = data.response || 'No response text.';
            setMessages(prevMessages => [...prevMessages, { type: 'received', text: geminiText }]);

            if (geminiText.toLowerCase().includes('thank you and goodbye')) {
                setIsChatEnded(true);
            }
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prevMessages => [...prevMessages, { 
                type: 'received', 
                text: `Error processing message: ${error instanceof Error ? error.message : 'Unknown error'}`
            }]);
        } finally {
            setIsFetching(false);
        }
    };

    const generatePDF = () => {
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
        messages.forEach((msg) => {
            const textLines = doc.splitTextToSize(
                `${msg.type === 'sent' ? 'You' : 'Counsellor'}: ${msg.text}`, 
                180
            );
            
            doc.text(textLines, 10, y);
            y += textLines.length * 7;
            y += 3;
        });
        
        doc.save('incident_report.pdf');
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-lg font-bold text-center mb-4">Incident Report Chat</h2>
            <div ref={chatContainerRef} className="h-64 overflow-y-auto border p-2 rounded">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-2 my-1 rounded-lg ${
                            msg.type === 'sent'
                                ? 'bg-blue-500 text-white text-right'
                                : 'bg-gray-300 text-black text-left'
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
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-grow p-2 border rounded"
                        disabled={isFetching}
                    />
                    <button 
                        type="submit" 
                        className="ml-2 p-2 bg-blue-500 text-white rounded"
                        disabled={isFetching}
                    >
                        Send
                    </button>
                </form>
            )}
            {isChatEnded && (
                <button
                    onClick={generatePDF}
                    className="w-full mt-4 p-2 bg-green-500 text-white rounded"
                >
                    Generate PDF Report
                </button>
            )}
        </div>
    );
};

export default IncidentReport;
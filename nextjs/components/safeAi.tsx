'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Image as ImageIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  role: 'assistant' | 'user';
  content: string;
  created_at?: string;
  image?: string;
}

export default function AIChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedSessionId = localStorage.getItem('chatSessionId');
    if (savedSessionId) {
      setSessionId(savedSessionId);
      loadChatHistory(savedSessionId);
    }
  }, []);

  const loadChatHistory = async (sid: string) => {
    try {
      const response = await fetch(`/api/chat?sessionId=${sid}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to load chat history');
      }

      setMessages(data.messages);
    } catch (error) {
      console.error('Error loading chat history:', error);
      setError(error instanceof Error ? error.message : 'Failed to load chat history');
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && !selectedImage) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      ...(selectedImage && { image: selectedImage })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          sessionId: sessionId,
          image: selectedImage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      if (data.sessionId && !sessionId) {
        setSessionId(data.sessionId);
        localStorage.setItem('chatSessionId', data.sessionId);
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.content,
      }]);
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
      setSelectedImage(null);
    }
  };

  return (
    <div className="space-y-4">
      <Card className="bg-black/40 backdrop-blur-xl border-purple-500/20 p-6 rounded-xl">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Bot className="w-10 h-10 text-purple-400" />
          <h1 className="text-4xl font-semibold text-white">Safe AI</h1>
        </div>
        
        <div className="bg-black/20 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-center space-x-2 text-blue-100">
            <p className="text-sm">This AI is designed for educational use with strict content filtering and data privacy as standard.</p>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/20 text-red-200 p-4 rounded-lg mb-4">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <ScrollArea className="h-[500px] pr-4 mb-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 ${
                  message.role === 'assistant' ? 'bg-purple-950/30' : 'bg-black/30'
                } p-4 rounded-lg backdrop-blur-sm`}
              >
                {message.role === 'assistant' ? (
                  <Bot className="w-6 h-6 text-purple-400 mt-1" />
                ) : (
                  <User className="w-6 h-6 text-blue-400 mt-1" />
                )}
                <div className="flex-1">
                  {message.image && (
                    <div className="mb-3">
                      <img 
                        src={message.image} 
                        alt="Uploaded content"
                        className="max-w-sm rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                  <p className="text-white/90">{message.content}</p>
                  {message.created_at && (
                    <p className="text-xs text-white/50 mt-1">
                      {new Date(message.created_at).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 text-purple-400 bg-purple-950/30 p-4 rounded-lg">
                <Bot className="w-6 h-6 animate-pulse" />
                <p>Thinking...</p>
              </div>
            )}
          </div>
        </ScrollArea>

        <form onSubmit={handleSubmit} className="space-y-4">
          {selectedImage && (
            <div className="relative inline-block">
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="h-20 w-20 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          )}
          <div className="flex space-x-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your question..."
              className="bg-black/40 border-purple-500/20 text-white resize-none"
              rows={1}
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageSelect}
            />
            <Button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="bg-purple-600/50 hover:bg-purple-700/50"
            >
              <ImageIcon className="w-5 h-5" />
            </Button>
            <Button 
              type="submit" 
              disabled={isLoading || (!input.trim() && !selectedImage)}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
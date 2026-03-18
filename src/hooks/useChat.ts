import { useState } from 'react';

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Instantly append user message to UI
    setMessages(prev => [...prev, { role: 'user', content }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch AI response');
      }

      // Append successful AI message
      setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);

    } catch (error) {
      console.error('Chat error:', error);
      
      // Append fallback AI message on failure, matching objective requirements
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: "Oops, something went wrong with my connection. Please try asking again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
}

"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@/hooks/useChat';
import { resumeData } from '@/data/resumeData';
import { motion, AnimatePresence } from 'framer-motion';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, sendMessage, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[350px] sm:w-[400px] h-[550px] sm:h-[600px] bg-zinc-950 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Chat Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex justify-between items-center bg-zinc-900/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-xl shadow-lg">👨‍💻</div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-zinc-900 rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{resumeData.personalInfo.name}</h3>
                  <p className="text-xs text-emerald-400 font-medium">Digital Clone Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                &times;
              </button>
            </div>
            
            {/* Messages Area */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-zinc-950/50 scroll-smooth">
              {messages.length === 0 && (
                <div className="text-center text-zinc-500 mt-10 text-sm">
                  <p className="mb-2">👋 Hi! I&apos;m the digital clone of {resumeData.personalInfo.name}.</p>
                  <p>Ask me about his skills, experience, or projects!</p>
                </div>
              )}
              
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`p-3 sm:p-4 text-sm sm:text-base max-w-[85%] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm' 
                      : 'bg-zinc-800 text-zinc-200 rounded-2xl rounded-tl-sm border border-white/5'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="p-4 bg-zinc-800 rounded-2xl rounded-tl-sm border border-white/5 flex gap-1.5 items-center">
                    <motion.div className="w-2 h-2 rounded-full bg-zinc-500" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-2 h-2 rounded-full bg-zinc-500" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-2 h-2 rounded-full bg-zinc-500" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Form */}
            <div className="p-4 border-t border-white/10 bg-zinc-900/50 shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..." 
                  disabled={isLoading}
                  className="flex-1 bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 sm:py-2 outline-none focus:border-blue-500 transition-colors text-white placeholder:text-zinc-500 text-sm disabled:opacity-50" 
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 px-4 py-2 rounded-xl text-white font-bold hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  aria-label="Send message"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl sm:text-3xl shadow-[0_0_30px_rgba(37,99,235,0.4)] relative group"
          aria-label="Open AI Assistant"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-zinc-950"></span>
          </span>
          💬
        </motion.button>
      )}
    </div>
  );
};

export default AIChat;

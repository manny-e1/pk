'use client';
import { useState, useRef, useEffect } from 'react';

type Message = { id: number; role: 'assistant' | 'user'; text: string; time: string; };

interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatAssistant({ isOpen, onClose }: ChatAssistantProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'assistant', text: "I've analyzed the transaction data. This case shows <strong>critical risk</strong> with 89% confidence. What would you like to explore?", time: 'Just now' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), role: 'user', text: input, time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiMsg: Message = { id: Date.now()+1, role: 'assistant', text: "Based on the connection graph, this device fingerprint matches 3 other known fraud cases from last month.", time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) };
      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
  };

  const suggestions = ['Similar cases?', 'Check other devices', 'How detected?', 'Travel history'];

  return (
    <>
      {/* Overlay */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
        
        {/* Panel */}
        <div className={`absolute top-0 right-0 bottom-0 w-[400px] bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            
            {/* Header */}
            <div className="p-4 border-b border-[var(--border-primary)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] rounded-lg flex items-center justify-center text-white">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M7.5 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3m9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3"/></svg>
                    </div>
                    <div>
                        <div className="text-[14px] font-semibold text-[var(--text-primary)]">Investigation Assistant</div>
                        <div className="text-[11px] text-[var(--text-tertiary)]">Ask questions about this case</div>
                    </div>
                </div>
                <button onClick={onClose} className="w-8 h-8 bg-[var(--bg-tertiary)] rounded-md flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${msg.role === 'assistant' ? 'bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'}`}>
                            {msg.role === 'assistant' ? 'AI' : 'You'}
                        </div>
                        <div className="max-w-[85%]">
                            <div className={`p-2.5 rounded-[10px] text-[12px] leading-relaxed ${msg.role === 'assistant' ? 'bg-[var(--bg-tertiary)] rounded-tl-sm text-[var(--text-primary)]' : 'bg-[var(--accent)] text-white rounded-tr-sm'}`} dangerouslySetInnerHTML={{ __html: msg.text }}></div>
                            <div className={`text-[9px] text-[var(--text-tertiary)] mt-1 ${msg.role === 'user' ? 'text-right' : ''}`}>{msg.time}</div>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-white text-[10px] font-bold">AI</div>
                        <div className="bg-[var(--bg-tertiary)] rounded-[10px] rounded-tl-sm p-3 flex gap-1 items-center">
                            <div className="w-1.5 h-1.5 bg-[var(--text-tertiary)] rounded-full animate-bounce [animation-delay:0s]"></div>
                            <div className="w-1.5 h-1.5 bg-[var(--text-tertiary)] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            <div className="w-1.5 h-1.5 bg-[var(--text-tertiary)] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-[var(--border-primary)] bg-[var(--bg-tertiary)]">
                <div className="p-3 flex gap-1.5 flex-wrap border-b border-[var(--border-primary)] bg-[var(--bg-secondary)]">
                    {suggestions.map((s, i) => (
                        <button key={i} onClick={() => setInput(s)} className="px-2.5 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-full text-[10px] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">{s}</button>
                    ))}
                </div>
                <div className="p-3.5 flex gap-2.5">
                    <input 
                        type="text" 
                        placeholder="Ask about this investigation..." 
                        className="flex-1 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg px-3 py-2.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSend()}
                    />
                    <button onClick={handleSend} className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--accent-hover)] transition-colors shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
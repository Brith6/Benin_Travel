'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { DB_MASTER } from '@/data/db_master';

interface Message {
  id: number;
  type: 'user' | 'bot';
  text: string;
}

export default function LegbaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: 'bot', text: 'Kouabo ! Je suis Legba, l\'esprit numérique du 229. Je peux vous ouvrir toutes les portes. Que cherchez-vous ? (Sport, Chill, Luxe, Hotel, Manger...)' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulated AI Logic
    setTimeout(() => {
      let responseText = "Hmmm, la connexion avec les esprits est trouble. Essayez d'être plus précis.";
      const lowerInput = userMsg.text.toLowerCase();

      // Greetings
      if (lowerInput.match(/\b(bonjour|salut|hello|hi|coucou)\b/)) {
         responseText = "Alafia ! Prêt à explorer le Bénin ?";
      }
      // SPORT / ACTIVITÉS
      else if (lowerInput.match(/\b(sport|tennis|padel|bouger|activit)\b/)) {
        const spots = DB_MASTER.filter(i => i.category === 'SPORT').slice(0, 3).map(i => i.name).join(', ');
        responseText = `Pour garder la forme, je recommande : ${spots}. Le Padel Club à Cotonou est le spot du moment.`;
      } 
      // HOTELS / DORMIR
      else if (lowerInput.match(/\b(hotel|dormir|logement|nuit|repos)\b/)) {
         if (lowerInput.includes('ouidah')) {
            const spots = DB_MASTER.filter(i => i.category === 'HOTEL' && i.city === 'UIDAH').map(i => i.name).join(', ');
            responseText = `À Ouidah, le repos est sacré. Regardez du côté de : ${spots}.`;
         } else if (lowerInput.includes('cotonou')) {
            const spots = DB_MASTER.filter(i => i.category === 'HOTEL' && i.city === 'COTONOU').map(i => i.name).join(', ');
            responseText = `Cotonou offre du luxe et du confort : ${spots}.`;
         } else {
            responseText = "Dans quelle ville souhaitez-vous résider ? J'ai des adresses à Cotonou, Ouidah, Porto-Novo et dans le Nord (Pendjari).";
         }
      }
      // MANGER / RESTO
      else if (lowerInput.match(/\b(manger|faim|resto|diner|dejeuner|food)\b/)) {
         const roots = DB_MASTER.filter(i => i.category === 'RESTAURANT' && i.vibe.includes('ROOTS')).slice(0, 2).map(i => i.name).join(', ');
         const luxe = DB_MASTER.filter(i => i.category === 'RESTAURANT' && i.vibe.includes('LUXE')).slice(0, 2).map(i => i.name).join(', ');
         responseText = `Pour manger local ? Essayez ${roots}. Pour plus de standing ? ${luxe} sont excellents.`;
      }
      // SORTIR / FETE
      else if (lowerInput.match(/\b(sortir|boire|fête|party|night|club)\b/)) {
         const spots = DB_MASTER.filter(i => i.category === 'EVENT' || i.vibe.includes('FESTIVE')).slice(0, 3).map(i => i.name).join(', ');
         responseText = `La nuit appartient aux initiés au Bénin. Allez voir : ${spots}.`;
      }
      // CULTURE / MUSEE
      else if (lowerInput.match(/\b(culture|musée|histoire|art|tradition)\b/)) {
         const spots = DB_MASTER.filter(i => i.category === 'CULTURE').slice(0, 3).map(i => i.name).join(', ');
         responseText = `Plongez dans l'histoire avec : ${spots}. Ne ratez pas la Fondation Zinsou.`;
      }
      else if (lowerInput.includes('merci')) {
          responseText = "C'est un plaisir. N'hésitez pas si vous avez d'autres questions !";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: responseText }]);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#00FF94] rounded-full flex items-center justify-center shadow-[0_0_20px_#00FF94] text-black border-2 border-black"
      >
        <Bot className="w-8 h-8" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-[#0a0a0a]/95 border border-[#00FF94]/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="bg-[#00FF94]/10 p-4 border-b border-[#00FF94]/20 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse absolute top-0 right-0" />
                    <Bot className="w-6 h-6 text-[#00FF94]" />
                </div>
                <div>
                    <span className="font-bold text-[#00FF94] tracking-widest text-sm block">LEGBA AI</span>
                    <span className="text-[10px] text-gray-400">Assistant Virtuel 2.0</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent"
            >
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.type === 'user' 
                        ? 'bg-[#00FF94] text-black font-medium rounded-br-none' 
                        : 'bg-[#1a1a1a] text-gray-200 rounded-bl-none border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-white/10 bg-black/50">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-zinc-900/80 text-white rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#00FF94]/50 border border-white/5 text-sm placeholder:text-gray-600"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-3 bg-[#00FF94] rounded-xl text-black hover:bg-[#00cc76] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

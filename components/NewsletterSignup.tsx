'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setEmail('');
    };

    return (
        <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#050505]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                    RESTEZ DANS LA <span className="text-[#00F0FF]">BOUCLE</span>
                </h2>
                <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                    Recevez nos meilleures adresses, les événements à venir et des offres exclusives directement dans votre boîte mail.
                </p>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF94] to-[#00F0FF] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative flex items-center bg-black rounded-full border border-white/10 p-2 pl-6">
                        <input
                            type="email"
                            placeholder="votre@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'success' || status === 'loading'}
                            className="bg-transparent border-none text-white placeholder-gray-500 focus:outline-none flex-1 w-full"
                        />
                        <button
                            type="submit"
                            disabled={status === 'success' || status === 'loading'}
                            className={`
                        px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2
                        ${status === 'success'
                                    ? 'bg-[#00FF94] text-black'
                                    : 'bg-white text-black hover:bg-gray-200'}
                    `}
                        >
                            <AnimatePresence mode='wait'>
                                {status === 'loading' ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"
                                    />
                                ) : status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span>INSCRIT</span>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="idle"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <span>GO</span>
                                        <Send className="w-4 h-4" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[#00FF94] text-sm mt-4 font-mono"
                        >
                            Merci ! Vous êtes bien inscrit à la newsletter.
                        </motion.p>
                    )}
                </form>
            </div>
        </section>
    );
}

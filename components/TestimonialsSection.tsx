'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Awa Diop",
        role: "Digital Nomad",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
        content: "Une expérience incroyable. J'ai découvert des facettes de Cotonou que je ne soupçonnais même pas. L'organisation était parfaite.",
        rating: 5
    },
    {
        id: 2,
        name: "Jean-Marc Dubois",
        role: "Photographe",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        content: "La section 'Vibe' est géniale pour trouver exactement ce qu'on cherche. Le circuit photo à Ouidah était magique.",
        rating: 5
    },
    {
        id: 3,
        name: "Sarah K.",
        role: "Foodie",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        content: "Les recommandations de restaurants sont pointues. J'ai adoré découvrir la nouvelle cuisine béninoise.",
        rating: 4
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 px-6 relative z-10 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        ILS ONT <span className="text-[#00FF94]">VOYAGÉ</span>
                    </h2>
                    <p className="text-gray-500">Retour d'expérience de nos explorateurs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl relative group hover:border-[#00FF94]/50 transition-colors"
                        >
                            <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 group-hover:text-[#00FF94]/10 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < t.rating ? 'text-[#FFD700] fill-[#FFD700]' : 'text-gray-600'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed italic">"{t.content}"</p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{t.name}</h4>
                                    <p className="text-xs text-[#00FF94] uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

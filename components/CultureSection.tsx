"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cultureCards } from "@/data/destinations";
import { ArrowRight } from "lucide-react";

const CultureSection = () => {
  return (
    <section id="culture" className="py-24 bg-neo-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-neo-gold/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-neo-green/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Culture & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-gold to-neo-green">Technologie</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Le pont entre le savoir ancestral et le futur numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cultureCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-30"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neo-black/80 to-neo-black"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${card.color}`}>
                  {card.subtitle}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-glow transition-all">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-white/20 pl-4">
                  {card.description}
                </p>
                
                <div className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  <span>En savoir plus</span>
                  <ArrowRight size={16} className={card.color} />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-tr from-transparent to-${card.color.split('-')[1]}-500`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;

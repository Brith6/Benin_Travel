"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface DestinationProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
}

const DestinationCard = ({ destination, index }: { destination: DestinationProps; index: number }) => {
  const getColorClass = (colorName: string) => {
    switch (colorName) {
      case "neo-green": return "text-neo-green border-neo-green/30 group-hover:border-neo-green";
      case "neo-gold": return "text-neo-gold border-neo-gold/30 group-hover:border-neo-gold";
      case "neo-cyan": return "text-neo-cyan border-neo-cyan/30 group-hover:border-neo-cyan";
      default: return "text-white border-white/30";
    }
  };

  const colorClass = getColorClass(destination.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[450px] w-full overflow-hidden rounded-xl bg-neo-gray border border-white/5 hover:border-opacity-50 transition-all duration-500"
    >
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neo-black via-neo-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className={`inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest uppercase border rounded-full bg-black/50 backdrop-blur-md ${colorClass}`}>
            {destination.subtitle}
          </span>
          
          <h3 className="font-display text-3xl font-bold text-white mb-2 group-hover:text-glow transition-all">
            {destination.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {destination.description}
          </p>
          
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white group-hover:text-neo-green transition-colors">
            Explorer <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default DestinationCard;

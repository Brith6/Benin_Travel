"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { destinations } from "@/data/destinations";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import BookingModal from "./BookingModal";

const categories = ["TOUT", "NATURE", "VODOUN", "HISTOIRE"];

const DestinationFilters = () => {
  const [activeFilter, setActiveFilter] = useState("TOUT");
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const filteredDestinations = destinations.filter((dest) => {
    if (activeFilter === "TOUT") return true;
    return dest.category === activeFilter;
  });

  return (
    <section id="destinations" className="py-24 bg-neo-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
              Destinations <span className="text-neo-green">[229]</span>
            </h2>
            <p className="text-gray-400">Sélectionnez votre fréquence de voyage.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-bold tracking-wider border rounded-sm transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-neo-green text-neo-black border-neo-green box-glow"
                    : "bg-transparent text-gray-400 border-white/10 hover:border-neo-green/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredDestinations.map((dest) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={dest.id}
                className="group relative h-[450px] w-full overflow-hidden rounded-xl bg-neo-gray border border-white/5 hover:border-opacity-50 transition-all duration-500"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neo-black via-neo-black/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`inline-block px-2 py-1 text-[10px] font-bold tracking-widest uppercase border rounded-sm bg-black/50 backdrop-blur-md ${dest.color.split(' ')[0]} border-current`}>
                        {dest.category}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-white mb-1 group-hover:text-glow transition-all">
                      {dest.title}
                    </h3>
                    <p className="text-gray-300 text-xs font-bold uppercase tracking-wider mb-3">{dest.subtitle}</p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {dest.description}
                    </p>
                    
                    <button 
                      onClick={() => setSelectedDestination(dest.title)}
                      className="w-full py-3 bg-white/10 hover:bg-neo-green hover:text-neo-black text-white border border-white/20 hover:border-neo-green transition-all duration-300 rounded-sm font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
                    >
                      Réserver <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={!!selectedDestination} 
        onClose={() => setSelectedDestination(null)} 
        destination={selectedDestination || ""} 
      />
    </section>
  );
};

export default DestinationFilters;

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, DollarSign, Star, Check } from 'lucide-react';
import Image from 'next/image';
import { Place } from '@/data/db_master';

interface PlaceDetailsModalProps {
  place: Place | null;
  isOpen: boolean;
  onClose: () => void;
  onAction?: (place: Place) => void;
  actionLabel?: string;
  isSelected?: boolean;
}

export default function PlaceDetailsModal({ 
  place, 
  isOpen, 
  onClose, 
  onAction,
  actionLabel = "Sélectionner",
  isSelected = false
}: PlaceDetailsModalProps) {
  if (!place) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div 
                className="bg-[#111] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] pointer-events-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
              
              {/* Header Image */}
              <div className="relative h-64 md:h-80 w-full shrink-0">
                <Image 
                  src={place.image} 
                  alt={place.name} 
                  fill 
                  className="object-cover"
                  unoptimized
                />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Closing modal");
                    onClose();
                  }}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/20 transition-colors z-20 cursor-pointer border border-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-[#00FF94] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                            {place.category}
                        </span>
                        {place.vibe.map(v => (
                            <span key={v} className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                {v}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-1 leading-tight">{place.name}</h2>
                    <div className="flex items-center text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 mr-1 text-[#00FF94]" /> 
                        {place.city}
                    </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex items-start justify-between mb-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                        {place.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-xs text-gray-500 uppercase tracking-widest">Standing</span>
                        <div className="flex items-center gap-1 mt-1 text-[#FFD700]">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < place.priceLevel ? 'fill-[#FFD700]' : 'text-gray-700'}`} 
                                />
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-xs text-gray-500 uppercase tracking-widest">Budget</span>
                         <div className="flex items-center gap-1 mt-1 text-white font-mono text-lg">
                            {[...Array(place.priceLevel)].map((_, i) => '$')}
                         </div>
                    </div>
                </div>

                {onAction && (
                    <button
                        onClick={() => {
                            onAction(place);
                            onClose();
                        }}
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                            isSelected 
                            ? 'bg-red-500/10 text-red-500 border border-red-500/50 hover:bg-red-500/20' 
                            : 'bg-[#00FF94] text-black hover:bg-[#00cc76] shadow-[0_0_20px_#00FF94]/20'
                        }`}
                    >
                        {isSelected ? (
                            <>Retirer de ma sélection</>
                        ) : (
                            <>
                                <Check className="w-5 h-5" />
                                {actionLabel}
                            </>
                        )}
                    </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

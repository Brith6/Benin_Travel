'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DB_MASTER, Category, Vibe, City, Place } from '@/data/db_master';
import Image from 'next/image';
import { Filter, Search, MapPin, Zap } from 'lucide-react';
import PlaceDetailsModal from '@/components/PlaceDetailsModal';
import { useTrip } from '@/context/TripContext';
import { useRouter } from 'next/navigation';

export default function ExplorePage() {
  const [filterCategory, setFilterCategory] = useState<Category | 'ALL'>('ALL');
  const [filterVibe, setFilterVibe] = useState<Vibe | 'ALL'>('ALL');
  const [filterCity, setFilterCity] = useState<City | 'ALL'>('ALL');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  
  const { addToTrip } = useTrip();
  const router = useRouter();

  const filteredItems = DB_MASTER.filter(item => {
    const matchCategory = filterCategory === 'ALL' || item.category === filterCategory;
    const matchVibe = filterVibe === 'ALL' || item.vibe.includes(filterVibe);
    const matchCity = filterCity === 'ALL' || item.city === filterCity;
    return matchCategory && matchVibe && matchCity;
  });

  const categories: Category[] = ['HOTEL', 'RESTAURANT', 'SPORT', 'CULTURE', 'EVENT', 'AGENCY'];
  const vibes: Vibe[] = ['LUXE', 'ROOTS', 'FAMILY', 'ADRENALINE', 'BUSINESS', 'RELAX', 'HISTORY'];
  const cities: City[] = ['COTONOU', 'UIDAH', 'PORTO-NOVO', 'NORD', 'FIDJROSSE'];

  const handleAddToTrip = (place: Place) => {
    // Basic logic to add to trip. 
    // Since Explore is generic, we can guess the type or just redirect to Planner.
    // Simplifying: Go to Planner
    router.push('/planner');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-6">
      <PlaceDetailsModal 
        place={selectedPlace} 
        isOpen={!!selectedPlace} 
        onClose={() => setSelectedPlace(null)}
        onAction={(place) => router.push('/planner')}
        actionLabel="Planifier ce lieu"
      />

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              SMART <span className="text-[#00FF94]">EXPLORE</span>
            </h1>
            <p className="text-gray-400 max-w-lg">
              Le moteur de recherche intelligent du 229. Filtrez par ambiance, lieu et type d'expérience.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
             <select 
               className="bg-zinc-900 border border-white/10 p-3 rounded text-sm text-gray-300 focus:border-[#00FF94] outline-none"
               value={filterCity}
               onChange={(e) => setFilterCity(e.target.value as City | 'ALL')}
             >
               <option value="ALL">Toutes les villes</option>
               {cities.map(c => <option key={c} value={c}>{c}</option>)}
             </select>

             <select 
               className="bg-zinc-900 border border-white/10 p-3 rounded text-sm text-gray-300 focus:border-[#00FF94] outline-none"
               value={filterVibe}
               onChange={(e) => setFilterVibe(e.target.value as Vibe | 'ALL')}
             >
               <option value="ALL">Toutes les vibes</option>
               {vibes.map(v => <option key={v} value={v}>{v}</option>)}
             </select>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
          <button 
            onClick={() => setFilterCategory('ALL')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filterCategory === 'ALL' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
          >
            TOUT
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filterCategory === cat ? 'bg-[#00FF94] text-black' : 'text-gray-500 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Standard Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedPlace(item)}
                className="group bg-zinc-900 border border-white/10 hover:border-[#00FF94] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-56 w-full shrink-0 overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized 
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-[#FFD700] border border-[#FFD700]/30 z-10">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                   <div className="flex justify-between items-start mb-2">
                     <h3 className="text-xl font-bold leading-tight">{item.name}</h3>
                   </div>
                   
                   <p className="text-sm text-gray-400 mb-4 line-clamp-2 flex-1">{item.description}</p>
                   
                   <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-white/5">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#00FF94]" /> {item.city}</span>
                      <div className="flex items-center gap-2">
                         <span className="text-[#FFD700] tracking-widest">{'$'.repeat(item.priceLevel)}</span>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">Aucune expérience ne correspond à ces critères.</p>
            <button 
              onClick={() => { setFilterCategory('ALL'); setFilterVibe('ALL'); setFilterCity('ALL'); }}
              className="mt-4 text-[#00FF94] hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

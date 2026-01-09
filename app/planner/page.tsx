'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTrip } from '@/context/TripContext';
import { useAuth } from '@/context/AuthContext';
import { DB_MASTER, Place } from '@/data/db_master';
import { ChevronRight, Check, MapPin, Star, Utensils, Bed, ArrowLeft, Send, Sun, Moon, Car, LogIn, User, Info, Loader2 } from 'lucide-react';
import Image from 'next/image';
import PlaceDetailsModal from '@/components/PlaceDetailsModal';
import BookingConfirmationModal from '@/components/BookingConfirmationModal';
import { useRouter } from 'next/navigation';

export default function PlannerPage() {
  const { trip, addToTrip, removeFromTrip, totalEstimatedPrice } = useTrip();
  const { user } = useAuth();
  const router = useRouter();
  
  const [step, setStep] = useState(1);
  const [selectedPlaceForModal, setSelectedPlaceForModal] = useState<{place: Place, type: keyof typeof trip} | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-BJ', { style: 'currency', currency: 'XOF' }).format(price);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  const handleValidate = async () => {
    if (!user) return;
    
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const booking = {
        id: 'trip-' + Date.now().toString().slice(-6),
        title: 'Voyage Sur Mesure 229',
        date: new Date(),
        price: totalEstimatedPrice,
        status: 'confirmed',
        type: 'TRIP',
        items: [
            trip.hotel ? `Hôtel: ${trip.hotel.name}` : null,
            trip.morningActivity ? `Matin: ${trip.morningActivity.name}` : null,
            trip.eveningActivity ? `Soir: ${trip.eveningActivity.name}` : null,
            trip.transport ? `Transport: ${trip.transport.name}` : null
        ].filter(Boolean) as string[],
        reference: `B-TRIP-${Math.floor(Math.random() * 10000)}`
    };
    
    const currentTrips = JSON.parse(localStorage.getItem('my_trips') || '[]');
    localStorage.setItem('my_trips', JSON.stringify([booking, ...currentTrips]));
    
    setLoading(false);
    setShowBookingModal(true);
  };

    const handleModalAction = (place: Place) => {
        if (!selectedPlaceForModal) return;
        const type = selectedPlaceForModal.type;
        // Check if already selected
        if (trip[type]?.id === place.id) {
            removeFromTrip(type);
        } else {
            addToTrip(type, place.id);
        }
    };

  const CompactCard = ({ item, isSelected, onInfoClick }: { item: Place, isSelected: boolean, onInfoClick: () => void }) => (
    <div 
        onClick={onInfoClick}
        className={`cursor-pointer group relative bg-zinc-900/80 border rounded-xl overflow-hidden transition-all duration-300 flex h-32 hover:bg-zinc-800 ${
        isSelected 
            ? 'border-[#00FF94] ring-1 ring-[#00FF94] bg-zinc-800' 
            : 'border-white/10 hover:border-white/30'
        }`}
    >
        <div className="relative w-32 h-full shrink-0">
            <Image 
                src={item.image}
                alt={item.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                unoptimized
            />
            {isSelected && (
                <div className="absolute inset-0 bg-[#00FF94]/40 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-[#00FF94] rounded-full p-1.5 shadow-lg">
                        <Check className="w-5 h-5 text-black" />
                    </div>
                </div>
            )}
            <div className="absolute top-1 left-1 bg-black/60 backdrop-blur rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Info className="w-4 h-4 text-white" />
            </div>
        </div>
        <div className="p-3 flex flex-col justify-between flex-1 min-w-0">
            <div>
                <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-sm text-white leading-tight truncate">{item.name}</h3>
                    <span className="text-[#FFD700] text-[10px] font-mono shrink-0 bg-[#FFD700]/10 px-1.5 py-0.5 rounded">
                        {'$'.repeat(item.priceLevel)}
                    </span>
                </div>
                <div className="flex gap-1 mt-1.5 flex-wrap">
                    {item.vibe.slice(0, 2).map(v => (
                        <span key={v} className="text-[9px] bg-white/5 px-1.5 py-0.5 rounded text-gray-400 capitalize">{v.toLowerCase()}</span>
                    ))}
                </div>
                <p className="text-gray-500 text-[10px] line-clamp-2 mt-2 leading-relaxed font-light">{item.description}</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 border-t border-white/5 pt-2 mt-1">
                <MapPin className="w-3 h-3 text-[#00FF94]"/> <span className="truncate">{item.city}</span>
            </div>
        </div>
    </div>
  );

  // Helper to render selection grid
  const renderSelectionGrid = (items: Place[], type: keyof typeof trip, title: string, subtitle: string) => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-4"
    >
      <div className="flex justify-between items-end mb-2">
          <h2 className="text-2xl font-light text-gray-400">{title} <span className="text-white font-bold">{subtitle}</span></h2>
          <span className="text-xs text-gray-500">{items.length} options</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {items.map(item => (
            <CompactCard 
                key={item.id}
                item={item}
                isSelected={trip[type]?.id === item.id}
                onInfoClick={() => setSelectedPlaceForModal({ place: item, type })}
            />
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-10">
      <PlaceDetailsModal 
        place={selectedPlaceForModal?.place || null}
        isOpen={!!selectedPlaceForModal}
        onClose={() => setSelectedPlaceForModal(null)}
        onAction={handleModalAction}
        actionLabel={selectedPlaceForModal ? (trip[selectedPlaceForModal.type]?.id === selectedPlaceForModal.place.id ? "Retirer du voyage" : "Choisir cette expérience") : ""}
        isSelected={selectedPlaceForModal ? trip[selectedPlaceForModal.type]?.id === selectedPlaceForModal.place.id : false}
      />

      <BookingConfirmationModal 
        isOpen={showBookingModal}
        onClose={() => {
            setShowBookingModal(false);
            router.push('/profile');
        }}
        bookingDetails={{
            title: 'Voyage Sur Mesure 229',
            total: totalEstimatedPrice,
            date: new Date(),
            items: [
                trip.hotel ? `Hôtel: ${trip.hotel.name}` : '',
                trip.morningActivity ? `Matin: ${trip.morningActivity.name}` : '',
                trip.eveningActivity ? `Soir: ${trip.eveningActivity.name}` : '',
                trip.transport ? `Transport: ${trip.transport.name}` : ''
            ].filter(Boolean),
            reference: `B-TRIP-${Math.floor(Math.random() * 10000)}`
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8 sticky top-20 z-10 bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">
              TRIP <span className="text-[#00FF94]">PLANNER</span>
            </h1>
            <div className="flex items-center gap-4">
                 {user && (
                    <div className="hidden md:flex items-center gap-2 text-xs bg-zinc-900 px-3 py-1.5 rounded-full border border-white/10">
                        <User className="w-3 h-3 text-[#00FF94]" />
                        <span className="text-gray-300">{user.username}</span>
                    </div>
                 )}
                <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                <span>ÉTAPE</span>
                <span className="text-[#00FF94] text-lg font-bold">0{step}</span>
                <span className="text-xs opacity-50">/ 05</span>
                </div>
            </div>
          </div>
          <div className="h-0.5 bg-white/10 w-full rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#00FF94] shadow-[0_0_10px_#00FF94]"
              initial={{ width: 0 }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
            {/* STEP 1: HOTEL */}
            {step === 1 && renderSelectionGrid(
                DB_MASTER.filter(i => i.category === 'HOTEL'),
                'hotel',
                'Votre',
                'Sanctuaire'
            )}

            {/* STEP 2: MORNING */}
            {step === 2 && renderSelectionGrid(
                DB_MASTER.filter(i => ['SPORT', 'CULTURE'].includes(i.category)),
                'morningActivity',
                'Activité',
                'Matinale'
            )}

            {/* STEP 3: EVENING */}
            {step === 3 && renderSelectionGrid(
                DB_MASTER.filter(i => ['RESTAURANT', 'EVENT'].includes(i.category)),
                'eveningActivity',
                'Ambiance',
                'Nocturne'
            )}

            {/* STEP 4: TRANSPORT */}
            {step === 4 && renderSelectionGrid(
                DB_MASTER.filter(i => i.category === 'AGENCY'),
                'transport',
                'Logistique &',
                'Transport'
            )}

            {/* STEP 5: RECAP & AUTH */}
            {step === 5 && (
                <motion.div 
                key="step5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid md:grid-cols-2 gap-8 items-start"
                >
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Votre <span className="text-[#00FF94]">Séjour</span></h2>
                    
                    <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 space-y-4">
                        {/* Timeline Items */}
                        <div className="space-y-6 relative ml-2 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                            {[
                                { icon: Bed, key: 'hotel', label: 'Hébergement' },
                                { icon: Sun, key: 'morningActivity', label: 'Matin' },
                                { icon: Moon, key: 'eveningActivity', label: 'Soirée' },
                                { icon: Car, key: 'transport', label: 'Transport' }
                            ].map((s, idx) => {
                                // @ts-ignore
                                const selected = trip[s.key];
                                return (
                                    <div key={idx} className="relative flex items-center pl-10 group">
                                        <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center border z-10 bg-[#050505] transition-colors ${selected ? 'border-[#00FF94] text-[#00FF94]' : 'border-zinc-800 text-zinc-700'}`}>
                                            <s.icon className="w-3.5 h-3.5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{s.label}</p>
                                            {selected ? (
                                                <div className="text-sm font-medium text-white">{selected.name}</div>
                                            ) : <span className="text-sm text-zinc-700 italic">Non défini</span>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        
                        <div className="border-t border-white/5 pt-4 mt-4 flex justify-between items-center bg-zinc-950/50 p-4 rounded-xl">
                            <span className="text-gray-400 text-sm">Estimation Totale</span>
                            <span className="text-xl font-bold text-[#00FF94] font-mono">{formatPrice(totalEstimatedPrice)}</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl font-bold md:text-right">Validation</h2>
                    
                    <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 flex flex-col justify-center min-h-[300px]">
                        {!user ? (
                            <form onSubmit={handleLogin} className="space-y-4 text-center">
                                <div className="mx-auto w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                                    <LogIn className="w-6 h-6 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold">Connectez-vous</h3>
                                <p className="text-sm text-gray-500 mb-6">Pour valider votre itinéraire et le transmettre à nos agents, veuillez vous identifier.</p>
                                
                                <input 
                                    type="text" 
                                    placeholder="Votre nom d'utilisateur"
                                    value={loginUsername}
                                    onChange={(e) => setLoginUsername(e.target.value)}
                                    className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-[#00FF94] outline-none text-center"
                                />
                                <button 
                                    type="submit"
                                    disabled={!loginUsername.trim()}
                                    className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Accéder au Booking
                                </button>
                            </form>
                        ) : (
                            <div className="text-center space-y-6">
                                <div className="mx-auto w-16 h-16 bg-[#00FF94]/20 rounded-full flex items-center justify-center border border-[#00FF94]">
                                    <Check className="w-8 h-8 text-[#00FF94]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Tout est prêt, {user.username} !</h3>
                                    <p className="text-sm text-gray-500">Votre itinéraire est complet.</p>
                                </div>
                                <button 
                                    onClick={handleValidate}
                                    className="w-full bg-[#00FF94] text-black font-bold py-4 rounded-xl hover:bg-[#00cc76] transition-all shadow-[0_0_20px_#00FF94]/20 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    ENVOYER LA DEMANDE
                                </button>
                                <p className="text-[10px] text-zinc-600">En cliquant, vous acceptez nos CGV 2077.</p>
                            </div>
                        )}
                    </div>
                </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#050505]/90 backdrop-blur-md border-t border-white/10 p-4 z-40">
           <div className="max-w-5xl mx-auto flex justify-between items-center">
                <button 
                onClick={prevStep}
                disabled={step === 1}
                className="flex items-center gap-2 px-6 py-3 rounded-full hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all text-sm font-medium"
                >
                <ArrowLeft className="w-4 h-4" />
                Retour
                </button>

                {step < 5 && (
                <button 
                    onClick={nextStep}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all text-sm group"
                >
                    Suivant
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                )}
           </div>
        </div>

      </div>
    </div>
  );
}

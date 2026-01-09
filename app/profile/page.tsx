'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, LogOut, MapPin, Calendar, Clock, Ticket } from 'lucide-react';
import Image from 'next/image';

interface Trip {
  id: string;
  title: string;
  date: string;
  price: number;
  status: string;
  type: string;
}

export default function ProfilePage() {
  const { user, logout, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTrips = JSON.parse(localStorage.getItem('my_trips') || '[]');
      setTrips(storedTrips);
    }
  }, []);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-[#00FF94]">
        Chargement...
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Profile */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 p-8 bg-[#111] rounded-2xl border border-white/5">
          <div className="relative w-32 h-32 shrink-0">
             {user.avatar ? (
                <Image 
                    src={user.avatar} 
                    alt={user.name} 
                    fill 
                    className="rounded-full border-4 border-[#00FF94] object-cover"
                    unoptimized
                />
             ) : (
                <div className="w-full h-full rounded-full bg-[#333] flex items-center justify-center border-4 border-[#00FF94]">
                    <User className="w-12 h-12 text-[#00FF94]" />
                </div>
             )}
             <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#00FF94] rounded-full border-4 border-[#111]" />
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">{user.name}</h1>
            <p className="text-gray-400 font-mono mb-4">{user.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <span className="px-3 py-1 bg-[#00FF94]/10 text-[#00FF94] text-xs font-bold rounded-full uppercase tracking-wider border border-[#00FF94]/20">
                 Voyageur Vérifié
               </span>
               <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-bold rounded-full uppercase tracking-wider border border-white/10">
                 Membre depuis 2026
               </span>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold rounded-lg transition-colors border border-red-500/20"
          >
            <LogOut className="w-5 h-5" /> Déconnexion
          </button>
        </div>

        {/* Trips Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Ticket className="w-6 h-6 text-[#00FF94]" /> Vos Voyages à Venir
            </h2>
            <span className="text-sm text-gray-500 font-mono">{trips.length} RÉSULTATS</span>
          </div>

          {trips.length === 0 ? (
            <div className="text-center py-20 bg-[#111] rounded-2xl border border-dashed border-white/10">
              <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">Aucun voyage planifié</h3>
              <p className="text-gray-600 mb-6">Explorez nos destinations et commencez l'aventure.</p>
              <button 
                onClick={() => router.push('/planner')}
                className="px-6 py-3 bg-[#00FF94] text-black font-bold rounded hover:bg-[#00cc76] transition-colors"
              >
                Planifier un voyage
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trips.map((trip) => (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={trip.id} 
                    className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 hover:border-[#00FF94]/50 transition-all group"
                >
                  <div className="p-6 relative">
                    <div className="flexjustify-between items-start mb-4">
                      <span className="text-xs font-bold text-[#00FF94] bg-[#00FF94]/10 px-2 py-1 rounded mb-2 inline-block">
                        {trip.type || 'PACKAGE'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#00FF94] transition-colors">{trip.title}</h3>
                    
                    <div className="space-y-2 text-sm text-gray-400 mt-4">
                       <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(trip.date).toLocaleDateString()}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Statut: <span className="text-green-500 font-bold uppercase">{trip.status}</span></span>
                       </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                        <span className="text-xl font-bold text-white">{trip.price?.toLocaleString()} FCFA</span>
                        <button className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider">
                            Voir Détails
                        </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}

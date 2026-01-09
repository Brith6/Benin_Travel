'use client';

import { useParams, useRouter } from 'next/navigation';
import { PACKAGES } from '@/data/db_master';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, CreditCard, Check, ArrowLeft, Calendar, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import BookingConfirmationModal from '@/components/BookingConfirmationModal';
import { useTrip } from '@/context/TripContext'; // Optional if we want to add to trip context first

export default function PackageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const pkg = PACKAGES.find(p => p.id === params.id);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Package Introuvable</h1>
          <Link href="/planner" className="text-[#00FF94] underline">Retour au Planner</Link>
        </div>
      </div>
    );
  }

  const handleBooking = async () => {
    if (!user) {
      router.push(`/login?redirect=/packages/${params.id}`);
      return;
    }

    setLoading(true);
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Save to local history (MVP)
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      title: pkg.title,
      date: new Date(),
      price: pkg.price,
      status: 'confirmed',
      type: 'PACKAGE'
    };

    const currentTrips = JSON.parse(localStorage.getItem('my_trips') || '[]');
    localStorage.setItem('my_trips', JSON.stringify([booking, ...currentTrips]));
    
    setLoading(false);
    setShowModal(true);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-20">
      <BookingConfirmationModal 
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          router.push('/profile');
        }}
        bookingDetails={{
          title: pkg.title,
          total: pkg.price,
          items: pkg.includes,
          date: new Date(),
          reference: `B-PKG-${Math.floor(Math.random() * 10000)}`
        }}
      />

      {/* Hero Header */}
      <div className="relative h-[60vh] w-full">
        <Image 
          src={pkg.image} 
          alt={pkg.title} 
          fill 
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 container mx-auto">
          <Link href="/planner" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour aux Packages
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-4"
          >
            {pkg.title}
          </motion.h1>
          <div className="flex flex-wrap gap-6 text-lg">
            <span className="flex items-center gap-2 text-[#00FF94]">
              <Clock className="w-5 h-5" /> {pkg.duration}
            </span>
            <span className="flex items-center gap-2 text-[#FFD700]">
              <CreditCard className="w-5 h-5" /> {pkg.price.toLocaleString()} FCFA
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#00FF94] rounded-full" />
              L'Expérience
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {pkg.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Ce qui est inclus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                  <div className="bg-[#00FF94]/20 p-2 rounded-full">
                    <Check className="w-4 h-4 text-[#00FF94]" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="relative">
          <div className="sticky top-24 bg-[#111] border border-white/10 rounded-2xl p-6 space-y-6 shadow-2xl">
            <h3 className="text-xl font-bold">Réserver ce voyage</h3>
            
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#00FF94]" />
                <div>
                  <p className="font-bold text-white">Dates flexibles</p>
                  <p>Départs tous les jours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#00FF94]" />
                <div>
                  <p className="font-bold text-white">Annulation gratuite</p>
                  <p>Jusqu'à 48h avant le départ</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex justify-between items-end mb-6">
                <span className="text-gray-400">Total pour 1 pers.</span>
                <span className="text-3xl font-bold text-white">{pkg.price.toLocaleString()} <span className="text-sm text-gray-400">FCFA</span></span>
              </div>
              
              <button 
                onClick={handleBooking}
                disabled={loading}
                className="w-full py-4 bg-[#00FF94] hover:bg-[#00cc76] text-black font-bold text-lg rounded-sm transition-all focus:ring-4 focus:ring-[#00FF94]/50 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {loading ? 'Traitement...' : 'CONFIRMER LA RÉSERVATION'}
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                Paiement sécurisé via Mobile Money après confirmation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

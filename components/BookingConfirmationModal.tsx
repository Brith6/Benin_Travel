'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Mail, Printer, Share2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: {
    title: string;
    items?: string[];
    total: number;
    date: Date;
    reference: string;
  };
}

export default function BookingConfirmationModal({ isOpen, onClose, bookingDetails }: BookingConfirmationModalProps) {
  const { user } = useAuth();
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-black w-full max-w-lg rounded-sm overflow-hidden shadow-2xl relative"
        >
          {/* Header styled like an email */}
          <div className="bg-[#f5f5f5] p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="bg-[#00FF94] p-2 rounded-full">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-none">Confirmation de Réservation</h3>
                  <p className="text-xs text-gray-500 mt-1">De: no-reply@benin-travel.com</p>
                  <p className="text-xs text-gray-500">Pour: {user?.email || 'vous@email.com'}</p>
                </div>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Email Body */}
          <div className="p-8 space-y-6 font-mono text-sm">
            <div>
              <p className="mb-4">Bonjour <strong>{user?.name || 'Voyageur'}</strong>,</p>
              <p className="text-gray-600">
                Votre réservation a été confirmée avec succès. Préparez vos valises, le Bénin vous attend.
                Voici le récapitulatif de votre commande :
              </p>
            </div>

            <div className="border-t border-b border-dashed border-gray-300 py-6 space-y-3">
              <div className="flex justify-between font-bold text-lg">
                <span>{bookingDetails.title}</span>
                <span>{bookingDetails.total.toLocaleString()} FCFA</span>
              </div>
              
              {bookingDetails.items && bookingDetails.items.length > 0 && (
                <ul className="text-gray-500 pl-4 list-disc space-y-1 mt-2">
                  {bookingDetails.items.filter(Boolean).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="flex justify-between text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">
                <span>RÉFÉRENCE</span>
                <span className="font-mono">{bookingDetails.reference}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>DATE</span>
                <span>{bookingDetails.date.toLocaleDateString()}</span>
              </div>
            </div>

            <div className="bg-[#00FF94]/10 p-4 rounded border border-[#00FF94] flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#00cc76] shrink-0 mt-0.5" />
              <p className="text-xs text-[#00663b]">
                Un guide vous contactera sous 24h via WhatsApp au numéro associé à votre compte pour finaliser la logistique.
              </p>
            </div>
            
            <div className="flex justify-center gap-4 pt-4">
               <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-bold rounded hover:bg-gray-800 transition-colors">
                  <Printer className="w-4 h-4" /> IMPRIMER
               </button>
               <button className="flex items-center gap-2 px-4 py-2 border border-black text-black text-xs font-bold rounded hover:bg-gray-50 transition-colors">
                  <Share2 className="w-4 h-4" /> PARTAGER
               </button>
            </div>
          </div>
          
          <div className="h-2 bg-[repeating-linear-gradient(45deg,#00FF94,#00FF94_10px,#000_10px,#000_20px)]" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

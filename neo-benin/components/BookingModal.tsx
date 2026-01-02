"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: string;
}

const BookingModal = ({ isOpen, onClose, destination }: BookingModalProps) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Demande reçue par Benin-Travel. Nos guides vous contacteront pour votre voyage à ${destination}.`);
    onClose();
    setFormData({ name: "", email: "" });
  };

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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-neo-gray border border-white/10 p-8 rounded-xl z-50 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-2xl font-bold text-white">
                Réserver <span className="text-neo-green">{destination}</span>
              </h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Nom Complet</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neo-green transition-colors"
                  placeholder="Entrez votre nom"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neo-green transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-neo-green text-neo-black font-bold font-display uppercase tracking-wider rounded-sm hover:bg-white transition-colors mt-4"
              >
                Confirmer la Demande
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

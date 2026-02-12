import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 text-center md:text-left relative overflow-hidden text-gray-400">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[#00FF94] shadow-[0_0_100px_#00FF94] opacity-20" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* BRAND */}
        <div className="space-y-6">
          <h4 className="text-3xl font-bold text-white">BENIN<span className="text-[#00FF94]">-TRAVEL</span></h4>
          <p className="text-sm leading-relaxed text-gray-500">
            La première plateforme d'expérience touristique immersive au Bénin.
            Connecter le monde à la terre des rois avec une touche futuriste.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00FF94] hover:text-black transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00FF94] hover:text-black transition-all"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00FF94] hover:text-black transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00FF94] hover:text-black transition-all"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* LINKS 1 */}
        <div>
          <h5 className="text-white font-bold mb-6 text-lg">Exploration</h5>
          <ul className="space-y-4 text-sm">
            <li><Link href="/explore" className="hover:text-[#00FF94] transition-colors">Destinations</Link></li>
            <li><Link href="/planner" className="hover:text-[#00FF94] transition-colors">Planificateur</Link></li>
            <li><Link href="/packages" className="hover:text-[#00FF94] transition-colors">Packages VIP</Link></li>
            <li><Link href="#" className="hover:text-[#00FF94] transition-colors">Événements</Link></li>
          </ul>
        </div>

        {/* LINKS 2 */}
        <div>
          <h5 className="text-white font-bold mb-6 text-lg">Compagnie</h5>
          <ul className="space-y-4 text-sm">
            <li><Link href="/about" className="hover:text-[#00FF94] transition-colors">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-[#00FF94] transition-colors">Contact</Link></li>
            <li><Link href="/careers" className="hover:text-[#00FF94] transition-colors">Carrières</Link></li>
            <li><Link href="/legal" className="hover:text-[#00FF94] transition-colors">Mentions Légales</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h5 className="text-white font-bold mb-6 text-lg">Contact</h5>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin className="shrink-0 text-[#00FF94]" size={18} />
              <span>Haie Vive, Cotonou, Bénin</span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Mail className="shrink-0 text-[#00FF94]" size={18} />
              <span>hello@benin-travel.com</span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Phone className="shrink-0 text-[#00FF94]" size={18} />
              <span>+229 01 23 45 67 89</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-gray-600 font-mono uppercase tracking-widest">
          Fait avec l'énergie du 229 ⚡
        </div>
        <div className="text-[10px] text-gray-700">
          © 2026 Benin-Travel Corp. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

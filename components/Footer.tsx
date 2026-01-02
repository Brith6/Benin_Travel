"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-neo-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold tracking-wider text-white">
                NEO<span className="text-neo-green">-BENIN</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-md mb-6">
              Redécouvrez le Bénin sous un nouveau jour. Une expérience touristique immersive qui fusionne héritage ancestral et vision futuriste.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neo-green hover:text-neo-black transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-neo-green transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Rejoignez le futur du voyage.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neo-green transition-colors"
              />
              <button className="bg-neo-green text-neo-black font-bold py-3 px-4 rounded-sm hover:bg-white transition-colors uppercase tracking-wide text-sm">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NEO-BENIN. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm font-mono">
            Designed for the Future of Benin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

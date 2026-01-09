'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Map, Users, Globe, Home, Sparkles, FolderSearch } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Explorer', href: '/explore', icon: Globe },
    { name: 'Planner', href: '/planner', icon: Map },
    { name: 'Experts', href: '/pros', icon: Users },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Sparkles className="w-8 h-8 text-[#00FF94] group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-[#00FF94] blur-lg opacity-40 animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            BENIN<span className="text-[#00FF94]">-TRAVEL</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#00FF94] ${
                  isActive ? 'text-[#00FF94]' : 'text-gray-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00FF94] shadow-[0_0_10px_#00FF94]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {user ? (
          <Link href="/profile" className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all group">
            <span className="text-sm font-bold text-[#00FF94] group-hover:text-white transition-colors">
              {user.name ? user.name.split(' ')[0] : 'Voyageur'}
            </span>
            {user.avatar ? (
              <img src={user.avatar} alt="Profile" className="w-8 h-8 rounded-full border border-[#00FF94]/50" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#00FF94] flex items-center justify-center text-black font-bold">
                {(user.name || 'V').charAt(0)}
              </div>
            )}
          </Link>
        ) : (
          <Link href="/login" className="hidden md:block px-4 py-2 text-xs font-bold text-black bg-[#FFD700] hover:bg-[#ffe44d] transition-colors rounded-sm shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            CONNEXION
          </Link>
        )}
      </div>
    </nav>
  );
}

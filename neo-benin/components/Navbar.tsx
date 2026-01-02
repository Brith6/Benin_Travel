"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-neo-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl font-bold tracking-wider text-white group-hover:text-neo-green transition-colors duration-300">
              BENIN-TRAVEL <span className="text-neo-green group-hover:text-white">[229]</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#destinations" className="text-sm font-medium text-gray-300 hover:text-neo-green transition-colors duration-300 uppercase tracking-widest">Destinations</Link>
            <Link href="#culture" className="text-sm font-medium text-gray-300 hover:text-neo-green transition-colors duration-300 uppercase tracking-widest">Culture</Link>
            <Link href="#tech" className="text-sm font-medium text-gray-300 hover:text-neo-green transition-colors duration-300 uppercase tracking-widest">Tech</Link>
            <button className="px-6 py-2 bg-neo-green/10 border border-neo-green/50 text-neo-green hover:bg-neo-green hover:text-neo-black transition-all duration-300 rounded-sm font-display font-bold tracking-wide text-sm box-glow">
              Réserver
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neo-green transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-neo-black/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-neo-green transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full py-3 bg-neo-green text-neo-black font-bold font-display tracking-wide rounded-sm">
              Réserver l'Expérience
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

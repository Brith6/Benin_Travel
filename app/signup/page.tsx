'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2, Mail, Lock, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, loading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(name, email, password);
    router.push('/profile');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Right: Image (swapped for variety) */}
      <div className="relative hidden md:block h-full order-last">
        <Image 
          src="https://images.unsplash.com/photo-1626804475297-411dbcc76bc2?auto=format&fit=crop&w=800&q=80"
          alt="Benin Travel Signup"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-12 z-10">
          <h1 className="text-5xl font-bold font-display text-white mb-4">
            REJOIGNEZ <br/><span className="text-[#00FF94]">L'AVENTURE</span>
          </h1>
          <p className="text-xl text-gray-300">
            Créez votre profil pour personnaliser votre expérience au Bénin.
          </p>
        </div>
      </div>

      {/* Left: Form */}
      <div className="flex items-center justify-center p-8 bg-[#050505]">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Créer un compte
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Déjà membre ? <Link href="/login" className="font-medium text-[#00FF94] hover:text-[#00cc76]">Se connecter</Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Nom complet</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-md leading-5 bg-white/5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-[#00FF94] focus:border-[#00FF94] sm:text-sm transition-colors"
                    placeholder="Nom complet"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Adresse Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-md leading-5 bg-white/5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-[#00FF94] focus:border-[#00FF94] sm:text-sm transition-colors"
                    placeholder="Adresse Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Mot de passe</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-md leading-5 bg-white/5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-[#00FF94] focus:border-[#00FF94] sm:text-sm transition-colors"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-black bg-[#00FF94] hover:bg-[#00cc76] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FF94] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  <span className="flex items-center gap-2">
                    S'inscrire <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

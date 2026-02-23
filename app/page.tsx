import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Target, Globe, Music } from 'lucide-react';
import LegbaChat from '@/components/LegbaChat';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1580828369619-142c1106e57d?auto=format&fit=crop&w=800&q=80"
            alt="Benin Future"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-[#00FF94]/10" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 border border-[#FFD700] rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-[#FFD700] bg-[#FFD700]/10 backdrop-blur-md animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
            L'ENCYCLOPÉDIE VIVANTE DU 229
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
            BENIN<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#00F0FF]">-TRAVEL</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
            De la transe Vodoun aux néons de Cotonou. <br />
            Explorez, Planifiez, Vibrez.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/explore"
              className="px-8 py-4 bg-[#00FF94] text-black font-bold text-lg rounded-sm hover:skew-x-[-10deg] transition-transform duration-300 flex items-center gap-2"
            >
              <Globe className="w-5 h-5" /> EXPLORER LE CATALOGUE
            </Link>
            <Link
              href="/planner"
              className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold text-lg rounded-sm backdrop-blur-sm transition-colors flex items-center gap-2"
            >
              <Target className="w-5 h-5" /> CRÉER MON VOYAGE
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES TEASER */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                CHOISISSEZ VOTRE <span className="text-[#00F0FF]">VIBE</span>
              </h2>
              <p className="text-gray-500">Une curation unique pour chaque instant.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CARD 1: SPORT */}
            <Link href="/explore" className="group relative h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-[#00F0FF] transition-all duration-500 bg-zinc-900">
              <Image
                src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80"
                alt="Sport"
                fill
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <div className="flex items-center gap-2 text-[#00F0FF] mb-2">
                  <Zap className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Adrénaline</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Sport & Loisirs</h3>
                <p className="text-gray-400 text-sm line-clamp-2">Padel, Karting, Surf. Bougez au rythme de la ville.</p>
              </div>
            </Link>

            {/* CARD 2: CULTURE */}
            <Link href="/explore" className="group relative h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFD700] transition-all duration-500 bg-zinc-900 md:-mt-12">
              <Image
                src="https://images.unsplash.com/photo-1590426573887-2abe8da17ba4?auto=format&fit=crop&w=800&q=80"
                alt="Culture"
                fill
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <div className="flex items-center gap-2 text-[#FFD700] mb-2">
                  <Target className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Patrimoine</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Histoire & Arts</h3>
                <p className="text-gray-400 text-sm line-clamp-2">Fondation Zinsou, Ouidah, les palais royaux.</p>
              </div>
            </Link>

            {/* CARD 3: NIGHTLIFE */}
            <Link href="/explore" className="group relative h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF4500] transition-all duration-500 bg-zinc-900">
              <Image
                src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80"
                alt="Nightlife"
                fill
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <div className="flex items-center gap-2 text-[#FF4500] mb-2">
                  <Music className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Nightlife</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Sortir & Manger</h3>
                <p className="text-gray-400 text-sm line-clamp-2">Des maquis aux rooftops. Vivez la nuit Cotonou.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <NewsletterSignup />

      <LegbaChat />
    </main>
  );
}

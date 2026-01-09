import { GUIDES } from '@/data/db';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function ProsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            NOS <span className="text-[#00FF94]">ÉCLAIREURS</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ils ne sont pas de simples guides. Ce sont les gardiens des secrets du 229. 
            Connectez-vous directement à l'âme du Bénin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {GUIDES.map((guide) => (
            <div 
              key={guide.id}
              className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00FF94]/50 transition-all duration-500"
            >
              <div className="relative h-96 w-full grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={guide.image}
                  alt={guide.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#00FF94]" />
                  <span className="text-xs font-bold tracking-widest text-[#00FF94] uppercase">Vérifié</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{guide.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{guide.specialty}</p>
                
                <a
                  href={`https://wa.me/${guide.phone}?text=Je veux visiter le Benin`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#1faa53] text-black font-bold rounded transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> Transmission WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Glasses, Wallet } from "lucide-react";

const features = [
  {
    icon: <Cpu size={32} />,
    title: "Guide AI",
    description: "Votre assistant personnel intelligent qui connaît chaque légende du Dahomey.",
    color: "text-neo-cyan"
  },
  {
    icon: <Glasses size={32} />,
    title: "Visite VR",
    description: "Prévisualisez les sites sacrés en réalité virtuelle avant votre arrivée.",
    color: "text-neo-green"
  },
  {
    icon: <Wallet size={32} />,
    title: "Paiement Crypto",
    description: "Transactions sécurisées et instantanées avec les principales cryptomonnaies.",
    color: "text-neo-gold"
  }
];

const CultureTech = () => {
  return (
    <section id="culture" className="py-24 bg-neo-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="lg:w-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Culture & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-gold to-neo-green">
                Technologie
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              NEO-BENIN n'est pas seulement une agence de voyage. C'est une passerelle temporelle. 
              Nous préservons l'authenticité de nos traditions (Masques Guélédé, Zangbeto) tout en 
              vous offrant le confort et la sécurité de la technologie de pointe.
            </p>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className={`p-3 rounded-md bg-black/30 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-lg">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image Composition */}
        <div className="lg:w-1/2 relative h-[600px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            {/* Main Image - Zangbeto or Mask */}
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden border-2 border-neo-gold/30 z-10">
              <Image 
                src="https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?q=80&w=1000&auto=format&fit=crop" // TODO: Image Masque / Zangbeto
                alt="Culture Traditionnelle"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-neo-gold/10 mix-blend-overlay"></div>
            </div>

            {/* Secondary Image - Tech/Modern */}
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden border-2 border-neo-cyan/30 z-20 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1000&auto=format&fit=crop" // TODO: Image Tech / VR
                alt="Technologie Moderne"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-neo-cyan/20 mix-blend-overlay"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-neo-green/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-neo-gold/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CultureTech;

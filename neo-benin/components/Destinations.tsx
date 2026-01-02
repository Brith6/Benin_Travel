"use client";

import { destinations } from "@/constants";
import DestinationCard from "./DestinationCard";
import { motion } from "framer-motion";

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-neo-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Destinations <span className="text-neo-green">Phares</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Sélectionnez votre prochaine aventure parmi nos lieux les plus emblématiques, revisités pour le voyageur du futur.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <DestinationCard key={dest.id} destination={dest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;

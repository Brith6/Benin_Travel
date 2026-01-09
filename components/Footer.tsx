export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 text-center relative overflow-hidden">
       {/* Decorative glow */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[#00FF94] shadow-[0_0_100px_#00FF94] opacity-20" />
       
       <div className="container mx-auto px-6 relative z-10">
         <h4 className="text-2xl font-bold mb-4 text-white">BENIN<span className="text-[#00FF94]">-TRAVEL</span></h4>
         <p className="text-gray-500 text-sm mb-8">
           Plateforme de tourisme nouvelle génération. <br />
           Connecter le monde à la terre des rois.
         </p>
         
         <div className="text-xs text-gray-600 font-mono uppercase tracking-widest">
           Fait avec l'énergie du 229 ⚡
         </div>
         <div className="mt-2 text-[10px] text-gray-700">
            © 2026 Benin-Travel Corp. Tous droits réservés.
         </div>
       </div>
    </footer>
  );
}

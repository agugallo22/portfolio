import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // El delay aquí solo afecta a la aparición inicial al cargar la página
      transition={{ 
        duration: 0.5, 
        delay: delay 
      }}
      // El hover tiene su propia transición con delay 0 para que sea instantáneo en todas las cards
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.2, delay: 0 } 
      }}
      className="relative p-8 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl 
                 border border-white/40 
                 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] 
                 cursor-pointer group overflow-hidden"
    >
      {/* Reflejo de "Cristal Líquido" */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/30 pointer-events-none" />
      
      {/* Sombra interna para profundidad */}
      <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] rounded-[2.5rem] pointer-events-none" />

      {/* Contenedor del Icono: 
          - bg-[#050a30] (Azul oscuro inicial)
          - group-hover:bg-white (Se vuelve blanco en hover)
      */}
      <div className="relative w-14 h-14 bg-[#050a30] rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:bg-white">
        {/* Icono:
            - text-white (Inicial)
            - group-hover:text-[#050a30] (Se vuelve azul oscuro en hover)
        */}
        <Icon 
          className="text-white transition-colors duration-500 group-hover:text-[#050a30]" 
          size={28} 
          strokeWidth={1.5} 
        />
      </div>
      
      <h3 className="relative text-2xl font-bold mb-3 text-[#050a30] tracking-tight">
        {title}
      </h3>
      
      <p className="relative text-[#050a30]/70 text-base leading-relaxed font-medium">
        {description}
      </p>

      {/* Indicador de acción tech */}
      <div className="relative mt-6 flex items-center gap-2">
        {/* Línea que se activa al hacer hover */}
        <div className="h-[2px] w-8 bg-[#050a30]/20 rounded-full overflow-hidden transition-colors duration-300 group-hover:bg-[#050a30]">
          <motion.div 
            className="h-full bg-[#050a30]" 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            style={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        
        {/* Texto "Saber más" */}
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#050a30]/40 transition-colors duration-300 group-hover:text-[#050a30]">
          Saber más
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const SkillTag = ({ name, delay = 0, type = 'dev' }) => {
  const isMkt = type === 'mkt';

  // Definimos los colores del fondo, borde y texto según el tipo
  const containerColors = isMkt
    ? "bg-blue-100 border-blue-200 text-[#050a30] hover:bg-blue-200" // Marketing: Celeste oscuro / Azul
    : "bg-blue-50 border-blue-200 text-[#050a30] hover:bg-blue-100"; // Dev: Clarito (original)

  // Definimos el color del ícono (check) según el tipo
  const iconColor = isMkt 
    ? "text-blue-600" 
    : "text-blue-600";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors group shadow-sm ${containerColors}`}
    >
      <CheckCircle2 size={16} className={`group-hover:scale-110 transition-transform ${iconColor}`} />
      <span className="text-sm font-semibold tracking-wide">{name}</span>
    </motion.div>
  );
};

export default SkillTag;
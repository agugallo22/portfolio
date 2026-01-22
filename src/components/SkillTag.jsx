import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const SkillTag = ({ name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-[#050a30] hover:bg-blue-100 transition-colors group shadow-sm"
    >
      <CheckCircle2 size={16} className="text-blue-600 group-hover:scale-110 transition-transform" />
      <span className="text-sm font-semibold tracking-wide">{name}</span>
    </motion.div>
  );
};

export default SkillTag;
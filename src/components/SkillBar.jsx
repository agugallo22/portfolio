import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, percentage, delay = 0 }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#050a30] font-semibold">{name}</span>
        <span className="text-blue-600 font-bold">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-700 to-blue-400 rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;
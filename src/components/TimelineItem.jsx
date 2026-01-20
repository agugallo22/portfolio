import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, company, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-8 border-l-2 border-purple-200 last:pb-0"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full" />
      <div className="mb-1 text-purple-600 font-bold text-sm">{year}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <div className="text-gray-600 font-medium mb-2">{company}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default TimelineItem;
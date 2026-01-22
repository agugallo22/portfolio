import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ image, title, description, category, onClick, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer group shadow-2xl transition-all"
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a30]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex items-center gap-2 text-white">
            <ExternalLink size={20} />
            <span className="font-semibold">Ver más</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-semibold rounded-full mb-3 border border-blue-600/30">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-blue-100/60 text-sm line-clamp-2 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
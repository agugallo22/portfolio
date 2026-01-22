import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050a30]/80 backdrop-blur-md z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-[#0a1142] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors z-10 text-white"
            >
              <X size={24} />
            </button>

            <div className="p-6 md:p-8 lg:p-12 text-white">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl mb-8 shadow-2xl"
              />
              
              <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 text-sm font-semibold rounded-full mb-4 border border-blue-600/30">
                {project.category}
              </span>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{project.title}</h2>
              <p className="text-blue-100/70 text-lg mb-8 leading-relaxed italic">{project.fullDescription || project.description}</p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.results && (
                <div className="bg-blue-600/10 border border-blue-600/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Impacto</h3>
                  <p className="text-blue-50/80 leading-relaxed font-light">{project.results}</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Monitor, Github, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import MediaLinkCard from '@/components/MediaLinkCard';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = project
    ? [project.image, ...(project.images || [])].filter(Boolean)
    : [];
  const hasMedia = project?.media && project.media.length > 0;
  const carouselLength = hasMedia ? project.media.length : allImages.length;

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  if (!project) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % carouselLength);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + carouselLength) % carouselLength);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop con desenfoque profundo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050a30]/90 backdrop-blur-md z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-2 md:inset-10 lg:inset-20 bg-[#0a1142] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Botón Cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center transition-colors z-[60] text-white border border-white/20"
            >
              <X size={24} />
            </button>

            {/* COLUMNA SUPERIOR (Móvil) / DERECHA (PC): Carrusel */}
            {/* Se ajustó de h-[350px] a h-[45vh] o min-h-[400px] para que se vea más grande en celu */}
            <div className="w-full lg:w-1/2 h-[45vh] min-h-[350px] lg:h-full bg-black/20 relative order-1 lg:order-2 flex items-center justify-center border-b lg:border-b-0 lg:border-l border-white/10 overflow-hidden">
              {hasMedia ? (
                <div className="w-full h-full overflow-y-auto p-4 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-md"
                    >
                      <MediaLinkCard item={project.media[currentIndex]} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : allImages.length > 0 ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full p-2 md:p-4 flex items-center justify-center"
                  >
                    <img
                      src={allImages[currentIndex]}
                      className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/5"
                      alt="Vista del proyecto"
                    />
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="flex flex-col items-center gap-3 text-blue-300/70">
                  <Instagram size={56} />
                  {project.igHandle && <span className="text-lg font-medium">{project.igHandle}</span>}
                </div>
              )}

              {carouselLength > 1 && (
                <>
                  <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/5 hover:bg-blue-600 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/10 z-10">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/5 hover:bg-blue-600 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/10 z-10">
                    <ChevronRight size={24} />
                  </button>

                  {/* Dots del carrusel */}
                  <div className="absolute bottom-6 flex gap-2 z-10">
                    {Array.from({ length: carouselLength }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentIndex ? 'w-8 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'w-2 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* COLUMNA INFERIOR (Móvil) / IZQUIERDA (PC): Información */}
            <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12 overflow-y-auto custom-scrollbar order-2 lg:order-1 bg-gradient-to-b from-transparent to-[#050a30]/30">
              <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 text-sm font-semibold rounded-full border border-blue-600/30 mb-6">
                {project.category}
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight text-white">
                {project.title}
              </h2>

              {(project.role || project.period) && (
                <p className="text-blue-300/70 text-sm font-medium mb-6">
                  {project.role}
                  {project.role && project.period && ' · '}
                  {project.period}
                </p>
              )}

              <p className="text-blue-100/70 text-lg mb-8 leading-relaxed italic">
                {project.fullDescription || project.description}
              </p>

              {/* Botones de Acción */}
              <div className="flex flex-wrap gap-3 mb-10">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
                    <Monitor size={18} /> Visitar Sitio
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 text-white rounded-xl text-sm font-bold transition-all">
                    <Github size={18} /> Ver Código
                  </a>
                )}
                {project.igLink && (
                  <a href={project.igLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 text-white rounded-xl text-sm font-bold transition-all">
                    <Instagram size={18} /> {project.igHandle || 'Ver Instagram'}
                  </a>
                )}
              </div>

              <div className="space-y-10">
                {/* Métricas (Social Media) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-400">Resultados</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {project.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4"
                        >
                          <p className="text-2xl font-bold text-white">{metric.value}</p>
                          <p className="text-blue-200/60 text-xs uppercase tracking-wider mt-1">{metric.label}</p>
                          {metric.detail && (
                            <p className="text-blue-100/50 text-xs mt-1">{metric.detail}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Caso destacado */}
                {project.highlight && (
                  <div className="bg-blue-600/10 border border-blue-500/30 p-6 rounded-2xl backdrop-blur-sm">
                    <span className="inline-block px-3 py-1 bg-blue-600/30 text-blue-300 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      ⭐ Caso destacado
                    </span>
                    <p className="text-blue-50/80 text-sm font-light mb-3">{project.highlight.note}</p>
                    <a
                      href={project.highlight.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-sm font-semibold"
                    >
                      Ver reel en Instagram →
                    </a>
                  </div>
                )}

                {/* Tecnologías */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-400">Tecnologías</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-xl text-blue-100 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Resultados */}
                {project.results && project.results.length > 0 && (
                  <div className="bg-blue-600/5 border border-blue-600/20 p-6 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">Impacto / Resultados</h3>
                    <ul className="space-y-3">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-blue-50/80 text-sm font-light flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
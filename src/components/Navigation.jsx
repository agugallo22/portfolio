import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/sobre-mi', label: 'Sobre mí' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/contacto', label: 'Contacto' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    // CAMBIO: Aumentamos el desenfoque y oscurecemos el cristal para que se lea en blanco
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a30]/40 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="img/logo.png" 
              alt="H.X GALLO" 
              className="h-7 w-auto transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" 
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:text-blue-400 ${
                  isActive(link.path) ? 'text-white font-bold' : 'text-white/70'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="underline"
                    className="h-0.5 bg-blue-500 mt-1"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3 border-t border-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm uppercase tracking-[0.1em] transition-all ${
                      isActive(link.path) 
                        ? 'bg-blue-600/30 text-white font-bold border-l-4 border-blue-500' 
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
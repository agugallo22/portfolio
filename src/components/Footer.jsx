import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050a30] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src="img/logo.svg" alt="H.X GALLO" className="h-10 w-auto" />
            <p className="text-blue-200/60 text-sm leading-relaxed">
              Transformo ideas en soluciones digitales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest mb-6 block text-white">Enlaces rápidos</span>
            <div className="space-y-3">
              <Link to="/" className="block text-white/70 hover:text-white transition-colors text-sm">Inicio</Link>
              <Link to="/sobre-mi" className="block text-white/70 hover:text-white transition-colors text-sm">Sobre mí</Link>
              <Link to="/proyectos" className="block text-white/70 hover:text-white transition-colors text-sm">Proyectos</Link>
              <Link to="/contacto" className="block text-white/70 hover:text-white transition-colors text-sm">Contacto</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest mb-6 block text-white">Servicios</span>
            <div className="space-y-3 text-white/70 text-sm font-light">
              <p>Desarrollo WordPress</p>
              <p>E-commerce Profesional</p>
              <p>Social Media Management</p>
              <p>Video Editing & Reels</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest mb-6 block text-white">Contacto</span>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={16} className="text-white-500" />
                <span>hechoxgallo@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={16} className="text-white-500" />
                <span>+54 3492 321978</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin size={16} className="text-white-500" />
                <span>Rafaela, Santa Fe, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs tracking-widest uppercase">
            © {currentYear} H.X GALLO. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com/hechoxgallo" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all transform hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com/in/agugallo" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all transform hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
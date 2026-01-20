import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-purple-400">H.X GALLO</span>
            <p className="mt-4 text-gray-400 text-sm">
              Transformo ideas en soluciones digitales profesionales
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Enlaces rápidos</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Inicio
              </Link>
              <Link to="/sobre-mi" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Sobre mí
              </Link>
              <Link to="/proyectos" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Proyectos
              </Link>
              <Link to="/contacto" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Contacto
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Servicios</span>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Desarrollo WordPress</p>
              <p className="text-gray-400 text-sm">E-commerce</p>
              <p className="text-gray-400 text-sm">Social Media Manager</p>
              <p className="text-gray-400 text-sm">Video Editing</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} />
                <span>contacto@hxgallo.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} H.X GALLO. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
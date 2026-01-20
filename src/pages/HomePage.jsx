import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Palette, ShoppingCart, Layers, Share2, Video } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const HomePage = () => {
  const services = [
    {
      icon: Code,
      title: 'WordPress Developer',
      description: 'Desarrollo de sitios web personalizados en WordPress con diseño profesional y funcionalidad avanzada.'
    },
    {
      icon: Palette,
      title: 'Front-end Developer',
      description: 'Interfaces de usuario modernas y responsivas con React, TailwindCSS y las últimas tecnologías web.'
    },
    {
      icon: Layers,
      title: 'Back-end Developer',
      description: 'Desarrollo de APIs robustas y bases de datos eficientes para aplicaciones web escalables.'
    },
    {
      icon: Code,
      title: 'FullStack Developer',
      description: 'Soluciones completas desde el front-end hasta el back-end, creando aplicaciones web integrales.'
    },
    {
      icon: Share2,
      title: 'Social Media Manager',
      description: 'Gestión profesional de redes sociales, creación de contenido y estrategias de marketing digital.'
    },
    {
      icon: Video,
      title: 'Video Editor',
      description: 'Edición de video profesional para contenido de redes sociales, publicidad y presentaciones.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>H.X GALLO - Desarrollador Web & Social Media Manager</title>
        <meta name="description" content="Transformo ideas en soluciones digitales profesionales. Desarrollo WordPress, E-commerce, Front-end, Back-end y gestión de redes sociales." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1590085327097-cf67e44baab3)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-purple-700/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl text-white mb-6 font-bold">
              <span style={{ fontFamily: 'Montserrat Arabic', fontWeight: 400 }}>H.X</span>{' '}
              <span style={{ fontFamily: 'Montserrat', fontWeight: 900 }}>GALLO</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
              Desarrollador Web & Social Media Manager
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transformo ideas en soluciones digitales profesionales
            </p>
            <Link
              to="/proyectos"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Ver mis proyectos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gray-900">Servicios</h2>
            <p className="section-subtitle">Soluciones digitales completas para tu negocio</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gray-900">Clientes satisfechos</h2>
            <p className="section-subtitle">Testimonios de quienes confiaron en mi trabajo</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xl">C{item}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Cliente {item}</h3>
                    <p className="text-gray-600 text-sm">Empresa {item}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "Excelente profesional, entregó el proyecto a tiempo y superó nuestras expectativas. Altamente recomendado."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para iniciar tu proyecto?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Contáctame ahora
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
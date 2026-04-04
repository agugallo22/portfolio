import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code,
  Share2,
  Video,
  Star,
  ChevronDown,
  ChartNoAxesCombined,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const HomePage = () => {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Manager',
      description:
        'Gestión profesional de redes sociales y estrategias de contenido.',
    },
    {
      icon: ChartNoAxesCombined,
      title: 'Media Buyer',
      description:
        'Gestión de pautas publicitarias enfocadas en conversión y crecimiento de audiencia.',
    },
    {
      icon: Video,
      title: 'Video Editor',
      description:
        'Edición de video para contenido de redes sociales y publicidad.',
    },
    {
      icon: Code,
      title: 'WordPress Developer',
      description:
        'Desarrollo de sitios web personalizados en WordPress con diseño profesional.',
    },
    {
      icon: Code,
      title: 'FullStack Developer',
      description: 'Soluciones completas desde el front-end hasta el back-end.',
    },
  ];

  const testimonials = [
    {
      name: 'Ivana',
      company: 'La Copia',
      image: '/img/mujer1.avif',
      text: 'Excelente gestión de nuestro Instagram. El enfoque en tendencias de Reels y la gestión de consultas han incrementado notablemente nuestra comunidad y el compromiso de los seguidores.',
    },
    {
      name: 'César Flores',
      company: 'Pedify',
      image: '/img/cesar.png',
      text: 'Excelente servicio, profesionalismo y calidez humana.',
    },
  ];

  return (
    <div className="bg-[#050a30] min-h-screen overflow-x-hidden">
      <Helmet>
        <title>H.X GALLO</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050a30]">
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center w-full"
          >
            <motion.img
              src="/img/logo.png"
              alt="H.X GALLO"
              className="h-auto w-[90vw] max-w-[500px] md:max-w-none md:w-[1200px] mb-10 object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            <p className="text-xl md:text-3xl text-blue-200 mb-12 font-light tracking-wide max-w-3xl">
              Desarrollador Web & Social Media Manager
            </p>
            <Link
              to="/proyectos"
              className="inline-block bg-transparent border-2 border-white text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#050a30] transition-all duration-500"
            >
              Ver mis proyectos
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <ChevronDown size={32} strokeWidth={1} />
            <ChevronDown size={32} strokeWidth={1} className="-mt-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 bg-white rounded-t-[3.5rem] -mt-1 z-10 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('/img/fondo-blanco.jpg')",
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#050a30] mb-4">
              Servicios Profesionales
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          </div>

          {/* items-stretch obliga a todas las columnas a tener el mismo alto */}
          <div className="flex flex-wrap justify-center gap-10 items-stretch">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(33.333%-2.5rem)] max-w-[400px] flex"
              >
                {/* Le pasamos una prop className para que ServiceCard la use */}
                <ServiceCard
                  {...service}
                  delay={index * 0.1}
                  className="flex-1"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#050a30] rounded-t-[3.5rem] relative z-20 -mt-10 lg:-mt-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">
              Testimonios de clientes
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center w-full max-w-[400px]"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-blue-500/50 shadow-xl bg-gray-800">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150';
                    }}
                  />
                </div>
                <div className="flex gap-1 justify-center mb-4 text-blue-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-blue-100/70 mb-8 italic text-sm leading-relaxed min-h-[80px] text-center">
                  "{t.text}"
                </p>
                <div className="text-center">
                  <h4 className="font-bold text-white text-base">{t.name}</h4>
                  <p className="text-blue-400 text-sm font-medium">
                    {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import React, { useEffect, useRef } from 'react';
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
import AutoplayVideoCard from '@/components/AutoplayVideoCard';

const HomePage = () => {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  const services = [
    {
      icon: Share2,
      title: 'Social Media Manager',
      description:
        'Estrategia de contenidos, planificación editorial y gestión integral de redes sociales.',
    },
    {
      icon: ChartNoAxesCombined,
      title: 'Media Buyer',
      description:
        'Gestión de campañas en Meta Ads orientadas a conversión y crecimiento de audiencia.',
    },
    {
      icon: Video,
      title: 'Video Editor',
      description:
        'Guion, grabación y edición de video para redes sociales y contenido audiovisual.',
    },
    {
      icon: Code,
      title: 'WordPress Developer',
      description:
        'Desarrollo de sitios web corporativos y e-commerce en WordPress y WooCommerce.',
    },
    {
      icon: Code,
      title: 'FullStack Developer',
      description:
        'Desarrollo con React, ASP.NET Core MVC y bases de datos SQL, integrando front-end y back-end.',
    },
  ];

  const reels = [
    { src: '/videos/oikos-amueblado.mp4', label: 'Oikos - Inmobiliaria' },
    { src: '/videos/hxgallo-laser-alarmas.mp4', label: 'Laser Alarmas - Tienda' },
    { src: '/videos/oikos-venta-menchaca.mp4', label: 'Oikos - Inmobiliaria' },
    { src: '/videos/bigpons-hamburguesa.mp4', label: 'Big Pons - Hamburguesería' },
  ];

  const clients = [
    { name: 'Oikos Negocios Inmobiliarios', logo: '/img/logos/oikos.png', highlight: '+1,7M de visualizaciones' },
    { name: 'Pedify', logo: '/img/logos/pedify.png', highlight: '+13.200% de visualizaciones' },
    { name: 'La Copia Librería', logo: '/img/logos/lacopia.png', highlight: '+765K de visualizaciones' },
    { name: 'Laser Alarmas', logo: '/img/logos/laser-alarmas.png', highlight: 'Sitio web + e-commerce' },
    { name: 'ONG Manos Abiertas Rafaela', logo: '/img/logos/manosabiertas.png', highlight: 'Contenido institucional' },
    { name: 'SUMAK Indumentaria', logo: '/img/logos/sumak.png', highlight: '+7.000 usuarios alcanzados' },
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
    {
      name: 'Claudio Gasparotto Vietto',
      company: 'Oikos Negocios Inmobiliarios',
      image: '/img/claudio.png',
      text: 'Desde que administra nuestras redes, mejoramos tanto en imagen como en comunicación. Su trabajo nos ayudó a crecer y a transmitir mejor quiénes somos y lo que hacemos. Destacamos su atención cercana, su compromiso y su profesionalismo. ¡Muy recomendable!',
    },
  ];

  return (
    <div className="bg-[#050a30] min-h-screen overflow-x-hidden">
      <Helmet>
        <title>H.X GALLO</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050a30]">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/videos/hxgallo-laser-alarmas.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a30]/60 via-[#050a30]/70 to-[#050a30] z-[1]" />
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

      {/* Trabajos de edición Section */}
      <section className="relative py-24 bg-[#050a30] z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Edición de video
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <AutoplayVideoCard src={reel.src} label={reel.label} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-14"
          >
            <Link
              to="/edicion-video"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-600/20"
            >
              Ver más ediciones de video
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="relative py-24 bg-[#050a30] rounded-t-[3.5rem] -mt-1 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Algunos clientes y resultados obtenidos
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {clients.map((c, index) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center flex flex-col items-center"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-12 max-w-[160px] object-contain mb-4"
                />
                <h3 className="font-bold text-white text-lg mb-2">{c.name}</h3>
                <p className="text-blue-400 font-medium">{c.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
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

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import TimelineItem from '@/components/TimelineItem';
import SkillTag from '@/components/SkillTag';

const AboutPage = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  const hardSkills = [
    'WordPress',
    'React',
    'JavaScript',
    'TailwindCSS',
    'Meta ADS',
    'Social Media Management',
    'Video Editing',
    'Node.js',
    'SQL',
    'SEO Optimization',
  ];
  const softSkills = [
    'Comunicación Asertiva',
    'Resolución de Problemas',
    'Pensamiento Analítico',
    'Adaptabilidad',
    'Trabajo en Equipo',
    'Gestión del Tiempo',
  ];

  const experience = [
    {
      year: 'ENE 2026 - Presente',
      title: 'Community Manager',
      company: 'Pedify',
      description: (
        <>
          Gestión de Instagram, planificación de contenido gráfico (trabajando
          con un diseñador a mi cargo), planificación/creación de contenido,
          estrategia de comunicación y campañas publicitarias en Meta ADS para
          la empresa Pedify SAAS. Instagram:{' '}
          <a
            href="https://www.instagram.com/pedify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @pedify.app
          </a>
        </>
      ),
    },
    {
      year: 'OCT 2025 - Presente',
      title: 'Creador/Editor de video',
      company: 'Manos Abiertas Rafaela',
      description: (
        <>
          En este trabajo solo me encargo de la parte de los "Reels" para la
          cuenta de Instagram: Filmación y edición de videos para la ONG Manos
          Abiertas Rafaela, enfocándome en transmitir su misión y valores a
          través de contenido audiovisual atractivo. Instagram:{' '}
          <a
            href="https://www.instagram.com/manosabiertas.rafa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @manosabiertas.rafa
          </a>
        </>
      ),
    },
    {
      year: 'JUL 2025 - Presente',
      title: 'WordPress Developer',
      company: 'Freelance',
      description:
        'Desarrollo de sitios web y e-commerces en WordPress, personalización de temas y SEO.',
    },
    {
      year: 'DIC 2024 - Presente',
      title: 'Community Manager',
      company: 'La Copia Librería',
      description: (
        <>
          Gestión de Instagram, diseño de contenido gráfico,
          planificación/creación de contenido, estrategia de comunicación y
          campañas publicitarias en Meta ADS para la librería La Copia.
          Instagram:{' '}
          <a
            href="https://www.instagram.com/lacopiarafaela"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @lacopiarafaela
          </a>
        </>
      ),
    },
    {
      year: 'NOV 2024 - OCT 2025',
      title: 'Community Manager',
      company: 'La Baguette. Panadería',
      description: (
        <>
          Gestión de Instagram, diseño de contenido
          gráfico,planificación/creación de contenido, estrategias de
          comunicación y campañas publicitarias en Meta ADS para la panadería La
          Baguette. Instagram:{' '}
          <a
            href="https://www.instagram.com/labaguetteraf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @labaguetteraf
          </a>
        </>
      ),
    },
    {
      year: 'ABR 2024 - OCT 2025',
      title: 'Community Manager',
      company: 'Estilo Italiano Pizzería',
      description: (
        <>
          Gestión de Instagram, diseño de contenido gráfico,
          planificación/creación de contenido, estrategias de comunicación y
          campañas publicitarias en Meta ADS para la pizzería Estilo Italiano.
          Instagram:{' '}
          <a
            href="https://www.instagram.com/estiloitaliano.mm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @estiloitaliano.mm
          </a>
        </>
      ),
    },
    {
      year: '2020 - 2021',
      title: 'Community Manager',
      company: 'Ragnarök Esports',
      description:
        'Gestión de la cuenta de Twitter e Instagram, interacciones diarias, coberturas de partidos en directo, etc.',
    },
  ];

  const education = [
    {
      year: '2026',
      title: 'Tecnicatura Universitaria en Programación',
      company: 'UTN',
      description:
        'Preparando el trabajo final para presentar en febrero de 2026 y recibirme.',
    },
    {
      year: '2026',
      title: 'OPI 2025',
      company: 'Franco Pisso',
      description:
        'Curso "Oratoria para inconformistas" edición 2025 dictado por Franco Pisso. Certificado en progreso.',
    },
    {
      year: '2026',
      title: 'Curso de Habilidades Blandas',
      company: 'Franco Pisso',
      description:
        'Formación en comunicación asertiva, oratoria y liderazgo efectivo. Certificado a disposición.',
    },
    {
      year: '2021',
      title: 'CURSO COMMUNITY MANAGER EN INS. DEPORTIVAS',
      company: 'SCOUTING CONSULTORÍA Y GESTIÓN DEPORTIVA',
      description:
        'Formación especializada en gestión de redes sociales para instituciones deportivas. Certificado a disposición.',
    },
    {
      year: '2021',
      title: 'CURSO GESTIÓN DE ESPORTS',
      company: 'SCOUTING CONSULTORÍA Y GESTIÓN DEPORTIVA',
      description:
        'Curso orientado a la administración y promoción de equipos y eventos de deportes electrónicos. Certificado a disposición.',
    },
  ];

  return (
    <div className="bg-[#050a30] min-h-screen text-white overflow-x-hidden">
      <Helmet>
        <title>Sobre mí - H.X GALLO</title>
      </Helmet>

      {/* Main Full Screen Section */}
      <section className="relative min-h-screen flex flex-col pt-40 pb-20 items-center">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('/img/Fondo azul con detalles.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12" // Aumentamos a mb-12 para igualar a Proyectos
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Sobre mí
            </h1>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">
            {/* Contenedor de la Imagen con altura automática coincidente */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative group h-full"
            >
              <div className="absolute -inset-4 bg-blue-600/20 rounded-[2.5rem] blur-2xl" />
              <img
                src="/img/yo-bik.jpeg"
                alt="Perfil"
                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border border-white/10"
              />
            </motion.div>

            {/* Contenedor del Texto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center"
            >
              <div className="h-14 flex items-center overflow-visible mb-6 text-left">
                <AnimatePresence mode="wait">
                  {!showName ? (
                    <motion.img
                      key="logo"
                      src="/img/logo.svg"
                      alt="H.X GALLO"
                      className="h-10 md:h-12"
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(10px)' }}
                      transition={{ duration: 0.6 }}
                    />
                  ) : (
                    <motion.h2
                      key="name"
                      className="text-3xl md:text-5xl font-bold tracking-tighter"
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      transition={{ duration: 0.8 }}
                    >
                      Agustín <span className="text-blue-500">Gallo</span>
                    </motion.h2>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4 text-blue-100/90 leading-relaxed font-light text-base md:text-lg text-left">
                <p>
                  Actualmente estoy esperando la fecha de presentación para
                  defender mi trabajo final y recibirme en la{' '}
                  <strong className="text-white">
                    Tecnicatura Universitaria en Programación
                  </strong>{' '}
                  de la
                  {' '} <strong className="text-white">
                    UTN
                  </strong>. Cuento con formación técnica avanzada y enfoque
                  humano, habiendo realizado cursos de habilidades blandas y
                  oratoria.
                </p>
                <p>
                  Desde 2020 trabajo en el mundo de las redes sociales como{' '}
                  <strong className="text-white">Community Manager</strong>. Comencé
                  en el mundo de los deportes electrónicos y luego me expandí
                  a diversos rubros como gastronomía, librerías,
                  SaaS, etc.
                </p>
                <p>
                  Además, desarrollo sitios web y tiendas online en{' '}
                  <strong className="text-white">WordPress</strong> como
                  freelance, y tengo un emprendimiento personal de un Beer Truck como se ve en la imagen llamado{' '}
                  <strong className="text-white">BIK - Beer In Kombi</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <ChevronDown size={28} strokeWidth={1} />
            <ChevronDown size={28} strokeWidth={1} className="-mt-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stack Section */}
      <section className="relative py-32 bg-white text-[#050a30] rounded-t-[3.5rem] -mt-1 z-10 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('/img/Fondo blanco con detalle 2.jpg')",
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-16">Stack & Aptitudes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-blue-600 mb-6 border-b pb-2">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {hardSkills.map((s, i) => (
                  <SkillTag key={s} name={s} delay={i * 0.05} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-blue-600 mb-6 border-b pb-2">
                Human Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((s, i) => (
                  <SkillTag key={s} name={s} delay={i * 0.05} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trayectoria Section */}
      <section className="py-24 bg-slate-50 rounded-t-[3.5rem] relative z-20 -mt-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#050a30]">
            Trayectoria
          </h2>
          <div className="space-y-20 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-600">
                Experiencia laboral
              </h3>
              {experience.map((e, i) => (
                <TimelineItem key={i} {...e} delay={i * 0.1} />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-600">
                Educación
              </h3>
              {education.map((ed, i) => (
                <TimelineItem key={i} {...ed} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-[#050a30] text-white rounded-t-[3.5rem] relative z-30 -mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Trabajamos juntos?</h2>
          <Link
            to="/contacto"
            className="inline-block bg-transparent border-2 border-white text-white px-12 py-4 rounded-full font-bold hover:bg-white hover:text-[#050a30] transition-all duration-500 shadow-xl"
          >
            Contactame
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

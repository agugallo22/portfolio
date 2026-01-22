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
      year: '2022 - Presente',
      title: 'FullStack Developer',
      company: 'Freelance',
      description:
        'Desarrollo de aplicaciones web completas utilizando React, Node.js y bases de datos relacionales.',
    },
    {
      year: '2021 - Presente',
      title: 'WordPress Developer',
      company: 'Freelance',
      description:
        'Desarrollo de sitios web y e-commerces en WordPress, personalización de temas y SEO.',
    },
    {
      year: '2020 - Presente',
      title: 'Community Manager',
      company: 'Freelance',
      description:
        'Gestión integral de redes sociales, creación de contenido y pauta publicitaria en Meta ADS.',
    },
  ];

  const education = [
    {
      year: '2024',
      title: 'Curso de Habilidades Blandas',
      company: 'Franco Pisso',
      description:
        'Formación en comunicación asertiva, oratoria y liderazgo efectivo.',
    },
    {
      year: '2023',
      title: 'Tecnicatura Universitaria en Programación',
      company: 'UTN',
      description:
        'Graduado con especialización en desarrollo web y bases de datos.',
    },
  ];

  return (
    <div className="bg-[#050a30] min-h-screen text-white overflow-x-hidden">
      <Helmet>
        <title>Sobre mí - H.X GALLO</title>
      </Helmet>

      {/* Main Full Screen Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('/img/Fondo azul con detalles.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sobre mí</h1>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative group h-[350px] md:h-[450px]"
            >
              <div className="absolute -inset-4 bg-blue-600/20 rounded-[2.5rem] blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1603985585179-3d71c35a537c"
                alt="Perfil"
                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border border-white/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center"
            >
              <div className="h-16 flex items-center overflow-visible mb-6 text-left">
                <AnimatePresence mode="wait">
                  {!showName ? (
                    <motion.img
                      key="logo"
                      src="/img/logo.svg"
                      alt="H.X GALLO"
                      className="h-10 md:h-14"
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

              <div className="space-y-4 text-blue-100/90 leading-relaxed font-light text-lg text-left">
                <p>
                  Graduado de{' '}
                  <strong className="text-white">
                    Tecnicatura Universitaria en Programación
                  </strong>{' '}
                  en la UTN, con formación técnica avanzada y enfoque humano.
                </p>
                <p>
                  Desde 2020 gestiono estrategias digitales como <strong className="text-white">Community Manager</strong>, con foco en Meta ADS y creación de contenido.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
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

      {/* Stack Section con fondo de imagen solicitado */}
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

      {/* Trayectoria Section - Fondo Blanco Legible */}
      <section className="py-24 bg-slate-50 rounded-t-[3.5rem] relative z-20 -mt-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#050a30]">Trayectoria</h2>
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
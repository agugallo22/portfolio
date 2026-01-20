import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SkillBar from '@/components/SkillBar';
import TimelineItem from '@/components/TimelineItem';

const AboutPage = () => {
  const skills = [
    { name: 'WordPress', percentage: 95 },
    { name: 'React', percentage: 90 },
    { name: 'JavaScript', percentage: 88 },
    { name: 'TailwindCSS', percentage: 92 },
    { name: 'Social Media Management', percentage: 90 },
    { name: 'Video Editing', percentage: 85 }
  ];

  const experience = [
    {
      year: '2020 - Presente',
      title: 'Community Manager',
      company: 'Freelance',
      description: 'Gestión integral de redes sociales para diversos clientes, creación de contenido mensual, manejo de pauta publicitaria en Meta ADS.'
    },
    {
      year: '2021 - Presente',
      title: 'WordPress Developer',
      company: 'Freelance',
      description: 'Desarrollo de sitios web y e-commerces en WordPress, personalización de temas, optimización SEO y mantenimiento.'
    },
    {
      year: '2022 - Presente',
      title: 'FullStack Developer',
      company: 'Freelance',
      description: 'Desarrollo de aplicaciones web completas utilizando React, Node.js y bases de datos relacionales.'
    }
  ];

  const education = [
    {
      year: '2023',
      title: 'Tecnicatura Universitaria en Programación',
      company: 'Universidad Tecnológica Nacional (UTN)',
      description: 'Graduado con excelentes calificaciones, especialización en desarrollo web y bases de datos.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre mí - H.X GALLO | Desarrollador Web & Social Media Manager</title>
        <meta name="description" content="Graduado de UTN en Tecnicatura en Programación. Community Manager desde 2020. Especializado en WordPress, desarrollo web y gestión de redes sociales." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="section-title text-gray-900">Sobre mí</h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Profesional apasionado por la tecnología y el marketing digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1603985585179-3d71c35a537c"
                alt="Perfil profesional"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                H.X GALLO
              </h2>
              <p className="text-xl text-purple-600 font-semibold">
                Desarrollador Web & Social Media Manager
              </p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Graduado de <strong>Tecnicatura Universitaria en Programación</strong> en la Universidad Tecnológica Nacional (UTN), con una sólida formación en desarrollo de software y tecnologías web.
                </p>
                <p>
                  Desde 2020 me desempeño como <strong>Community Manager</strong>, gestionando estrategias de contenido para diversos clientes y manejando campañas publicitarias en Meta ADS con resultados comprobables.
                </p>
                <p>
                  Ofrezco servicios integrales que incluyen:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Planificación y creación de contenido mensual para redes sociales</li>
                  <li>Gestión de pauta publicitaria en Meta ADS</li>
                  <li>Desarrollo de páginas web en WordPress</li>
                  <li>Desarrollo de e-commerces personalizados en WordPress</li>
                  <li>Desarrollo de aplicaciones web con React y tecnologías modernas</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Habilidades técnicas
            </h2>
            <p className="text-gray-600 text-lg">
              Dominio de tecnologías y herramientas profesionales
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experiencia laboral
            </h2>
            <p className="text-gray-600 text-lg">
              Mi trayectoria profesional
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                company={item.company}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Educación
            </h2>
            <p className="text-gray-600 text-lg">
              Formación académica
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                company={item.company}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Estoy disponible para nuevos proyectos y colaboraciones
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Contáctame
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
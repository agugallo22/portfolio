import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['Todos', 'WordPress', 'E-commerce', 'Social Media', 'Front-end'];

  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1687006067259-6de13ca3875e',
      title: 'E-commerce de Moda',
      description: 'Tienda online completa con sistema de pagos integrado y gestión de inventario.',
      fullDescription: 'Desarrollo de e-commerce completo en WordPress con WooCommerce, integración con pasarelas de pago, sistema de gestión de inventario y panel de administración personalizado.',
      category: 'E-commerce',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
      results: 'Aumento del 150% en ventas online durante los primeros 6 meses.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      title: 'Sitio Corporativo',
      description: 'Página web profesional para empresa de servicios con diseño moderno y responsive.',
      fullDescription: 'Diseño y desarrollo de sitio web corporativo en WordPress con diseño personalizado, optimización SEO y formularios de contacto avanzados.',
      category: 'WordPress',
      technologies: ['WordPress', 'Elementor', 'CSS', 'JavaScript'],
      results: 'Mejora del 200% en leads generados mensualmente.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
      title: 'Campaña Social Media',
      description: 'Estrategia completa de contenido para marca de lifestyle en Instagram y Facebook.',
      fullDescription: 'Gestión integral de redes sociales, creación de contenido visual, planificación mensual y manejo de pauta publicitaria en Meta ADS.',
      category: 'Social Media',
      technologies: ['Canva', 'Adobe Photoshop', 'Meta Business Suite', 'Hootsuite'],
      results: 'Crecimiento de 300% en seguidores y aumento del 250% en engagement.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      title: 'Dashboard Administrativo',
      description: 'Panel de administración interactivo desarrollado con React y TailwindCSS.',
      fullDescription: 'Aplicación web moderna desarrollada con React, gestión de estado con Context API, diseño responsive con TailwindCSS.',
      category: 'Front-end',
      technologies: ['React', 'TailwindCSS', 'JavaScript', 'Framer Motion'],
      results: 'Reducción del 40% en tiempo de gestión administrativa.'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d',
      title: 'Blog Personal',
      description: 'Blog minimalista con sistema de comentarios y newsletter integrado.',
      fullDescription: 'Desarrollo de blog en WordPress con diseño minimalista, optimización de velocidad, integración con Mailchimp y sistema de comentarios.',
      category: 'WordPress',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Mailchimp API'],
      results: 'Más de 10,000 visitantes mensuales en los primeros 3 meses.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      title: 'E-commerce de Tecnología',
      description: 'Tienda online especializada en productos tecnológicos con comparador de precios.',
      fullDescription: 'Desarrollo de e-commerce avanzado con sistema de comparación de productos, filtros inteligentes y recomendaciones personalizadas.',
      category: 'E-commerce',
      technologies: ['WordPress', 'WooCommerce', 'JavaScript', 'API REST'],
      results: 'Tasa de conversión del 4.5%, superior al promedio de la industria.'
    }
  ];

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Proyectos - H.X GALLO | Portfolio de Desarrollo Web y Social Media</title>
        <meta name="description" content="Explora mi portfolio de proyectos: WordPress sites, e-commerces, campañas de social media y aplicaciones web. Resultados comprobables y clientes satisfechos." />
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
            <h1 className="section-title text-gray-900">Mis proyectos</h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Descubre algunos de los trabajos que he realizado para clientes satisfechos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                category={project.category}
                onClick={() => handleProjectClick(project)}
                delay={index * 0.1}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-600 text-lg">
                No se encontraron proyectos en esta categoría.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </>
  );
};

export default ProjectsPage;
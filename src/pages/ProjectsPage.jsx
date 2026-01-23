import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['Todos', 'WordPress', 'Social Media', 'Full Stack', 'Front-end', 'Back-end', 'Analytics'];

  // Datos de proyectos

  const projects = [
    {
      id: 1,
      image: 'img/Proyectos/cargando-proyectos.jpg',
      title: 'Cargando...',
      description: 'Próximamente estarán todos mis proyectos acá.',
      fullDescription: '',
      category: '¡Estoy trabajando en esto!',
      technologies: ['Próximamente...'],
      results: [],
    },
   {
      id: 2,
      image: 'img/Proyectos/laser-inicio.png',
      title: 'Laser Alarmas',
      description: 'E-commerce corporativo de alta conversión y estrategia digital integral.',
      fullDescription:
        'Desarrollo de un ecosistema e-commerce completo para una empresa líder en seguridad. El proyecto abarcó desde la arquitectura de la información y la implementación de una tienda online robusta hasta la integración de sistemas logísticos y de pago automatizados, optimizando la experiencia de usuario y la conversión de leads.',
      category: 'WordPress',
      technologies: [
        'WordPress',
        'WooCommerce',
        'Elementor Pro',
        'Custom Checkout Optimization',
        'SEO Avanzado',
        'Google Ads Strategy',
        'SSL & Security Hardening',
      ],
      link: 'https://laseralarmas.com',
      images: [
        'img/Proyectos/laser-catalogo.png',
        'img/Proyectos/laser-contacto.png',
        'img/Proyectos/laser-contacto-faq.png',
        'img/Proyectos/laser-faq-footer.png',
        'img/Proyectos/laser-producto.png'
      ],
      results: [
        'Integración avanzada de Pasarelas de Pago (Mercado Pago/Tarjetas).',
        'Implementación de logística de Envíos automatizada con cálculo de costos en tiempo real.',
        'Catálogos dinámicos optimizados para carga rápida y navegación intuitiva.',
        'Panel de Vista de Administrador personalizado para actualización de precios, gestión de stock y pedidos.',
        '+5M acumulado en ventas directas a través de la tienda online.',
        'Optimización Core Web Vitals para mejorar el posicionamiento en buscadores (SEO).',
        'Configuración de embudos de conversión vinculados a campañas de Google Ads.',
      ],
    },
    {
      id: 3,
      image: 'img/Proyectos/gala-inicio.png',
      title: 'Gala Bakery',
      description:
        'Desarrollo web responsive enfocado en maquetación profesional y validaciones.',
      fullDescription:
        'Proyecto centrado en las bases del desarrollo web moderno. El objetivo principal fue crear una interfaz profesional utilizando HTML5 y CSS3, potenciada por Bootstrap para garantizar un diseño 100% responsive. Se implementó lógica de JavaScript pura para la validación del formulario de pedidos y se integró una API externa de terceros, cumpliendo con los requisitos de promoción académica.',
      category: 'Front-end',
      technologies: [
        'HTML5',
        'CSS3',
        'Bootstrap 5',
        'JavaScript (ES6+)',
        'API Integration',
      ],
      link: 'https://galabakery.hxgallo.com',
      github: 'https://github.com/agugallo22/galabakery-frontend',
      images: [
        'img/Proyectos/gala-catalogo.png',
        'img/Proyectos/gala-historia.png',
        'img/Proyectos/gala-newsletter-faq.png',
        'img/Proyectos/gala-pedidos.png',
      ],
      results: [
        'Dominio de maquetación responsive con Bootstrap.',
        'Implementación de validaciones de formularios en el lado del cliente.',
        'Consumo de datos asíncronos mediante Fetch API.',
      ],
    },
    {
      id: 4, 
      image: 'img/Proyectos/mvc-inicio.png',
      title: 'Sistema de Gestión de Despachos',
      description: 'Sistema integral de logística y control de stock desarrollado en ASP.NET Core MVC.',
      fullDescription:
        'Proyecto integrador para la materia Programación III. Se desarrolló una solución robusta para la gestión de despachos de mercadería, integrando un sistema de inventario dinámico, administración de clientes y un esquema de seguridad basado en roles de usuario.',
      category: 'Back-end',
      technologies: [
        '.NET Core MVC',
        'Entity Framework',
        'SQL Server',
        'LINQ',
        'Razor Pages',
        'Session Management',
        'Custom Filters',
      ],
      github: 'https://github.com/agugallo22/sistemadespacho-entity-mvc',
      images: [
        'img/Proyectos/mvc-der.png',
        'img/Proyectos/mvc-uml.png',
        'img/Proyectos/mvc-codigo.png'
      ],
      results: [
        'Implementación de ABM completo para Clientes, Direcciones y Productos con validaciones del lado del servidor.',
        'Desarrollo de lógica de Control de Stock automatizada al confirmar pedidos de despacho.',
        'Sistema de autenticación y autorización personalizado mediante filtros de acción (FiltroAutorizacion).',
        'Gestión de roles diferenciados para Administradores y Usuarios con restricciones de acceso granulares.',
        'Arquitectura de datos optimizada utilizando Entity Framework y consultas LINQ eficientes.',
      ],
    },
    {
      id: 5,
      image: 'img/Proyectos/MovilizApp/3.jpg',
      title: 'Análisis de Datos: MovilizApp',
      description: 'Optimización de movilidad urbana mediante análisis predictivo y visualización de datos.',
      fullDescription:
        'Proyecto de análisis de datos centrado en la eficiencia del transporte. Se procesaron grandes conjuntos de datos para identificar cuellos de botella en la movilidad urbana, utilizando técnicas estadísticas y herramientas de visualización para transformar datos crudos en decisiones estratégicas. El enfoque principal fue la detección de patrones de demanda y la optimización de rutas.',
      category: 'Analytics',
      technologies: [
        'Python',
        'Pandas / NumPy',
        'K-Means Clustering',
        'Seaborn / Matplotlib',
        'Google Colab',
        'Data Cleaning & Engineering',
      ],
      github: 'https://github.com/agugallo22/movilizap',
      images: [
        'img/Proyectos/MovilizApp/4.jpg',
        'img/Proyectos/MovilizApp/14.jpg',
        'img/Proyectos/MovilizApp/10.jpg',
        'img/Proyectos/MovilizApp/11.jpg',
        'img/Proyectos/MovilizApp/14.jpg',
        'img/Proyectos/MovilizApp/16.jpg',
        'img/Proyectos/MovilizApp/19.jpg',
        'img/Proyectos/MovilizApp/27.jpg',
        'img/Proyectos/MovilizApp/29.jpg',
        'img/Proyectos/MovilizApp/32.jpg',
        'img/Proyectos/MovilizApp/31.jpg',
        'img/Proyectos/MovilizApp/34.jpg',
        'img/Proyectos/MovilizApp/35.jpg',

      ],
      results: [
        'Identificación de "Zonas Rojas" de sobre-oferta mediante Tasa de Inactividad Estimada (TIE).',
        'Implementación de modelo K-Means para segmentar ineficiencias estructurales y fallas de asignación.',
        'Procesamiento de datasets diversos (CSV, XLSX, JSON) garantizando la unicidad e integridad de datos.',
        'Propuesta de estrategias tácticas como Bonos de Dispersión para optimizar la rentabilidad del conductor.',
      ],
    },
  ];

  // Filtrado de proyectos según categoría seleccionada
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'Todos') return true;

    // Si seleccionamos Full-stack, mostramos TODO lo relacionado a desarrollo puro
    if (selectedCategory === 'Full Stack') {
      return (
        project.category === 'Full Stack' || 
        project.category === 'Front-end' || 
        project.category === 'Back-end'
      );
    }
    

    // Filtro estándar para el resto (WordPress, Social Media, etc.)
    return project.category === selectedCategory;
  });
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#050a30] min-h-screen text-white">
      <Helmet>
        <title>Proyectos - H.X GALLO</title>
        <meta
          name="description"
          content="Portfolio de proyectos reales: Desarrollo web y estrategias de Social Media."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden text-center">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('img/Fondo azul con detalles.png')",
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Mis Proyectos
            </h1>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <p className="text-xl text-blue-200/80 max-w-2xl mx-auto font-light italic">
            Soluciones digitales con resultados comprobables.
          </p>
        </div>
      </section>

      {/* Filters Section con estilo Liquid Glass */}
      <section className="sticky top-20 z-30 py-6 bg-[#050a30]/60 backdrop-blur-xl border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                    : 'bg-white/5 border-white/10 text-blue-200/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard
                    {...project}
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-blue-200/50 text-xl font-light">
                Próximamente más proyectos en esta categoría...
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
    </div>
  );
};

export default ProjectsPage;

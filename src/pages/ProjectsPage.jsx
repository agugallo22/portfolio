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
        'SEO',
        'Google Ads Strategy',
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
        'Optimización para mejorar el posicionamiento en buscadores (SEO).',
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
    {
      id: 7,
      title: 'Oikos Negocios Inmobiliarios',
      logo: 'img/logos/oikos.png',
      description: 'Diseñé e implementé la estrategia de contenido audiovisual de la empresa para fortalecer su posicionamiento digital.',
      fullDescription:
        'Diseñé e implementé la estrategia de contenido audiovisual de la empresa mediante planificación, elaboración de guiones, grabación, edición de videos y desarrollo de piezas gráficas para fortalecer su posicionamiento digital.',
      category: 'Social Media',
      igHandle: '@oikosnegociosinmobiliarios',
      igLink: 'https://www.instagram.com/oikosnegociosinmobiliarios/',
      role: 'Estrategia de contenido audiovisual con guiones propios, grabación y edición de video, más piezas gráficas',
      period: 'Marzo 2026 – Actualidad',
      metrics: [
        { label: 'Visualizaciones', value: '1.7M', detail: '+61.7% en menos de 5 meses' },
        { label: 'Alcance orgánico', value: '+112.3%', detail: '53.7K cuentas' },
        { label: 'Visitas al perfil', value: '+39.8%', detail: '18.7K' },
        { label: 'Nuevos seguidores', value: '+1.2K', detail: '+45.5%' },
        { label: 'Interacciones', value: '18K', detail: '+41%' },
      ],
      media: [
        { type: 'video', src: 'videos/oikos-amueblado.mp4' },
        { type: 'video', src: 'videos/oikos-susana-quinta.mp4' },
        { type: 'video', src: 'videos/oikos-venta-menchaca.mp4' },
      ],
      results: [
        'Alcancé 1,7 millones de visualizaciones en menos de cinco meses, incrementando este indicador en un 61,7%.',
        'Incrementé el alcance orgánico en un 112,3%, alcanzando 53.700 cuentas, y aumenté las visitas al perfil en un 39,8% (18.700 visitas).',
        'Consolidé la comunidad con 1.200 nuevos seguidores (+45,5%) y 18.000 interacciones (+41%), fortaleciendo la presencia digital de la marca.',
      ],
    },
    {
      id: 8,
      title: 'Pedify',
      logo: 'img/logos/pedify.png',
      description: 'Construí desde cero la estrategia de crecimiento 100% orgánico de una startup, sin inversión en pauta.',
      fullDescription:
        'Construí desde cero la estrategia de crecimiento 100% orgánico de la startup, desarrollando contenido gráfico y audiovisual orientado al posicionamiento de la marca, sin inversión en pauta publicitaria.',
      category: 'Social Media',
      igHandle: '@pedify.app',
      igLink: 'https://www.instagram.com/pedify.app',
      role: 'Construcción de la estrategia de contenido orgánico desde cero para una startup',
      period: 'Enero 2026 – Actualidad',
      metrics: [
        { label: 'Visualizaciones', value: '19.6K', detail: '+13.200% desde cero' },
        { label: 'Alcance', value: '3.6K', detail: 'cuentas · +11.800%' },
        { label: 'Nuevos seguidores', value: '+195', detail: '+3.800%' },
        { label: 'Visitas al perfil', value: '1.4K', detail: '+3.600%' },
      ],
      media: [
        { type: 'video', src: 'videos/pedify-somos-agencia.mp4' },
        { type: 'video', src: 'videos/pedify-por-que.mp4' },
        { type: 'image', src: 'img/Pedify/2PRESENTACION1.jpg' },
        { type: 'image', src: 'img/Pedify/2PRESENTACION3.jpg' },
        { type: 'image', src: 'img/Pedify/CARRUSEL-WSP_01.jpg' },
        { type: 'image', src: 'img/Pedify/CARRUSEL-WSP_06.jpg' },
        { type: 'image', src: 'img/Pedify/DIA-DEL-PADRE_01.jpg' },
      ],
      results: [
        'Alcancé 19.600 visualizaciones (+13.200%) y 3.600 cuentas (+11.800%) durante los primeros siete meses de gestión.',
        'Generé 1.400 visitas al perfil (+3.600%) y 195 nuevos seguidores (+3.800%), consolidando una comunidad completamente orgánica.',
        'Incrementé las interacciones mediante contenido estratégico alineado con los objetivos comerciales de la startup.',
      ],
    },
    {
      id: 9,
      title: 'Sumak Indumentaria',
      logo: 'img/logos/sumak.png',
      description: 'Diseñé la estrategia de contenidos y optimicé la comunicación digital de la marca.',
      fullDescription:
        'Diseñé la estrategia de contenidos y optimicé la comunicación digital de la marca mediante una planificación orientada a fortalecer el alcance y la generación de oportunidades comerciales.',
      category: 'Social Media',
      igHandle: '@sumak_indumentaria',
      igLink: 'https://www.instagram.com/sumak_indumentaria/',
      role: 'Gestión integral de redes sociales orientada a captación',
      period: 'Abril 2026 – Junio 2026 (3 meses)',
      metrics: [
        { label: 'Contactos comerciales', value: '+76%', detail: '44 leads en 3 meses' },
        { label: 'Exposición', value: '7K', detail: 'usuarios únicos · 5348 no seguían la cuenta' },
        { label: 'Visualizaciones', value: '39.7K' },
        { label: 'Interacciones', value: '968', detail: '+41.7%' },
        { label: 'Nuevos seguidores', value: '+153', detail: '+37.8%' },
      ],
      media: [
        { type: 'video', src: 'videos/sumak-argentina.mp4' },
      ],
      results: [
        'Diseñé y ejecuté una campaña de fidelización basada en sorteos por etapas semanales, reemplazando una acción promocional única por una estrategia de participación recurrente que sostuvo el alcance orgánico durante un mes.',
        'Alcancé 7.000 usuarios únicos, de los cuales 5.348 no seguían previamente la marca, generando 39.700 visualizaciones.',
        'Incrementé los contactos comerciales en un 76% (44 leads) mediante la optimización de la comunicación y la implementación de llamados estratégicos a la acción.',
        'Aumenté las interacciones en un 41,7% y los nuevos seguidores en un 37,8%, fortaleciendo el engagement de la comunidad.',
      ],
    },
    {
      id: 10,
      title: 'ONG Manos Abiertas Rafaela',
      logo: 'img/logos/manosabiertas.png',
      description: 'Producción de contenido audiovisual institucional con foco en storytelling.',
      fullDescription:
        'Produzco contenido audiovisual institucional mediante la elaboración de guiones, grabación y edición de videos con foco en storytelling, fortaleciendo la comunicación de la organización y su vínculo con la comunidad.',
      category: 'Social Media',
      igHandle: '@manosabiertas.rafa',
      igLink: 'https://www.instagram.com/manosabiertas.rafa/',
      role: 'Producción de contenido audiovisual institucional (guion, grabación y edición) con foco en storytelling',
      period: 'Octubre 2025 – Actualidad',
      metrics: [],
      highlight: {
        url: 'https://www.instagram.com/p/DR-wQuSAPAS/',
        note: 'Este reel se viralizó fuerte gracias al storytelling: es el mejor ejemplo de cómo una narrativa bien construida puede generar alcance orgánico incluso sin objetivo comercial.',
      },
      media: [
        { type: 'video', src: 'videos/manosabiertas-munecos.mp4' },
        { type: 'video', src: 'videos/manosabiertas-roperos.mp4' },
        { type: 'video', src: 'videos/manosabiertas-aire.mp4' },
      ],
      results: [],
    },
    {
      id: 11,
      title: 'Big Pons',
      logo: 'img/logos/bigpons.png',
      description: 'Creación y edición de contenido audiovisual para la hamburguesería Big Pons.',
      fullDescription:
        'Producción y edición de reels y contenido audiovisual para Big Pons, enfocado en mostrar sus productos de forma atractiva para redes sociales.',
      category: 'Social Media',
      role: 'Edición de video para redes sociales',
      media: [
        { type: 'video', src: 'videos/bigpons-hamburguesa.mp4' },
        { type: 'video', src: 'videos/bigpons-mundo-sin-hamburguesas.mp4' },
      ],
      results: [],
    },
    {
      id: 6,
      title: 'La Copia Librería',
      logo: 'img/logos/lacopia.png',
      description: 'Gestioné durante 19 meses la estrategia digital de la marca, con planificación editorial, contenido y Meta Ads.',
      fullDescription:
        'Gestioné durante 19 meses la estrategia digital de la marca, desarrollando planificación editorial, contenido para redes sociales y campañas publicitarias en Meta Ads.',
      category: 'Social Media',
      igHandle: '@lacopiarafaela',
      igLink: 'https://www.instagram.com/lacopiarafaela/',
      role: 'Gestión integral de redes sociales (estrategia de contenido, piezas gráficas, planificación editorial y Meta Ads)',
      period: 'Diciembre 2024 – Julio 2026 (19 meses)',
      metrics: [
        { label: 'Alcance orgánico', value: '+4257%', detail: '85.1K cuentas' },
        { label: 'Visitas al perfil', value: '+1305%', detail: '31.6K' },
        { label: 'Visualizaciones', value: '+100%', detail: '765.8K' },
        { label: 'Nuevos seguidores', value: '+1748' },
        { label: 'Meta Ads · Alcance', value: '120.4K', detail: 'usuarios únicos · 294K impresiones' },
        { label: 'Meta Ads · CTR', value: '1.81%', detail: 'CPC $45,58 ARS · 5339 clics' },
      ],
      media: [
        { type: 'video', src: 'videos/lacopia-fotocopias.mp4' },
        { type: 'video', src: 'videos/lacopia-dia-del-padre.mp4' },
        { type: 'video', src: 'videos/lacopia-loquita-plaza.mp4' },
        { type: 'video', src: 'videos/lacopia-jefe-sigue.mp4' },
      ],
      results: [
        'Multipliqué el alcance orgánico en un 4.257,2%, alcanzando 85.100 cuentas, e incrementé las visitas al perfil en un 1.305,3%, llegando a 31.600 visitas.',
        'Generé 765.800 visualizaciones (+100%) y consolidé una comunidad de 1.748 nuevos seguidores mediante una estrategia sostenida de contenido e identidad visual.',
        'Administré campañas en Meta Ads con una inversión de ARS $243.327, alcanzando 120.408 usuarios, 294.329 impresiones y 5.339 clics, obteniendo un CTR de 1,81% y un CPC promedio de ARS $45,58.',
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
            backgroundImage: "url('img/fondo-azul-detalles-2.png')",
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
            ¡Podés hacer clic en cada proyecto para ver más detalles!
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
                Para ver mis trabajos de Social Media te invito a visitar mi perfil de Instagram haciendo <a href="https://www.instagram.com/hechoxgallo" target="_blank" className="text-blue-400 hover:underline">click acá</a>.
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

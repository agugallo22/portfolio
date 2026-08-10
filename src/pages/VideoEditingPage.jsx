import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Instagram, X } from 'lucide-react';
import VideoPlayer from '@/components/VideoPlayer';
import AutoplayVideoCard from '@/components/AutoplayVideoCard';

const featured = {
  title: 'HXGALLO — Storytelling de venta (Laser Alarmas)',
  context: 'Cuenta propia · edición destacada',
  description:
    'La mejor edición técnica que hice hasta ahora, donde practiqué skills nuevas. El reel cuenta cómo Laser Alarmas —uno de mis clientes de desarrollo web— logró una venta sin haber anunciado todavía su página web: sirve como muestra de edición y como caso real que conecta con mi perfil de desarrollador.',
  video: { src: '/videos/hxgallo-laser-alarmas.mp4', poster: '/img/videos/hxgallo-laser-alarmas-poster.jpg' },
  igLink: 'https://www.instagram.com/hechoxgallo',
};

const videos = [
  { src: '/videos/oikos-amueblado.mp4', label: 'Oikos Negocios Inmobiliarios' },
  { src: '/videos/oikos-susana-quinta.mp4', label: 'Oikos Negocios Inmobiliarios' },
  { src: '/videos/oikos-venta-menchaca.mp4', label: 'Oikos Negocios Inmobiliarios' },
  { src: '/videos/pedify-somos-agencia.mp4', label: 'Pedify' },
  { src: '/videos/pedify-por-que.mp4', label: 'Pedify' },
  { src: '/videos/lacopia-fotocopias.mp4', label: 'La Copia Librería' },
  { src: '/videos/lacopia-dia-del-padre.mp4', label: 'La Copia Librería' },
  { src: '/videos/lacopia-loquita-plaza.mp4', label: 'La Copia Librería' },
  { src: '/videos/lacopia-jefe-sigue.mp4', label: 'La Copia Librería' },
  { src: '/videos/manosabiertas-munecos.mp4', label: 'ONG Manos Abiertas Rafaela' },
  { src: '/videos/manosabiertas-roperos.mp4', label: 'ONG Manos Abiertas Rafaela' },
  { src: '/videos/manosabiertas-aire.mp4', label: 'ONG Manos Abiertas Rafaela' },
  { src: '/videos/sumak-argentina.mp4', label: 'SUMAK Indumentaria' },
  { src: '/videos/bigpons-hamburguesa.mp4', label: 'Big Pons' },
  { src: '/videos/bigpons-mundo-sin-hamburguesas.mp4', label: 'Big Pons' },
];

const VideoEditingPage = () => {
  const [expanded, setExpanded] = useState(null);
  const cardRefs = useRef({});
  const modalRef = useRef(null);

  const handleExpand = (v) => {
    const cardApi = cardRefs.current[v.src];
    const snapshot = cardApi?.getSnapshot();
    cardApi?.pause();
    setExpanded({ ...v, initialTime: snapshot?.currentTime || 0, initialMuted: snapshot?.muted ?? true });
  };

  const handleClose = () => {
    const src = expanded?.src;
    const snapshot = modalRef.current?.getSnapshot();
    const cardApi = src && cardRefs.current[src];
    if (cardApi && snapshot) {
      cardApi.seekAndPlay(snapshot.currentTime, true);
    }
    setExpanded(null);
  };

  return (
    <div className="bg-[#050a30] min-h-screen text-white">
      <Helmet>
        <title>Edición de Video - H.X GALLO</title>
        <meta
          name="description"
          content="Muestras de edición de video: reels y contenido audiovisual editado por H.X Gallo."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden text-center">
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Edición de Video
            </h1>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <p className="text-xl text-blue-200/80 max-w-2xl mx-auto font-light italic">
            Ediciones elaboradas para diferentes rubros, publicadas en Instagram y TikTok.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-blue-500/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl p-6 md:p-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 text-sm font-semibold rounded-full border border-blue-600/30 mb-6">
              <Sparkles size={16} /> Destacado
            </span>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{featured.title}</h2>
                <p className="text-blue-300/70 text-sm font-medium mb-4">{featured.context}</p>
                <p className="text-blue-100/70 leading-relaxed">{featured.description}</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <VideoPlayer src={featured.video.src} poster={featured.video.poster} />
                {featured.igLink && (
                  <a
                    href={featured.igLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:underline text-sm font-semibold"
                  >
                    <Instagram size={16} /> Te invito a seguirme en mi Instagram
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grilla de videos */}
      <section className="py-10 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-6">
            {videos.map((v, index) => (
              <motion.div
                key={v.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <AutoplayVideoCard
                  ref={(el) => (cardRefs.current[v.src] = el)}
                  src={v.src}
                  label={v.label}
                  onExpand={() => handleExpand(v)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de video ampliado */}
      <AnimatePresence>
        {expanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#050a30]/90 backdrop-blur-md z-50"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            >
              <div className="relative w-full max-w-md pointer-events-auto">
                <button
                  onClick={handleClose}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center transition-colors z-10 text-white border border-white/20"
                >
                  <X size={20} />
                </button>
                <AutoplayVideoCard
                  ref={modalRef}
                  src={expanded.src}
                  label={expanded.label}
                  initialTime={expanded.initialTime}
                  initialMuted={expanded.initialMuted}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoEditingPage;

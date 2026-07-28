import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import MediaLinkCard from '@/components/MediaLinkCard';
import VideoPlayer from '@/components/VideoPlayer';

// Modelo de datos preparado para soportar reels/videos y posteos de imagen desde el arranque
// (item.type: 'reel' | 'post'; item.platform: 'instagram' | 'tiktok').
const videoSamples = [
  {
    id: 1,
    title: 'HXGALLO — Storytelling de venta (Laser Alarmas)',
    context: 'Cuenta propia · edición destacada',
    description:
      'La mejor edición técnica que hice hasta ahora, donde practiqué skills nuevas. El reel cuenta cómo Laser Alarmas —uno de mis clientes de desarrollo web— logró una venta sin haber anunciado todavía su página web: sirve como muestra de edición y como caso real que conecta con mi perfil de desarrollador.',
    featured: true,
    video: { src: '/videos/hxgallo-laser-alarmas.mp4', poster: '/img/videos/hxgallo-laser-alarmas-poster.jpg' },
    igLink: 'https://www.instagram.com/p/Da6LUIupxZH/',
  },
  {
    id: 2,
    title: 'Big Pons — TikTok Manager (vía agencia)',
    context: 'Proyecto freelance corto vía agencia · Mayo–Junio 2026 (~1.5 meses)',
    description:
      'Trabajé como TikTok Manager para esta cuenta: la agencia bajaba las ideas y yo me encargaba de la grabación, edición, subida y gestión del contenido.',
    featured: false,
    media: { type: 'reel', platform: 'tiktok', url: 'https://www.tiktok.com/@big.pons/video/7644390055099780372' },
  },
  {
    id: 3,
    title: 'Big Pons — TikTok Manager (vía agencia)',
    context: 'Proyecto freelance corto vía agencia · Mayo–Junio 2026 (~1.5 meses)',
    description:
      'Segunda pieza del mismo proyecto: ejecución de ideas de la agencia con grabación, edición y publicación propia.',
    featured: false,
    media: { type: 'reel', platform: 'tiktok', url: 'https://www.tiktok.com/@big.pons/video/7642167587354299668' },
  },
];

const featured = videoSamples.find((v) => v.featured);
const rest = videoSamples.filter((v) => !v.featured);

const VideoEditingPage = () => {
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
            Muestras reales de mi edición, publicadas en Instagram y TikTok.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
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
                      className="text-blue-400 hover:underline text-sm font-semibold"
                    >
                      Ver publicación en Instagram →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Grid del resto */}
      <section className="py-10 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {rest.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col gap-4"
              >
                <MediaLinkCard item={item.media} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-blue-300/70 text-xs font-medium mb-2">{item.context}</p>
                  <p className="text-blue-100/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditingPage;

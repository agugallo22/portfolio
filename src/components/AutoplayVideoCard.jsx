import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

const AutoplayVideoCard = ({ src, label, onExpand, className = '' }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Carga el video recién cuando la card entra (o está por entrar) en pantalla,
  // para no saturar al navegador si hay muchos videos autoplay juntos en una página.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;
    // React no siempre aplica bien el atributo `muted` en <video>, así que se setea
    // por código para que el autoplay no sea bloqueado por el navegador.
    video.muted = true;
    video.play().catch(() => {});
  }, [src, shouldLoad]);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[9/16] w-full max-w-xs mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${className}`}
    >
      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      )}
      {label && (
        <span className="absolute top-3 left-3 inline-block max-w-[calc(100%-1.5rem)] px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-semibold truncate">
          {label}
        </span>
      )}
      <div className="absolute bottom-3 right-3 flex gap-2">
        {onExpand && (
          <button
            onClick={onExpand}
            aria-label="Agrandar video"
            className="w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-colors"
          >
            <Maximize2 size={16} />
          </button>
        )}
        <button
          onClick={toggleSound}
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
          className="w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-colors"
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
};

export default AutoplayVideoCard;

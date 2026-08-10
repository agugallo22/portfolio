import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

const AutoplayVideoCard = ({ src, label, onExpand, className = '' }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      className={`relative aspect-[9/16] w-full max-w-xs mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${className}`}
    >
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
      {label && (
        <span className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
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

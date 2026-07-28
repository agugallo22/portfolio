import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

const VideoPlayer = ({ src, poster, className = '' }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  return (
    <div className={`relative aspect-[9/16] w-full max-w-sm mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={isPlaying}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          aria-label="Reproducir video"
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
        >
          <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl transition-transform hover:scale-110">
            <Play size={28} className="text-[#050a30] ml-1" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;

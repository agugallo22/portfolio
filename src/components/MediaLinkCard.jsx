import React from 'react';
import { Instagram, Music2, ExternalLink } from 'lucide-react';

const PLATFORM_LABEL = {
  instagram: 'Ver en Instagram',
  tiktok: 'Ver en TikTok',
};

const TYPE_LABEL = {
  reel: 'Reel',
  post: 'Posteo',
};

/**
 * Tarjeta liviana que reemplaza al embed en vivo: portada estilizada + link externo.
 * item: { type: 'reel' | 'post', platform: 'instagram' | 'tiktok', url, caption? }
 */
const MediaLinkCard = ({ item, className = '' }) => {
  const Icon = item.platform === 'tiktok' ? Music2 : Instagram;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col items-center justify-center gap-3 aspect-[9/16] w-full max-w-[280px] mx-auto bg-gradient-to-br from-blue-600/20 via-[#0a1142] to-[#050a30] border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-blue-500/40 ${className}`}
    >
      <Icon size={44} className="text-blue-300/80 transition-transform group-hover:scale-110" />
      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-blue-200/70 text-xs font-semibold uppercase tracking-wider">
        {TYPE_LABEL[item.type] || 'Reel'}
      </span>
      <span className="flex items-center gap-1.5 text-blue-400 text-sm font-bold group-hover:underline">
        {PLATFORM_LABEL[item.platform] || 'Ver contenido'} <ExternalLink size={14} />
      </span>
    </a>
  );
};

export default MediaLinkCard;

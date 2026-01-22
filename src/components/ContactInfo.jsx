import React from 'react';

const ContactInfo = ({ icon: Icon, title, value, link }) => {
  const content = (
    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-[#050a30] transition-all shadow-sm">
      {/* Configuración de colores:
          - bg-white: fondo inicial
          - text-[#050a30]: icono azul oscuro inicial
          - group-hover:bg-[#050a30]: fondo cambia a azul oscuro al pasar el mouse por la card
          - group-hover:text-white: icono cambia a blanco al pasar el mouse por la card
      */}
      <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 text-[#050a30] transition-all duration-300 group-hover:bg-[#050a30] group-hover:text-white shadow-sm">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-500 font-light">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default ContactInfo;
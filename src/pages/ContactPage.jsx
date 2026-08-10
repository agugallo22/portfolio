import React from 'react'; // Eliminamos useState ya que no hay formulario
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Instagram, Linkedin, FileDown } from 'lucide-react';
import ContactInfo from '@/components/ContactInfo';

const ContactPage = () => {
  return (
    <div className="bg-[#050a30] min-h-screen text-white overflow-x-hidden">
      <Helmet><title>Contacto - H.X GALLO</title></Helmet>

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 text-center">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{ backgroundImage: "url('img/Fondo azul con detalles.png')", backgroundSize: 'cover' }}
        />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="border-2 border-white/20 rounded-[2.5rem] py-12 px-6 backdrop-blur-sm bg-white/5"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              ¿Empezamos juntos <br />
              <span className="text-blue-400">un nuevo desafío?</span>
            </h1>
            <div className="h-1 w-20 bg-white/30 mx-auto rounded-full mb-8" />
            <h2 className="text-2xl md:text-3xl font-light text-blue-100/80">
              ¡Contactame directamente!
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Sector de Información */}
      <div 
        className="relative z-20 -mt-2 py-5 pb-32 overflow-hidden rounded-t-[3.5rem]"
        style={{ 
          backgroundImage: "url('img/Fondo Blanco.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl"> {/* Reducimos max-w para que quede mejor centrado sin el form */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[3rem] p-8 md:p-12">
            
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-10 text-[#050a30] text-center">Canales de Comunicación</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-14">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  value="hechoxgallo@gmail.com"
                  link="mailto:hechoxgallo@gmail.com"
                />
                <ContactInfo
                  icon={Send}
                  title="WhatsApp"
                  value="¡Escribime ahora!"
                  link="https://wa.me/543492321978"
                />
                <div className="md:col-span-2 flex justify-center">
                   <ContactInfo
                    icon={MapPin}
                    title="Ubicación"
                    value="CABA, Argentina"
                  />
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="w-full pt-8 border-t border-[#050a30]/20">
                <h4 className="text-xl font-bold mb-6 text-center text-[#050a30]">¡Seguime en mis redes!</h4>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://linkedin.com/in/agugallo"
                    target="_blank"
                    rel="noreferrer"
                    className="w-16 h-16 bg-white border border-slate-100 text-[#050a30] rounded-2xl flex items-center justify-center hover:bg-[#050a30] hover:text-white transition-all shadow-md"
                  >
                    <Linkedin size={28} />
                  </a>
                  <a
                    href="https://instagram.com/hechoxgallo"
                    target="_blank"
                    rel="noreferrer"
                    className="w-16 h-16 bg-white border border-slate-100 text-[#050a30] rounded-2xl flex items-center justify-center hover:bg-[#050a30] hover:text-white transition-all shadow-md"
                  >
                    <Instagram size={28} />
                  </a>
                </div>
              </div>

              <a
                href="/docs/CV-Agustin-Gallo.pdf"
                download
                className="mt-10 inline-flex items-center gap-2 bg-[#050a30] hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold transition-all duration-500 shadow-xl"
              >
                <FileDown size={20} /> Descargar CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
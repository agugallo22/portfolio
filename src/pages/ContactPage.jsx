import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import ContactInfo from '@/components/ContactInfo';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: '¡Mensaje enviado!',
        description: 'Gracias. Te contactaré pronto.',
        className: 'border-2 border-blue-400/30 rounded-[2rem] backdrop-blur-sm bg-blue-600/20 text-#050a30',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-[#050a30] min-h-screen text-white overflow-x-hidden">
      <Helmet><title>Contacto - H.X GALLO</title></Helmet>

      {/* Hero Section con la Frase de Cierre como Apertura */}
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
              ¡Contactame!
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Sector con Fondo de Imagen y Ventana Liquid Glass */}
      <div 
        className="relative z-20 -mt-2 py-24 pb-32 overflow-hidden rounded-t-[3.5rem]"
        style={{ 
          backgroundImage: "url('img/Fondo Blanco.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Ventana Liquid Glass */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[3rem] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
              
              {/* Formulario */}
              <div
                className="flex flex-col"
              >
                <h3 className="text-3xl font-bold mb-8 text-[#050a30]">Enviame un mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    className="w-full p-4 rounded-xl border border-white/50 bg-white/50 focus:border-[#050a30] outline-none transition-all shadow-sm text-[#050a30] placeholder-[#050a30]/60"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-4 rounded-xl border border-white/50 bg-white/50 focus:border-[#050a30] outline-none transition-all shadow-sm text-[#050a30] placeholder-[#050a30]/60"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Contame sobre tu proyecto..."
                    className="w-full p-4 rounded-xl border border-white/50 bg-white/50 focus:border-[#050a30] outline-none transition-all resize-none shadow-sm flex-grow text-[#050a30] placeholder-[#050a30]/60"
                    required
                  />

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#050a30] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0a1142] transition-all shadow-lg mt-auto"
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </motion.button>
                </form>
              </div>

              {/* Información */}
              <div
                className="flex flex-col"
              >
                <h3 className="text-3xl font-bold mb-8 text-[#050a30]">Información</h3>
                <div className="grid grid-cols-1 gap-4 flex-grow">
                  <ContactInfo
                    icon={Mail}
                    title="Email"
                    value="contacto@hxgallo.com"
                    link="mailto:contacto@hxgallo.com"
                  />
                  <ContactInfo
                    icon={Send}
                    title="WhatsApp"
                    value="¡Escribime directamente!"
                    link="https://wa.me/543492321978"
                  />
                  <ContactInfo
                    icon={MapPin}
                    title="Ubicación"
                    value="Rafaela, Santa Fe, Argentina"
                  />
                </div>

                {/* Redes Sociales */}
                <div className="mt-14 pt-8 border-t border-[#050a30]/20">
                  <h4 className="text-xl font-bold mb-6 text-center text-[#050a30]">¡Seguime en mis redes!</h4>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://linkedin.com/in/agugallo"
                      target="_blank"
                      rel="noreferrer"
                      className="w-14 h-14 bg-white border border-slate-100 text-[#050a30] rounded-2xl flex items-center justify-center hover:bg-[#050a30] hover:text-white transition-all shadow-sm"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://instagram.com/hechoxgallo"
                      target="_blank"
                      rel="noreferrer"
                      className="w-14 h-14 bg-white border border-slate-100 text-[#050a30] rounded-2xl flex items-center justify-center hover:bg-[#050a30] hover:text-white transition-all shadow-sm"
                    >
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
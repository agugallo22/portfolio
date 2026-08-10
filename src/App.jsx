import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProjectsPage from '@/pages/ProjectsPage';
import VideoEditingPage from '@/pages/VideoEditingPage';
import ContactPage from '@/pages/ContactPage';
import ScrollToTop from '@/components/ScrollToTop'; // Asegúrate de que la ruta sea correcta

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="/sobre-mi"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AboutPage />
                </motion.div>
              }
            />
            <Route
              path="/proyectos"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectsPage />
                </motion.div>
              }
            />
            <Route
              path="/edicion-video"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <VideoEditingPage />
                </motion.div>
              }
            />
            <Route
              path="/contacto"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContactPage />
                </motion.div>
              }
            />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      {/* SOLUCIÓN AL SCROLL: Se coloca aquí para que afecte a todas las rutas */}
      <ScrollToTop />

      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
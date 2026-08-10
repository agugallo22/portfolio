import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Se repite en el próximo frame para ganarle a reflows de la animación de ruta.
    const scrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollTop();
    const raf = requestAnimationFrame(scrollTop);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}

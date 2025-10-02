import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button after scrolling down 400px
      setIsVisible(currentScrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/40 backdrop-blur-lg border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300 group flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          {/* Gradient overlay on hover */}
          <span className="absolute inset-0 bg-gradient-to-br from-[#6B9BD1]/20 to-[#E49393]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          
          {/* Icon */}
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c3e50]/80 group-hover:text-[#2c3e50] transition-colors duration-300 relative z-10" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

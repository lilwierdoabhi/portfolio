import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show navbar only when in Hero section
      setIsVisible(currentScrollY < heroHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-6 right-4 sm:top-8 sm:right-8 z-50 flex items-center gap-2 sm:gap-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-3 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/40 backdrop-blur-lg border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-200 group relative overflow-hidden"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient overlay on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#6B9BD1]/10 to-[#E49393]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full" />
              
              {/* Text */}
              <span className="relative z-10 text-xs sm:text-sm text-[#2c3e50]/90 group-hover:text-[#2c3e50] transition-colors duration-200">
                {item.label}
              </span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

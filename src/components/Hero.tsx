import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import {
  PencilIllustration,
  ColorPaletteIllustration,
  PackageBoxIllustration,
  TypographyIllustration,
  LogoGridIllustration,
  BrandingTagIllustration,
  VectorPathIllustration,
  CreativeSparkIllustration
} from "./DesignIllustrations";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-white to-[#f8f6f3]">
      {/* Decorative background elements with design illustrations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left - Pencil */}
        <motion.div 
          className="absolute top-8 left-4 md:top-16 md:left-8 w-16 h-16 md:w-28 md:h-28 opacity-70"
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <PencilIllustration className="w-full h-full" />
        </motion.div>

        {/* Top center - Color Palette */}
        <motion.div 
          className="absolute top-6 left-1/4 md:top-12 w-20 h-20 md:w-32 md:h-32 opacity-60 hidden sm:block"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ColorPaletteIllustration className="w-full h-full" />
        </motion.div>

        {/* Top right - Package */}
        <motion.div 
          className="absolute top-10 right-4 md:top-20 md:right-12 w-16 h-16 md:w-28 md:h-28 opacity-70"
          animate={{
            y: [0, -12, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <PackageBoxIllustration className="w-full h-full" />
        </motion.div>

        {/* Right center - Typography */}
        <motion.div 
          className="absolute top-1/3 right-4 md:right-8 w-20 h-20 md:w-32 md:h-32 opacity-65 hidden md:block"
          animate={{
            y: [0, -8, 0]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <TypographyIllustration className="w-full h-full" />
        </motion.div>

        {/* Left center - Logo Grid */}
        <motion.div 
          className="absolute top-1/2 left-4 md:left-12 w-20 h-20 md:w-28 md:h-28 opacity-60 hidden md:block"
          animate={{
            scale: [1, 1.03, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <LogoGridIllustration className="w-full h-full" />
        </motion.div>

        {/* Bottom left - Branding Tag */}
        <motion.div 
          className="absolute bottom-24 left-4 md:bottom-32 md:left-16 w-16 h-16 md:w-28 md:h-28 opacity-65"
          animate={{
            y: [0, -8, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BrandingTagIllustration className="w-full h-full" />
        </motion.div>

        {/* Bottom right - Vector Path */}
        <motion.div 
          className="absolute bottom-28 right-4 md:bottom-40 md:right-20 w-16 h-16 md:w-28 md:h-28 opacity-70"
          animate={{
            x: [0, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <VectorPathIllustration className="w-full h-full" />
        </motion.div>

        {/* Floating Creative Spark - top right area */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 opacity-50 hidden lg:block"
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <CreativeSparkIllustration className="w-full h-full" />
        </motion.div>

        {/* Additional small elements */}
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-14 h-14 md:w-20 md:h-20 opacity-50 hidden lg:block"
          animate={{
            y: [0, -12, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="25" stroke="#6B9BD1" strokeWidth="1" opacity="0.6" />
            <circle cx="40" cy="40" r="15" stroke="#E49393" strokeWidth="1" opacity="0.6" />
            <circle cx="40" cy="40" r="5" fill="#9B8EC9" opacity="0.6" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 pb-20 sm:pb-24 md:pb-32">
        <motion.div 
          className="space-y-8 sm:space-y-10 md:space-y-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow tag */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#6B9BD1]/20 shadow-sm">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6B9BD1]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#E49393]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#9B8EC9]" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#5a7a9e]" style={{ fontFamily: 'var(--font-sans)' }}>
                Graphic Design Portfolio
              </p>
            </div>
          </motion.div>

          {/* Main heading with animation */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#2c3e50] px-4"
              style={{ fontFamily: 'var(--font-calligraphy)', fontWeight: 400 }}
            >
              portfolio
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-4 px-4">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#6B9BD1]/30" />
              <p 
                className="text-xl sm:text-2xl md:text-3xl text-[#5a7a9e] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-calligraphy)', fontWeight: 400 }}
              >
                Graphic Designer
              </p>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#E49393]/30" />
            </div>
          </motion.div>

          {/* Tagline with better styling */}
          <motion.div 
            className="max-w-3xl mx-auto px-4 pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative py-4">
              {/* Quote marks decoration */}
              <div className="absolute -top-2 -left-2 text-5xl text-[#6B9BD1]/20 leading-none" style={{ fontFamily: 'var(--font-serif)' }}>
                "
              </div>
              <div className="absolute -bottom-2 -right-2 text-5xl text-[#E49393]/20 leading-none" style={{ fontFamily: 'var(--font-serif)' }}>
                "
              </div>
              
              <p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4a5568] leading-relaxed px-4 sm:px-8 max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Crafting timeless logos, impactful branding, and designs that speak louder than words.
              </p>
            </div>
          </motion.div>

          {/* Decorative separator */}
          <motion.div 
            className="flex items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#6B9BD1]/40 to-[#E49393]/40" />
            <div className="h-px w-32 bg-gradient-to-l from-transparent via-[#E49393]/40 to-[#6B9BD1]/40" />
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p 
            className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#5a7a9e] group-hover:text-[#6B9BD1] transition-colors" 
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Scroll to explore
          </p>
          
          <div className="relative animate-bounce">
            {/* Icon */}
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-[#6B9BD1]/30 group-hover:border-[#6B9BD1] transition-colors">
              <ChevronDown 
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#6B9BD1]" 
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Vertical line */}
          <div className="relative w-px h-12 sm:h-16 bg-gradient-to-b from-[#6B9BD1]/40 to-transparent" />
        </motion.button>
      </div>
    </section>
  );
}

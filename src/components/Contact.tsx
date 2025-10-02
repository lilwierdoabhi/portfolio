import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { 
  CreativeSpark, 
  GeometricGrid, 
  PenToolCursor,
  LayersStack 
} from "./DecorativeElements";

export default function Contact() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#fdfcfa] to-[#f8f6f3] relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-10 left-5 md:left-10 w-24 h-24 md:w-32 md:h-32 opacity-12 pointer-events-none">
        <CreativeSpark delay={0.3} />
      </div>

      <div className="absolute top-1/3 right-5 md:right-10 w-28 h-28 md:w-36 md:h-36 opacity-10 pointer-events-none">
        <GeometricGrid delay={0.5} />
      </div>

      <div className="absolute bottom-20 left-1/4 w-32 h-32 opacity-10 pointer-events-none hidden lg:block">
        <PenToolCursor delay={0.7} />
      </div>

      <div className="absolute bottom-32 right-1/4 w-28 h-28 opacity-10 pointer-events-none hidden xl:block">
        <LayersStack delay={0.9} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6B9BD1] mb-4" 
            style={{ fontFamily: 'var(--font-sans)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In Touch
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl text-[#2c3e50] mb-6" 
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Collaborate
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-[#6b7280] max-w-2xl mx-auto px-4" 
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            "Let's collaborate to bring your brand vision to life."
          </motion.p>
          <motion.div 
            className="flex items-center justify-center gap-2 mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#6B9BD1]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#E49393]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#E49393]/40" />
          </motion.div>
        </motion.div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          <motion.a 
            href="mailto:workwithrudra777@gmail.com"
            className="group flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-white rounded-lg border border-[#e5e7eb] hover:border-[#6B9BD1]/30 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="w-14 h-14 rounded-full bg-[#6B9BD1]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#6B9BD1]/15 transition-all duration-300">
              <Mail className="w-6 h-6 text-[#6B9BD1]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#6B9BD1] mb-1 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
                Email
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[#2c3e50] break-words" style={{ fontFamily: 'var(--font-sans)' }}>
                workwithrudra777@gmail.com
              </p>
            </div>
          </motion.a>

          <motion.a 
            href="tel:+917906095839"
            className="group flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-white rounded-lg border border-[#e5e7eb] hover:border-[#E49393]/30 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="w-14 h-14 rounded-full bg-[#E49393]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E49393]/15 transition-all duration-300">
              <Phone className="w-6 h-6 text-[#E49393]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#E49393] mb-1 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
                Phone
              </p>
              <p className="text-base sm:text-lg text-[#2c3e50]" style={{ fontFamily: 'var(--font-sans)' }}>
                +91-7906095839
              </p>
            </div>
          </motion.a>
        </div>

        {/* Social links */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-[#6B9BD1] mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
            Connect With Me
          </p>
          <div className="flex justify-center gap-3 sm:gap-4">
            <motion.a 
              href="https://www.behance.net/rudrapratap112"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-[#e5e7eb] hover:border-[#6B9BD1]/30 flex items-center justify-center hover:shadow-lg transition-all duration-300"
              aria-label="Behance"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#6b7280] group-hover:text-[#6B9BD1] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/lilwierdorudra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-[#e5e7eb] hover:border-[#6B9BD1]/30 flex items-center justify-center hover:shadow-lg transition-all duration-300"
              aria-label="LinkedIn"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#6b7280] group-hover:text-[#6B9BD1] transition-colors" strokeWidth={1.5} />
            </motion.a>

            <motion.a 
              href="https://x.com/iabhinavvsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-[#e5e7eb] hover:border-[#E49393]/30 flex items-center justify-center hover:shadow-lg transition-all duration-300"
              aria-label="Twitter"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1 }}
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-[#6b7280] group-hover:text-[#E49393] transition-colors" strokeWidth={1.5} />
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative element */}
        <div className="mt-20 flex justify-center opacity-40">
          <svg viewBox="0 0 200 60" fill="none" className="w-64 h-auto">
            <path d="M20 30 Q60 15 100 30 T180 30" stroke="#6B9BD1" strokeWidth="1" fill="none"/>
            <path d="M20 35 Q60 50 100 35 T180 35" stroke="#E49393" strokeWidth="1" fill="none"/>
            <circle cx="20" cy="30" r="2.5" fill="#6B9BD1"/>
            <circle cx="100" cy="30" r="2.5" fill="#9B8EC9"/>
            <circle cx="180" cy="30" r="2.5" fill="#E49393"/>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-[#e5e7eb]">
        <div className="text-center">
          <p className="text-sm text-[#6b7280]" style={{ fontFamily: 'var(--font-sans)' }}>
            © 2025 Rudra Pratap Singh. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

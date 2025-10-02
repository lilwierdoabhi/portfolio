import { motion } from "motion/react";
import profileImage from "figma:asset/85cd83289f85b42ab64a96a7ef3551f51e285254.png";

export default function About() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Static background illustrations */}
      <div className="absolute top-10 right-10 w-24 h-24 opacity-15">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="30" r="8" stroke="#6B9BD1" strokeWidth="1.5" />
          <circle cx="70" cy="50" r="8" stroke="#E49393" strokeWidth="1.5" />
          <circle cx="50" cy="70" r="8" stroke="#9B8EC9" strokeWidth="1.5" />
          <circle cx="30" cy="50" r="8" stroke="#6B9BD1" strokeWidth="1.5" />
          <line x1="50" y1="30" x2="70" y2="50" stroke="#2c3e50" strokeWidth="1" opacity="0.3" />
          <line x1="70" y1="50" x2="50" y2="70" stroke="#2c3e50" strokeWidth="1" opacity="0.3" />
          <line x1="50" y1="70" x2="30" y2="50" stroke="#2c3e50" strokeWidth="1" opacity="0.3" />
          <line x1="30" y1="50" x2="50" y2="30" stroke="#2c3e50" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="absolute bottom-16 left-8 w-20 h-20 opacity-10">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M20 40 L40 20 L60 40 L40 60 Z" stroke="#E49393" strokeWidth="1.5" fill="none" />
          <circle cx="40" cy="40" r="8" fill="#9B8EC9" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Profile Image */}
          <motion.div 
            className="relative flex items-center justify-center order-2 lg:order-1 py-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              {/* Decorative rings behind the image with purple accent */}
              <motion.div 
                className="absolute inset-0 -m-6 sm:-m-8 md:-m-10"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-[#9B8EC9]/30" />
                <div className="absolute inset-0 rounded-full border-2 border-[#6B9BD1]/20 scale-110" />
                <div className="absolute inset-0 rounded-full border-2 border-[#E49393]/15 scale-125" />
              </motion.div>

              {/* Main profile image */}
              <motion.div 
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  boxShadow: '0 20px 60px rgba(155, 142, 201, 0.25), 0 10px 30px rgba(107, 155, 209, 0.15)'
                }}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img 
                  src={profileImage} 
                  alt="Rudra Pratap Singh - Graphic Designer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Floating accent elements with creative icons */}
              <motion.div 
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#9B8EC9]/90 to-[#6B9BD1]/80 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#E49393]/90 to-[#F39C12]/80 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </motion.div>

              {/* Additional sparkle accent */}
              <motion.div 
                className="absolute top-1/4 -left-6 sm:-left-8 w-8 h-8 sm:w-10 sm:h-10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" 
                    fill="#9B8EC9" opacity="0.4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div 
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.p 
                className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6B9BD1] mb-4" 
                style={{ fontFamily: 'var(--font-sans)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                About Me
              </motion.p>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl text-[#2c3e50] mb-4" 
                style={{ fontFamily: 'var(--font-serif)' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Crafting Visual Stories That Inspire
              </motion.h2>
            </div>
            
            <motion.div 
              className="h-px bg-gradient-to-r from-[#6B9BD1]/40 via-[#E49393]/40 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <motion.div 
              className="space-y-5 text-[#4a5568]" 
              style={{ fontFamily: 'var(--font-sans)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Hi, I'm <span className="text-[#2c3e50]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.4em', background: 'linear-gradient(135deg, #4A90E2 0%, #E74C3C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Rudra Pratap Singh</span>, a passionate <span style={{ fontWeight: 600, color: '#2c3e50' }}>Graphic Designer</span> dedicated to transforming ideas into <span style={{ fontWeight: 600, color: '#8E44AD' }}>compelling visual experiences</span>.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                I specialize in crafting <span style={{ fontWeight: 600, color: '#4A90E2' }}>distinctive brand identities</span>, <span style={{ fontWeight: 600, color: '#E67E22' }}>eye-catching packaging</span>, <span style={{ fontWeight: 600, color: '#9B8EC9' }}>engaging social media content</span>, and <span style={{ fontWeight: 600, color: '#16A085' }}>unique illustrations</span> that help businesses stand out and connect with their audience.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                With expertise in <span style={{ fontWeight: 600, color: '#F39C12' }}>industry-leading design tools</span> and a commitment to excellence, I bring together <span style={{ fontWeight: 600, color: '#16A085' }}>clean aesthetics</span> and <span style={{ fontWeight: 600, color: '#E74C3C' }}>strategic storytelling</span> to create designs that are not just beautiful, but <span style={{ fontWeight: 600, color: '#4A90E2' }}>purposeful and impactful</span>.
              </p>
            </motion.div>

            {/* Skills highlight */}
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-[#6b7280] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                Design Tools & Software
              </p>
              <div className="flex flex-wrap gap-3">
                {['Illustrator', 'Photoshop', 'Figma', 'Framer', 'After Effects', 'Canva'].map((skill, index) => (
                  <motion.span 
                    key={skill}
                    className="px-4 py-2.5 bg-gradient-to-br from-white to-[#f8f6f3] border border-[#6B9BD1]/20 rounded-full text-sm text-[#2c3e50] shadow-sm"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.08 }}
                    whileHover={{ scale: 1.05, y: -2, borderColor: '#6B9BD1', boxShadow: '0 4px 12px rgba(107, 155, 209, 0.15)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

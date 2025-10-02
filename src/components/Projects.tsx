import { motion } from "motion/react";
import { useState } from "react";
import { projects, categories, getProjectsByCategory } from "../data/projectsData";
import { 
  TypographyAa, 
  GradientMesh, 
  CreativeSpark,
  ColorWheel,
  BezierCurve
} from "./DecorativeElements";

interface ProjectsProps {
  onProjectClick: (id: number) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Animated background graphic elements */}
      <div className="absolute top-10 right-8 sm:top-16 sm:right-16 w-28 sm:w-40 h-28 sm:h-40 opacity-12 pointer-events-none">
        <TypographyAa delay={0.3} />
      </div>

      <div className="absolute top-1/3 left-5 md:left-10 w-32 h-32 md:w-44 md:h-44 opacity-10 pointer-events-none hidden md:block">
        <GradientMesh delay={0.5} />
      </div>

      <div className="absolute bottom-20 right-10 w-24 h-24 md:w-32 md:h-32 opacity-15 pointer-events-none">
        <CreativeSpark delay={0.7} />
      </div>

      <div className="absolute top-1/2 right-1/4 w-28 h-28 opacity-10 pointer-events-none hidden lg:block">
        <ColorWheel delay={0.9} />
      </div>

      <div className="absolute bottom-1/3 left-1/4 w-36 h-36 opacity-8 pointer-events-none hidden xl:block">
        <BezierCurve delay={1.1} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Portfolio
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl text-[#2c3e50] mb-3" 
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Featured Work
            </h2>
            <p 
              className="text-sm text-[#6b7280]" 
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
              {activeCategory !== "all" && ` in ${categories.find(c => c.slug === activeCategory)?.name}`}
            </p>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center gap-2 mt-6 mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#6B9BD1]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#E49393]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#E49393]/40" />
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 ${
                  activeCategory === category.slug
                    ? 'bg-[#6B9BD1] text-white shadow-lg'
                    : 'bg-white text-[#6b7280] border border-[#e5e7eb] hover:border-[#6B9BD1]/30 hover:text-[#6B9BD1]'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="group text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-[#f8f6f3] via-white to-[#fdfcfa] rounded-2xl overflow-hidden border-2 border-[#e5e7eb] hover:border-[#6B9BD1]/50 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-2"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                }}
              >
                {/* Project image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Color overlay matching project */}
                <div 
                  className="absolute inset-0 mix-blend-multiply opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: project.color }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-md bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p 
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: project.color }}
                  >
                    {project.category}
                  </p>
                </div>
                
                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  <p className="text-white text-sm md:text-base leading-relaxed line-clamp-3 mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-sans)' }}>View Case Study</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transform group-hover:translate-x-1 transition-transform">
                      <path d="M7 15L12 10L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `radial-gradient(circle at top left, ${project.color}40, transparent)` 
                  }}
                />
              </div>

              {/* Project info */}
              <div className="mt-5 md:mt-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div 
                    className="px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all duration-300"
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                      fontWeight: 600
                    }}
                  >
                    {project.year}
                  </div>
                  <div className="flex gap-1">
                    {project.tags?.slice(0, 2).map((tag, i) => (
                      <div 
                        key={i}
                        className="w-2 h-2 rounded-full transition-transform group-hover:scale-110"
                        style={{ backgroundColor: project.color, opacity: 0.6 - (i * 0.2) }}
                      />
                    ))}
                  </div>
                </div>
                <h3 
                  className="text-2xl md:text-3xl text-[#2c3e50] group-hover:text-[#6B9BD1] transition-colors duration-300" 
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#f8f6f3] text-[#6b7280] border border-[#e5e7eb] group-hover:border-[#6B9BD1]/30 transition-colors"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>


      </div>
    </section>
  );
}

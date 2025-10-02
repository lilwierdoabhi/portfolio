import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { getProjectById, projects } from "../data/projectsData";

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#fdfcfa] flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-[#2c3e50] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Project not found
          </p>
          <button
            onClick={onBack}
            className="text-[#6B9BD1] hover:text-[#5a7a9e] transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Return to portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-[#5a7a9e] hover:text-[#2c3e50] transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </button>
          <p className="text-xs sm:text-sm text-[#6b7280]" style={{ fontFamily: 'var(--font-sans)' }}>
            Project {projects.findIndex(p => p.id === projectId) + 1} of {projects.length}
          </p>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Project image(s) */}
            <div className="order-2 lg:order-1 space-y-6">
              {/* Main image */}
              <motion.div 
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Additional images gallery */}
              {project.images && project.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {project.images.slice(1).map((image, index) => (
                    <motion.div 
                      key={index}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                    >
                      <img 
                        src={image}
                        alt={`${project.title} - Image ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Project info */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span 
                    className="px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm" 
                    style={{ 
                      backgroundColor: `${project.color}15`, 
                      color: project.color,
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-[#6b7280] text-xs sm:text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2c3e50] mb-4 sm:mb-6" 
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {project.title}
                </h1>

                <p 
                  className="text-base sm:text-lg md:text-xl text-[#4a5568] leading-relaxed" 
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.description}
                </p>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-3">
                {project.figmaLink && (
                  <motion.a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg transition-all duration-300 group"
                    style={{ 
                      backgroundColor: `${project.color}15`,
                      border: `2px solid ${project.color}40`,
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ 
                      y: -2,
                      boxShadow: `0 8px 20px ${project.color}30`
                    }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: project.color }}>
                      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
                    </svg>
                    <span style={{ color: project.color }}>View on Figma</span>
                    <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: project.color }} />
                  </motion.a>
                )}

                {project.behanceLink && (
                  <motion.a
                    href={project.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg transition-all duration-300 group"
                    style={{ 
                      backgroundColor: `${project.color}15`,
                      border: `2px solid ${project.color}40`,
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    whileHover={{ 
                      y: -2,
                      boxShadow: `0 8px 20px ${project.color}30`
                    }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: project.color }}>
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                    </svg>
                    <span style={{ color: project.color }}>View on Behance</span>
                    <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: project.color }} />
                  </motion.a>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e5e7eb] rounded-full text-xs sm:text-sm text-[#6b7280]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Challenge */}
            <div className="space-y-4">
              <h3 
                className="text-xl sm:text-2xl text-[#2c3e50] flex items-center gap-2" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                <div 
                  className="w-2 h-8 sm:h-10 rounded-full" 
                  style={{ backgroundColor: project.color }}
                />
                The Challenge
              </h3>
              <p 
                className="text-sm sm:text-base text-[#4a5568] leading-relaxed" 
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <h3 
                className="text-xl sm:text-2xl text-[#2c3e50] flex items-center gap-2" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                <div 
                  className="w-2 h-8 sm:h-10 rounded-full" 
                  style={{ backgroundColor: project.color }}
                />
                The Solution
              </h3>
              <p 
                className="text-sm sm:text-base text-[#4a5568] leading-relaxed" 
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {project.solution}
              </p>
            </div>

            {/* Outcome */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 
                className="text-xl sm:text-2xl text-[#2c3e50] flex items-center gap-2" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                <div 
                  className="w-2 h-8 sm:h-10 rounded-full" 
                  style={{ backgroundColor: project.color }}
                />
                The Outcome
              </h3>
              <p 
                className="text-sm sm:text-base text-[#4a5568] leading-relaxed" 
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#fdfcfa] to-[#f8f6f3]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 
            className="text-2xl sm:text-3xl md:text-4xl text-[#2c3e50] mb-6" 
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Let's Create Something Amazing Together
          </h3>
          <p 
            className="text-base sm:text-lg md:text-xl text-[#6b7280] mb-8 sm:mb-10" 
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBack}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#6B9BD1] text-white rounded-lg hover:bg-[#5a7a9e] transition-colors shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              View More Projects
            </button>
            <a
              href="mailto:workwithrudra777@gmail.com"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#6B9BD1] rounded-lg border-2 border-[#6B9BD1] hover:bg-[#6B9BD1] hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

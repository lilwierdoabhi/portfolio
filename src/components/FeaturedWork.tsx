import { motion } from "motion/react";

interface FeaturedWorkProps {
  onProjectClick: (id: number) => void;
}

export default function FeaturedWork({ onProjectClick }: FeaturedWorkProps) {
  const featuredProjects = [
    {
      id: 1,
      title: "Nexus Tech Solutions",
      category: "Logo & Brand Identity",
      year: "2024",
      color: "#6B9BD1",
      image: "https://images.unsplash.com/photo-1686526473156-e8449f0c6765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc1OTMxMzYzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Complete brand identity system for a cutting-edge technology startup, including logo design, color palette, and brand applications."
    },
    {
      id: 7,
      title: "FitLife Social Campaign",
      category: "Social Media Creatives",
      year: "2024",
      color: "#E67E22",
      image: "https://images.unsplash.com/photo-1622498186306-1c97361dabbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNyZWF0aXZlfGVufDF8fHx8MTc1OTM4MjUxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Comprehensive 3-month social media creative suite for a fitness app launch, generating 2.3M impressions and 47K app downloads."
    },
    {
      id: 4,
      title: "Artisan Honey Collection",
      category: "Packaging Design",
      year: "2024",
      color: "#F39C12",
      image: "https://images.unsplash.com/photo-1626253934161-08cfea22e968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwZGVzaWdufGVufDF8fHx8MTc1OTMxMDEyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premium packaging design for a limited-edition artisan honey collection featuring hand-illustrated botanical artwork."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Static background graphic */}
      <div className="absolute top-16 right-8 sm:right-16 w-32 sm:w-40 h-32 sm:h-40 opacity-8">
        <svg viewBox="0 0 150 150" fill="none">
          <path d="M75 25 L100 75 L75 125 L50 75 Z" stroke="#6B9BD1" strokeWidth="1" />
          <circle cx="75" cy="75" r="40" stroke="#E49393" strokeWidth="1" />
          <circle cx="75" cy="75" r="20" stroke="#9B8EC9" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6B9BD1] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2c3e50] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Featured Work
          </h2>
          <p className="text-base sm:text-lg text-[#6b7280] max-w-2xl mx-auto mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
            A selection of my recent projects showcasing design excellence across different disciplines
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#6B9BD1]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#E49393]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#E49393]/40" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="group text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#f8f6f3] to-white rounded-lg overflow-hidden border border-[#e5e7eb] hover:border-[#6B9BD1]/30 transition-all duration-300 hover:shadow-xl">
                {/* Project image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover content */}
                <div className="absolute inset-0 flex items-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm leading-relaxed line-clamp-3" style={{ fontFamily: 'var(--font-sans)' }}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project info */}
              <div className="mt-4 sm:mt-5 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p 
                    className="text-xs uppercase tracking-[0.15em] text-[#6B9BD1] truncate" 
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {project.category}
                  </p>
                  <p 
                    className="text-xs text-[#9ca3af] flex-shrink-0" 
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {project.year}
                  </p>
                </div>
                <h3 
                  className="text-xl sm:text-2xl text-[#2c3e50] group-hover:text-[#6B9BD1] transition-colors" 
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-[#5a7a9e] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>View case study</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
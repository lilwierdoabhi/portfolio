import { motion } from "motion/react";
import { 
  LogoBrandIllustration, 
  PackagingIllustration, 
  SocialMediaIllustration, 
  CustomArtworkIllustration, 
  MerchandiseIllustration,
  UIUXIllustration 
} from "./ServiceIllustrations";
import { 
  GeometricGrid, 
  ColorWheel, 
  BezierCurve, 
  LayersStack,
  PenToolCursor,
  RulerGuides 
} from "./DecorativeElements";

export default function Services() {
  const services = [
    {
      illustration: LogoBrandIllustration,
      title: "Logo Design & Brand Identity",
      description: "Creating distinctive logos and comprehensive brand systems that capture your unique essence and resonate with your audience.",
      color: "#6B9BD1"
    },
    {
      illustration: UIUXIllustration,
      title: "UI/UX Design",
      description: "Designing intuitive, user-centered interfaces for websites and mobile apps that deliver seamless experiences and drive engagement.",
      color: "#4A90E2"
    },
    {
      illustration: PackagingIllustration,
      title: "Packaging Design",
      description: "Eye-catching packaging solutions that make your products stand out on shelves while maintaining brand consistency.",
      color: "#E49393"
    },
    {
      illustration: SocialMediaIllustration,
      title: "Social Media Creatives",
      description: "Engaging ads, banners, and posts optimized for social platforms to boost your digital presence.",
      color: "#9B8EC9"
    },
    {
      illustration: CustomArtworkIllustration,
      title: "Illustrations & Custom Artwork",
      description: "Original illustrations and visual elements tailored to your brand story and communication needs.",
      color: "#16A085"
    },
    {
      illustration: MerchandiseIllustration,
      title: "Print & Merchandise Design",
      description: "T-shirts, posters, covers, and more — designs that translate perfectly to physical products.",
      color: "#E74C3C"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#fdfcfa] to-[#f8f6f3] relative overflow-hidden">
      {/* Animated background decorative elements */}
      <div className="absolute top-10 left-5 md:left-10 w-20 h-20 md:w-32 md:h-32 opacity-20 pointer-events-none">
        <GeometricGrid delay={0.2} />
      </div>

      <div className="absolute top-1/4 right-5 md:right-10 w-24 h-24 md:w-36 md:h-36 opacity-15 pointer-events-none">
        <ColorWheel delay={0.4} />
      </div>

      <div className="absolute bottom-20 left-10 w-28 h-28 md:w-40 md:h-40 opacity-15 pointer-events-none hidden md:block">
        <BezierCurve delay={0.6} />
      </div>

      <div className="absolute top-1/2 left-1/4 w-20 h-20 md:w-28 md:h-28 opacity-10 pointer-events-none hidden lg:block">
        <LayersStack delay={0.8} />
      </div>

      <div className="absolute bottom-32 right-1/4 w-24 h-24 opacity-12 pointer-events-none hidden lg:block">
        <PenToolCursor delay={1} />
      </div>

      <div className="absolute top-40 right-20 w-32 h-32 opacity-10 pointer-events-none hidden xl:block">
        <RulerGuides delay={0.5} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6B9BD1] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2c3e50] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            What I Do
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#6B9BD1]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#E49393]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#E49393]/40" />
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-lg border border-[#e5e7eb] hover:border-[#6B9BD1]/30 hover:shadow-xl transition-all duration-200 relative overflow-hidden hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {/* Illustration at the top */}
              <div className="mb-4 sm:mb-6 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 bg-gradient-to-br from-white to-gray-50/30">
                <div className="w-full h-32 sm:h-40 flex items-center justify-center">
                  <service.illustration className="w-full h-full" />
                </div>
              </div>
              
              <h3 
                className="text-lg sm:text-xl text-[#2c3e50] mb-3" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-sm sm:text-base text-[#4a5568] leading-relaxed" 
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {service.description}
              </p>

              {/* Decorative accent */}
              <div className="mt-6 pt-4 border-t border-[#f3f4f6]">
                <div 
                  className="w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-16" 
                  style={{ backgroundColor: service.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

// Logo Design & Brand Identity Illustration
export function LogoBrandIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Main artboard/canvas */}
      <motion.rect 
        x="40" 
        y="35" 
        width="120" 
        height="95" 
        rx="4" 
        stroke="#6B9BD1" 
        strokeWidth="2" 
        fill="white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Letter "A" logo design - main element */}
      <motion.path 
        d="M85 95 L100 60 L115 95" 
        stroke="#E49393" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.path 
        d="M90 85 L110 85" 
        stroke="#E49393" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      
      {/* Circle accent around letter */}
      <motion.circle 
        cx="100" 
        cy="77" 
        r="28" 
        stroke="#6B9BD1" 
        strokeWidth="1.5" 
        fill="none"
        strokeDasharray="4 4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      
      {/* Typography baseline guides */}
      <motion.line 
        x1="50" 
        y1="110" 
        x2="150" 
        y2="110" 
        stroke="#9B8EC9" 
        strokeWidth="1" 
        strokeDasharray="2 2"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      />
      
      {/* Grid system indicators */}
      <motion.rect 
        x="50" 
        y="50" 
        width="25" 
        height="25" 
        stroke="#6B9BD1" 
        strokeWidth="1" 
        fill="none"
        opacity="0.3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.1 }}
      />
      <motion.rect 
        x="125" 
        y="50" 
        width="25" 
        height="25" 
        stroke="#E49393" 
        strokeWidth="1" 
        fill="none"
        opacity="0.3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.2 }}
      />
      
      {/* Brand guideline book */}
      <motion.rect 
        x="25" 
        y="145" 
        width="35" 
        height="45" 
        rx="2" 
        stroke="#6B9BD1" 
        strokeWidth="2" 
        fill="rgba(107, 155, 209, 0.1)"
        initial={{ x: 15, opacity: 0 }}
        whileInView={{ x: 25, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.3 }}
      />
      <motion.path 
        d="M32 155 L53 155 M32 162 L53 162 M32 169 L48 169" 
        stroke="#6B9BD1" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.5 }}
      />
      
      {/* Color palette swatches - vertical */}
      <motion.g
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <rect x="145" y="145" width="30" height="12" rx="2" fill="#6B9BD1" />
        <rect x="145" y="160" width="30" height="12" rx="2" fill="#E49393" />
        <rect x="145" y="175" width="30" height="12" rx="2" fill="#9B8EC9" />
      </motion.g>
      
      {/* Typography samples */}
      <motion.text 
        x="85" 
        y="158" 
        fill="#2c3e50" 
        fontSize="16" 
        fontFamily="serif"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        Aa
      </motion.text>
      <motion.path 
        d="M80 165 L125 165" 
        stroke="#E49393" 
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.8 }}
      />
      <motion.text 
        x="85" 
        y="182" 
        fill="#2c3e50" 
        fontSize="10" 
        fontFamily="sans-serif"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.9 }}
      >
        BRAND
      </motion.text>
    </svg>
  );
}

// Packaging Design Illustration
export function PackagingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Coffee/Product Bag - main packaging */}
      <motion.path 
        d="M70 50 L130 50 L135 70 L135 150 C135 155 132 160 125 160 L75 160 C68 160 65 155 65 150 L65 70 Z" 
        stroke="#E49393" 
        strokeWidth="2.5" 
        fill="rgba(228, 147, 147, 0.08)"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Top seal/fold area */}
      <motion.path 
        d="M70 50 Q100 40, 130 50" 
        stroke="#E49393" 
        strokeWidth="2.5"
        fill="rgba(228, 147, 147, 0.15)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      
      {/* Center brand circle logo */}
      <motion.circle 
        cx="100" 
        cy="95" 
        r="22" 
        stroke="#6B9BD1" 
        strokeWidth="2.5"
        fill="white"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      
      {/* Logo leaf design inside circle */}
      <motion.path 
        d="M100 85 Q95 95, 100 105 Q105 95, 100 85 Z" 
        fill="#6B9BD1"
        fillOpacity="0.6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
      
      {/* Brand name text area */}
      <motion.rect 
        x="80" 
        y="122" 
        width="40" 
        height="8" 
        rx="1" 
        fill="#2c3e50"
        fillOpacity="0.7"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      />
      
      {/* Product info lines */}
      <motion.path 
        d="M85 138 L115 138 M88 145 L112 145" 
        stroke="#9B8EC9" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.1 }}
      />
      
      {/* Bottle beside the bag */}
      <motion.g
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1.3 }}
      >
        {/* Bottle body */}
        <rect 
          x="150" 
          y="95" 
          width="25" 
          height="65" 
          rx="3" 
          stroke="#6B9BD1" 
          strokeWidth="2" 
          fill="rgba(107, 155, 209, 0.1)"
        />
        {/* Bottle neck */}
        <rect 
          x="157" 
          y="85" 
          width="11" 
          height="12" 
          stroke="#6B9BD1" 
          strokeWidth="2" 
          fill="rgba(107, 155, 209, 0.15)"
        />
        {/* Bottle cap */}
        <rect 
          x="155" 
          y="80" 
          width="15" 
          height="6" 
          rx="1" 
          fill="#E49393"
        />
        {/* Label on bottle */}
        <rect 
          x="154" 
          y="110" 
          width="17" 
          height="25" 
          rx="1" 
          fill="white" 
          stroke="#9B8EC9" 
          strokeWidth="1"
        />
        <circle cx="162.5" cy="122" r="4" fill="#9B8EC9" fillOpacity="0.4" />
      </motion.g>
      
      {/* Small box/carton */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1.5 }}
      >
        {/* Box shape */}
        <path 
          d="M35 120 L50 120 L50 160 L35 160 L30 155 L30 125 Z" 
          stroke="#9B8EC9" 
          strokeWidth="2" 
          fill="rgba(155, 142, 201, 0.1)"
        />
        <line x1="35" y1="120" x2="30" y2="125" stroke="#9B8EC9" strokeWidth="2" />
        <line x1="35" y1="160" x2="35" y2="120" stroke="#9B8EC9" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
        {/* Small label */}
        <rect x="37" y="135" width="10" height="15" rx="1" fill="#E49393" fillOpacity="0.6" />
      </motion.g>
      
      {/* Decorative elements - quality badges */}
      <motion.circle 
        cx="115" 
        cy="65" 
        r="8" 
        stroke="#F39C12" 
        strokeWidth="1.5"
        fill="rgba(243, 156, 18, 0.15)"
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.7 }}
      />
      <motion.path 
        d="M112 65 L114 68 L118 63" 
        stroke="#F39C12" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.9 }}
      />
    </svg>
  );
}

// Social Media Creatives Illustration
export function SocialMediaIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Main phone frame */}
      <motion.rect 
        x="60" 
        y="30" 
        width="80" 
        height="140" 
        rx="8" 
        stroke="#9B8EC9" 
        strokeWidth="2.5" 
        fill="rgba(155, 142, 201, 0.05)"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Screen */}
      <motion.rect 
        x="67" 
        y="40" 
        width="66" 
        height="120" 
        rx="4" 
        fill="white" 
        stroke="#e5e7eb" 
        strokeWidth="1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      {/* Post image placeholder */}
      <motion.rect 
        x="72" 
        y="50" 
        width="56" 
        height="45" 
        rx="3" 
        fill="#6B9BD1" 
        fillOpacity="0.3"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      
      {/* Like heart */}
      <motion.path 
        d="M85 65 C85 63 86 62 87.5 62 C88.5 62 89 62.5 89.5 63 C90 62.5 90.5 62 91.5 62 C93 62 94 63 94 65 C94 67 89.5 70 89.5 70 C89.5 70 85 67 85 65 Z" 
        fill="#E49393"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      
      {/* Text lines */}
      <motion.path 
        d="M75 105 L118 105 M75 112 L125 112 M75 119 L105 119" 
        stroke="#9B8EC9" 
        strokeWidth="2" 
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
      
      {/* Engagement icons */}
      <motion.circle 
        cx="78" 
        cy="135" 
        r="6" 
        stroke="#E49393" 
        strokeWidth="1.5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.9 }}
      />
      <motion.path 
        d="M90 132 L94 138 L98 129" 
        stroke="#6B9BD1" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1 }}
      />
      <motion.path 
        d="M107 132 L107 138 L110 138 M110 132 L110 138" 
        stroke="#9B8EC9" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.1 }}
      />
      
      {/* Floating sparkles */}
      <motion.circle 
        cx="45" 
        cy="60" 
        r="3" 
        fill="#F39C12"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.7, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1.2 }}
      />
      <motion.circle 
        cx="155" 
        cy="80" 
        r="4" 
        fill="#16A085"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.7, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1.3 }}
      />
    </svg>
  );
}

// Illustrations & Custom Artwork Illustration
export function CustomArtworkIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Canvas/artboard */}
      <motion.rect 
        x="50" 
        y="40" 
        width="100" 
        height="120" 
        rx="4" 
        stroke="#6B9BD1" 
        strokeWidth="2.5" 
        fill="white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Bezier curve path */}
      <motion.path 
        d="M70 80 Q90 60, 110 80 T130 80" 
        stroke="#E49393" 
        strokeWidth="2.5" 
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      
      {/* Vector anchor points */}
      <motion.circle 
        cx="70" 
        cy="80" 
        r="4" 
        fill="#6B9BD1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      <motion.circle 
        cx="110" 
        cy="80" 
        r="4" 
        fill="#6B9BD1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
      <motion.circle 
        cx="130" 
        cy="80" 
        r="4" 
        fill="#6B9BD1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.9 }}
      />
      
      {/* Star shape */}
      <motion.path 
        d="M100 110 L105 120 L115 122 L108 130 L110 140 L100 135 L90 140 L92 130 L85 122 L95 120 Z" 
        stroke="#9B8EC9" 
        strokeWidth="2" 
        fill="rgba(155, 142, 201, 0.2)"
        initial={{ opacity: 0, rotate: -180 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      
      {/* Pen tool */}
      <motion.path 
        d="M160 170 L165 160 L172 167 Z" 
        stroke="#F39C12" 
        strokeWidth="2" 
        fill="rgba(243, 156, 18, 0.3)"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      />
      
      {/* Brush stroke */}
      <motion.path 
        d="M25 170 Q35 165, 45 170" 
        stroke="#16A085" 
        strokeWidth="4" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </svg>
  );
}

// UI/UX Design Illustration
export function UIUXIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Mobile frame */}
      <motion.rect 
        x="50" 
        y="30" 
        width="55" 
        height="100" 
        rx="6" 
        stroke="#6B9BD1" 
        strokeWidth="2.5" 
        fill="white"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Mobile screen content */}
      <motion.rect 
        x="55" 
        y="38" 
        width="45" 
        height="7" 
        rx="2" 
        fill="#E49393"
        fillOpacity="0.3"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      
      {/* Mobile UI elements */}
      <motion.circle 
        cx="65" 
        cy="60" 
        r="8" 
        stroke="#9B8EC9" 
        strokeWidth="2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
      <motion.rect 
        x="78" 
        y="54" 
        width="15" 
        height="3" 
        rx="1" 
        fill="#6B9BD1"
        fillOpacity="0.6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
      <motion.rect 
        x="78" 
        y="60" 
        width="12" 
        height="3" 
        rx="1" 
        fill="#6B9BD1"
        fillOpacity="0.4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />
      
      {/* Desktop frame */}
      <motion.rect 
        x="95" 
        y="60" 
        width="90" 
        height="65" 
        rx="4" 
        stroke="#E49393" 
        strokeWidth="2.5" 
        fill="white"
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      
      {/* Desktop screen content */}
      <motion.rect 
        x="100" 
        y="67" 
        width="80" 
        height="8" 
        rx="2" 
        fill="#6B9BD1"
        fillOpacity="0.2"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      
      {/* Desktop grid */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <rect x="100" y="80" width="25" height="20" rx="2" fill="#9B8EC9" fillOpacity="0.2" />
        <rect x="128" y="80" width="25" height="20" rx="2" fill="#E49393" fillOpacity="0.2" />
        <rect x="156" y="80" width="24" height="20" rx="2" fill="#6B9BD1" fillOpacity="0.2" />
        <rect x="100" y="103" width="52" height="18" rx="2" fill="#F39C12" fillOpacity="0.2" />
        <rect x="156" y="103" width="24" height="18" rx="2" fill="#16A085" fillOpacity="0.2" />
      </motion.g>
      
      {/* Cursor pointer */}
      <motion.g
        initial={{ x: -10, y: -10, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <path 
          d="M165 95 L170 105 L167 105 L169 110 L167 111 L165 106 L163 108 Z" 
          fill="#2c3e50"
        />
      </motion.g>
      
      {/* Wireframe lines connecting */}
      <motion.path 
        d="M77 75 L95 85" 
        stroke="#9B8EC9" 
        strokeWidth="1.5" 
        strokeDasharray="3 3"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.9 }}
      />
      
      {/* Design tools - pen tool icon */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <circle cx="30" cy="90" r="12" stroke="#6B9BD1" strokeWidth="2" fill="rgba(107, 155, 209, 0.1)" />
        <path d="M30 85 L30 95 M25 90 L35 90" stroke="#6B9BD1" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      
      {/* Color swatches */}
      <motion.g
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <circle cx="140" cy="145" r="8" fill="#6B9BD1" />
        <circle cx="155" cy="145" r="8" fill="#E49393" />
        <circle cx="170" cy="145" r="8" fill="#9B8EC9" />
      </motion.g>
      
      {/* Responsive icon */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.3 }}
      >
        <rect x="50" cy="155" width="15" height="20" rx="2" stroke="#16A085" strokeWidth="1.5" fill="none" />
        <rect x="68" y="150" width="20" height="25" rx="2" stroke="#F39C12" strokeWidth="1.5" fill="none" />
      </motion.g>
    </svg>
  );
}

// Print & Merchandise Design Illustration
export function MerchandiseIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* T-shirt outline */}
      <motion.path 
        d="M70 60 L65 50 L55 55 L60 70 L60 140 L140 140 L140 70 L145 55 L135 50 L130 60 L110 60 L110 50 L90 50 L90 60 Z" 
        stroke="#E49393" 
        strokeWidth="2.5" 
        fill="rgba(228, 147, 147, 0.08)"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Design on t-shirt - geometric shape */}
      <motion.circle 
        cx="100" 
        cy="95" 
        r="20" 
        stroke="#6B9BD1" 
        strokeWidth="2" 
        fill="none"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      
      <motion.path 
        d="M90 95 L100 85 L110 95 L100 105 Z" 
        fill="#9B8EC9" 
        fillOpacity="0.5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      
      {/* Coffee mug */}
      <motion.path 
        d="M155 160 L160 175 L180 175 L185 160 Z" 
        stroke="#6B9BD1" 
        strokeWidth="2" 
        fill="rgba(107, 155, 209, 0.1)"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <motion.path 
        d="M185 165 L190 165 Q195 167.5, 190 170 L185 170" 
        stroke="#6B9BD1" 
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      
      {/* Sticker/Badge */}
      <motion.circle 
        cx="30" 
        cy="170" 
        r="15" 
        stroke="#F39C12" 
        strokeWidth="2" 
        fill="rgba(243, 156, 18, 0.1)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.1 }}
      />
      <motion.path 
        d="M25 170 L28 175 L33 167" 
        stroke="#F39C12" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.3 }}
      />
      
      {/* Poster/Print */}
      <motion.rect 
        x="15" 
        y="100" 
        width="25" 
        height="35" 
        rx="2" 
        stroke="#16A085" 
        strokeWidth="1.5" 
        fill="rgba(22, 160, 133, 0.1)"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 15, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.4 }}
      />
    </svg>
  );
}
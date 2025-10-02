import { motion } from "motion/react";

interface IllustrationProps {
  className?: string;
}

export function PencilIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <path
        d="M30 90 L50 70 L70 50 L90 30"
        stroke="#6B9BD1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M90 30 L95 25 L85 35 Z"
        fill="#2c3e50"
      />
      <path
        d="M30 90 Q20 95 25 100"
        stroke="#E49393"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="40" cy="80" r="3" fill="#9B8EC9" />
    </motion.svg>
  );
}

export function ColorPaletteIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <path
        d="M60 20 C35 20 20 35 20 60 C20 75 25 85 35 90 C40 92 45 90 47 85 C49 82 48 78 50 75 C52 73 55 72 58 74 C85 74 100 65 100 45 C100 30 85 20 60 20 Z"
        stroke="#2c3e50"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="45" cy="40" r="6" fill="#6B9BD1" />
      <circle cx="65" cy="35" r="6" fill="#E49393" />
      <circle cx="80" cy="50" r="6" fill="#9B8EC9" />
      <circle cx="35" cy="60" r="6" fill="#f59e0b" />
    </motion.svg>
  );
}

export function PackageBoxIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <path
        d="M60 30 L90 45 L90 75 L60 90 L30 75 L30 45 Z"
        stroke="#6B9BD1"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M60 30 L90 45 L60 60 L30 45 Z"
        fill="#6B9BD1"
        fillOpacity="0.2"
        stroke="#6B9BD1"
        strokeWidth="1.5"
      />
      <line
        x1="60"
        y1="30"
        x2="60"
        y2="90"
        stroke="#2c3e50"
        strokeWidth="1.5"
      />
      <rect
        x="50"
        y="55"
        width="20"
        height="4"
        fill="#E49393"
        fillOpacity="0.6"
      />
    </motion.svg>
  );
}

export function TypographyIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <path
        d="M30 80 L40 40 L50 80"
        stroke="#E49393"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="33"
        y1="65"
        x2="47"
        y2="65"
        stroke="#E49393"
        strokeWidth="2"
      />
      <circle
        cx="70"
        cy="60"
        r="10"
        stroke="#6B9BD1"
        strokeWidth="2"
      />
      <line
        x1="80"
        y1="50"
        x2="80"
        y2="70"
        stroke="#6B9BD1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="25"
        y1="85"
        x2="90"
        y2="85"
        stroke="#9B8EC9"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </motion.svg>
  );
}

export function LogoGridIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <rect
        x="20"
        y="20"
        width="80"
        height="80"
        stroke="#6B9BD1"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <line
        x1="60"
        y1="20"
        x2="60"
        y2="100"
        stroke="#6B9BD1"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <line
        x1="20"
        y1="60"
        x2="100"
        y2="60"
        stroke="#6B9BD1"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <circle
        cx="60"
        cy="60"
        r="25"
        stroke="#E49393"
        strokeWidth="2"
      />
      <path
        d="M60 35 L75 60 L60 85 L45 60 Z"
        fill="#9B8EC9"
        fillOpacity="0.3"
        stroke="#9B8EC9"
        strokeWidth="1.5"
      />
    </motion.svg>
  );
}

export function BrandingTagIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <path
        d="M30 40 L70 40 L90 60 L70 80 L30 80 Z"
        stroke="#9B8EC9"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="45"
        cy="60"
        r="5"
        stroke="#9B8EC9"
        strokeWidth="1.5"
        fill="none"
      />
      <line
        x1="57"
        y1="55"
        x2="75"
        y2="55"
        stroke="#6B9BD1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="57"
        y1="65"
        x2="70"
        y2="65"
        stroke="#E49393"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

export function VectorPathIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <path
        d="M30 80 Q50 20 90 60"
        stroke="#6B9BD1"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="30" cy="80" r="4" fill="#E49393" />
      <circle cx="90" cy="60" r="4" fill="#E49393" />
      <circle cx="50" cy="20" r="3" fill="#9B8EC9" />
      <line
        x1="30"
        y1="80"
        x2="50"
        y2="20"
        stroke="#9B8EC9"
        strokeWidth="1"
        strokeDasharray="2 2"
        strokeOpacity="0.5"
      />
    </motion.svg>
  );
}

export function CreativeSparkIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <path
        d="M60 30 L65 50 L85 50 L70 62 L75 82 L60 70 L45 82 L50 62 L35 50 L55 50 Z"
        fill="#f59e0b"
        fillOpacity="0.3"
        stroke="#f59e0b"
        strokeWidth="1.5"
      />
      <circle cx="25" cy="30" r="2" fill="#6B9BD1" />
      <circle cx="95" cy="40" r="2" fill="#E49393" />
      <circle cx="85" cy="90" r="2" fill="#9B8EC9" />
    </motion.svg>
  );
}
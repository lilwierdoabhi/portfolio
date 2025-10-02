import { motion } from "motion/react";

// Simplified decorative elements for better performance

// Geometric Grid Pattern
export function GeometricGrid({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <rect x="20" y="20" width="60" height="60" stroke="#6B9BD1" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="90" y="20" width="60" height="60" stroke="#E49393" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="20" y="90" width="60" height="60" stroke="#9B8EC9" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="90" y="90" width="60" height="60" stroke="#F39C12" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  );
}

// Color Wheel
export function ColorWheel({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="100" cy="100" r="70" stroke="#6B9BD1" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="100" cy="100" r="55" stroke="#E49393" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="100" cy="100" r="40" stroke="#9B8EC9" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="100" cy="100" r="25" stroke="#F39C12" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="100" cy="30" r="8" fill="#6B9BD1" opacity="0.6" />
      <circle cx="170" cy="100" r="8" fill="#E49393" opacity="0.6" />
      <circle cx="100" cy="170" r="8" fill="#9B8EC9" opacity="0.6" />
      <circle cx="30" cy="100" r="8" fill="#F39C12" opacity="0.6" />
    </svg>
  );
}

// Bezier Curve Tool
export function BezierCurve({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M30 150 Q60 30, 100 100 T170 50" 
        stroke="#6B9BD1" 
        strokeWidth="3" 
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="30" cy="150" r="6" fill="#E49393" />
      <circle cx="100" cy="100" r="6" fill="#E49393" />
      <circle cx="170" cy="50" r="6" fill="#E49393" />
      <line x1="30" y1="150" x2="60" y2="90" stroke="#9B8EC9" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <line x1="100" y1="100" x2="140" y2="75" stroke="#9B8EC9" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
    </svg>
  );
}

// Typography Aa
export function TypographyAa({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <text x="50" y="120" fontFamily="serif" fontSize="100" fill="#6B9BD1" fillOpacity="0.2">Aa</text>
      <path d="M50 140 L150 140" stroke="#E49393" strokeWidth="2" opacity="0.6" />
      <circle cx="50" cy="140" r="4" fill="#9B8EC9" />
      <circle cx="150" cy="140" r="4" fill="#9B8EC9" />
    </svg>
  );
}

// Layers Stack
export function LayersStack({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <rect x="40" y="60" width="120" height="20" rx="4" fill="#6B9BD1" fillOpacity="0.3" stroke="#6B9BD1" strokeWidth="1.5" />
      <rect x="50" y="90" width="100" height="20" rx="4" fill="#E49393" fillOpacity="0.3" stroke="#E49393" strokeWidth="1.5" />
      <rect x="60" y="120" width="80" height="20" rx="4" fill="#9B8EC9" fillOpacity="0.3" stroke="#9B8EC9" strokeWidth="1.5" />
    </svg>
  );
}

// Pen Tool Cursor
export function PenToolCursor({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path d="M100 40 L120 80 L140 100 L100 140 L60 100 L80 80 Z" 
        fill="#6B9BD1" fillOpacity="0.2" stroke="#6B9BD1" strokeWidth="2" />
      <circle cx="100" cy="40" r="8" fill="#E49393" />
      <circle cx="80" cy="80" r="6" fill="#9B8EC9" />
      <circle cx="120" cy="80" r="6" fill="#9B8EC9" />
      <circle cx="60" cy="100" r="6" fill="#F39C12" />
      <circle cx="140" cy="100" r="6" fill="#F39C12" />
    </svg>
  );
}

// Gradient Mesh
export function GradientMesh({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B9BD1" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#E49393" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#9B8EC9" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#grad1)" />
      <circle cx="60" cy="60" r="8" fill="#6B9BD1" opacity="0.7" />
      <circle cx="140" cy="60" r="8" fill="#E49393" opacity="0.7" />
      <circle cx="100" cy="140" r="8" fill="#9B8EC9" opacity="0.7" />
    </svg>
  );
}

// Ruler and Guides
export function RulerGuides({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <rect x="20" y="20" width="160" height="15" fill="#6B9BD1" fillOpacity="0.1" stroke="#6B9BD1" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="35" stroke="#6B9BD1" strokeWidth="1.5" />
      <line x1="80" y1="20" x2="80" y2="35" stroke="#6B9BD1" strokeWidth="1.5" />
      <line x1="120" y1="20" x2="120" y2="35" stroke="#6B9BD1" strokeWidth="1.5" />
      <line x1="160" y1="20" x2="160" y2="35" stroke="#6B9BD1" strokeWidth="1.5" />
      <line x1="100" y1="50" x2="100" y2="180" stroke="#E49393" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      <line x1="50" y1="100" x2="180" y2="100" stroke="#9B8EC9" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
    </svg>
  );
}

// Creative Spark/Star Burst
export function CreativeSpark({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path d="M100 20 L110 90 L180 100 L110 110 L100 180 L90 110 L20 100 L90 90 Z" 
        fill="#F39C12" fillOpacity="0.3" stroke="#F39C12" strokeWidth="2" />
      <circle cx="100" cy="100" r="15" fill="#E49393" fillOpacity="0.4" />
    </svg>
  );
}

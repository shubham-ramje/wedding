import React from 'react';

/**
 * Lord Ganesha Sacred Line Art Icon
 */
export const GaneshIcon = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`ganesh-svg ${className}`}
    aria-label="भगवान श्री गणेश"
  >
    <defs>
      <linearGradient id="ganeshGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-gold-light)" />
        <stop offset="50%" stopColor="var(--color-gold)" />
        <stop offset="100%" stopColor="var(--color-gold-dark)" />
      </linearGradient>
    </defs>
    {/* Halo */}
    <circle cx="50" cy="50" r="44" stroke="url(#ganeshGold)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
    
    {/* Trunk & Head Stylized Line Art */}
    <path
      d="M50 20 C42 20 36 28 36 38 C36 48 42 54 48 58 C52 61 56 65 56 71 C56 78 50 82 44 82 C39 82 35 79 35 75"
      stroke="url(#ganeshGold)"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Right Ear */}
    <path
      d="M38 34 C30 32 23 37 23 45 C23 54 31 58 39 55"
      stroke="url(#ganeshGold)"
      strokeWidth="2.8"
      strokeLinecap="round"
    />

    {/* Left Ear */}
    <path
      d="M62 34 C70 32 77 37 77 45 C77 54 69 58 61 55"
      stroke="url(#ganeshGold)"
      strokeWidth="2.8"
      strokeLinecap="round"
    />

    {/* Mukut (Crown) */}
    <path
      d="M42 22 L50 12 L58 22 Z"
      stroke="url(#ganeshGold)"
      strokeWidth="2.5"
      fill="rgba(201, 162, 75, 0.2)"
    />
    <circle cx="50" cy="10" r="2.5" fill="var(--color-marigold)" />

    {/* Tilak */}
    <path d="M47 30 Q50 36 53 30" stroke="var(--color-vermilion)" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="50" y1="26" x2="50" y2="35" stroke="var(--color-vermilion)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="50" cy="24" r="1.5" fill="var(--color-gold)" />

    {/* Modak in Hand */}
    <ellipse cx="66" cy="62" rx="4" ry="5" fill="var(--color-marigold)" stroke="url(#ganeshGold)" strokeWidth="1.5" />

    {/* Tusk */}
    <path d="M42 50 L38 52" stroke="url(#ganeshGold)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/**
 * Traditional Sacred Swastik
 */
export const SwastikIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="शुभ स्वास्तिक"
  >
    <g stroke="var(--color-gold)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16" y1="4" x2="16" y2="28" />
      <line x1="4" y1="16" x2="28" y2="16" />
      <line x1="16" y1="4" x2="24" y2="4" />
      <line x1="28" y1="16" x2="28" y2="24" />
      <line x1="16" y1="28" x2="8" y2="28" />
      <line x1="4" y1="16" x2="4" y2="8" />
    </g>
    <circle cx="10" cy="10" r="1.5" fill="var(--color-marigold)" />
    <circle cx="22" cy="10" r="1.5" fill="var(--color-marigold)" />
    <circle cx="10" cy="22" r="1.5" fill="var(--color-marigold)" />
    <circle cx="22" cy="22" r="1.5" fill="var(--color-marigold)" />
  </svg>
);

/**
 * Luminous Diya (Oil Lamp)
 */
export const DiyaIcon = ({ size = 38, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`diya-glow ${className}`}
    aria-label="दीपक"
  >
    <defs>
      <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF275" />
        <stop offset="60%" stopColor="#FF9F1C" />
        <stop offset="100%" stopColor="#E71D36" stopOpacity="0.2" />
      </radialGradient>
      <linearGradient id="lampBowl" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-gold-light)" />
        <stop offset="50%" stopColor="var(--color-gold)" />
        <stop offset="100%" stopColor="var(--color-maroon)" />
      </linearGradient>
    </defs>
    
    {/* Flame outer aura */}
    <ellipse cx="30" cy="15" rx="9" ry="14" fill="url(#flameGlow)" opacity="0.8" />
    
    {/* Inner bright flame */}
    <path
      d="M30 6 C32 11 35 15 35 19 C35 23 32.5 25 30 25 C27.5 25 25 23 25 19 C25 15 28 11 30 6 Z"
      fill="#FFF9D2"
    />
    
    {/* Diya Bowl (Earthen lamp) */}
    <path
      d="M10 26 C12 38 22 43 30 43 C38 43 48 38 50 26 C45 28 35 29 30 29 C25 29 15 28 10 26 Z"
      fill="url(#lampBowl)"
      stroke="var(--color-gold)"
      strokeWidth="1.5"
    />
    
    {/* Stand / Base */}
    <ellipse cx="30" cy="44" rx="10" ry="2.5" fill="var(--color-gold-dark)" />
  </svg>
);

/**
 * Toran Garland (Marigold Flowers & Mango Leaves)
 * Hangs across the top of the screen / hero
 */
export const ToranGarland = () => {
  return (
    <div className="toran-container" aria-hidden="true">
      <svg
        className="toran-svg"
        viewBox="0 0 1200 70"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="marigoldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFAA00" />
            <stop offset="50%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#D9480F" />
          </linearGradient>
          <linearGradient id="marigoldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD43B" />
            <stop offset="100%" stopColor="#F59F00" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2B8A3E" />
            <stop offset="100%" stopColor="#1B4721" />
          </linearGradient>
        </defs>

        {/* Golden Hanging String */}
        <path
          d="M0,8 Q150,30 300,8 Q450,30 600,8 Q750,30 900,8 Q1050,30 1200,8"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="2.5"
          opacity="0.8"
        />

        {/* Repeating Loops with Leaves & Marigold Blossoms */}
        {[0, 150, 300, 450, 600, 750, 900, 1050, 1200].map((x, i) => (
          <g key={i} transform={`translate(${x}, 0)`}>
            {/* Mango Leaf */}
            <path
              d="M0,8 C-12,25 -8,52 0,65 C8,52 12,25 0,8 Z"
              fill="url(#leafGrad)"
              opacity="0.9"
            />
            {/* Central vein */}
            <line x1="0" y1="8" x2="0" y2="60" stroke="#40C057" strokeWidth="0.8" />

            {/* Marigold Flower Head */}
            <circle cx="0" cy="14" r="9" fill="url(#marigoldGrad1)" />
            <circle cx="0" cy="14" r="6" fill="url(#marigoldGrad2)" />
            <circle cx="0" cy="14" r="2.5" fill="#FFE066" />
          </g>
        ))}

        {/* Intermediate lower hanging blossoms */}
        {[75, 225, 375, 525, 675, 825, 975, 1125].map((x, i) => (
          <g key={`sub-${i}`} transform={`translate(${x}, 22)`}>
            <circle cx="0" cy="0" r="7" fill="url(#marigoldGrad2)" />
            <circle cx="0" cy="0" r="4" fill="url(#marigoldGrad1)" />
            <circle cx="0" cy="0" r="1.5" fill="#FFF9DB" />
          </g>
        ))}
      </svg>
      <style>{`
        .toran-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 52px;
          overflow: hidden;
          z-index: 10;
          pointer-events: none;
        }
        .toran-svg {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>
    </div>
  );
};

/**
 * Elegant Mandala / Rangoli Section Divider
 */
export const MandalaDivider = ({ className = "" }) => {
  return (
    <div className={`mandala-divider-wrapper ${className}`} aria-hidden="true">
      <div className="divider-line left-line" />
      <div className="mandala-center-emblem">
        <svg
          width="44"
          height="44"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="24" stroke="var(--color-gold)" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="30" cy="30" r="16" stroke="var(--color-gold)" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="6" fill="var(--color-gold)" />
          {/* 8 Floral Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
            <path
              key={idx}
              d="M30 30 Q36 20 30 14 Q24 20 30 30"
              fill="rgba(201, 162, 75, 0.4)"
              stroke="var(--color-gold)"
              strokeWidth="0.8"
              transform={`rotate(${angle} 30 30)`}
            />
          ))}
        </svg>
      </div>
      <div className="divider-line right-line" />

      <style>{`
        .mandala-divider-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 680px;
          margin: 1.5rem auto;
          padding: 0 1rem;
          gap: 1rem;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--border-gold),
            var(--color-gold)
          );
        }
        .right-line {
          background: linear-gradient(
            90deg,
            var(--color-gold),
            var(--border-gold),
            transparent
          );
        }
        .mandala-center-emblem {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          animation: slowSpin 35s linear infinite;
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mandala-center-emblem {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

/**
 * Royal Paisley Corner Art
 */
export const PaisleyCorner = ({ size = 32, position = "top-left" }) => {
  const getTransform = () => {
    switch (position) {
      case "top-right":
        return "scale(-1, 1)";
      case "bottom-left":
        return "scale(1, -1)";
      case "bottom-right":
        return "scale(-1, -1)";
      default:
        return "none";
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: getTransform() }}
      aria-hidden="true"
    >
      <path
        d="M6 6 Q25 4 35 15 Q45 27 34 38 Q25 46 16 38 Q8 30 18 20 Q24 15 28 22"
        stroke="var(--color-gold)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="rgba(201, 162, 75, 0.08)"
      />
      <circle cx="12" cy="12" r="2.5" fill="var(--color-marigold)" />
    </svg>
  );
};

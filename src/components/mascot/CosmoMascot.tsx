import React, { useId, useState } from 'react';

export type MascotState = 'idle' | 'hover' | 'thinking' | 'talking' | 'celebrating' | 'sleeping';

export interface CosmoMascotProps {
  state?: MascotState;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  showAura?: boolean;
}

const SIZE_MAP: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number> = {
  xs: 24,
  sm: 32,
  md: 44,
  lg: 64,
  xl: 96,
};

export const CosmoMascot: React.FC<CosmoMascotProps> = ({
  state = 'idle',
  size = 'md',
  className = '',
  onClick,
  interactive = true,
  showAura,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const rawId = useId().replace(/:/g, '');

  const pixelSize = typeof size === 'number' ? size : SIZE_MAP[size] ?? 44;
  const effectiveState: MascotState = state === 'idle' && isHovered && interactive ? 'hover' : state;

  const helmetGradId = `cosmo-helmet-${rawId}`;
  const visorGradId = `cosmo-visor-${rawId}`;
  const ringGradId = `cosmo-ring-${rawId}`;
  const auraGradId = `cosmo-aura-${rawId}`;
  const antennaGradId = `cosmo-antenna-${rawId}`;
  const celebrationGradId = `cosmo-celeb-${rawId}`;

  const shouldShowAura = showAura ?? (
    effectiveState === 'thinking' ||
    effectiveState === 'celebrating' ||
    effectiveState === 'hover'
  );

  const isClickable = Boolean(onClick);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className={`inline-flex items-center justify-center select-none relative ${
        isClickable ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full' : ''
      } ${className}`}
      style={{ width: pixelSize, height: pixelSize }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? 'button' : 'img'}
      aria-label="Cosmo Assistant Mascot"
      data-mascot-state={effectiveState}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width={pixelSize}
        height={pixelSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full transition-transform duration-300 ease-out ${
          effectiveState === 'idle' ? 'animate-gentle-bob' : ''
        } ${effectiveState === 'hover' ? 'scale-105 -translate-y-0.5' : ''} ${
          effectiveState === 'sleeping' ? 'opacity-85' : ''
        }`}
      >
        <defs>
          {/* Azure Cosmic Helmet Gradient */}
          <linearGradient id={helmetGradId} x1="50" y1="24" x2="50" y2="84" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7AC5FC" />
            <stop offset="50%" stopColor="#489EEB" />
            <stop offset="100%" stopColor="#256EB8" />
          </linearGradient>

          {/* Celestial Visor Starlit Gradient */}
          <linearGradient id={visorGradId} x1="50" y1="36" x2="50" y2="74" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="60%" stopColor="#1C2541" />
            <stop offset="100%" stopColor="#233554" />
          </linearGradient>

          {/* Planetary Orbital Ring Gradient */}
          <linearGradient id={ringGradId} x1="10" y1="50" x2="90" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.15" />
            <stop offset="35%" stopColor="#90CAF9" stopOpacity="0.85" />
            <stop offset="70%" stopColor="var(--color-mustard)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.3" />
          </linearGradient>

          {/* Antenna Stem Gradient */}
          <linearGradient id={antennaGradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8A65" />
            <stop offset="100%" stopColor="#90CAF9" />
          </linearGradient>

          {/* Cosmic Aura Gradient */}
          <radialGradient id={auraGradId} cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor={effectiveState === 'celebrating' ? 'var(--color-mustard)' : 'var(--color-accent)'}
              stopOpacity="0.45"
            />
            <stop
              offset="60%"
              stopColor={effectiveState === 'celebrating' ? '#FFD54F' : '#64B5F6'}
              stopOpacity="0.2"
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Celebration Ring Flare */}
          <linearGradient id={celebrationGradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>

        {/* ── Background Cosmic Aura ── */}
        {shouldShowAura && (
          <circle
            cx="50"
            cy="54"
            r="44"
            fill={`url(#${auraGradId})`}
            className="animate-pulse-aura"
          />
        )}

        {/* ── Back Half of Planetary Orbital Ring (behind head) ── */}
        <g transform="rotate(-18 50 54)">
          <path
            d="M 8 54 A 42 13 0 0 1 92 54"
            stroke={`url(#${ringGradId})`}
            strokeWidth={effectiveState === 'celebrating' ? '2.8' : '2'}
            strokeDasharray="4 2"
            opacity="0.65"
            fill="none"
          />
        </g>

        {/* ── Antennae (Left & Right with Peach-Tipped Glowing Spheres) ── */}
        <g id="cosmo-antennae">
          {/* Left Antenna */}
          <path
            d="M 41 31 Q 38 19 33 13"
            stroke={`url(#${antennaGradId})`}
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Antenna Glow */}
          <circle
            cx="33"
            cy="13"
            r={effectiveState === 'hover' || effectiveState === 'thinking' ? 6.5 : 5.2}
            fill="#FF8A65"
            opacity={effectiveState === 'hover' ? 1 : 0.9}
          />
          <circle cx="33" cy="13" r="2.4" fill="#FFFFFF" />

          {/* Right Antenna */}
          <path
            d="M 59 31 Q 62 19 67 13"
            stroke={`url(#${antennaGradId})`}
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right Antenna Glow */}
          <circle
            cx="67"
            cy="13"
            r={effectiveState === 'hover' || effectiveState === 'thinking' ? 6.5 : 5.2}
            fill="#FF8A65"
            opacity={effectiveState === 'hover' ? 1 : 0.9}
          />
          <circle cx="67" cy="13" r="2.4" fill="#FFFFFF" />
        </g>

        {/* ── Main Head & Helmet (Azure Cosmic Explorer) ── */}
        <g
          id="cosmo-head"
          transform={effectiveState === 'thinking' ? 'rotate(5 50 54)' : undefined}
          style={{ transformOrigin: '50px 54px', transition: 'transform 0.3s ease' }}
        >
          {/* Outer Helmet Sphere */}
          <circle
            cx="50"
            cy="54"
            r="29"
            fill={`url(#${helmetGradId})`}
            stroke="#FFFFFF"
            strokeWidth="2"
          />

          {/* Top Helmet Glass Sheen */}
          <path
            d="M 28 42 C 34 32, 66 32, 72 42 C 64 36, 36 36, 28 42 Z"
            fill="#FFFFFF"
            opacity="0.38"
          />

          {/* Celestial Visor */}
          <ellipse
            cx="50"
            cy="55"
            rx="22.5"
            ry="18.5"
            fill={`url(#${visorGradId})`}
            stroke="#FFFFFF"
            strokeWidth="1.2"
            opacity="0.98"
          />

          {/* Visor Ambient Cosmic Particles */}
          <circle cx="36" cy="45" r="0.8" fill="#FFFFFF" opacity="0.6" />
          <circle cx="64" cy="46" r="0.8" fill="#FFFFFF" opacity="0.6" />
          <circle cx="50" cy="42" r="0.6" fill="#FFF9C4" opacity="0.5" />

          {/* Visor Glare Reflex Arc */}
          <path
            d="M 33 48 C 38 42, 62 42, 67 48 C 60 45, 40 45, 33 48 Z"
            fill="#FFFFFF"
            opacity="0.22"
          />

          {/* ── Expressive Visor Eyes ── */}
          {effectiveState === 'sleeping' ? (
            /* Peaceful closed eyes */
            <g id="cosmo-eyes-sleeping">
              <path
                d="M 38 54 Q 42 58 46 54"
                stroke="#B0BEC5"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 54 54 Q 58 58 62 54"
                stroke="#B0BEC5"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          ) : effectiveState === 'celebrating' ? (
            /* Joyful laughing arc eyes (^ ^) */
            <g id="cosmo-eyes-celebrating">
              <path
                d="M 37 56 Q 42 48 47 56"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 53 56 Q 58 48 63 56"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          ) : effectiveState === 'thinking' ? (
            /* Inquisitive gaze shifted top-right */
            <g id="cosmo-eyes-thinking">
              {/* Left Eye */}
              <ellipse cx="43" cy="51" rx="3.8" ry="5.2" fill="#0D47A1" />
              <circle cx="44.8" cy="49.5" r="1.8" fill="#FFFFFF" />
              <circle cx="41.8" cy="53" r="0.8" fill="#FFFFFF" opacity="0.8" />
              {/* Inquisitive brow accent */}
              <path d="M 39 44 Q 43 43 47 45" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" fill="none" />

              {/* Right Eye */}
              <ellipse cx="59" cy="51" rx="3.8" ry="5.2" fill="#0D47A1" />
              <circle cx="60.8" cy="49.5" r="1.8" fill="#FFFFFF" />
              <circle cx="57.8" cy="53" r="0.8" fill="#FFFFFF" opacity="0.8" />
              {/* Brow accent */}
              <path d="M 55 45 Q 59 43 63 44" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </g>
          ) : (
            /* Standard open eyes (idle, hover, talking) */
            <g id="cosmo-eyes-default" className={effectiveState === 'idle' ? 'animate-mascot-blink' : ''}>
              {/* Left Eye */}
              <ellipse
                cx="42"
                cy="53"
                rx={effectiveState === 'hover' ? 4.2 : 3.8}
                ry={effectiveState === 'hover' ? 5.8 : 5.2}
                fill="#0D47A1"
              />
              <circle cx="43.6" cy="51.2" r={effectiveState === 'hover' ? 2.1 : 1.8} fill="#FFFFFF" />
              <circle cx="40.5" cy="55.2" r="0.8" fill="#FFFFFF" opacity="0.85" />

              {/* Right Eye */}
              <ellipse
                cx="58"
                cy="53"
                rx={effectiveState === 'hover' ? 4.2 : 3.8}
                ry={effectiveState === 'hover' ? 5.8 : 5.2}
                fill="#0D47A1"
              />
              <circle cx="59.6" cy="51.2" r={effectiveState === 'hover' ? 2.1 : 1.8} fill="#FFFFFF" />
              <circle cx="56.5" cy="55.2" r="0.8" fill="#FFFFFF" opacity="0.85" />
            </g>
          )}

          {/* ── Cheeks / Rosy Blush ── */}
          {(effectiveState === 'celebrating' || effectiveState === 'hover' || effectiveState === 'talking') && (
            <g id="cosmo-cheeks">
              <circle cx="34" cy="60" r="3" fill="#F48FB1" opacity={effectiveState === 'celebrating' ? 0.8 : 0.6} />
              <circle cx="66" cy="60" r="3" fill="#F48FB1" opacity={effectiveState === 'celebrating' ? 0.8 : 0.6} />
            </g>
          )}

          {/* ── Mouth / Vocal Expression ── */}
          {effectiveState === 'celebrating' ? (
            /* Wide joyful smile with accent tongue */
            <path
              d="M 44 62 Q 50 71 56 62 Z"
              fill="var(--color-accent)"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
          ) : effectiveState === 'talking' ? (
            /* Animated talking ellipse */
            <ellipse
              cx="50"
              cy="64"
              rx="4"
              ry="2.4"
              fill="#FFFFFF"
              className="animate-mascot-talk"
            />
          ) : effectiveState === 'thinking' ? (
            /* Curious 'o' mouth */
            <circle
              cx="50"
              cy="64.5"
              r="2.8"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              fill="none"
            />
          ) : effectiveState === 'sleeping' ? (
            /* Quiet resting smile */
            <path
              d="M 47 64.5 Q 50 66.5 53 64.5"
              stroke="#B0BEC5"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
          ) : effectiveState === 'hover' ? (
            /* Delighted perked-up smile */
            <path
              d="M 44 63 Q 50 69 56 63"
              stroke="#FFFFFF"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
          ) : (
            /* Gentle friendly resting smile */
            <path
              d="M 45 63.5 Q 50 67.5 55 63.5"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
          )}
        </g>

        {/* ── Front Half of Planetary Orbital Ring (passes in front of lower body) ── */}
        <g transform="rotate(-18 50 54)">
          <path
            d="M 92 54 A 42 13 0 0 1 8 54"
            stroke={`url(#${ringGradId})`}
            strokeWidth={effectiveState === 'celebrating' ? '2.8' : '2'}
            fill="none"
          />

          {/* Orbiting Star Particle */}
          <g
            className={effectiveState === 'thinking' ? 'animate-orbital-ring-fast' : 'animate-orbital-ring'}
            style={{ transformOrigin: '50px 54px' }}
          >
            {/* 4-Point Celestial Star */}
            <path
              d="M 92 54 L 90.5 52 L 88.5 50.5 L 90.5 49 L 92 47 L 93.5 49 L 95.5 50.5 L 93.5 52 Z"
              fill="var(--color-mustard)"
              stroke="#FFFFFF"
              strokeWidth="0.6"
            />
            <circle cx="92" cy="50.5" r="1.4" fill="#FFFFFF" />
          </g>
        </g>

        {/* ── Special State Overlays ── */}
        {effectiveState === 'celebrating' && (
          <g id="cosmo-sparkles" className="animate-star-twinkle">
            {/* Sparkle 1 */}
            <path d="M 18 28 L 20 24 L 22 28 L 26 30 L 22 32 L 20 36 L 18 32 L 14 30 Z" fill="#FFE082" />
            {/* Sparkle 2 */}
            <path d="M 80 22 L 82 19 L 84 22 L 87 23.5 L 84 25 L 82 28 L 80 25 L 77 23.5 Z" fill="#FFE082" />
            {/* Sparkle 3 */}
            <circle cx="24" cy="74" r="2" fill="var(--color-mustard)" />
            <circle cx="78" cy="72" r="2.2" fill="var(--color-accent)" />
          </g>
        )}

        {effectiveState === 'sleeping' && (
          <g id="cosmo-sleep-z" className="animate-mascot-z" style={{ fill: 'var(--color-accent)' }}>
            <text x="70" y="36" fontSize="9" fontWeight="bold" fontFamily="monospace">z</text>
            <text x="77" y="28" fontSize="11" fontWeight="bold" fontFamily="monospace">z</text>
            <text x="85" y="19" fontSize="13" fontWeight="bold" fontFamily="monospace">Z</text>
          </g>
        )}

        {effectiveState === 'talking' && (
          <g id="cosmo-talking-waves" opacity="0.65">
            <path d="M 76 50 Q 82 54 76 58" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M 80 46 Q 88 54 80 62" stroke="#90CAF9" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>
        )}
      </svg>
    </div>
  );
};

export default CosmoMascot;

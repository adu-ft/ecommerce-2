import React from 'react';
import { ShoeColor } from '../types';
import { Reveal, ParallaxBanner } from './animations/ScrollReveal';

interface MotionBannerProps {
  color?: ShoeColor;
}

export const MotionBanner: React.FC<MotionBannerProps> = () => {
  return (
    <section className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[660px] bg-[#CFC7BC] overflow-hidden select-none">
      {/* Editorial High-Resolution Photography with Smooth Parallax Depth */}
      <ParallaxBanner className="w-full h-full">
        <img
          src="/images/nOuVPha2Y5f55cZ511wPxs47Cg.png"
          alt="Runner in athletic motion wearing Adrix Aero 01"
          className="w-full h-full object-cover object-center"
        />
      </ParallaxBanner>

      {/* Measured Scrim Gradient for Typographic Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none z-10" />

      {/* Editorial Content Overlay with Premium Slide-up Reveal */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-20 z-20">
        <div className="max-w-2xl">
          <Reveal direction="up" delay={0.1} distance={24}>
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#E7E6DE]/90 uppercase block mb-2 sm:mb-3">
              Kinetic Calibration
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2} distance={30}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]">
              Engineered for <br />
              natural momentum.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3} distance={24}>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/80 font-light max-w-lg leading-relaxed">
              Unrestricted forward propulsion with zero pinch points. Calibrated for effortless rhythm through daily tempo shifts.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4} distance={20}>
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-white/70 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>8.2 oz Ultralight</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>6mm Anatomical Drop</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>68% Energy Return</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

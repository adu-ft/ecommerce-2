import React from 'react';
import { ShoeColor } from '../types';
import { Reveal, ParallaxBanner } from './animations/ScrollReveal';

interface WalkingLifestyleBannerProps {
  color?: ShoeColor;
  onExploreClick?: () => void;
}

export const WalkingLifestyleBanner: React.FC<WalkingLifestyleBannerProps> = ({
  onExploreClick,
}) => {
  return (
    <section className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[680px] overflow-hidden bg-[#D1C9BE] select-none">
      {/* Authentic High-Resolution Photography with Parallax Depth */}
      <ParallaxBanner className="w-full h-full">
        <img
          src="/images/QukKfg8w810NCo3cOnqvXXVFmvw.png"
          alt="Person walking in Adrix Aero 01 on sunlit urban pavement"
          className="w-full h-full object-cover object-center"
        />
      </ParallaxBanner>

      {/* Subtle overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none z-10" />

      {/* Text Overlay on Left/Middle Bottom with smooth scroll reveals */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-20 z-20">
        <div className="max-w-xl">
          <Reveal direction="up" delay={0.1} distance={28}>
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#1A1918]/80 uppercase block mb-2 sm:mb-3">
              Everyday Motion
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2} distance={32}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1918] leading-[1.08] text-balance">
              Soft enough <br />
              for all-day wear.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3} distance={24}>
            <p className="mt-2.5 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-[#3A3835] font-normal">
              Versatile enough for almost anywhere.
            </p>
          </Reveal>

          {onExploreClick && (
            <Reveal direction="up" delay={0.4} distance={20}>
              <div className="mt-4 sm:mt-6">
                <button
                  onClick={onExploreClick}
                  className="bg-[#191817]/90 hover:bg-[#191817] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-md backdrop-blur-sm transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ShoeColor } from '../types';
import { Reveal, ParallaxBanner } from './animations/ScrollReveal';

interface PreFooterSectionProps {
  color?: ShoeColor;
  onBuyClick: () => void;
}

export const PreFooterSection: React.FC<PreFooterSectionProps> = ({
  onBuyClick,
}) => {
  return (
    <section className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] bg-[#DDD6CB] overflow-hidden select-none">
      {/* Authentic High-Resolution Photography with Parallax Depth */}
      <ParallaxBanner className="w-full h-full">
        <img
          src="/images/N9ddNiDBjqK2QLJzNm3380Xfuhc.png"
          alt="Hand holding lightweight Adrix Aero 01 sneaker"
          className="w-full h-full object-cover object-center"
        />
      </ParallaxBanner>

      {/* Subtle vignette gradient for left text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 sm:from-white/50 via-white/20 sm:via-transparent to-transparent pointer-events-none z-10" />

      {/* Text & CTA on Left side with Scroll Reveals */}
      <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-12 md:p-16 lg:p-20 z-20">
        <div className="max-w-md">
          <Reveal direction="up" delay={0.1} distance={28}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#191817] leading-[1.12]">
              Your everyday <br />
              gear is here.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2} distance={22}>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-[#4A4742]">
              Lightweight. Breathable. Made for wherever the day takes you.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3} distance={20}>
            <div className="mt-5 sm:mt-6">
              <button
                onClick={onBuyClick}
                className="bg-[#191817] hover:bg-[#2F2D2A] text-white text-xs font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-md transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                Buy Aero 01
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

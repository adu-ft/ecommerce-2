import React from 'react';
import { ShoeColor } from '../types';
import { Reveal, StaggerContainer, StaggerItem } from './animations/ScrollReveal';
import { motion } from 'motion/react';

interface LifestyleSectionProps {
  color?: ShoeColor;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = () => {
  const moments = [
    {
      id: 'work',
      title: 'Work',
      tagline: 'Comfort that still looks put together.',
      imgSrc: '/images/SmOHRdhaujyyXIdptrZ3wCZcjuE.png',
    },
    {
      id: 'weekend',
      title: 'Weekend',
      tagline: 'Easy enough for errands, walks and casual plans.',
      imgSrc: '/images/JQJuYUd7XwEaVn83Loy8MhSCung.png',
    },
    {
      id: 'travel',
      title: 'Travel',
      tagline: 'Light to pack, effortless to move in all day.',
      imgSrc: '/images/3rN0VJ7QRPIvQS5LCgC1fNtnvl4.png',
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-[#E8E2D8]">
      {/* Kicker & Title */}
      <div className="mb-10 sm:mb-12 md:mb-16">
        <Reveal direction="up" delay={0.05} distance={16}>
          <span className="text-[11px] md:text-xs font-semibold tracking-widest text-[#78746E] uppercase">
            ONE PAIR, MORE DAYS.
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.12} distance={24}>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#191817] leading-[1.12]">
            From first coffee <br />
            to last train.
          </h2>
        </Reveal>
      </div>

      {/* 3 Column Grid with Individual Mobile Scroll Reveals */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {moments.map((m, idx) => (
          <StaggerItem
            key={m.id}
            direction="up"
            distance={24}
            delay={idx * 0.09}
            scale={true}
          >
            <motion.div
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#E8E2D7] shadow-sm border border-[#DDD6CB] transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              {/* Authentic Photographic Visual */}
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                <img
                  src={m.imgSrc}
                  alt={`${m.title} lifestyle with Adrix Aero 01`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Translucent Frosted Badge Box at Bottom */}
              <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/70 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-[#191817]">
                  {m.title}
                </h3>
                <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-[#615C54] leading-relaxed">
                  {m.tagline}
                </p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

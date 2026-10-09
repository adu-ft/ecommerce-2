import React from 'react';
import { ShoeBoxVisual } from './ShoeBoxVisual';
import { ShoeColor } from '../types';
import { Reveal, StaggerContainer, StaggerItem } from './animations/ScrollReveal';

interface UnboxingSectionProps {
  color?: ShoeColor;
}

export const UnboxingSection: React.FC<UnboxingSectionProps> = ({ color = 'sand' }) => {
  return (
    <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Kicker & Title */}
      <div className="mb-10 sm:mb-12 md:mb-16">
        <Reveal direction="up" delay={0.05} distance={16}>
          <span className="text-[11px] md:text-xs font-semibold tracking-widest text-[#78746E] uppercase">
            WHY YOU WILL LOVE IT
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.12} distance={24}>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#191817] leading-[1.12]">
            Comfort without <br className="hidden sm:inline" />
            the bulk.
          </h2>
        </Reveal>
      </div>

      {/* Grid: Shoebox Left, Features Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">
        {/* Left Column: Shoebox Graphic */}
        <div className="md:col-span-6 flex justify-center">
          <Reveal direction="up" delay={0.1} distance={28} scale={true}>
            <ShoeBoxVisual color={color} className="max-w-[420px] md:max-w-[500px]" />
          </Reveal>
        </div>

        {/* Right Column: Editorial Staggered Numbered List */}
        <div className="md:col-span-6 flex flex-col">
          <StaggerContainer className="divide-y divide-[#E2DCD3]">
            {/* Feature 01 */}
            <StaggerItem direction="up" distance={22} delay={0.06} className="pb-6 sm:pb-8 lg:pb-10 group">
              <div className="flex items-center gap-2 text-xs font-mono text-[#78746E] tracking-wider mb-2">
                <span>· 01</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#191817] tracking-tight group-hover:text-[#42403B] transition-colors">
                Lightweight cushioning
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#615C54] leading-relaxed max-w-md">
                Soft underfoot support without making the shoe feel heavy.
              </p>
            </StaggerItem>

            {/* Feature 02 */}
            <StaggerItem direction="up" distance={22} delay={0.12} className="py-6 sm:pb-8 lg:pb-10 group">
              <div className="flex items-center gap-2 text-xs font-mono text-[#78746E] tracking-wider mb-2">
                <span>· 02</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#191817] tracking-tight group-hover:text-[#42403B] transition-colors">
                Flexible construction
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#615C54] leading-relaxed max-w-md">
                Designed to move naturally with your foot throughout the day.
              </p>
            </StaggerItem>

            {/* Feature 03 */}
            <StaggerItem direction="up" distance={22} delay={0.18} className="pt-6 sm:pt-8 lg:pt-10 group">
              <div className="flex items-center gap-2 text-xs font-mono text-[#78746E] tracking-wider mb-2">
                <span>· 03</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#191817] tracking-tight group-hover:text-[#42403B] transition-colors">
                Breathable upper
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#615C54] leading-relaxed max-w-md">
                Engineered material keeps airflow moving when you&apos;re on your feet longer.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

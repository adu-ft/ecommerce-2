import React, { useState } from 'react';
import { ShoeColor } from '../types';
import { Reveal, StaggerContainer, StaggerItem } from './animations/ScrollReveal';
import { motion } from 'motion/react';

interface MaterialsSectionProps {
  color?: ShoeColor;
}

interface MaterialLayer {
  id: number;
  part: string;
  title: string;
  description: string;
  pinX: number; // percentage
  pinY: number; // percentage
}

const MATERIAL_LAYERS: MaterialLayer[] = [
  {
    id: 1,
    part: 'UPPER',
    title: 'Breathable Knit Upper',
    description: 'Flexible knit moves with your foot while allowing airflow.',
    pinX: 42,
    pinY: 28,
  },
  {
    id: 2,
    part: 'INSOLE',
    title: 'Soft Foam Insole',
    description: 'Lightweight cushioning absorbs pressure and gives you a softer feel.',
    pinX: 30,
    pinY: 46,
  },
  {
    id: 3,
    part: 'MIDSOLE',
    title: 'Responsive EVA Midsole',
    description: 'Springy foam provides balanced cushioning and energy return.',
    pinX: 56,
    pinY: 64,
  },
  {
    id: 4,
    part: 'OUTSOLE',
    title: 'Durable Rubber Outsole',
    description: 'High-grip rubber adds dependable traction and durability.',
    pinX: 76,
    pinY: 82,
  },
];

export const MaterialsSection: React.FC<MaterialsSectionProps> = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-[#E8E2D8]">
      {/* Kicker & Title */}
      <div className="max-w-2xl mb-10 sm:mb-12 md:mb-16">
        <Reveal direction="up" delay={0.05} distance={16}>
          <span className="text-[11px] md:text-xs font-semibold tracking-widest text-[#78746E] uppercase">
            BUILT WITH PURPOSE
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.12} distance={24}>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#191817] leading-[1.12]">
            Every material <br />
            earns its place.
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.18} distance={20}>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#615C54] leading-relaxed">
            Breathable, cushioned, and durable materials work together to keep every step light, comfortable, and ready for everyday wear.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-16 items-center">
        {/* Left Column: Authentic Photography with Interactive Hotspot Pins */}
        <div className="md:col-span-6 lg:col-span-7">
          <Reveal direction="up" delay={0.1} distance={24} scale={true}>
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#DDD6CB] aspect-[1493/983] w-full bg-[#EAE5DC] group select-none">
              {/* Authentic Layered Materials Photograph Filling Frame */}
              <img
                src="/images/Av5UshpIyNDMENo3ZfeuEKqF0uI.png"
                alt="Adrix Aero 01 Materials Breakdown"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Interactive Hotspot Pins 01-04 */}
              {MATERIAL_LAYERS.map((layer) => {
                const isSelected = activeLayer === layer.id;
                return (
                  <motion.button
                    key={layer.id}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveLayer(isSelected ? null : layer.id)}
                    onMouseEnter={() => setActiveLayer(layer.id)}
                    style={{ left: `${layer.pinX}%`, top: `${layer.pinY}%` }}
                    aria-label={`Inspect ${layer.title}`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold transition-all duration-300 z-20 cursor-pointer ${
                      isSelected
                        ? 'bg-[#191817] text-white scale-125 shadow-lg ring-4 ring-black/20'
                        : 'bg-white/95 text-[#191817] shadow-md hover:scale-110 border border-[#DDD6CB]'
                    }`}
                  >
                    0{layer.id}
                  </motion.button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Right Column: Staggered Numbered Callout Cards */}
        <div className="md:col-span-6 lg:col-span-5">
          <StaggerContainer className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
            {MATERIAL_LAYERS.map((layer, idx) => {
              const isSelected = activeLayer === layer.id;
              return (
                <StaggerItem
                  key={layer.id}
                  direction="up"
                  distance={22}
                  delay={idx * 0.08}
                >
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveLayer(isSelected ? null : layer.id)}
                    onMouseEnter={() => setActiveLayer(layer.id)}
                    onMouseLeave={() => setActiveLayer(null)}
                    className={`p-3.5 sm:p-4 lg:p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#EAE5DC] border-[#191817] shadow-sm sm:translate-x-1'
                        : 'bg-transparent border-[#E2DCD3] hover:border-[#C5BBAE] hover:bg-[#F0ECE3]/60'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Circular Outline Number Badge */}
                      <span
                        className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-mono font-medium transition-colors ${
                          isSelected
                            ? 'bg-[#191817] text-white'
                            : 'border border-[#78746E] text-[#42403B]'
                        }`}
                      >
                        0{layer.id}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-xs tracking-wider uppercase text-[#78746E]">
                            {layer.part}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold text-[#191817] mt-0.5">
                          {layer.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#615C54] mt-1 leading-relaxed">
                          {layer.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

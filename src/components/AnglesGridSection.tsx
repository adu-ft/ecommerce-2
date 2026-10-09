import React, { useState } from 'react';
import { ShoeColor } from '../types';
import { Reveal, StaggerContainer, StaggerItem } from './animations/ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';

interface AnglesGridSectionProps {
  color?: ShoeColor;
}

export const AnglesGridSection: React.FC<AnglesGridSectionProps> = () => {
  const [selectedAngle, setSelectedAngle] = useState<string | null>(null);
  const [mobileFilter, setMobileFilter] = useState<string>('all');

  const angleCards = [
    {
      id: 'angle-1',
      label: '3/4 Perspective',
      shortLabel: '3/4 Profile',
      description: 'Sculptured contour and natural forefoot flex line',
      imgSrc: '/images/BAYqWQT9drkzpX8TyvjvMgdvP4.png',
    },
    {
      id: 'angle-2',
      label: 'Front Toe Box',
      shortLabel: 'Toe Box',
      description: 'Breathable engineered knit mesh and symmetric lace cage',
      imgSrc: '/images/UtAOh8vEhkwjXllnpp9YDiXxI.png',
    },
    {
      id: 'angle-3',
      label: 'Heel Counter',
      shortLabel: 'Heel',
      description: 'Curved heel geometry with reinforced pull loop',
      imgSrc: '/images/NRWSc3ouFvc5nRE6CnkKQjOtgvg.png',
    },
    {
      id: 'angle-4',
      label: 'Outsole Tread & Side',
      shortLabel: 'Outsole',
      description: 'Zoned multi-surface traction pods and flex channels',
      imgSrc: '/images/CDhy0WIJXCieaRFNZOPTkyYMg.png',
    },
  ];

  const displayedCards =
    mobileFilter === 'all'
      ? angleCards
      : angleCards.filter((c) => c.id === mobileFilter);

  return (
    <section className="bg-[#141413] text-white py-14 sm:py-20 md:py-28 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Kicker & Title */}
        <div className="max-w-xl mb-8 sm:mb-12 md:mb-16">
          <Reveal direction="up" delay={0.05} distance={16}>
            <span className="text-[11px] md:text-xs font-semibold tracking-widest text-[#8E8B85] uppercase">
              DESIGNED FROM EVERY ANGLE
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.12} distance={24}>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F7F6F2] leading-[1.12]">
              Looks simple. <br />
              Feels considered.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.18} distance={20}>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#A8A49C] leading-relaxed">
              From the texture of the upper to the finish of the outsole, every material balances comfort, durability, and a clean everyday look.
            </p>
          </Reveal>
        </div>

        {/* Mobile Angle Quick Switcher Chips */}
        <div className="sm:hidden flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 scrollbar-none">
          <button
            onClick={() => setMobileFilter('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              mobileFilter === 'all'
                ? 'bg-white text-[#191817] shadow-sm'
                : 'bg-white/10 text-white/70 hover:text-white'
            }`}
          >
            All 4 Angles
          </button>
          {angleCards.map((card) => (
            <button
              key={card.id}
              onClick={() => setMobileFilter(card.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                mobileFilter === card.id
                  ? 'bg-white text-[#191817] shadow-sm'
                  : 'bg-white/10 text-white/70 hover:text-white'
              }`}
            >
              {card.shortLabel}
            </button>
          ))}
        </div>

        {/* 2x2 Grid of Studio Shots with Individual Mobile-Optimized Scroll Reveals */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {displayedCards.map((card, idx) => {
            return (
              <StaggerItem
                key={card.id}
                direction="up"
                distance={24}
                delay={idx * 0.08}
                scale={true}
              >
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedAngle(card.id)}
                  className="group relative rounded-2xl overflow-hidden border border-[#2B2A27] hover:border-[#4E4B46] transition-all duration-300 cursor-pointer aspect-[4/3] w-full bg-[#161614] shadow-md"
                >
                  {/* Sneaker Photography Filling Frame Edge-to-Edge */}
                  <img
                    src={card.imgSrc}
                    alt={card.label}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle bottom gradient overlay for legibility */}
                  <div className="absolute inset-x-0 bottom-0 pt-16 sm:pt-20 pb-4 sm:pb-5 px-4 sm:px-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-between text-xs text-[#8E8B85] pointer-events-none">
                    <div>
                      <span className="font-medium text-[#F0ECE1] text-sm sm:text-base block">
                        {card.label}
                      </span>
                      <span className="text-[11px] text-[#A8A49C] mt-0.5 line-clamp-1 sm:line-clamp-none">
                        {card.description}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#D1CCC3] bg-white/10 px-2.5 py-1 rounded backdrop-blur-sm group-hover:bg-white/20 transition-colors shrink-0 ml-2">
                      Inspect ↗
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Modal Lightbox if clicked */}
        <AnimatePresence>
          {selectedAngle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
              onClick={() => setSelectedAngle(null)}
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-[#1B1B19] border border-[#3E3C37] rounded-2xl p-5 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto text-center relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedAngle(null)}
                  className="absolute top-4 right-4 text-[#8E8B85] hover:text-white text-lg p-2 cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
                <h3 className="text-xl font-medium text-white mb-1">
                  {angleCards.find((c) => c.id === selectedAngle)?.label}
                </h3>
                <p className="text-sm text-[#A8A49C] mb-5">
                  {angleCards.find((c) => c.id === selectedAngle)?.description}
                </p>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#161614] border border-[#2B2A27]">
                  <img
                    src={angleCards.find((c) => c.id === selectedAngle)?.imgSrc}
                    alt={angleCards.find((c) => c.id === selectedAngle)?.label}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

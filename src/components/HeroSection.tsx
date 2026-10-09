import React from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoeColor } from '../types';
import { SneakerVisual } from './SneakerVisual';
import { Reveal } from './animations/ScrollReveal';
import { PRODUCT_PRICE_FORMATTED } from '../constants/pricing';

interface HeroSectionProps {
  color?: ShoeColor;
  onColorChange?: (color: ShoeColor) => void;
  onBuyClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  color = 'sand',
  onBuyClick,
}) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('comfort-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#E7E6DE] min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100vh-4.5rem)] sm:min-h-[calc(100dvh-4.5rem)] flex flex-col justify-between px-4 sm:px-8 lg:px-16 pt-3 sm:pt-6 md:pt-8 pb-3 sm:pb-5 transition-colors duration-300">
      {/* ========================================================
          DESKTOP & TABLET LAYOUT (md and above)
          Covering the screen full with balanced 2-column layout
          ======================================================== */}
      <div className="hidden md:flex flex-1 w-full max-w-7xl mx-auto items-center">
        <div className="w-full grid grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column: Headline, Specs, Price, Action */}
          <div className="col-span-5 lg:col-span-5 flex flex-col items-start z-10">
            {/* Introducing kicker with premium tracking */}
            <Reveal direction="up" delay={0.05} distance={16}>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#78746E] uppercase font-['Outfit']">
                INTRODUCING : AERO 01
              </span>
            </Reveal>

            {/* Main Title with premium Outfit font */}
            <Reveal direction="up" delay={0.12} distance={24}>
              <h1 className="mt-3 text-4xl lg:text-5xl xl:text-[64px] font-bold tracking-tight text-[#191817] leading-[1.05] text-balance font-['Outfit']">
                Made for <br />
                every day.
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal direction="up" delay={0.18} distance={20}>
              <p className="mt-4 text-base lg:text-lg text-[#615C54] leading-relaxed max-w-md font-light">
                Lightweight comfort built for long days, daily walks, and everything in between.
              </p>
            </Reveal>

            {/* Price */}
            <Reveal direction="up" delay={0.24} distance={18}>
              <div className="mt-5 text-3xl lg:text-4xl font-bold text-[#191817] tabular-nums tracking-tight font-['Outfit']">
                {PRODUCT_PRICE_FORMATTED}
              </div>
            </Reveal>

            {/* Buy Action Button */}
            <Reveal direction="up" delay={0.3} distance={20}>
              <div className="mt-6 flex items-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onBuyClick}
                  className="bg-[#191817] hover:bg-[#2F2D2A] text-white text-sm font-semibold tracking-wide px-9 py-3.5 rounded-md transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer font-['Outfit']"
                >
                  Buy Aero 01
                </motion.button>
              </div>
            </Reveal>

            {/* Metadata below Button */}
            <Reveal direction="up" delay={0.36} distance={18}>
              <div className="mt-8 pt-5 border-t border-[#D5CEC2] w-full flex flex-col gap-1.5 text-xs text-[#78746E]">
                <span className="font-semibold tracking-[0.16em] uppercase text-[10px] text-[#42403B] font-['Outfit']">
                  LIGHTWEIGHT / BREATHABLE
                </span>
                <div className="flex items-center gap-2">
                  <span>Free shipping</span>
                  <span aria-hidden="true">·</span>
                  <span>30-day returns</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="flex items-center text-[#191817]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current text-[#191817]" />
                    ))}
                  </div>
                  <span className="font-bold text-[#191817]">4.8</span>
                  <span aria-hidden="true">·</span>
                  <span>326 reviews</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Sneaker Visual with Organic Floating Motion */}
          <div className="col-span-7 lg:col-span-7 relative flex items-center justify-center min-h-[380px] lg:min-h-[460px] xl:min-h-[500px]">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileTap={{ scale: 0.96 }}
              className="w-full max-w-xl flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={color}
                  initial={{ opacity: 0, scale: 0.94, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full flex items-center justify-center"
                >
                  {color === 'sand' ? (
                    <img
                      src="/images/hero_transparent.png"
                      alt="Adrix Aero 01 Floating Sneaker in Sand"
                      className="w-full h-auto max-h-[420px] lg:max-h-[500px] xl:max-h-[540px] object-contain drop-shadow-2xl"
                    />
                  ) : (
                    <SneakerVisual color={color} angle="hero-floating" className="w-full max-h-[440px] lg:max-h-[500px]" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE ADAPTIVE FULL-SCREEN LAYOUT (< md)
          When opened on mobile, fully covers screen with
          Headline -> Floating Sneaker -> Price & Buy CTA
          ======================================================== */}
      <div className="flex md:hidden flex-col justify-between flex-1 w-full max-w-lg mx-auto py-1">
        {/* Top: Header Info */}
        <div className="flex flex-col items-start pt-1">
          <Reveal direction="up" delay={0.05} distance={12}>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#78746E] uppercase font-['Outfit']">
              INTRODUCING : AERO 01
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1} distance={16}>
            <h1 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-[#191817] leading-[1.08] text-balance font-['Outfit']">
              Made for every day.
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.15} distance={14}>
            <p className="mt-1.5 text-xs sm:text-sm text-[#615C54] leading-relaxed max-w-xs font-light">
              Lightweight comfort built for long days, daily walks, and everything in between.
            </p>
          </Reveal>
        </div>

        {/* Center: The Floating Sneaker Visual */}
        <div className="relative flex-1 flex items-center justify-center min-h-[190px] max-h-[38vh] my-1 sm:my-2">
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center select-none cursor-pointer"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={color}
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full flex items-center justify-center"
              >
                {color === 'sand' ? (
                  <img
                    src="/images/hero_transparent.png"
                    alt="Adrix Aero 01 Floating Sneaker in Sand"
                    className="w-full h-auto max-h-[200px] xs:max-h-[240px] sm:max-h-[290px] object-contain drop-shadow-xl"
                  />
                ) : (
                  <SneakerVisual color={color} angle="hero-floating" className="w-full max-h-[220px] xs:max-h-[260px]" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom: Price, Buy Action & Trust Metadata (No color swatches) */}
        <div className="flex flex-col gap-2.5 pt-1">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#191817] tabular-nums font-['Outfit']">
              {PRODUCT_PRICE_FORMATTED}
            </div>
            <span className="text-[11px] font-medium text-[#78746E] uppercase tracking-wider font-['Outfit']">
              Everyday Knit
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onBuyClick}
            className="w-full bg-[#191817] active:bg-[#2F2D2A] text-white text-sm font-semibold tracking-wide py-3.5 px-5 rounded-md shadow-sm flex items-center justify-center gap-2 cursor-pointer font-['Outfit']"
          >
            Buy Aero 01 · {PRODUCT_PRICE_FORMATTED}
          </motion.button>

          {/* Micro trust row */}
          <div className="flex items-center justify-between text-[11px] text-[#78746E] pt-2 border-t border-[#D5CEC2]">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center text-[#191817]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-current text-[#191817]" />
                ))}
              </div>
              <span className="font-semibold text-[#191817]">4.8</span>
              <span>(326 reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-medium text-[#42403B]">
              <span>Free shipping</span>
              <span>·</span>
              <span>30-day returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          BOTTOM SCROLL INDICATOR
          Shows that there is more content below and smoothly scrolls
          ======================================================== */}
      <div className="w-full flex justify-center pt-1.5 sm:pt-2">
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-0.5 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-[#78746E] hover:text-[#191817] transition-colors cursor-pointer"
          aria-label="Scroll down to explore"
        >
          <span className="opacity-75 group-hover:opacity-100 font-['Outfit']">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-3.5 h-3.5 text-[#78746E] group-hover:text-[#191817]" />
          </motion.div>
        </button>
      </div>
    </section>
  );
};

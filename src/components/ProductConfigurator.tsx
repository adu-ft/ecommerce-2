import React, { useState } from 'react';
import { ShoeColor } from '../types';
import { SneakerVisual, COLOR_CONFIG } from './SneakerVisual';
import { Truck, RotateCcw, ArrowLeftRight, ShieldCheck, Star } from 'lucide-react';
import { Reveal } from './animations/ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_PRICE_FORMATTED } from '../constants/pricing';

interface ProductConfiguratorProps {
  selectedColor: ShoeColor;
  onColorChange: (color: ShoeColor) => void;
  onAddToCart: (color: ShoeColor, size: string) => void;
  onOpenSizeGuide: () => void;
}

export const SIZES = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

export const ProductConfigurator: React.FC<ProductConfiguratorProps> = ({
  selectedColor,
  onColorChange,
  onAddToCart,
  onOpenSizeGuide,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeWarning, setSizeWarning] = useState<boolean>(false);
  const [isAddedFeedback, setIsAddedFeedback] = useState<boolean>(false);

  const handleBuyNow = () => {
    if (!selectedSize) {
      setSizeWarning(true);
      setTimeout(() => setSizeWarning(false), 2500);
      return;
    }
    setSizeWarning(false);
    onAddToCart(selectedColor, selectedSize);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 2000);
  };

  return (
    <section id="buy-section" className="py-14 sm:py-20 md:py-28 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-[#E8E2D8]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-16 items-center">
        {/* Left Column: Visual Showcase of the Shoe Pair */}
        <div className="md:col-span-6 lg:col-span-7 flex flex-col items-center justify-center bg-transparent p-2 sm:p-6 lg:p-8 relative">
          <Reveal direction="up" delay={0.1} distance={24} scale={true} className="w-full flex items-center justify-center">
            <motion.div
              whileTap={{ scale: 0.96 }}
              className="w-full max-w-lg flex items-center justify-center cursor-pointer select-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedColor}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex items-center justify-center"
                >
                  {selectedColor === 'sand' ? (
                    <img
                      src="/images/D8isAN7KeeOP4EHfZhJcpyules.png"
                      alt="Adrix Aero 01 Pair in Sand"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                  ) : (
                    <SneakerVisual color={selectedColor} angle="pair-configurator" className="w-full" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </Reveal>
        </div>

        {/* Right Column: PDP Purchase Module */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col">
          {/* Kicker */}
          <Reveal direction="up" delay={0.05} distance={16}>
            <span className="text-[11px] md:text-xs font-semibold tracking-widest text-[#78746E] uppercase">
              AERO 01
            </span>
          </Reveal>

          {/* Title */}
          <Reveal direction="up" delay={0.1} distance={22}>
            <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#191817]">
              Your everyday pair.
            </h2>
          </Reveal>

          {/* Reviews Rating */}
          <Reveal direction="up" delay={0.15} distance={18}>
            <div className="mt-2.5 flex items-center gap-2 text-xs text-[#615C54]">
              <div className="flex items-center text-[#191817]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current text-[#191817]" />
                ))}
              </div>
              <span className="font-medium text-[#191817]">4.8</span>
              <span aria-hidden="true">·</span>
              <span>326 reviews</span>
            </div>
          </Reveal>

          {/* Price */}
          <Reveal direction="up" delay={0.18} distance={18}>
            <div className="mt-3.5 text-2xl font-semibold text-[#191817] tabular-nums">
              {PRODUCT_PRICE_FORMATTED}
            </div>
          </Reveal>

          {/* Subtitle */}
          <Reveal direction="up" delay={0.22} distance={18}>
            <p className="mt-1.5 text-sm text-[#615C54] leading-relaxed">
              Lightweight knit sneakers built for all-day comfort.
            </p>
          </Reveal>

          {/* Color Selector */}
          <Reveal direction="up" delay={0.25} distance={18}>
            <div className="mt-5 pt-4 border-t border-[#DDD6CB]">
              <span className="text-xs font-medium text-[#42403B]">Available in:</span>
              <div className="mt-2 flex flex-wrap items-center gap-4 sm:gap-5 text-xs text-[#191817]">
                {(['sand', 'navy', 'pink'] as ShoeColor[]).map((cKey) => {
                  const conf = COLOR_CONFIG[cKey];
                  const isSelected = selectedColor === cKey;
                  return (
                    <motion.button
                      key={cKey}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => onColorChange(cKey)}
                      className="flex items-center gap-1.5 cursor-pointer text-xs"
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected ? 'border-[#191817]' : 'border-transparent'
                        }`}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: conf.swatchHex }}
                        />
                      </span>
                      <span className={isSelected ? 'font-semibold text-[#191817]' : 'text-[#615C54]'}>
                        {conf.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Size Selector */}
          <Reveal direction="up" delay={0.28} distance={18}>
            <div className="mt-5 pt-5 border-t border-[#E8E2D8]">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-[#42403B]">Sizes: US 7-12</span>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="text-[#615C54] hover:text-[#191817] underline decoration-neutral-300 underline-offset-4 cursor-pointer"
                >
                  Size guide
                </button>
              </div>

              {/* Size Buttons Grid */}
              <div className={`grid grid-cols-4 sm:grid-cols-6 gap-2 mt-3 p-1 rounded-xl transition-all ${
                sizeWarning ? 'ring-2 ring-red-500 bg-red-500/10' : ''
              }`}>
                {SIZES.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <motion.button
                      key={size}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => {
                        setSelectedSize(size);
                        setSizeWarning(false);
                      }}
                      className={`py-2 sm:py-2.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#191817] text-white border-[#191817] shadow-sm font-semibold'
                          : 'bg-[#F2EFE9] text-[#191817] border-[#D9D2C5] hover:border-[#A8A093] hover:bg-[#EAE4D8]'
                      }`}
                    >
                      US {size}
                    </motion.button>
                  );
                })}
              </div>
              {sizeWarning && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 font-medium mt-1.5"
                >
                  Please select a shoe size before adding to bag
                </motion.p>
              )}
            </div>
          </Reveal>

          {/* Buy CTA */}
          <Reveal direction="up" delay={0.32} distance={18}>
            <div className="mt-6">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleBuyNow}
                className="w-full bg-[#191817] hover:bg-[#2D2A26] active:bg-black text-white text-sm font-semibold py-3.5 sm:py-4 px-6 rounded-lg transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                {isAddedFeedback ? (
                  <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1.5 text-[#A3E635]"
                  >
                    <span>Added to Bag</span> ✓
                  </motion.span>
                ) : selectedSize ? (
                  <span>Add to Bag — {PRODUCT_PRICE_FORMATTED} (US {selectedSize})</span>
                ) : (
                  <span>Select Size to Add — {PRODUCT_PRICE_FORMATTED}</span>
                )}
              </motion.button>

              <div className="mt-4 flex flex-col gap-2 text-xs text-[#78746E]">
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#191817]" />
                  <span>Free shipping on all orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5 text-[#191817]" />
                  <span>30-day risk-free home trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowLeftRight className="w-3.5 h-3.5 text-[#191817]" />
                  <span>Free, hassle-free size exchanges</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#191817]" />
                  <span>Backed by 1-year manufacturing warranty</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

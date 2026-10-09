import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_PRICE_FORMATTED } from '../constants/pricing';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onBuyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onBuyClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#E7E6DE]/90 backdrop-blur-md border-[#CEC6B9] shadow-xs'
          : 'bg-[#E7E6DE] border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-16 sm:h-18 flex items-center justify-between">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl sm:text-2xl font-black tracking-tight text-[#191817] shrink-0 font-['Outfit']"
        >
          ADRIX.
        </a>

        {/* Zone 2: Navigation links for desktop */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-medium text-[#615C54]">
          <button
            onClick={() => scrollTo('comfort-section')}
            className="hover:text-[#191817] transition-colors cursor-pointer"
          >
            Comfort
          </button>
          <button
            onClick={() => scrollTo('materials-section')}
            className="hover:text-[#191817] transition-colors cursor-pointer"
          >
            Materials
          </button>
          <button
            onClick={() => scrollTo('angles-section')}
            className="hover:text-[#191817] transition-colors cursor-pointer"
          >
            360° Angles
          </button>
          <button
            onClick={() => scrollTo('moments-section')}
            className="hover:text-[#191817] transition-colors cursor-pointer"
          >
            Lifestyle
          </button>
          <button
            onClick={() => scrollTo('reviews-section')}
            className="hover:text-[#191817] transition-colors cursor-pointer"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollTo('faq-section')}
            className="hover:text-[#191817] transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart Bag Button */}
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={onOpenCart}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg text-xs font-medium text-[#191817] hover:bg-[#EAE5DC] transition-colors cursor-pointer"
            aria-label="Open Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Bag</span>
            <span className="font-mono text-[11px] bg-[#191817] text-white rounded-full w-4.5 h-4.5 flex items-center justify-center shrink-0">
              {cartCount}
            </span>
          </motion.button>

          {/* Quick Buy CTA */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={onBuyClick}
            className="hidden sm:inline-flex px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-[#191817] hover:bg-[#2F2D2A] rounded-md transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            Buy Aero 01
          </motion.button>

          {/* Mobile & Tablet Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#191817] hover:bg-[#EAE5DC] rounded-lg cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile & Tablet Menu Dropdown with Spring Slide */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#F5F4F0] border-b border-[#E2DCD3] px-4 sm:px-8 py-4 flex flex-col gap-3 text-sm font-medium text-[#615C54] shadow-md overflow-hidden"
          >
            <button
              onClick={() => scrollTo('comfort-section')}
              className="text-left py-2 hover:text-[#191817] transition-colors cursor-pointer"
            >
              Comfort
            </button>
            <button
              onClick={() => scrollTo('materials-section')}
              className="text-left py-2 hover:text-[#191817] transition-colors cursor-pointer"
            >
              Materials
            </button>
            <button
              onClick={() => scrollTo('angles-section')}
              className="text-left py-2 hover:text-[#191817] transition-colors cursor-pointer"
            >
              360° Angles
            </button>
            <button
              onClick={() => scrollTo('moments-section')}
              className="text-left py-2 hover:text-[#191817] transition-colors cursor-pointer"
            >
              Lifestyle
            </button>
            <button
              onClick={() => scrollTo('reviews-section')}
              className="text-left py-2 hover:text-[#191817] transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollTo('faq-section')}
              className="text-left py-2 hover:text-[#191817] transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <div className="pt-2 sm:hidden border-t border-[#E2DCD3]">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBuyClick();
                }}
                className="w-full py-2.5 bg-[#191817] text-white text-xs font-semibold rounded-md shadow-xs cursor-pointer"
              >
                Buy Aero 01 — {PRODUCT_PRICE_FORMATTED}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

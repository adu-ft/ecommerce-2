import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FaqItem } from '../types';
import { Reveal, StaggerContainer, StaggerItem } from './animations/ScrollReveal';

interface FaqSectionProps {
  onContactClick: () => void;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'sizing',
    question: 'How does sizing fit?',
    answer:
      'True to size. If you are between sizes or prefer a roomier fit with thicker socks, we recommend sizing up a half size. The flexible knit upper naturally contours and gently accommodates wide feet without pinching.',
  },
  {
    id: 'all-day',
    question: 'Can I wear them all day?',
    answer:
      'Yes, that is exactly what Aero 01 was designed for. The responsive EVA midsole and memory-foam insole absorb ground impact continuously, helping reduce foot fatigue whether you are standing on concrete, walking miles, or commuting.',
  },
  {
    id: 'travel',
    question: 'Are they suitable for walking/travel?',
    answer:
      'Absolutely. At just 8.2 ounces per shoe, they pack virtually flat in carry-on luggage. The slip-on collar makes airport security effortless, and the multi-surface rubber tread handles city pavements, cobblestones, and transit stations.',
  },
  {
    id: 'cleaning',
    question: 'How do I clean them?',
    answer:
      'For daily upkeep, spot clean with warm water, mild detergent, and a soft cloth. For deeper cleans, remove the insole and laces, place in a delicates laundry bag, and run on a cold, gentle cycle. Always air dry away from direct heat.',
  },
  {
    id: 'returns',
    question: 'What is the return policy?',
    answer:
      'We offer a 30-day risk-free trial. Take them outside, wear them on your daily routine, test them thoroughly. If you are not completely satisfied, return or exchange them for free—no questions asked.',
  },
];

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openIds, setOpenIds] = useState<string[]>(['sizing']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 md:py-28 px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto">
      {/* Kicker & Title */}
      <div className="mb-10 sm:mb-12 md:mb-16">
        <Reveal direction="up" delay={0.05} distance={16}>
          <span className="text-[11px] md:text-xs font-semibold tracking-widest text-[#78746E] uppercase">
            FAQ
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.12} distance={24}>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#191817] leading-[1.12]">
            Frequently <br />
            Asked Questions
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.18} distance={18}>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#615C54]">
            Clear answers on fit, comfort, care, and returns—before your first step.
          </p>
        </Reveal>
      </div>

      {/* Accordion List with Mobile-Individual Scroll Reveals */}
      <StaggerContainer className="flex flex-col gap-2.5 sm:gap-3">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIds.includes(item.id);
          return (
            <StaggerItem
              key={item.id}
              direction="up"
              distance={20}
              delay={idx * 0.05}
            >
              <div className="bg-[#EAE5DC]/80 hover:bg-[#EAE5DC] border border-[#DDD6CB] rounded-xl transition-colors duration-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-3.5 sm:py-4.5 px-4 sm:px-6 flex items-center justify-between text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-[#191817] pr-2">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#615C54] shrink-0 ml-2"
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-[#57534C] leading-relaxed border-t border-[#DDD6CB]/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Still curious? Card */}
      <Reveal direction="up" delay={0.15} distance={22}>
        <div className="mt-6 p-5 sm:p-8 bg-[#EAE5DC] border border-[#DDD6CB] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-[#191817]">
              Still curious?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#615C54]">
              Need another detail? Our team can help with fit, care, and returns.
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onContactClick}
            className="shrink-0 px-5 py-2.5 bg-[#968A7D] hover:bg-[#85796D] text-white text-xs font-medium rounded-md transition-colors cursor-pointer"
          >
            Contact Us
          </motion.button>
        </div>
      </Reveal>
    </section>
  );
};

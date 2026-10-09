import React from 'react';
import { Star } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './animations/ScrollReveal';
import { motion } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="bg-[#141413] text-white py-14 sm:py-20 md:py-28 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 md:mb-16">
          <div>
            <Reveal direction="up" delay={0.05} distance={16}>
              <span className="text-[11px] md:text-xs font-semibold tracking-widest text-[#8E8B85] uppercase">
                REVIEWS
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.12} distance={24}>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F7F6F2] leading-[1.12]">
                The pair people <br />
                keep reaching for.
              </h2>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.18} distance={18}>
            <div className="flex items-center gap-2 text-sm text-[#A8A49C]">
              <div className="flex items-center text-[#F7F6F2]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-white" />
                ))}
              </div>
              <span className="font-semibold text-white">4.8</span>
              <span aria-hidden="true">·</span>
              <span>326 reviews</span>
            </div>
          </Reveal>
        </div>

        {/* Featured Testimonial Card */}
        <Reveal direction="up" delay={0.08} distance={24} scale={true}>
          <div className="bg-[#1C1B19] rounded-2xl p-6 sm:p-10 md:p-12 border border-[#2D2B28] mb-6 md:mb-8 transition-all hover:border-[#4E4B46]">
            <div className="flex items-center gap-1 text-white mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-white" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-2xl md:text-3xl font-normal text-[#F2EFE9] leading-snug tracking-tight max-w-4xl">
              &ldquo;I wore them on a full day around the city and forgot I had new shoes on. The comfort is genuinely that easy.&rdquo;
            </blockquote>

            {/* Author Maya L. */}
            <div className="mt-6 sm:mt-8 flex items-center gap-3.5">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full overflow-hidden bg-[#383632] border border-[#524E48] shrink-0">
                <img
                  src="/images/XTCB2zYIjc6zzKfo0OK7NTzy6DU.jpg"
                  alt="Maya L."
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Maya L. · Brooklyn, NY</div>
                <div className="text-xs text-[#8E8B85]">Verified buyer · Sand / 8.5</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2-Column Testimonials Grid with Individual Mobile Reveals */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Review 2: Elias M. */}
          <StaggerItem direction="up" distance={22} delay={0.05} scale={true}>
            <motion.div
              whileTap={{ scale: 0.99 }}
              className="bg-[#1C1B19] rounded-2xl p-6 sm:p-8 border border-[#2D2B28] flex flex-col justify-between hover:border-[#4E4B46] transition-all h-full"
            >
              <div>
                <div className="flex items-center gap-1 text-white mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-white" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-[#DDD8CE] leading-relaxed">
                  &ldquo;The shape is understated in the best way. They go with tailored trousers, denim, and everything in between.&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#35332F] border border-[#4A4742] shrink-0">
                  <img
                    src="/images/E70khUOPo4SPW1Ec67FW1kHGxJs.jpg"
                    alt="Elias M."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Elias M. · Copenhagen, DK</div>
                  <div className="text-[11px] text-[#8E8B85]">Verified buyer · Sand / 10</div>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Review 3: Sofia R. */}
          <StaggerItem direction="up" distance={22} delay={0.12} scale={true}>
            <motion.div
              whileTap={{ scale: 0.99 }}
              className="bg-[#1C1B19] rounded-2xl p-6 sm:p-8 border border-[#2D2B28] flex flex-col justify-between hover:border-[#4E4B46] transition-all h-full"
            >
              <div>
                <div className="flex items-center gap-1 text-white mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-white" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-[#DDD8CE] leading-relaxed">
                  &ldquo;The cushioning has that rare balance: soft enough for long walks, still clean enough to wear out at night.&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#35332F] border border-[#4A4742] shrink-0">
                  <img
                    src="/images/KRlbOzHH1zRQv0295NGliewVM.jpg"
                    alt="Sofia R."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Sofia R. · Toronto, CA</div>
                  <div className="text-[11px] text-[#8E8B85]">Verified buyer · Sand / 7.5</div>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

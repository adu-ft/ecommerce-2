import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Reveal } from './animations/ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121211] text-[#A8A49C] pt-12 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-16 border-t border-[#242320]">
      <div className="max-w-7xl mx-auto">
        <Reveal direction="up" delay={0.05} distance={18}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-[#242320]">
            {/* Brand info */}
            <div className="max-w-md">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 sm:mb-3">
                ADRIX.
              </div>
              <p className="text-xs text-[#8E8B85] leading-relaxed">
                Adrix makes versatile everyday footwear designed for comfort, movement, and effortless style.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#DDD8CE]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter / X</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E6B65] text-center sm:text-left">
          <div>© 2026 ADRIX. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="hover:text-[#A8A49C] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#A8A49C] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#A8A49C] cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { ShoeColor } from '../types';

interface ShoeBoxVisualProps {
  color?: ShoeColor;
  className?: string;
}

export const ShoeBoxVisual: React.FC<ShoeBoxVisualProps> = ({
  className = '',
}) => {
  return (
    <div className={`relative w-full flex items-center justify-center select-none ${className}`}>
      <div className="relative w-full max-w-[480px] aspect-[815/1086] overflow-hidden rounded-2xl shadow-xl border border-[#DDD6CB] bg-[#E5DFD5] transition-transform duration-500 hover:scale-[1.02]">
        <img
          src="/images/EuT0VpVMKkKnARCkhGzpZRS0X0.png"
          alt="Adrix Aero 01 Pair nestled in open cardboard shoebox with tissue paper"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

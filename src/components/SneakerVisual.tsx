import React from 'react';
import { ShoeColor } from '../types';

interface SneakerVisualProps {
  color?: ShoeColor;
  angle?: 'hero-floating' | 'profile-flat' | 'front-angle' | 'front-direct' | 'heel-rear' | 'sole-tread' | 'pair-in-box' | 'held-by-hand' | 'pair-configurator';
  className?: string;
  interactive?: boolean;
}

export const COLOR_CONFIG: Record<
  ShoeColor,
  {
    name: string;
    upperPrimary: string;
    upperSecondary: string;
    upperHighlight: string;
    soleBase: string;
    soleShade: string;
    laces: string;
    collar: string;
    swatchHex: string;
  }
> = {
  sand: {
    name: 'Sand',
    upperPrimary: '#D4C9BA',
    upperSecondary: '#C6BAAA',
    upperHighlight: '#E4DDD0',
    soleBase: '#EAE5DB',
    soleShade: '#D2C8BA',
    laces: '#DDD5C8',
    collar: '#BFAF9D',
    swatchHex: '#D4C9BA',
  },
  navy: {
    name: 'Navy',
    upperPrimary: '#26313E',
    upperSecondary: '#1C2530',
    upperHighlight: '#384657',
    soleBase: '#DDD7CD',
    soleShade: '#C2BCB2',
    laces: '#334050',
    collar: '#17202A',
    swatchHex: '#26313E',
  },
  pink: {
    name: 'Pink',
    upperPrimary: '#D3ADA5',
    upperSecondary: '#C19B93',
    upperHighlight: '#E5C4BC',
    soleBase: '#EDE6E0',
    soleShade: '#D8C8BF',
    laces: '#DFBEB6',
    collar: '#B58E86',
    swatchHex: '#D3ADA5',
  },
};

export const SneakerVisual: React.FC<SneakerVisualProps> = ({
  color = 'sand',
  angle = 'hero-floating',
  className = '',
}) => {
  const c = COLOR_CONFIG[color] || COLOR_CONFIG.sand;

  if (angle === 'hero-floating') {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        <svg
          viewBox="0 0 680 480"
          className="w-full h-auto drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="150%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="18" />
              <feOffset dx="8" dy="36" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.18" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <pattern id={`knit-pattern-${color}`} width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M0 4 Q 2 2, 4 4 T 8 4" stroke={c.upperSecondary} strokeWidth="0.8" fill="none" opacity="0.45" />
              <path d="M0 8 Q 2 6, 4 8 T 8 8" stroke={c.upperSecondary} strokeWidth="0.8" fill="none" opacity="0.45" />
              <circle cx="2" cy="4" r="0.75" fill={c.upperHighlight} opacity="0.3" />
              <circle cx="6" cy="8" r="0.75" fill={c.upperHighlight} opacity="0.3" />
            </pattern>

            <linearGradient id={`upper-grad-${color}`} x1="120" y1="120" x2="520" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={c.upperHighlight} />
              <stop offset="45%" stopColor={c.upperPrimary} />
              <stop offset="100%" stopColor={c.upperSecondary} />
            </linearGradient>

            <linearGradient id={`sole-grad-${color}`} x1="80" y1="260" x2="560" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor={c.soleBase} />
              <stop offset="75%" stopColor={c.soleShade} />
              <stop offset="100%" stopColor={c.upperSecondary} />
            </linearGradient>

            <linearGradient id="soft-ground-shadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A1918" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#1A1918" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#1A1918" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Realistic Floor Contact Shadow */}
          <ellipse cx="360" cy="415" rx="210" ry="24" fill="url(#soft-ground-shadow)" filter="blur(16px)" />
          <ellipse cx="350" cy="418" rx="140" ry="12" fill="#1A1918" fillOpacity="0.12" filter="blur(8px)" />

          {/* Group rotated dynamically like in the reference header */}
          <g transform="rotate(-15 340 240) translate(20, -10)">
            {/* Outsole Under-Sole Tread base */}
            <path
              d="M 140 310 C 170 330, 240 348, 330 344 C 420 340, 480 326, 545 288 C 555 282, 560 274, 552 268 C 540 260, 520 264, 490 274 C 410 300, 310 305, 220 292 C 170 285, 142 278, 130 286 C 122 292, 126 302, 140 310 Z"
              fill={c.soleShade}
              opacity="0.8"
            />

            {/* Sculptural Ergonomic Midsole with horizontal undulating ribbed ridges */}
            <path
              d="M 132 284 
                 C 126 270, 132 250, 150 240
                 C 180 236, 210 242, 240 248
                 C 285 258, 340 264, 400 258
                 C 460 252, 505 235, 542 212
                 C 552 206, 562 216, 558 230
                 C 550 256, 535 280, 505 296
                 C 455 324, 385 334, 310 330
                 C 230 326, 175 310, 132 284 Z"
              fill={`url(#sole-grad-${color})`}
            />

            {/* Sculptural Midsole Rib Ridges (The signature Adrix Aero wavy ridges) */}
            <g stroke={c.soleShade} strokeWidth="3.2" strokeLinecap="round" opacity="0.85">
              <path d="M 152 272 C 160 284, 172 296, 185 304" />
              <path d="M 176 268 C 188 282, 202 298, 218 306" />
              <path d="M 204 265 C 218 282, 234 300, 252 310" />
              <path d="M 234 263 C 250 282, 268 303, 288 313" />
              <path d="M 266 262 C 284 282, 304 304, 326 314" />
              <path d="M 300 263 C 318 283, 340 304, 364 314" />
              <path d="M 336 263 C 354 283, 376 302, 402 311" />
              <path d="M 374 261 C 392 280, 415 298, 442 305" />
              <path d="M 412 257 C 430 274, 454 290, 480 295" />
              <path d="M 450 250 C 468 266, 492 278, 514 282" />
              <path d="M 488 238 C 504 252, 524 262, 540 263" />
            </g>

            {/* Subtle top rim light on the midsole */}
            <path
              d="M 150 240 C 200 244, 280 260, 400 258 C 470 250, 520 228, 548 212"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Knit Upper Main Body */}
            <path
              d="M 150 240 
                 C 142 215, 140 185, 155 160 
                 C 168 138, 192 135, 215 152 
                 C 228 162, 248 185, 275 192 
                 C 315 202, 360 196, 410 195 
                 C 460 194, 505 198, 542 212 
                 C 515 228, 470 248, 400 258 
                 C 340 264, 285 258, 240 248 
                 C 210 242, 180 236, 150 240 Z"
              fill={`url(#upper-grad-${color})`}
            />

            {/* Knitted Texture Pattern Overlay */}
            <path
              d="M 150 240 
                 C 142 215, 140 185, 155 160 
                 C 168 138, 192 135, 215 152 
                 C 228 162, 248 185, 275 192 
                 C 315 202, 360 196, 410 195 
                 C 460 194, 505 198, 542 212 
                 C 515 228, 470 248, 400 258 
                 C 340 264, 285 258, 240 248 
                 C 210 242, 180 236, 150 240 Z"
              fill={`url(#knit-pattern-${color})`}
            />

            {/* Sock-like Elastic Heel Collar & Tongue Opening */}
            <path
              d="M 155 160 C 165 145, 185 140, 205 152 C 220 162, 235 180, 248 190 C 235 190, 218 182, 202 170 C 182 156, 168 155, 155 160 Z"
              fill={c.collar}
            />

            {/* Heel Pull-Tab Ribbon */}
            <path
              d="M 148 175 C 138 168, 134 154, 142 144 C 148 136, 158 138, 164 148 L 158 166 Z"
              fill={c.upperSecondary}
              stroke={c.upperPrimary}
              strokeWidth="1.5"
            />

            {/* Engineered Knit Forefoot Breathability Ventilation Micro-Perforations */}
            <g fill={c.upperSecondary} opacity="0.6">
              <ellipse cx="440" cy="215" rx="3.5" ry="1.8" />
              <ellipse cx="460" cy="216" rx="3.5" ry="1.8" />
              <ellipse cx="480" cy="218" rx="3.5" ry="1.8" />
              <ellipse cx="500" cy="220" rx="3.5" ry="1.8" />

              <ellipse cx="430" cy="225" rx="3.5" ry="1.8" />
              <ellipse cx="450" cy="226" rx="3.5" ry="1.8" />
              <ellipse cx="470" cy="228" rx="3.5" ry="1.8" />
              <ellipse cx="490" cy="230" rx="3.5" ry="1.8" />

              <ellipse cx="420" cy="235" rx="3.5" ry="1.8" />
              <ellipse cx="440" cy="236" rx="3.5" ry="1.8" />
              <ellipse cx="460" cy="238" rx="3.5" ry="1.8" />
              <ellipse cx="480" cy="240" rx="3.5" ry="1.8" />
            </g>

            {/* Eyestay Structure & Lacing System */}
            <g stroke={c.laces} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Lacing Crosses */}
              <line x1="272" y1="196" x2="310" y2="204" />
              <line x1="298" y1="198" x2="345" y2="208" />
              <line x1="335" y1="202" x2="385" y2="212" />
              <line x1="375" y1="206" x2="425" y2="216" />
            </g>

            {/* Eyelet Holes */}
            <g fill={c.upperSecondary} stroke={c.upperHighlight} strokeWidth="1">
              <circle cx="270" cy="196" r="3.2" />
              <circle cx="308" cy="204" r="3.2" />
              <circle cx="296" cy="198" r="3.2" />
              <circle cx="343" cy="208" r="3.2" />
              <circle cx="333" cy="202" r="3.2" />
              <circle cx="383" cy="212" r="3.2" />
              <circle cx="373" cy="206" r="3.2" />
              <circle cx="423" cy="216" r="3.2" />
            </g>

            {/* Toe Cap reinforced knit curve */}
            <path
              d="M 505 210 C 532 216, 548 224, 542 232 C 530 240, 510 244, 492 245"
              stroke={c.upperHighlight}
              strokeWidth="1.8"
              opacity="0.4"
            />
          </g>
        </svg>
      </div>
    );
  }

  if (angle === 'profile-flat') {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        <svg viewBox="0 0 640 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`flat-sole-grad-${color}`} x1="80" y1="280" x2="560" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor={c.soleBase} />
              <stop offset="70%" stopColor={c.soleShade} />
              <stop offset="100%" stopColor={c.upperSecondary} />
            </linearGradient>

            <linearGradient id={`flat-upper-grad-${color}`} x1="120" y1="120" x2="520" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={c.upperHighlight} />
              <stop offset="50%" stopColor={c.upperPrimary} />
              <stop offset="100%" stopColor={c.upperSecondary} />
            </linearGradient>
          </defs>

          {/* Floor Shadow */}
          <ellipse cx="320" cy="355" rx="230" ry="18" fill="#1A1918" fillOpacity="0.12" filter="blur(10px)" />
          <ellipse cx="320" cy="355" rx="160" ry="10" fill="#1A1918" fillOpacity="0.16" filter="blur(5px)" />

          {/* Sole */}
          <path
            d="M 120 300 
               C 105 282, 115 260, 138 250
               C 175 244, 215 250, 255 254
               C 310 260, 375 262, 440 252
               C 495 244, 535 228, 555 215
               C 568 228, 558 250, 535 272
               C 485 315, 395 330, 290 326
               C 195 322, 140 314, 120 300 Z"
            fill={`url(#flat-sole-grad-${color})`}
          />

          {/* Midsole Ridges */}
          <g stroke={c.soleShade} strokeWidth="3" strokeLinecap="round" opacity="0.9">
            <path d="M 145 280 C 155 294, 168 306, 185 312" />
            <path d="M 175 275 C 188 290, 205 304, 222 312" />
            <path d="M 210 270 C 225 288, 245 304, 265 312" />
            <path d="M 248 268 C 265 288, 288 306, 310 314" />
            <path d="M 288 267 C 308 288, 332 306, 356 314" />
            <path d="M 330 266 C 352 286, 378 304, 405 310" />
            <path d="M 375 264 C 398 282, 425 298, 452 304" />
            <path d="M 422 258 C 445 274, 472 288, 498 292" />
            <path d="M 470 250 C 492 264, 516 274, 536 276" />
          </g>

          {/* Knit Upper */}
          <path
            d="M 138 250 
               C 128 220, 125 180, 145 150
               C 160 125, 190 120, 218 140
               C 235 152, 258 178, 290 185
               C 340 196, 395 190, 448 190
               C 498 190, 532 198, 555 215
               C 535 228, 495 244, 440 252
               C 375 262, 310 260, 255 254
               C 215 250, 175 244, 138 250 Z"
            fill={`url(#flat-upper-grad-${color})`}
          />

          {/* Elastic Sock Collar */}
          <path
            d="M 145 150 C 158 135, 182 130, 205 142 C 222 152, 240 172, 256 182 C 238 182, 218 172, 198 160 C 178 148, 160 146, 145 150 Z"
            fill={c.collar}
          />

          {/* Lacing */}
          <g stroke={c.laces} strokeWidth="4.5" strokeLinecap="round">
            <line x1="285" y1="188" x2="328" y2="198" />
            <line x1="315" y1="190" x2="368" y2="202" />
            <line x1="355" y1="193" x2="410" y2="206" />
            <line x1="398" y1="197" x2="452" y2="210" />
          </g>

          {/* Micro dots */}
          <g fill={c.upperSecondary} opacity="0.5">
            <circle cx="460" cy="210" r="2.5" />
            <circle cx="480" cy="212" r="2.5" />
            <circle cx="500" cy="215" r="2.5" />
            <circle cx="450" cy="222" r="2.5" />
            <circle cx="470" cy="224" r="2.5" />
            <circle cx="490" cy="226" r="2.5" />
          </g>
        </svg>
      </div>
    );
  }

  if (angle === 'front-angle') {
    return (
      <div className={`relative flex items-center justify-center select-none bg-[#141413] p-8 rounded-xl ${className}`}>
        <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl" fill="none">
          <ellipse cx="200" cy="350" rx="110" ry="16" fill="#000000" fillOpacity="0.5" filter="blur(8px)" />
          {/* 3/4 perspective shoe view */}
          <g transform="translate(40, 20)">
            {/* Outsole */}
            <path
              d="M 90 280 C 120 310, 200 320, 240 285 C 255 250, 240 230, 210 215 C 160 210, 110 220, 90 250 Z"
              fill={c.soleBase}
            />
            {/* Upper */}
            <path
              d="M 105 245 C 95 210, 115 150, 140 130 C 165 110, 185 140, 195 180 C 215 190, 230 220, 220 250 C 190 260, 140 255, 105 245 Z"
              fill={c.upperPrimary}
            />
            {/* Tongue & Collar */}
            <ellipse cx="160" cy="145" rx="22" ry="32" fill={c.collar} />
            {/* Laces */}
            <line x1="145" y1="165" x2="185" y2="180" stroke={c.laces} strokeWidth="4" strokeLinecap="round" />
            <line x1="140" y1="185" x2="190" y2="200" stroke={c.laces} strokeWidth="4" strokeLinecap="round" />
            <line x1="135" y1="205" x2="195" y2="220" stroke={c.laces} strokeWidth="4" strokeLinecap="round" />
            {/* Midsole ridges */}
            <path d="M 110 270 Q 140 290 180 295" stroke={c.soleShade} strokeWidth="3" fill="none" />
            <path d="M 125 285 Q 155 305 195 305" stroke={c.soleShade} strokeWidth="3" fill="none" />
          </g>
        </svg>
      </div>
    );
  }

  if (angle === 'front-direct') {
    return (
      <div className={`relative flex items-center justify-center select-none bg-[#141413] p-8 rounded-xl ${className}`}>
        <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl" fill="none">
          <ellipse cx="200" cy="350" rx="100" ry="16" fill="#000000" fillOpacity="0.5" filter="blur(8px)" />
          {/* Direct Front View */}
          <g transform="translate(50, 20)">
            {/* Outsole flared edges */}
            <path
              d="M 80 290 C 80 320, 220 320, 220 290 C 235 250, 220 240, 200 235 C 150 230, 100 235, 80 250 Z"
              fill={c.soleBase}
            />
            {/* Midsole texture */}
            <path d="M 90 280 C 120 300, 180 300, 210 280" stroke={c.soleShade} strokeWidth="4" fill="none" />
            <path d="M 95 295 C 125 315, 175 315, 205 295" stroke={c.soleShade} strokeWidth="4" fill="none" />
            {/* Toe Box front curvature */}
            <path
              d="M 95 245 C 90 200, 110 140, 150 120 C 190 140, 210 200, 205 245 C 180 255, 120 255, 95 245 Z"
              fill={c.upperPrimary}
            />
            {/* Collar center */}
            <ellipse cx="150" cy="135" rx="20" ry="26" fill={c.collar} />
            {/* Symmetrical Lacing down the center */}
            <line x1="130" y1="150" x2="170" y2="150" stroke={c.laces} strokeWidth="4" strokeLinecap="round" />
            <line x1="126" y1="170" x2="174" y2="170" stroke={c.laces} strokeWidth="4" strokeLinecap="round" />
            <line x1="122" y1="190" x2="178" y2="190" stroke={c.laces} strokeWidth="4" strokeLinecap="round" />
            <line x1="118" y1="210" x2="182" y2="210" stroke={c.laces} strokeWidth="4" strokeLinecap="round" />
            {/* Toe knit ventilation */}
            <g fill={c.upperSecondary} opacity="0.5">
              <circle cx="140" cy="235" r="2.5" />
              <circle cx="150" cy="235" r="2.5" />
              <circle cx="160" cy="235" r="2.5" />
              <circle cx="145" cy="242" r="2.5" />
              <circle cx="155" cy="242" r="2.5" />
            </g>
          </g>
        </svg>
      </div>
    );
  }

  if (angle === 'heel-rear') {
    return (
      <div className={`relative flex items-center justify-center select-none bg-[#141413] p-8 rounded-xl ${className}`}>
        <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl" fill="none">
          <ellipse cx="200" cy="350" rx="100" ry="16" fill="#000000" fillOpacity="0.5" filter="blur(8px)" />
          {/* Rear Heel View */}
          <g transform="translate(50, 20)">
            {/* Flared Midsole heel cup */}
            <path
              d="M 75 280 C 75 325, 225 325, 225 280 C 220 245, 195 240, 150 240 C 105 240, 80 245, 75 280 Z"
              fill={c.soleBase}
            />
            {/* Sculptured wave ripples across heel */}
            <path d="M 85 275 Q 150 295 215 275" stroke={c.soleShade} strokeWidth="4" fill="none" />
            <path d="M 90 292 Q 150 312 210 292" stroke={c.soleShade} strokeWidth="4" fill="none" />
            <path d="M 100 308 Q 150 322 200 308" stroke={c.soleShade} strokeWidth="3" fill="none" />
            {/* Knit Upper Heel Counter */}
            <path
              d="M 95 242 C 90 200, 110 145, 150 135 C 190 145, 210 200, 205 242 C 175 248, 125 248, 95 242 Z"
              fill={c.upperPrimary}
            />
            {/* Rear Pull Tab */}
            <rect x="144" y="118" width="12" height="42" rx="3" fill={c.upperSecondary} stroke={c.upperHighlight} strokeWidth="1" />
            <circle cx="150" cy="126" r="3" fill={c.collar} />
          </g>
        </svg>
      </div>
    );
  }

  if (angle === 'sole-tread') {
    return (
      <div className={`relative flex items-center justify-center select-none bg-[#141413] p-8 rounded-xl ${className}`}>
        <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl" fill="none">
          <ellipse cx="200" cy="350" rx="100" ry="16" fill="#000000" fillOpacity="0.5" filter="blur(8px)" />
          {/* Outsole Tread View */}
          <g transform="translate(60, 20) rotate(-10 140 200)">
            {/* Sole Silhouette */}
            <path
              d="M 100 70 C 160 65, 180 110, 180 160 C 180 200, 160 230, 155 260 C 150 295, 165 315, 160 340 C 150 360, 110 360, 100 340 C 95 315, 110 295, 105 260 C 100 230, 80 200, 80 160 C 80 110, 90 70, 100 70 Z"
              fill={c.soleBase}
              stroke={c.soleShade}
              strokeWidth="4"
            />
            {/* Ergonomic flex grooves */}
            <g stroke={c.soleShade} strokeWidth="3" strokeLinecap="round">
              <path d="M 95 100 Q 130 110 165 100" />
              <path d="M 92 125 Q 130 135 168 125" />
              <path d="M 90 150 Q 130 160 170 150" />
              <path d="M 90 175 Q 130 185 170 175" />
              <path d="M 92 200 Q 130 210 168 200" />
              <path d="M 100 235 Q 130 245 160 235" />
              <path d="M 102 270 Q 130 280 158 270" />
              <path d="M 105 300 Q 130 310 155 300" />
              <path d="M 106 325 Q 130 335 154 325" />
            </g>
            {/* Center Decoupled Flex Channel */}
            <path d="M 130 90 L 130 335" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.6" />
            {/* Adrix Logo Stamp in Sole arch */}
            <text x="114" y="248" fill={c.soleShade} fontSize="9" fontWeight="bold" letterSpacing="1">
              ADRIX.
            </text>
          </g>
        </svg>
      </div>
    );
  }

  if (angle === 'pair-configurator' || angle === 'pair-in-box') {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        <svg viewBox="0 0 680 440" className="w-full h-auto drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`pair-upper-grad-${color}`} x1="120" y1="120" x2="520" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={c.upperHighlight} />
              <stop offset="45%" stopColor={c.upperPrimary} />
              <stop offset="100%" stopColor={c.upperSecondary} />
            </linearGradient>

            <linearGradient id={`pair-sole-grad-${color}`} x1="80" y1="260" x2="560" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor={c.soleBase} />
              <stop offset="70%" stopColor={c.soleShade} />
              <stop offset="100%" stopColor={c.upperSecondary} />
            </linearGradient>
          </defs>

          {/* Floor Shadow for pair */}
          <ellipse cx="340" cy="390" rx="280" ry="24" fill="#1A1918" fillOpacity="0.14" filter="blur(14px)" />
          <ellipse cx="320" cy="390" rx="200" ry="14" fill="#1A1918" fillOpacity="0.16" filter="blur(7px)" />

          {/* Background Shoe (Left, slightly back) */}
          <g transform="translate(60, 40) rotate(-12 280 220) scale(0.92)">
            {/* Outsole */}
            <path
              d="M 130 284 C 124 270, 130 250, 148 240 C 178 236, 208 242, 238 248 C 283 258, 338 264, 398 258 C 458 252, 503 235, 540 212 C 550 206, 560 216, 556 230 C 548 256, 533 280, 503 296 C 453 324, 383 334, 308 330 C 228 326, 173 310, 130 284 Z"
              fill={c.soleShade}
              opacity="0.9"
            />
            {/* Upper */}
            <path
              d="M 148 240 C 140 215, 138 185, 153 160 C 166 138, 190 135, 213 152 C 226 162, 246 185, 273 192 C 313 202, 358 196, 408 195 C 458 194, 503 198, 540 212 C 513 228, 468 248, 398 258 C 338 264, 283 258, 238 248 C 208 242, 178 236, 148 240 Z"
              fill={`url(#pair-upper-grad-${color})`}
            />
            {/* Collar & Laces */}
            <path d="M 153 160 C 163 145, 183 140, 203 152 C 218 162, 233 180, 246 190 C 233 190, 216 182, 200 170 C 180 156, 166 155, 153 160 Z" fill={c.collar} />
            <g stroke={c.laces} strokeWidth="4" strokeLinecap="round">
              <line x1="270" y1="196" x2="308" y2="204" />
              <line x1="296" y1="198" x2="343" y2="208" />
              <line x1="333" y1="202" x2="383" y2="212" />
              <line x1="373" y1="206" x2="423" y2="216" />
            </g>
          </g>

          {/* Foreground Shoe (Right, front) */}
          <g transform="translate(130, 70) rotate(-6 320 220) scale(0.96)">
            {/* Midsole */}
            <path
              d="M 132 284 
                 C 126 270, 132 250, 150 240
                 C 180 236, 210 242, 240 248
                 C 285 258, 340 264, 400 258
                 C 460 252, 505 235, 542 212
                 C 552 206, 562 216, 558 230
                 C 550 256, 535 280, 505 296
                 C 455 324, 385 334, 310 330
                 C 230 326, 175 310, 132 284 Z"
              fill={`url(#pair-sole-grad-${color})`}
            />
            {/* Midsole Ridges */}
            <g stroke={c.soleShade} strokeWidth="3.2" strokeLinecap="round" opacity="0.85">
              <path d="M 152 272 C 160 284, 172 296, 185 304" />
              <path d="M 176 268 C 188 282, 202 298, 218 306" />
              <path d="M 204 265 C 218 282, 234 300, 252 310" />
              <path d="M 234 263 C 250 282, 268 303, 288 313" />
              <path d="M 266 262 C 284 282, 304 304, 326 314" />
              <path d="M 300 263 C 318 283, 340 304, 364 314" />
              <path d="M 336 263 C 354 283, 376 302, 402 311" />
              <path d="M 374 261 C 392 280, 415 298, 442 305" />
              <path d="M 412 257 C 430 274, 454 290, 480 295" />
              <path d="M 450 250 C 468 266, 492 278, 514 282" />
              <path d="M 488 238 C 504 252, 524 262, 540 263" />
            </g>
            {/* Upper */}
            <path
              d="M 150 240 
                 C 142 215, 140 185, 155 160 
                 C 168 138, 192 135, 215 152 
                 C 228 162, 248 185, 275 192 
                 C 315 202, 360 196, 410 195 
                 C 460 194, 505 198, 542 212 
                 C 515 228, 470 248, 400 258 
                 C 340 264, 285 258, 240 248 
                 C 210 242, 180 236, 150 240 Z"
              fill={`url(#pair-upper-grad-${color})`}
            />
            {/* Knit pattern */}
            <path
              d="M 150 240 C 142 215, 140 185, 155 160 C 168 138, 192 135, 215 152 C 228 162, 248 185, 275 192 C 315 202, 360 196, 410 195 C 460 194, 505 198, 542 212 C 515 228, 470 248, 400 258 C 340 264, 285 258, 240 248 C 210 242, 180 236, 150 240 Z"
              fill={`url(#knit-pattern-${color})`}
            />
            {/* Collar */}
            <path d="M 155 160 C 165 145, 185 140, 205 152 C 220 162, 235 180, 248 190 C 235 190, 218 182, 202 170 C 182 156, 168 155, 155 160 Z" fill={c.collar} />
            {/* Pull tab */}
            <path d="M 148 175 C 138 168, 134 154, 142 144 C 148 136, 158 138, 164 148 L 158 166 Z" fill={c.upperSecondary} stroke={c.upperPrimary} strokeWidth="1.5" />
            {/* Lacing */}
            <g stroke={c.laces} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="272" y1="196" x2="310" y2="204" />
              <line x1="298" y1="198" x2="345" y2="208" />
              <line x1="335" y1="202" x2="385" y2="212" />
              <line x1="375" y1="206" x2="425" y2="216" />
            </g>
          </g>
        </svg>
      </div>
    );
  }

  // Fallback to default
  return null;
};

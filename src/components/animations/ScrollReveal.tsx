import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: boolean;
  className?: string;
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 24,
  scale = false,
  className = '',
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPos,
        scale: scale ? 0.96 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      // amount: 'some' guarantees that on mobile screens of any height,
      // the animation fires as soon as the element crosses into view
      viewport={{ once: true, amount: 'some', margin: '0px 0px -30px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple-grade smooth spring-like bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  threshold?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  delay?: number;
  scale?: boolean;
  className?: string;
}

/**
 * Mobile-First StaggerItem:
 * Uses its own viewport intersection trigger. On mobile, where items stack vertically,
 * each card animates in the exact moment the user scrolls down to it.
 * On desktop, where multiple items are in view simultaneously, delay creates a natural cascade.
 */
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  direction = 'up',
  distance = 24,
  duration = 0.65,
  delay = 0,
  scale = false,
  className = '',
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getInitialPosition(),
        scale: scale ? 0.96 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 'some', margin: '0px 0px -30px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxBannerProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const ParallaxBanner: React.FC<ParallaxBannerProps> = ({
  children,
  className = '',
  intensity = 0.06,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity * 100}%`, `${intensity * 100}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#191817] origin-left z-50 pointer-events-none"
      style={{ scaleX }}
    />
  );
};

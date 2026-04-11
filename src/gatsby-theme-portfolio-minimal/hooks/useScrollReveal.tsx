import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook for scroll-based reveal animations
 * Returns whether element is in view and a ref to attach to element
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    ...options
  });

  return { ref, isInView };
}

/**
 * Hook for parallax scroll effects
 * Returns a value between 0 and 1 based on scroll position
 */
export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        setOffsetY(scrolled * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offsetY };
}

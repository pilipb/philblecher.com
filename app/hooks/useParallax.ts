"use client";

import { useEffect, useRef, useState } from "react";

interface UseParallaxOptions {
  speed?: number; // Speed multiplier (0.5 = moves at half scroll speed, -0.5 = moves opposite direction)
  offset?: number; // Additional offset in pixels
  enabled?: boolean; // Enable/disable parallax
}

/**
 * Custom hook for parallax scrolling effects
 * @param speed - Speed multiplier (default: 0.5). Positive values move with scroll, negative move against
 * @param offset - Additional offset in pixels
 * @param enabled - Enable/disable parallax effect
 * @returns ref to attach to the element and the current transform value
 */
export function useParallax({
  speed = 0.5,
  offset = 0,
  enabled = true,
}: UseParallaxOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      
      // Calculate distance from viewport center to element center
      const distanceFromCenter = elementCenter - windowCenter;
      
      // Normalize the distance (when element is at center, distance = 0)
      // Apply speed multiplier and offset
      const translateY = (distanceFromCenter * speed) + offset;
      setTransform(translateY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [speed, offset, enabled]);

  return {
    ref: elementRef,
    style: {
      transform: `translateY(${transform}px)`,
      willChange: "transform",
    },
  };
}

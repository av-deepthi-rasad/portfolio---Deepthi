import { useEffect, useRef } from 'react';

/**
 * Returns a ref for a container and continuously applies a
 * translateY parallax offset to any [data-speed] children inside it,
 * based on the container's position in the viewport.
 */
export function useParallax() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layers = Array.from(container.querySelectorAll('[data-speed]'));
    let raf;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height);

      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed || '0');
        const offset = (progress - 0.5) * speed * 100;
        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return containerRef;
}

import { useEffect, useRef } from 'react';

// Anything the ring should react to — native controls plus project cards
// (the only custom clickable element in the app, an <article onClick>).
const HOVER_SELECTOR = 'a, button, [role="button"], input, textarea, article, [data-cursor]';

/**
 * Drives a two-part custom cursor (dot + trailing ring) via refs, so we
 * never re-render React on every mousemove. The ring eases toward the
 * pointer and grows/brightens over anything clickable.
 */
export function useCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    let raf;

    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.18;
      ring.current.y += (pos.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      ringRef.current?.classList.toggle('is-active', !!e.target.closest(HOVER_SELECTOR));
    };

    const onDown = () => ringRef.current?.classList.add('is-down');
    const onUp = () => ringRef.current?.classList.remove('is-down');
    const onLeave = () => {
      dotRef.current?.classList.add('is-hidden');
      ringRef.current?.classList.add('is-hidden');
    };
    const onEnter = () => {
      dotRef.current?.classList.remove('is-hidden');
      ringRef.current?.classList.remove('is-hidden');
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { dotRef, ringRef };
}

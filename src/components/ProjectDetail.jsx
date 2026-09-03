import { useEffect, useMemo, useState } from 'react';
import { projects } from '../data/portfolioData';
import { useProjectMedia } from '../hooks/useProjectMedia';

const AUTO_SLIDE_MS = 3000;

function Gallery({ id }) {
  const { images, video } = useProjectMedia(id, { limit: 10 });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = useMemo(() => {
    const items = images.map((src) => ({ type: 'image', src }));
    return video ? [{ type: 'video', src: video }, ...items] : items;
  }, [images, video]);

  // Keep the active slide in range if the discovered media set changes.
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(slides.length - 1, 0)));
  }, [slides.length]);

  const active = slides[index];

  // Auto-advance every 3s. Re-arms whenever the slide changes (so a manual
  // click resets the clock), and holds off while paused or on a video slide
  // so it doesn't cut playback short.
  useEffect(() => {
    if (slides.length <= 1 || paused || active?.type === 'video') return;
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, slides.length, paused, active]);

  if (slides.length === 0) return null;
  const go = (delta) => setIndex((i) => (i + delta + slides.length) % slides.length);

  return (
    <div
      className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.09] bg-surface-2 group/gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {active.type === 'video' ? (
        <video
          key={active.src}
          src={active.src}
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-contain bg-black"
        />
      ) : (
        <img
          key={active.src}
          src={active.src}
          alt=""
          className="absolute inset-0 w-full h-full object-contain bg-black"
        />
      )}

      {slides.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/15 bg-black/50 text-paper opacity-0 group-hover/gallery:opacity-100 hover:bg-black/70 transition-opacity"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/15 bg-black/50 text-paper opacity-0 group-hover/gallery:opacity-100 hover:bg-black/70 transition-opacity"
          >
            →
          </button>
          <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.src}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === index ? 'w-4 h-1.5 bg-signal' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/55'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectDetail({ projectId, onBack }) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;
  const { kicker, title, body, points, tags } = project.modal;

  return (
    <section className="max-w-[1240px] mx-auto px-6 md:px-10 pt-[74px] pb-[110px]">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 mb-8 font-mono text-[11px] tracking-[.1em] text-muted-2 hover:text-signal transition-colors"
      >
        <span className="text-sm">←</span> BACK TO WORK
      </button>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="md:sticky md:top-[100px]">
          <Gallery id={project.id} />
        </div>

        <div>
          <div className="font-mono text-[11px] text-signal tracking-[.1em]">{kicker}</div>
          <h1 className="mt-3 font-display font-bold text-[32px] md:text-[38px] leading-[1.1] tracking-[-0.025em] text-paper">
            {title}
          </h1>

          <p className="mt-[18px] text-[15.5px] leading-[1.75] text-muted">{body}</p>

          <div className="mt-6 pt-5 border-t border-white/[0.09] flex flex-col gap-3">
            {points.map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <span className="shrink-0 mt-[7px] w-[5px] h-[5px] rounded-full bg-signal" />
                <span className="text-[14.5px] leading-relaxed text-paper/80">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-2.5 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-[13px] py-[7px] rounded-lg border border-signal/28 bg-signal/[0.07] font-mono text-xs text-signal-soft whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 mt-10 font-mono text-[11px] tracking-[.1em] text-muted-2 hover:text-signal transition-colors"
          >
            <span className="text-sm">←</span> BACK TO WORK
          </button>
        </div>
      </div>
    </section>
  );
}

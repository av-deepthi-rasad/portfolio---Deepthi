import { useRef } from 'react';
import { useProjectMedia } from '../hooks/useProjectMedia';

export default function ProjectCard({ project, onOpen }) {
  const videoRef = useRef(null);
  // Card only needs a single representative thumbnail, not the full gallery.
  const { images, video } = useProjectMedia(project.id, { limit: 1 });
  const thumb = images[0];

  const playVideo = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const stopVideo = () => {
    videoRef.current?.pause();
  };

  return (
    <article
      data-reveal
      className="reveal group rounded-[20px] overflow-hidden border border-white/[0.09] bg-white/[0.025] transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-signal/45"
      onClick={() => onOpen(project.id)}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
    >
      <div className="relative h-[260px] sm:h-[300px] bg-surface-2 border-b border-white/[0.06] flex items-center justify-center overflow-hidden">
        {!thumb && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(106,166,255,0.12),transparent_55%)]" />
            <span className="relative font-mono text-xs text-muted-2 tracking-wide">
              {project.placeholder}
            </span>
          </>
        )}
        {thumb && (
          <img
            src={thumb}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {video && (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>
      <div className="p-6 pb-[26px]">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display font-semibold text-xl text-paper tracking-tight">
            {project.title}
          </h3>
          <span className="text-lg text-signal shrink-0">↗</span>
        </div>
        <p className="mt-2.5 mb-4 text-[14.5px] leading-relaxed text-muted-2">
          {project.blurb}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-[11px] py-[5px] rounded-[7px] bg-white/5 font-mono text-[11.5px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

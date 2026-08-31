import { useRef } from 'react';

export default function ProjectTile({ project, index }) {
  const videoRef = useRef(null);

  const playVideo = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const stopVideo = () => {
    const v = videoRef.current;
    if (v) v.pause();
  };

  return (
    <article
      data-reveal
      className="reveal group"
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <a
        href={project.link || '#'}
        data-cursor="drag"
        onMouseEnter={playVideo}
        onMouseLeave={stopVideo}
        className="tile relative block aspect-[16/10] rounded-2xl overflow-hidden bg-surface border border-line"
      >
        {/* base image */}
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        />

        {/* fallback gradient if no asset present */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-2 to-ink -z-10" />

        {/* video preview, muted, plays on hover */}
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}

        {/* glitch layers */}
        <div
          className="glitch-layer glitch-r"
          style={{ backgroundImage: `url(${project.image})`, backgroundColor: '#ff5a5a22' }}
        />
        <div
          className="glitch-layer glitch-b"
          style={{ backgroundImage: `url(${project.image})`, backgroundColor: '#5a8cff22' }}
        />
        <div className="noise-line" />

        {/* scrim + label */}
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] text-signal">{project.tag} · {project.year}</p>
              <h3 className="font-display text-lg text-paper mt-1">{project.title}</h3>
            </div>
            <span className="shrink-0 w-9 h-9 rounded-full border border-line grid place-items-center text-paper transition-transform duration-300 group-hover:rotate-45 group-hover:border-signal">
              ↗
            </span>
          </div>
        </div>
      </a>

      <p className="mt-4 text-sm text-muted leading-relaxed max-w-lg">
        {project.description}
      </p>
      <p className="mt-3 font-mono text-[11px] text-muted/70">
        {project.stack.join('  /  ')}
      </p>
    </article>
  );
}

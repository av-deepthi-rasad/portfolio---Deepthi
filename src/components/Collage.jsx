import { useRef, useState } from 'react';
import { projects } from '../data/portfolioData';

const LAYOUT = [
  { x: '6%', y: '10%', rotate: -6 },
  { x: '30%', y: '32%', rotate: 4 },
  { x: '58%', y: '6%', rotate: 3 },
  { x: '68%', y: '42%', rotate: -4 },
  { x: '14%', y: '55%', rotate: 7 },
];

export default function Collage() {
  const boardRef = useRef(null);
  const [order, setOrder] = useState(() => projects.map((_, i) => i));
  const dragState = useRef(null);
  const positions = useRef(
    Object.fromEntries(projects.map((p, i) => [p.id, LAYOUT[i % LAYOUT.length]]))
  );
  const [, forceRender] = useState(0);

  const bringToFront = (id) => {
    setOrder((prev) => [...prev.filter((i) => projects[i].id !== id), projects.findIndex((p) => p.id === id)]);
  };

  const onPointerDown = (e, id) => {
    const board = boardRef.current;
    if (!board) return;
    const boardRect = board.getBoundingClientRect();
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();

    dragState.current = {
      id,
      offsetX: e.clientX - cardRect.left,
      offsetY: e.clientY - cardRect.top,
      boardRect,
    };
    card.setPointerCapture(e.pointerId);
    bringToFront(id);
  };

  const onPointerMove = (e) => {
    const drag = dragState.current;
    if (!drag) return;
    const { id, offsetX, offsetY, boardRect } = drag;

    let x = e.clientX - boardRect.left - offsetX;
    let y = e.clientY - boardRect.top - offsetY;
    x = Math.max(-40, Math.min(boardRect.width - 140, x));
    y = Math.max(-20, Math.min(boardRect.height - 100, y));

    positions.current[id] = {
      x: `${(x / boardRect.width) * 100}%`,
      y: `${(y / boardRect.height) * 100}%`,
      rotate: positions.current[id]?.rotate ?? 0,
    };
    forceRender((n) => n + 1);
  };

  const onPointerUp = () => {
    dragState.current = null;
  };

  return (
    <section className="px-6 md:px-10 py-28 border-t border-line">
      <div data-reveal className="reveal mb-10">
        <span className="font-mono text-xs text-signal">Playground</span>
        <h2 className="font-display text-3xl md:text-4xl text-paper mt-4">
          Drag these around
        </h2>
        <p className="text-sm text-muted mt-3 max-w-md">
          A loose collage of the work above — grab a card and rearrange it however you like.
        </p>
      </div>

      <div
        ref={boardRef}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="relative w-full h-[420px] md:h-[480px] rounded-2xl border border-line bg-surface/60 overflow-hidden"
      >
        {order.map((projectIndex) => {
          const project = projects[projectIndex];
          const pos = positions.current[project.id];
          return (
            <div
              key={project.id}
              data-cursor="drag"
              onPointerDown={(e) => onPointerDown(e, project.id)}
              className="drag-card absolute w-36 md:w-44 rounded-xl border border-line bg-surface-2 shadow-xl shadow-black/30 overflow-hidden"
              style={{
                left: pos.x,
                top: pos.y,
                transform: `rotate(${pos.rotate}deg)`,
                transition: dragState.current?.id === project.id ? 'none' : 'transform 0.2s ease',
              }}
            >
              <div className="aspect-[4/3] bg-ink relative">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                  onError={(e) => (e.currentTarget.style.opacity = '0')}
                />
              </div>
              <p className="font-mono text-[10px] text-muted px-2 py-1.5 truncate">
                {project.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

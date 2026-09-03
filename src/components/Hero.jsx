import { profile, heroStats, stack, stackHighlight, highlightCards } from '../data/portfolioData';

function MagicWord({ children }) {
  return (
    <span className="magic-word text-signal">
      {children.split('').map((ch, i) => (
        <span key={i} className="magic-letter" style={{ animationDelay: `${i * 40}ms` }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

function StackChip({ label }) {
  const highlighted = stackHighlight.has(label);
  return (
    <span
      className={`px-[18px] py-2.5 rounded-full border font-medium text-sm whitespace-nowrap ${
        highlighted
          ? 'border-signal/30 bg-signal/10 text-signal-soft'
          : 'border-white/10 bg-white/[0.03] text-paper/85'
      }`}
    >
      {label}
    </span>
  );
}

export default function Hero({ onWork, onContact }) {
  return (
    <section className="max-w-[1240px] mx-auto px-6 md:px-10">
      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-10 items-start min-h-[calc(100svh-74px)]">
        <div className="py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-[13px] py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] text-muted-2 tracking-wider whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse-dot" />
            AVAILABLE FOR WORK — {profile.location.toUpperCase()}
          </div>

          <h1 className="mt-6 font-display font-bold text-paper leading-[0.98] tracking-[-0.035em] text-[13vw] sm:text-[9vw] md:text-[clamp(46px,6.2vw,88px)] text-balance">
            Full-stack engineer
            <br />
            building <MagicWord>interactive</MagicWord>
            <br />
            web, mobile &amp; games.
          </h1>

          <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-muted text-pretty">
            BSc (Hons) IT graduate from the University of Moratuwa. I build responsive
            applications with React, Next.js, Node and Flutter, and interactive experiences
            in Unity and Unreal - delivered for 50+ international clients.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={onWork}
              className="inline-flex items-center gap-2.5 px-[22px] py-3.5 rounded-xl bg-gradient-to-br from-signal to-signal-dim text-ink font-semibold text-[14.5px] shadow-[0_12px_32px_-12px_rgba(106,166,255,0.7)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(106,166,255,0.85)] transition-all"
            >
              View selected work <span className="text-base">→</span>
            </button>
            <button
              onClick={onContact}
              className="px-[22px] py-3.5 rounded-xl border border-white/15 bg-white/[0.03] text-paper font-medium text-[14.5px] hover:bg-white/[0.08] hover:border-white/25 transition-colors"
            >
              Get in touch
            </button>
          </div>

          <div className="flex gap-11 mt-14 pt-7 border-t border-line">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-[30px] text-paper tracking-tight">
                  {s.value}
                </div>
                <div className="font-mono text-[11px] text-muted-2 mt-1.5 tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block self-start mt-16 md:mt-20 min-h-[520px] overflow-hidden">
          <div className="absolute left-1/2 bottom-[8%] w-[min(420px,88%)] aspect-square -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(106,166,255,0.28),transparent_66%)] blur-[6px]" />
          <div className="absolute left-1/2 bottom-[6%] w-[min(400px,84%)] aspect-square -translate-x-1/2 rounded-full border border-signal/20" />
          <div className="absolute left-1/2 bottom-[6%] w-[min(400px,84%)] aspect-square -translate-x-1/2 rounded-full border-t-[1.5px] border-signal/65 animate-spin-slow" />
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative block w-full max-w-[460px] mx-auto"
            style={{
              maskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>

      <div data-reveal className="reveal pt-2 pb-[74px]">
        <div className="font-mono text-[11px] text-muted-2 tracking-[.14em] mb-5">/ STACK</div>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max gap-3.5 animate-marquee">
            {[...stack, ...stack].map((item, i) => (
              <StackChip key={`${item}-${i}`} label={item} />
            ))}
          </div>
        </div>
      </div>

      <div data-reveal className="reveal grid md:grid-cols-3 gap-[18px] pb-24">
        {highlightCards.map((card) => (
          <div
            key={card.title}
            className="p-7 rounded-[18px] border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-white/[0.015] hover:border-signal/40 transition-colors"
          >
            <div className="font-mono text-[11px] text-signal tracking-[.1em]">
              {card.index}
            </div>
            <h3 className="mt-3.5 mb-2 font-display font-semibold text-[19px] text-paper">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-2">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

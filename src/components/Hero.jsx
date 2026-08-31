import { useEffect, useState } from 'react';
import { useParallax } from '../hooks/useParallax';
import { profile, stats } from '../data/portfolioData';

export default function Hero() {
  const containerRef = useParallax();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-end overflow-hidden px-6 md:px-10 pb-16 pt-32"
    >
      {/* parallax backdrop layers */}
      <div className="absolute inset-0 -z-10">
        <div
          data-speed="6"
          className="absolute top-[12%] right-[8%] w-64 h-64 rounded-full bg-signal/10 blur-3xl"
        />
        <div
          data-speed="-4"
          className="absolute bottom-[8%] left-[6%] w-72 h-72 rounded-full bg-amber/10 blur-3xl"
        />
        <div
          data-speed="10"
          className="absolute top-[30%] left-[18%] font-mono text-xs text-signal-dim/60 hidden md:block"
        >
          const build = () =&gt; ship();
        </div>
        <div
          data-speed="-8"
          className="absolute bottom-[24%] right-[14%] font-mono text-xs text-amber/50 hidden md:block"
        >
          unity.Instantiate(idea);
        </div>
      </div>

      <div className="w-full">
        <p
          className={`font-mono text-xs text-signal mb-6 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {profile.location} — available for freelance work
        </p>

        <h1
          className={`font-display font-semibold text-paper leading-[0.95] text-[13vw] md:text-[7.2vw] transition-all duration-[900ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Full-stack code.
          <br />
          Game-shaped thinking.
        </h1>

        <div
          className={`mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8 transition-all duration-700 delay-150 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="max-w-md text-muted text-base leading-relaxed">
            {profile.summary}
          </p>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-4 shrink-0">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl text-paper">{s.value}</dt>
                <dd className="text-xs text-muted mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

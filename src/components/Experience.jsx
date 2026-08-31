import { experience, certifications } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-28 border-t border-line">
      <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-16">
        <div>
          <div data-reveal className="reveal mb-12">
            <span className="font-mono text-xs text-signal">Path so far</span>
            <h2 className="font-display text-3xl md:text-4xl text-paper mt-4">
              Experience
            </h2>
          </div>

          <ol className="relative border-l border-line ml-2">
            {experience.map((item, i) => (
              <li
                key={item.role + item.period}
                data-reveal
                className="reveal relative pl-8 pb-12 last:pb-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-signal" />
                <p className="font-mono text-xs text-muted">{item.period}</p>
                <h3 className="font-display text-xl text-paper mt-2">{item.role}</h3>
                <p className="text-sm text-signal mt-1">{item.org}</p>
                <p className="text-sm text-muted mt-3 leading-relaxed max-w-md">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal className="reveal" style={{ transitionDelay: '150ms' }}>
          <span className="font-mono text-xs text-signal">Certifications</span>
          <h2 className="font-display text-2xl text-paper mt-4 mb-6">
            Recognition & badges
          </h2>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li
                key={c}
                className="text-sm text-muted border-b border-line pb-3 last:border-0"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

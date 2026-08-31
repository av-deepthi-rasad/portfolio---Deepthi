import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 py-28 border-t border-line">
      <div data-reveal className="reveal mb-14">
        <span className="font-mono text-xs text-signal">Toolkit</span>
        <h2 className="font-display text-3xl md:text-4xl text-paper mt-4">
          What I reach for
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden">
        {skills.map((group, i) => (
          <div
            key={group.group}
            data-reveal
            className="reveal bg-ink p-7"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <h3 className="font-display text-lg text-paper mb-4">{group.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs text-muted border border-line rounded-full px-3 py-1 hover:border-signal hover:text-signal transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

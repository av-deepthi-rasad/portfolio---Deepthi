import { profile, education } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 border-t border-line">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-start">
        <div data-reveal className="reveal">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-line">
            {/* Replace /public/photo.jpg with your own photo */}
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        <div data-reveal className="reveal" style={{ transitionDelay: '120ms' }}>
          <span className="font-mono text-xs text-signal">About</span>
          <h2 className="font-display text-3xl md:text-4xl text-paper mt-4 leading-snug">
            I studied buildings before I built software.
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed max-w-xl">
            <p>
              I'm a final-year IT graduate from the University of Moratuwa, and I've
              spent the last few years splitting my time between two things that turn
              out to be more alike than they look: shipping full-stack products for
              clients, and building games where every interaction has to feel right.
            </p>
            <p>
              That mix shows up in how I work — I care about the feel of an
              interface as much as whether the API responds correctly. Recently
              that's included training a model to predict floor-plan dimensions and
              wiring a constraint solver to keep the results buildable.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-line flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-surface-2 border border-line flex items-center justify-center font-mono text-xs text-signal">
              UoM
            </div>
            <div>
              <p className="text-sm text-paper">{education.degree}</p>
              <p className="text-xs text-muted mt-0.5">
                {education.school} · {education.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

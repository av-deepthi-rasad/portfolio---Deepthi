import { profile } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-28 border-t border-line">
      <div data-reveal className="reveal max-w-3xl">
        <span className="font-mono text-xs text-signal">Get in touch</span>
        <h2 className="font-display text-[10vw] md:text-6xl text-paper mt-4 leading-[1.02]">
          Got a project?
          <br />
          Let's build it.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          data-cursor="link"
          className="inline-flex items-center gap-3 mt-10 text-lg md:text-xl text-signal border-b border-signal-dim hover:border-signal pb-1 transition-colors"
        >
          {profile.email}
          <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </a>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted">
          <a href={profile.linkedin} data-cursor="link" className="hover:text-paper transition-colors">
            LinkedIn
          </a>
          <a href={profile.github} data-cursor="link" className="hover:text-paper transition-colors">
            GitHub
          </a>
          <span>{profile.phone}</span>
        </div>
      </div>
    </section>
  );
}

import { projects } from '../data/portfolioData';
import ProjectTile from './ProjectTile';

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-28">
      <div data-reveal className="reveal mb-14 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <span className="font-mono text-xs text-signal">Selected work</span>
          <h2 className="font-display text-3xl md:text-4xl text-paper mt-4">
            Things I've shipped
          </h2>
        </div>
        <p className="text-sm text-muted max-w-xs">
          Hover a tile for a preview clip. Add your own images and clips in{' '}
          <code className="font-mono text-signal">/public/projects</code>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
        {projects.map((project, i) => (
          <ProjectTile key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

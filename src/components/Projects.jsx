import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects({ onOpenProject }) {
  return (
    <section className="max-w-[1240px] mx-auto px-6 md:px-10 pt-[74px] pb-[110px]">
      <div className="font-mono text-[11px] text-muted-2 tracking-[.14em]">/ SELECTED WORK</div>
      <h2 className="mt-4 font-display font-bold text-[clamp(38px,4.6vw,62px)] leading-[1.02] tracking-[-0.03em] text-paper">
        Eight projects, eight stacks.
      </h2>
      <p className="mt-4 mb-11 max-w-xl text-base leading-relaxed text-muted">
        A selection of projects showcasing my experience in full-stack development, mobile applications, AI/ML, and game development.
      </p>

      <div className="grid sm:grid-cols-2 gap-[22px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  );
}

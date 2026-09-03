import { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const [view, setView] = useState('home');
  const [activeProject, setActiveProject] = useState(null);
  const glowRef = useRef(null);

  useReveal([view, activeProject]);

  useEffect(() => {
    document.title = 'Deepthi Rasad - Software Engineer';
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      const g = glowRef.current;
      if (!g) return;
      g.style.opacity = '1';
      g.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const navigate = (next) => {
    setView(next);
    setActiveProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProject = (id) => {
    setActiveProject(id);
    setView('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToWork = () => {
    setActiveProject(null);
    setView('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && view === 'project') backToWork();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  return (
    <div className="relative min-h-screen bg-ink text-paper isolate">
      <CustomCursor />
      {/* ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_18%_12%,rgba(64,120,255,0.20),transparent_45%),radial-gradient(circle_at_82%_78%,rgba(38,86,200,0.14),transparent_50%)]" />
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(circle_at_50%_40%,#000,transparent_78%)] [-webkit-mask-image:radial-gradient(circle_at_50%_40%,#000,transparent_78%)]"
      />
      <div
        ref={glowRef}
        className="fixed top-0 left-0 z-0 pointer-events-none w-[620px] h-[620px] -ml-[310px] -mt-[310px] rounded-full opacity-0 transition-opacity duration-500 bg-[radial-gradient(circle,rgba(90,150,255,0.16),transparent_62%)]"
      />

      <Nav view={view === 'project' ? 'work' : view} onNavigate={navigate} />

      <main className="relative z-10 pt-[74px]">
        {view === 'home' && (
          <Hero onWork={() => navigate('work')} onContact={() => navigate('contact')} />
        )}
        {view === 'work' && <Projects onOpenProject={openProject} />}
        {view === 'project' && <ProjectDetail projectId={activeProject} onBack={backToWork} />}
        {view === 'contact' && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

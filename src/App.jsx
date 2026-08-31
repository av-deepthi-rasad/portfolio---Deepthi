import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Collage from './components/Collage';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  useEffect(() => {
    document.title = 'Deepthi Rasad — Full-Stack & Game Developer';
  }, []);

  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-signal">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Collage />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="h-px bg-line/60 w-full">
        <div
          className="h-px bg-signal transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        <a
          href="#top"
          data-cursor="link"
          className="font-display text-sm tracking-tight text-paper"
        >
          Deepthi Rasad
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                data-cursor="link"
                className="text-sm text-muted hover:text-paper transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          data-cursor="link"
          className="text-sm border border-line rounded-full px-4 py-1.5 hover:border-signal hover:text-signal transition-colors"
        >
          Say hello
        </a>
      </nav>
    </header>
  );
}

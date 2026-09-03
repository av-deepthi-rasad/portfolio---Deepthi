import { profile } from '../data/portfolioData';

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav({ view, onNavigate }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-ink/65 border-b border-line">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] rounded-[9px] bg-gradient-to-br from-signal to-signal-dim grid place-items-center font-display font-bold text-[13px] text-ink">
            DR
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-semibold text-sm text-paper tracking-tight">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] text-muted-2 tracking-widest">
              {profile.role.toUpperCase()}
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className="relative px-4 py-2 rounded-lg text-sm font-medium text-paper/90 hover:bg-white/5 transition-colors"
            >
              {tab.label}
              <span
                className={`absolute left-4 right-4 -bottom-px h-[1.5px] rounded-full bg-signal transition-opacity ${
                  view === tab.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-4 py-2 rounded-[10px] text-sm font-medium border border-signal/35 bg-signal/10 text-signal-soft hover:bg-signal/20 hover:border-signal/60 transition-colors"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}

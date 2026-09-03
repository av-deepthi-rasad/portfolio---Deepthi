import { education } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-[26px] flex flex-wrap items-center justify-between gap-5 text-xs text-muted-2">
        <span>© {new Date().getFullYear()} DEEPTHI RASAD</span>
        <span>deepthirasad@gmail.com</span>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-line flex items-center justify-between text-xs text-muted">
      <span>© {new Date().getFullYear()} Deepthi Rasad</span>
      <a href="#top" data-cursor="link" className="hover:text-paper transition-colors">
        Back to top ↑
      </a>
    </footer>
  );
}

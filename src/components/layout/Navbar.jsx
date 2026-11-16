import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { formation } from '../../data/formation';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#programme', label: 'Programme' },
  { href: '#formateurs', label: 'Formateurs' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container-page flex h-16 lg:h-20 items-center justify-between">
        <a href="#accueil" onClick={(e) => go(e, '#accueil')} className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric/20 text-cyan"><Code2 size={20} /></span>
          <span>{formation.name}</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)} className="text-sm text-muted hover:text-text transition">
              {l.label}
            </a>
          ))}
          <a href="#inscription" onClick={(e) => go(e, '#inscription')} className="btn-primary py-2.5 px-5 text-sm">Réserver ma place</a>
        </nav>
        <button className="lg:hidden p-2 text-text" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-bg/95 backdrop-blur-xl">
          <div className="container-page py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)} className="py-2 text-muted hover:text-text">
                {l.label}
              </a>
            ))}
            <a href="#inscription" onClick={(e) => go(e, '#inscription')} className="btn-primary mt-2">Réserver ma place</a>
          </div>
        </div>
      )}
    </header>
  );
}

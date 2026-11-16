import { Code2 } from 'lucide-react';
import { formation } from '../../data/formation';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#programme', label: 'Programme' },
  { href: '#formateurs', label: 'Formateurs' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer className="border-t border-white/10 bg-bg2/60">
      <div className="container-page py-12 grid gap-8 md:grid-cols-3 items-start">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric/20 text-cyan"><Code2 size={20} /></span>
            <span>{formation.name}</span>
          </div>
          <p className="mt-3 text-sm text-muted max-w-sm">{formation.fullTitle}. Formation en présentiel à {formation.location}.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={(e) => go(e, l.href)} className="hover:text-text transition">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Informations</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>{formation.location}, {formation.country}</li>
            <li>{formation.period} ({formation.dateNote})</li>
            <li>{formation.sessions} séances · {formation.totalHours} heures</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} {formation.fullTitle}. Tous droits réservés.
      </div>
    </footer>
  );
}

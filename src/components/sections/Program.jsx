import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BookOpen } from 'lucide-react';
import { modules } from '../../data/modules';

function ContentBlock({ content }) {
  return (
    <div className="space-y-3">
      {content.map((c, i) => {
        if (typeof c === 'string') {
          return <li key={i} className="text-sm text-muted flex gap-2"><span className="text-cyan mt-1">•</span><span>{c}</span></li>;
        }
        return (
          <div key={i} className="mt-3">
            <div className="text-sm font-semibold text-text mb-2">{c.subtitle}</div>
            <ul className="space-y-1.5 pl-1">
              {c.items.map((it, j) => (
                <li key={j} className="text-sm text-muted flex gap-2"><span className="text-cyan mt-1">•</span><span>{it}</span></li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function ModuleCard({ mod, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-5 sm:p-6 flex items-start gap-4 text-left hover:bg-white/[0.02] transition">
        <div className="shrink-0 h-11 w-11 rounded-xl bg-gradient-to-br from-electric/30 to-cyan/20 flex items-center justify-center font-display font-bold text-cyan">{mod.number}</div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg leading-snug">{mod.title}</h3>
          <p className="text-sm text-muted mt-1">{mod.objective}</p>
        </div>
        <ChevronDown className={`shrink-0 text-cyan transition mt-1 ${open ? 'rotate-180' : ''}`} size={20} />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-6 border-t border-white/5 pt-5 grid lg:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold mb-3"><BookOpen size={16} className="text-cyan"/> Contenu détaillé</div>
            <ul className="space-y-1.5">
              <ContentBlock content={mod.content} />
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Compétences acquises</div>
            <ul className="space-y-2">
              {mod.skills.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-electric shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Program() {
  return (
    <section id="programme" className="section bg-bg2/30">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Programme détaillé</h2>
          <p className="section-sub mx-auto">10 modules progressifs pour passer des fondamentaux du web au déploiement d’une application complète, en intégrant l’IA avec méthode.</p>
        </motion.div>
        <div className="mt-12 space-y-4">
          {modules.map((m, i) => <ModuleCard key={m.number} mod={m} index={i} />)}
        </div>
        <p className="mt-6 text-center text-sm text-muted">La répartition exacte des modules dans le temps sera précisée ultérieurement.</p>
      </div>
    </section>
  );
}

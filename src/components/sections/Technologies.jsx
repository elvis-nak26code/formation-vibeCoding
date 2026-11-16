import { motion } from 'framer-motion';
import { Code2, Database, GitBranch, Palette, Server, Sparkles, Terminal, Boxes } from 'lucide-react';
import { technologies, aiTools } from '../../data/technologies';

const iconFor = (name) => {
  if (/HTML|CSS|JavaScript|React/i.test(name)) return Code2;
  if (/Tailwind/i.test(name)) return Palette;
  if (/Node|Express/i.test(name)) return Server;
  if (/Git/i.test(name)) return GitBranch;
  if (/Mongo/i.test(name)) return Database;
  if (/OpenCode/i.test(name)) return Sparkles;
  if (/VS Code/i.test(name)) return Terminal;
  return Boxes;
};

export default function Technologies() {
  return (
    <section id="technologies" className="section bg-bg2/30">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Technologies et outils</h2>
          <p className="section-sub mx-auto">Un stack moderne pour apprendre à construire des applications web complètes et professionnelles.</p>
        </motion.div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((t, i) => {
            const Icon = iconFor(t.name);
            return (
              <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="card p-5 flex items-center gap-3 hover:border-cyan/30 transition">
                <div className="h-10 w-10 rounded-lg bg-electric/15 text-cyan flex items-center justify-center shrink-0"><Icon size={18} /></div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted">{t.category}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 card p-6 lg:p-8">
          <h3 className="font-display text-xl font-bold flex items-center gap-2"><Sparkles className="text-cyan" size={20}/> Construire des applications modernes avec l’IA</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {aiTools.map((t) => (
              <li key={t} className="flex gap-2 text-sm text-muted"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-electric shrink-0" />{t}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

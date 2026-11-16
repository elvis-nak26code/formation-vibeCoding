import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Users, ArrowRight, Sparkles, Terminal, Bot } from 'lucide-react';
import { formation } from '../../data/formation';

const stats = [
  { icon: Calendar, label: formation.period, sub: formation.dateNote },
  { icon: Clock, label: `${formation.sessions} séances`, sub: `${formation.totalHours} heures` },
  { icon: Users, label: `${formation.seats} places`, sub: 'Places limitées' },
  { icon: MapPin, label: formation.location, sub: formation.country },
];

const go = (e, href) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-28 lg:pt-36 pb-20 lg:pb-28">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 hero-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-electric/20 blur-3xl" />
      <div className="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />

      <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-sm text-cyan mb-6">
            <Sparkles size={16} /> {formation.fullTitle}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            APPRENDS À CRÉER <span className="gradient-text">AVEC L'IA</span>.<br />GARDE LE CONTRÔLE.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl">{formation.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#inscription" onClick={(e) => go(e, '#inscription')} className="btn-primary text-base">Je m'inscris <ArrowRight size={18} /></a>
            <a href="#programme" onClick={(e) => go(e, '#programme')} className="btn-secondary text-base">Découvrir le programme</a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <s.icon size={18} className="text-cyan mb-2" />
                <div className="font-semibold text-sm">{s.label}</div>
                <div className="text-xs text-muted mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-electric/30 to-cyan/20 blur-2xl" />
          <div className="relative card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-bg2/80">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs text-muted flex items-center gap-1"><Terminal size={12}/> app.jsx — OpenCode</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <div className="text-muted"><span className="text-cyan">const</span> <span className="text-text">idea</span> = <span className="text-green-400">"Mon application"</span>;</div>
              <div className="text-muted mt-1"><span className="text-cyan">const</span> <span className="text-text">skills</span> = [<span className="text-green-400">"bases"</span>, <span className="text-green-400">"architecture"</span>, <span className="text-green-400">"IA"</span>];</div>
              <div className="mt-3 text-muted">// 1. Comprendre  2. Prompter  3. Vérifier</div>
              <div className="mt-2"><span className="text-cyan">function</span> <span className="text-electric">build</span>() &#123;</div>
              <div className="pl-4 text-muted">review(code);</div>
              <div className="pl-4 text-muted">test(app);</div>
              <div className="pl-4"><span className="text-cyan">return</span> <span className="text-green-400">deploy</span>(app);</div>
              <div>&#125;</div>
            </div>
            <div className="border-t border-white/10 p-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-bg/60 border border-white/10 p-3 flex items-start gap-3">
                <Bot className="text-cyan shrink-0" size={18} />
                <div>
                  <div className="text-xs font-semibold">OpenCode + IA</div>
                  <div className="text-xs text-muted mt-0.5">Piloter, générer, itérer</div>
                </div>
              </div>
              <div className="rounded-xl bg-bg/60 border border-white/10 p-3 flex items-start gap-3">
                <Terminal className="text-electric shrink-0" size={18} />
                <div>
                  <div className="text-xs font-semibold">Fondamentaux</div>
                  <div className="text-xs text-muted mt-0.5">Comprendre & contrôler</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

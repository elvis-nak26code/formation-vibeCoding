import { motion } from 'framer-motion';
import { Github, Globe, Linkedin, User } from 'lucide-react';
import { trainers } from '../../data/trainers';

function Avatar({ name, photo }) {
  if (photo) {
    return <img src={photo} alt={name} loading="lazy" className="h-20 w-20 rounded-2xl object-cover border border-white/10" />;
  }
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase();
  return (
    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-electric/40 to-cyan/30 border border-white/10 flex items-center justify-center text-xl font-bold text-white">
      {initials || <User />}
    </div>
  );
}

export default function Trainers() {
  return (
    <section id="formateurs" className="section">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Les formateurs</h2>
          <p className="section-sub mx-auto">Une équipe pour vous accompagner des fondamentaux à la mise en ligne de vos projets.</p>
        </motion.div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card p-6 flex flex-col">
              <div className="flex items-center gap-4">
                <Avatar name={t.name} photo={t.photo} />
                <div>
                  <h3 className="font-semibold leading-tight">{t.name}</h3>
                  <p className="text-sm text-cyan mt-0.5">{t.role}</p>
                </div>
              </div>
              {t.isDemo && <span className="mt-4 inline-flex w-fit text-[11px] uppercase tracking-wide px-2 py-1 rounded-md bg-yellow-400/10 text-yellow-300 border border-yellow-400/20">Profil de démonstration</span>}
              <p className="mt-3 text-sm text-muted flex-1">{t.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.specialties.map((s) => <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted">{s}</span>)}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.portfolio && <a href={t.portfolio} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2 px-3 text-xs"><Globe size={14}/> Portfolio</a>}
                {t.github && <a href={t.github} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2 px-3 text-xs"><Github size={14}/> GitHub</a>}
                {t.linkedin && <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2 px-3 text-xs"><Linkedin size={14}/> LinkedIn</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { AppWindow, Github, Compass, TrendingUp } from 'lucide-react';

const items = [
  { icon: AppWindow, title: 'Une application complète en ligne', text: 'Une application créée par l’apprenant, développée et mise en production.' },
  { icon: Github, title: 'Un compte GitHub avec ses projets', text: 'Un historique de projets versionnés pour montrer ses compétences et progresser.' },
  { icon: Compass, title: 'Une méthode de travail avec l’IA', text: 'Savoir utiliser l’IA comme assistant sans perdre le contrôle du code et des choix.' },
  { icon: TrendingUp, title: 'Les bases pour continuer seul', text: 'Des fondamentaux solides pour apprendre de nouvelles technologies en autonomie.' },
];

export default function Outcomes() {
  return (
    <section id="resultats" className="section">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">À la fin de la formation</h2>
          <p className="section-sub mx-auto">Des résultats concrets pour lancer ou accélérer votre parcours dans le développement.</p>
        </motion.div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/30 to-cyan/20 text-cyan"><it.icon size={22} /></div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-muted">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

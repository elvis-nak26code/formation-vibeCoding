import { motion } from 'framer-motion';
import { Eye, MessageSquareCode, Layers, ShieldCheck, Bug, Rocket } from 'lucide-react';

const points = [
  { icon: Eye, title: 'Comprendre ce que l’IA produit', text: 'Lire et interpréter le code généré au lieu de l’accepter aveuglément.' },
  { icon: MessageSquareCode, title: 'Formuler de bons prompts', text: 'Donner un contexte, des objectifs et des contraintes clairs pour de meilleurs résultats.' },
  { icon: Layers, title: 'Concevoir une architecture', text: 'Structurer ses projets pour qu’ils restent maintenables et évolutifs.' },
  { icon: ShieldCheck, title: 'Contrôler et sécuriser', text: 'Vérifier les dépendances, protéger les clés API et limiter les failles.' },
  { icon: Bug, title: 'Détecter et corriger les erreurs', text: 'Tester, reproduire les bugs et reprendre la main quand il le faut.' },
  { icon: Rocket, title: 'Mettre en production', text: 'Déployer ses applications frontend et backend en conditions réelles.' },
];

export default function About() {
  return (
    <section id="apropos" className="section bg-bg2/30">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="section-title">Une approche qui met les <span className="gradient-text">fondamentaux</span> au centre</h2>
            <p className="mt-5 text-muted text-lg">
              Le Vibe Coding ne consiste pas à demander à une IA de produire du code sans comprendre ce qu’elle fait.
            </p>
            <p className="mt-4 text-muted">
              Notre approche consiste à apprendre les bases du développement pour utiliser l’intelligence artificielle comme un véritable accélérateur, tout en restant maître de ses projets, de la conception à la mise en production.
            </p>
          </motion.div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Pourquoi cette formation ?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="card p-5">
                  <p.icon className="text-cyan mb-3" size={22} />
                  <h4 className="font-semibold mb-1">{p.title}</h4>
                  <p className="text-sm text-muted">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

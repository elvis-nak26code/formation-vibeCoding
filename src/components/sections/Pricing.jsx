import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Calendar, Users } from 'lucide-react';
import { formation } from '../../data/formation';

const go = (e) => { e.preventDefault(); document.querySelector('#inscription')?.scrollIntoView({ behavior: 'smooth' }); };
const fmt = (n) => n.toLocaleString('fr-FR');

export default function Pricing() {
  const p = formation.pricing;
  return (
    <section id="tarifs" className="section bg-bg2/30">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Tarifs et informations pratiques</h2>
          <p className="section-sub mx-auto">Une formation complète et accessible pour acquérir des compétences concrètes en développement et en Vibe Coding.</p>
        </motion.div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-electric/20 blur-3xl" />
            <h3 className="font-display text-2xl font-bold">Participation</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="text-muted">Frais d'inscription</span><span className="font-semibold">{fmt(p.registrationFee)} {p.currency}</span></div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="text-muted">Frais de formation</span><span className="font-semibold">{fmt(p.trainingFee)} {p.currency}</span></div>
              <div className="flex items-center justify-between pt-1"><span className="font-semibold text-lg">Total</span><span className="font-display text-3xl font-bold gradient-text">{fmt(p.total)} {p.currency}</span></div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {['30 heures de formation pratique', '6 séances encadrées en présentiel', 'Accompagnement sur un projet final', 'Méthode pour utiliser l’IA avec contrôle'].map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-cyan mt-0.5 shrink-0" />{t}</li>
              ))}
            </ul>
            <a href="#inscription" onClick={go} className="btn-primary w-full mt-8">S'inscrire maintenant</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="card p-8 flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold mb-6">Informations pratiques</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4"><div className="h-10 w-10 rounded-lg bg-electric/15 text-cyan flex items-center justify-center shrink-0"><MapPin size={18}/></div><div><div className="font-semibold">Lieu</div><div className="text-muted text-sm">{formation.location}, {formation.country}</div></div></div>
              <div className="flex items-start gap-4"><div className="h-10 w-10 rounded-lg bg-electric/15 text-cyan flex items-center justify-center shrink-0"><Calendar size={18}/></div><div><div className="font-semibold">Période</div><div className="text-muted text-sm">{formation.period} — {formation.dateNote}</div></div></div>
              <div className="flex items-start gap-4"><div className="h-10 w-10 rounded-lg bg-electric/15 text-cyan flex items-center justify-center shrink-0"><Users size={18}/></div><div><div className="font-semibold">Places disponibles</div><div className="text-muted text-sm">{formation.seats} places limitées</div></div></div>
            </div>
            <p className="mt-8 text-sm text-muted border-t border-white/10 pt-5">Les modalités pratiques (adresse exacte et paiement) seront communiquées lors de la confirmation de votre inscription.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

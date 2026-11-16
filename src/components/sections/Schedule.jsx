import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin, Presentation } from 'lucide-react';
import { formation } from '../../data/formation';

const items = [
  { icon: Presentation, title: '6 séances', text: 'Un parcours progressif structuré en six sessions.' },
  { icon: Clock, title: '5 heures par séance', text: 'Des sessions intensives et immersives.' },
  { icon: CalendarDays, title: '30 heures au total', text: 'Un volume complet pour pratiquer et consolider.' },
  { icon: MapPin, title: 'En présentiel à Bobo-Dioulasso', text: `${formation.period} — ${formation.dateNote}.` },
];

export default function Schedule() {
  return (
    <section id="deroulement" className="section">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Déroulement de la formation</h2>
          <p className="section-sub mx-auto">Un format pratique et intensif, pensé pour apprendre en construisant et repartir avec des compétences concrètes.</p>
        </motion.div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-cyan"><it.icon size={22} /></div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-muted">{it.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 card p-6 text-center border-cyan/20">
          <p className="text-muted"><span className="text-text font-semibold">Caractère pratique :</span> chaque séance alterne apports essentiels, exercices guidés et mise en application sur des projets réels.</p>
        </div>
      </div>
    </section>
  );
}

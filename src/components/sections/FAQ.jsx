import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faq } from '../../data/faq';

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`shrink-0 text-cyan transition ${open ? 'rotate-180' : ''}`} size={20} />
      </button>
      {open && <div className="px-5 pb-5 text-muted text-sm leading-relaxed border-t border-white/5 pt-4">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section bg-bg2/30">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-sub mx-auto">Les réponses aux questions les plus courantes sur la formation Vibe Coding.</p>
        </motion.div>
        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {faq.map((f) => <Item key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
}

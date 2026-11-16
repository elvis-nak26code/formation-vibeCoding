import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { contacts } from '../../data/contacts';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Contact</h2>
          <p className="section-sub mx-auto">Une question sur la formation ou l'inscription ? Contactez-nous directement par téléphone ou WhatsApp.</p>
        </motion.div>
        <div className="mt-12 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contacts.phones.map((p) => (
            <motion.div key={p.whatsapp} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-cyan"><Phone size={22} /></div>
              <div className="font-display text-xl font-bold">+{p.display}</div>
              <div className="mt-4 flex flex-col gap-2">
                <a href={`tel:+${p.whatsapp}`} className="btn-secondary py-2.5 text-sm w-full"><Phone size={16}/> Appeler</a>
                <a href={`https://wa.me/${p.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5 text-sm w-full"><MessageCircle size={16}/> WhatsApp</a>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">{contacts.location} · {contacts.period}</p>
      </div>
    </section>
  );
}

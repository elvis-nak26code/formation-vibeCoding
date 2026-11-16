import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle, Send } from 'lucide-react';
import { submitRegistration } from '../../lib/api';

const levels = [
  { value: 'beginner', label: 'Débutant complet' },
  { value: 'some', label: 'Quelques notions' },
  { value: 'intermediate', label: 'Intermédiaire' },
  { value: 'advanced', label: 'Avancé' },
];

const techOptions = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'PHP', 'Java', 'Autres'];
const dialCodes = ['+226', '+225', '+223', '+229', '+228', '+227', '+221', '+33', '+1', '+212', '+237', '+ Autre'];

const initial = {
  fullName: '', email: '', dialCode: '+226', phone: '', programmingLevel: '',
  technologies: [], otherTech: '', expectations: '', motivation: '', consent: false,
};

function validate(f) {
  const e = {};
  if (!f.fullName.trim()) e.fullName = 'Le nom complet est requis.';
  if (!f.email.trim()) e.email = "L'adresse email est requise.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Email invalide.';
  if (!f.phone.trim()) e.phone = 'Le numéro de téléphone est requis.';
  else if (!/^[0-9\s.-]{6,20}$/.test(f.phone)) e.phone = 'Numéro de téléphone invalide.';
  if (!f.programmingLevel) e.programmingLevel = 'Sélectionnez votre niveau.';
  if (!f.expectations.trim()) e.expectations = 'Veuillez indiquer vos attentes.';
  if (!f.motivation.trim()) e.motivation = 'Veuillez indiquer votre motivation.';
  if (!f.consent) e.consent = 'Le consentement est requis pour envoyer votre inscription.';
  return e;
}

export default function Registration() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState(false);

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
    setServerError('');
  };

  const toggleTech = (t) => {
    setForm((f) => ({
      ...f,
      technologies: f.technologies.includes(t) ? f.technologies.filter((x) => x !== t) : [...f.technologies, t],
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    const techs = [...form.technologies];
    if (form.technologies.includes('Autres') && form.otherTech.trim()) {
      techs.push(...form.otherTech.split(',').map((s) => s.trim()).filter(Boolean));
    }
    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: `${form.dialCode} ${form.phone.trim()}`.trim(),
      programmingLevel: form.programmingLevel,
      technologies: [...new Set(techs)],
      expectations: form.expectations.trim(),
      motivation: form.motivation.trim(),
      consent: form.consent,
    };

    setLoading(true);
    setServerError('');
    try {
      await submitRegistration(payload);
      setSuccess(true);
      setForm(initial);
    } catch (err) {
      const msg = err?.data?.errors ? err.data.errors.map((x) => x.message).join(' ') : err.message;
      setServerError(msg || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="inscription" className="section bg-bg2/30">
        <div className="container-page max-w-3xl">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="card p-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-400"><CheckCircle2 size={34} /></div>
            <h2 className="font-display text-3xl font-bold">Inscription enregistrée</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto">Merci ! Votre demande d'inscription a bien été reçue. L'équipe vous contactera prochainement avec les informations pratiques.</p>
            <button className="btn-secondary mt-6" onClick={() => setSuccess(false)}>Envoyer une autre inscription</button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscription" className="section bg-bg2/30">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Formulaire d'inscription</h2>
          <p className="section-sub mx-auto">Réservez votre place pour la formation Vibe Coding. Les champs marqués sont requis.</p>
        </motion.div>
        <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={onSubmit} className="mt-12 max-w-4xl mx-auto card p-6 sm:p-8 lg:p-10 space-y-6" noValidate>
          {serverError && (
            <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200"><AlertCircle size={18} className="mt-0.5 shrink-0"/> <span>{serverError}</span></div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="label" htmlFor="fullName">Nom complet *</label>
              <input id="fullName" className="input" value={form.fullName} onChange={(e) => set('fullName', e.target.value)} placeholder="Ex. Aïcha Traoré" autoComplete="name" />
              {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
            </div>
            <div>
              <label className="label" htmlFor="email">Adresse email *</label>
              <input id="email" type="email" className="input" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="vous@example.com" autoComplete="email" />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="label" htmlFor="phone">Numéro de téléphone (avec indicatif) *</label>
              <div className="flex gap-2">
                <select className="input w-32" value={form.dialCode} onChange={(e) => set('dialCode', e.target.value)} aria-label="Indicatif pays">
                  {dialCodes.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <input id="phone" className="input flex-1" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="70 00 00 00" autoComplete="tel-national" />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
            </div>
            <div>
              <label className="label" htmlFor="level">Niveau en programmation *</label>
              <select id="level" className="input" value={form.programmingLevel} onChange={(e) => set('programmingLevel', e.target.value)}>
                <option value="">Sélectionnez...</option>
                {levels.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
              </select>
              {errors.programmingLevel && <p className="mt-1 text-xs text-red-400">{errors.programmingLevel}</p>}
            </div>
          </div>

          <div>
            <span className="label">Technologies déjà connues</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
              {techOptions.map((t) => (
                <label key={t} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer transition ${form.technologies.includes(t) ? 'border-cyan/50 bg-cyan/10 text-text' : 'border-white/10 bg-white/5 text-muted hover:border-white/20'}`}>
                  <input type="checkbox" className="accent-electric" checked={form.technologies.includes(t)} onChange={() => toggleTech(t)} />
                  {t}
                </label>
              ))}
            </div>
            {form.technologies.includes('Autres') && (
              <input className="input mt-3" placeholder="Précisez d'autres technologies (séparées par des virgules)" value={form.otherTech} onChange={(e) => set('otherTech', e.target.value)} />
            )}
          </div>

          <div>
            <label className="label" htmlFor="expectations">Quelles sont tes attentes ? *</label>
            <textarea id="expectations" rows={4} className="input resize-y" value={form.expectations} onChange={(e) => set('expectations', e.target.value)} placeholder="Décrivez ce que vous attendez de la formation..." />
            {errors.expectations && <p className="mt-1 text-xs text-red-400">{errors.expectations}</p>}
          </div>

          <div>
            <label className="label" htmlFor="motivation">Pourquoi souhaites-tu participer à cette formation ? *</label>
            <textarea id="motivation" rows={4} className="input resize-y" value={form.motivation} onChange={(e) => set('motivation', e.target.value)} placeholder="Expliquez votre motivation..." />
            {errors.motivation && <p className="mt-1 text-xs text-red-400">{errors.motivation}</p>}
          </div>

          <div className="border-t border-white/10 pt-4">
            <label className="flex items-start gap-3 text-sm text-muted cursor-pointer">
              <input type="checkbox" className="mt-1 accent-electric" checked={form.consent} onChange={(e) => set('consent', e.target.checked)} />
              <span>J'accepte que mes données personnelles soient collectées et traitées dans le cadre de la gestion de mon inscription à la formation Vibe Coding. Ces informations ne seront pas rendues publiques et seront utilisées uniquement pour le suivi des inscriptions et la communication liée à la formation. *</span>
            </label>
            {errors.consent && <p className="mt-1 text-xs text-red-400">{errors.consent}</p>}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button type="submit" className="btn-primary w-full sm:w-auto min-w-[220px]" disabled={loading}>
              {loading ? <><Loader2 size={18} className="animate-spin" /> Envoi en cours...</> : <><Send size={18} /> Envoyer mon inscription</>}
            </button>
            <p className="text-xs text-muted">Vos informations sont transmises de manière sécurisée et ne sont jamais affichées publiquement.</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

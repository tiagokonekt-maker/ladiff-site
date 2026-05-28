import { Calendar, CreditCard, HelpingHand, Clock3 } from 'lucide-react';
import { Reveal } from './Reveal';

const modalites = [
  {
    icon: Clock3,
    title: 'Demi-journée',
    desc: 'Du lundi au vendredi, de 9h à 12h ou de 14h à 17h.',
    accent: 'olive',
  },
  {
    icon: Calendar,
    title: 'Journée complète',
    desc: 'Possible si la famille prévoit un repas froid pour le midi.',
    accent: 'soleil',
  },
  {
    icon: HelpingHand,
    title: 'Créneau familles',
    desc: 'Le lundi après-midi est réservé pour accueillir les familles et préparer l\'arrivée.',
    accent: 'lavande',
  },
  {
    icon: CreditCard,
    title: 'Paiement & MDPH',
    desc: 'Réglement en CESU (Chèques Emploi Service). Une aide MDPH peut être accordée selon la situation.',
    accent: 'tomette',
  },
];

const accentBg: Record<string, string> = {
  olive: 'bg-olive-100 text-olive-700',
  soleil: 'bg-soleil-100 text-soleil-800',
  lavande: 'bg-lavande-100 text-lavande-700',
  tomette: 'bg-tomette-100 text-tomette-700',
};

export function Modalites() {
  return (
    <section className="py-20 lg:py-28 bg-creme-100/40">
      <div className="container-page">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Modalités pratiques</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-olive-900 leading-tight">
              Un accueil souple,<br />
              <span className="italic text-olive-700">des conditions claires.</span>
            </h2>
            <p className="mt-6 text-olive-800/85 leading-relaxed">
              Pour faciliter l'accès et accompagner les familles dans leurs démarches.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modalites.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-creme-50 p-6 border border-olive-100">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${accentBg[m.accent]}`}>
                  <m.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg text-olive-900 mb-2">{m.title}</h3>
                <p className="text-sm text-olive-700/85 leading-relaxed">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-10 text-center text-xs text-olive-600/80 max-w-2xl mx-auto">
            Les conditions précises (fréquence, accompagnement, tarification au CESU) sont
            définies ensemble lors d'un premier échange. La Maison Départementale des
            Personnes Handicapées (MDPH) peut être un interlocuteur pour les démarches d'aide.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

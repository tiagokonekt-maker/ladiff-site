import { Sprout, Flower2, Leaf, Hand } from 'lucide-react';
import { Reveal } from './Reveal';
import rempotageImg from '@/assets/atelier-rempotage.jpg';
import massifImg from '@/assets/massif-soucis.jpg';
import entretienImg from '@/assets/atelier-entretien.jpg';
import semisImg from '@/assets/stephane-semis.jpg';

const ateliers = [
  {
    icon: Sprout,
    title: 'Horticulture',
    description:
      'Semis, bouturage, repiquage, rempotage. Les gestes essentiels qui développent la motricité fine et la concentration.',
    image: rempotageImg,
    techniques: ['Semis', 'Bouturage', 'Repiquage', 'Rempotage'],
    alt: 'Atelier de rempotage : mains qui travaillent la terre sur une table de pépinière',
  },
  {
    icon: Flower2,
    title: 'Massifs et plantations',
    description:
      'De la préparation du sol à la plantation, chaque étape travaille le repérage dans l\'espace, le choix et la coopération.',
    image: massifImg,
    techniques: ['Travail du sol', 'Plantations', 'Choix des espèces'],
    alt: 'Massif de soucis orangés autour d\'une vasque, dans le jardin de la pépinière',
  },
  {
    icon: Leaf,
    title: 'Entretien des espaces verts',
    description:
      'Désherbage, taille, tonte. Découverte des outils et apprentissage des gestes structurants de l\'entretien.',
    image: entretienImg,
    techniques: ['Désherbage', 'Taille', 'Tonte', 'Outils adaptés'],
    alt: 'Personne accueillie à La DIFF\' en train de tondre la pelouse dans le jardin de la pépinière',
  },
  {
    icon: Hand,
    title: 'Potager bio et activités manuelles',
    description:
      'Potager biologique sur buttes, peinture sur pots, cadres végétaux, tableaux de sable. Le plaisir de réaliser de ses mains.',
    image: semisImg,
    techniques: ['Potager bio', 'Peinture sur pots', 'Créations végétales'],
    alt: 'Stéphane Knipping en train de faire des semis en pleine terre dans le potager',
  },
];

export function Workshops() {
  return (
    <section id="accompagnements" className="py-20 lg:py-28 bg-creme-100/40">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">Nos accompagnements</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-olive-900 leading-tight">
              Cultiver, créer,<br />
              <span className="italic text-olive-700">apprendre ensemble.</span>
            </h2>
            <p className="mt-6 text-olive-800/85 leading-relaxed">
              Nos activités s'articulent autour de l'horticulture, des espaces verts
              et des créations manuelles. Chacune valorise les capacités et favorise
              des apprentissages transposables au quotidien.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {ateliers.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <article className="group h-full bg-creme-50 rounded-2xl overflow-hidden border border-olive-100 hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-olive-100 text-olive-700 flex items-center justify-center">
                      <a.icon size={18} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl text-olive-900">{a.title}</h3>
                  </div>
                  <p className="text-sm text-olive-700/90 leading-relaxed">
                    {a.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {a.techniques.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-olive-50 border border-olive-200 px-2.5 py-1 text-[11px] text-olive-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Cadre vivant : animaux */}
        <Reveal delay={200}>
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-olive-100 via-creme-100 to-soleil-100 p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6">
            <div className="text-5xl shrink-0">🐐 🐔 🐷</div>
            <div>
              <h3 className="font-display text-xl text-olive-900 mb-2">
                Un cadre vivant, pas qu'un atelier
              </h3>
              <p className="text-sm text-olive-800/85 leading-relaxed">
                La pépinière abrite aussi quelques animaux qui font partie de l'ambiance
                du lieu : ils apportent du calme, de la curiosité et beaucoup de sourires
                aux personnes accueillies.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

const faqItems = [
  {
    q: 'Qui peut être accueilli à La DIFF\' ?',
    a: 'L\'Association La DIFF\' accueille des jeunes et des adultes en situation de handicap intellectuel ainsi que des personnes présentant des troubles du spectre de l\'autisme (TSA). Notre objet associatif déclaré au Journal Officiel vise particulièrement les personnes en rupture de parcours, sans solution adaptée ou en attente de place en institut spécialisé.',
  },
  {
    q: 'Où se trouve la pépinière ?',
    a: 'La pépinière de la Trévaresse se situe au 210 route du Moulin, 13100 Aix-en-Provence, dans le quartier de la Trévaresse à Puyricard, au nord d\'Aix-en-Provence.',
  },
  {
    q: 'Quels sont les horaires d\'accueil ?',
    a: 'L\'accueil se fait du lundi au vendredi, en demi-journée (9h-12h ou 14h-17h) ou en journée complète. Le créneau du lundi après-midi est réservé pour accueillir les familles et préparer l\'arrivée des personnes accompagnées. Pour les journées complètes, la famille prévoit un repas froid pour le midi.',
  },
  {
    q: 'Comment se déroule un premier contact ?',
    a: 'Tout commence par un échange téléphonique ou par e-mail. Nous prenons ensuite rendez-vous pour une rencontre sur place, afin de présenter le lieu, de discuter du projet et de vérifier ensemble que le cadre proposé correspond aux besoins de la personne à accueillir.',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: 'Le paiement se fait en CESU (Chèques Emploi Service Universel). Selon la situation de la personne accueillie, une aide financière peut être accordée par la Maison Départementale des Personnes Handicapées (MDPH) des Bouches-du-Rhône. Nous accompagnons les familles dans ces démarches.',
  },
  {
    q: 'Faut-il avoir des connaissances en horticulture ?',
    a: 'Pas du tout. Notre vocation n\'est pas de former des horticulteurs professionnels. L\'horticulture, le jardinage et les espaces verts sont des supports éducatifs pour transmettre des gestes, des méthodes de travail et des repères qui pourront être transposés au quotidien.',
  },
  {
    q: 'Y a-t-il un encadrement éducatif diplômé ?',
    a: 'Oui. L\'accueil est assuré par Stéphane Knipping, Éducateur Technique Spécialisé diplômé d\'État (Académie d\'Aix-Marseille, 2007) et titulaire d\'un Brevet d\'études professionnelles agricoles option Horticulture. Cette double formation permet d\'allier compétence éducative et savoir-faire horticole.',
  },
  {
    q: 'Quelles activités sont proposées concrètement ?',
    a: 'Les activités s\'articulent autour de l\'horticulture (semis, bouturage, repiquage, rempotage), de la réalisation de massifs, du potager biologique sur buttes, de l\'entretien des espaces verts (désherbage, taille) et d\'activités manuelles créatives (peinture sur pots, créations végétales, tableaux de sable).',
  },
  {
    q: 'L\'association est-elle officiellement déclarée ?',
    a: 'Oui. L\'Association La DIFF\' est une association loi 1901 déclarée au Journal Officiel le 16 mars 2019. Elle est immatriculée à l\'INSEE (SIREN 851 362 269, RNA W131 015 663) et reconnue comme structure de l\'Économie Sociale et Solidaire (CRESS PACA).',
  },
  {
    q: 'Peut-on visiter le lieu avant de s\'engager ?',
    a: 'Bien sûr, c\'est même vivement recommandé. Une visite permet à la personne accueillie comme à sa famille de découvrir le cadre naturel, le matériel et l\'ambiance avant de prendre une décision.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Injecte le Schema.org FAQPage dynamiquement
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-olive-900 leading-tight">
              Vos questions,<br />
              <span className="italic text-olive-700">nos réponses.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => (
            <Reveal key={item.q} delay={i * 40}>
              <div className="rounded-2xl border border-olive-200 bg-creme-50 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-olive-50/40 transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-display text-base lg:text-lg text-olive-900 leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-olive-700 shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm text-olive-800/90 leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

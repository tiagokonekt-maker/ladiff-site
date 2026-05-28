import { Info } from 'lucide-react';
import { Reveal } from './Reveal';
import serreImg from '@/assets/pepiniere-serre-2.jpg';

export function PublicSection() {
  return (
    <section id="public" className="py-20 lg:py-28">
      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={serreImg}
                alt="Intérieur de la serre de la pépinière : plantes en pots multicolores sous une grande verrière"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">Public accueilli</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-olive-900 leading-tight">
              Pour celles et ceux<br />
              <span className="italic text-olive-700">qui ont besoin d'un autre lieu.</span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 text-olive-800/90 leading-relaxed">
              Selon notre objet associatif déclaré au Journal Officiel, La DIFF' accueille
              spécifiquement des <strong>personnes en situation de handicap intellectuel</strong>{' '}
              ainsi que des <strong>jeunes et adultes présentant des troubles du spectre de
              l'autisme (TSA)</strong>.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <ul className="mt-7 space-y-3">
              {[
                { label: 'En rupture de parcours', desc: 'Hors institution ou en transition' },
                { label: 'Sans solution adaptée', desc: 'En attente d\'une place adaptée' },
                { label: 'En attente d\'institut', desc: 'Maintenir un cadre et des activités' },
                { label: 'Au domicile', desc: 'Pour les familles qui souhaitent un relais' },
              ].map((item) => (
                <li key={item.label} className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-soleil-500" />
                  <div>
                    <span className="font-medium text-olive-900">{item.label}</span>
                    <span className="text-olive-700/80"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-8 rounded-xl bg-olive-50 border-l-4 border-olive-500 p-5 flex gap-3 items-start">
              <Info size={18} className="text-olive-700 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-olive-800 leading-relaxed">
                <strong>Chaque accueil est étudié au cas par cas.</strong> Avant tout démarrage,
                nous échangeons avec la personne, sa famille et les professionnels qui
                l'accompagnent pour nous assurer que le cadre proposé correspond à ses besoins.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

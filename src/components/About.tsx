import { GraduationCap, Sprout } from 'lucide-react';
import { Reveal } from './Reveal';
import stephaneImg from '@/assets/stephane-stand.jpg';

export function About() {
  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-creme-100/40">
      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={stephaneImg}
                alt="Stéphane Knipping, éducateur technique spécialisé fondateur de l'Association La DIFF', sur son stand de plants à Puyricard"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">L'éducateur</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-olive-900 leading-tight">
              Stéphane Knipping,<br />
              <span className="italic text-olive-700">à la croisée de deux savoir-faire.</span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 space-y-5 text-olive-800/90 leading-relaxed">
              <p>
                Stéphane Knipping est <strong>Éducateur Technique Spécialisé</strong>, diplômé d'État
                par l'Académie d'Aix-Marseille en 2007. Il est également titulaire d'un{' '}
                <strong>Brevet d'études professionnelles agricoles option Horticulture</strong>
                (Pépinières d'ornement et fruitières).
              </p>
              <p>
                Né à Aix-en-Provence en 1970, il a repris la pépinière familiale de la Trévaresse,
                gérée durant des années par son père. Avec l'Association La DIFF', il l'a
                transformée en un lieu d'accueil pédagogique pour des jeunes et adultes en
                situation de handicap intellectuel ou présentant des troubles du spectre de
                l'autisme.
              </p>
              <p className="font-display text-lg italic text-olive-700 border-l-4 border-soleil-400 pl-5 py-1">
                « L'objectif n'est pas de former des horticulteurs, mais d'aider chacun à progresser. »
              </p>
            </div>
          </Reveal>

          {/* Cartes des qualifications */}
          <Reveal delay={300}>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-creme-50 border border-olive-100 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-olive-100 text-olive-700 flex items-center justify-center">
                    <GraduationCap size={18} aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.15em] text-olive-600">
                    Diplôme d'État
                  </span>
                </div>
                <p className="font-display text-base text-olive-900 leading-snug">
                  Éducateur Technique Spécialisé
                </p>
                <p className="text-xs text-olive-700/80 mt-1">
                  Académie d'Aix-Marseille, 2007
                </p>
              </div>

              <div className="rounded-xl bg-creme-50 border border-olive-100 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-soleil-100 text-soleil-700 flex items-center justify-center">
                    <Sprout size={18} aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.15em] text-olive-600">
                    Brevet professionnel
                  </span>
                </div>
                <p className="font-display text-base text-olive-900 leading-snug">
                  Études agricoles — Horticulture
                </p>
                <p className="text-xs text-olive-700/80 mt-1">
                  Pépinières d'ornement et fruitières
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

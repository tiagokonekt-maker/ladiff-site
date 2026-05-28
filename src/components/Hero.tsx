import { ArrowRight, MapPin, Clock, Users } from 'lucide-react';
import { Reveal } from './Reveal';
import heroImg from '@/assets/pepiniere-serre-1.jpg';

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-12 lg:pt-20 pb-20 lg:pb-24"
    >
      {/* Fonds décoratifs doux */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-soleil-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-olive-100/40 blur-3xl" />
      </div>

      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">Association loi 1901 · Depuis 2019</span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-olive-900">
              Un lieu pour grandir,<br />
              <span className="italic text-olive-700">à son rythme.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base lg:text-lg leading-relaxed text-olive-800/85">
              Nous vous accueillons à la pépinière de la Trévaresse, à Puyricard,
              pour accompagner jeunes et adultes en situation de handicap intellectuel
              ou présentant des troubles du spectre de l'autisme. L'horticulture et
              la nature comme supports éducatifs, dans un cadre rassurant.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Prendre contact
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#accompagnements" className="btn-secondary">
                Découvrir nos ateliers
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-olive-700/85">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-olive-600" aria-hidden="true" />
                Puyricard, Aix-en-Provence
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-soleil-600" aria-hidden="true" />
                Demi-journée ou journée
              </li>
              <li className="flex items-center gap-2">
                <Users size={14} className="text-lavande-600" aria-hidden="true" />
                Jeunes et adultes
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={200}>
            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={heroImg}
                  alt="Vue de la pépinière de la Trévaresse : tables jaunes et paniers de fleurs dans la serre"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Étiquette flottante */}
              <div className="absolute -bottom-5 -left-5 bg-creme-50 rounded-2xl py-3 px-4 shadow-lg border border-olive-100 hidden sm:block max-w-[220px]">
                <p className="text-xs uppercase tracking-[0.15em] text-olive-600 mb-1">
                  Notre lieu
                </p>
                <p className="font-display text-sm text-olive-900 leading-snug">
                  Pépinière de la Trévaresse, Puyricard
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

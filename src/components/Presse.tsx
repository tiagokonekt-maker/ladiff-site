import { Newspaper } from 'lucide-react';
import { Reveal } from './Reveal';
import presseImg from '@/assets/article-presse.jpg';

export function Presse() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-creme-100">
              <img
                src={presseImg}
                alt="Article de presse locale consacré à l'Association La DIFF' à la pépinière de la Trévaresse"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-soleil-100 text-soleil-800 px-4 py-1.5 text-xs uppercase tracking-[0.15em] font-medium">
              <Newspaper size={14} aria-hidden="true" />
              Vu dans la presse locale
            </div>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-olive-900 leading-tight">
              « Semer les graines<br />
              <span className="italic text-olive-700">de l'espoir. »</span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-7 text-olive-800/90 leading-relaxed">
              La pépinière de la Trévaresse a fait l'objet d'un reportage dans la presse
              locale, mettant en lumière le travail de l'association auprès d'adultes en
              situation de handicap intellectuel ou présentant des troubles du spectre
              autistique.
            </p>
            <p className="mt-4 text-olive-800/85 leading-relaxed text-sm">
              L'article décrit comment les personnes accueillies « trouvent ici un lieu
              apaisant qui leur permet de travailler en équipe, respecter les consignes,
              le lieu, le matériel, sortir de leurs habitudes et acquérir une certaine
              autonomie ».
            </p>
          </Reveal>

          <Reveal delay={300}>
            <blockquote className="mt-8 font-display italic text-xl lg:text-2xl text-olive-700 border-l-4 border-soleil-400 pl-6 py-2 leading-snug">
              « L'objectif n'est pas de former des horticulteurs mais de les aider à progresser. »
              <footer className="not-italic mt-3 text-sm text-olive-600 font-sans">
                — Stéphane Knipping, dans la presse locale
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

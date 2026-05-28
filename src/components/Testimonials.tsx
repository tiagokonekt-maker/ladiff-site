import { MessageCircle, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function Testimonials() {
  return (
    <section id="temoignages" className="py-20 lg:py-28 bg-creme-100/40">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Témoignages</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-olive-900 leading-tight">
              La parole à celles<br />
              <span className="italic text-olive-700">et ceux qui nous connaissent.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 rounded-3xl border-2 border-dashed border-olive-300 bg-creme-50 p-10 sm:p-12 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-soleil-100 mb-5">
              <MessageCircle size={26} className="text-soleil-700" aria-hidden="true" />
            </div>
            <h3 className="font-display text-2xl text-olive-900">
              Témoignages bientôt disponibles
            </h3>
            <p className="mt-4 text-olive-700/85 leading-relaxed max-w-xl mx-auto">
              Nous préférons publier de véritables retours, recueillis avec l'accord des
              familles et partenaires concernés, plutôt que des avis inventés. Cette
              section sera prochainement enrichie.
            </p>
            <p className="mt-3 text-sm text-olive-600/80 max-w-xl mx-auto">
              Vous êtes une famille, un partenaire ou une institution et souhaitez
              partager votre expérience avec La DIFF' ?
            </p>
            <a href="#contact" className="btn-primary mt-7">
              Partager mon expérience
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

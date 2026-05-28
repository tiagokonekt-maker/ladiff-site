import { Heart, Sprout, Users, Sun } from 'lucide-react';
import { Reveal } from './Reveal';

const valeurs = [
  {
    icon: Heart,
    title: 'Bienveillance',
    desc: 'Un accueil chaleureux qui respecte la fragilité, le rythme et le niveau de chacun.',
    color: 'tomette',
  },
  {
    icon: Sprout,
    title: 'Autonomie',
    desc: "Transmettre les gestes, les méthodes et les repères pour progresser au quotidien.",
    color: 'olive',
  },
  {
    icon: Users,
    title: 'Inclusion',
    desc: 'Le respect de soi, des autres, du lieu et du matériel comme socle du vivre-ensemble.',
    color: 'lavande',
  },
  {
    icon: Sun,
    title: 'Épanouissement',
    desc: 'Valoriser les réussites, cultiver le plaisir des sens et la fierté du geste accompli.',
    color: 'soleil',
  },
];

const colorClasses: Record<string, string> = {
  tomette: 'bg-tomette-100 text-tomette-700',
  olive: 'bg-olive-100 text-olive-700',
  lavande: 'bg-lavande-100 text-lavande-700',
  soleil: 'bg-soleil-100 text-soleil-800',
};

export function Values() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Notre approche</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-olive-900 leading-tight">
              L'humain avant tout,<br />
              <span className="italic text-olive-700">la nature comme support.</span>
            </h2>
            <p className="mt-6 text-olive-800/85 leading-relaxed">
              Notre vocation n'est pas de former des horticulteurs professionnels, mais de
              transmettre des méthodes de travail, des gestes adaptés et des savoir-être
              qui pourront être transposés au quotidien.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valeurs.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="group h-full bg-creme-50 rounded-2xl p-6 border border-olive-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div
                  className={`h-11 w-11 rounded-xl flex items-center justify-center mb-5 ${colorClasses[v.color]} group-hover:scale-110 transition-transform`}
                >
                  <v.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg text-olive-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-olive-700/85 leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from './Reveal';

const credentials = [
  { value: '2019', label: 'Association loi 1901', sublabel: 'Déclarée au JO le 16 mars 2019' },
  { value: 'D.E.', label: 'Éducateur Technique Spécialisé', sublabel: 'Diplôme d\'État · Académie d\'Aix-Marseille' },
  { value: 'ESS', label: 'Économie Sociale et Solidaire', sublabel: 'Reconnue par la CRESS PACA' },
];

export function Trust() {
  return (
    <section className="py-20 lg:py-28 bg-olive-800 text-creme-100 relative overflow-hidden">
      {/* Motif décoratif */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
          <pattern id="dots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="0.4" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container-page relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-soleil-300 font-medium">
              Pourquoi nous faire confiance
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-creme-50">
              Une approche éprouvée,<br />
              <span className="italic text-soleil-200">un engagement reconnu.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-8">
          {credentials.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <div className="text-center">
                <p className="font-display text-5xl lg:text-6xl font-medium text-soleil-300">
                  {c.value}
                </p>
                <p className="mt-4 font-display text-lg text-creme-50">{c.label}</p>
                <p className="mt-1 text-xs text-creme-200/80 max-w-[240px] mx-auto">
                  {c.sublabel}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-14 text-center text-xs text-creme-200/70 max-w-2xl mx-auto">
            SIREN&nbsp;851&nbsp;362&nbsp;269 · SIRET&nbsp;851&nbsp;362&nbsp;269&nbsp;00017 ·
            N°RNA&nbsp;W131&nbsp;015&nbsp;663 — Justificatifs disponibles sur demande.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

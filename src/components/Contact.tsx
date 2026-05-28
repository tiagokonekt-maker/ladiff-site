import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Facebook, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Reveal } from './Reveal';

type FormState = 'idle' | 'sending' | 'success' | 'error';

// ============================================================
// CONFIGURATION FORMSPREE
// ============================================================
// 1. Aller sur https://formspree.io et créer un compte gratuit
//    (utiliser stephaneknipping@orange.fr)
// 2. Créer un nouveau formulaire ("New form")
// 3. Récupérer l'identifiant (ex : "xqkr1234")
// 4. Remplacer ci-dessous "VOTRE_ID_FORMSPREE" par cet identifiant
// 5. Les messages arriveront directement sur l'email du compte Formspree
// ============================================================
const FORMSPREE_ID = 'VOTRE_ID_FORMSPREE';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
const IS_CONFIGURED = FORMSPREE_ID !== 'VOTRE_ID_FORMSPREE';

export function Contact() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    setErrorMessage('');

    // Si Formspree n'est pas encore configuré, on prévient honnêtement
    if (!IS_CONFIGURED) {
      setTimeout(() => {
        setState('error');
        setErrorMessage(
          "Le formulaire n'est pas encore connecté. En attendant, contactez-nous directement par téléphone au 06 12 84 05 89 ou par e-mail à stephaneknipping@orange.fr."
        );
      }, 400);
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.errors?.[0]?.message || 'Échec de l\'envoi');
      }

      setState('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState('error');
      setErrorMessage(
        "L'envoi a échoué. Vous pouvez nous joindre directement au 06 12 84 05 89 ou à stephaneknipping@orange.fr."
      );
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-creme-100/40">
      <div className="container-page">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-olive-900 leading-tight">
              Échangeons<br />
              <span className="italic text-olive-700">sur votre projet.</span>
            </h2>
            <p className="mt-6 text-olive-800/85 leading-relaxed">
              Pour toute question, demande d'accueil ou visite, n'hésitez pas à nous joindre.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Coordonnées */}
          <div className="lg:col-span-5">
            <Reveal>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-tomette-100 flex items-center justify-center">
                    <MapPin size={20} className="text-tomette-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-base text-olive-900">Adresse</p>
                    <p className="text-sm text-olive-700/85 mt-1 leading-relaxed">
                      La DIFF', Pépinière de la Trévaresse<br />
                      210 route du Moulin<br />
                      13100 Aix-en-Provence
                    </p>
                    <p className="text-xs text-olive-600/80 mt-1">
                      Quartier de la Trévaresse, Puyricard
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-olive-100 flex items-center justify-center">
                    <Phone size={20} className="text-olive-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-base text-olive-900">Téléphone</p>
                    <a
                      href="tel:0612840589"
                      className="text-sm text-olive-700 hover:text-olive-900 transition-colors mt-1 inline-block"
                    >
                      06 12 84 05 89
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-soleil-100 flex items-center justify-center">
                    <Mail size={20} className="text-soleil-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-base text-olive-900">E-mail</p>
                    <a
                      href="mailto:stephaneknipping@orange.fr"
                      className="text-sm text-olive-700 hover:text-olive-900 transition-colors mt-1 inline-block break-all"
                    >
                      stephaneknipping@orange.fr
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-lavande-100 flex items-center justify-center">
                    <Clock size={20} className="text-lavande-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-base text-olive-900">Horaires d'accueil</p>
                    <p className="text-sm text-olive-700/85 mt-1 leading-relaxed">
                      Du lundi au vendredi<br />
                      9h-12h ou 14h-17h
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-ciel-200 flex items-center justify-center">
                    <Facebook size={20} className="text-olive-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-base text-olive-900">Suivez-nous</p>
                    <a
                      href="https://www.facebook.com/profile.php?id=100057094854257"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-olive-700 hover:text-olive-900 transition-colors mt-1 inline-block"
                    >
                      Page Facebook
                    </a>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="rounded-3xl bg-creme-50 border border-olive-100 p-7 lg:p-9">
                {state === 'success' ? (
                  <div className="text-center py-8">
                    <CheckCircle className="mx-auto text-olive-600 mb-4" size={42} aria-hidden="true" />
                    <h3 className="font-display text-2xl text-olive-900">Message bien reçu !</h3>
                    <p className="mt-3 text-olive-700/85">
                      Nous reviendrons vers vous dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setState('idle')}
                      className="mt-6 text-sm text-olive-700 hover:text-olive-900 underline underline-offset-4"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl text-olive-900 mb-1">Écrivez-nous</h3>
                    <p className="text-sm text-olive-700/85 mb-6">
                      Nous vous répondrons rapidement.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="nom" className="block text-xs font-medium text-olive-900 mb-1.5">
                            Nom complet <span className="text-tomette-600">*</span>
                          </label>
                          <input
                            id="nom"
                            name="nom"
                            type="text"
                            required
                            className="w-full rounded-lg border border-olive-200 bg-creme-50 px-3 py-2.5 text-sm text-olive-900 placeholder:text-olive-400 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-medium text-olive-900 mb-1.5">
                            E-mail <span className="text-tomette-600">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full rounded-lg border border-olive-200 bg-creme-50 px-3 py-2.5 text-sm text-olive-900 placeholder:text-olive-400 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200"
                            placeholder="vous@exemple.fr"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="telephone" className="block text-xs font-medium text-olive-900 mb-1.5">
                          Téléphone
                        </label>
                        <input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          className="w-full rounded-lg border border-olive-200 bg-creme-50 px-3 py-2.5 text-sm text-olive-900 placeholder:text-olive-400 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200"
                          placeholder="06 00 00 00 00"
                        />
                      </div>

                      <div>
                        <label htmlFor="sujet" className="block text-xs font-medium text-olive-900 mb-1.5">
                          Sujet
                        </label>
                        <select
                          id="sujet"
                          name="sujet"
                          className="w-full rounded-lg border border-olive-200 bg-creme-50 px-3 py-2.5 text-sm text-olive-900 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200"
                        >
                          <option value="">Choisir un sujet…</option>
                          <option>Demande d'accueil</option>
                          <option>Visite du lieu</option>
                          <option>Partenariat institutionnel</option>
                          <option>Partager un témoignage</option>
                          <option>Autre</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-medium text-olive-900 mb-1.5">
                          Votre message <span className="text-tomette-600">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full rounded-lg border border-olive-200 bg-creme-50 px-3 py-2.5 text-sm text-olive-900 placeholder:text-olive-400 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200 resize-none"
                          placeholder="Décrivez votre besoin, votre projet ou votre situation…"
                        />
                      </div>

                      {state === 'error' && (
                        <div className="rounded-lg bg-tomette-50 border border-tomette-200 p-3 flex gap-2 items-start">
                          <AlertCircle className="text-tomette-600 shrink-0 mt-0.5" size={16} aria-hidden="true" />
                          <p className="text-xs text-tomette-800 leading-relaxed">
                            {errorMessage || 'Une erreur est survenue. Vous pouvez aussi nous joindre par téléphone.'}
                          </p>
                        </div>
                      )}

                      <p className="text-[11px] text-olive-600/80">
                        Les informations recueillies sont utilisées uniquement pour répondre à votre demande.
                        Conformément au RGPD, vous disposez d'un droit d'accès et de suppression.
                      </p>

                      <button
                        type="submit"
                        disabled={state === 'sending'}
                        className="btn-primary w-full sm:w-auto disabled:opacity-50"
                      >
                        {state === 'sending' ? (
                          'Envoi en cours…'
                        ) : (
                          <>
                            Envoyer le message
                            <Send size={14} aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Carte */}
        <Reveal delay={300}>
          <div className="mt-12 rounded-2xl overflow-hidden border border-olive-200 shadow-sm">
            <iframe
              title="Plan d'accès — Pépinière de la Trévaresse"
              src="https://www.google.com/maps?q=210+Route+du+Moulin,+13100+Aix-en-Provence&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

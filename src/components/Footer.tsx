import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-olive-900 text-creme-100">
      <div className="container-page py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="bg-creme-50 inline-block rounded-2xl px-4 py-3">
              <Logo />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-creme-200">
              Lieu d'accueil pour jeunes et adultes en situation de handicap intellectuel
              ou présentant des troubles du spectre de l'autisme. À la pépinière de la
              Trévaresse, Puyricard, Aix-en-Provence.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100057094854257"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-creme-200 hover:text-soleil-300 transition-colors"
            >
              <Facebook size={16} aria-hidden="true" />
              Suivre sur Facebook
            </a>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-display text-lg text-creme-50 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={15} className="text-soleil-300 mt-1 shrink-0" aria-hidden="true" />
                <span className="text-creme-200">
                  Pépinière de la Trévaresse<br />
                  210 route du Moulin<br />
                  13100 Aix-en-Provence
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-soleil-300 shrink-0" aria-hidden="true" />
                <a href="tel:0612840589" className="text-creme-200 hover:text-soleil-300 transition-colors">
                  06 12 84 05 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-soleil-300 shrink-0" aria-hidden="true" />
                <a href="mailto:stephaneknipping@orange.fr" className="text-creme-200 hover:text-soleil-300 transition-colors break-all">
                  stephaneknipping@orange.fr
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-lg text-creme-50 mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-creme-200">
              <li><a href="#a-propos" className="hover:text-soleil-300 transition-colors">À propos</a></li>
              <li><a href="#accompagnements" className="hover:text-soleil-300 transition-colors">Accompagnements</a></li>
              <li><a href="#public" className="hover:text-soleil-300 transition-colors">Public accueilli</a></li>
              <li><a href="#faq" className="hover:text-soleil-300 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-soleil-300 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-olive-700/50 flex flex-wrap justify-between gap-4 text-[11px] text-creme-300/70">
          <p>© {new Date().getFullYear()} Association La DIFF' — Tous droits réservés</p>
          <p>
            Association loi 1901 · SIREN 851&nbsp;362&nbsp;269 · RNA W131&nbsp;015&nbsp;663
          </p>
        </div>
      </div>
    </footer>
  );
}

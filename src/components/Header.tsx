import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { href: '#a-propos', label: 'À propos' },
  { href: '#accompagnements', label: 'Accompagnements' },
  { href: '#public', label: 'Public accueilli' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-creme-50/95 backdrop-blur-md shadow-sm'
          : 'bg-creme-50/70 backdrop-blur-sm'
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <a href="#accueil" aria-label="Retour en haut">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-olive-800 hover:text-olive-600 transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-1 left-3 right-3 h-px bg-olive-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
          <a
            href="tel:0612840589"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-olive-700 px-4 py-2 text-sm font-medium text-creme-50 hover:bg-olive-800 transition-colors"
          >
            <Phone size={14} aria-hidden="true" />
            <span>06 12 84 05 89</span>
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-olive-800"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-creme-50 border-t border-olive-200/40">
          <div className="container-page py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-base font-medium text-olive-800 hover:text-olive-600 border-b border-olive-100 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:0612840589"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-olive-700 px-5 py-3 text-sm font-medium text-creme-50"
            >
              <Phone size={14} aria-hidden="true" />
              <span>06 12 84 05 89</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

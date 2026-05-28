import logoUrl from '@/assets/logo-diff.png';

interface LogoProps {
  variant?: 'full' | 'mark';
  className?: string;
}

/**
 * Logo de l'Association La DIFF'
 * Image PNG détourée (fond transparent), version nette et vive du logo original.
 */
export function Logo({ variant = 'full', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoUrl}
        alt="Logo Association La DIFF'"
        className="h-12 w-auto shrink-0"
      />
      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-xl font-semibold text-olive-800 tracking-tight">
            La DIFF'
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-olive-600 mt-0.5">
            Lieu d'accueil
          </span>
        </div>
      )}
    </div>
  );
}

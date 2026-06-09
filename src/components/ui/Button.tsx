import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'relative overflow-hidden bg-gradient-to-br from-primary to-primary-container text-on-primary font-label font-bold uppercase tracking-widest rounded-lg transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_-10px_rgba(255,81,103,0.4)]',
  outline:
    'bg-transparent border border-outline-variant/30 text-on-surface font-label font-bold uppercase tracking-widest rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300',
  ghost:
    'bg-transparent text-primary font-label font-bold uppercase tracking-widest hover:underline decoration-primary/30 underline-offset-8 transition-all',
};

export default function Button({
  variant = 'primary',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button className={`${variantClasses[variant]} px-6 py-3 flex items-center gap-2 ${className}`} {...props}>
      {icon && <span className="material-symbols-outlined text-sm">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
      )}
    </button>
  );
}

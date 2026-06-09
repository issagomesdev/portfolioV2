interface SectionTitleProps {
  eyebrow: string;
  title: string;
  dot?: string;
  className?: string;
}

export default function SectionTitle({ eyebrow, title, dot = '.', className = '' }: SectionTitleProps) {
  return (
    <header className={`mb-16 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-12 h-px bg-primary" />
        <span className="font-label text-primary tracking-[0.2em] text-xs uppercase">{eyebrow}</span>
      </div>
      <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-on-surface to-on-surface/50 bg-clip-text text-transparent">
        {title}
        <span className="text-primary">{dot}</span>
      </h1>
    </header>
  );
}

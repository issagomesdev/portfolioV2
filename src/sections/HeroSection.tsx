import { techStack } from '@/data/techStack';
import CodeConsole from '@/components/ui/CodeConsole';

export default function HeroSection() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 z-0 cyber-grid" aria-hidden="true" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgb(var(--c-primary)/0.05)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-tertiary/10 rounded-full blur-[100px] animate-pulse delay-700 pointer-events-none" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 max-w-7xl mx-auto w-full text-center py-20">
        {/* System badge */}
        <div
          className="mb-6 flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high border border-outline-variant/20"
          role="status"
          aria-label="Sistema inicializado"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" aria-hidden="true" />
          <span className="text-[10px] font-label uppercase tracking-[0.2em] text-primary">
            System.initialize(dev_portfolio)
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold tracking-tighter text-on-surface mb-6 glitch-effect transition-all cursor-default">
          Fullstack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container text-glow">
            Developer
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-on-surface/60 mb-10 leading-relaxed font-body">
          Aplicações modernas, responsivas e bem arquitetadas, unindo tecnologia, design e experiência do usuário.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <button
            onClick={scrollToPortfolio}
            className="group relative px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-label font-bold uppercase tracking-widest rounded-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_-10px_rgba(255,81,103,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span className="relative z-10">Ver projetos</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button
            onClick={scrollToContact}
            className="px-10 py-4 bg-transparent border border-outline-variant/30 text-on-surface font-label font-bold uppercase tracking-widest rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Contato
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Floating code card */}
        <CodeConsole />
      </div>

      {/* Tech stack bar */}
      <div className="relative z-10 w-full py-10 bg-surface-container-low/30 backdrop-blur-sm border-y border-outline-variant/10 mt-auto">
        <div
          className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700"
          aria-label="Tecnologias"
        >
          {techStack.map(({ label }) => (
            <div key={label} className="flex items-center gap-2 font-headline text-sm font-bold tracking-widest text-on-surface">
              <span className="text-primary" aria-hidden="true">#</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

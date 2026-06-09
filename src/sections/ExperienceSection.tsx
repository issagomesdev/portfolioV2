interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  color: string;
}

const experiences: ExperienceItem[] = [
  {
    period: '2024 — Atual',
    role: 'Fullstack Developer',
    company: 'Freelance / Remote',
    description:
      'Desenvolvimento de aplicações web e mobile para clientes nacionais e internacionais. Foco em React, Next.js, Node.js e PostgreSQL com design orientado a dados.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    color: 'border-primary',
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Engineer',
    company: 'Startup Tech',
    description:
      'Liderança técnica do frontend em produto SaaS B2B. Implementação de design system, redução de 40% no tempo de carregamento e migração de CRA para Vite.',
    tags: ['React', 'Vite', 'Figma', 'Storybook'],
    color: 'border-secondary',
  },
  {
    period: '2020 — 2022',
    role: 'Junior Developer',
    company: 'Agência Digital',
    description:
      'Desenvolvimento de landing pages e e-commerces. Primeiro contato com React e metodologias ágeis. Participação em projetos para grandes marcas nacionais.',
    tags: ['JavaScript', 'React', 'SASS', 'Scrum'],
    color: 'border-tertiary',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Title */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-primary" aria-hidden="true" />
            <span className="font-label text-primary tracking-[0.2em] text-xs uppercase">Timeline</span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-on-surface to-on-surface/50 bg-clip-text text-transparent">
            EXPERIÊNCIA<span className="text-primary">.</span>
          </h1>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-tertiary/40 -translate-x-1/2 hidden md:block" aria-hidden="true" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <article
                key={exp.company}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${i % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'}`}
              >
                {/* Period */}
                <div className={`flex ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} items-start pt-2`}>
                  <div className="text-right md:max-w-xs">
                    <span className="font-label text-xs tracking-widest text-on-surface-variant uppercase">{exp.period}</span>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 top-2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 border-2 border-surface shadow-[0_0_10px_rgba(255,179,181,0.4)]" aria-hidden="true" />

                {/* Content */}
                <div className={`bg-surface-container-low ghost-border p-8 rounded-lg border-l-4 ${exp.color} hover:-translate-y-1 transition-transform duration-300`}>
                  <h2 className="font-headline text-xl font-bold text-on-surface mb-1">{exp.role}</h2>
                  <p className="font-label text-xs uppercase tracking-widest text-primary mb-4">{exp.company}</p>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-6">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-surface-container-highest text-[10px] font-label text-on-surface-variant rounded border border-outline-variant/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

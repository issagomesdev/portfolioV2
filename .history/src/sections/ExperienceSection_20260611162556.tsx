// ─── Types ────────────────────────────────────────────────────────────────────
type AccentColor = 'primary' | 'secondary' | 'tertiary';

interface ExperienceEntry {
  period: string;
  role: string;
  description: string;
  tags: string[];
  color: AccentColor;
  align: 'left' | 'right';
}

interface TechChipData {
  icon: string;
  label: string;
  color: AccentColor;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const experiences: ExperienceEntry[] = [
  {
    period: '2024 — PRESENTE',
    role: 'Fullstack Developer',
    description:
      'Desenvolvimento de aplicações web e mobile para clientes nacionais e internacionais. Foco em React, Next.js, Node.js e PostgreSQL com design orientado a dados.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    color: 'primary',
    align: 'left',
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Engineer',
    description:
      'Liderança técnica do frontend em produto SaaS B2B. Implementação de design system, redução de 40% no tempo de carregamento e migração de CRA para Vite.',
    tags: ['React', 'Vite', 'Figma', 'Storybook'],
    color: 'tertiary',
    align: 'right',
  },
  {
    period: '2020 — 2022',
    role: 'Junior Developer',
    description:
      'Desenvolvimento de landing pages e e-commerces. Primeiro contato com React e metodologias ágeis. Participação em projetos para grandes marcas nacionais.',
    tags: ['JavaScript', 'React', 'SASS', 'Scrum'],
    color: 'secondary',
    align: 'left',
  },
];

const techGrid: TechChipData[] = [
  { icon: 'data_object', label: 'React', color: 'primary' },
  { icon: 'web', label: 'Next.js', color: 'secondary' },
  { icon: 'phone_iphone', label: 'React Native', color: 'tertiary' },

  { icon: 'code', label: 'TypeScript', color: 'primary' },
  { icon: 'terminal', label: 'Node.js', color: 'secondary' },
  { icon: 'integration_instructions', label: 'PHP / Laravel', color: 'tertiary' },

  { icon: 'database', label: 'PostgreSQL', color: 'primary' },
  { icon: 'storage', label: 'MySQL', color: 'secondary' },
  { icon: 'deployed_code', label: 'Docker', color: 'tertiary' },

  { icon: 'dns', label: 'Linux / VPS', color: 'primary' },
  { icon: 'layers', label: 'Tailwind CSS', color: 'secondary' },
  { icon: 'palette', label: 'UX / UI Design', color: 'tertiary' },

  { icon: 'sports_esports', label: 'Unity', color: 'primary' },
  { icon: 'code_blocks', label: 'C#', color: 'secondary' },
  { icon: 'memory', label: 'C++', color: 'tertiary' },
  { icon: 'cloud', label: 'Cloudflare', color: 'primary' },
  { icon: 'api', label: 'APIs REST', color: 'secondary' },
  { icon: 'hub', label: 'GraphQL', color: 'tertiary' },
];

// ─── Color maps ───────────────────────────────────────────────────────────────
const colorText: Record<AccentColor, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
};

const colorBg: Record<AccentColor, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
};

const dotGlow: Record<AccentColor, string> = {
  primary: 'shadow-[0_0_15px_rgba(255,179,181,0.8)]',
  secondary: 'shadow-[0_0_15px_rgba(211,251,255,0.8)]',
  tertiary: 'shadow-[0_0_15px_rgba(229,181,255,0.8)]',
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function TechChip({ icon, label, color }: TechChipData) {
  return (
    <div className="group bg-surface-container-low p-6 flex flex-col items-center justify-center gap-4 hover:bg-surface-container-high transition-all duration-300 border border-transparent hover:border-primary/20">
      <div
        className={`w-12 h-12 flex items-center justify-center ${colorText[color]} group-hover:scale-110 transition-transform duration-300`}
      >
        <span className="material-symbols-outlined text-4xl" aria-hidden="true">
          {icon}
        </span>
      </div>
      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant text-center">
        {label}
      </span>
    </div>
  );
}

function TimelineDot({ color, top = 'top-1' }: { color: AccentColor; top?: string }) {
  return (
    <div
      className={`absolute left-4 md:left-1/2 ${top} w-4 h-4 rounded-full ${colorBg[color]} border-4 border-surface ${dotGlow[color]} -translate-x-1/2 z-10 group-hover:scale-150 transition-transform duration-300`}
      aria-hidden="true"
    />
  );
}

function TagList({
  tags,
  color,
  end = false,
}: {
  tags: string[];
  color: AccentColor;
  end?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${end ? 'md:justify-end' : ''}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={`bg-surface-container-highest px-3 py-1 text-[10px] font-label uppercase tracking-wider ${colorText[color]}`}
        >
          # {tag}
        </span>
      ))}
    </div>
  );
}

function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  const { period, role, description, tags, color, align } = entry;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 group">
      {align === 'left' ? (
        <>
          <div className="md:text-right flex flex-col justify-center order-2 md:order-1 ml-12 md:ml-0">
            <span className={`font-label ${colorText[color]} text-sm font-bold tracking-widest mb-2`}>
              {period}
            </span>
            <h3 className="font-headline text-2xl font-bold mb-3 text-on-surface">{role}</h3>
            <p className="text-on-surface-variant font-light mb-4">{description}</p>
            <TagList tags={tags} color={color} end />
          </div>
          <TimelineDot color={color} />
          <div className="order-1 md:order-2" aria-hidden="true" />
        </>
      ) : (
        <>
          <div className="order-1" aria-hidden="true" />
          <div className="flex flex-col justify-center ml-12 md:ml-0 order-2">
            <span className={`font-label ${colorText[color]} text-sm font-bold tracking-widest mb-2`}>
              {period}
            </span>
            <h3 className="font-headline text-2xl font-bold mb-3 text-on-surface">{role}</h3>
            <p className="text-on-surface-variant font-light mb-4">{description}</p>
            <TagList tags={tags} color={color} />
          </div>
          <TimelineDot color={color} />
        </>
      )}
    </div>
  );
}

function EducationCard() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 group">
      <div className="order-1" aria-hidden="true" />
      <div className="flex flex-col justify-center ml-12 md:ml-0 order-2">
        <div className="bg-surface-container-low/80 backdrop-blur-[20px] p-6 border border-primary/10 rounded-lg">
          <span className="material-symbols-outlined text-primary mb-4 block" aria-hidden="true">
            school
          </span>
          <h3 className="font-headline text-xl font-bold mb-1 text-on-surface">
            Engenharia de Software
          </h3>
          <p className="text-on-surface-variant text-sm font-medium mb-4">
            Universidade de Tecnologia Aplicada
          </p>
          <p className="text-xs text-on-surface-variant/70 leading-relaxed font-light">
            Especialização em Computação Gráfica e Algoritmos de Otimização. Graduação com Honras.
          </p>
        </div>
      </div>
      <div
        className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-surface -translate-x-1/2 z-10"
        aria-hidden="true"
      />
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="pt-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto">

        {/* ── Intro: asymmetric editorial layout ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-primary" aria-hidden="true" />
              <span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold">
                Histórico Profissional
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight text-on-surface">
              Experiência prática em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                projetos reais
              </span>.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              Minha experiência conecta o cuidado visual do{' '}
              <span className="text-primary font-medium">Frontend</span>, a arquitetura consistente do{' '}
              <span className="text-secondary font-medium">Backend</span> e a criação de jornadas digitais em{' '}
              <span className="text-tertiary font-medium">Mobile, UI Design e produtos interativos</span>. Entre
              interfaces, APIs e sistemas completos, desenvolvo soluções funcionais, escaláveis e alinhadas a
              necessidades reais.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-surface-container-low/80 backdrop-blur-[20px] p-2 border border-outline-variant/20 relative group">
              <img
                src="/images/experience.png"
                alt="Workspace de desenvolvimento"
                className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-lg"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-container-low/80 backdrop-blur-[20px] border border-outline-variant/10">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                      Status do Sistema
                    </p>
                    <p className="font-headline text-lg font-bold text-primary">Operacional</p>
                  </div>
                  <div className="text-right">
                    <p className="font-headline text-3xl font-bold text-on-surface">5+ ANOS</p>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                      De atuação fullstack
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ── Stack Tecnológica ──────────────────────────────────────── */}
        <div className="mb-32">
          <div className="mb-12">
            <h2 className="font-headline text-3xl font-bold mb-2 text-on-surface">
              Stack Tecnológica
            </h2>
            <div
              className="h-1 w-20 bg-gradient-to-r from-primary to-transparent"
              aria-hidden="true"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techGrid.map((item) => (
              <TechChip key={item.label} {...item} />
            ))}
          </div>
        </div>

        {/* ── Jornada Evolutiva (timeline) ───────────────────────────── */}
        <div>
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold mb-2 text-on-surface">
              Jornada Evolutiva
            </h2>
            <div
              className="h-1 w-20 bg-gradient-to-r from-tertiary to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="relative space-y-12">
            {/* Vertical glow line — desktop (centered) */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] glow-line -translate-x-1/2 hidden md:block"
              aria-hidden="true"
            />
            {/* Vertical glow line — mobile (left edge) */}
            <div
              className="absolute left-4 top-0 bottom-0 w-[2px] glow-line md:hidden"
              aria-hidden="true"
            />

            {experiences.map((exp) => (
              <TimelineItem key={exp.period} entry={exp} />
            ))}

            <EducationCard />
          </div>
        </div>

      </div>
    </section>
  );
}

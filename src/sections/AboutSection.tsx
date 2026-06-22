import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Stat } from '@/types';
import CvDownloadModal from '@/components/ui/CvDownloadModal';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import type { RevealState } from '@/hooks/useInViewAnimation';
import { createDirectionalDelays, revealDelayMs, revealClass } from '@/lib/reveal';

// ─── Static data ──────────────────────────────────────────────────────────────

const stats: Stat[] = [
  { value: '05+', label: 'Anos Exp', color: 'text-primary' },
  { value: '15+', label: 'Projetos', color: 'text-secondary' },
  { value: '10+', label: 'Clientes', color: 'text-tertiary' },
];

const skills = [
  { number: '#01', color: 'text-primary', title: 'Frontend Engineering', sub: 'React, Next.js, TypeScript' },
  { number: '#02', color: 'text-secondary', title: 'Backend & APIs', sub: 'Node.js, Laravel, Docker' },
];

const techTags = ['UI_LOGIC', 'REACT_CORE', 'NODE_API', 'FIGMA_DEV', 'ANIM_CSS', 'TYPESCRIPT'];
const tagColors = ['text-primary', 'text-secondary', 'text-tertiary', 'text-primary', 'text-secondary', 'text-tertiary'];
const dotColors = ['bg-primary', 'bg-secondary', 'bg-tertiary', 'bg-primary', 'bg-secondary', 'bg-tertiary'];

// ─── Reveal-on-scroll setup ─────────────────────────────────────────────────────
// Same direction-aware cascade pattern as the Hero: scrolling down plays this
// order (identity → content → actions); scrolling up reverses it. Reusable
// across sections — only the stage list changes per section.
const ABOUT_REVEAL_ORDER = ['image', 'frame', 'stats', 'badge', 'title', 'paragraphs', 'specialties', 'actions'] as const;
const ABOUT_MICRO_STAGGER_MS = 70; // extra per-item offset within the "stats" and "paragraphs" stages

const revealStyle = (delayMs: number, offsetMs = 0): CSSProperties =>
  ({ '--reveal-delay': revealDelayMs(delayMs, offsetMs) } as CSSProperties);

// ─── StatCard ─────────────────────────────────────────────────────────────────
// Entrance animation lives on the outer wrapper; hover lives on the inner
// card so the two never fight over the `transform` property.

function StatCard({ value, label, color, revealState, style }: Stat & { revealState: RevealState; style?: CSSProperties }) {
  return (
    <div style={style} className={`${revealClass('section-reveal-scale', revealState)} flex-1`}>
      <div className="h-20 bg-surface-container-high ghost-border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_10px_28px_-12px_rgba(255,81,103,0.35)]">
        <div className="text-center">
          <p className={`font-headline text-2xl font-bold ${color}`}>{value}</p>
          <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">{label}</p>
        </div>
      </div>
    </div>
  );
}

// ─── ProfileImage ─────────────────────────────────────────────────────────────
// Stat cards are always rendered directly below the photo so they stay
// visually attached to the image at every viewport size.

interface ProfileImageProps {
  revealState: RevealState;
  delays: { image: number; frame: number; stats: number };
}

function ProfileImage({ revealState, delays }: ProfileImageProps) {
  return (
    <div className="relative group">
      <div
        style={revealStyle(delays.frame)}
        className={`${revealClass('section-reveal-scale', revealState)} absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary opacity-40`}
        aria-hidden="true"
      />
      <div
        style={revealStyle(delays.frame)}
        className={`${revealClass('section-reveal-scale', revealState)} absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-tertiary opacity-40`}
        aria-hidden="true"
      />

      <div
        style={revealStyle(delays.image)}
        className={`${revealClass('section-reveal-left', revealState)} relative overflow-hidden bg-surface-container-low ghost-border transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(255,81,103,0.3)]`}
      >
        <div className="absolute inset-0 scanline-overlay z-10" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          aria-hidden="true"
        />
        <img
          src="/images/profile.png"
          alt="Hayssa Gomes, desenvolvedora fullstack"
          className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
        <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end">
          <span className="font-headline text-xs tracking-widest text-primary/60 bg-surface/80 backdrop-blur-md px-3 py-1 mb-2">
            SYSTEM_ID: HG_DEV_01
          </span>
          <div className="h-px w-12 bg-primary" />
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} revealState={revealState} style={revealStyle(delays.stats, i * ABOUT_MICRO_STAGGER_MS)} />
        ))}
      </div>
    </div>
  );
}

// ─── AboutSection ─────────────────────────────────────────────────────────────

export default function AboutSection() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const { ref: sectionRef, scrollDirection, revealState } = useInViewAnimation<HTMLElement>({
    threshold: 0.25,
    rootMargin: '-8% 0px -12% 0px',
  });
  const delays = createDirectionalDelays(ABOUT_REVEAL_ORDER, scrollDirection, { start: 100, step: 100 });

  return (
    <section id="about" ref={sectionRef} className="relative min-h-[var(--section-min-h)] flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-[var(--section-py)] w-full">

        {/*
          Layout strategy — controlled entirely by globals.css semantic classes.
          No Tailwind responsive prefixes are used for layout; all breakpoint
          logic lives in one place (src/styles/globals.css).

          Mobile  < 640px   flex-col; DOM order is the visual order:
            header → p1 → image (photo + stats) → rest (p2–p5, skills, CTA)

          Tablet  640–1020px   display:block + float (globals.css).
            header   — full-width block
            p1       — full-width block (comes before the float → always full width)
            image    — float:left; includes photo and stat cards below it
            rest     — display:block; text lines wrap beside the float, then expand
                       to full width automatically when the float ends (zero JS)

          Desktop  ≥ 1021px   CSS Grid 2fr / 3fr (globals.css).
            col-1: image (photo + stats) spanning 3 rows
            col-2: header (row-1) → p1 (row-2) → rest (row-3)
        */}
        <div className="about-layout flex flex-col gap-y-8">

          {/* ── Section header — badge + headline ────────────────────────── */}
          <header className="about-header space-y-4">
            <div
              style={revealStyle(delays.badge)}
              className={`${revealClass('section-reveal', revealState)} inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border-l-2 border-primary`}
            >
              <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">terminal</span>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-primary">Biometria Digital</span>
            </div>
            <h2
              style={revealStyle(delays.title)}
              className={`${revealClass('section-reveal', revealState)} font-headline text-5xl md:text-6xl font-bold leading-tight tracking-tighter`}
            >
              Arquiteta de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                Soluções Digitais
              </span>
            </h2>
          </header>

          {/* ── p1 — intro, always full-width ────────────────────────────── */}
          {/*
            On tablet: this paragraph appears in normal block flow BEFORE the
            floated image, so the browser never narrows it to beside-float width.
            On desktop: placed in col-2 row-2 by the grid rules in globals.css.
          */}
          <p
            style={revealStyle(delays.paragraphs)}
            className={`about-p1 ${revealClass('section-reveal', revealState)} font-body text-lg text-on-surface/80 leading-relaxed`}
          >
            Sou <span className="text-on-surface font-semibold">Hayssa Gomes</span>, desenvolvedora
            fullstack de Paulista, Pernambuco, e atuo na construção de soluções que conectam
            interface, arquitetura, performance e segurança.
          </p>

          {/* ── Profile image (photo + stat cards) ───────────────────────── */}
        <div className="about-image my-4 max-[640px]:flex max-[640px]:justify-center">
          <div className="max-[640px]:max-w-[350px] max-[425px]:max-w-[300px] ">
            <ProfileImage revealState={revealState} delays={delays} />
          </div>
        </div>

          {/* ── Remaining text — wraps beside and below the float ────────── */}
          {/*
            Tablet: .about-text-rest overrides flex to display:block (globals.css).
            Plain block <p> elements have their lines pushed aside by the float —
            this is the browser's native float-wrapping behaviour. Inner flex/grid
            containers (.about-skills, .about-cta) get overflow:hidden (BFC) so
            they are positioned beside the float without overlapping.
            Desktop: flex-col gap-y-6 applies; placed at col-2 row-3 by globals.css.
          */}
          <div className="about-text-rest flex flex-col gap-y-6">

            <p
              style={revealStyle(delays.paragraphs, 1 * ABOUT_MICRO_STAGGER_MS)}
              className={`${revealClass('section-reveal', revealState)} font-body text-lg text-on-surface/80 leading-relaxed`}
            >
              Iniciei minha trajetória em 2019, ainda no colégio, explorando diferentes áreas
              da tecnologia e transformando minha afinidade com sistemas, lógica e criação em
              aprendizado contínuo. Desde então, atuando como freelancer, contribuí com projetos
              de diversos segmentos, criando interfaces responsivas, APIs, integrações, sistemas
              de autenticação e bancos de dados, além de trabalhar com manutenção, correção de
              bugs, versionamento e deploy. Esse percurso ampliou minha compreensão sobre todo o
              ciclo de uma aplicação, da interface à estrutura do back-end, com atenção à
              performance, segurança, qualidade do código e arquitetura, para entregar produtos
              funcionais, confiáveis e preparados para situações reais de uso.
            </p>

            <p
              style={revealStyle(delays.paragraphs, 2 * ABOUT_MICRO_STAGGER_MS)}
              className={`${revealClass('section-reveal', revealState)} font-body text-lg text-on-surface/80 leading-relaxed`}
            >
              Com o tempo, também passei a valorizar ainda mais o trabalho que acontece antes da
              implementação: ouvir as necessidades, compreender o contexto, pesquisar tecnologias,
              levantar requisitos, definir prioridades e planejar a melhor abordagem para cada
              desafio. Esse processo tornou minha atuação mais estratégica, combinando capacidade
              técnica, pensamento de produto e compromisso com a qualidade da entrega.
            </p>

            <p
              style={revealStyle(delays.paragraphs, 3 * ABOUT_MICRO_STAGGER_MS)}
              className={`${revealClass('section-reveal', revealState)} font-body text-lg text-on-surface/80 leading-relaxed`}
            >
              Em 2025, concluí minha formação técnica em Análise e Desenvolvimento de Sistemas,
              onde aprofundei conhecimentos técnicos e desenvolvi ainda mais minha colaboração em
              equipe, comunicação e responsabilidade compartilhada.
            </p>

            <p
              style={revealStyle(delays.paragraphs, 4 * ABOUT_MICRO_STAGGER_MS)}
              className={`${revealClass('section-reveal', revealState)} font-body text-lg text-on-surface/80 leading-relaxed`}
            >
              Hoje, busco criar soluções digitais completas, bem estruturadas e preparadas para uso
              real, conectando experiência do usuário, regras de negócio, performance e segurança.
            </p>

            {/* Skills — overflow:hidden on tablet (globals.css) prevents float overlap */}
            <div
              style={revealStyle(delays.specialties)}
              className={`about-skills ${revealClass('section-reveal', revealState)} grid grid-cols-2 gap-4 border-y border-outline-variant/20 py-8`}
            >
              {skills.map(({ number, color, title, sub }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 -m-3 p-3 rounded-lg border border-transparent transition-all duration-300 hover:border-primary/20 hover:bg-surface-container-high/60"
                >
                  <span className={`${color} font-headline mt-1`} aria-hidden="true">{number}</span>
                  <div>
                    <h4 className="font-headline font-bold text-sm">{title}</h4>
                    <p className="text-xs text-on-surface-variant">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA — overflow:hidden on tablet (globals.css) prevents float overlap */}
            <div
              style={revealStyle(delays.actions)}
              className={`about-cta ${revealClass('section-reveal', revealState)} flex items-center gap-6`}
              role="group"
              aria-label="Ações principais"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-4 sm:px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary-container transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(255,81,103,0.55)] active:scale-[0.98] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="absolute inset-0 bg-white/10 group-hover:translate-x-full transition-transform duration-500" aria-hidden="true" />
                <span className="relative font-headline font-bold text-on-primary tracking-tight">
                  Entrar em contato
                </span>
              </a>
              <button
                onClick={() => setCvModalOpen(true)}
                className="flex items-center gap-2 group transition-transform duration-200 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Baixar CV"
              >
                <span className="font-label text-xs sm:text-sm uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">
                  Download CV
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-y-1 transition-transform text-lg sm:text-xl" aria-hidden="true">
                  download
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Tech tags bar */}
      <div className="relative z-10 w-full px-6 py-12 mt-auto">
        <div className="max-w-7xl mx-auto bg-surface-container-low ghost-border p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" aria-hidden="true" />
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500"
            aria-label="Stack de habilidades"
          >
            {techTags.map((tag, i) => (
              <span key={tag} className={`font-headline text-sm flex items-center justify-center gap-2 ${tagColors[i]}`}>
                {tag}
                <span className={`h-1 w-1 rounded-full ${dotColors[i]} inline-block`} aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {cvModalOpen && <CvDownloadModal onClose={() => setCvModalOpen(false)} />}
    </section>
  );
}

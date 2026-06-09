import { useState } from 'react';
import type { Stat } from '@/types';
import CvDownloadModal from '@/components/ui/CvDownloadModal';

const stats: Stat[] = [
  { value: '04+', label: 'Anos Exp', color: 'text-primary' },
  { value: '15+', label: 'Projetos', color: 'text-secondary' },
  { value: '10+', label: 'Clientes', color: 'text-tertiary' },
];

const skills = [
  { number: '#01', color: 'text-primary', title: 'Frontend Engineering', sub: 'React, Next.js, TypeScript' },
  { number: '#02', color: 'text-secondary', title: ' Backend & APIs', sub: 'Node.js, Laravel, Docker' },
];

const techTags = ['UI_LOGIC', 'REACT_CORE', 'NODE_API', 'FIGMA_DEV', 'ANIM_CSS', 'TYPESCRIPT'];
const tagColors = ['text-primary', 'text-secondary', 'text-tertiary', 'text-primary', 'text-secondary', 'text-tertiary'];
const dotColors = ['bg-primary', 'bg-secondary', 'bg-tertiary', 'bg-primary', 'bg-secondary', 'bg-tertiary'];

export default function AboutSection() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <section id="about" className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Profile image column */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary opacity-40" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-tertiary opacity-40" aria-hidden="true" />

            <div className="relative overflow-hidden bg-surface-container-low ghost-border">
              <div className="absolute inset-0 scanline-overlay z-10" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />
              <img
                src="/images/profile.png"
                alt="Hayssa Gomes, desenvolvedora fullstack"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end">
                <span className="font-headline text-xs tracking-widest text-primary/60 bg-surface/80 backdrop-blur-md px-3 py-1 mb-2">
                  SYSTEM_ID: HG_DEV_01
                </span>
                <div className="h-px w-12 bg-primary" />
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-8 flex gap-4">
              {stats.map(({ value, label, color }) => (
                <div key={label} className="flex-1 h-20 bg-surface-container-high ghost-border flex items-center justify-center">
                  <div className="text-center">
                    <p className={`font-headline text-2xl font-bold ${color}`}>{value}</p>
                    <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio column */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border-l-2 border-primary">
                <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">terminal</span>
                <span className="font-label text-xs uppercase tracking-[0.2em] text-primary">Biometria Digital</span>
              </div>
              <h2 className="font-headline text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
                Arquiteta de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                  Soluções Digitais
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-on-surface/80 leading-relaxed max-w-xl">
              <p className="font-body text-lg">
                Sou <span className="text-on-surface font-semibold">Hayssa Gomes</span>, desenvolvedora fullstack de Paulista, Pernambuco, e atuo na construção de soluções que conectam interface, arquitetura, performance e segurança. 
                </p>
              <p className="font-body">
                Iniciei minha trajetória em 2019, ainda no colégio, explorando diferentes áreas da tecnologia e transformando minha facilidade com sistemas, lógica e criação em prática constante. Ao longo dos últimos anos, atuando como freelancer, participei de projetos para diferentes áreas, desenvolvendo interfaces responsivas, APIs, integrações, autenticação, bancos de dados, manutenção, correção de bugs, versionamento e deploy. Essa experiência fortaleceu minha visão completa do desenvolvimento: da experiência visual à estrutura do back-end, sempre considerando performance, boas práticas e segurança e buscando construir soluções não apenas bonitas e funcionais, mas também bem arquitetadas, confiáveis e preparadas para cenários reais de uso.
              </p>
              <p className="font-body">
                Essa experiência também fortaleceu minha visão sobre as etapas que antecedem o código: escutar necessidades, entender o contexto do projeto, pesquisar ferramentas, levantar requisitos, planejar soluções e tomar decisões técnicas com base no problema real. Esse processo me ajudou a desenvolver uma atuação mais completa, unindo execução técnica, visão de produto e responsabilidade com a entrega.
              </p>
              
              <p className="font-body">
                  Em 2025, concluí minha formação técnica em Análise e Desenvolvimento de Sistemas, onde aprofundei conhecimentos técnicos e desenvolvi ainda mais minha colaboração em equipe, comunicação e responsabilidade compartilhada.
              </p>
              
              <p className="font-body">
                Hoje, busco criar soluções digitais completas, bem estruturadas e preparadas para uso real, conectando experiência do usuário, regras de negócio, performance e segurança.
              </p>
            </div>

            {/* Skill tags */}
            <div className="grid grid-cols-2 gap-4 border-y border-outline-variant/20 py-8">
              {skills.map(({ number, color, title, sub }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className={`${color} font-headline mt-1`}>{number}</span>
                  <div>
                    <h4 className="font-headline font-bold text-sm">{title}</h4>
                    <p className="text-xs text-on-surface-variant">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary-container focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="absolute inset-0 bg-white/10 group-hover:translate-x-full transition-transform duration-500" />
                <span className="relative font-headline font-bold text-on-primary tracking-tight">Entrar em contato</span>
              </a>
              <button
                onClick={() => setCvModalOpen(true)}
                className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Baixar CV"
              >
                <span className="font-label text-sm uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">
                  Download CV
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-y-1 transition-transform" aria-hidden="true">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500" aria-label="Stack de habilidades">
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

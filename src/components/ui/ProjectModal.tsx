import { useEffect } from 'react';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 backdrop-blur-sm bg-surface/40"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="glass-modal neon-border-glow w-full max-w-6xl h-[95vh] overflow-hidden rounded-xl flex flex-col relative">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-6 right-4 z-[110] p-2 rounded-full bg-surface-container-highest/50 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {/* Hero image */}
          <section className="relative w-full h-[300px] md:h-[420px] group">
            <img className="w-full h-full object-cover" src={project.imageSrc} alt={project.imageAlt} />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
            <div className="absolute bottom-8 left-8 flex flex-col gap-2">
              <span className="font-label text-xs tracking-[0.2em] uppercase text-primary font-bold">
                Case Study / {project.caseStudy.year}
              </span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-on-surface">
                {project.title.toUpperCase()}
              </h2>
            </div>
          </section>

          {/* Content grid */}
          <div className="px-8 md:px-16 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main */}
            <div className="lg:col-span-7 space-y-12">
              <section>
                <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary inline-block" />
                  A Visão do Projeto
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed font-light whitespace-pre-line">
                  {project.content}
                </p>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-surface-container-low rounded-lg border-l-2 border-primary-container">
                  <h4 className="font-headline font-bold text-primary mb-2 uppercase text-sm tracking-widest">O Desafio</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{project.caseStudy.challenge}</p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-lg border-l-2 border-tertiary-container">
                  <h4 className="font-headline font-bold text-tertiary mb-2 uppercase text-sm tracking-widest">A Solução</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{project.caseStudy.solution}</p>
                </div>
              </section>

              {project.caseStudy.galleryImages.length > 0 && (
                <section className="grid grid-cols-3 gap-4">
                  {project.caseStudy.galleryImages.map((img, i) => (
                    <div key={i} className="aspect-video bg-surface-container-highest overflow-hidden rounded">
                      <img
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        src={img.src}
                        alt={img.title}
                      />
                    </div>
                  ))}
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-10">
              <div className="bg-surface-container/50 p-8 rounded-xl border border-outline-variant/20">
                <h3 className="font-headline text-xl font-bold mb-6 text-on-surface">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 bg-surface-container-highest font-label text-xs rounded flex items-center gap-2 ${i === 0 ? 'text-primary font-bold' : 'text-on-surface-variant'
                        }`}
                    >
                      {i === 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={project.liveUrl}
                  className="group flex items-center justify-between p-5 bg-primary text-on-primary rounded-lg font-headline font-bold transition-all hover:scale-[1.02] active:scale-95"
                >
                  VER LIVE DEMO
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </a>
                <div className="grid grid-cols-2 gap-4">
                  <a href={project.githubUrl} className="flex items-center justify-center gap-2 p-4 border border-outline-variant/30 text-on-surface-variant rounded-lg font-label text-sm hover:bg-surface-container-high hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-lg">code</span> GITHUB
                  </a>
                  <a
                    href={project.docsUrl} className="flex items-center justify-center gap-2 p-4 border border-outline-variant/30 text-on-surface-variant rounded-lg font-label text-sm hover:bg-surface-container-high hover:text-tertiary transition-all">
                    <span className="material-symbols-outlined text-lg">description</span> DOCS
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant/20 grid grid-cols-2 gap-y-6">
                {[
                  { label: 'CLIENTE', value: project.caseStudy.client },
                  { label: 'PAPEL', value: project.caseStudy.role },
                  { label: 'DATA', value: project.caseStudy.date },
                  { label: 'SERVIÇO', value: project.caseStudy.service },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="block text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold mb-1">{label}</span>
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

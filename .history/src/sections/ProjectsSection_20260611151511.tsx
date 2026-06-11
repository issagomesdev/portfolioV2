import { useState, useMemo } from 'react';
import { projects } from '@/data/projects';
import ProjectModal from '@/components/ui/ProjectModal';
import type { Project } from '@/types';

type FilterCategory = 'Tudo' | 'Frontend' | 'Backend' | 'Web' |  'Mobile'  | 'Desktop' | 'Fullstack'  | 'AI' | 'Cybersecurity' | 'Games' ;

const categories: FilterCategory[] = ['Tudo', 'Frontend', 'Backend',  'Mobile', 'Desktop', 'Fullstack', 'AI', 'Cybersecurity', 'Games'];

const stackFilters = [
  { icon: 'code_blocks', label: 'JavaScript' },
  { icon: 'data_object', label: 'TypeScript' },
  { icon: 'deployed_code', label: 'React' },
  { icon: 'phone_iphone', label: 'React Native' },
  { icon: 'language', label: 'Next.js' },
  { icon: 'dns', label: 'Node.js' },
  { icon: 'terminal', label: 'PHP' },
  { icon: 'account_tree', label: 'Laravel' },
  { icon: 'database', label: 'MySQL' },
  { icon: 'deployed_code_history', label: 'Docker' },
  { icon: 'cloud', label: 'AWS' },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Tudo');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return projects;
    const q = search.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q)),
    );
  }, [search]);

  return (
    <section id="portfolio" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-primary" aria-hidden="true" />
            <span className="font-label text-primary tracking-[0.2em] text-xs uppercase">Curated Works</span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-on-surface to-on-surface/50 bg-clip-text text-transparent">
            PORTFÓLIO<span className="text-primary">.</span>
          </h1>

          {/* Search */}
          <div className="relative group max-w-2xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded blur opacity-30 group-focus-within:opacity-100 transition duration-500" aria-hidden="true" />
            <div className="relative flex items-center bg-surface-container-low ghost-border px-6 py-4">
              <span className="font-label text-primary mr-3 text-sm font-bold tracking-widest" aria-hidden="true">
                root@hayssa:~#
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search_projects --all"
                aria-label="Buscar projetos"
                className="bg-transparent border-none outline-none text-secondary w-full font-label placeholder:text-surface-container-highest text-sm"
              />
              <span className="material-symbols-outlined text-primary-container animate-pulse" aria-hidden="true">terminal</span>
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrar por categoria">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeFilter === cat
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-primary ghost-border'
                }`}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-2 hide-scrollbar">
            <span className="font-label text-[10px] text-outline uppercase tracking-tighter whitespace-nowrap">
              Filter by Stack:
            </span>
            <div className="flex gap-2">
              {stackFilters.map(({ icon, label }) => (
                <button
                  key={label}
                  className="px-3 py-1 bg-surface-container-lowest ghost-border rounded-full text-[10px] text-tertiary flex items-center gap-1 hover:bg-surface-container-high transition-colors"
                  aria-label={`Filtrar por ${label}`}
                >
                  <span className="material-symbols-outlined text-[12px]" aria-hidden="true">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project list */}
        <div className="space-y-12 mb-20" role="list" aria-label="Lista de projetos">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 group"
              role="listitem"
            >
              {/* Image */}
              <div className={`lg:col-span-7 relative overflow-hidden ${project.align === 'right' ? 'lg:order-2' : ''}`}>
                <img
                  className="w-full h-[340px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 ${
                    project.align === 'left'
                      ? 'bg-gradient-to-r from-surface via-transparent to-transparent'
                      : 'bg-gradient-to-l from-surface via-transparent to-transparent'
                  } hidden lg:block`}
                  aria-hidden="true"
                />
              </div>

              {/* Info */}
              <div
                className={`lg:col-span-5 bg-surface-container-low ghost-border p-8 lg:p-12 flex flex-col justify-center relative ${
                  project.align === 'right' ? 'lg:order-1 lg:border-r-0' : 'lg:border-l-0'
                }`}
              >
                <div
                  className={`absolute top-8 ${project.align === 'right' ? 'left-8' : 'right-8'} font-headline text-5xl font-black text-surface-container-highest opacity-50 select-none`}
                  aria-hidden="true"
                >
                  {project.number}
                </div>

                <h2 className="font-headline text-3xl font-bold mb-4 text-on-surface">{project.title}</h2>
                <p className="text-on-surface-variant leading-relaxed mb-8 max-w-md">{project.description}</p>

                <div className="flex gap-4 mb-8" aria-label="Tecnologias">
                  {project.icons.map(({ name, title }) => (
                    <span
                      key={name}
                      className="material-symbols-outlined text-primary"
                      title={title}
                      aria-label={title}
                    >
                      {name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary text-xs font-bold tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-95"
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">open_in_new</span>
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-transparent ghost-border text-on-surface text-xs font-bold tracking-widest uppercase hover:bg-surface-container-high transition-all"
                    aria-label={`Ver código de ${project.title} no GitHub`}
                  >
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">code</span>
                    GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-6 py-3 text-primary text-xs font-bold tracking-widest uppercase hover:underline decoration-primary/30 underline-offset-8 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={`Ler mais sobre ${project.title}`}
                  >
                    Ler mais
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <nav className="flex justify-center items-center gap-2" aria-label="Paginação">
          {(['first_page', 'chevron_left'] as const).map((icon) => (
            <button key={icon} className="w-10 h-10 flex items-center justify-center bg-surface-container-low ghost-border text-outline hover:text-primary transition-colors" aria-label={icon === 'first_page' ? 'Primeira página' : 'Página anterior'}>
              <span className="material-symbols-outlined" aria-hidden="true">{icon}</span>
            </button>
          ))}
          <div className="flex gap-2 mx-4">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`w-10 h-10 flex items-center justify-center text-xs font-bold transition-colors ${
                  n === 1
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low ghost-border text-on-surface-variant hover:text-primary'
                }`}
                aria-current={n === 1 ? 'page' : undefined}
                aria-label={`Página ${n}`}
              >
                {n}
              </button>
            ))}
            <span className="w-10 h-10 flex items-center justify-center text-outline" aria-hidden="true">...</span>
          </div>
          {(['chevron_right', 'last_page'] as const).map((icon) => (
            <button key={icon} className="w-10 h-10 flex items-center justify-center bg-surface-container-low ghost-border text-outline hover:text-primary transition-colors" aria-label={icon === 'last_page' ? 'Última página' : 'Próxima página'}>
              <span className="material-symbols-outlined" aria-hidden="true">{icon}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Project modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

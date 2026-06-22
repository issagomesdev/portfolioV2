import { services } from '@/data/services';
import type { ServiceColor } from '@/types';

const iconColorClass: Record<ServiceColor, { border: string; text: string; hover: string }> = {
  primary:             { border: 'border-primary/20',             text: 'text-primary',             hover: 'group-hover:bg-primary group-hover:text-on-primary' },
  secondary:           { border: 'border-secondary/20',           text: 'text-secondary',           hover: 'group-hover:bg-secondary group-hover:text-on-secondary' },
  tertiary:            { border: 'border-tertiary/20',            text: 'text-tertiary',            hover: 'group-hover:bg-tertiary group-hover:text-on-tertiary' },
  'primary-container': { border: 'border-primary-container/20',   text: 'text-primary-container',   hover: 'group-hover:bg-primary-container group-hover:text-white' },
  'secondary-container':{ border: 'border-secondary-container/20', text: 'text-secondary-container', hover: 'group-hover:bg-secondary-container group-hover:text-on-secondary-container' },
};

const tagColorClass: Record<ServiceColor, string> = {
  primary:              'text-primary border-primary/10',
  secondary:            'text-secondary border-secondary/10',
  tertiary:             'text-tertiary border-tertiary/10',
  'primary-container':  'text-primary-container border-primary-container/10',
  'secondary-container':'text-secondary-container border-secondary-container/10',
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative min-h-[var(--section-min-h)] flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-[var(--section-py)] w-full">
        {/* Title */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full mb-6 border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" aria-hidden="true" />
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
              ARQUITETURA & CÓDIGO
            </span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-primary to-tertiary-fixed-dim bg-clip-text text-transparent">
           Interfaces elegantes. <br /> Backends sólidos. <br /> Produtos escaláveis.
          </h1>
          <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed font-body">
            Desenvolvo aplicações web, mobile, APIs e automações com foco em UX/UI, performance, segurança e arquitetura limpa, criando soluções que não apenas parecem boas, mas funcionam bem.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" aria-hidden="true" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-tertiary/5 blur-[120px] rounded-full -z-10" aria-hidden="true" />

          {services.map((service) => {
            const colors = iconColorClass[service.color];
            const tagColor = tagColorClass[service.color];

            return (
              <article
                key={service.id}
                className={`group relative bg-surface-container-low/80 backdrop-blur-xl rounded-lg overflow-hidden border border-outline-variant/10 glow-hover transition-all duration-500 hover:-translate-y-1 ${
                  service.wide ? 'md:col-span-2' : ''
                }`}
              >
                {service.wide ? (
                  /* Wide card — horizontal layout */
                  <div className="p-8 flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/3">
                      <div className={`mb-8 inline-flex items-center justify-center w-14 h-14 bg-surface-container-highest rounded-lg border ${colors.border} ${colors.text} ${colors.hover} transition-colors duration-300`}>
                        <span className="material-symbols-outlined text-3xl" aria-hidden="true">{service.icon}</span>
                      </div>
                      <h2 className="font-headline text-2xl font-bold mb-4 text-on-surface">{service.title}</h2>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span key={tag} className={`px-2 py-1 bg-surface-container-highest text-[10px] font-label rounded border ${tagColor}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-on-surface-variant mb-6 font-body text-lg leading-relaxed">
                        {service.description}
                      </p>
                      {service.extraContent && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-label">
                          {service.extraContent.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-on-surface-variant">
                              <span className="w-1.5 h-1.5 bg-tertiary rounded-full flex-shrink-0" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Normal card */
                  <div className="p-8 flex flex-col h-full">
                    <div className={`mb-8 inline-flex items-center justify-center w-14 h-14 bg-surface-container-highest rounded-lg border ${colors.border} ${colors.text} ${colors.hover} transition-colors duration-300`}>
                      <span className="material-symbols-outlined text-3xl" aria-hidden="true">{service.icon}</span>
                    </div>
                    <h2 className="font-headline text-2xl font-bold mb-4 text-on-surface">{service.title}</h2>
                    <p className="text-on-surface-variant mb-8 font-body leading-relaxed">{service.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className={`px-2 py-1 bg-surface-container-highest text-[10px] font-label rounded border ${tagColor}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 p-12 bg-gradient-to-br from-surface-container-low to-surface-container-lowest rounded-xl border border-outline-variant/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(var(--c-primary)/0.05),transparent)] pointer-events-none" aria-hidden="true" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 text-on-surface">
            Seu próximo produto digital {' '}
            <span className="text-primary italic">começa aqui</span>.
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-10 font-body">
            De interfaces elegantes a backends sólidos, desenvolvo soluções sob medida para tirar ideias do papel, otimizar processos e criar experiências digitais preparadas para crescer.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label font-bold uppercase tracking-widest rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
}

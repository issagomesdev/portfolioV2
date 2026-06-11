import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'web',
    icon: 'language',
    color: 'primary',
    title: 'Desenvolvimento Web',
    description:
      'Sites, landing pages, dashboards e plataformas web responsivas, rápidas e otimizadas para SEO, acessibilidade e conversão. Interfaces modernas com foco em performance, usabilidade e experiência visual.',
    tags: ['#REACT', '#NEXTJS', '#TAILWIND', '#SEO'],
  },
  {
    id: 'mobile',
    icon: 'smartphone',
    color: 'secondary',
    title: 'Aplicativos Mobile',
    description:
      'Aplicativos Android e iOS com navegação fluida, interfaces intuitivas e integração com APIs. Soluções pensadas para dispositivos reais, priorizando performance, estabilidade e uma boa experiência mobile.',
    tags: ['#REACT_NATIVE', '#EXPO', '#IOS_ANDROID', '#UX_MOBILE'],
  },
  {
    id: 'systems',
    icon: 'desktop_windows',
    color: 'tertiary',
    title: 'Sistemas Sob Medida',
    description:
      'Sistemas internos, painéis administrativos, CRMs, fluxos operacionais e ferramentas personalizadas para organizar processos, reduzir trabalho manual e aumentar a produtividade do negócio.',
    tags: ['#DASHBOARDS', '#ADMIN', '#SAAS', '#WORKFLOWS'],
  },
  {
    id: 'automation',
    icon: 'auto_awesome',
    color: 'primary-container',
    title: 'Automações Inteligentes',
    description:
      'Automação de tarefas repetitivas, integrações entre sistemas, bots e fluxos inteligentes para economizar tempo, reduzir erros operacionais e tornar processos mais eficientes.',
    tags: ['#BOTS', '#SCRIPTS', '#INTEGRATIONS', '#PRODUCTIVITY'],
  },
  {
    id: 'backend',
    icon: 'terminal',
    color: 'secondary-container',
    title: 'Backends, APIs e Integrações',
    description:
      'Construção de APIs REST, autenticação, bancos de dados, integrações com serviços externos e automações escaláveis para sustentar produtos digitais com segurança, performance e arquitetura limpa.',
    tags: ['#NODEJS', '#LARAVEL', '#POSTGRESQL', '#DOCKER'],
    wide: true,
    extraContent: {
      items: [
        'APIs REST documentadas',
        'Autenticação e permissões',
        'Integrações com terceiros',
        'Bancos de dados e infraestrutura',
        'Web Scraping & Bots',
        'Segurança & Criptografia',
      ],
    },
  },
];

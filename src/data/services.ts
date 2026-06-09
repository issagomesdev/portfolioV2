import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'web',
    icon: 'language',
    color: 'primary',
    title: 'Desenvolvimento Web',
    description:
      'Interfaces de alto impacto construídas com as tecnologias mais modernas do ecossistema. Sites responsivos, otimizados para SEO e focados em performance extrema (Web Vitals).',
    tags: ['#REACT', '#NEXTJS', '#TAILWIND'],
  },
  {
    id: 'mobile',
    icon: 'smartphone',
    color: 'secondary',
    title: 'Aplicativos Mobile',
    description:
      'Experiências nativas para Android e iOS. Desenvolvimento eficiente com foco em usabilidade intuitiva e performance de hardware, garantindo fluidez total em qualquer tela.',
    tags: ['#FLUTTER', '#REACT_NATIVE', '#IOS_ANDROID'],
  },
  {
    id: 'desktop',
    icon: 'desktop_windows',
    color: 'tertiary',
    title: 'Aplicativos Desktop',
    description:
      'Sistemas robustos focados em produtividade e estabilidade. Soluções customizadas para Windows e macOS que integram perfeitamente com o fluxo de trabalho local do usuário.',
    tags: ['#ELECTRON', '#TAURI', '#PRODUCTIVITY'],
  },
  {
    id: 'games',
    icon: 'sports_esports',
    color: 'primary-container',
    title: 'Desenvolvimento de Jogos',
    description:
      'Criação de experiências interativas e envolventes. De pequenos jogos casuais a sistemas complexos de gamificação, unindo arte técnica e lógica de jogo.',
    tags: ['#UNITY', '#GODOT', '#INTERACTIVE'],
  },
  {
    id: 'backend',
    icon: 'terminal',
    color: 'secondary-container',
    title: 'Sistemas, APIs e Bots',
    description:
      'Otimização máxima de processos através de automação inteligente e backends escaláveis. Construção de APIs REST/GraphQL seguras, integração de sistemas complexos e bots performáticos para produtividade empresarial.',
    tags: ['#NODEJS', '#PYTHON', '#CLOUDFLARE'],
    wide: true,
    extraContent: {
      items: [
        'Microsserviços Escaláveis',
        'Integrações de Terceiros',
        'Web Scraping & Bots',
        'Segurança & Criptografia',
      ],
    },
  },
];

import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'healthmind-app',
    number: '#01',
    title: 'HealthMind — App de Saúde Mental',
    description:
      'Plataforma mobile de saúde mental desenvolvida com React Native e Expo, com fluxos para pacientes e profissionais, autenticação, dashboards, chat, consultas e evolução clínica.',
    imageSrc: 'https://media.byissa.dev/healthmind/app_preview1.png',
    content: `O HealthMind é uma aplicação mobile de saúde mental criada para conectar pacientes e profissionais em uma experiência digital acolhedora, organizada e segura. O projeto simula uma plataforma real de cuidado emocional, com fluxos independentes, autenticação, dados estruturados e módulos preparados para integração com API.\n\n• Dois perfis principais: paciente e profissional, cada um com dashboards, navegação e funcionalidades próprias.\n\n• Paciente: check-in emocional, diário, atividades terapêuticas, consultas, chat, comunidade, pagamentos, notificações e perfil completo.\n\n• Profissional: dashboard clínico, agenda, gestão de pacientes, prontuário, observações clínicas, relatórios, disponibilidade, pagamentos e painel de evolução.\n\n• Arquitetura modular com separação entre telas, componentes, hooks, services, tipos e dados, facilitando manutenção, reutilização e evolução do projeto.\n\n• Fluxo de dados baseado em JSON → Service → Hook → Screen, permitindo validar a experiência completa com dados mockados e substituir futuramente por API real sem reescrever a interface.\n\n• Autenticação com JWT, rotas protegidas e persistência segura de sessão usando Expo Secure Store.\n\n• Design system com tema light/dark/system, tokens de cor, componentes reutilizáveis, cards suaves, gráficos SVG e animações com Reanimated.`,
    imageAlt: 'Telas do aplicativo HealthMind mostrando splash screen, cadastro e respiração guiada',
    icons: [
      { name: 'psychology', title: 'Saúde mental' },
      { name: 'smartphone', title: 'React Native' },
      { name: 'forum', title: 'Comunidade' },
    ],
    tags: ['#REACTNATIVE', '#EXPO', '#TYPESCRIPT'],
    stack: ['REACT NATIVE', 'EXPO', 'TYPESCRIPT', 'NATIVEWIND', 'JWT'],
    liveUrl: 'https://healthmind.byissa.dev',
    githubUrl: 'https://github.com/issagomesdev/HealthMind',
    docsUrl: 'https://github.com/issagomesdev/HealthMind#readme',
    align: 'left',
    caseStudy: {
      year: '2026',
      challenge:
        'Estruturar uma aplicação mobile completa em curto prazo, com dois fluxos independentes, paciente e profissional, contemplando autenticação, agenda, prontuário, chat, pagamentos, relatórios e acompanhamento emocional em uma experiência sensível ao contexto de saúde mental.',

      solution:
        'Desenvolvi uma arquitetura modular em React Native + Expo com TypeScript e NativeWind, separando telas, componentes, hooks, services, tipos e dados. A solução utiliza autenticação JWT, rotas protegidas, dados mockados via services e hooks centralizados para reaproveitar ações entre chat, prontuário, agenda e evolução clínica.',
      galleryImages: [
        {
          title: 'Splash Screen',
          description: 'Tela inicial do aplicativo HealthMind, exibindo o logotipo e animação de carregamento.',
          src: 'https://media.byissa.dev/healthmind/SplashScreen.png',
        },
        {
          title: 'Onboardings',
          description: 'Entrada do usuário, apresentando a proposta do aplicativo.',
          src: 'https://media.byissa.dev/healthmind/Onboardings.png',
        },
        {
          title: 'Cadastro e Login',
          description: 'Tela de cadastro e login do usuário.',
          src: 'https://media.byissa.dev/healthmind/CadastroLogin.png',
        },
        {
          title: 'Autocuidado emocional',
          description: 'Dashboard do paciente, check-in emocional e diário terapêutico.',
          src: 'https://media.byissa.dev/healthmind/DashboardPaciente.png',
        },
        {
          title: 'Atividades terapêuticas',
          description: 'Recursos de bem-estar, atividades recomendadas e progresso emocional.',
          src: 'https://media.byissa.dev/healthmind/AtividadesTerapeuticas.png',
        },
        {
          title: 'Atividades terapêuticas',
          description: 'Recursos de bem-estar, atividades recomendadas e progresso emocional.',
          src: 'https://media.byissa.dev/healthmind/AtividadesTerapeuticas.png',
        },
        {
          title: 'Match com profissionais',
          description: 'Busca por profissionais, recomendações e agendamento de consultas.',
          src: 'https://media.byissa.dev/healthmind/MatchProfissionais.png',
        },
        {
          title: 'Consultas e comunicação',
          description: 'Calendário, detalhes de consulta, chat e acompanhamento contínuo.',
          src: 'https://media.byissa.dev/healthmind/ConsultasComunicacao.png',
        },
        {
          title: 'Gestão clínica',
          description: 'Dashboard profissional, pacientes, prontuário e observações clínicas.',
          src: 'https://media.byissa.dev/healthmind/DashboardProfissional.png',
        },
        {
          title: 'Perfil, evolução e relatórios',
          description: 'Perfil do usuário, painel de evolução, gráficos e insights',
          src: 'https://media.byissa.dev/healthmind/PerfilEvolucaoRelatorios.png',
        },
        {
          title: 'Operação profissional',
          description: 'Pagamentos, transações, disponibilidade e regras de agendamento.',
          src: 'https://media.byissa.dev/healthmind/OperacaoProfissional.png',
        },
      ],
      client: 'UNICAP — 1ª JORNADA DE TECNOLOGIA 2026',
      role: 'DESENVOLVEDORA FULLSTACK & MOBILE',
      date: 'MAIO 2026',
      service: 'DEV MOBILE',
    },
  },
  {
    id: 'healthmind-api',
    number: '#02',
    title: 'HealthMind API',
    description:
      'API RESTful do ecossistema HealthMind, construída com Node.js, Fastify, TypeScript, Prisma e PostgreSQL, com autenticação JWT, autorização por perfil, Swagger, Docker e testes automatizados.',
    content: `A HealthMind API foi desenvolvida como a base backend do ecossistema HealthMind, fornecendo autenticação, gerenciamento de usuários, perfis de paciente/profissional e contratos seguros para consumo pelo app mobile.\n\n• API RESTful construída com Node.js, Fastify e TypeScript, priorizando performance, tipagem, organização e manutenção.\n\n• Arquitetura modular em camadas, separando rotas, controllers, services, repositories, middlewares, schemas e infraestrutura.\n\n• Autenticação stateless com JWT, hash de senhas com bcryptjs e controle de acesso por role para diferenciar permissões entre pacientes e profissionais.\n\n• Banco de dados PostgreSQL integrado com Prisma ORM, utilizando migrations, models estruturados e acesso a dados centralizado.\n\n• Validação de schemas com Zod, garantindo maior segurança nos contratos de entrada, variáveis de ambiente e regras de negócio.\n\n• Documentação interativa com Swagger/OpenAPI, facilitando testes dos endpoints e integração com o app mobile.\n\n• Testes automatizados em camadas com Vitest, cobrindo testes unitários, integração, funcionais e segurança, além de testes de carga com k6.\n\n• Ambiente preparado para desenvolvimento e produção com Docker Compose, multi-stage build, CI com GitHub Actions e checklist de segurança para deploy em VPS.`,
    imageSrc: 'https://media.byissa.dev/healthmind/api_preview.png',
    imageAlt:
      'Documentação Swagger da API',
    icons: [
      { name: 'dns', title: 'API REST' },
      { name: 'storage', title: 'PostgreSQL' },
      { name: 'verified', title: 'Testes automatizados' },
    ],
    tags: ['#NODEJS', '#FASTIFY', '#POSTGRESQL'],
    stack: [
      'NODE.JS',
      'FASTIFY',
      'TYPESCRIPT',
      'PRISMA',
      'POSTGRESQL',
      'DOCKER',
      'SWAGGER',
      'K6',
    ],
    liveUrl: 'https://hm-api.byissa.dev/docs',
    githubUrl: 'https://github.com/issagomesdev/HealthMind-api',
    docsUrl: 'https://github.com/issagomesdev/HealthMind-api#readme',
    align: 'right',
    caseStudy: {
      year: '2026',
      challenge:
        'Criar uma base backend segura e escalável para o ecossistema HealthMind, com autenticação, perfis de usuário distintos, autorização por role, validação de contratos e estrutura preparada para consumo pelo app mobile.',
      solution:
        'Desenvolvi uma API RESTful com Fastify, TypeScript, Prisma e PostgreSQL, aplicando arquitetura modular em camadas, validação com Zod, autenticação JWT, documentação Swagger, Docker, CI e testes automatizados com Vitest e k6.',
      galleryImages: [
        {
          title: 'Documentação Swagger',
          description:
            'Interface interativa da API com endpoints, schemas, parâmetros, respostas e contratos preparados para integração com o app mobile.',
          src: 'https://media.byissa.dev/healthmind/api_doc.jpeg',
        },
        {
          title: 'Fluxo de autenticação',
          description:
            'Rotas de cadastro, login, sessão autenticada, logout e validação do usuário atual com JWT.',
          src: 'https://media.byissa.dev/healthmind/api_routes.jpeg',
        },
        {
          title: 'Autorização por perfil',
          description:
            'Controle de acesso por role para diferenciar permissões entre pacientes e profissionais dentro da API.',
          src: 'https://media.byissa.dev/healthmind/api_authorize.png',
        },
        {
          title: 'Arquitetura modular',
          description:
            'Estrutura em camadas com rotas, controllers, services, repositories, middlewares, schemas e infraestrutura separados por responsabilidade.',
          src: 'https://media.byissa.dev/healthmind/api_architecture.png',
        },
        {
          title: 'Modelagem com Prisma',
          description:
            'Banco PostgreSQL estruturado com Prisma ORM, migrations, models e relacionamento entre usuários, pacientes e profissionais.',
          src: 'https://media.byissa.dev/healthmind/api_prisma.png',
        },
        {
          title: 'Docker e deploy',
          description:
            'Ambiente containerizado com Docker Compose, build multi-stage, produção com PostgreSQL e preparação para deploy em VPS.',
          src: 'https://media.byissa.dev/healthmind/api_deploy.png',
        },
        {
          title: 'Segurança em produção',
          description: 'Configuração de produção com Docker Compose, healthchecks, restart automático, rotação de logs, rede interna isolada e PostgreSQL sem exposição pública ao host.',
          src: 'https://media.byissa.dev/healthmind/api_security.png',
        }
      ],
      client: 'UNICAP — 1ª JORNADA DE TECNOLOGIA 2026',
      role: 'DESENVOLVEDORA BACKEND',
      date: 'MAIO 2026',
      service: 'REST API',
    },
  },
  {

    id: 'healthmind-landing',
    number: '#03',
    title: 'HealthMind — Landing Page',
    description: 'Landing page institucional do ecossistema HealthMind, criada para apresentar a proposta do produto, seus recursos, impacto social e diferenciais para pacientes e profissionais.',
    content: `A HealthMind Landing Page foi desenvolvida como a vitrine institucional do ecossistema HealthMind, com foco em comunicar de forma clara, moderna e confiável a proposta da solução para pacientes, profissionais, avaliadores e possíveis interessados no produto.\n\n• Página construída com React, TypeScript, Vite e Tailwind CSS, priorizando performance, responsividade e manutenção simples.\n\n• Estrutura organizada por seções estratégicas, apresentando o projeto, recursos do app, respiração guiada, comunidade, benefícios para pacientes, benefícios para profissionais, impacto social, tecnologia e equipe.\n\n• Interface pensada para transmitir acolhimento e confiança, com hierarquia visual clara, cards informativos, mockups de celular, elementos flutuantes e composição visual voltada para produto digital.\n\n• Componentização reutilizável com Button, Badge, PhoneMockup, FeatureCard, SectionHeader, Modal, Carousel e widgets visuais, mantendo consistência entre as seções.\n\n• Conteúdo dividido para dois públicos diferentes: pacientes, com foco em autocuidado e acompanhamento emocional; e profissionais, com foco em gestão, agenda, relatórios e acompanhamento clínico.\n\n• Ambiente preparado para desenvolvimento e produção com Docker, Docker Compose, build multi-stage e Nginx, garantindo deploy mais consistente e próximo de um cenário real.\n\n• Projeto integrado ao ecossistema HealthMind, funcionando como ponto de apresentação para o app mobile e para a API da solução.`,
    imageSrc: 'https://media.byissa.dev/healthmind/site_preview.png',
    imageAlt: 'Landing page institucional do HealthMind',
    icons: [
      { name: 'language', title: 'Landing page' },
      { name: 'design_services', title: 'UI/UX' },
      { name: 'rocket_launch', title: 'Vitrine de produto' },
    ],
    tags: ['#REACT', '#VITE', '#TAILWINDCSS'],
    stack: ['REACT', 'TYPESCRIPT', 'VITE', 'TAILWIND CSS', 'DOCKER', 'NGINX'],
    liveUrl: 'https://healthmind.byissa.dev',
    githubUrl: 'https://github.com/issagomesdev/HealthMindPage',
    docsUrl: 'https://github.com/issagomesdev/HealthMindPage#readme',
    align: 'left',
    caseStudy: {
      year: '2026',
      challenge: 'Comunicar a proposta de um produto de saúde mental em uma única página, equilibrando acolhimento, clareza e credibilidade para dois públicos diferentes: pacientes e profissionais.',
      solution: 'Desenvolvi uma landing page responsiva em React + TypeScript com Vite e Tailwind CSS, estruturada em seções estratégicas, componentes reutilizáveis, mockups visuais e build de produção com Docker, Nginx e deploy consistente.',
      galleryImages: [
        {
          title: 'Hero e proposta do produto',
          description:
            'Apresentação inicial da landing page com a proposta central do HealthMind, chamada principal, CTA e mockup visual do aplicativo.',
          src: 'https://media.byissa.dev/healthmind/landing_hero.jpeg',
        },
        {
          title: 'Seção Sobre o HealthMind',
          description:
            'Seção com os principais recursos do app, apresentando funcionalidades como acompanhamento emocional, diário, consultas, comunidade e suporte ao usuário.',
          src: 'https://media.byissa.dev/healthmind/landing_about.jpeg',
        },
        {
          title: 'Destaques do produto',
          description:
            'Seção com destaques visuais do HealthMind, reforçando a proposta de bem-estar, cuidado contínuo e experiência acolhedora para pacientes e profissionais.',
          src: 'https://media.byissa.dev/healthmind/landing_features.jpeg',
        },
        {
          title: 'Respiração guiada e autocuidado',
          description:
            'Apresentação da funcionalidade de respiração guiada, reforçando o foco do produto em bem-estar, autorregulação emocional e experiência acolhedora.',
          src: 'https://media.byissa.dev/healthmind/landing_breathing.jpeg',
        },
        {
          title: 'Comunidade e apoio emocional',
          description:
            'Seção dedicada à comunidade do HealthMind, destacando o espaço de troca, acolhimento e conexão entre pessoas em jornadas semelhantes.',
          src: 'https://media.byissa.dev/healthmind/landing_community.jpeg',
        },
        {
          title: 'Experiência para pacientes',
          description:
            'Área voltada ao público paciente, explicando benefícios como check-in emocional, diário, consultas, acompanhamento e conexão com profissionais.',
          src: 'https://media.byissa.dev/healthmind/landing_patients.jpeg',
        },
        {
          title: 'Recursos para profissionais',
          description:
            'Seção direcionada aos profissionais de saúde mental, apresentando recursos de agenda, gestão de pacientes, relatórios e acompanhamento clínico.',
          src: 'https://media.byissa.dev/healthmind/landing_professionals.jpeg',
        },
        {
          title: 'Impacto social da solução',
          description:
            'Bloco institucional destacando o valor social do HealthMind, sua proposta de acessibilidade, cuidado contínuo e apoio à saúde mental.',
          src: 'https://media.byissa.dev/healthmind/landing_impact.jpeg',
        },
        {
          title: 'Tecnologia e arquitetura visual',
          description:
            'Seção técnica da landing page, apresentando a stack utilizada, os diferenciais do projeto e a maturidade da solução dentro do ecossistema HealthMind.',
          src: 'https://media.byissa.dev/healthmind/landing_technology.jpeg',
        },
        {
          title: 'Equipe',
          description:
            'Apresentação da equipe envolvida no desenvolvimento do HealthMind, destacando papéis, contribuições e expertise de cada membro.',
          src: 'https://media.byissa.dev/healthmind/landing_team.jpeg',
        },
      ],
      client: 'UNICAP — 1ª JORNADA DE TECNOLOGIA 2026',
      role: 'DESENVOLVEDORA FRONTEND & UI/UX',
      date: 'MAIO 2026',
      service: 'LANDING PAGE',

    },

  },
  // {
  //   id: 'biko-web',
  //   number: '#04',
  //   title: 'Biko — Rede Social de Serviços (Web)',
  //   description:
  //     'Rede social que conecta clientes a prestadores de serviços informais, com feed em tempo real, sistema de seguidores, filtros avançados e cache local. Trabalho de conclusão do Laboratório de Empresas Inovadoras (UNINASSAU).',
  //   content: 'Conteúdo detalhado sobre o projeto Biko Web',
  //   imageSrc: 'https://media.byissa.dev/biko/preview.png',
  //   imageAlt: 'Feed da plataforma Biko com publicações de prestadores de serviços',
  //   icons: [
  //     { name: 'forum', title: 'Feed social' },
  //     { name: 'filter_alt', title: 'Filtros avançados' },
  //     { name: 'bolt', title: 'Next.js' },
  //   ],
  //   tags: ['#NEXTJS', '#TYPESCRIPT', '#TANSTACKQUERY'],
  //   stack: ['NEXT.JS 14', 'TYPESCRIPT', 'TAILWIND CSS', 'TANSTACK QUERY', 'ZUSTAND', 'REACT HOOK FORM + ZOD', 'VITEST'],
  //   liveUrl: 'https://biko.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/biko',
  //   docsUrl: 'https://github.com/issagomesdev/biko#readme',
  //   align: 'right',
  //   caseStudy: {
  //     year: '2024',
  //     challenge:
  //       'Construir um feed social com scroll infinito, curtidas otimistas e filtros cruzados (categoria, localização, data) sem comprometer a performance percebida.',
  //     solution:
  //       'IntersectionObserver para scroll infinito, cache de 3 dias em localStorage para estados/cidades/categorias, debounce de 400ms na busca e autenticação via cookies HttpOnly com Route Handlers do Next.js.',
  //     galleryImages: [
  //       { src: 'https://media.byissa.dev/biko/preview.png', alt: 'Feed da plataforma Biko com publicações de prestadores de serviços' },
  //     ],
  //     client: 'UNINASSAU — TCC LABORATÓRIO DE EMPRESAS INOVADORAS',
  //     role: 'DESENVOLVEDORA FRONTEND',
  //     date: 'OUTUBRO 2024',
  //     service: 'FRONTEND DEV',
  //   },
  // },
  // {
  //   id: 'biko-api',
  //   number: '#05',
  //   title: 'Biko — Rede Social de Serviços (API)',
  //   description:
  //     'API RESTful em Laravel responsável por toda a operação da rede social Biko: autenticação, publicações, seguidores, avaliações, coleções, bloqueios e chat em tempo real via WebSocket.',
  //   content: '',
  //   imageSrc: 'https://media.byissa.dev/biko/preview.png',
  //   imageAlt: 'Interface do frontend Biko, consumidor desta API',
  //   icons: [
  //     { name: 'dns', title: 'Laravel API' },
  //     { name: 'chat', title: 'Chat em tempo real' },
  //     { name: 'security', title: 'Autenticação' },
  //   ],
  //   tags: ['#LARAVEL', '#WEBSOCKET', '#MYSQL'],
  //   stack: ['LARAVEL 11', 'PHP', 'LARAVEL SANCTUM', 'LARAVEL REVERB', 'MYSQL', 'SPATIE MEDIA LIBRARY', 'SWAGGER', 'PHPUNIT', 'DOCKER'],
  //   liveUrl: '#',
  //   githubUrl: 'https://github.com/issagomesdev/biko-api',
  //   docsUrl: 'https://github.com/issagomesdev/biko-api#readme',
  //   align: 'left',
  //   caseStudy: {
  //     year: '2024',
  //     challenge:
  //       'Resolver o campo is_liked em listagens de publicações sem gerar consultas N+1, além de suportar chat em tempo real e exclusão de conta reversível.',
  //     solution:
  //       'Subquery SQL EXISTS para resolver curtidas em uma única consulta, Laravel Reverb para WebSocket de chat, soft delete com janela de recuperação de 60 dias e documentação completa via Swagger/OpenAPI.',
  //     galleryImages: [],
  //     client: 'UNINASSAU — TCC LABORATÓRIO DE EMPRESAS INOVADORAS',
  //     role: 'DESENVOLVEDORA BACKEND',
  //     date: 'SETEMBRO 2024',
  //     service: 'BACKEND DEV',
  //   },
  // },
  // {
  //   id: 'lnm-delivery',
  //   number: '#06',
  //   title: 'Litoral na Mesa — Plataforma de Delivery',
  //   description: 'Plataforma de delivery que conecta clientes a restaurantes e comércios locais no litoral norte de São Paulo (Caraguatatuba, Ilhabela, São Sebastião e Ubatuba). Reconstrução completa da plataforma web em Next.js com suporte a PWA, após anos de manutenção da versão anterior em Electron e Angular.',
  //   content: '',
  //   imageSrc: 'https://lnm.byissa.dev/icons/icon-192x192.png',
  //   imageAlt: 'Ícone do aplicativo PWA do Litoral na Mesa',
  //   icons: [
  //     { name: 'local_shipping', title: 'Delivery' },
  //     { name: 'storefront', title: 'Marketplace local' },
  //     { name: 'install_mobile', title: 'PWA' },
  //   ],
  //   tags: ['#NEXTJS', '#TYPESCRIPT', '#PWA'],
  //   stack: ['NEXT.JS', 'TYPESCRIPT', 'PWA', 'CSS MODULES', 'NODE.JS'],
  //   liveUrl: 'https://lnm.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/lnm-delivery',
  //   docsUrl: 'https://github.com/issagomesdev/lnm-delivery#readme',
  //   align: 'right',
  //   caseStudy: {
  //     year: '2024',
  //     challenge: 'Modernizar uma plataforma de delivery em produção sem interromper o atendimento a clientes e restaurantes parceiros já ativos.',
  //     solution: 'Reconstrução incremental da plataforma web com Next.js e suporte a PWA, com entregas, correções e deploys homologados junto aos responsáveis pelo produto.',
  //     galleryImages: [],
  //     client: 'LITORAL NA MESA',
  //     role: 'DESENVOLVEDORA FULLSTACK',
  //     date: '2024',
  //     service: 'FULLSTACK DEV',
  //   },
  // },
  // {
  //   id: 'lnm-admin',
  //   number: '#07',
  //   title: 'Litoral na Mesa — Gestão de Cadastro de Restaurantes',
  //   description: 'Sistema de onboarding e gestão operacional para restaurantes parceiros do Litoral na Mesa: formulário multi-etapas para solicitação de integração e painel administrativo para validar, atualizar e categorizar cada solicitação.',
  //   imageSrc: 'https://litoral.byissa.dev/midia/cad%201-2.png',
  //   imageAlt: 'Tela do formulário multi-etapas de cadastro de restaurantes do Litoral na Mesa',
  //   icons: [
  //     { name: 'fact_check', title: 'Onboarding' },
  //     { name: 'admin_panel_settings', title: 'Painel administrativo' },
  //     { name: 'restaurant', title: 'Restaurantes parceiros' },
  //   ],
  //   tags: ['#LARAVEL', '#PHP', '#ADMIN'],
  //   stack: ['LARAVEL', 'PHP', 'JAVASCRIPT', 'BLADE'],
  //   liveUrl: 'https://litoral.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/litoral-admin',
  //   docsUrl: 'https://github.com/issagomesdev/litoral-admin#readme',
  //   align: 'left',
  //   caseStudy: {
  //     year: '2025',
  //     challenge: 'Padronizar e agilizar o processo de entrada de novos restaurantes parceiros, antes feito de forma manual e descentralizada.',
  //     solution: 'Formulário multi-etapas para o restaurante solicitante e painel administrativo com fluxo de status para a equipe validar, atualizar e categorizar cada solicitação.',
  //     galleryImages: [],
  //     client: 'LITORAL NA MESA',
  //     role: 'DESENVOLVEDORA FULLSTACK',
  //     date: '2025',
  //     service: 'FULLSTACK DEV',
  //   },
  //   content: ''
  // },
  // {
  //   id: 'smartoption-bot',
  //   number: '#08',
  //   title: 'Smart Option — Bot de Investimentos no Telegram',
  //   description:
  //     'Plataforma de investimentos automatizada via bot do Telegram, com cadastro, depósitos, rendimento diário, rede de afiliados em 3 níveis e integração de pagamentos com a API do PagBank. Versão de demonstração, sem transações reais.',
  //   imageSrc: 'https://so.byissa.dev/images/preview.png',
  //   content: '',
  //   imageAlt: 'Painel administrativo do Smart Option — este repositório é o bot e a API',
  //   icons: [
  //     { name: 'smart_toy', title: 'Bot do Telegram' },
  //     { name: 'payments', title: 'Integração PagBank' },
  //     { name: 'account_tree', title: 'Rede de afiliados' },
  //   ],
  //   tags: ['#NODEJS', '#TYPESCRIPT', '#PAGBANK'],
  //   stack: ['NODE.JS', 'TYPESCRIPT', 'EXPRESS.JS', 'NODE-TELEGRAM-BOT-API', 'PAGBANK API', 'JWT', 'NODE-CRON'],
  //   liveUrl: 'https://web.telegram.org/k/#@smartoptionea_bot',
  //   githubUrl: 'https://github.com/issagomesdev/smart-option',
  //   docsUrl: 'https://github.com/issagomesdev/smart-option#readme',
  //   align: 'right',
  //   caseStudy: {
  //     year: '2023',
  //     challenge:
  //       'Automatizar todo o ciclo financeiro de um produto de investimento — assinatura, renovação, rendimento diário e comissionamento de afiliados — direto pela interface conversacional do Telegram.',
  //     solution:
  //       'Cron jobs diários para expiração e renovação automática de planos, cálculo de rendimento por saldo/produto e rede de afiliados em 3 níveis com limite de comissionamento, integrados à API do PagBank para geração de cobranças.',
  //     galleryImages: [],
  //     client: 'PROJETO PESSOAL',
  //     role: 'DESENVOLVEDORA BACKEND',
  //     date: 'NOVEMBRO 2023',
  //     service: 'BACKEND DEV',
  //   },
  // },
  // {
  //   id: 'smartoption-admin',
  //   number: '#09',
  //   title: 'Smart Option — Painel Administrativo',
  //   description:
  //     'Painel administrativo para o bot financeiro Smart Option: gestão de usuários, saldos, solicitações de depósito/retirada e visualização da rede de afiliados em múltiplos níveis.',
  //   content: '',
  //   imageSrc: 'https://so.byissa.dev/images/preview.png',
  //   imageAlt: 'Dashboard administrativo do Smart Option com métricas e gestão de usuários',
  //   icons: [
  //     { name: 'dashboard', title: 'Dashboard' },
  //     { name: 'groups', title: 'Gestão de usuários' },
  //     { name: 'bar_chart', title: 'Métricas' },
  //   ],
  //   tags: ['#NEXTJS', '#MUI', '#TYPESCRIPT'],
  //   stack: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'MATERIAL UI', 'AXIOS'],
  //   liveUrl: 'https://so.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/smart-option-admin',
  //   docsUrl: 'https://github.com/issagomesdev/smart-option-admin#readme',
  //   align: 'left',
  //   caseStudy: {
  //     year: '2023',
  //     challenge:
  //       'Dar visibilidade administrativa completa sobre uma operação financeira automatizada, incluindo a hierarquia de afiliados e solicitações pendentes.',
  //     solution:
  //       'Dashboard em Next.js + Material UI consumindo a API do bot, com tabelas paginadas/filtráveis e visualização hierárquica da rede de afiliados.',
  //     galleryImages: [
  //       { src: 'https://so.byissa.dev/images/preview.png', alt: 'Dashboard administrativo do Smart Option' },
  //     ],
  //     client: 'PROJETO PESSOAL',
  //     role: 'DESENVOLVEDORA FRONTEND',
  //     date: 'DEZEMBRO 2023',
  //     service: 'FRONTEND DEV',
  //   },
  // },
  // {
  //   id: 'photox',
  //   number: '#10',
  //   title: 'PhotoX — Visualização Geoespacial de Lotes Ecológicos',
  //   description:
  //     'Plataforma interativa que exibe lotes de terra ecológicos disponíveis para iniciativas de compensação de carbono. Com um globo 3D, usuários exploram coordenadas reais, sub-regiões e lotes individuais, simulando aquisição via tokens ou NFTs.',
  //   content: '',
  //   imageSrc: 'https://photox.byissa.dev/midia/preview.png',
  //   imageAlt: 'Globo 3D interativo do PhotoX com áreas ecológicas demarcadas',
  //   icons: [
  //     { name: 'public', title: 'Globo 3D' },
  //     { name: 'travel_explore', title: 'CesiumJS' },
  //     { name: 'eco', title: 'Carbono / NFT' },
  //   ],
  //   tags: ['#LARAVEL', '#CESIUMJS', '#GEOESPACIAL'],
  //   stack: ['LARAVEL', 'PHP', 'CESIUMJS', 'TURF.JS', 'JAVASCRIPT', 'MYSQL'],
  //   liveUrl: 'https://photox.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/photox',
  //   docsUrl: 'https://github.com/issagomesdev/photox#readme',
  //   align: 'right',
  //   caseStudy: {
  //     year: '2023',
  //     challenge:
  //       'Dividir regiões geográficas reais em sub-regiões e lotes de 10×10 metros, renderizando tudo de forma performática sobre um globo 3D.',
  //     solution:
  //       'Geração dinâmica de polígonos SVG a partir de dados geográficos com CesiumJS e Turf.js, com seleção interativa por zoom e animações, mantendo o backend Laravel apenas para persistência das áreas cadastradas.',
  //     galleryImages: [
  //       { src: 'https://photox.byissa.dev/midia/preview.png', alt: 'Globo 3D interativo do PhotoX' },
  //     ],
  //     client: 'PROJETO PESSOAL',
  //     role: 'DESENVOLVEDORA FULLSTACK',
  //     date: 'OUTUBRO 2023',
  //     service: 'FULLSTACK DEV',
  //   },
  // },
  // {
  //   id: 'sjc-educacional',
  //   number: '#11',
  //   title: 'SJC Educacional — Sistema de Gestão Escolar',
  //   description:
  //     'Plataforma completa de gestão escolar para redes públicas e privadas, com módulos de matrícula, diário de classe, transporte, biblioteca, estoque e calendário acadêmico.',
  //   imageSrc: 'https://sjceducacional.byissa.dev/site/images/preview.png',
  //   content: '',
  //   imageAlt: 'Painel do sistema SJC Educacional com módulos de gestão escolar',
  //   icons: [
  //     { name: 'school', title: 'Gestão escolar' },
  //     { name: 'directions_bus', title: 'Transporte escolar' },
  //     { name: 'calendar_month', title: 'Calendário acadêmico' },
  //   ],
  //   tags: ['#LARAVEL', '#PHP', '#GESTAOESCOLAR'],
  //   stack: ['LARAVEL', 'PHP', 'BLADE', 'JAVASCRIPT', 'MYSQL'],
  //   liveUrl: 'https://sjceducacional.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/sjc-educacional',
  //   docsUrl: 'https://github.com/issagomesdev/sjc-educacional#readme',
  //   align: 'left',
  //   caseStudy: {
  //     year: '2021',
  //     challenge:
  //       'Unificar, em um único sistema modular, processos antes fragmentados de uma instituição de ensino — da matrícula ao transporte, biblioteca e estoque.',
  //     solution:
  //       'Arquitetura modular em Laravel com controle de acesso hierárquico, suporte a múltiplas instituições e relatórios dinâmicos com exportação, cobrindo todo o ciclo de gestão escolar.',
  //     galleryImages: [
  //       { src: 'https://sjceducacional.byissa.dev/site/images/preview.png', alt: 'Painel do sistema SJC Educacional' },
  //     ],
  //     client: 'SJC SISTEMAS',
  //     role: 'DESENVOLVEDORA ÚNICA',
  //     date: '2021',
  //     service: 'FULLSTACK DEV',
  //   },
  // },
  // {
  //   id: 'sjc-cemiterio',
  //   number: '#12',
  //   title: 'SJC Cemitério — Gestão de Cemitérios',
  //   description:
  //     'Plataforma para gestão de cemitérios públicos e privados, com cadastro hierárquico (cemitérios → setores → quadras → lotes/ossários → gavetas), registro de óbitos, transferências e mapa interativo para localização de túmulos.',
  //   imageSrc: 'https://sjccemiterio.byissa.dev/site/images/preview.png',
  //   content: '',
  //   imageAlt: 'Mapa interativo do sistema SJC Cemitério com localização de túmulos',
  //   icons: [
  //     { name: 'map', title: 'Mapa interativo' },
  //     { name: 'account_tree', title: 'Estrutura hierárquica' },
  //     { name: 'fact_check', title: 'Auditoria de ações' },
  //   ],
  //   tags: ['#LARAVEL', '#PHP', '#GESTAOPUBLICA'],
  //   stack: ['LARAVEL', 'PHP', 'BLADE', 'JAVASCRIPT', 'MYSQL'],
  //   liveUrl: 'https://sjccemiterio.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/sjc-cemiterio',
  //   docsUrl: 'https://github.com/issagomesdev/sjc-cemiterio#readme',
  //   align: 'right',
  //   caseStudy: {
  //     year: '2023',
  //     challenge:
  //       'Tornar rastreável e auditável a gestão de espaços funerários, com transferências internas/externas e localização precisa de túmulos.',
  //     solution:
  //       'Estrutura hierárquica completa (cemitério → setor → quadra → lote/ossário → gaveta), auditoria detalhada de cada ação e mapa interativo com marcadores arrastáveis e busca.',
  //     galleryImages: [
  //       { src: 'https://sjccemiterio.byissa.dev/site/images/preview.png', alt: 'Mapa interativo do sistema SJC Cemitério' },
  //     ],
  //     client: 'SJC SISTEMAS',
  //     role: 'DESENVOLVEDORA ÚNICA',
  //     date: 'ABRIL 2023',
  //     service: 'FULLSTACK DEV',
  //   },
  // },
  // {
  //   id: 'prefeitura-saire',
  //   number: '#13',
  //   title: 'Prefeitura de Sairé — CMS Institucional',
  //   description:
  //     'Site institucional para a Prefeitura de Sairé-PE com CMS dinâmico, permitindo que administradores gerenciem menus, páginas, notícias e galerias de fotos por um painel próprio. Usado oficialmente por cerca de 6 meses em 2023.',
  //   content: '',
  //   imageSrc: 'https://saire.byissa.dev/media/img/logo.png',
  //   imageAlt: 'Logo institucional da Prefeitura de Sairé (imagem provisória — site foi redesenhado após o preview original)',
  //   icons: [
  //     { name: 'account_balance', title: 'Órgão público' },
  //     { name: 'edit_note', title: 'CMS dinâmico' },
  //     { name: 'photo_library', title: 'Galeria de fotos' },
  //   ],
  //   tags: ['#LARAVEL', '#CMS', '#GOVTECH'],
  //   stack: ['LARAVEL', 'BLADE', 'JAVASCRIPT', 'CKEDITOR', 'SPATIE MEDIA LIBRARY'],
  //   liveUrl: 'https://saire.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/saire',
  //   docsUrl: 'https://github.com/issagomesdev/saire#readme',
  //   align: 'left',
  //   caseStudy: {
  //     year: '2023',
  //     challenge:
  //       'Entregar, como projeto freelance, um site público confiável e fácil de manter por uma equipe não-técnica da prefeitura.',
  //     solution:
  //       'CMS sob medida com controle de permissões por papel, editor de conteúdo rico (CKEditor), logs de auditoria e busca global por notícias, páginas e galerias.',
  //     galleryImages: [],
  //     client: 'PREFEITURA DE SAIRÉ — PE',
  //     role: 'DESENVOLVEDORA FULLSTACK FREELANCER',
  //     date: 'FEVEREIRO 2023',
  //     service: 'FULLSTACK DEV',
  //   },
  // },
  // {
  //   id: 'listinha-vip',
  //   number: '#14',
  //   title: 'Listinha Vip — Gestão de Eventos',
  //   description:
  //     'Plataforma de gestão de eventos com confirmação de presença, convite de acompanhantes e check-in por interface própria, incluindo área pública para convidados e painel administrativo completo para organizadores.',
  //   content: '',
  //   imageSrc: 'https://media.byissa.dev/event-management/preview.png',
  //   imageAlt: 'Painel administrativo de eventos da plataforma Listinha Vip',
  //   icons: [
  //     { name: 'event', title: 'Gestão de eventos' },
  //     { name: 'how_to_reg', title: 'Check-in' },
  //     { name: 'group_add', title: 'Lista de convidados' },
  //   ],
  //   tags: ['#LARAVEL', '#EVENTOS', '#CHECKIN'],
  //   stack: ['LARAVEL', 'PHP', 'BLADE', 'JAVASCRIPT', 'MYSQL'],
  //   liveUrl: 'https://em.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/event-management',
  //   docsUrl: 'https://github.com/issagomesdev/event-management#readme',
  //   align: 'right',
  //   caseStudy: {
  //     year: '2023',
  //     challenge:
  //       'Permitir que convidados confirmem presença e adicionem acompanhantes sem fricção, enquanto organizadores controlam o check-in em tempo real no dia do evento.',
  //     solution:
  //       'Confirmação com login/cadastro automático, redirecionamento via WhatsApp pós-confirmação e interface de check-in com busca e filtros para a equipe do evento.',
  //     galleryImages: [
  //       { src: 'https://media.byissa.dev/event-management/preview.png', alt: 'Painel administrativo da Listinha Vip' },
  //     ],
  //     client: 'LISTINHA VIP',
  //     role: 'DESENVOLVEDORA FULLSTACK FREELANCER',
  //     date: '2023',
  //     service: 'FULLSTACK DEV',
  //   },
  // },
  // {
  //   id: 'sjc-sistemas-site',
  //   number: '#15',
  //   title: 'SJC Sistemas — Site Institucional',
  //   description:
  //     'Site institucional da SJC Sistemas, empresa especializada em soluções educacionais para escolas e prefeituras, apresentando a empresa, seus produtos e canais de contato.',
  //   content: '',
  //   imageSrc: 'https://sjc.byissa.dev/imagens/preview.png',
  //   imageAlt: 'Página institucional da SJC Sistemas',
  //   icons: [
  //     { name: 'domain', title: 'Site institucional' },
  //     { name: 'language', title: 'Laravel + Blade' },
  //     { name: 'mail', title: 'Formulário de contato' },
  //   ],
  //   tags: ['#LARAVEL', '#INSTITUCIONAL'],
  //   stack: ['LARAVEL', 'BLADE', 'JAVASCRIPT', 'CSS'],
  //   liveUrl: 'https://sjc.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/sjc-site',
  //   docsUrl: 'https://github.com/issagomesdev/sjc-site#readme',
  //   align: 'left',
  //   caseStudy: {
  //     year: '2023',
  //     challenge:
  //       'Apresentar de forma clara o portfólio de produtos da SJC Sistemas, como o SJC Educacional, para escolas e prefeituras interessadas.',
  //     solution:
  //       'Site institucional em Laravel com páginas dedicadas para a empresa, produtos e formulário de contato direto.',
  //     galleryImages: [
  //       { src: 'https://sjc.byissa.dev/imagens/preview.png', alt: 'Página institucional da SJC Sistemas' },
  //     ],
  //     client: 'SJC SISTEMAS',
  //     role: 'DESENVOLVEDORA ÚNICA',
  //     date: '2023',
  //     service: 'FRONTEND DEV',
  //   },
  // },
  // {
  //   id: 'co2-calculator',
  //   number: '#16',
  //   title: 'CO2 Calculator — Cálculo de Emissões',
  //   description:
  //     'Modelo web estático para empresas calcularem emissões de CO2 em múltiplas categorias (combustível, deslocamento de funcionários, energia, transporte e viagens), com dashboard de visualização e geração de relatórios.',
  //   imageSrc: 'https://media.byissa.dev/co2/preview.png',
  //   content: '',
  //   imageAlt: 'Dashboard de emissões de CO2 com gráficos por categoria',
  //   icons: [
  //     { name: 'eco', title: 'Cálculo de emissões' },
  //     { name: 'bar_chart', title: 'Dashboard' },
  //     { name: 'description', title: 'Relatórios' },
  //   ],
  //   tags: ['#PHP', '#SUSTENTABILIDADE', '#DASHBOARD'],
  //   stack: ['PHP', 'JAVASCRIPT', 'HTML', 'CSS'],
  //   liveUrl: 'https://co2c.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/co2-calculator-template',
  //   docsUrl: 'https://github.com/issagomesdev/co2-calculator-template#readme',
  //   align: 'right',
  //   caseStudy: {
  //     year: '2023',
  //     challenge:
  //       'Criar um modelo de cálculo de emissões abrangente para múltiplas categorias, mas simples de configurar para diferentes empresas.',
  //     solution:
  //       'Páginas de entrada de dados por categoria, fila de processamento para cálculos em lote e configurações ajustáveis por categoria de emissão, com relatórios exportáveis.',
  //     galleryImages: [
  //       { src: 'https://media.byissa.dev/co2/preview.png', alt: 'Dashboard de emissões de CO2' },
  //     ],
  //     client: 'PROJETO PESSOAL',
  //     role: 'DESENVOLVEDORA FULLSTACK',
  //     date: '2023',
  //     service: 'FULLSTACK DEV',
  //   },
  // },
  // {
  //   id: 'pimage',
  //   number: '#17',
  //   title: 'PImage — Mapeamento Interativo de Imagens',
  //   description:
  //     'Ferramenta para adicionar marcadores interativos sobre imagens, com modo de edição e modo de visualização. Pensada para casos como mapeamento de cemitérios, mapas de assentos ou qualquer representação espacial baseada em imagem.',
  //   imageSrc: 'https://pimage.byissa.dev/assets/images/tutorial/preview.png',
  //   content: '',
  //   imageAlt: 'Interface do PImage com marcadores interativos sobre uma imagem',
  //   icons: [
  //     { name: 'location_on', title: 'Marcadores interativos' },
  //     { name: 'edit_location_alt', title: 'Modo de edição' },
  //     { name: 'image', title: 'Sem dependências' },
  //   ],
  //   tags: ['#JAVASCRIPT', '#HTML5', '#CSS3'],
  //   stack: ['HTML5', 'CSS3', 'JAVASCRIPT'],
  //   liveUrl: 'https://pimage.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/PImage',
  //   docsUrl: 'https://github.com/issagomesdev/PImage#readme',
  //   align: 'left',
  //   caseStudy: {
  //     year: '2022',
  //     challenge:
  //       'Permitir marcação espacial precisa sobre uma imagem qualquer, sem depender de bibliotecas externas ou backend.',
  //     solution:
  //       'Dois módulos independentes (edição e visualização) com posicionamento por pixel, busca por nome de marcador e controle de visibilidade de labels — tudo em JavaScript puro.',
  //     galleryImages: [
  //       { src: 'https://pimage.byissa.dev/assets/images/tutorial/preview.png', alt: 'Interface do PImage' },
  //     ],
  //     client: 'PROJETO PESSOAL',
  //     role: 'DESENVOLVEDORA FRONTEND',
  //     date: '2022',
  //     service: 'FRONTEND DEV',
  //   },
  // },
  // {
  //   id: 'shopping-cart',
  //   number: '#18',
  //   title: 'Shopping Cart — Carrinho Interativo',
  //   description:
  //     'Vitrine de produtos com carrinho de compras dinâmico e responsivo, construída sem frameworks ou bibliotecas externas, com galeria de imagens por produto.',
  //   imageSrc: 'https://shopping-cart.byissa.dev/products/preview.png',
  //   content: '',
  //   imageAlt: 'Vitrine de produtos com carrinho de compras interativo',
  //   icons: [
  //     { name: 'shopping_cart', title: 'Carrinho de compras' },
  //     { name: 'photo_library', title: 'Galeria de produtos' },
  //     { name: 'javascript', title: 'JavaScript puro' },
  //   ],
  //   tags: ['#JAVASCRIPT', '#HTML5', '#CSS3'],
  //   stack: ['HTML5', 'CSS3', 'JAVASCRIPT'],
  //   liveUrl: 'https://shopping-cart.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/shopping-cart',
  //   docsUrl: 'https://github.com/issagomesdev/shopping-cart#readme',
  //   align: 'right',
  //   caseStudy: {
  //     year: '2021',
  //     challenge:
  //       'Reproduzir uma experiência de compra fluida — adicionar, remover, atualizar quantidades — usando apenas manipulação direta do DOM.',
  //     solution:
  //       'Lógica de carrinho sem duplicação de itens (incrementa quantidade ao readicionar), modal de detalhes com galeria por produto e atualização dinâmica de total e contagem de itens.',
  //     galleryImages: [
  //       { src: 'https://shopping-cart.byissa.dev/products/preview.png', alt: 'Vitrine de produtos do Shopping Cart' },
  //     ],
  //     client: 'PROJETO PESSOAL',
  //     role: 'DESENVOLVEDORA FRONTEND',
  //     date: '2021',
  //     service: 'FRONTEND DEV',
  //   },
  // },
  // {
  //   id: 'my-boteco',
  //   number: '#19',
  //   title: 'My Boteco — Simulador de Bar',
  //   description:
  //     'Simulador de gestão de bar em tempo real, no qual o jogador atende clientes, prepara pedidos e ganha reputação. Foco em velocidade e estratégia: cada decisão impacta o sucesso do bar.',
  //   content: '',
  //   imageSrc: 'https://media.byissa.dev/my-boteco/preview.png',
  //   imageAlt: 'Cena de jogo do My Boteco mostrando o balcão e os pedidos dos clientes',
  //   icons: [
  //     { name: 'sports_esports', title: 'Unity' },
  //     { name: 'local_bar', title: 'Simulador de bar' },
  //     { name: 'bolt', title: 'Tempo real' },
  //   ],
  //   tags: ['#UNITY', '#CSHARP', '#GAMEDEV'],
  //   stack: ['UNITY', 'C#'],
  //   liveUrl: 'https://my-boteco.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/my-boteco',
  //   docsUrl: 'https://github.com/issagomesdev/my-boteco#readme',
  //   align: 'left',
  //   caseStudy: {
  //     year: '2024',
  //     challenge:
  //       'Criar um loop de jogo de gestão de tempo que seja imediatamente compreensível, ainda em fase inicial de desenvolvimento.',
  //     solution:
  //       'Sistema de pedidos aleatórios com até 5 itens por mesa, barra de progresso de preparo e inventário de bebidas prontas, com tempo de espera visível para o jogador.',
  //     galleryImages: [
  //       { src: 'https://media.byissa.dev/my-boteco/preview.png', alt: 'Cena de jogo do My Boteco' },
  //     ],
  //     client: 'PROJETO PESSOAL',
  //     role: 'GAME DEVELOPER',
  //     date: 'OUTUBRO 2024',
  //     service: 'GAME DEV',
  //   },
  // },
  // {
  //   id: 'risk-vs-return',
  //   number: '#20',
  //   title: 'Risk x Return — Calculadora de Investimentos',
  //   description:
  //     'Calculadora de realocação de investimentos que simula o impacto de mover recursos entre renda fixa, renda variável e ativos no exterior sobre o risco e o retorno esperado da carteira. Um dos primeiros trabalhos freelance.',
  //   content: '',
  //   imageSrc: 'https://rxr.byissa.dev/preview.png',
  //   imageAlt: 'Calculadora Risk x Return comparando duas configurações de carteira de investimentos',
  //   icons: [
  //     { name: 'calculate', title: 'Calculadora financeira' },
  //     { name: 'trending_up', title: 'Risco x retorno' },
  //     { name: 'javascript', title: 'JavaScript puro' },
  //   ],
  //   tags: ['#JAVASCRIPT', '#FINANCAS', '#HTML5'],
  //   stack: ['HTML5', 'CSS3', 'JAVASCRIPT', 'JQUERY'],
  //   liveUrl: 'https://rxr.byissa.dev',
  //   githubUrl: 'https://github.com/issagomesdev/risk-vs-return',
  //   docsUrl: 'https://github.com/issagomesdev/risk-vs-return#readme',
  //   align: 'right',
  //   caseStudy: {
  //     year: '2019',
  //     challenge:
  //       'Traduzir um modelo financeiro de risco x retorno, fornecido pelo cliente freelance, em uma ferramenta visual fácil de usar, sem nenhum framework.',
  //     solution:
  //       'Cálculo automático de percentuais de alocação, comparação antes/depois entre duas carteiras e classificação do nível de risco final, de Muito Baixo a Muito Alto.',
  //     galleryImages: [
  //       { src: 'https://rxr.byissa.dev/preview.png', alt: 'Calculadora Risk x Return' },
  //     ],
  //     client: 'FREELANCE',
  //     role: 'DESENVOLVEDORA FRONTEND FREELANCER',
  //     date: '2019',
  //     service: 'FRONTEND DEV',
  //   },
  // },
];

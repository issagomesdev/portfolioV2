import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'healthmind-app',
    number: '#01',
    title: 'HealthMind — App de Saúde Mental',
    description:
      'Plataforma mobile de saúde mental desenvolvida com React Native e Expo, com fluxos para pacientes e profissionais, autenticação, dashboards, chat, consultas e evolução clínica.',
    imageSrc: 'https://media.byissa.dev/healthmind/app_preview1.webp',
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
          src: 'https://media.byissa.dev/healthmind/SplashScreen.webp',
        },
        {
          title: 'Onboardings',
          description: 'Entrada do usuário, apresentando a proposta do aplicativo.',
          src: 'https://media.byissa.dev/healthmind/Onboardings.webp',
        },
        {
          title: 'Cadastro e Login',
          description: 'Tela de cadastro e login do usuário.',
          src: 'https://media.byissa.dev/healthmind/CadastroLogin.webp',
        },
        {
          title: 'Autocuidado emocional',
          description: 'Dashboard do paciente, check-in emocional e diário terapêutico.',
          src: 'https://media.byissa.dev/healthmind/DashboardPaciente.webp',
        },
        {
          title: 'Atividades terapêuticas',
          description: 'Recursos de bem-estar, atividades recomendadas e progresso emocional.',
          src: 'https://media.byissa.dev/healthmind/AtividadesTerapeuticas.webp',
        },
        {
          title: 'Match com profissionais',
          description: 'Busca por profissionais, recomendações e agendamento de consultas.',
          src: 'https://media.byissa.dev/healthmind/MatchProfissionais.webp',
        },
        {
          title: 'Consultas e comunicação',
          description: 'Calendário, detalhes de consulta, chat e acompanhamento contínuo.',
          src: 'https://media.byissa.dev/healthmind/ConsultasComunicacao.webp',
        },
        {
          title: 'Gestão clínica',
          description: 'Dashboard profissional, pacientes, prontuário e observações clínicas.',
          src: 'https://media.byissa.dev/healthmind/DashboardProfissional.webp',
        },
        {
          title: 'Perfil, evolução e relatórios',
          description: 'Perfil do usuário, painel de evolução, gráficos e insights',
          src: 'https://media.byissa.dev/healthmind/PerfilEvolucaoRelatorios.webp',
        },
        {
          title: 'Operação profissional',
          description: 'Pagamentos, transações, disponibilidade e regras de agendamento.',
          src: 'https://media.byissa.dev/healthmind/OperacaoProfissional.webp',
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
    imageSrc: 'https://media.byissa.dev/healthmind/api_preview.webp',
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
          src: 'https://media.byissa.dev/healthmind/api_doc.webp',
        },
        {
          title: 'Fluxo de autenticação',
          description:
            'Rotas de cadastro, login, sessão autenticada, logout e validação do usuário atual com JWT.',
          src: 'https://media.byissa.dev/healthmind/api_routes.webp',
        },
        {
          title: 'Autorização por perfil',
          description:
            'Controle de acesso por role para diferenciar permissões entre pacientes e profissionais dentro da API.',
          src: 'https://media.byissa.dev/healthmind/api_authorize.webp',
        },
        {
          title: 'Arquitetura modular',
          description:
            'Estrutura em camadas com rotas, controllers, services, repositories, middlewares, schemas e infraestrutura separados por responsabilidade.',
          src: 'https://media.byissa.dev/healthmind/api_architecture.webp',
        },
        {
          title: 'Modelagem com Prisma',
          description:
            'Banco PostgreSQL estruturado com Prisma ORM, migrations, models e relacionamento entre usuários, pacientes e profissionais.',
          src: 'https://media.byissa.dev/healthmind/api_prisma.webp',
        },
        {
          title: 'Docker e deploy',
          description:
            'Ambiente containerizado com Docker Compose, build multi-stage, produção com PostgreSQL e preparação para deploy em VPS.',
          src: 'https://media.byissa.dev/healthmind/api_deploy.webp',
        },
        {
          title: 'Segurança em produção',
          description: 'Configuração de produção com Docker Compose, healthchecks, restart automático, rotação de logs, rede interna isolada e PostgreSQL sem exposição pública ao host.',
          src: 'https://media.byissa.dev/healthmind/api_security.webp',
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
    imageSrc: 'https://media.byissa.dev/healthmind/site_preview.webp',
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
          src: 'https://media.byissa.dev/healthmind/landing_hero.webp',
        },
        {
          title: 'Seção Sobre o HealthMind',
          description:
            'Seção com os principais recursos do app, apresentando funcionalidades como acompanhamento emocional, diário, consultas, comunidade e suporte ao usuário.',
          src: 'https://media.byissa.dev/healthmind/landing_about.webp',
        },
        {
          title: 'Destaques do produto',
          description:
            'Seção com destaques visuais do HealthMind, reforçando a proposta de bem-estar, cuidado contínuo e experiência acolhedora para pacientes e profissionais.',
          src: 'https://media.byissa.dev/healthmind/landing_features.webp',
        },
        {
          title: 'Respiração guiada e autocuidado',
          description:
            'Apresentação da funcionalidade de respiração guiada, reforçando o foco do produto em bem-estar, autorregulação emocional e experiência acolhedora.',
          src: 'https://media.byissa.dev/healthmind/landing_breathing.webp',
        },
        {
          title: 'Comunidade e apoio emocional',
          description:
            'Seção dedicada à comunidade do HealthMind, destacando o espaço de troca, acolhimento e conexão entre pessoas em jornadas semelhantes.',
          src: 'https://media.byissa.dev/healthmind/landing_community.webp',
        },
        {
          title: 'Experiência para pacientes',
          description:
            'Área voltada ao público paciente, explicando benefícios como check-in emocional, diário, consultas, acompanhamento e conexão com profissionais.',
          src: 'https://media.byissa.dev/healthmind/landing_patients.webp',
        },
        {
          title: 'Recursos para profissionais',
          description:
            'Seção direcionada aos profissionais de saúde mental, apresentando recursos de agenda, gestão de pacientes, relatórios e acompanhamento clínico.',
          src: 'https://media.byissa.dev/healthmind/landing_professionals.webp',
        },
        {
          title: 'Impacto social da solução',
          description:
            'Bloco institucional destacando o valor social do HealthMind, sua proposta de acessibilidade, cuidado contínuo e apoio à saúde mental.',
          src: 'https://media.byissa.dev/healthmind/landing_impact.webp',
        },
        {
          title: 'Tecnologia e arquitetura visual',
          description:
            'Seção técnica da landing page, apresentando a stack utilizada, os diferenciais do projeto e a maturidade da solução dentro do ecossistema HealthMind.',
          src: 'https://media.byissa.dev/healthmind/landing_technology.webp',
        },
        {
          title: 'Equipe',
          description:
            'Apresentação da equipe envolvida no desenvolvimento do HealthMind, destacando papéis, contribuições e expertise de cada membro.',
          src: 'https://media.byissa.dev/healthmind/landing_team.webp',
        },
      ],
      client: 'UNICAP — 1ª JORNADA DE TECNOLOGIA 2026',
      role: 'DESENVOLVEDORA FRONTEND & UI/UX',
      date: 'MAIO 2026',
      service: 'LANDING PAGE',

    },

  },
  {
    id: 'biko-web',
    number: '#04',
    title: 'Biko — Rede Social de Serviços (Web)',
    description:
      'Plataforma web que conecta clientes a prestadores de serviços informais, com feed social, autenticação segura, sistema de interações, filtros avançados, cache local e experiência otimizada com Next.js.',

    content: `O Biko é uma plataforma web criada para conectar clientes a prestadores de serviços informais, funcionando como uma rede social de divulgação, descoberta e contratação de serviços. O projeto foi desenvolvido como Trabalho de Conclusão do Laboratório de Empresas Inovadoras da UNINASSAU, com foco em resolver um problema real de visibilidade para profissionais autônomos.\n\n• Frontend desenvolvido com Next.js 14 App Router, TypeScript e Tailwind CSS, priorizando uma interface moderna, responsiva e organizada.\n\n• Feed social com dados reais da API, scroll infinito com IntersectionObserver, curtidas otimistas, comentários, publicações e interações entre usuários.\n\n• Sistema de autenticação com cookies HttpOnly via Route Handlers do Next.js, protegendo o token e mantendo o acesso ao feed por middleware.\n\n• Cadastro multi-etapas com seleção de papel, dados de localização e serviços para prestadores, usando React Hook Form, Zod e Zustand para controlar o estado entre etapas.\n\n• Filtros avançados por tipo de publicação, categoria, estado, cidade, data e ordenação, com drawer mobile e aplicação controlada dos filtros.\n\n• Busca integrada ao feed com debounce de 400ms, reduzindo chamadas desnecessárias e melhorando a performance percebida.\n\n• Cache local de estados, cidades e categorias por 3 dias no localStorage, evitando requisições repetidas e acelerando fluxos de cadastro e filtragem.\n\n• Testes automatizados com Vitest e Testing Library, cobrindo schemas, services, hooks, componentes, filtros, cache, cards de publicação e fluxos de autenticação.`,
    imageSrc: 'https://media.byissa.dev/biko/preview.webp',
    imageAlt: 'Feed da plataforma Biko com publicações de prestadores de serviços',
    icons: [
      { name: 'forum', title: 'Feed social' },
      { name: 'filter_alt', title: 'Filtros avançados' },
      { name: 'bolt', title: 'Next.js' },
    ],
    tags: ['#NEXTJS', '#TYPESCRIPT', '#TANSTACKQUERY'],
    stack: [
      'NEXT.JS 14',
      'TYPESCRIPT',
      'TAILWIND CSS',
      'TANSTACK QUERY',
      'ZUSTAND',
      'REACT HOOK FORM + ZOD',
      'VITEST',
    ],
    liveUrl: 'https://biko.byissa.dev',
    githubUrl: 'https://github.com/issagomesdev/biko',
    docsUrl: 'https://github.com/issagomesdev/biko#readme',
    align: 'right',
    caseStudy: {
      year: '2024',
      challenge:
        'Construir uma experiência social para conectar clientes e prestadores de serviços, com feed dinâmico, autenticação segura, cadastro multi-etapas, filtros cruzados e boa performance mesmo com múltiplas interações e dados vindos da API.',
      solution:
        'Desenvolvi o frontend com Next.js 14, TypeScript e Tailwind CSS, utilizando Route Handlers para autenticação com cookies HttpOnly, TanStack Query para gerenciamento de dados, Zustand para estado global, IntersectionObserver para scroll infinito, debounce na busca e cache local para estados, cidades e categorias.',
      galleryImages: [
        {
          title: 'Landing page do Biko',
          description:
            'Página inicial apresentando a proposta da plataforma, benefícios, funcionamento e chamada para cadastro de clientes e prestadores.',
          src: 'https://media.byissa.dev/biko/hero.webp',
        },
        {
          title: 'Portfólio e descoberta de profissionais',
          description:
            'Seção institucional apresentando o portfólio profissional para divulgação de serviços e a busca por prestadores próximos com filtros por categoria, cidade e avaliações.',
          src: 'https://media.byissa.dev/biko/about.webp',
        },
        {
          title: 'Como funciona',
          description:
            'Explicação do funcionamento da plataforma em três passos: criar conta, publicar ou explorar o feed e conectar-se via chat para fechar negócio.',
          src: 'https://media.byissa.dev/biko/howToWork.webp',
        },
        {
          title: 'Recursos da plataforma',
          description:
            'Destaque das principais funcionalidades, como portfólio visual, curtidas e comentários, chat direto e busca avançada, com benefícios específicos para prestadores e clientes.',
          src: 'https://media.byissa.dev/biko/features.webp',
        },
        {
          title: 'Chamada final para cadastro',
          description:
            'Encerramento da landing page com CTAs direcionados para prestadores e clientes, e convite final para criação de conta gratuita.',
          src: 'https://media.byissa.dev/biko/start.webp',
        },
        {
          title: 'Cadastro de conta',
          description:
            'Fluxo de registro com escolha de perfil, credenciais, localização e seleção de serviços para prestadores.',
          src: 'https://media.byissa.dev/biko/register.webp',
        },
        {
          title: 'Login e autenticação segura',
          description:
            'Tela de acesso com validação, feedback por toast e autenticação segura usando cookies HttpOnly via Next.js Route Handlers.',
          src: 'https://media.byissa.dev/biko/login.webp',
        },
        {
          title: 'Feed social com filtros avançados',
          description:
            'Timeline com publicações reais da API, cards de posts, curtidas otimistas, comentários, dados do autor, categorias e localização.',
          src: 'https://media.byissa.dev/biko/feed.webp',
        },
        {
          title: 'Página de publicação e comentários',
          description:
            'Página de publicação com conteúdo completo, comentários ordenáveis, interações, autor, localização, categorias e ações contextuais.',
          src: 'https://media.byissa.dev/biko/publication.webp',
        },
        {
          title: 'Criação de nova publicação',
          description:
            'Formulário de publicação com validação por toast, categorias, localização opcional, mídia existente e novos uploads na mesma interface.',
          src: 'https://media.byissa.dev/biko/newPost.webp',
        }
      ],
      client: 'UNINASSAU — TCC LABORATÓRIO DE EMPRESAS INOVADORAS',
      role: 'DESENVOLVEDORA FRONTEND',
      date: 'OUTUBRO 2024',
      service: 'WEB APP',
    },
  },
  {
    id: 'biko-api',
    number: '#05',
    title: 'Biko — Rede Social de Serviços (API)',
    description:
      'API RESTful em Laravel responsável pela operação da rede social Biko, com autenticação, publicações, seguidores, avaliações, coleções, bloqueios, notificações e chat em tempo real via WebSocket.',
    content: `A Biko API foi desenvolvida como o backend da rede social de serviços Biko, centralizando autenticação, usuários, publicações, interações sociais, avaliações, coleções, notificações e comunicação em tempo real. A API sustenta o frontend em Next.js e foi estruturada para atender fluxos reais de uma plataforma social.\n\n• Backend construído com Laravel 11, PHP, MySQL e Docker, seguindo uma organização baseada em controllers, requests, resources, models, services, events e rotas de API.\n\n• Autenticação com Laravel Sanctum, utilizando Bearer Token para proteger rotas privadas e controlar sessões de usuários autenticados.\n\n• Sistema social completo com publicações, curtidas, comentários, respostas, seguidores, solicitações pendentes, perfis públicos/privados e bloqueios entre usuários.\n\n• Campo is_liked resolvido nas listagens por subquery SQL EXISTS, evitando consultas N+1 e mantendo boa performance no feed autenticado.\n\n• Chat em tempo real com Laravel Reverb e WebSocket, incluindo conversas, mensagens, leitura de conversa e restrições baseadas em bloqueios.\n\n• Upload e gerenciamento de mídias com Spatie Media Library, permitindo anexos em publicações, comentários e avaliações.\n\n• Sistema de avaliações e reviews com mídia, respostas, prevenção de duplicidade e validações de bloqueio entre usuários.\n\n• Coleções para salvar e organizar publicações, além de notificações para curtidas, comentários, seguidores, menções, avaliações e mensagens.\n\n• Exclusão de conta com soft delete e janela de recuperação de 60 dias via login, simulando uma regra real de retenção e recuperação de usuário.\n\n• Documentação Swagger/OpenAPI e suíte com 145 testes de feature cobrindo autenticação, usuários, seguidores, bloqueios, publicações, reviews, chat, notificações, coleções e exclusão de conta.`,
    imageSrc: 'https://media.byissa.dev/biko/api_swagger.webp',
    imageAlt: 'Interface do frontend Biko, consumidor desta API',
    icons: [
      { name: 'dns', title: 'Laravel API' },
      { name: 'chat', title: 'Chat em tempo real' },
      { name: 'security', title: 'Autenticação' },
    ],
    tags: ['#LARAVEL', '#WEBSOCKET', '#MYSQL'],
    stack: [
      'LARAVEL 11',
      'PHP',
      'LARAVEL SANCTUM',
      'LARAVEL REVERB',
      'MYSQL',
      'SPATIE MEDIA LIBRARY',
      'SWAGGER',
      'PHPUNIT',
      'DOCKER',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/issagomesdev/biko-api',
    docsUrl: 'https://github.com/issagomesdev/biko-api#readme',
    align: 'left',
    caseStudy: {
      year: '2024',
      challenge:
        'Construir uma API social completa para conectar clientes e prestadores de serviços, com autenticação, feed, interações, seguidores, bloqueios, avaliações, coleções, notificações e chat em tempo real, mantendo performance e regras de acesso consistentes.',
      solution:
        'Desenvolvi uma API RESTful em Laravel 11 com Sanctum, MySQL, WebSocket via Laravel Reverb, upload de mídias com Spatie Media Library, documentação Swagger/OpenAPI e testes de feature. Para otimizar o feed, o campo is_liked foi resolvido com subquery SQL EXISTS, evitando consultas N+1 nas listagens.',
      galleryImages: [
        {
          title: 'Documentação Swagger',
          description:
            'Página inicial da documentação OpenAPI com descrição da plataforma, guia de autenticação via Bearer Token em 5 passos com Sanctum, lista dos fluxos principais (publicações, avaliações, coleções, chat, bloqueios) e tabela de tipos de perfil (cliente=0, prestador=1).',
          src: 'https://media.byissa.dev/biko/api_swagger.webp',
        },
        {
          title: 'Autenticação e sessão',
          description:
            'Grupo Auth no Swagger com POST /register e POST /login, mostrando o endpoint de login em execução com request body, curl gerado e resposta 200 — incluindo restauração automática de contas soft-deleted com menos de 60 dias.',
          src: 'https://media.byissa.dev/biko/api_authentication.webp',
        },
        {
          title: 'Rotas de publicações',
          description:
            'Grupo Publicações no Swagger com 10 endpoints: CRUD de publicações (listar com filtros, criar, exibir, atualizar, excluir), curtir/descurtir publicação e gestão de comentários (criar, editar, deletar e curtir comentário).',
          src: 'https://media.byissa.dev/biko/api_publications.webp',
        },
        {
          title: 'Resposta do feed',
          description:
            'Execução do GET /publications no Swagger com paginação e ordenação, mostrando a resposta JSON com dados da publicação, autor (nome, username, categorias, followers_count) e headers de resposta via nginx.',
          src: 'https://media.byissa.dev/biko/api_feed.webp',
        },
        {
          title: 'Chat em tempo real',
          description:
            'Grupo Chat no Swagger com 6 endpoints: listar conversas, iniciar ou obter conversa com um usuário, ver mensagens, enviar mensagem, marcar conversa como lida e deletar mensagem.',
          src: 'https://media.byissa.dev/biko/api_chat.webp',
        },
        {
          title: 'Rotas de usuários',
          description:
            'Grupo Usuários no Swagger com 12 endpoints: buscar e exibir perfis, atualizar usuário, follow/unfollow com gestão de solicitações pendentes (aceitar/rejeitar), bloqueio e desbloqueio e exclusão de conta com soft delete recuperável em até 60 dias.',
          src: 'https://media.byissa.dev/biko/api_users.webp',
        },
        {
          title: 'Rotas de avaliações',
          description:
            'Grupo Avaliações no Swagger com 5 endpoints: listar e criar avaliações de um usuário prestador, responder a uma avaliação, editar avaliação ou resposta e excluir.',
          src: 'https://media.byissa.dev/biko/api_reviews.webp',
        },
        {
          title: 'Coleções e salvamentos',
          description:
            'Grupo Coleções no Swagger com 6 endpoints: listar, criar, exibir coleção com publicações, renomear, excluir e salvar/remover publicação da coleção via toggle.',
          src: 'https://media.byissa.dev/biko/api_collections.webp',
        },
        {
          title: 'Notificações',
          description:
            'Grupo Notificações no Swagger com 4 endpoints: listar notificações do usuário, contagem de não lidas, marcar uma notificação como lida e marcar todas como lidas.',
          src: 'https://media.byissa.dev/biko/api_notifications.webp',
        },
        {
          title: 'Testes de feature',
          description:
            'Suíte com 165 testes de feature (546 assertions) executada via Docker, cobrindo autenticação, usuários, publicações, comentários, seguidores, bloqueios, reviews, chat, notificações e coleções.',
          src: 'https://media.byissa.dev/biko/api_tests.webp',
        },
        {
          title: 'Árvore de modelos e relacionamentos',
          description:
            'Diagrama ASCII com a hierarquia de entidades da Biko API: Localização (States, Cities), Usuários (Followers, Blocks, Reviews, Collections, Notifications, Users_Categories), Categorias, Publicações (Likes, Comments, Replies, Media, Collection_Publication), Chat (Conversations, Messages) e relacionamentos externos.',
          src: 'https://media.byissa.dev/biko/api_models.webp',
        },
        {
          title: 'Ambiente Docker',
          description:
            'VS Code com terminal mostrando docker compose up -d subindo 4 containers (biko_app, biko_db, biko_phpmyadmin, biko_nginx todos Running) e docker ps listando os containers com portas mapeadas: Nginx na 8000, phpMyAdmin na 8888 e MySQL na 3306.',
          src: 'https://media.byissa.dev/biko/api_docker.webp',
        },
      ],
      client: 'UNINASSAU — TCC LABORATÓRIO DE EMPRESAS INOVADORAS',
      role: 'DESENVOLVEDORA BACKEND',
      date: 'SETEMBRO 2024',
      service: 'REST API',
    },
  },
  {
    id: 'lnm-delivery',
    number: '#07',
    title: 'Litoral na Mesa — Delivery PWA',
    description:
      'Plataforma web/PWA de delivery para cidades do litoral norte de São Paulo, com experiência adaptativa para mobile e desktop, listagem de restaurantes, carrinho, checkout, pedidos, cupons e favoritos.',
    content: `O Litoral na Mesa Delivery é uma plataforma web/PWA criada para oferecer uma experiência completa de delivery em cidades do litoral norte de São Paulo, conectando clientes a restaurantes e lojas locais diretamente pelo navegador.\n\n• Frontend desenvolvido com Next.js 15 App Router, TypeScript e CSS Modules, priorizando organização, responsividade e manutenção da interface.\n\n• Experiência adaptativa com layout mobile em estilo app e interface desktop mais ampla, utilizando a mesma base de código para diferentes dispositivos.\n\n• Suporte a PWA com manifest e service worker via next-pwa, permitindo uma experiência mais próxima de aplicativo sem exigir instalação pela loja.\n\n• Fluxo completo de delivery com seleção de cidade, listagem de restaurantes, filtros por categorias, banners promocionais, perfil da loja, cardápio e favoritos.\n\n• Carrinho de compras com gerenciamento de itens, CartBar overlay e checkout com escolha de entrega, forma de pagamento e endereço.\n\n• Montador de pizza com seleção de múltiplos sabores e pré-visualização visual da divisão, simulando um fluxo comum em operações reais de delivery.\n\n• Área do usuário com histórico de pedidos, avaliações, endereços, cupons, favoritos e informações da conta.\n\n• Interface com skeleton loading, menus adaptados para mobile e desktop, animações com Framer Motion e foco em uma experiência fluida para navegação e compra.`,
    imageSrc: 'https://media.byissa.dev/lnm-delivery/preview.png',
    imageAlt: 'Interface da plataforma Litoral na Mesa mostrando experiência de delivery em mobile e desktop',
    icons: [
      { name: 'restaurant', title: 'Delivery' },
      { name: 'phone_iphone', title: 'PWA' },
      { name: 'shopping_cart', title: 'Checkout' },
    ],
    tags: ['#NEXTJS', '#TYPESCRIPT', '#PWA'],
    stack: ['NEXT.JS 15', 'TYPESCRIPT', 'CSS MODULES', 'FRAMER MOTION', 'NEXT-PWA'],
    liveUrl: 'https://litoral.byissa.dev',
    githubUrl: 'https://github.com/issagomesdev/lnm-delivery',
    docsUrl: 'https://github.com/issagomesdev/lnm-delivery#readme',
    align: 'right',
    caseStudy: {
      year: '2025',
      challenge:
        'Criar uma experiência de delivery completa para diferentes cidades do litoral norte de São Paulo, funcionando no navegador como PWA e adaptando a interface para uso mobile e desktop a partir da mesma base de código.',
      solution:
        'Desenvolvi uma plataforma em Next.js 15 com TypeScript, CSS Modules e next-pwa, estruturando layouts adaptativos, seleção de cidade, listagem de restaurantes, filtros, perfil da loja, carrinho, checkout, pedidos, endereços, cupons, favoritos e estados de carregamento.',
      galleryImages: [
        {
          title: 'Hero Landing page',
          description:
            ' ',
          src: 'https://media.byissa.dev/lnm-delivery/hero.webp',
        },
        {
          title: 'Experiência mobile PWA',
          description:
            'Interface mobile com comportamento próximo a aplicativo nativo, navegação adaptada, menu lateral e fluxo otimizado para celular.',
          src: 'https://media.byissa.dev/lnm-delivery/hero_pwa.webp',
        },
        {
          title: 'Listagem de restaurantes',
          description:
            'Tela de lojas com categorias, filtros avançados, banners promocionais e navegação para restaurantes e estabelecimentos locais.',
          src: 'https://media.byissa.dev/lnm-delivery/home.webp',
        },
        {
          title: 'Perfil da loja',
          description:
            'Página do restaurante com cardápio, taxas de entrega, avaliações, favoritos e organização dos produtos por categoria.',
          src: 'https://media.byissa.dev/lnm-delivery/shop_profile.webp',
        },
        {
          title: 'Cardapio',
          description:
            'Página do restaurante com cardápio, taxas de entrega, avaliações, favoritos e organização dos produtos por categoria.',
          src: 'https://media.byissa.dev/lnm-delivery/menu.webp',
        },
        {
          title: 'Checkout',
          description:
            'Página do restaurante com cardápio, taxas de entrega, avaliações, favoritos e organização dos produtos por categoria.',
          src: 'https://media.byissa.dev/lnm-delivery/checkout.webp',
        },
        {
          title: 'Selecionador de fluxo pizza',
          description:
            'Fluxo personalizado para pizzas com seleção de até quatro sabores e pré-visualização visual da divisão dos sabores.',
          src: 'https://media.byissa.dev/lnm-delivery/pizzas_size_flow.webp',
        },
        {
          title: 'Selecionador de sabores pizza',
          description:
            'Fluxo personalizado para pizzas com seleção de até quatro sabores e pré-visualização visual da divisão dos sabores.',
          src: 'https://media.byissa.dev/lnm-delivery/pizzas_flavor_flow.webp',
        },
        {
          title: 'Carrinho',
          description:
            'Fluxo de compra com gerenciamento de itens, CartBar overlay, método de entrega, forma de pagamento e endereço.',
          src: 'https://media.byissa.dev/lnm-delivery/cart.webp',
        },
        {
          title: 'Acompanhamento do pedido',
          description:
            'Tela de rastreamento com timeline de status para acompanhar o andamento do pedido após a finalização.',
          src: 'https://media.byissa.dev/lnm-delivery/order.webp',
        },
        {
          title: 'Pedidos e avaliações',
          description:
            'Histórico de pedidos do usuário com detalhes das compras anteriores e componente de avaliação da experiência.',
          src: 'https://media.byissa.dev/lnm-delivery/reviews.webp',
        },
        {
          title: 'Perfil do usuario',
          description:
            'Área do usuário com gerenciamento de endereços, página de cupons, favoritos e informações da conta.',
          src: 'https://media.byissa.dev/lnm-delivery/profile.webp',
        },
        {
          title: 'Endereços',
          description:
            'Área do usuário com gerenciamento de endereços, página de cupons, favoritos e informações da conta.',
          src: 'https://media.byissa.dev/lnm-delivery/addresses.webp',
        },
      ],
      client: 'LITORAL NA MESA',
      role: 'DESENVOLVEDORA FRONTEND',
      date: '2025',
      service: 'PWA DELIVERY',
    },
  },
  // {
  //   id: 'lnm-admin',
  //   number: '#07',
  //   title: 'Litoral na Mesa — Gestão de Cadastro de Restaurantes',
  //   description:
  //     'Sistema fullstack para onboarding e gestão de restaurantes parceiros, com formulário multi-etapas, envio de solicitação, painel administrativo, categorização e controle de status.',
  //   content: `O sistema de Gestão de Cadastro de Restaurantes do Litoral na Mesa foi desenvolvido para organizar e acelerar o processo de entrada de novos parceiros na plataforma, substituindo etapas manuais por um fluxo digital mais claro, padronizado e fácil de acompanhar.\n\n• Formulário multi-etapas para restaurantes solicitarem integração, reduzindo complexidade e melhorando a experiência de preenchimento.\n\n• Coleta estruturada de informações do estabelecimento, dados de contato, operação e categorias, facilitando a análise pela equipe interna.\n\n• Painel administrativo para visualizar, validar, atualizar e acompanhar solicitações de cadastro em um único ambiente.\n\n• Controle de status para organizar o fluxo de onboarding, permitindo identificar solicitações pendentes, em análise, aprovadas ou recusadas.\n\n• Interface construída com Laravel, PHP, Blade e JavaScript, priorizando simplicidade, manutenção e aderência ao fluxo operacional do cliente.\n\n• Solução criada para reduzir retrabalho, centralizar informações e tornar o processo de cadastro de restaurantes mais profissional e rastreável.`,
  //   imageSrc: 'https://litoral.byissa.dev/midia/cad%201-2.webp',
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
  //     challenge:
  //       'Padronizar e agilizar o processo de entrada de novos restaurantes parceiros, substituindo um fluxo manual e descentralizado por uma experiência guiada, organizada e rastreável.',
  //     solution:
  //       'Desenvolvi um sistema fullstack em Laravel com formulário multi-etapas para solicitação de cadastro e painel administrativo para visualizar, validar, atualizar, categorizar e acompanhar o status de cada restaurante parceiro.',
  //     galleryImages: [
  //       {
  //         title: 'Cadastro multi-etapas',
  //         description:
  //           'Fluxo guiado para restaurantes enviarem informações iniciais, dados do estabelecimento, contato e detalhes necessários para solicitação de integração.',
  //         src: 'https://litoral.byissa.dev/midia/cad%201-2.webp',
  //       },
  //       {
  //         title: 'Dados do restaurante',
  //         description:
  //           'Etapa dedicada à coleta de informações operacionais do estabelecimento, ajudando a padronizar os dados recebidos pela equipe.',
  //         src: '',
  //       },
  //       {
  //         title: 'Revisão da solicitação',
  //         description:
  //           'Tela de confirmação para revisar os dados antes do envio, reduzindo erros e melhorando a experiência do restaurante solicitante.',
  //         src: '',
  //       },
  //       {
  //         title: 'Painel administrativo',
  //         description:
  //           'Área interna para a equipe visualizar solicitações recebidas, acompanhar restaurantes cadastrados e organizar o processo de onboarding.',
  //         src: '',
  //       },
  //       {
  //         title: 'Controle de status',
  //         description:
  //           'Fluxo administrativo para atualizar o andamento de cada solicitação, como pendente, em análise, aprovado ou recusado.',
  //         src: '',
  //       },
  //       {
  //         title: 'Categorização de restaurantes',
  //         description:
  //           'Organização dos restaurantes por categorias e dados operacionais, facilitando análise, triagem e gestão dos parceiros.',
  //         src: '',
  //       },
  //       {
  //         title: 'Detalhes da solicitação',
  //         description:
  //           'Visualização completa dos dados enviados pelo restaurante, permitindo validação e atualização das informações pela equipe.',
  //         src: '',
  //       },
  //       {
  //         title: 'Gestão operacional',
  //         description:
  //           'Recursos internos para centralizar o processo de entrada de novos parceiros e reduzir dependência de planilhas, mensagens e controles manuais.',
  //         src: '',
  //       },
  //     ],
  //     client: 'LITORAL NA MESA',
  //     role: 'DESENVOLVEDORA FULLSTACK',
  //     date: '2025',
  //     service: 'FULLSTACK DEV',
  //   },
  // },
  // {
  //   id: 'smartoption-bot',
  //   number: '#08',
  //   title: 'Smart Option — Bot de Investimentos no Telegram',
  //   description:
  //     'Plataforma de investimentos automatizada via bot do Telegram, com cadastro, depósitos, rendimento diário, rede de afiliados em 3 níveis e integração de pagamentos com a API do PagBank. Versão de demonstração, sem transações reais.',
  //   imageSrc: 'https://so.byissa.dev/images/preview.webp',
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
  //   imageSrc: 'https://so.byissa.dev/images/preview.webp',
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
  //       { src: 'https://so.byissa.dev/images/preview.webp', alt: 'Dashboard administrativo do Smart Option' },
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
  //   imageSrc: 'https://photox.byissa.dev/midia/preview.webp',
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
  //       { src: 'https://photox.byissa.dev/midia/preview.webp', alt: 'Globo 3D interativo do PhotoX' },
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
  //   imageSrc: 'https://sjceducacional.byissa.dev/site/images/preview.webp',
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
  //       { src: 'https://sjceducacional.byissa.dev/site/images/preview.webp', alt: 'Painel do sistema SJC Educacional' },
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
  //   imageSrc: 'https://sjccemiterio.byissa.dev/site/images/preview.webp',
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
  //       { src: 'https://sjccemiterio.byissa.dev/site/images/preview.webp', alt: 'Mapa interativo do sistema SJC Cemitério' },
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
  //   imageSrc: 'https://saire.byissa.dev/media/img/logo.webp',
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
  //   imageSrc: 'https://media.byissa.dev/event-management/preview.webp',
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
  //       { src: 'https://media.byissa.dev/event-management/preview.webp', alt: 'Painel administrativo da Listinha Vip' },
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
  //   imageSrc: 'https://sjc.byissa.dev/imagens/preview.webp',
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
  //       { src: 'https://sjc.byissa.dev/imagens/preview.webp', alt: 'Página institucional da SJC Sistemas' },
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
  //   imageSrc: 'https://media.byissa.dev/co2/preview.webp',
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
  //       { src: 'https://media.byissa.dev/co2/preview.webp', alt: 'Dashboard de emissões de CO2' },
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
  //   imageSrc: 'https://pimage.byissa.dev/assets/images/tutorial/preview.webp',
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
  //       { src: 'https://pimage.byissa.dev/assets/images/tutorial/preview.webp', alt: 'Interface do PImage' },
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
  //   imageSrc: 'https://shopping-cart.byissa.dev/products/preview.webp',
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
  //       { src: 'https://shopping-cart.byissa.dev/products/preview.webp', alt: 'Vitrine de produtos do Shopping Cart' },
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
  //   imageSrc: 'https://media.byissa.dev/my-boteco/preview.webp',
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
  //       { src: 'https://media.byissa.dev/my-boteco/preview.webp', alt: 'Cena de jogo do My Boteco' },
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
  //   imageSrc: 'https://rxr.byissa.dev/preview.webp',
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
  //       { src: 'https://rxr.byissa.dev/preview.webp', alt: 'Calculadora Risk x Return' },
  //     ],
  //     client: 'FREELANCE',
  //     role: 'DESENVOLVEDORA FRONTEND FREELANCER',
  //     date: '2019',
  //     service: 'FRONTEND DEV',
  //   },
  // },
];

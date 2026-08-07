/*
  ============================================================================
  PROJETOS — edite SÓ este arquivo para adicionar/atualizar projetos.
  ============================================================================

  Cada projeto tem o formato:

    {
      id:        'slug-unico',          // string única (usada como key)
      titulo:    { pt: '...', en: '...' },
      descricao: { pt: '...', en: '...' },
      stack:     ['React', 'Node'],     // tags exibidas no card
      categoria: 'freelance',           // 'freelance' | 'academico' | 'pessoal'
      destaque:  true,                  // true -> faixa de destaque no topo
      repoUrl:   'https://...',         // '' ou null oculta o botão
      demoUrl:   'https://...',         // '' ou null oculta o botão
      imagens:   ['/images/projects/<projeto>/1.webp'], // 1 pasta por projeto (ver regras)
      autoplay:  true,                  // (opcional) carrossel passa sozinho
    }

  REGRAS DE LAYOUT (automáticas, você não mexe no componente):
    • destaque: true  -> renderiza na faixa "Trabalhos profissionais / freelance"
                         (cards maiores) no topo.
    • destaque: false -> renderiza no grid de baixo.
    • repoUrl/demoUrl vazios -> o botão correspondente some sozinho.
    • imagens com 2+ -> vira carrossel (setas + bolinhas).
    • imagens com 1  -> imagem única (sem setas).
    • imagens [] ou ausente -> placeholder listrado.

  FILTRO FUTURO: como cada projeto já tem `categoria`, dá pra adicionar um
  filtro depois só lendo esse campo — nada no resto do código precisa mudar.

  Para ADICIONAR um projeto: copie um objeto, troque o `id` e os textos.
*/

export const projects = [
  // ----------------------------------------------------------------------
  // 1) FREELANCE / PROFISSIONAL — destaque (seu ativo mais forte)
  // ----------------------------------------------------------------------
  {
    id: 'level-cripto-pro',
    titulo: {
      pt: 'Level Cripto PRO',
      en: 'Level Cripto PRO',
    },
    descricao: {
      pt: 'Fui contratado para desenvolver a página de vendas full stack do Level Cripto PRO, do banco de dados ao deploy em produção, incluindo o sistema de captação de leads com validação dos dados e testes automatizados.',
      en: 'I was hired to build the full stack sales page for Level Cripto PRO, from the database to production deployment, including the lead-capture system with data validation and automated tests.',
    },
    stack: ['React', 'TypeScript', 'tRPC', 'Zod', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Vitest'],
    categoria: 'freelance',
    destaque: true,
    repoUrl: 'https://github.com/arturnery/LevelCriptoPRO',
    demoUrl: 'https://www.levelcripto.com.br',
    // Uma imagem -> renderiza como imagem única (sem setas).
    imagens: ['/images/projects/level-cripto-pro/1.webp'],
  },
  {
    id: 'airdrop-tracker',
    titulo: {
      pt: 'Airdrop Tracker',
      en: 'Airdrop Tracker',
    },
    descricao: {
      pt: 'Fui contratado para desenvolver uma ferramenta de controle financeiro de airdrops: registra capital aportado, tarefas, pontos e retornos por projeto e carteira, com login e dados isolados por usuário.',
      en: 'I was hired to build a financial control tool for crypto airdrops: it tracks deployed capital, tasks, points and returns per project and wallet, with login and per-user data isolation.',
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Drizzle ORM', 'Auth.js', 'Recharts'],
    categoria: 'freelance',
    destaque: true,
    repoUrl: 'https://github.com/arturnery/airdrop-tracker',
    demoUrl: 'https://airdrop-tracker-rho.vercel.app',
    // TODO: screenshot do app (dá pra logar na demo: demo@airdrop-tracker.app / demo1234)
    imagens: [],
  },
  {
    id: 'ecobot',
    titulo: {
      pt: 'EcoBot',
      en: 'EcoBot',
    },
    descricao: {
      pt: 'Fui contratado para desenvolver um bot que monitora o ForexFactory e entrega no Discord a agenda econômica diária, com alertas e análise de surpresa para antecipar alta volatilidade. Roda 24/7 em produção.',
      en: 'I was hired to build a bot that monitors ForexFactory and posts the daily economic calendar to Discord, with alerts and surprise analysis to anticipate high volatility. Runs 24/7 in production.',
    },
    stack: ['Python', 'discord.py', 'Docker', 'BeautifulSoup4', 'Oracle Cloud', 'Linux'],
    categoria: 'freelance',
    destaque: true,
    repoUrl: 'https://github.com/arturnery/discord-eco-bot',
    demoUrl: null, // bot de Discord: sem demo web (o card esconde o botão sozinho)
    autoplay: true, // carrossel passa sozinho (pausa no hover/foco, respeita reduce-motion)
    // 4 mensagens do bot no Discord (agenda, alerta, resultados, legenda).
    imagens: [
      '/images/projects/ecobot/1.webp',
      '/images/projects/ecobot/2.webp',
      '/images/projects/ecobot/3.webp',
      '/images/projects/ecobot/4.webp',
    ],
  },

  // ----------------------------------------------------------------------
  // 2) ACADÊMICOS — grid normal (enquadramento honesto: formação/aprendizado)
  // ----------------------------------------------------------------------
  {
    id: 'tcc-ads',
    titulo: {
      pt: 'Venda do Dia',
      en: 'Venda do Dia',
    },
    descricao: {
      pt: 'Meu TCC de ADS: um app PWA de controle de vendas diárias para uma mercearia de bairro, que funciona offline e sem custo de manutenção. Pratiquei decisões como representar dinheiro em centavos (inteiros) para evitar erros de ponto flutuante, isolar a lógica de negócio do DOM para testar e cobrir o sistema com 136 testes automatizados.',
      en: 'My Systems Analysis capstone: a PWA for daily sales control at a neighborhood grocery store, working offline at zero maintenance cost. I practiced decisions like handling money as integer cents to avoid floating-point errors, isolating business logic from the DOM for testing and covering it with 136 automated tests.',
    },
    stack: ['JavaScript', 'HTML', 'CSS', 'PWA', 'Service Worker', 'Vitest', 'GitHub Actions'],
    categoria: 'academico',
    destaque: false,
    repoUrl: 'https://github.com/arturnery/projeto-PEXV-faculdade-descomplica',
    demoUrl: 'https://arturnery.github.io/projeto-PEXV-faculdade-descomplica/',
    imagens: ['/images/projects/tcc-ads/1.webp'],
  },
  {
    id: 'rocketseat-final',
    titulo: {
      pt: 'Food Explorer',
      en: 'Food Explorer',
    },
    descricao: {
      pt: 'Aplicação full stack de cardápio digital para restaurantes: autenticação JWT, acesso por perfil (admin e cliente), CRUD de pratos com upload de imagens e busca por nome ou ingrediente. Projeto de conclusão da formação Rocketseat, onde pratiquei rotas protegidas, modelagem relacional e a organização cliente/servidor.',
      en: 'Full stack digital menu application for restaurants: JWT authentication, role-based access (admin and customer), dish CRUD with image uploads and search by name or ingredient. Capstone project from the Rocketseat program, where I practiced protected routes, relational modeling and client/server organization.',
    },
    stack: ['React', 'Vite', 'Styled-components', 'Node.js', 'Express', 'SQLite', 'Knex', 'JWT'],
    categoria: 'academico',
    destaque: false,
    repoUrl: 'https://github.com/arturnery/food-explorer',
    demoUrl: 'https://foodexplorerrs.netlify.app',
    imagens: ['/images/projects/food-explorer/1.webp'],
  },
]

/* Helpers usados pela seção de Projetos (mantêm o componente simples). */
export const featuredProjects = projects.filter((p) => p.destaque)
export const otherProjects = projects.filter((p) => !p.destaque)

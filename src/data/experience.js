/*
  Experiência, formação e idiomas — edite aqui.
  Usados na seção Experiência & Formação.
*/

export const workExperience = [
  {
    id: 'freelance-fullstack',
    period: { pt: 'Atual', en: 'Present' },
    title: {
      pt: 'Desenvolvedor Full Stack Freelancer',
      en: 'Full Stack Developer, Freelance',
    },
    highlights: {
      pt: [
        'Cliente recorrente: Level Cripto, com três projetos entregues, todos em produção e em evolução contínua.',
        'Airdrop Tracker: aplicação multiusuário de controle financeiro, do modelo de dados ao deploy.',
        'Level Cripto PRO: landing page full stack, do banco de dados ao deploy.',
        'EcoBot: bot de calendário econômico para Discord, em VM Linux com Docker.',
      ],
      en: [
        'Recurring client: Level Cripto, with three projects delivered, all in production and still evolving.',
        'Airdrop Tracker: multi-user financial tracking app, from the data model to deployment.',
        'Level Cripto PRO: full stack sales page, from database to deployment.',
        'EcoBot: economic calendar bot for Discord, on a Linux VM with Docker.',
      ],
    },
  },
]

export const education = [
  {
    id: 'pos-fullstack',
    // Sem ano definido ainda: o componente esconde o período quando é ''.
    period: '',
    degree: {
      pt: 'Pós-graduação em Desenvolvimento Full Stack (Descomplica)',
      en: 'Postgraduate Diploma in Full Stack Development (Descomplica)',
    },
    status: { pt: 'Em andamento', en: 'In progress' },
  },
  {
    id: 'ads',
    period: '2025',
    degree: {
      pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas (Descomplica)',
      en: 'Associate Degree in Systems Analysis and Development (Descomplica)',
    },
    status: { pt: 'Concluído', en: 'Completed' },
  },
]

export const languages = [
  {
    id: 'pt',
    name: { pt: 'Português', en: 'Portuguese' },
    level: { pt: 'Nativo', en: 'Native' },
  },
  {
    id: 'en',
    name: { pt: 'Inglês', en: 'English' },
    level: {
      pt: 'Intermediário (leitura e escrita técnica)',
      en: 'Intermediate (technical reading and writing)',
    },
  },
]

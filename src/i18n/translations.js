/*
  Interface (UI) translations.
  ----------------------------------------------------------------------------
  COMO ADICIONAR UM TEXTO NOVO:
    1. Adicione a mesma chave nos DOIS objetos (pt e en) abaixo.
    2. No componente: const { t } = useI18n();  ...  {t('minha_chave')}
  Se uma chave existir só num idioma, o hook devolve a própria chave como
  fallback (assim você percebe na hora que faltou traduzir).

  Obs.: os TEXTOS DOS PROJETOS não ficam aqui — eles têm PT/EN embutidos em
  src/data/projects.js (projeto.titulo[lang], projeto.descricao[lang]).
*/

export const translations = {
  pt: {
    // --- Navegação ---
    nav_projects: 'Projetos',
    nav_about: 'Sobre',
    nav_experience: 'Formação',
    nav_skills: 'Skills',
    nav_contact: 'Contato',

    // --- Toggles (aria-labels) ---
    toggle_theme: 'Alternar tema claro/escuro',
    toggle_lang: 'Mudar idioma para inglês',
    skip_to_content: 'Pular para o conteúdo',

    // --- Carrossel de imagens ---
    carousel_prev: 'Imagem anterior',
    carousel_next: 'Próxima imagem',
    carousel_goto: 'Ir para imagem',

    // --- Hero ---
    hero_role: 'Desenvolvedor Full Stack',
    hero_tagline:
      'Em busca da minha primeira oportunidade como desenvolvedor.',
    hero_cta_projects: 'Ver projetos',
    hero_cta_cv: 'Baixar CV',

    // --- Resumo Profissional ---
    about_title: 'Resumo Profissional',
    about_bio:
      'Desenvolvedor Full Stack com foco em TypeScript, React e Node.js, com experiência prática construindo aplicações completas, da modelagem do banco ao deploy em produção. Trabalho com type-safety end-to-end (tRPC + Zod), bancos serverless, testes automatizados com Vitest e arquitetura preparada para escalar.',
    about_seeking_label: 'O que estou buscando',
    about_seeking:
      'Minha primeira oportunidade como desenvolvedor júnior para contribuir em times de produto e evoluir em boas práticas, code review e desenvolvimento colaborativo.',
    about_tech_label: 'Principais tecnologias',

    // --- Experiência & Formação ---
    experience_title: 'Experiência & Formação',
    experience_subtitle:
      'Trajetória profissional, formação acadêmica e idiomas.',
    experience_work_title: 'Experiência profissional',
    experience_education_title: 'Formação acadêmica',
    experience_languages_title: 'Idiomas',

    // --- Projetos ---
    projects_title: 'Projetos',
    projects_subtitle:
      'Uma seleção de trabalhos pagos e projetos de formação.',
    projects_featured_title: 'Trabalhos profissionais / freelance',
    projects_featured_desc:
      'Projetos reais pelos quais fui contratado, com código aberto no repositório.',
    projects_academic_title: 'Projetos acadêmicos',
    projects_academic_desc:
      'Projetos de conclusão e formação, com foco nas decisões técnicas e no aprendizado.',
    project_repo: 'Repositório',
    project_demo: 'Ver demo',
    project_view: 'Ver projeto',

    // --- Skills ---
    skills_title: 'Skills',
    skills_subtitle: 'Tecnologias e ferramentas com que trabalho.',
    skills_cat_languages: 'Linguagens',
    skills_cat_frontend: 'Front-end',
    skills_cat_backend: 'Back-end',
    skills_cat_database: 'Banco de dados',
    skills_cat_devops: 'DevOps / Deploy',
    skills_cat_tools: 'Ferramentas',
    skills_cat_learning: 'Estudando',

    // --- Contato ---
    contact_title: 'Contato',
    contact_subtitle:
      'Aberto a oportunidades e conversas. Vamos trocar uma ideia?',
    contact_email_cta: 'Enviar e-mail',

    // --- Footer ---
    footer_built: 'Feito com React + Vite.',
    footer_rights: 'Todos os direitos reservados.',
  },

  en: {
    // --- Navigation ---
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_experience: 'Background',
    nav_skills: 'Skills',
    nav_contact: 'Contact',

    // --- Toggles (aria-labels) ---
    toggle_theme: 'Toggle light/dark theme',
    toggle_lang: 'Switch language to Portuguese',
    skip_to_content: 'Skip to content',

    // --- Image carousel ---
    carousel_prev: 'Previous image',
    carousel_next: 'Next image',
    carousel_goto: 'Go to image',

    // --- Hero ---
    hero_role: 'Full Stack Developer',
    hero_tagline: 'Looking for my first opportunity as a developer.',
    hero_cta_projects: 'View projects',
    hero_cta_cv: 'Download CV',

    // --- Professional Summary ---
    about_title: 'Professional Summary',
    about_bio:
      'Full Stack Developer focused on TypeScript, React and Node.js, with hands-on experience building complete applications, from database modeling to production deployment. I work with end-to-end type-safety (tRPC + Zod), serverless databases, automated testing with Vitest, and architecture built to scale.',
    about_seeking_label: "What I'm looking for",
    about_seeking:
      'My first opportunity as a junior developer, to contribute to product teams and grow in best practices, code review, and collaborative development.',
    about_tech_label: 'Core technologies',

    // --- Experience & Education ---
    experience_title: 'Experience & Education',
    experience_subtitle:
      'Professional background, academic training, and languages.',
    experience_work_title: 'Work experience',
    experience_education_title: 'Education',
    experience_languages_title: 'Languages',

    // --- Projects ---
    projects_title: 'Projects',
    projects_subtitle: 'A selection of paid work and educational projects.',
    projects_featured_title: 'Professional / freelance work',
    projects_featured_desc:
      'Real projects I was hired for, with open source code on the repository.',
    projects_academic_title: 'Academic projects',
    projects_academic_desc:
      'Capstone and coursework projects, focused on technical decisions and learning.',
    project_repo: 'Repository',
    project_demo: 'Live demo',
    project_view: 'View project',

    // --- Skills ---
    skills_title: 'Skills',
    skills_subtitle: 'Technologies and tools I work with.',
    skills_cat_languages: 'Languages',
    skills_cat_frontend: 'Front-end',
    skills_cat_backend: 'Back-end',
    skills_cat_database: 'Database',
    skills_cat_devops: 'DevOps / Deploy',
    skills_cat_tools: 'Tools',
    skills_cat_learning: 'Learning',

    // --- Contact ---
    contact_title: 'Contact',
    contact_subtitle:
      "Open to opportunities and conversations. Let's talk?",
    contact_email_cta: 'Send email',

    // --- Footer ---
    footer_built: 'Built with React + Vite.',
    footer_rights: 'All rights reserved.',
  },
}

/*
  SKILLS agrupadas por categoria.
  Cada grupo tem uma `labelKey` (texto traduzido em src/i18n/translations.js)
  e uma lista de itens. Para adicionar uma skill, inclua a string na lista.
  Para um grupo novo: crie a chave `skills_cat_*` nos dois idiomas e adicione
  um objeto aqui.
*/

export const skillGroups = [
  {
    id: 'languages',
    labelKey: 'skills_cat_languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    id: 'frontend',
    labelKey: 'skills_cat_frontend',
    items: ['React', 'Vite', 'Next.js', 'TailwindCSS', 'Radix UI / Shadcn', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    labelKey: 'skills_cat_backend',
    items: ['Node.js', 'Express', 'tRPC', 'Zod', 'JWT (jose)', 'Python (discord.py)', 'BeautifulSoup4'],
  },
  {
    id: 'database',
    labelKey: 'skills_cat_database',
    items: ['PostgreSQL (Neon)', 'MySQL', 'Drizzle ORM'],
  },
  {
    id: 'devops',
    labelKey: 'skills_cat_devops',
    items: ['Docker', 'Vercel', 'Oracle Cloud', 'SSH/SCP', 'esbuild', 'Git / GitHub', 'Vitest'],
  },
]

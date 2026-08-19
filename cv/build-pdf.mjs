/*
  Gera o PDF do currículo a partir de cv/curriculo.md.

    npm run cv

  Fonte de verdade: cv/curriculo.md (texto, versionado no git).
  Saída: public/cv/Artur-Matoso-Nery-CV.pdf (é o arquivo que profile.js serve
  no botão "Baixar CV" do site).

  Sem dependências: converte um subconjunto de Markdown para HTML e imprime
  com o Chrome em modo headless, que já está instalado na máquina.
*/

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { tmpdir } from 'node:os'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(root, 'cv', 'curriculo.md')
const OUT = join(root, 'public', 'cv', 'Artur-Matoso-Nery-CV.pdf')

/* Candidatos a binário do Chrome, em ordem de preferência. */
const CHROME = ['google-chrome', 'chromium', 'chromium-browser', 'google-chrome-stable']

/* ---------------------------------------------------------------- Markdown */

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/* Linhas de link abaixo de um título viram texto pequeno e discreto. */
const META_LINE = /^(Projeto|Demo|Site|Repositório):/
const CONTACT_LINE = /^(E-mail|LinkedIn|GitHub|Portfólio):/

function inline(text) {
  let html = escapeHtml(text)
  const links = []

  // [texto](url) sai de cena primeiro, para o autolink não mexer nele.
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    links.push(`<a href="${href}">${label}</a>`)
    return `\u0000${links.length - 1}\u0000`
  })

  html = html.replace(/(https?:\/\/[^\s<)]+)/g, (url) => {
    // Pontuação final pertence à frase, não à URL.
    const trimmed = url.replace(/[.,;:]$/, '')
    const tail = url.slice(trimmed.length)
    links.push(`<a href="${trimmed}">${trimmed.replace(/^https?:\/\//, '')}</a>`)
    return `\u0000${links.length - 1}\u0000${tail}`
  })

  html = html
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')

  return html.replace(/\u0000(\d+)\u0000/g, (_, i) => links[Number(i)])
}

function markdownToHtml(md) {
  const out = []
  let list = null // linhas do <ul> aberto
  let para = null // linhas do <p> aberto

  const closeList = () => {
    if (list) {
      out.push(`<ul>${list.join('')}</ul>`)
      list = null
    }
  }
  const closePara = () => {
    if (para) {
      out.push(`<p>${para.join('<br>')}</p>`)
      para = null
    }
  }
  const closeAll = () => {
    closeList()
    closePara()
  }

  for (const raw of md.split('\n')) {
    const line = raw.trim()

    if (!line) {
      closeAll()
      continue
    }
    if (line === '---') {
      closeAll()
      out.push('<hr>')
      continue
    }

    const heading = line.match(/^(#{1,3})\s+(.*)$/)
    if (heading) {
      closeAll()
      const level = heading[1].length
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`)
      continue
    }

    if (line.startsWith('- ')) {
      closePara()
      list = list || []
      list.push(`<li>${inline(line.slice(2))}</li>`)
      continue
    }

    closeList()
    para = para || []
    const cls = META_LINE.test(line) ? 'meta' : CONTACT_LINE.test(line) ? 'contact' : null
    para.push(cls ? `<span class="${cls}">${inline(line)}</span>` : inline(line))
  }

  closeAll()
  return out.join('\n')
}

/* -------------------------------------------------------------------- CSS */

/* Cores alinhadas com src/styles/tokens.css (accent azul, neutros slate). */
const CSS = `
  @page { size: A4; margin: 11mm 13mm; }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: "Inter", "Helvetica Neue", Arial, "Liberation Sans", sans-serif;
    font-size: 9.3pt;
    line-height: 1.33;
    color: #1e293b;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  h1 {
    font-size: 21pt;
    line-height: 1.1;
    margin: 0 0 2px;
    color: #0f172a;
    letter-spacing: -0.4px;
  }

  h2 {
    font-size: 11.5pt;
    margin: 10px 0 5px;
    padding-bottom: 3px;
    color: #2563eb;
    border-bottom: 1.5px solid #dbe3ef;
    text-transform: uppercase;
    letter-spacing: 0.6px;
  }

  h3 {
    font-size: 10.3pt;
    margin: 7px 0 3px;
    color: #0f172a;
  }

  p { margin: 0 0 4px; }

  /* Bloco de um cargo ou projeto não deve rachar entre duas páginas. */
  h3, h2 { break-after: avoid; page-break-after: avoid; }
  ul { break-inside: auto; }
  li { break-inside: avoid; page-break-inside: avoid; }

  ul {
    margin: 3px 0 5px;
    padding-left: 15px;
  }

  li {
    margin-bottom: 1.5px;
    padding-left: 1px;
  }

  li::marker { color: #94a3b8; }

  a { color: #1d4ed8; text-decoration: none; }

  code {
    font-family: "JetBrains Mono", "DejaVu Sans Mono", monospace;
    font-size: 0.9em;
    background: #f1f5f9;
    padding: 0.5px 3px;
    border-radius: 3px;
  }

  strong { color: #0f172a; }

  .contact { color: #475569; }
  .meta { font-size: 8.6pt; color: #64748b; }

  /* O primeiro hr separa o cabeçalho e não precisa de espaço extra. */
  hr {
    border: 0;
    height: 0;
    margin: 0;
  }
`

/* ------------------------------------------------------------------- Build */

function findChrome() {
  for (const bin of CHROME) {
    try {
      execFileSync('which', [bin], { stdio: 'pipe' })
      return bin
    } catch {
      /* tenta o próximo */
    }
  }
  throw new Error(
    `Nenhum navegador encontrado para gerar o PDF. Procurei por: ${CHROME.join(', ')}.`,
  )
}

const md = readFileSync(SRC, 'utf8')
const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Artur Matoso Nery, Desenvolvedor Full Stack</title>
<style>${CSS}</style>
</head>
<body>
${markdownToHtml(md)}
</body>
</html>`

const htmlPath = join(tmpdir(), `cv-${Date.now()}.html`)
writeFileSync(htmlPath, html)
mkdirSync(dirname(OUT), { recursive: true })

const chrome = findChrome()
execFileSync(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--virtual-time-budget=3000',
    `--print-to-pdf=${OUT}`,
    `file://${htmlPath}`,
  ],
  { stdio: 'pipe' },
)

console.log(`PDF gerado: ${OUT.replace(root + '/', '')}`)

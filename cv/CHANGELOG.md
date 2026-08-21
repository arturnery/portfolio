# Mudanças no currículo

Registro do que muda em `cv/curriculo.md`, para servir de lista de tarefas do
portfólio: o site precisa contar a mesma história que o CV.

Cada entrada responde três coisas: **o que mudou**, **de onde veio a informação**
(porque toda afirmação do CV tem que sobreviver a "me dá um exemplo") e **o que
isso exige no site**.

Estado do PDF: **2 páginas**, com 4pt de folga no fim da página 2. Qualquer
adição a partir daqui empurra para a terceira página e exige corte em outro
lugar. Medir antes de decidir o que cortar:

```bash
npm run cv
pdftotext -bbox public/cv/Artur-Matoso-Nery-CV.pdf - | grep -o 'yMax="[0-9.]*"' | ...
```

---

## 2026-08-18

### Desenvolvimento assistido por IA (`b62e25d`)

**No CV:** item novo em Habilidades Técnicas, descrevendo o uso de Claude Code
por práticas (instruções de agente versionadas por projeto, catálogo de 39
padrões de defeito, revisão crítica antes do commit), não por tempo de uso.

**De onde veio:** três vagas pediram a ferramenta pelo nome, duas delas pedindo
revisão crítica do código gerado. A evidência está em `AGENTS.md` e `CLAUDE.md`
dos projetos, em `~/.claude/padroes-de-erro.md` (805 linhas, 39 padrões) e nos
141 commits com `Co-Authored-By: Claude` em 5 repositórios.

**Cuidado registrado:** o rascunho original falava em "uso diário há ~1 ano". O
primeiro commit com Claude é de 2026-05-08, cerca de três meses. Os repositórios
são públicos e estão linkados no CV, então o tempo de uso não entra.

**No site:** feito. Terceiro card em Resumo Profissional (`about_ai_label` e
`about_ai` em `src/i18n/translations.js`, renderizado por `About.jsx`), PT e EN.

### EcoBot mudou de fonte de dados (`9ac49b2`)

**No CV:** "monitora o ForexFactory" virou "monitora o calendário econômico do
Investing.com", e a linha do bug de timezone deixou de citar a fonte antiga pelo
nome.

**De onde veio:** `scraper.py` aponta para `br.investing.com` desde 2026-08-13.
A fonte antiga passou a responder 403 e a migração foi a saída.

**No site:** o card do EcoBot não nomeia a fonte, então não precisou mudar. Mas
as tags de stack ainda não citam `curl_cffi`, que substituiu `requests`.

**Pendente:** a saga do 403 (três tentativas de contorno, depois a decisão de
trocar a fonte) ainda não está no CV. Renderia um bullet melhor que o atual do
scraper, que é lista de biblioteca. Exige cortar uma linha em outro lugar.

---

## 2026-08-17

### Pós-graduação em andamento (`a41a077`)

**No CV:** Pós-graduação em Desenvolvimento Full Stack (Descomplica), em
andamento, no topo da Formação Acadêmica. A linha do ADS ganhou a instituição,
que estava faltando.

**No site:** feito, em `src/data/experience.js`. O período ficou vazio porque os
anos ainda não foram definidos; o componente esconde o período quando é `''`.

**Pendente:** preencher início e previsão de conclusão da pós, nos dois lugares.

### Airdrop Tracker e reordenação (`e484714`, `808c6c3`)

**No CV:** o Airdrop Tracker passou a abrir a Experiência, por ser o projeto mais
forte. O Rocketseat saiu da Formação Acadêmica, por ser curso pago online, e
seguiu creditado no projeto Food Explorer. A demo passou a apontar para
`lvl-airdrop.vercel.app`, já que o endereço antigo virou redirecionamento.

**De onde veio:** os números foram conferidos no repositório do projeto, não
copiados do card do portfólio. Os 159 testes vieram de rodar a suíte; a decisão
de modelar como livro-razão veio do `ARCHITECTURE.md`, escrito antes da
implementação.

**No site:** feito. Ordem dos destaques, descrições nomeando a Level Cripto como
cliente recorrente, e as cinco capturas de tela do app.

### Trabalho para um cliente recorrente (`e484714`)

**No CV:** os três projetos freelance passaram a aparecer agrupados sob a Level
Cripto, em vez de trabalhos avulsos. Responde sozinho à pergunta que se faz de
todo freelancer júnior: o trabalho foi bom o bastante para ser recontratado?

**No site:** feito, em `src/data/experience.js` e nas descrições dos cards.

---

## 2026-08-07

### O CV virou texto versionado (`75d43b5`)

Antes era um PDF exportado à mão, que saía de sincronia com o portfólio sem
ninguém perceber: o Airdrop Tracker entrou no site e nunca chegou ao currículo.
Agora `cv/curriculo.md` é a fonte e `npm run cv` gera o PDF.

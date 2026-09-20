# GEO Analysis — psimanufehr.com
**Emanuelle Fehr · Psicóloga Online · Portugal**
**Generated:** 2026-09-20

---

## GEO Readiness Score: 41 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 42 | 10.5 |
| Structural Readability | 20% | 40 | 8.0 |
| Multi-Modal Content | 15% | 15 | 2.3 |
| Authority & Brand Signals | 20% | 48 | 9.6 |
| Technical Accessibility | 20% | 52 | 10.4 |
| **Total** | | | **40.8 / 100** |

**Assessment:** Strong professional identity foundations (verifiable license numbers, named clinical modalities, prestigious university credentials) but critically underbuilt structural layer. Primary weaknesses are no llms.txt, no explicit AI crawler declarations, no FAQ schema, thin blog content (3 posts, 500–700 words each), and virtually no external brand mentions beyond Instagram.

---

## Platform Breakdown

| Platform | Current Score | Ceiling Without Action | Ceiling With Full Recommendations |
|---|---|---|---|
| Google AI Overviews (pt-PT) | Very Low | Low | **Medium-High** (with FAQ schema + blog) |
| Perplexity | Low–Medium | Medium | **High** (with llms.txt + structured data) |
| ChatGPT web browsing | Low | Low–Medium | **Medium** (with LinkedIn + credential schema) |
| Bing Copilot | Low | Low–Medium | **Medium** (with Person schema + IndexNow) |

**Key platform insight:** Only 11% of domains are cited by both ChatGPT and Google AI Overviews for the same query. For a Portuguese psychologist, Google AIO (pt-PT) and Perplexity are the highest-leverage targets.

---

## AI Crawler Access Status

`robots.txt` uses a single wildcard `User-agent: * / Allow: /` with **no named AI crawler rules**.

| Crawler | Status | Recommendation |
|---|---|---|
| GPTBot (OpenAI) | Implicitly allowed | Add explicit `Allow: /` |
| OAI-SearchBot (OpenAI) | Implicitly allowed | Add explicit `Allow: /` |
| ChatGPT-User (OpenAI) | Implicitly allowed | Add explicit `Allow: /` |
| ClaudeBot (Anthropic) | Implicitly allowed | Add explicit `Allow: /` |
| anthropic-ai (Anthropic) | Implicitly allowed | No action needed (training crawler) |
| PerplexityBot | Implicitly allowed | Add explicit `Allow: /` |
| Google-Extended (AIO training) | Implicitly allowed | Add explicit `Allow: /` |
| CCBot (Common Crawl) | Implicitly allowed | Consider blocking (training only) |

**Recommended `robots.txt` addition** (insert before the wildcard block):

```
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

Explicit declarations signal deliberate AI search participation. The difference between implicit and explicit is visible to any audit of the robots.txt — and Google documents Google-Extended specifically for AI Overview training opt-in.

---

## llms.txt Status

**Status: ABSENT — HTTP 404**

`https://www.psimanufehr.com/llms.txt` does not exist. No RSL 1.0 licensing declaration was detected on any page.

### Ready-to-Use Template

Create `/static/llms.txt` in the Gatsby project (Gatsby serves `/static/` as root-level files):

```
# Emanuelle Fehr — Psicóloga Online
> Psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC),
> ACT e Terapia de Esquemas. Atendimento online em português para Portugal
> e para a diáspora lusófona. OPP #27145 · ERS E173632.

## Páginas principais

- [Início](https://www.psimanufehr.com/): Serviços de psicoterapia online e apresentação da psicóloga
- [Sobre Mim](https://www.psimanufehr.com/about/): Credenciais, formação académica e abordagem terapêutica
- [Psicoterapia Online](https://www.psimanufehr.com/online-therapy/): Como funciona a terapia online, modalidades e agendamento
- [Blog](https://www.psimanufehr.com/blog/): Artigos sobre saúde mental em português

## Artigos de blog

- [Autoestima: Como Ela se Forma e Como Fortalecê-la](https://www.psimanufehr.com/blog/autoestima-como-fortalecer/): Guia prático baseado em TCC para fortalecer a autoestima
- [PHDA: Como Identificar Sinais e Aprender Estratégias](https://www.psimanufehr.com/blog/tenho-perturbacao-de-deficit-de-atencao-e-hiperatividade/): Diferença entre PHDA e hiperestimulação; estratégias clínicas
- [Conexão Emocional e Sexualidade](https://www.psimanufehr.com/blog/conexao-emocional/): O papel do vínculo afetivo na saúde relacional

## Factos principais

- Psicóloga registada: Ordem dos Psicólogos Portugueses #27145
- Reguladora: Entidade Reguladora da Saúde E173632
- Formação: Mestrado em Psicologia da Educação, Universidade de Coimbra (2020)
- Especialização: TCC (CRIAP, 2024), ACT, Terapia de Esquemas
- Sessões: 50 minutos, online por videochamada; sessão introdutória gratuita de 15 minutos
- Clientes: Portugal, Países Baixos, Dinamarca, Suíça
- Contacto: emanuelle.fehr@mail.com | +351 910 809 408
```

---

## Brand Mention Analysis

Brand mentions correlate **3× more strongly** with AI visibility than backlinks (Ahrefs, Dec 2025, 75,000 brands).

| Platform | Correlation with AI Citations | Status | Priority |
|---|---|---|---|
| YouTube | ~0.737 (strongest signal) | Not detected | High |
| Reddit | High | Not detected | High |
| Wikipedia | High | Not applicable (private practice) | Low |
| LinkedIn | Moderate | Configured but hidden on site | **Immediate** |
| Instagram | Low (not crawlable) | Present (@manufehr) | — |
| OPP Directory | Very high (regulatory authority) | Registration confirmed, web presence unverified | **Immediate** |
| Doctoralia.pt | High (healthcare directory) | Not detected | High |

**Instagram @manufehr is not crawlable by AI systems.** It generates social proof for humans but zero AI citation signal.

**LinkedIn is the single fastest win.** A complete LinkedIn profile with OPP number, university, and specializations is crawlable by Bing (→ Bing Copilot), indexed by Google, and frequently cited by ChatGPT for practitioner queries. Currently configured in `hero.json` but `showIcons: false` hides it — **this was fixed in the Week 1 patch.**

**OPP public directory:** The Ordem dos Psicólogos Portugueses member directory is a high-authority `.pt` domain. Verify that the OPP listing for #27145 links to `www.psimanufehr.com`. If not, contact OPP to update the profile URL. This is a Tier A citation.

---

## Passage-Level Citability Analysis

**Optimal passage length for AI citation: 134–167 words** (self-contained answer blocks).

### Current Content Assessment

| Content Block | Word Count | Citability | Issue |
|---|---|---|---|
| Homepage hero description | ~60 words | Low | Too short; no specific claims |
| Services section (3 cards) | ~130 words total | Low | Fragmented across 3 cards; not self-contained |
| Blog: Autoestima (full article) | ~700 words | Medium | Good structure but no cited stats |
| Blog: PHDA | ~550 words | Low–Medium | Clinical claims without DSM-5/ICD-11 citations |
| Blog: Conexão emocional | ~500 words | Low | Too short; vague |
| About / credentials section | ~200 words | Medium | Has specific numbers (OPP, ERS, Coimbra) |

### Passages to Rewrite for AI Citability

**Current (hero description — too vague to cite):**
> "A terapia é um espaço seguro e confidencial, pensado para promover autoconhecimento, acolhimento e desenvolvimento pessoal, com base em práticas fundamentadas cientificamente."

**Rewritten for citability (first-60-word direct answer):**
> "A Terapia Cognitivo-Comportamental (TCC) é uma abordagem psicológica baseada em evidências científicas, com eficácia comprovada no tratamento de ansiedade, depressão, PHDA e perturbações do comportamento (APA, 2019). Desenvolvida por Aaron T. Beck nos anos 1960, a TCC trabalha a relação entre pensamentos, emoções e comportamentos, ajudando a identificar padrões disfuncionais e a substituí-los por respostas mais adaptativas."

This 67-word block is self-contained, directly answers "O que é TCC?", includes the originator's name and decade, and cites APA — three AI citation signals in one paragraph.

**Recommended article structure for AI-optimal blog posts:**

```
## [Question-based H2, e.g., "O que é a Terapia Cognitivo-Comportamental?"]
[40-60 word direct answer — the AI snippet zone]
[80-120 word expansion with a cited statistic]
[Practical example or case illustration]

## [Second question-based H2]
...
```

---

## Server-Side Rendering Check

**Status: PASS**

The site is built with **Gatsby 5.16.1** (static site generation). All HTML is pre-rendered at build time. AI crawlers that do not execute JavaScript (which is all of them) receive fully rendered content including all text, headings, and metadata.

Confirmed signals:
- Full content present in raw HTML fetch
- Professional credentials, testimonials, and service descriptions all in static HTML
- JavaScript is additive (animations, hydration) — not required to access any content
- No client-only routing for key pages

**This is the strongest technical GEO signal the site has.** A Next.js or React SPA with client-side rendering would score 20–30 points lower on Technical Accessibility.

---

## Top 5 Highest-Impact Changes

### 1. Create `/static/llms.txt` ⏱ 30 minutes · Impact: HIGH

Uses the template above. Costs nothing, positions the site for Perplexity's llms.txt-aware crawling, and signals deliberate AI search participation. Gatsby serves `/static/` files at the domain root automatically — no config needed.

### 2. Add explicit AI crawler allowances to `robots.txt` ⏱ 10 minutes · Impact: HIGH

Paste the 18-line block above before the `User-agent: *` section in `static/robots.txt` or via Netlify's `_headers`. Explicit declarations are visible to any audit — and to Google's Search Console documentation for Google-Extended opt-in.

### 3. Add FAQPage content + schema targeting PAA queries ⏱ 2–3 hours · Impact: VERY HIGH for Google AIO

This is the single highest-impact action for **Google AI Overviews in pt-PT**. FAQPage schema creates direct eligibility for AI Overview snippets for health queries. Target questions:

- "A psicoterapia online é tão eficaz quanto a presencial?"
- "O que é a Terapia Cognitivo-Comportamental (TCC)?"
- "Quanto tempo dura uma sessão de psicoterapia?"
- "Como é a primeira consulta de psicologia online?"
- "As sessões são confidenciais?"

Add as a `<section>` on the `/online-therapy/` page (or homepage), marked up with FAQPage JSON-LD. Each answer: 60–150 words, self-contained, direct.

### 4. Add Person + MedicalBusiness schema with `hasCredential` ⏱ 2–3 hours · Impact: HIGH

Machine-readable credentials directly feed Google's Knowledge Graph, which feeds AI Overviews. The current schema has `ProfessionalService` and `Person` blocks but both are missing `hasCredential` (OPP #27145, ERS E173632), `@id`, `image`, `alumniOf`, and `sameAs`. Full corrected JSON-LD is in the main SEO audit.

### 5. Blog content expansion with cited sources ⏱ Ongoing · Impact: HIGH over 3–6 months

3 blog posts × ~600 words = ~1,800 words of indexed content on a YMYL health site. AI systems cannot build topical authority signals from this volume. Target:
- 2 posts/month minimum
- Each structured with question-based H2s
- Each containing 2–4 cited academic or clinical sources (APA, DSM-5, Scielo.org, OPP guidelines)
- First 60 words of each section answer the section question directly

---

## Schema Recommendations for AI Discoverability

### Priority 1 — `Person` with credentials (highest AI discoverability value)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.psimanufehr.com/#person",
  "name": "Emanuelle Fehr",
  "jobTitle": "Psicóloga Clínica",
  "url": "https://www.psimanufehr.com",
  "image": "https://www.psimanufehr.com/static/fdb7067cc61cb75afa15c2736f638818/67c6e/emanuelle-about.avif",
  "knowsAbout": [
    "Terapia Cognitivo-Comportamental",
    "ACT - Terapia de Aceitação e Compromisso",
    "Terapia de Esquemas",
    "Psicologia Intercultural",
    "Ansiedade",
    "Depressão",
    "PHDA",
    "Autoestima"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Ordem dos Psicólogos Portugueses",
      "identifier": "27145",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Ordem dos Psicólogos Portugueses",
        "url": "https://www.ordemdospsicologos.pt"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Entidade Reguladora da Saúde",
      "identifier": "E173632",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Entidade Reguladora da Saúde",
        "url": "https://www.ers.pt"
      }
    }
  ],
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Universidade de Coimbra",
      "url": "https://www.uc.pt"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/manufehr/"
  ]
}
```

### Priority 2 — `FAQPage` for `/online-therapy/` (Google AIO eligibility)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "A psicoterapia online é tão eficaz quanto a presencial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Diversos estudos publicados em revistas científicas, incluindo uma meta-análise de 2020 no Journal of Affective Disorders, demonstram que a psicoterapia online apresenta eficácia equivalente à presencial para ansiedade, depressão e perturbações de humor. A modalidade online permite maior flexibilidade de horários, elimina barreiras geográficas e mantém a qualidade do vínculo terapêutico quando conduzida por um psicólogo devidamente licenciado."
      }
    },
    {
      "@type": "Question",
      "name": "O que é a Terapia Cognitivo-Comportamental (TCC)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Terapia Cognitivo-Comportamental (TCC) é uma abordagem psicológica baseada em evidências científicas, desenvolvida por Aaron T. Beck nos anos 1960. Trabalha a relação entre pensamentos, emoções e comportamentos, ajudando a identificar padrões de pensamento disfuncionais e a desenvolver estratégias para substituí-los. É reconhecida pela APA como tratamento de primeira linha para ansiedade, depressão, PHDA, fobias e outras perturbações."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo dura uma sessão de psicoterapia online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As sessões têm duração padrão de 50 minutos. Existe também uma sessão introdutória gratuita de 15 minutos, sem compromisso, para que possa conhecer a abordagem terapêutica e esclarecer dúvidas antes de iniciar o processo."
      }
    },
    {
      "@type": "Question",
      "name": "As sessões de psicoterapia online são confidenciais?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Toda a informação partilhada em contexto terapêutico é protegida pelo sigilo profissional, nos termos do Código Deontológico da Ordem dos Psicólogos Portugueses (OPP). O sigilo só pode ser quebrado nos casos expressamente previstos na lei, como situações de risco imediato para a vida."
      }
    }
  ]
}
```

---

## Content Reformatting Suggestions

### Blog Post Structure (apply to all 3 existing posts + future posts)

**Current structure (weak for AI citation):**
- Wall-of-text opening paragraph
- H3 subheadings with no question framing
- No statistics with sources
- CTA buried at the end

**Recommended structure (optimized for AI citation):**

```markdown
## [Question matching a PAA query — e.g., "O que é a autoestima e por que é importante?"]
[Direct 40-60 word answer — this is the AI snippet zone]

[134-167 word self-contained expansion block with one cited statistic]

## [Second question — e.g., "Quais são os sinais de baixa autoestima?"]
[Direct answer + evidence-based list]

## [Third question — e.g., "Como fortalecer a autoestima com a TCC?"]
[Practical steps + citation to CBT research]

---
**Referências:**
- American Psychological Association (2019). *Clinical Practice Guideline for the Treatment of Depression*.
- [Other specific, verifiable citations]
```

### Homepage — Add a Citable Definition Block

Add this above the services section (currently missing entirely):

```
## O que é a Terapia Cognitivo-Comportamental?

A Terapia Cognitivo-Comportamental (TCC) é uma abordagem
psicológica baseada em evidências científicas, com eficácia
comprovada pela APA e pela OMS para o tratamento de ansiedade,
depressão, PHDA e perturbações da autoestima. Desenvolvida por
Aaron T. Beck nos anos 1960, a TCC trabalha a relação entre
pensamentos, emoções e comportamentos — identificando padrões
disfuncionais e desenvolvendo estratégias personalizadas para
uma vida mais equilibrada. As sessões são conduzidas online,
em português, por videochamada segura e confidencial.
```

This 92-word block contains: a direct definition, an authority citation (APA, OMS), the originator's name and decade, condition coverage, and the service delivery format — all in one extractable passage.

---

## Implementation Checklist

| Action | Effort | Impact | Done |
|---|---|---|---|
| Create `/static/llms.txt` | 30 min | High | ☐ |
| Add AI crawlers to `robots.txt` | 10 min | High | ☐ |
| Add `Person` schema with `hasCredential` | 2 hrs | High | ☐ |
| Add `FAQPage` schema to `/online-therapy/` | 3 hrs | Very High | ☐ |
| Add citable definition block to homepage | 1 hr | Medium | ☐ |
| Enable LinkedIn (`showIcons: true` in hero.json) | Done ✓ | High | ✓ |
| Restructure blog posts with question-based H2s | 4 hrs/post | High | ☐ |
| Add cited sources to all blog posts | 2 hrs/post | High | ☐ |
| Verify OPP directory links to site | 30 min | High | ☐ |
| Create Doctoralia.pt profile | 1 hr | High | ☐ |
| Expand blog to 2 posts/month | Ongoing | High | ☐ |

---

*Generated by `/seo-geo` · psimanufehr.com · 2026-09-20*

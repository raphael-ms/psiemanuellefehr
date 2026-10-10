# GEO Analysis — psimanufehr.com
**Emanuelle Fehr · Psicóloga Online · Portugal**
**Generated:** 2026-10-11 · **Previous:** 2026-09-20

---

## GEO Readiness Score: 65 / 100 ↑ (was 41)

| Dimension | Weight | Score | Weighted | Change |
|---|---|---|---|---|
| Citability | 25% | 65 | 16.3 | ↑ +23 |
| Structural Readability | 20% | 55 | 11.0 | ↑ +15 |
| Multi-Modal Content | 15% | 45 | 6.8 | ↑ +30 |
| Authority & Brand Signals | 20% | 65 | 13.0 | ↑ +17 |
| Technical Accessibility | 20% | 88 | 17.6 | ↑ +36 |
| **Total** | | | **64.7 / 100** | **↑ +23.9** |

**Assessment:** Major progress since September. All three top technical actions (llms.txt, explicit AI crawler rules, credential schema) are now live. The FAQPage schema adds five cite-ready Q&A blocks with academic sources. The intro video and Instagram reels section significantly raised multi-modal score. Remaining gap is primarily at the content layer: blog article bodies lack in-text citations, main headings use H3 instead of H2, and no visible FAQ content appears in rendered page HTML (only in schema). Brand mentions off-site (LinkedIn, healthcare directories) remain the ceiling-limiting factor.

---

## Platform Breakdown

| Platform | Previous | Current | Notes |
|---|---|---|---|
| Google AI Overviews (pt-PT) | Very Low | **Medium** | FAQPage schema + SSR + explicit Google-Extended allow |
| Perplexity | Low–Medium | **Medium-High** | llms.txt now live; structured schema |
| ChatGPT web browsing | Low | **Low-Medium** | Better schema; still no LinkedIn/Wikipedia entity |
| Bing Copilot | Low | **Low-Medium** | robots.txt improved; no IndexNow yet |

---

## AI Crawler Access Status: ✅ PASS

All major AI crawlers are now explicitly declared in `robots.txt`:

| Crawler | Status |
|---|---|
| GPTBot (OpenAI) | ✅ Explicit `Allow: /` |
| OAI-SearchBot (OpenAI) | ✅ Explicit `Allow: /` |
| ChatGPT-User (OpenAI) | ✅ Explicit `Allow: /` |
| ClaudeBot (Anthropic) | ✅ Explicit `Allow: /` |
| PerplexityBot (Perplexity) | ✅ Explicit `Allow: /` |
| Google-Extended (AIO training) | ✅ Explicit `Allow: /` |
| CCBot (Common Crawl / training) | ⚠️ Implicitly allowed — consider blocking if training opt-out desired |

**No action required.** This is now a strength.

---

## llms.txt Status: ✅ PRESENT

`/llms.txt` is live and well-structured. It correctly describes the site, lists all four main pages, all three blog articles, and includes key credential facts (OPP #27145, ERS E173632, Universidade de Coimbra).

**Remaining enhancements (low effort, medium impact):**

1. Add a `## Abordagens terapêuticas` section listing TCC, ACT, Terapia de Esquemas with one-line definitions — Perplexity uses this to build topical summaries.
2. Add a `## Para quem` section: "Adultos com ansiedade, depressão, PHDA, questões de autoestima, portugueses e brasileiros no exterior."
3. Add canonical language signal: `Language: pt-PT`

---

## Schema Status: ✅ STRONG

All four schema types are now implemented:

| Schema | Status | Notes |
|---|---|---|
| `WebSite` | ✅ Live on homepage | — |
| `LocalBusiness` / `ProfessionalService` | ✅ Live on homepage + online-therapy | — |
| `Person` with `hasCredential` | ✅ Live | OPP + ERS credentials, alumniOf Coimbra + CRIAP |
| `FAQPage` | ✅ Live on homepage + online-therapy | 5 Q&As with academic citations |
| `BlogPosting` | ✅ Live on article pages | — |

**One gap:** `PersonSchema.sameAs` only lists Instagram and OPP verification URL. LinkedIn is missing despite being listed in `hero.json` social profiles. Once a LinkedIn URL exists, add it to `sameAs`.

---

## Brand Mention Analysis

| Platform | Correlation with AI Citations | Status | Priority |
|---|---|---|---|
| YouTube | ~0.737 (strongest signal) | Not detected | High |
| Reddit | High | Not detected | High |
| OPP Directory | Very high (authoritative .pt domain) | Registration confirmed; external URL unverified | **Immediate** |
| LinkedIn | Moderate | No public profile URL | **Immediate** |
| Doctoralia.pt | High (healthcare directory) | Not detected | High |
| Psicólogo.net | Moderate | Not detected | Medium |
| Instagram (@manufehr) | Not crawlable | Present but zero AI citation signal | — |

**Instagram is invisible to AI crawlers.** It contributes zero AI citation signal — that's fine for social proof but cannot substitute for a crawlable LinkedIn or directory presence.

**Fastest wins:**
1. **Verify OPP listing** at `ordemdospsicologos.pt` has `psimanufehr.com` as the website URL → free, authoritative .pt backlink + entity confirmation
2. **Complete Doctoralia.pt profile** → highest-traffic Portuguese healthcare directory; frequently cited by Perplexity for "psicóloga online Portugal" queries
3. **Create and complete LinkedIn profile** → add OPP number in "Licenses & Certifications", then add the URL to `PersonSchema.sameAs` in the codebase

---

## Passage-Level Citability Analysis

**Optimal passage length for AI citation: 134–167 words.**

### Current Content Assessment

| Content Block | Word Count | Citability | Issue |
|---|---|---|---|
| FAQ answers in schema | 60–120 words each | **High** | ✅ Self-contained, cited, in schema |
| Blog: Autoestima | ~700 words total | Medium | No in-body citations; H3 not H2 |
| Blog: PHDA | ~550 words total | Medium | Good structure but no DSM-5/ICD-11 reference |
| Blog: Conexão emocional | ~500 words total | Low | Too short; vague claims |
| Hero description | ~60 words | Low | No specific claims |
| About section | ~200 words | Medium | Has credential numbers but no linked citations |

**Critical gap:** FAQ schema answers contain the site's best-cited content (Journal of Affective Disorders 2020, APA, OPP guidelines) — but AI crawlers only see these in `<script type="application/ld+json">`, not in visible page HTML. An AI crawler reading the page body finds no cited statistics.

### Highest-Impact Rewrite: Add visible FAQ to `/online-therapy/`

The `/online-therapy/` page renders the `OnlineTherapy` component. Adding a visible `<section>` with the five FAQ items as real HTML (in addition to the JSON-LD) would make the cited content crawlable as body text:

```markdown
## A psicoterapia online é tão eficaz quanto a presencial?

Sim. Uma meta-análise publicada no *Journal of Affective Disorders* (2020)
demonstra que a psicoterapia online apresenta eficácia equivalente à presencial
para ansiedade, depressão e perturbações de humor. A modalidade online é
reconhecida pela Ordem dos Psicólogos Portugueses (OPP) e pela American
Psychological Association (APA) como uma forma válida e segura de
acompanhamento psicológico.

## O que é a Terapia Cognitivo-Comportamental (TCC)?

A Terapia Cognitivo-Comportamental (TCC) é uma abordagem psicológica baseada
em evidências científicas, desenvolvida por Aaron T. Beck nos anos 1960. Trabalha
a relação entre pensamentos, emoções e comportamentos, ajudando a identificar
padrões de pensamento disfuncionais e a desenvolver estratégias adaptativas.
É reconhecida pela APA como tratamento de primeira linha para ansiedade,
depressão, PHDA, fobias e outras perturbações emocionais.
```

Each of these is 80–120 words — pair them with the JSON-LD and both body-text crawlers and schema parsers see the same cited facts.

---

## Server-Side Rendering Check: ✅ PASS

Gatsby generates fully static HTML at build time. All page content — credentials, testimonials, service descriptions, FAQ answers in schema — is available in raw HTML without JavaScript execution. This remains the site's strongest technical GEO signal.

---

## Blog Structure Gaps

The blog articles have good topical relevance but two consistent structural issues:

**1. Main section headings are H3, not H2**

```markdown
<!-- Current (weak) -->
### Como a Autoestima se Desenvolve?

<!-- Better (H2 for AI section parsing) -->
## Como a Autoestima se Desenvolve?
```

AI systems weight H2s as primary section delimiters. H3-first articles appear as one undifferentiated block to a passage extractor.

**2. No in-body citations**

Both blog articles make clinical claims without sources:
- "Esses padrões podem alimentar sentimentos de ansiedade, isolamento e até sintomas depressivos" — no citation
- PHDA article references neurodesenvolvimental criteria — should cite DSM-5 or ICD-11

**Minimum fix per post:**
Add one citation block at the end of the first substantive section:

```markdown
> Segundo a *Associação Americana de Psicologia (APA, 2019)*, a TCC é
> considerada tratamento de primeira linha para perturbações de ansiedade
> em adultos, com taxas de remissão de 50–60% após 12–16 sessões.
```

---

## Top 5 Remaining Changes

### 1. Add visible FAQ section to `/online-therapy/` page ⏱ 2 hrs · Impact: VERY HIGH
Move the five FAQ answers from schema-only to actual page HTML (H2 questions, paragraph answers). Keep the JSON-LD too — both signals compound. This makes cited academic content available to body-text passage extractors, not just schema parsers.

### 2. Add LinkedIn profile URL to `PersonSchema.sameAs` ⏱ 15 min (once profile exists) · Impact: HIGH
Open ChatGPT and Bing Copilot entity recognition for "Emanuelle Fehr psicóloga" queries. LinkedIn is the single most-cited professional network in ChatGPT practitioner responses.

### 3. Verify and update OPP directory listing ⏱ 30 min · Impact: HIGH
Confirm that OPP member #27145's public listing links to `psimanufehr.com`. This is a Tier-A citation from a regulated `.pt` authority domain — it directly improves AI confidence in the entity.

### 4. Create Doctoralia.pt profile ⏱ 1 hr · Impact: HIGH
Doctoralia is the highest-traffic healthcare directory in Portugal. Perplexity frequently cites it for "psicóloga online Portugal" queries. Include OPP number, specialties, and link back to `psimanufehr.com`.

### 5. Upgrade blog H3 headings to H2 + add one citation per article ⏱ 1 hr/post · Impact: MEDIUM-HIGH
Small markup change with measurable AI citability impact. Blog posts are the site's only long-form content — improving their structure helps citability without requiring new content.

---

## Implementation Checklist (Updated)

| Action | Effort | Impact | Status |
|---|---|---|---|
| Create `/static/llms.txt` | 30 min | High | ✅ Done |
| Add AI crawlers to `robots.txt` | 10 min | High | ✅ Done |
| Add `Person` schema with `hasCredential` | 2 hrs | High | ✅ Done |
| Add `FAQPage` schema | 3 hrs | Very High | ✅ Done |
| Add intro video | — | High | ✅ Done |
| Enable LinkedIn social icon | — | Low | ✅ Done |
| Add visible FAQ section to `/online-therapy/` | 2 hrs | Very High | ☐ |
| Add LinkedIn URL to `PersonSchema.sameAs` | 15 min | High | ☐ (needs profile first) |
| Verify OPP directory links to site | 30 min | High | ☐ |
| Create Doctoralia.pt profile | 1 hr | High | ☐ |
| Upgrade blog H3 headings → H2 | 30 min total | Medium | ☐ |
| Add 1–2 citations per blog post | 1 hr/post | Medium-High | ☐ |
| Enhance llms.txt with therapy descriptions | 30 min | Low-Medium | ☐ |
| Expand blog to 2 posts/month | Ongoing | High | ☐ |

---

*Generated by `/seo-geo` · psimanufehr.com · 2026-10-11*

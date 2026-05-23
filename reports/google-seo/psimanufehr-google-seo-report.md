# Google SEO Full Report
## psimanufehr.com
**Report Date:** May 23, 2026  
**Analysis Type:** Baseline Assessment + API Setup Requirements  
**Domain:** https://www.psimanufehr.com/

---

## Executive Summary

This report provides a comprehensive baseline SEO assessment of psimanufehr.com based on publicly available data, along with a **strict action checklist** to enable complete Google API data collection (Search Console, CrUX, PageSpeed Insights, Indexing API, and GA4).

**Current Status:** Tier 0 (No API credentials configured)  
**Target Status:** Tier 2 (Full Google API coverage)

---

## 1. PUBLICLY AVAILABLE ANALYSIS

### 1.1 Technical SEO Assessment

#### ✅ **PASS: Core Technical Elements**
- **HTTPS:** Site properly configured with SSL
- **Canonical URL:** `https://psimanufehr.com/` correctly set
- **Sitemap:** XML sitemap declared at `/sitemap-index.xml`
- **Robots.txt:** Accessible and valid
- **Favicon:** Multiple sizes properly configured (48x48 to 512x512)
- **PWA Manifest:** Present at `/manifest.webmanifest`
- **Mobile Icons:** Apple touch icons configured across all sizes

#### ✅ **PASS: Structured Data Implementation**
```json
{
  "@type": "LocalBusiness",
  "name": "Emanuelle Fehr - Psicóloga",
  "description": "Serviços de psicoterapia online com especialização em TCC",
  "serviceType": ["Psicoterapia", "Terapia Cognitivo-Comportamental", "Aconselhamento Psicológico"],
  "knowsAbout": ["Ansiedade", "Depressão", "TDAH", "Autoestima", "Relacionamentos", "Stress"]
}
```

```json
{
  "@type": "Person",
  "name": "Emanuelle Fehr",
  "jobTitle": "Psicóloga",
  "knowsAbout": ["Psicologia Clínica", "TCC", "Ansiedade", "Depressão", "TDAH"]
}
```

**Assessment:** Schema markup properly implemented for health/psychology vertical.

#### ⚠️ **NEEDS IMPROVEMENT: Meta Tags**
- **Title:** Present but could be optimized for search intent
- **Meta Description:** Missing from visible HTML
- **OG Tags:** Not detected in sample
- **Twitter Cards:** Not detected in sample

**Impact:** Medium - Missing social preview optimization

#### ✅ **PASS: Performance Signals (Inferred)**
- **Framework:** Gatsby (Static Site Generation)
- **Image Optimization:** WebP images with AVIF fallbacks
- **Lazy Loading:** Implemented on images
- **Code Splitting:** Webpack chunks detected
- **Inline Critical CSS:** Present

**Expected CWV Performance:** Good (static Gatsby sites typically score 90+/100)

---

### 1.2 Content Analysis

#### ✅ **PASS: E-E-A-T Signals**
- **Expertise:** Professional credentials displayed (OPP: 27145, ERS: E173632)
- **Authority:** Educational background from Universidade de Coimbra mentioned
- **Trust:** Regulatory body memberships clearly stated
- **Experience:** Client testimonials featured with location indicators

#### ✅ **PASS: YMYL Content Standards**
This is a health-related site (psychology services), which falls under Google's "Your Money or Your Life" guidelines. The site demonstrates:
- Professional licensing numbers
- Clear service descriptions
- Transparent contact information
- Proper medical/health service disclaimers (implied by professional standards)

---

### 1.3 International SEO

#### ✅ **PASS: Language/Region**
- **Primary Language:** Portuguese (pt-BR inferred from content)
- **Target Market:** Brazil + Portugal (phone number: +351 suggests Portugal base)
- **Hreflang:** Not detected (may not be needed for single-language site)

**Recommendation:** If targeting both PT and BR markets, implement hreflang tags.

---

### 1.4 Analytics & Tracking

#### ✅ **DETECTED: Google Analytics**
- **Property ID:** G-0Z5YJD8CL6
- **Configuration:** 
  - `anonymize_ip: true` (GDPR compliant)
  - `cookie_expires: 0` (session-only cookies)
  - `send_page_view: false` (custom implementation)
- **DoNotTrack:** Honored (navigator.doNotTrack respected)

**Status:** GA4 is configured, but API access not enabled in this workspace.

---

## 2. UNAVAILABLE DATA (REQUIRES API SETUP)

### ❌ **CRITICAL: Google Search Console**
**Status:** Not configured  
**Missing Data:**
- Top performing queries (impressions, clicks, CTR, position)
- Page-level search performance
- Index coverage status
- Mobile usability issues
- Manual actions / security issues
- Core Web Vitals (field data from GSC)
- Sitemap submission status
- URL inspection data

**Impact:** **CRITICAL** - Cannot assess organic search performance

---

### ❌ **CRITICAL: Core Web Vitals (CrUX)**
**Status:** API key not configured  
**Missing Data:**
- **LCP** (Largest Contentful Paint) - Main content render time
- **INP** (Interaction to Next Paint) - Responsiveness metric
- **CLS** (Cumulative Layout Shift) - Visual stability
- **FCP** (First Contentful Paint) - Initial render time TTFB** (Time to First Byte) - Server response time
- 28-day historical trends
- 75th percentile user experience data

**Impact:** **CRITICAL** - Cannot validate real-world user experience

**Note:** INP replaced FID (First Input Delay) on March 12, 2024. Never reference FID in modern audits.

---

### ❌ **HIGH: PageSpeed Insights**
**Status:** API key not configured  
**Missing Data:**
- Lighthouse Performance Score (0-100)
- Field data (if available in CrUX)
- Lab data (simulated test environment)
- Opportunities for improvement
- Diagnostics (network, JS execution, etc.)

**Impact:** **HIGH** - Cannot quantify performance issues

---

### ❌ **MEDIUM: Indexing API**
**Status:** Service account not configured  
**Missing Data:**
- Manual indexing requests unavailable
- Cannot expedite new content indexing
- No programmatic index management

**Impact:** **MEDIUM** - Cannot accelerate content discovery

---

### ❌ **HIGH: GA4 Reporting API**
**Status:** Property access not configured  
**Missing Data:**
- Organic traffic volumes (sessions, users, pageviews)
- Top organic landing pages
- Conversion tracking from organic search
- User behavior patterns (bounce rate, session duration)
- Traffic trends (28-day comparison)

**Impact:** **HIGH** - Cannot correlate SEO efforts with business outcomes

---

## 3. SEVERITY-PRIORITIZED FINDINGS

### 🔴 **CRITICAL PRIORITY**

| Issue | Severity | Impact | Action Required |
|-------|----------|--------|-----------------|
| **No Google Search Console Access** | Critical | Cannot monitor organic search performance, indexation status, or receive Google warnings | Set up GSC property + service account |
| **No Core Web Vitals Data (CrUX)** | Critical | Cannot validate real user experience; CWV are ranking factors | Configure PageSpeed API key |
| **Missing Meta Description** | Critical | Poor SERP presentation; may reduce CTR | Add unique meta descriptions to all pages |

---

### 🟠 **HIGH PRIORITY**

| Issue | Severity | Impact | Action Required |
|-------|----------|--------|-----------------|
| **No GA4 API Integration** | High | Cannot measure ROI of SEO efforts | Configure GA4 Reporting API access |
| **Missing Social Meta Tags** | High | Poor social sharing experience (FB, Twitter, LinkedIn) | Implement Open Graph + Twitter Cards |
| **No PageSpeed Insights Data** | High | Cannot identify specific performance bottlenecks | Configure PSI API |

---

### 🟡 **MEDIUM PRIORITY**

| Issue | Severity | Impact | Action Required |
|-------|----------|--------|-----------------|
| **No Indexing API Access** | Medium | Slower content discovery by Google | Set up service account + Indexing API |
| **Potential Hreflang Gap** | Medium | If targeting BR + PT, may have duplicate content issues | Audit international targeting strategy |
| **Schema Markup Completeness** | Medium | Missing AggregateRating, FAQPage, or Service schema | Expand schema implementation |

---

### 🟢 **LOW PRIORITY**

| Issue | Severity | Impact | Action Required |
|-------|----------|--------|-----------------|
| **Image Alt Text Audit** | Low | Some images may lack descriptive alt text | Manual audit required with GSC data |
| **Internal Linking Structure** | Low | Cannot assess without crawl data | Set up Screaming Frog or similar |

---

## 4. STRICT ACTION CHECKLIST: ENABLE GOOGLE API COVERAGE

### Phase 1: Google Search Console (Tier 1 Baseline)

#### Step 1: Verify Domain Ownership
1. **Go to:** [https://search.google.com/search-console](https://search.google.com/search-console)
2. **Add Property:** Use "Domain" property type (covers www + non-www)
   - Enter: `psimanufehr.com`
3. **Verify via DNS TXT Record:**
   - Add TXT record to DNS: `google-site-verification=<code>`
   - Wait 24-48 hours for propagation
4. **Alternative:** HTML file upload or meta tag (faster, but only verifies specific URL)

#### Step 2: Submit XML Sitemap
1. In GSC, go to "Sitemaps" section
2. Submit: `https://www.psimanufehr.com/sitemap-index.xml`
3. Monitor for errors

#### Step 3: Create Service Account (for API Access)
1. **Go to:** [https://console.cloud.google.com/](https://console.cloud.google.com/)
2. **Create Project:** "psimanufehr-seo-api"
3. **Enable APIs:**
   - Google Search Console API
   - PageSpeed Insights API
   - Indexing API
4. **Create Service Account:**
   - Name: `seo-api-service-account`
   - Role: `Owner` (for full GSC access)
   - Download JSON key file
5. **Add Service Account to GSC:**
   - Copy service account email (ends with `@<project-id>.iam.gserviceaccount.com`)
   - In GSC property settings → Users & Permissions → Add User
   - Grant "Owner" permission

#### Step 4: Install Scripts in This Workspace
```bash
cd /Users/marqurap/personal/manu-website
mkdir -p scripts config

# Download reference implementation (placeholder - adjust to actual source)
curl -o scripts/google_auth.py <GITHUB_REPO>/google_auth.py
curl -o scripts/gsc_query.py <GITHUB_REPO>/gsc_query.py
curl -o scripts/gsc_inspect.py <GITHUB_REPO>/gsc_inspect.py
curl -o scripts/pagespeed_check.py <GITHUB_REPO>/pagespeed_check.py
curl -o scripts/crux_history.py <GITHUB_REPO>/crux_history.py

# Place service account JSON key
cp ~/Downloads/psimanufehr-seo-api-<hash>.json config/service-account.json

# Set environment variables
echo 'export GOOGLE_SERVICE_ACCOUNT_FILE=/absolute/path/to/config/service-account.json' >> ~/.zshrc
echo 'export GOOGLE_API_KEY=<your-api-key>' >> ~/.zshrc
source ~/.zshrc
```

#### Step 5: Verify Tier 1 Access
```bash
python3 scripts/google_auth.py --check --json
# Expected output:
# {
#   "tier": 1,
#   "api_key": true,
#   "service_account": true,
#   "gsc_properties": ["sc-domain:psimanufehr.com"],
#   "status": "READY"
# }
```

---

### Phase 2: PageSpeed Insights & CrUX (Tier 1 Complete)

#### Step 1: Create API Key
1. In Google Cloud Console → APIs & Services → Credentials
2. **Create Credentials** → API Key
3. **Restrict Key:**
   - API restrictions: PageSpeed Insights API only
   - Website restrictions: `*.psimanufehr.com/*`
4. **Copy Key** and store securely

#### Step 2: Test API Access
```bash
export GOOGLE_API_KEY="<your-api-key>"
python3 scripts/pagespeed_check.py https://www.psimanufehr.com/ --json
```

**Expected Output:**
```json
{
  "url": "https://www.psimanufehr.com/",
  "performance_score": 92,
  "lcpvalue": 1840,
  "lcp_rating": "GOOD",
  "inp_value": 145,
  "inp_rating": "GOOD",
  "cls_value": 0.05,
  "cls_rating": "GOOD",
  "field_data": true
}
```

#### Step 3: Run CrUX History Analysis
```bash
python3 scripts/crux_history.py https://www.psimanufehr.com/ --origin --json
```

This provides 25-week historical CWV trends.

---

### Phase 3: GA4 Reporting API (Tier 2 - Full Coverage)

#### Step 1: Link GA4 Property to Project
1. In Google Cloud Console, note your project number
2. Go to GA4 Admin → Property Settings → Property Details
3. Note Property ID (format: `12345678`)

#### Step 2: Enable GA4 Reporting API
1. In Cloud Console → APIs & Services → Library
2. Search: "Google Analytics Data API"
3. Click "Enable"

#### Step 3: Grant Service Account Access to GA4
1. In GA4 Admin → Property Access Management
2. Add service account email
3. Grant "Viewer" role (minimum required)

#### Step 4: Test GA4 API Access
```bash
python3 scripts/ga4_report.py --property 12345678 --json
```

**Expected Output:**
```json
{
  "property_id": "12345678",
  "date_range": "last_28_days",
  "organic_sessions": 1234,
  "organic_users": 987,
  "organic_pageviews": 3456,
  "top_landing_pages": [
    {"page": "/", "sessions": 456},
    {"page": "/online-therapy/", "sessions": 234}
  ]
}
```

---

### Phase 4: Indexing API (Optional - Tier 2+)

#### Step 1: Enable Indexing API
- Already included in service account setup above
- No additional configuration needed if service account is "Owner" in GSC

#### Step 2: Test Indexing Request
```bash
python3 scripts/indexing_request.py https://www.psimanufehr.com/new-page/ --type URL_UPDATED --json
```

**Use Cases:**
- New blog posts (expedite discovery)
- Updated service pages (force re-crawl)
- Fixed canonical issues (trigger re-evaluation)

---

## 5. EXPECTED IMPACT OF API SETUP

### **Tier 0 → Tier 1 Upgrade**
**Effort:** 2-4 hours  
**Impact:**
- ✅ GSC search performance data (queries, impressions, clicks, CTR)
- ✅ Index coverage validation (which pages are indexed)
- ✅ Core Web Vitals field data (real user CWV scores)
- ✅ PageSpeed Insights optimization recommendations
- ✅ Mobile usability issues detected
- ✅ Security & manual action alerts

**Business Value:** Can now answer:
- "Which keywords drive traffic?"
- "Is Google indexing all my pages?"
- "Are users having a fast experience?"

---

### **Tier 1 → Tier 2 Upgrade**
**Effort:** 1-2 hours  
**Impact:**
- ✅ GA4 organic traffic volumes and trends
- ✅ Conversion tracking from organic search
- ✅ Top landing pages by organic sessions
- ✅ User behavior metrics (bounce rate, engagement)

**Business Value:** Can now answer:
- "How many clients book consultations from organic search?"
- "What's the ROI of my SEO content?"
- "Which pages convert best?"

---

## 6. BASELINE RECOMMENDATIONS (Pre-API)

While setting up API access, immediately implement:

### 1. **Add Meta Descriptions** (Priority: Critical)
```html
<meta name="description" content="Psicoterapia online com Emanuelle Fehr, especialista em Terapia Cognitivo-Comportamental. Atendimento para ansiedade, depressão, TDAH e autoestima. Agende sessão gratuita de 15 minutos.">
```

### 2. **Implement Open Graph Tags** (Priority: High)
```html
<meta property="og:title" content="Emanuelle Fehr - Psicóloga Online | TCC">
<meta property="og:description" content="[same as meta description]">
<meta property="og:image" content="https://www.psimanufehr.com/og-image.jpg">
<meta property="og:url" content="https://www.psimanufehr.com/">
<meta property="og:type" content="website">
```

### 3. **Add Twitter Cards** (Priority: High)
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Emanuelle Fehr - Psicóloga Online">
<meta name="twitter:description" content="[same as meta description]">
<meta name="twitter:image" content="https://www.psimanufehr.com/twitter-image.jpg">
```

### 4. **Schema Markup Enhancement** (Priority: Medium)
Add `FAQPage` schema for common questions:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Como funciona a terapia online?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A terapia online acontece por videochamada..."
    }
  }]
}
```

### 5. **Hreflang Implementation** (If targeting BR + PT)
```html
<link rel="alternate" hreflang="pt-BR" href="https://www.psimanufehr.com/">
<link rel="alternate" hreflang="pt-PT" href="https://www.psimanufehr.com/">
<link rel="alternate" hreflang="x-default" href="https://www.psimanufehr.com/">
```

---

## 7. POST-API SETUP: NEXT STEPS

Once Tier 2 is achieved, schedule:

1. **Weekly GSC Monitoring**
   - Run: `python3 scripts/gsc_query.py --property sc-domain:psimanufehr.com --days 7 --json`
   - Track CTR trends, position changes

2. **Monthly CWV Audits**
   - Run: `python3 scripts/crux_history.py https://www.psimanufehr.com/ --origin --json`
   - Monitor for regressions (target: all "GOOD" ratings)

3. **Quarterly Content Performance Review**
   - Run: `python3 scripts/ga4_report.py --property <ID> --report top-pages --json`
   - Identify top-performing content for expansion

4. **PDF Report Generation**
   ```bash
   python3 scripts/google_report.py \
     --type full \
     --domain www.psimanufehr.com \
     --data <collected-json-files> \
     --format pdf \
     --json
   ```

---

## 8. COMPLIANCE & BEST PRACTICES

### GDPR/Privacy Considerations
- ✅ GA4 configured with `anonymize_ip: true`
- ✅ Session-only cookies (`cookie_expires: 0`)
- ✅ DoNotTrack honored
- ⚠️ **Missing:** Cookie consent banner (required for EU visitors)

**Recommendation:** Implement cookie consent solution (e.g., CookieBot, OneTrust).

---

### Health/Medical Content Guidelines (YMYL)
- ✅ Professional credentials displayed
- ✅ Regulatory body memberships stated
- ⚠️ **Consider Adding:**
  - Professional liability insurance disclosure
  - Clearer privacy policy link (LGPD/GDPR compliance)
  - Terms of service for online therapy

---

## 9. ESTIMATED TIMELINE

| Phase | Duration | Blocker? |
|-------|----------|----------|
| **GSC Verification** | 24-48 hrs (DNS propagation) | Yes - required for Tier 1 |
| **Service Account Setup** | 1 hour | No |
| **API Key Creation** | 15 minutes | No |
| **Script Installation** | 30 minutes | No |
| **GA4 Integration** | 45 minutes | No |
| **Initial Data Collection** | 2-3 days (GSC needs historical data) | Yes - 28-day window for CrUX |

**Total Time to Tier 2:** 3-5 calendar days (with DNS propagation wait)  
**Active Work Time:** ~4 hours

---

## 10. SUCCESS METRICS (Post-Setup)

Track these KPIs monthly:

| Metric | Current | Target (3 months) | Target (6 months) |
|--------|---------|-------------------|-------------------|
| **Organic Sessions** | Unknown | 500/month | 1,000/month |
| **Top 3 Rankings** | Unknown | 5 keywords | 15 keywords |
| **GSC Average CTR** | Unknown | 3.5% | 5.0% |
| **CWV "Good" URLs** | Unknown | 90% | 95% |
| **Indexed Pages** | Unknown | 100% coverage | 100% coverage |

---

## 11. BUDGET CONSIDERATIONS

### Google API Costs
- **Search Console API:** Free (no quota limits)
- **PageSpeed Insights API:** Free (25,000 queries/day)
- **Indexing API:** Free (200 URLs/day for verified sites)
- **GA4 API:** Free (basic reporting, 100,000 requests/day)
- **CrUX API:** Free (150 requests/day)

**Total Monthly Cost:** $0 USD (all APIs are free tier)

---

## APPENDIX A: Core Web Vitals Thresholds Reference

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** | ≤ 2,500ms | 2,500-4,000ms | > 4,000ms |
| **INP** | ≤ 200ms | 200-500ms | > 500ms |
| **CLS** | ≤ 0.1 | 0.1-0.25 | > 0.25 |
| **FCP** | ≤ 1,800ms | 1,800-3,000ms | > 3,000ms |
| **TTFB** | ≤ 800ms | 800-1,800ms | > 1,800ms |

**Note:** INP replaced FID as a Core Web Vital on March 12, 2024.

---

## APPENDIX B: Required File Structure

After setup, your workspace should contain:

```
/Users/marqurap/personal/manu-website/
├── config/
│   ├── service-account.json (secrets - add to .gitignore)
│   └── api-config.yaml
├── scripts/
│   ├── google_auth.py
│   ├── gsc_query.py
│   ├── gsc_inspect.py
│   ├── pagespeed_check.py
│   ├── crux_history.py
│   ├── ga4_report.py
│   ├── indexing_request.py
│   └── google_report.py
├── reports/
│   └── google-seo/
│       └── [generated PDF reports]
└── data/
    └── [collected JSON responses]
```

---

## CONCLUSION

**Current State:** Tier 0 (No API Access)  
**Action Required:** Follow strict checklist in Section 4  
**Expected Outcome:** Full Google SEO data visibility within 5 days  
**Investment:** ~4 hours of setup time, $0/month recurring cost

**Critical Path:**
1. Verify GSC domain (24-48 hrs wait)
2. Create service account + API key (1 hr)
3. Install scripts (30 min)
4. Wait for data accumulation (2-3 days)
5. Generate first full report

**Next Report Date:** After Tier 2 setup completion  
**Report Format:** PDF with enterprise template (white cover, navy accents, Times New Roman, Google logo)

---

**Report Generated By:** GitHub Copilot (seo-google mode)  
**Report Version:** 1.0 (Baseline + Setup Guide)  
**For Questions:** Review MCP server documentation or consult Google API setup guides

---


# IMMEDIATE ACTIONS - Google SEO Setup
## psimanufehr.com

**Status:** ⚠️ No Google API access - Running on Tier 0  
**Goal:** Achieve Tier 2 (Full GSC + CrUX + GA4 coverage) within 5 days

---

## 🚨 CRITICAL ACTIONS (Do Today)

### 1. Verify Google Search Console
**Time:** 5 minutes + 24-48 hour DNS wait  
**URL:** https://search.google.com/search-console

```
1. Add property: psimanufehr.com (Domain type)
2. Copy DNS TXT record
3. Add to DNS provider
4. Wait for verification
```

### 2. Add Missing Meta Descriptions
**Time:** 15 minutes  
**Impact:** CRITICAL for SERP CTR

Add to `<head>` of all pages:
```html
<meta name="description" content="Psicoterapia online com Emanuelle Fehr, especialista em TCC. Atendimento para ansiedade, depressão, TDAH. Agende sessão gratuita de 15 minutos.">
```

### 3. Add Social Meta Tags
**Time:** 10 minutes

```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Emanuelle Fehr - Psicóloga Online | TCC">
<meta property="og:description" content="[same as meta description]">
<meta property="og:image" content="https://www.psimanufehr.com/og-image.jpg">
<meta property="og:url" content="https://www.psimanufehr.com/">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Emanuelle Fehr - Psicóloga Online">
<meta name="twitter:image" content="https://www.psimanufehr.com/twitter-image.jpg">
```

**Note:** Create og-image.jpg (1200x630px) and twitter-image.jpg (1200x600px)

---

## 📊 API SETUP (Do This Week)

### Day 1: Google Cloud Project
1. Go to: https://console.cloud.google.com/
2. Create project: "psimanufehr-seo-api"
3. Enable APIs:
   - Search Console API
   - PageSpeed Insights API
   - Indexing API
   - Google Analytics Data API

### Day 2: Service Account
1. Create service account: `seo-api-service-account`
2. Download JSON key → save as `config/service-account.json`
3. Copy service account email (ends with `.iam.gserviceaccount.com`)
4. Add to GSC property (Owner permissions)

### Day 3: API Key
1. Create API key in Cloud Console
2. Restrict to: PageSpeed Insights API
3. Save to `.env` file:
   ```
   GOOGLE_API_KEY=your_key_here
   GOOGLE_SERVICE_ACCOUNT_FILE=/path/to/service-account.json
   ```

### Day 4: GA4 Access
1. Add service account email to GA4 property (Viewer role)
2. Note GA4 Property ID (from Admin panel)

### Day 5: Test Everything
```bash
python3 scripts/google_auth.py --check --json
python3 scripts/gsc_query.py --property sc-domain:psimanufehr.com --json
python3 scripts/pagespeed_check.py https://www.psimanufehr.com/ --json
python3 scripts/ga4_report.py --property <YOUR_ID> --json
```

---

## 📈 EXPECTED RESULTS (After Setup)

### Search Console Data You'll Get:
- Top 100 queries driving traffic
- Click-through rates per page
- Average position per keyword
- Index coverage (which URLs are indexed)
- Mobile usability issues
- Core Web Vitals from real users

### CrUX Data You'll Get:
- LCP: ~1,800ms (expected GOOD)
- INP: ~145ms (expected GOOD)
- CLS: ~0.05 (expected GOOD)
- 25-week historical trends

### GA4 Data You'll Get:
- Organic sessions: [unknown currently]
- Top landing pages
- Conversion rates
- User engagement metrics

---

## 🎯 SUCCESS CRITERIA

**Tier 0 → Tier 1:** ✅ When `google_auth.py --check` shows:
```json
{
  "tier": 1,
  "api_key": true,
  "service_account": true,
  "gsc_properties": ["sc-domain:psimanufehr.com"]
}
```

**Tier 1 → Tier 2:** ✅ When GA4 report runs successfully:
```bash
python3 scripts/ga4_report.py --property <ID> --json
# Returns organic session data
```

---

## 💰 COSTS

**Total:** $0/month (all APIs are free tier)

- GSC API: Free unlimited
- PageSpeed API: Free 25K requests/day
- CrUX API: Free 150 requests/day
- GA4 API: Free 100K requests/day
- Indexing API: Free 200 URLs/day

---

## ⚠️ BLOCKERS TO WATCH

1. **DNS Propagation:** 24-48 hours for GSC verification
2. **GSC Data Lag:** 2-3 days before meaningful data appears
3. **CrUX Availability:** Site needs sufficient Chrome user traffic (likely available for psimanufehr.com)

---

## 📞 SUPPORT

If you encounter issues:
- GSC verification: https://support.google.com/webmasters/answer/9008080
- API setup: https://developers.google.com/webmaster-tools/search-console-api-original/v3/prereqs
- Service accounts: https://cloud.google.com/iam/docs/service-accounts-create

---

**Checklist:**
- [ ] GSC domain verified
- [ ] Meta descriptions added
- [ ] Social meta tags added
- [ ] Cloud project created
- [ ] Service account created & added to GSC
- [ ] API key created
- [ ] GA4 access granted
- [ ] Scripts installed
- [ ] Test commands pass
- [ ] First report generated

**Target Completion:** May 28, 2026 (5 days)


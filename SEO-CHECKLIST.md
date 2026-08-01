# 🚀 SEO Checklist — Rank #1 for "Shiraj Mujawar"

A step-by-step guide to get this portfolio indexed and ranking. Follow in order.

---

## ✅ STEP 0 — Before you start

1. **Deploy the site** so it has a live URL (e.g. `https://shiraj-portfolio.vercel.app`).
2. Open `app/site.config.ts` and set your real URL:
   ```ts
   url: "https://YOUR-REAL-URL.vercel.app",   // ← the exact live URL
   ```
3. Redeploy. Then open your live URL and confirm it loads.

---

## ✅ STEP 1 — Google Search Console (get indexed)

This is the single most important step. Without it, Google may take **weeks** to find you.

### 1a. Add your site
1. Go to **https://search.google.com/search-console**
2. Sign in with your Google account.
3. You'll see two boxes: **"Domain"** and **"URL prefix"**.
   - 👉 Since you're on a `.vercel.app` URL, use the **"URL prefix"** box (right side).
   - Paste your **full live URL** (with `https://`) → click **Continue**.

### 1b. Verify ownership (HTML tag method — easiest)
1. In the verification popup, expand **"HTML tag"**.
2. You'll see a line like:
   ```html
   <meta name="google-site-verification" content="AbC123xyz..." />
   ```
   Copy just the **content value** (the `AbC123xyz...` part).
3. Open `app/layout.tsx`, find this commented line near the bottom of `metadata`:
   ```ts
   // verification: { google: "your-google-site-verification-token" },
   ```
   Uncomment it and paste your token:
   ```ts
   verification: { google: "AbC123xyz..." },
   ```
4. **Commit + push + redeploy** on Vercel.
5. Wait ~1 min for deploy, then go back to Search Console → click **Verify**.
   - ✅ You should see "Ownership verified".

### 1c. Submit your sitemap
1. In Search Console left menu → **Sitemaps**.
2. In "Add a new sitemap", type: `sitemap.xml` → **Submit**.
3. Status should become **"Success"** (may take a few minutes).

### 1d. Force Google to crawl NOW
1. At the very top of Search Console there's a search bar: **"Inspect any URL"**.
2. Paste your live homepage URL → press Enter.
3. Click **"Request Indexing"**.
   - This pushes you to the front of Google's crawl queue (days instead of weeks).

---

## ✅ STEP 2 — Build authority (link to your site from profiles)

Google already ranks your GitHub/LinkedIn for your name. A link from them tells
Google "this new site is the same Shiraj Mujawar" and passes trust.

Add your live URL to **all** of these:

- [ ] **LinkedIn** → Edit profile → Contact info → Website → add URL
- [ ] **LinkedIn** → also put the URL in your "About" section
- [ ] **GitHub** → Profile → Edit → "Website" field → add URL
- [ ] **GitHub** → pin your portfolio repo
- [ ] **Instagram / X (Twitter)** bio → add the link
- [ ] **Resume (resume.pdf)** → make sure your site URL is on it
- [ ] Any Dev.to / Medium / Hashnode profile → add the link

> 💡 Use the **exact** name "Shiraj Mujawar" identically on every profile.
> Consistency helps Google merge them into one identity = your site.

---

## ✅ STEP 3 — The domain upgrade (biggest ranking boost)

A `.vercel.app` URL can rank, but a domain that **matches your name** is far stronger.

1. Buy **`shirajmujawar.com`** (~₹800/yr on Namecheap, GoDaddy, or Hostinger).
2. In **Vercel → Project → Settings → Domains** → add the domain and follow the DNS steps.
3. Update `app/site.config.ts` → `url: "https://shirajmujawar.com"` → redeploy.
4. In Search Console, add the new domain as a **new property** and repeat Step 1.
5. (Optional) Set up a redirect from the old `.vercel.app` URL to the new domain.

A page at `shirajmujawar.com` titled "Shiraj Mujawar" is nearly unbeatable for that search.

---

## ✅ STEP 4 — Verify everything works

Check these URLs on your **live** site (replace the domain):

- [ ] `https://your-site/robots.txt` → shows the sitemap line
- [ ] `https://your-site/sitemap.xml` → lists your pages
- [ ] `https://your-site/opengraph-image` → shows the branded gold share card
- [ ] `https://your-site/icon.svg` → shows the gold "S" favicon
- [ ] Paste your URL into **https://search.google.com/test/rich-results**
      → should detect **Person** + **WebSite** structured data ✅
- [ ] Paste your URL into **https://www.opengraph.xyz** → preview the social card

---

## ⏱️ Timeline & expectations

| When | What happens |
|------|--------------|
| Day 0 | Deploy + Search Console + Request Indexing |
| 1–3 days | Google crawls and indexes the page |
| 1–2 weeks | You start appearing for "shiraj mujawar" |
| 2–4 weeks | Ranking settles; with a custom domain you should reach the top |

**Reality check:** No one can *guarantee* #1 — but for your own name (low competition),
doing all of the above makes the top spot very likely, as long as no famous person
shares the exact name "Shiraj Mujawar".

---

## 🔁 Quick monthly maintenance

- Check Search Console → **Performance** to see which searches bring visitors.
- Keep the site updated (new projects) — fresh content signals an active site.
- Get one or two more backlinks over time (a blog post, a project feature, etc.).

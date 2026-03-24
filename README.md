# Corco Seguros — Static Site

Static marketing site for Corco Seguros. Built with HTML5 + CSS3 + Vanilla JS. No frameworks, no build step, no dependencies. Deploy-ready on Cloudflare Pages via GitHub.

---

## Deploy to Cloudflare Pages

1. Push this repo to GitHub (or connect the existing repo).
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project**.
3. Connect your GitHub account and select the `seguros_corco` repository.
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (root)
5. Click **Save and Deploy**.

The `_headers` file is picked up automatically by Cloudflare Pages — no extra configuration needed for security headers.

---

## Replacing the WhatsApp Number

Search the project for the placeholder number and replace with Ramon's real number:

```
Find:    50700000000
Replace: 507XXXXXXXX   ← Ramon's actual number, digits only, no spaces or dashes
```

Affected files:
- `index.html` — every `wa.me/50700000000` link (nav, service cards, otros servicios cards, table CTA, footer)

Test all links on mobile after replacing to confirm they open WhatsApp correctly.

---

## Swapping the Founder Photo

Replace `assets/founder-placeholder.svg` with a real photo:

1. Export the photo as `.jpg` or `.webp`, recommended size: **600 × 800 px** (3:4 ratio).
2. Drop the file in `assets/` — e.g. `assets/founder.jpg`.
3. In `index.html`, find:
   ```html
   <img src="assets/founder-placeholder.svg" ...>
   ```
   Change to:
   ```html
   <img src="assets/founder.jpg" alt="Ramon Corco — Fundador de Corco Seguros" width="600" height="800" loading="lazy" />
   ```
4. Delete `founder-placeholder.svg` once confirmed live.

---

## Sections Marked [PLACEHOLDER] — What They Need in v2

### Lead Magnet Card (`#contacto`)
- Marked: `<!-- LEAD MAGNET PLACEHOLDER — Phase 2 -->`
- Needs: Title and description of the actual guide (confirm with Ramon).
- Replace `[GUÍA PLACEHOLDER]` with the real guide name and a one-line teaser.

### Intake Form (`#corco-intake-form`)
- Currently has `preventDefault()` + `console.log` only — form does **not** submit anywhere.
- Phase 2: wire the Apps Script POST webhook (see section below).

### Comparative Table (`#coberturas`)
- Marked: `<!-- TABLE PLACEHOLDER v1 — content TBD -->`
- The 6 placeholder rows need real content confirmed with Ramon in revision 1.
- Columns: Renovación · Viaje · Catastrófico · Maternidad — these are confirmed.
- Rows and checkmarks are illustrative; replace before launch.

### Logo
- `assets/logo-placeholder.svg` is a wordmark SVG. Replace with final brand asset when available.

---

## Adding the Apps Script POST Webhook (Phase 2)

1. Deploy your Google Apps Script as a Web App and copy the endpoint URL.
2. In `js/main.js`, find:
   ```js
   // TODO Phase 2: POST to Apps Script webhook
   console.log('[Corco Seguros] Form submission intercepted...');
   ```
3. Replace with:
   ```js
   var data = new FormData(form);
   fetch('YOUR_APPS_SCRIPT_URL', {
     method: 'POST',
     body: data
   })
   .then(function(res) { return res.json(); })
   .then(function(json) {
     console.log('Form submitted:', json);
     // TODO: show success message to user
   })
   .catch(function(err) {
     console.error('Submission error:', err);
   });
   ```
4. Also remove the `novalidate` attribute from `<form>` in `index.html` and add proper HTML5 validation or client-side validation.

---

## File Structure

```
corco-seguros/
├── index.html                    ← Full single-page site
├── styles/
│   └── main.css                  ← All styles, mobile-first
├── js/
│   └── main.js                   ← Hamburger nav, form, smooth scroll
├── assets/
│   ├── logo-placeholder.svg      ← Navy + gold wordmark SVG
│   ├── logo-placeholder-light.svg← Light variant for dark backgrounds
│   └── founder-placeholder.svg   ← Gray rectangle placeholder
├── _headers                      ← Cloudflare Pages security headers
└── README.md
```

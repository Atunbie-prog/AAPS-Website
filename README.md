# Atunbi Associates Professional Services — Website

A six-page React + Vite site for AAPS, built around the brand's deep green
and gold palette, bold Poppins/Inter typography, and a CAC accreditation
"seal" used as the visual trust signature throughout.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Outputs a static `dist/` folder deployable to Netlify, Vercel, Cloudflare
Pages, GitHub Pages, or any static host.

## Design system

- **Color**: deep forest green (`--green-900`) as primary, gold (`--gold-500`)
  strictly reserved for CTAs and hover states, warm off-white page background.
- **Type**: Poppins (800/700 weight) for all headings, Inter for body text.
  Both are loaded via Google Fonts in `index.html`.
- **Layout**: every hero is a cinematic 90vh section with a real photo
  background and dark gradient scrim. Content is capped at 1200px
  (`--content-max`), prose blocks at 800px (`--prose-max`). Section padding
  is a generous `6rem 2rem` by default.
- **Icons**: `lucide-react` throughout — no emoji anywhere in the codebase.
- **Signature element**: the "CAC Accredited Agent" seal badge appears in
  the navbar, every hero, and the footer as a consistent trust marker.

## Interactive details

- **Rotating hero word** (`src/components/RotatingWord.jsx`) — on the Home
  page hero, a single word fades between "Registered.", "Compliant.",
  "Secured.", and "Funded." every 5 seconds. Respects
  `prefers-reduced-motion` by not animating.
- **Testimonial marquee** (`src/components/TestimonialMarquee.jsx`) — an
  infinite horizontal scroll built with a duplicated-track CSS keyframe
  loop, pauses on hover, and falls back to a manually scrollable row under
  `prefers-reduced-motion`.

## Pages included

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/how-we-work` — How We Work
- `/blog` and `/blog/:slug` — Blog / Resources (placeholder posts)
- `/contact` — Contact Us

## Still needed before this can go live

Flagged directly in `src/data/content.js` as well:

1. **Logo file** — currently an inline SVG shield placeholder in
   `Navbar.jsx` / `public/favicon.svg`. Replace with the brand-approved logo.
2. **Contact details** — phone, WhatsApp number, business email, exact
   office address, and social URLs are blank placeholders in the `practice`
   object in `src/data/content.js`.
3. **Principal photograph** — `About.jsx` has a placeholder box where the
   portrait should go (left as an honest placeholder rather than a stock
   photo, since it depicts a specific real person).
4. **Stock imagery licensing** — all hero and section images currently
   pull live from Unsplash via `src/data/images.js`. They're free to use
   under the Unsplash License, but swap in licensed/brand photography
   whenever it's ready — just replace the URL strings in that one file.
5. **Contact form backend** — `ContactForm.jsx` validates and shows a
   success message but doesn't send email yet. Wire it to a backend
   (Formspree, EmailJS, or a small serverless function).
6. **Google Map embed** — `Contact.jsx` has a placeholder box; replace with
   a real Google Maps iframe once the exact address is confirmed.
7. **Blog content** — only 3 placeholder posts exist. Add more to
   `blogInfo.placeholderPosts` in `src/data/content.js`, or move to a CMS
   if non-technical content updates are needed.
8. **Analytics** — no tracking snippet installed yet.
9. **Full SEO pass** — Open Graph tags, sitemap.xml, robots.txt.

## Note on the content platform

This is a static React site, so any future content change (new blog post,
copy edit) needs a developer or a rebuild/redeploy — there's no in-browser
CMS. If non-technical content updates are a requirement, consider adding a
headless CMS (Sanity, Contentful) or a Markdown-based blog pipeline on top
of this foundation.

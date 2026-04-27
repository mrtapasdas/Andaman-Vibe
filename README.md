# Andaman Vibe — Luxury Andaman Tour Website

This is a static, responsive website for a luxury Andaman tour operator. It includes:
- index.html — the site markup
- css/styles.css — responsive styles and theme variables
- js/main.js — client-side interactivity (smooth scroll, booking form handling, modal)

Features
- Polished hero with large imagery and CTA
- Three signature packages with booking flow
- Sample 6-day itinerary and photo gallery
- Accessible markup and keyboard-friendly interactions
- Booking form with client-side validation and localStorage demo

How to run locally
1. Clone the repo or add the files to your project root.
2. Serve with any static server. Examples:
   - Python 3: `python -m http.server 8000`
   - Node (http-server): `npx http-server -c-1`
3. Open http://localhost:8000 in your browser.

Deploy
- Works with GitHub Pages, Netlify, Vercel — just push the branch and configure a static site.
- For production, wire the booking form to your backend (example: POST /api/bookings) or a serverless function and implement proper validation + anti-spam.

Customization
- Replace images with high-resolution assets (in /assets or a CDN).
- Update prices & package details in index.html.
- Connect the booking form to your CRM, email API, or booking system.
- Add analytics/tracking only after confirming privacy/consent needs.

Accessibility & performance notes
- The layout uses semantic elements and aria attributes for navigation and live regions.
- Images are currently hotlinked to Unsplash for demo; host optimized images and add srcset for responsive sizes.
- Consider adding lazy-loading for gallery images and using compressed images for production.

If you'd like, I can:
- Commit these files into your GitHub repository (I can't push from this session — I can give the exact commands or a patch).
- Add a deploy configuration for GitHub Pages / Netlify.
- Create additional pages (About, Terms, Privacy) or set up a minimal backend endpoint to accept booking submissions.

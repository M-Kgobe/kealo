# Kealo HR Solutions – Website

This is a ready-to-run React (Vite) + Tailwind project for **Kealo HR Solutions**, including your logo, services, detailed policies, and a working contact form using Formspree.

## Quick Start
1. Install Node.js (LTS): https://nodejs.org
2. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the shown local URL in your browser to view the site.

## Build for Production
```bash
npm run build
npm run preview
```

## Logo
Your logo is in `public/kealo-logo.png`. Replace it if you have an updated version.

## Contact Form (Formspree)
The Quick Inquiry form posts to Formspree. Replace the action URL in `src/App.jsx` with your own Formspree endpoint if needed:
```html
<form action="https://formspree.io/f/mayvkdln" method="POST">
```

## Tailwind
Tailwind is already configured. You can adjust theme colors in `tailwind.config.js`.
